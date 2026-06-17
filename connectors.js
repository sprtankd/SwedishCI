/* ============================================================================
   Swedish CI — connectors.js
   Connector Challenge mode controller.
   ========================================================================== */
(function () {
  "use strict";
  var S = window.SvCI;
  S.boot();
  S.gameHeader("#header", "connectors");

  var ALL = (window.SvCI_CONNECTORS || []).slice();

  var CAT_INFO = {
    All: { sv: "Alla", en: "All", icon: "🌐" },
    addition: { sv: "Tillägg", en: "Addition", icon: "➕" },
    contrast: { sv: "Motsats", en: "Contrast", icon: "🔄" },
    cause: { sv: "Orsak", en: "Cause", icon: "ℹ️" },
    consequence: { sv: "Följd", en: "Consequence", icon: "➔" },
    concession: { sv: "Eftergift", en: "Concession", icon: "🛡️" },
    time: { sv: "Tid & Ordning", en: "Time & Order", icon: "⏱" },
    example: { sv: "Exempel", en: "Example", icon: "💡" }
  };

  var state = {
    selectedCategory: "All", // All, addition, contrast, etc., mistakes
    queue: [],
    index: 0,
    score: 0,
    mistakesInSession: 0
  };

  var views = {
    setup: S.$("#view-setup"),
    game: S.$("#view-game"),
    summary: S.$("#view-summary")
  };

  function showView(name) {
    Object.keys(views).forEach(function (k) {
      views[k].classList.toggle("hidden", k !== name);
    });
    S.Gloss.hideTip();
    var v = views[name];
    v.classList.remove("view-enter");
    void v.offsetWidth;
    v.classList.add("view-enter");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function getCategoryCount(cat) {
    if (cat === "All") {
      return ALL.reduce(function (sum, c) { return sum + c.exercises.length; }, 0);
    }
    return ALL.filter(function (c) { return c.category === cat; })
              .reduce(function (sum, c) { return sum + c.exercises.length; }, 0);
  }

  function shuffle(arr) {
    var array = arr.slice();
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  // ---- Setup View Rendering ------------------------------------------------
  function renderTabs() {
    var host = S.$("#level-tabs");
    host.innerHTML = "";

    var mistakes = S.Store.get("progress.connectors.mistakes", []);

    var keys = ["All", "addition", "contrast", "cause", "consequence", "concession", "time", "example"];
    keys.forEach(function (k) {
      var info = CAT_INFO[k];
      var count = getCategoryCount(k);

      var btn = S.el("button", {
        class: "level-tab" + (k === state.selectedCategory ? " active" : ""),
        role: "tab",
        onclick: function () {
          state.selectedCategory = k;
          renderTabs();
          updateSetupCard();
        }
      }, [
        S.el("span", { text: info.icon + " " + info.sv }),
        S.el("span", { class: "faint", style: "font-size:.7rem;display:block;", text: count + " st" })
      ]);
      host.appendChild(btn);
    });

    if (mistakes.length > 0) {
      var btnMistake = S.el("button", {
        class: "level-tab" + (state.selectedCategory === "mistakes" ? " active" : ""),
        role: "tab",
        onclick: function () {
          state.selectedCategory = "mistakes";
          renderTabs();
          updateSetupCard();
        }
      }, [
        S.el("span", { text: "⚠️ Granska fel" }),
        S.el("span", { class: "faint", style: "font-size:.7rem;display:block;", text: mistakes.length + " st" })
      ]);
      host.appendChild(btnMistake);
    }
  }

  function updateSetupCard() {
    var title = S.$("#setup-title");
    var info = S.$("#setup-info");
    var btn = S.$("#start-btn");

    var mistakes = S.Store.get("progress.connectors.mistakes", []);
    var count = getCategoryCount(state.selectedCategory);
    var comp = Object.keys(S.Store.get("progress.connectors.completed", {})).length;

    if (state.selectedCategory === "All") {
      title.textContent = "Bindeordsutmaningen — Alla";
      info.textContent = "Öva på alla " + count + " meningar med bindeord. Din totala utveckling: " + comp + "/30 bindeord mötta.";
      btn.disabled = false;
    } else if (state.selectedCategory === "mistakes") {
      title.textContent = "Granska dina fel";
      info.textContent = "Repetera meningar med de " + mistakes.length + " bindeord du haft svårt med tidigare.";
      btn.disabled = mistakes.length === 0;
    } else {
      var catName = CAT_INFO[state.selectedCategory].sv;
      title.textContent = "Kategori: " + catName;
      info.textContent = "Träna på de " + count + " meningarna inom kategorin " + catName + ".";
      btn.disabled = count === 0;
    }
  }

  function startSession() {
    var exercisesList = [];
    var mistakes = S.Store.get("progress.connectors.mistakes", []);

    var filteredConnectors = ALL;
    if (state.selectedCategory !== "All" && state.selectedCategory !== "mistakes") {
      filteredConnectors = ALL.filter(function (c) { return c.category === state.selectedCategory; });
    } else if (state.selectedCategory === "mistakes") {
      filteredConnectors = ALL.filter(function (c) { return mistakes.indexOf(c.id) !== -1; });
    }

    filteredConnectors.forEach(function (c) {
      c.exercises.forEach(function (ex) {
        exercisesList.push({
          connectorId: c.id,
          connectorName: c.connector,
          connectorEn: c.connectorEn,
          category: c.category,
          level: c.level,
          text: ex.text,
          textEn: ex.textEn,
          options: ex.options,
          correct: ex.correct,
          explanation: ex.explanation
        });
      });
    });

    if (!exercisesList.length) {
      S.toast("Inga frågor tillgängliga i den här kategorin.", "err");
      return;
    }

    state.queue = shuffle(exercisesList);
    state.index = 0;
    state.score = 0;
    state.mistakesInSession = 0;

    renderQuestion();
    showView("game");
  }

  // ---- Game Loop -----------------------------------------------------------
  function renderQuestion() {
    if (state.index >= state.queue.length) {
      finishSession();
      return;
    }

    var ex = state.queue[state.index];

    // Reset components
    S.$("#card-sentence-en").classList.add("hidden");
    S.$("#card-explanation").classList.add("hidden");
    S.$("#next-btn").classList.add("hidden");

    // Headings / Pills
    var catName = CAT_INFO[ex.category].sv;
    var catPill = S.$("#card-category-pill");
    catPill.textContent = CAT_INFO[ex.category].icon + " " + catName;
    S.$("#card-level-pill").textContent = ex.level;

    // Swedish Sentence text (wrap gap ___ in span)
    var escapedText = S.escapeHtml(ex.text);
    S.$("#card-sentence").innerHTML = escapedText.replace("___", '<span class="gap">___</span>');
    S.$("#card-sentence-en").textContent = ex.textEn;

    // Explanation panel text
    S.$("#explain-body").textContent = ex.explanation;

    // Render option buttons
    var optHost = S.$("#card-options");
    optHost.innerHTML = "";

    var answered = false;
    ex.options.forEach(function (opt, oi) {
      var optBtn = S.el("button", {
        class: "option-btn",
        type: "button",
        text: opt,
        onclick: function () {
          if (answered) return;
          answered = true;

          var correct = oi === ex.correct;
          var buttons = S.$$(".option-btn", optHost);

          buttons.forEach(function (btn, bi) {
            btn.disabled = true;
            if (bi === ex.correct) {
              btn.classList.add("correct");
            }
            if (bi === oi && !correct) {
              btn.classList.add("wrong");
            }
          });

          // Show explanations and english sentence
          S.$("#card-sentence-en").classList.remove("hidden");
          S.$("#card-explanation").classList.remove("hidden");
          S.$("#next-btn").classList.remove("hidden");

          // Save results
          var s = S.Store.load();
          s.progress.connectors.done = (s.progress.connectors.done || 0) + 1;

          var activeMistakes = S.Store.get("progress.connectors.mistakes", []);

          if (correct) {
            state.score++;
            S.Sfx.correct();
            s.progress.connectors.correct = (s.progress.connectors.correct || 0) + 1;

            // Remove from mistakes if correct
            var mIdx = activeMistakes.indexOf(ex.connectorId);
            if (mIdx !== -1) {
              activeMistakes.splice(mIdx, 1);
            }
          } else {
            state.mistakesInSession++;
            S.Sfx.wrong();
            // Save mistake
            if (activeMistakes.indexOf(ex.connectorId) === -1) {
              activeMistakes.push(ex.connectorId);
            }
          }

          // Track completed bindeord IDs
          s.progress.connectors.completed = s.progress.connectors.completed || {};
          s.progress.connectors.completed[ex.connectorId] = true;

          s.progress.connectors.mistakes = activeMistakes;
          S.Store.save();

          updateLabels();
        }
      });
      optHost.appendChild(optBtn);
    });

    updateLabels();
  }

  function updateLabels() {
    S.$("#game-progress-label").textContent = "Fråga " + (state.index + 1) + " av " + state.queue.length;
    var currentPct = state.index ? Math.round((state.score / state.index) * 100) : 0;
    S.$("#game-score-label").textContent = "Rätt: " + currentPct + "%";

    var barPct = Math.round(((state.index) / state.queue.length) * 100);
    S.$("#game-progress-bar").style.width = barPct + "%";
  }

  function finishSession() {
    var pct = state.queue.length ? Math.round((state.score / state.queue.length) * 100) : 0;
    S.$("#summary-score-pct").textContent = pct + "%";
    S.$("#summary-score-text").textContent = "Du svarade rätt på " + state.score + " av " + state.queue.length + " frågor.";

    var mInfo = S.$("#summary-mistakes-info");
    mInfo.innerHTML = "";

    var activeMistakes = S.Store.get("progress.connectors.mistakes", []);
    if (state.mistakesInSession > 0) {
      mInfo.appendChild(S.el("p", {
        text: "Du hade fel på " + state.mistakesInSession + " frågor. Dessa sparades för granskning."
      }));
    } else if (state.selectedCategory === "mistakes" && activeMistakes.length === 0) {
      mInfo.appendChild(S.el("p", {
        class: "ok",
        style: "color:var(--green);font-weight:700;",
        text: "Underbart! Du har rensat hela din fellista för bindeord! 🎉"
      }));
    } else {
      mInfo.appendChild(S.el("p", { text: "Bra kämpat!" }));
    }

    S.logSession();

    showView("summary");
  }

  // ---- Event Handlers ------------------------------------------------------
  S.$("#start-btn").addEventListener("click", startSession);
  S.$("#quit-btn").addEventListener("click", function () {
    if (confirm("Vill du avbryta utmaningen?")) {
      renderTabs();
      updateSetupCard();
      showView("setup");
    }
  });

  S.$("#next-btn").addEventListener("click", function () {
    state.index++;
    renderQuestion();
  });

  S.$("#restart-btn").addEventListener("click", function () {
    startSession();
  });

  S.$("#summary-quit-btn").addEventListener("click", function () {
    renderTabs();
    updateSetupCard();
    showView("setup");
  });

  // ---- Init ----------------------------------------------------------------
  renderTabs();
  updateSetupCard();
  showView("setup");
})();
