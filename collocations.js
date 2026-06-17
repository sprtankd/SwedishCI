/* ============================================================================
   Swedish CI — collocations.js
   Collocation Cards mode controller.
   ========================================================================== */
(function () {
  "use strict";
  var S = window.SvCI;
  S.boot();
  S.gameHeader("#header", "collocations");

  var ALL = (window.SvCI_COLLOCATIONS || []).slice();

  var state = {
    selectedLevel: "A2", // A2, B1, All, mistakes
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

  // Calculate A2 collocation correctness
  function getA2Progress() {
    var a2Colls = ALL.filter(function (c) { return c.level === "A2"; });
    if (!a2Colls.length) return 100;
    var correctMap = S.Store.get("progress.collocations.correct_items", {});
    var a2CorrectCount = a2Colls.filter(function (c) { return !!correctMap[c.id]; }).length;
    return {
      count: a2CorrectCount,
      total: a2Colls.length,
      pct: Math.round((a2CorrectCount / a2Colls.length) * 100)
    };
  }

  function isB1Unlocked() {
    var progress = getA2Progress();
    return progress.pct >= 70;
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

  // ---- Setup view rendering ------------------------------------------------
  function renderTabs() {
    var host = S.$("#level-tabs");
    host.innerHTML = "";

    var b1Unlocked = isB1Unlocked();
    var a2Prog = getA2Progress();
    var mistakes = S.Store.get("progress.collocations.mistakes", []);

    var tabs = [
      { id: "A2", label: "A2", subtitle: "Grundläggande", count: ALL.filter(c => c.level === "A2").length },
      { id: "B1", label: b1Unlocked ? "B1" : "🔒 B1", subtitle: "SFI D-förberedelse", count: ALL.filter(c => c.level === "B1").length, disabled: !b1Unlocked },
      { id: "All", label: b1Unlocked ? "Alla" : "🔒 Alla", subtitle: "Hela kortleken", count: ALL.length, disabled: !b1Unlocked }
    ];

    if (mistakes.length > 0) {
      tabs.push({ id: "mistakes", label: "Granska fel (" + mistakes.length + ")", subtitle: "Repetera svåra ord" });
    }

    tabs.forEach(function (t) {
      var btn = S.el("button", {
        class: "level-tab" + (t.id === state.selectedLevel ? " active" : ""),
        role: "tab",
        onclick: function () {
          if (t.disabled) {
            S.toast("Lås upp B1 genom att klara minst 70% av A2-korten (Du har " + a2Prog.pct + "%).", "err");
            return;
          }
          state.selectedLevel = t.id;
          renderTabs();
          updateSetupCard();
        }
      }, [
        S.el("span", { text: t.label }),
        S.el("span", { class: "faint", style: "font-size:.7rem;display:block;", text: t.subtitle })
      ]);
      if (t.disabled) btn.style.opacity = "0.5";
      host.appendChild(btn);
    });
  }

  function updateSetupCard() {
    var title = S.$("#setup-title");
    var info = S.$("#setup-info");
    var btn = S.$("#start-btn");

    var mistakes = S.Store.get("progress.collocations.mistakes", []);
    var a2Prog = getA2Progress();

    if (state.selectedLevel === "A2") {
      title.textContent = "A2 Kollokationskort";
      info.textContent = "Totalt " + ALL.filter(c => c.level === "A2").length + " kort. Passar för SFI C. Din utveckling: " + a2Prog.count + "/" + a2Prog.total + " klara (" + a2Prog.pct + "%).";
      btn.disabled = false;
    } else if (state.selectedLevel === "B1") {
      title.textContent = "B1 Kollokationskort";
      info.textContent = "Totalt " + ALL.filter(c => c.level === "B1").length + " kort. Passar för SFI D.";
      btn.disabled = false;
    } else if (state.selectedLevel === "All") {
      title.textContent = "Alla Kollokationskort";
      info.textContent = "Totalt " + ALL.length + " kort i leken.";
      btn.disabled = false;
    } else if (state.selectedLevel === "mistakes") {
      title.textContent = "Granska dina fel";
      info.textContent = "Repetera de " + mistakes.length + " kort som du svarat fel på tidigare.";
      btn.disabled = mistakes.length === 0;
    }
  }

  function startSession() {
    var cards = [];
    var mistakes = S.Store.get("progress.collocations.mistakes", []);

    if (state.selectedLevel === "A2") {
      cards = ALL.filter(c => c.level === "A2");
    } else if (state.selectedLevel === "B1") {
      cards = ALL.filter(c => c.level === "B1");
    } else if (state.selectedLevel === "All") {
      cards = ALL;
    } else if (state.selectedLevel === "mistakes") {
      cards = ALL.filter(c => mistakes.indexOf(c.id) !== -1);
    }

    if (!cards.length) {
      S.toast("Inga kort att visa.", "err");
      return;
    }

    state.queue = shuffle(cards);
    state.index = 0;
    state.score = 0;
    state.mistakesInSession = 0;

    renderCard();
    showView("game");
  }

  // ---- Game logic ----------------------------------------------------------
  function renderCard() {
    if (state.index >= state.queue.length) {
      finishSession();
      return;
    }

    var c = state.queue[state.index];

    // Reset views
    S.$("#card-sentence-en").classList.add("hidden");
    S.$("#next-btn").classList.add("hidden");

    // Headings
    var headerText = c.collocation.replace(c.blank, "___");
    S.$("#card-header").textContent = headerText;
    S.$("#card-header-en").textContent = c.collocationEn;

    // Type and level pills
    var typeText = c.type === "particle-verb" ? "Partikelverb" : "Preposition";
    var typePill = S.$("#card-type-pill");
    typePill.textContent = typeText;
    typePill.className = "pill " + (c.type === "particle-verb" ? "blue" : "pink");
    S.$("#card-level-pill").textContent = c.level;

    // Display sentence with highlighted gap
    var ex = c.examples[0] || { sentence: "", sentenceEn: "" };
    var sentenceEscaped = S.escapeHtml(ex.sentence);
    S.$("#card-sentence").innerHTML = sentenceEscaped.replace("___", '<span class="gap">___</span>');
    S.$("#card-sentence-en").textContent = ex.sentenceEn;

    // Render options
    var optHost = S.$("#card-options");
    optHost.innerHTML = "";

    var answered = false;
    c.options.forEach(function (opt, oi) {
      var optBtn = S.el("button", {
        class: "option-btn",
        type: "button",
        text: opt,
        onclick: function () {
          if (answered) return;
          answered = true;

          var correct = oi === c.correct;
          var buttons = S.$$(".option-btn", optHost);

          buttons.forEach(function (btn, bi) {
            btn.disabled = true;
            if (bi === c.correct) {
              btn.classList.add("correct");
            }
            if (bi === oi && !correct) {
              btn.classList.add("wrong");
            }
          });

          // Show answer explanation / English sentence
          S.$("#card-sentence-en").classList.remove("hidden");
          S.$("#next-btn").classList.remove("hidden");

          // Persistence & progress
          var s = S.Store.load();
          s.progress.collocations.done = (s.progress.collocations.done || 0) + 1;

          var activeMistakes = S.Store.get("progress.collocations.mistakes", []);
          var correctMap = S.Store.get("progress.collocations.correct_items", {});

          if (correct) {
            state.score++;
            S.Sfx.correct();
            s.progress.collocations.correct = (s.progress.collocations.correct || 0) + 1;
            correctMap[c.id] = true;
            s.progress.collocations.correct_items = correctMap;

            // Remove from mistakes if correct
            var mIdx = activeMistakes.indexOf(c.id);
            if (mIdx !== -1) {
              activeMistakes.splice(mIdx, 1);
            }
          } else {
            state.mistakesInSession++;
            S.Sfx.wrong();
            // Save mistake
            if (activeMistakes.indexOf(c.id) === -1) {
              activeMistakes.push(c.id);
            }
          }

          // Save tracking of unique items completed
          s.progress.collocations.completed = s.progress.collocations.completed || {};
          s.progress.collocations.completed[c.id] = true;

          s.progress.collocations.mistakes = activeMistakes;
          S.Store.save();

          updateLabels();
        }
      });
      optHost.appendChild(optBtn);
    });

    updateLabels();
  }

  function updateLabels() {
    S.$("#game-progress-label").textContent = "Kort " + (state.index + 1) + " av " + state.queue.length;
    var currentPct = state.index ? Math.round((state.score / state.index) * 100) : 0;
    S.$("#game-score-label").textContent = "Rätt: " + currentPct + "%";

    var barPct = Math.round(((state.index) / state.queue.length) * 100);
    S.$("#game-progress-bar").style.width = barPct + "%";
  }

  function finishSession() {
    var pct = state.queue.length ? Math.round((state.score / state.queue.length) * 100) : 0;
    S.$("#summary-score-pct").textContent = pct + "%";
    S.$("#summary-score-text").textContent = "Du svarade rätt på " + state.score + " av " + state.queue.length + " kort.";

    var mInfo = S.$("#summary-mistakes-info");
    mInfo.innerHTML = "";

    var activeMistakes = S.Store.get("progress.collocations.mistakes", []);
    if (state.mistakesInSession > 0) {
      mInfo.appendChild(S.el("p", {
        text: "Du fick " + state.mistakesInSession + " fel i denna omgång. Dessa sparades till din granskningslista."
      }));
    } else if (state.selectedLevel === "mistakes" && activeMistakes.length === 0) {
      mInfo.appendChild(S.el("p", {
        class: "ok",
        style: "color:var(--green);font-weight:700;",
        text: "Härligt! Du har rensat hela din fellista! 🎉"
      }));
    } else {
      mInfo.appendChild(S.el("p", { text: "Bra jobbat!" }));
    }

    // Log a session for streaks
    S.logSession();

    showView("summary");
  }

  // ---- Wire buttons --------------------------------------------------------
  S.$("#start-btn").addEventListener("click", startSession);
  S.$("#quit-btn").addEventListener("click", function () {
    if (confirm("Vill du avbryta övningen?")) {
      renderTabs();
      updateSetupCard();
      showView("setup");
    }
  });

  S.$("#next-btn").addEventListener("click", function () {
    state.index++;
    renderCard();
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
