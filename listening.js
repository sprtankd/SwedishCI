/* ============================================================================
   Swedish CI — listening.js
   Listening Lab. Listen-first flow: play audio (TTS) → answer questions →
   reveal transcript with glosses → re-listen while reading.
   Audio is generated from the transcript via the shared Speech (sv-SE TTS) helper.
   Reuses the shared glossing engine for the transcript view.
   ========================================================================== */
(function () {
  "use strict";
  var S = window.SvCI;
  S.boot();
  S.gameHeader("#header", "listening");

  var LEVELS = [
    { id: "A2", label: "A2", sub: "SFI C" },
    { id: "B1", label: "B1", sub: "SFI D" }
  ];

  var ALL = (window.SvCI_LISTENING || []).slice();
  function passagesAt(level) {
    return ALL.filter(function (p) { return p.level === level; });
  }

  var state = { level: null, passage: null };
  var savedLevel = S.Store.get("progress.listening.lastLevel", null);
  if (savedLevel && passagesAt(savedLevel).length) state.level = savedLevel;
  else state.level = (LEVELS.find(function (l) { return passagesAt(l.id).length; }) || LEVELS[0]).id;

  var views = {
    list: S.$("#view-list"),
    listen: S.$("#view-listen"),
    questions: S.$("#view-questions"),
    transcript: S.$("#view-transcript")
  };
  function show(name) {
    Object.keys(views).forEach(function (k) { views[k].classList.toggle("hidden", k !== name); });
    S.Gloss.hideTip();
    Player.stop();
    Relisten.stop();
    var v = views[name];
    v.classList.remove("view-enter"); void v.offsetWidth; v.classList.add("view-enter");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---- Speed control (0.75 / 1.0 / 1.1) -----------------------------------
  // The chosen rate drives both the listen-view player and the transcript
  // re-listen (via the shared Speech rate). Persisted across sessions.
  var SPEEDS = [
    { rate: 0.75, label: "0,75× Långsam" },
    { rate: 1.0, label: "1× Normal" },
    { rate: 1.1, label: "1,1× Snabb" }
  ];
  var currentRate = parseFloat(S.Store.get("progress.listening.rate", 1.0)) || 1.0;
  S.Speech.rate = currentRate;

  function setRate(r) {
    currentRate = r;
    S.Speech.rate = r;
    Player.rate = r;
    var store = S.Store.load();
    store.progress.listening.rate = r;
    S.Store.save();
    renderSpeedControls("#speed-listen");
    renderSpeedControls("#speed-transcript");
  }

  function renderSpeedControls(sel) {
    var host = S.$(sel);
    if (!host) return;
    host.innerHTML = "";
    SPEEDS.forEach(function (s) {
      host.appendChild(S.el("button", {
        class: "level-tab" + (Math.abs(s.rate - currentRate) < 0.001 ? " active" : ""),
        text: s.label,
        onclick: function () { setRate(s.rate); }
      }));
    });
  }

  // ---- Simple TTS player for the listen view ------------------------------
  var Player = {
    playing: false,
    rate: currentRate,
    plays: 0,
    play: function () {
      if (!state.passage) return;
      if (!S.Speech.available()) { S.toast("Ljud stöds inte i den här webbläsaren.", "err"); return; }
      this.playing = true;
      this.plays++;
      this._setBtn(true);
      unlockQuestions();
      var self = this;
      S.Speech.say(plainTranscript(state.passage), {
        rate: this.rate,
        onend: function () { self.playing = false; self._setBtn(false); }
      });
    },
    stop: function () {
      this.playing = false;
      S.Speech.stop();
      this._setBtn(false);
    },
    toggle: function () { this.playing ? this.stop() : this.play(); },
    _setBtn: function (playing) {
      var b = S.$("#play-btn");
      if (b) b.textContent = playing ? "⏸ Stoppa" : "▶︎ Spela";
    }
  };

  // The transcript may contain blank-line paragraph breaks; flatten for speaking.
  function plainTranscript(p) {
    return String(p.transcript || "").replace(/\s*\n\s*\n\s*/g, " ").trim();
  }

  // ---- Re-listen controller for the transcript view -----------------------
  var Relisten = S.makeReadAloud("#transcript-text", "#relisten-btn");

  // ---- Level tabs ---------------------------------------------------------
  function renderTabs() {
    var host = S.$("#level-tabs");
    host.innerHTML = "";
    LEVELS.forEach(function (l) {
      var count = passagesAt(l.id).length;
      var btn = S.el("button", {
        class: "level-tab" + (l.id === state.level ? " active" : ""),
        role: "tab",
        text: l.label + (count ? " (" + count + ")" : ""),
        title: l.sub,
        disabled: count ? null : "disabled",
        onclick: function () { if (count) { state.level = l.id; renderList(); } }
      });
      if (!count) btn.style.opacity = "0.4";
      host.appendChild(btn);
    });
  }

  function isDone(id) { return !!S.Store.get("progress.listening.completed." + id, false); }
  function scoreFor(id) { return S.Store.get("progress.listening.scores." + id, null); }

  function renderList() {
    renderTabs();
    var store = S.Store.load();
    store.progress.listening.lastLevel = state.level;
    S.Store.save();

    var list = passagesAt(state.level);
    var host = S.$("#passage-list");
    host.innerHTML = "";

    var doneCount = list.filter(function (p) { return isDone(p.id); }).length;
    var pct = list.length ? Math.round((doneCount / list.length) * 100) : 0;
    S.$("#level-progress-label").textContent = doneCount + " av " + list.length + " avsnitt klara";
    S.$("#level-progress-pct").textContent = pct + "%";
    S.$("#level-progress-bar").style.width = pct + "%";

    if (!list.length) {
      host.appendChild(S.el("div", { class: "card", style: "grid-column:1/-1;" }, [
        S.el("p", { class: "muted", style: "margin:0;",
          text: "Inga lyssningsavsnitt på den här nivån än. Kommer snart." })
      ]));
      return;
    }

    list.forEach(function (p) {
      var done = isDone(p.id);
      var sc = scoreFor(p.id);
      var card = S.el("a", {
        href: "javascript:void(0)", class: "mode-card",
        onclick: function () { openPassage(p); }
      }, [
        S.el("div", { class: "row between", style: "align-items:flex-start;" }, [
          S.el("span", { class: "icon", text: done ? "✅" : "🎧" }),
          S.el("span", { class: "pill" + (done ? " green" : ""),
            text: done && sc != null ? sc + "%" : p.level })
        ]),
        S.el("h3", { text: p.title }),
        S.el("p", { text: p.titleEn }),
        S.el("p", { class: "faint", style: "font-size:.8rem;", text: p.theme })
      ]);
      host.appendChild(card);
    });
  }

  // ---- Listen view --------------------------------------------------------
  // Listen-first pedagogy: the questions stay locked until the learner has played
  // the audio at least once (so they answer from listening, not from reading).
  function unlockQuestions() {
    var btn = S.$("#to-questions-btn");
    if (btn && btn.disabled) {
      btn.disabled = false;
      btn.textContent = "Jag har lyssnat — svara på frågor →";
    }
  }
  function lockQuestions() {
    var btn = S.$("#to-questions-btn");
    if (btn) { btn.disabled = true; btn.textContent = "🔒 Spela ljudet först"; }
  }

  function openPassage(p) {
    state.passage = p;
    Player.plays = 0;
    S.$("#passage-title").textContent = p.title;
    S.$("#passage-titleEn").textContent = p.titleEn;
    var tags = S.$("#listen-tags");
    tags.innerHTML = "";
    tags.appendChild(S.el("span", { class: "pill blue", text: p.level }));
    tags.appendChild(S.el("span", { class: "pill", text: p.theme }));
    lockQuestions();
    show("listen");
  }

  // ---- Questions ----------------------------------------------------------
  function renderQuestions(p) {
    var host = S.$("#questions-host");
    host.innerHTML = "";
    S.$("#questions-result").classList.add("hidden");
    var questions = p.questions || [];
    var answered = 0, correct = 0;

    questions.forEach(function (q, idx) {
      var block = S.el("div", { class: "question" });
      block.appendChild(S.el("div", { class: "q-text", text: (idx + 1) + ". " + q.q }));
      if (q.qEn) block.appendChild(S.el("div", { class: "q-en", text: q.qEn }));
      var opts = S.el("div", { class: "options" });
      var optButtons = [], done = false;
      (q.options || []).forEach(function (o, oi) {
        var btn = S.el("button", { class: "option", type: "button", text: o });
        btn.addEventListener("click", function () {
          if (done) return;
          done = true;
          var isRight = oi === q.correct;
          optButtons.forEach(function (b, bi) {
            b.disabled = true;
            if (bi === q.correct) b.classList.add("correct");
            if (bi === oi && !isRight) b.classList.add("wrong");
          });
          if (isRight) { correct++; S.Sfx.correct(); } else { S.Sfx.wrong(); }
          if (q.explain) block.appendChild(S.el("div", { class: "explain",
            text: (isRight ? "✓ Rätt! " : "✗ ") + q.explain }));
          answered++;
          if (answered === questions.length) showResult(p, correct, questions.length);
        });
        optButtons.push(btn);
        opts.appendChild(btn);
      });
      block.appendChild(opts);
      host.appendChild(block);
    });
  }

  function showResult(p, correct, total) {
    var pct = Math.round((correct / total) * 100);
    var prevBest = S.Store.get("progress.listening.scores." + p.id, null);
    if (prevBest == null || pct > prevBest) {
      var s = S.Store.load(); s.progress.listening.scores[p.id] = pct; S.Store.save();
    }
    var wasDone = S.Store.get("progress.listening.completed." + p.id, false);
    if (!wasDone) {
      var st = S.Store.load(); st.progress.listening.completed[p.id] = true; S.Store.save();
      S.logSession();
      var words = Object.keys(p.glossary || {});
      if (words.length) S.recordEncounter(words, p.id);
    }

    var res = S.$("#questions-result");
    res.classList.remove("hidden"); res.innerHTML = "";
    var msg = pct >= 80 ? "Utmärkt! 🌟" : pct >= 60 ? "Bra jobbat! 👍" : "Lyssna gärna igen 💪";
    res.appendChild(S.el("div", { class: "card-tight center",
      style: "border:1px solid var(--stroke);border-radius:var(--radius-sm);margin-top:8px;" }, [
      S.el("div", { class: "num", style: "font-size:2.2rem;font-weight:800;", text: pct + "%" }),
      S.el("div", { class: "muted", text: correct + " av " + total + " rätt · " + msg })
    ]));
    // celebration when every passage in this level is now complete
    var levelList = passagesAt(p.level);
    var allDone = levelList.length && levelList.every(function (x) {
      return S.Store.get("progress.listening.completed." + x.id, false);
    });
    if (allDone) {
      var levelLabel = (LEVELS.find(function (l) { return l.id === p.level; }) || {}).label || p.level;
      res.appendChild(S.el("div", { class: "level-banner" }, [
        S.el("div", { class: "big", text: "🎉 Nivå klar!" }),
        S.el("div", { class: "sub", text: "Du har klarat alla " + levelList.length + " avsnitt på nivå " + levelLabel + "." })
      ]));
      S.toast("Nivå " + levelLabel + " klar! 🎉", "ok", 3000);
    }

    res.appendChild(S.el("div", { class: "row mt-16", style: "gap:10px;" }, [
      S.el("button", { class: "btn btn-primary", text: "Visa texten →",
        onclick: function () { openTranscript(p); } })
    ]));
  }

  // ---- Transcript view ----------------------------------------------------
  function openTranscript(p) {
    var host = S.$("#transcript-text");
    host.innerHTML = "";
    S.Gloss.renderText(host, p.transcript, p.glossary, { onInteract: function () { Relisten.stop(); } });

    var nav = S.$("#transcript-nav");
    nav.innerHTML = "";
    nav.appendChild(S.el("button", { class: "btn", text: "← Till listan",
      onclick: function () { renderList(); show("list"); } }));
    var next = nextPassage(p);
    if (next) nav.appendChild(S.el("button", { class: "btn btn-primary", text: "Nästa avsnitt →",
      onclick: function () { openPassage(next); } }));
    show("transcript");
  }

  function nextPassage(p) {
    var list = passagesAt(p.level);
    var idx = list.findIndex(function (x) { return x.id === p.id; });
    return (idx >= 0 && idx + 1 < list.length) ? list[idx + 1] : null;
  }

  // ---- Wire buttons -------------------------------------------------------
  S.$("#back-btn").addEventListener("click", function () { renderList(); show("list"); });
  S.$("#back-to-listen-btn").addEventListener("click", function () { show("listen"); });
  S.$("#back-to-questions-btn").addEventListener("click", function () { show("questions"); });
  S.$("#play-btn").addEventListener("click", function () { Player.toggle(); });
  S.$("#replay-btn").addEventListener("click", function () { Player.stop(); Player.play(); });
  S.$("#to-questions-btn").addEventListener("click", function () {
    Player.stop();
    renderQuestions(state.passage);
    show("questions");
  });
  S.$("#relisten-btn").addEventListener("click", function () { Relisten.toggle(); });

  // ---- Init ---------------------------------------------------------------
  renderSpeedControls("#speed-listen");
  renderSpeedControls("#speed-transcript");
  renderList();
  show("list");

  window.SvCI_Listening = { state: state, renderList: renderList, openPassage: openPassage };
})();
