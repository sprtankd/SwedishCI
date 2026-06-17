/* ============================================================================
   Swedish CI — reader.js
   Graded Reader mode logic. Built incrementally across chunks 1.1–1.7.
   1.1: skeleton — level tabs, story list, reading view, view switching, progress.
   ========================================================================== */
(function () {
  "use strict";
  var S = window.SvCI;
  S.boot();
  S.gameHeader("#header", "reader");

  // ---- Level definitions (ordered) ----------------------------------------
  var LEVELS = [
    { id: "A2-low",  label: "A2 låg",  sub: "SFI C start" },
    { id: "A2-high", label: "A2 hög",  sub: "SFI C mitt" },
    { id: "B1",      label: "B1",      sub: "SFI C→D" },
    { id: "B1+",     label: "B1+",     sub: "SFI D" }
  ];

  var ALL = (window.SvCI_STORIES || []).slice();
  function storiesAt(level) {
    return ALL.filter(function (s) { return s.level === level; });
  }

  // ---- State --------------------------------------------------------------
  var state = {
    level: null,
    story: null
  };

  // restore last-selected level (if it still has stories), else first non-empty
  var savedLevel = S.Store.get("progress.reader.lastLevel", null);
  if (savedLevel && storiesAt(savedLevel).length) {
    state.level = savedLevel;
  } else {
    state.level = (LEVELS.find(function (l) { return storiesAt(l.id).length; }) || LEVELS[0]).id;
  }

  // ---- View switching -----------------------------------------------------
  var views = {
    list: S.$("#view-list"),
    read: S.$("#view-read"),
    questions: S.$("#view-questions")
  };
  function show(name) {
    Object.keys(views).forEach(function (k) {
      views[k].classList.toggle("hidden", k !== name);
    });
    if (window.SvCI_Reader && window.SvCI_Reader.hideTip) window.SvCI_Reader.hideTip();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---- Level tabs ---------------------------------------------------------
  function renderTabs() {
    var host = S.$("#level-tabs");
    host.innerHTML = "";
    LEVELS.forEach(function (l) {
      var count = storiesAt(l.id).length;
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

  // ---- Story list ---------------------------------------------------------
  function isDone(id) {
    return !!S.Store.get("progress.reader.completed." + id, false);
  }
  function scoreFor(id) {
    return S.Store.get("progress.reader.scores." + id, null);
  }

  function renderList() {
    renderTabs();
    // persist the chosen level so the reader resumes here next time
    var store = S.Store.load();
    store.progress.reader.lastLevel = state.level;
    S.Store.save();

    var list = storiesAt(state.level);
    var host = S.$("#story-list");
    host.innerHTML = "";

    var doneCount = list.filter(function (s) { return isDone(s.id); }).length;
    var pct = list.length ? Math.round((doneCount / list.length) * 100) : 0;
    S.$("#level-progress-label").textContent =
      doneCount + " av " + list.length + " texter klara";
    S.$("#level-progress-pct").textContent = pct + "%";
    S.$("#level-progress-bar").style.width = pct + "%";

    list.forEach(function (s) {
      var done = isDone(s.id);
      var sc = scoreFor(s.id);
      var card = S.el("a", {
        href: "javascript:void(0)",
        class: "mode-card",
        onclick: function () { openStory(s); }
      }, [
        S.el("div", { class: "row between", style: "align-items:flex-start;" }, [
          S.el("span", { class: "icon", text: done ? "✅" : "📖" }),
          S.el("span", { class: "pill" + (done ? " green" : ""),
            text: done && sc != null ? sc + "%" : (s.wordCount + " ord") })
        ]),
        S.el("h3", { text: s.title }),
        S.el("p", { text: s.titleEn }),
        S.el("p", { class: "faint", style: "font-size:.8rem;", text: s.theme })
      ]);
      host.appendChild(card);
    });
  }

  // ---- Reading view -------------------------------------------------------
  function openStory(story) {
    state.story = story;
    S.$("#story-title").textContent = story.title;
    S.$("#story-titleEn").textContent = story.titleEn;
    S.$("#story-level").textContent = story.level;

    var meta = S.$("#story-meta");
    meta.innerHTML = "";
    meta.appendChild(S.el("span", { class: "pill", text: story.theme }));
    meta.appendChild(S.el("span", { class: "pill", text: story.wordCount + " ord" }));
    meta.appendChild(S.el("span", { class: "pill",
      text: Object.keys(story.glossary || {}).length + " ordförklaringar" }));

    renderStoryText(story);
    show("read");
  }

  // ---- Glossing engine (1.2) ----------------------------------------------
  // Build a lookup of normalized glossary phrases -> { sv, en }. Glossary keys
  // may be multi-word phrases ("stiger upp"), so we record the max phrase length.
  function buildGlossMap(glossary) {
    var map = {}, maxLen = 1;
    Object.keys(glossary || {}).forEach(function (k) {
      var norm = k.split(/\s+/).map(S.normalizeWord).filter(Boolean).join(" ");
      if (!norm) return;
      map[norm] = { sv: k, en: glossary[k] };
      var n = norm.split(" ").length;
      if (n > maxLen) maxLen = n;
    });
    return { map: map, maxLen: maxLen };
  }

  // Render the story text into tappable spans. Glossary words/phrases get the
  // dotted underline and show an English translation; every other word is still
  // tappable to hear its pronunciation.
  function renderStoryText(story) {
    var host = S.$("#story-text");
    host.innerHTML = "";
    var gm = buildGlossMap(story.glossary);
    var tokens = S.tokenize(story.text);
    var p = S.el("p");

    var i = 0;
    while (i < tokens.length) {
      var tok = tokens[i];
      if (!tok.isWord) {
        p.appendChild(document.createTextNode(tok.word));
        i++;
        continue;
      }
      // try to match the longest glossary phrase starting at this word
      var collected = [], j = i, bestEntry = null, bestEnd = i;
      while (collected.length < gm.maxLen && j < tokens.length) {
        if (tokens[j].isWord) {
          collected.push(S.normalizeWord(tokens[j].word));
          var cand = collected.join(" ");
          if (gm.map[cand]) { bestEntry = gm.map[cand]; bestEnd = j; }
          j++;
        } else if (/^\s+$/.test(tokens[j].word)) {
          j++; // allow whitespace between phrase words
        } else {
          break; // punctuation breaks a phrase
        }
      }
      if (bestEntry) {
        var raw = "";
        for (var k = i; k <= bestEnd; k++) raw += tokens[k].word;
        p.appendChild(makeWordSpan(raw, bestEntry));
        i = bestEnd + 1;
      } else {
        p.appendChild(makeWordSpan(tok.word, null));
        i++;
      }
    }
    host.appendChild(p);
  }

  function makeWordSpan(text, entry) {
    var span = S.el("span", {
      class: entry ? "gloss" : "word",
      text: text
    });
    span.addEventListener("click", function (e) {
      e.stopPropagation();
      Tooltip.show(span, text.replace(/[.,!?;:"'’“”()\[\]…—–]/g, "").trim(), entry);
    });
    return span;
  }

  // ---- Gloss tooltip controller -------------------------------------------
  var Tooltip = {
    node: null,
    anchor: null,
    get el() { return this.node || (this.node = S.$("#gloss-tip")); },
    show: function (anchor, word, entry) {
      var tip = this.el;
      if (this.anchor) this.anchor.classList.remove("active");
      this.anchor = anchor;
      anchor.classList.add("active");

      tip.innerHTML = "";
      tip.appendChild(S.el("span", { class: "sv", text: word }));
      if (entry && entry.en) tip.appendChild(S.el("span", { class: "en", text: entry.en }));
      var play = S.el("span", { class: "play", text: "🔊 Lyssna" });
      play.addEventListener("click", function (e) { e.stopPropagation(); S.Speech.say(word); });
      tip.appendChild(play);

      // position above the word, clamped to viewport
      tip.classList.add("show");
      tip.setAttribute("aria-hidden", "false");
      var r = anchor.getBoundingClientRect();
      var tr = tip.getBoundingClientRect();
      var left = Math.min(Math.max(8, r.left), window.innerWidth - tr.width - 8);
      var top = r.top - tr.height - 8;
      if (top < 8) top = r.bottom + 8; // flip below if no room above
      tip.style.left = left + "px";
      tip.style.top = top + "px";

      // speak the word on tap (CI: hear the pronunciation)
      S.Speech.say(word);
    },
    hide: function () {
      var tip = this.el;
      tip.classList.remove("show");
      tip.setAttribute("aria-hidden", "true");
      if (this.anchor) { this.anchor.classList.remove("active"); this.anchor = null; }
    }
  };
  // dismiss tooltip on outside click / scroll
  document.addEventListener("click", function () { Tooltip.hide(); });
  window.addEventListener("scroll", function () { Tooltip.hide(); }, true);

  // ---- Comprehension questions (1.3) --------------------------------------
  function renderQuestions(story) {
    var host = S.$("#questions-host");
    host.innerHTML = "";
    S.$("#questions-result").classList.add("hidden");

    var questions = story.questions || [];
    var answered = 0, correct = 0;

    questions.forEach(function (q, idx) {
      var block = S.el("div", { class: "question" });
      block.appendChild(S.el("div", { class: "q-text", text: (idx + 1) + ". " + q.q }));
      if (q.qEn) block.appendChild(S.el("div", { class: "q-en", text: q.qEn }));

      var opts = S.el("div", { class: "options" });
      var optButtons = [];
      var done = false;

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
          if (isRight) { correct++; S.Sfx.correct(); }
          else { S.Sfx.wrong(); }

          if (q.explain) {
            block.appendChild(S.el("div", { class: "explain",
              text: (isRight ? "✓ Rätt! " : "✗ ") + q.explain }));
          }
          answered++;
          if (answered === questions.length) showResult(story, correct, questions.length);
        });
        optButtons.push(btn);
        opts.appendChild(btn);
      });
      block.appendChild(opts);
      host.appendChild(block);
    });
  }

  function showResult(story, correct, total) {
    var pct = Math.round((correct / total) * 100);

    // persist best score + completion
    var prevBest = S.Store.get("progress.reader.scores." + story.id, null);
    if (prevBest == null || pct > prevBest) {
      var s = S.Store.load();
      s.progress.reader.scores[story.id] = pct;
      S.Store.save();
    }
    var wasDone = S.Store.get("progress.reader.completed." + story.id, false);
    if (!wasDone) {
      var st = S.Store.load();
      st.progress.reader.completed[story.id] = true;
      S.Store.save();
      S.logSession();
    }
    // encounter tracking (full implementation in chunk 1.5)
    onStoryComprehended(story, pct);

    var res = S.$("#questions-result");
    res.classList.remove("hidden");
    res.innerHTML = "";

    var msg = pct >= 80 ? "Utmärkt! 🌟" : pct >= 60 ? "Bra jobbat! 👍" : "Fortsätt öva 💪";
    res.appendChild(S.el("div", { class: "card-tight center",
      style: "border:1px solid var(--stroke);border-radius:var(--radius-sm);margin-top:8px;" }, [
      S.el("div", { class: "num", style: "font-size:2.2rem;font-weight:800;", text: pct + "%" }),
      S.el("div", { class: "muted", text: correct + " av " + total + " rätt · " + msg })
    ]));

    var nav = S.el("div", { class: "row mt-16", style: "gap:10px;" });
    nav.appendChild(S.el("button", { class: "btn", text: "← Till listan",
      onclick: function () { renderList(); show("list"); } }));
    var next = nextStory(story);
    if (next) {
      nav.appendChild(S.el("button", { class: "btn btn-primary", text: "Nästa text →",
        onclick: function () { openStory(next); } }));
    }
    res.appendChild(nav);
  }

  // hook for chunk 1.5 (word-encounter tracking); no-op stub for now
  function onStoryComprehended(story, pct) { /* implemented in 1.5 */ }

  function nextStory(story) {
    var list = storiesAt(story.level);
    var idx = list.findIndex(function (s) { return s.id === story.id; });
    return (idx >= 0 && idx + 1 < list.length) ? list[idx + 1] : null;
  }

  // ---- Wire buttons -------------------------------------------------------
  S.$("#back-btn").addEventListener("click", function () { renderList(); show("list"); });
  S.$("#back-to-read-btn").addEventListener("click", function () { show("read"); });
  S.$("#to-questions-btn").addEventListener("click", function () {
    renderQuestions(state.story);
    S.$("#questions-result").classList.add("hidden");
    show("questions");
  });

  // ---- Init ---------------------------------------------------------------
  if (!ALL.length) {
    S.$("#story-list").innerHTML =
      '<p class="muted">Inga berättelser hittades. Kontrollera att datafilerna är laddade.</p>';
  } else {
    renderList();
  }
  show("list");

  // expose for later chunks / debugging
  window.SvCI_Reader = {
    state: state, renderList: renderList, openStory: openStory,
    hideTip: function () { Tooltip.hide(); }
  };
})();
