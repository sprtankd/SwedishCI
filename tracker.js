/* ============================================================================
   Swedish CI — tracker.js
   Controller for the Vocab Tracker Dashboard.
   Manages word retrieval, stats calculation, CEFR level estimation, live
   filtering/sorting, TTS integration, and CSV exporting.
   ========================================================================== */
(function () {
  "use strict";

  var S = window.SvCI;
  if (!S) {
    console.error("SvCI shared infrastructure not loaded.");
    return;
  }

  // Active filter/sort state
  var state = {
    words: [],          // array of {word, count, status, firstSeen, lastSeen, contexts}
    filteredWords: [],
    searchQuery: "",
    activeFilter: "all",
    activeSort: "alpha"
  };

  // Resolved titles and translations lookup maps
  var contextMap = {};
  var translationMap = {};

  // Initialize page
  function init() {
    S.boot();
    S.gameHeader("#header", "tracker");

    buildLookupMaps();
    loadWordsData();

    if (state.words.length === 0) {
      showEmptyState();
      return;
    }

    renderStats();
    renderCefrLevel();
    bindEvents();
    
    // Initial display
    applyFiltersAndSort();
  }

  // Gather titles and translation entries from loaded data files
  function buildLookupMaps() {
    // 1. Context ID resolution
    if (window.SvCI_STORIES) {
      window.SvCI_STORIES.forEach(function (s) {
        contextMap[s.id] = { title: s.title, type: "reader", level: s.level };
        extractGlossary(s.glossary);
      });
    }
    if (window.SvCI_NEWS) {
      window.SvCI_NEWS.forEach(function (n) {
        contextMap[n.id] = { title: n.title, type: "news", level: n.level };
        extractGlossary(n.glossary);
      });
    }
    if (window.SvCI_LISTENING) {
      window.SvCI_LISTENING.forEach(function (l) {
        contextMap[l.id] = { title: l.title, type: "listening", level: l.level };
        extractGlossary(l.glossary);
      });
    }
  }

  function extractGlossary(gloss) {
    if (!gloss) return;
    Object.keys(gloss).forEach(function (svWord) {
      var norm = S.normalizeWord(svWord);
      if (norm) {
        translationMap[norm] = gloss[svWord];
      }
    });
  }

  // Load encountered words from namespaced localStorage
  function loadWordsData() {
    var rawStore = S.Store.load().words || {};
    var arr = [];
    Object.keys(rawStore).forEach(function (w) {
      var entry = rawStore[w];
      arr.push({
        word: w,
        count: entry.count || 0,
        status: S.encounterStatus(entry.count || 0),
        firstSeen: entry.firstSeen || Date.now(),
        lastSeen: entry.lastSeen || Date.now(),
        contexts: entry.contexts || []
      });
    });
    state.words = arr;
  }

  function showEmptyState() {
    S.$("#empty-state").classList.remove("hidden");
    S.$(".tracker-stats").classList.add("hidden");
    S.$(".level-meter-card").classList.add("hidden");
    S.$(".tracker-toolbar").classList.add("hidden");
    S.$("#word-grid").classList.add("hidden");
  }

  // Render stats cards
  function renderStats() {
    var ws = S.wordStats();
    var familiarKnownCount = ws.familiar + ws.known;
    var pct = ws.total ? Math.round((familiarKnownCount / ws.total) * 100) : 0;

    S.$("#stat-total").textContent = String(ws.total);
    S.$("#stat-known-pct").textContent = pct + "%";
    S.$("#stat-known").textContent = String(ws.known);
    S.$("#stat-familiar").textContent = String(ws.familiar);
    S.$("#stat-met").textContent = String(ws.met);

    // Update filter badges counts
    S.$("#count-all").textContent = String(state.words.length);
    S.$("#count-met").textContent = String(ws.met);
    S.$("#count-familiar").textContent = String(ws.familiar);
    S.$("#count-known").textContent = String(ws.known);
  }

  // Calculate and display CEFR Level Estimate
  function renderCefrLevel() {
    var ws = S.wordStats();
    var familiarKnownCount = ws.familiar + ws.known;

    var level = "Nybörjare";
    var levelEn = "Beginner";
    var description = "";
    var fillPct = 0;

    // Piecewise interpolation for progress bar fill:
    // A2 threshold = 200 (18.2% mark)
    // B1 threshold = 700 (63.6% mark)
    // B1+ threshold = 1100 (100% mark)
    if (familiarKnownCount < 200) {
      level = "Nybörjare";
      levelEn = "Beginner";
      fillPct = (familiarKnownCount / 200) * 18.2;
      description = "Du håller på att bygga upp grunden! Nå <strong>200 bekanta eller kända ord</strong> för att nå nivå <strong>A2</strong>. Fortsätt läsa enkla berättelser och lyssna på dialoger!";
    } else if (familiarKnownCount < 700) {
      level = "Nivå A2 (SFI Kurs C)";
      levelEn = "Elementary (SFI C)";
      var part = (familiarKnownCount - 200) / 500; // range 0 to 1
      fillPct = 18.2 + part * (63.6 - 18.2);
      description = "Bra jobbat! Du har nått <strong>A2-nivå</strong>. Du kan förstå vanliga fraser om vardagliga ämnen. Nästa milstolpe är <strong>B1 (700 ord)</strong>.";
    } else if (familiarKnownCount < 1100) {
      level = "Nivå B1 (SFI Kurs D)";
      levelEn = "Intermediate (SFI D)";
      var part = (familiarKnownCount - 700) / 400; // range 0 to 1
      fillPct = 63.6 + part * (100 - 63.6);
      description = "Fantastiskt! Du är på <strong>B1-nivå</strong>. Du kan läsa nyhetsartiklar och förstå det mesta i naturligt tal. Nå <strong>1100 ord</strong> för att uppnå <strong>B1+ (Mer avancerad)</strong>.";
    } else {
      level = "Nivå B1+ (Klar för SFI D)";
      levelEn = "Vantage / B1+";
      fillPct = 100;
      description = "Utmärkt! Du har uppnått <strong>B1+-nivå</strong> med ett brett ordförråd. Du har stark läsförståelse och är väl förberedd för avancerade studier och diskussioner!";
    }

    S.$("#cefr-badge").innerHTML = level + ' <span class="faint" style="font-size: .8rem;">· ' + levelEn + "</span>";
    S.$("#cefr-fill").style.width = fillPct + "%";
    S.$("#cefr-desc").innerHTML = description;
  }

  // Bind interaction events
  function bindEvents() {
    // Search input
    S.$("#search-input").addEventListener("input", function (e) {
      state.searchQuery = e.target.value.toLowerCase().trim();
      applyFiltersAndSort();
    });

    // Filter tabs
    S.$$(".filter-tab").forEach(function (tab) {
      tab.addEventListener("click", function () {
        S.$$(".filter-tab").forEach(function (t) {
          t.classList.remove("active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        state.activeFilter = tab.getAttribute("data-filter");
        applyFiltersAndSort();
      });
    });

    // Sort select
    S.$("#sort-select").addEventListener("change", function (e) {
      state.activeSort = e.target.value;
      applyFiltersAndSort();
    });

    // Export button
    S.$("#export-btn").addEventListener("click", exportToCsv);

    // Detail modal closing
    S.$("#detail-close").addEventListener("click", closeDetailPanel);
    S.$("#detail-overlay").addEventListener("click", function (e) {
      if (e.target === S.$("#detail-overlay")) {
        closeDetailPanel();
      }
    });

    // Keyboard support for ESC key
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !S.$("#detail-overlay").classList.contains("hidden")) {
        closeDetailPanel();
      }
    });
  }

  // Filter and sort core logic
  function applyFiltersAndSort() {
    var query = state.searchQuery;
    var filter = state.activeFilter;
    var sort = state.activeSort;

    // 1. Filtering
    var filtered = state.words.filter(function (item) {
      // Search match
      if (query && item.word.toLowerCase().indexOf(query) === -1) {
        return false;
      }
      // Status filter match
      if (filter !== "all" && item.status !== filter) {
        return false;
      }
      return true;
    });

    // 2. Sorting
    filtered.sort(function (a, b) {
      if (sort === "alpha") {
        return a.word.localeCompare(b.word, "sv");
      }
      if (sort === "freq-desc") {
        if (b.count !== a.count) return b.count - a.count;
        return a.word.localeCompare(b.word, "sv");
      }
      if (sort === "freq-asc") {
        if (a.count !== b.count) return a.count - b.count;
        return a.word.localeCompare(b.word, "sv");
      }
      if (sort === "recent") {
        if (b.lastSeen !== a.lastSeen) return b.lastSeen - a.lastSeen;
        return a.word.localeCompare(b.word, "sv");
      }
      if (sort === "oldest") {
        if (a.firstSeen !== b.firstSeen) return a.firstSeen - b.firstSeen;
        return a.word.localeCompare(b.word, "sv");
      }
      return 0;
    });

    state.filteredWords = filtered;
    renderGrid();
  }

  // Render word list into the grid
  function renderGrid() {
    var grid = S.$("#word-grid");
    grid.innerHTML = "";

    if (state.filteredWords.length === 0) {
      grid.appendChild(S.el("div", {
        class: "muted center",
        style: "grid-column: 1 / -1; padding: 40px 0;",
        text: "Inga ord matchar din sökning eller ditt filter."
      }));
      return;
    }

    state.filteredWords.forEach(function (w, idx) {
      var pill = S.el("div", {
        class: "word-pill " + w.status,
        role: "button",
        tabIndex: 0,
        "aria-label": w.word + ", mött " + w.count + " gånger, status " + w.status
      }, [
        S.el("span", { text: w.word }),
        S.el("span", { class: "count-badge", text: String(w.count) })
      ]);

      // Keyboard activation
      pill.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openDetailPanel(w);
        }
      });

      // Mouse click
      pill.addEventListener("click", function () {
        openDetailPanel(w);
      });

      // Apply staggering delay for animation
      pill.style.setProperty("--delay", String(Math.min(idx, 60)));

      grid.appendChild(pill);
    });
  }

  // Open detail overlay panel
  function openDetailPanel(wordObj) {
    var overlay = S.$("#detail-overlay");
    var translation = translationMap[wordObj.word] || "-";

    S.$("#detail-word").textContent = wordObj.word;
    S.$("#detail-translation").textContent = translation;

    // Status pill
    var statusPill = S.$("#detail-status-pill");
    statusPill.className = "pill " + wordObj.status;
    var statusLabels = {
      new: "Ny · New",
      met: "Mött · Met",
      familiar: "Bekant · Familiar",
      known: "Känd · Known"
    };
    statusPill.textContent = statusLabels[wordObj.status] || "Okänd";
    
    // Encounter text
    var countText = "Mött " + wordObj.count + " gång" + (wordObj.count === 1 ? "" : "er");
    S.$("#detail-count-text").textContent = countText;

    // Date formatting helper
    function formatDate(ts) {
      var d = new Date(ts);
      return d.getFullYear() + "-" +
             String(d.getMonth() + 1).padStart(2, "0") + "-" +
             String(d.getDate()).padStart(2, "0") + " " +
             String(d.getHours()).padStart(2, "0") + ":" +
             String(d.getMinutes()).padStart(2, "0");
    }

    S.$("#detail-first-seen").textContent = formatDate(wordObj.firstSeen);
    S.$("#detail-last-seen").textContent = formatDate(wordObj.lastSeen);

    // List contexts
    var list = S.$("#detail-contexts");
    list.innerHTML = "";

    if (wordObj.contexts.length === 0) {
      list.appendChild(S.el("li", { class: "muted", style: "font-size:0.9rem;", text: "Inga sparade sammanhang." }));
    } else {
      wordObj.contexts.forEach(function (cId) {
        var info = contextMap[cId];
        var text = cId;
        var modeClass = "reader";
        var label = "Text";

        if (info) {
          text = info.title;
          modeClass = info.type;
          
          var typeLabels = {
            reader: "Läsning",
            news: "Nyhet",
            listening: "Hör"
          };
          label = typeLabels[info.type] || "Text";
          
          if (info.level) {
            label += " (" + info.level + ")";
          }
        }

        list.appendChild(S.el("li", { class: "context-item" }, [
          S.el("span", { class: "context-badge " + modeClass, text: label }),
          S.el("span", { text: text })
        ]));
      });
    }

    // TTS voice trigger
    var sayBtn = S.$("#detail-speech-btn");
    // Remove old listeners by replacing the button clone
    var newSayBtn = sayBtn.cloneNode(true);
    sayBtn.parentNode.replaceChild(newSayBtn, sayBtn);
    newSayBtn.addEventListener("click", function () {
      S.Speech.say(wordObj.word);
    });

    // Make active
    overlay.classList.add("active");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // disable background scrolling
  }

  function closeDetailPanel() {
    var overlay = S.$("#detail-overlay");
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // enable background scrolling
  }

  // Export encountered words to CSV format
  function exportToCsv() {
    if (state.words.length === 0) return;

    var csvRows = ["Ord,Antal möten,Status,Först sett,Senast sett,Sammanhang"];
    
    state.words.forEach(function (w) {
      var firstStr = new Date(w.firstSeen).toISOString().slice(0, 10);
      var lastStr = new Date(w.lastSeen).toISOString().slice(0, 10);
      
      // Map context IDs to titles
      var resolvedContexts = w.contexts.map(function (cId) {
        var info = contextMap[cId];
        return info ? info.title + " (" + info.level + ")" : cId;
      });

      var row = [
        '"' + w.word.replace(/"/g, '""') + '"',
        w.count,
        w.status,
        firstStr,
        lastStr,
        '"' + resolvedContexts.join("; ").replace(/"/g, '""') + '"'
      ];
      csvRows.push(row.join(","));
    });

    var csvContent = "\ufeff" + csvRows.join("\n"); // add BOM for UTF-8 compatibility in Excel
    var blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    var url = URL.createObjectURL(blob);
    
    var link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "svenska_ci_ordbok.csv");
    link.style.visibility = "hidden";
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    S.toast("Ordbok exporterad till CSV!", "ok");
  }

  // Bootstrap page run
  document.addEventListener("DOMContentLoaded", init);

})();
