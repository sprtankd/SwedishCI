/* ============================================================================
   Swedish CI — news.js
   News Reader mode. Reuses the shared glossing engine (SvCI.Gloss) and read-aloud
   factory. Informational / instructional / argumentative articles for SFI D.
   ========================================================================== */
(function () {
  "use strict";
  var S = window.SvCI;
  S.boot();
  S.gameHeader("#header", "news");

  var LEVELS = [
    { id: "B1",  label: "B1",  sub: "SFI C→D" },
    { id: "B1+", label: "B1+", sub: "SFI D" }
  ];

  // Text-type categories matching the SFI D text types the learner must recognise.
  var TEXT_TYPES = {
    informational: { label: "Informerande", cls: "blue", icon: "ℹ️",
      desc: "Ger fakta och förklarar hur något fungerar. Sök efter siffror, namn och orsaker.",
      descEn: "Informational: gives facts and explains how things work." },
    instructional: { label: "Instruerande", cls: "green", icon: "📋",
      desc: "Ger råd eller steg att följa. Leta efter uppmaningar (gör, försök, undvik).",
      descEn: "Instructional: gives advice or steps to follow." },
    argumentative: { label: "Argumenterande", cls: "pink", icon: "💬",
      desc: "Framför en åsikt och argument. Leta efter skribentens ståndpunkt och skäl.",
      descEn: "Argumentative: puts forward an opinion with reasons." }
  };

  // Legend explaining the three SFI D text categories.
  function renderTypeLegend() {
    var host = S.$("#type-legend");
    if (!host) return;
    host.innerHTML = "";
    host.appendChild(S.el("div", { class: "muted mb-8", style: "font-size:.82rem;font-weight:700;",
      text: "Texttyper · Text types (viktigt för SFI D)" }));
    var row = S.el("div", { class: "row", style: "gap:14px;" });
    Object.keys(TEXT_TYPES).forEach(function (k) {
      var t = TEXT_TYPES[k];
      row.appendChild(S.el("span", { class: "row", style: "gap:6px;align-items:flex-start;flex:1;min-width:180px;" }, [
        S.el("span", { class: "pill " + t.cls, text: t.icon + " " + t.label }),
        S.el("span", { class: "faint", style: "font-size:.78rem;", text: t.desc })
      ]));
    });
    host.appendChild(row);
  }

  var ALL = (window.SvCI_NEWS || []).slice();
  function articlesAt(level) {
    return ALL.filter(function (a) { return a.level === level; });
  }

  var state = { level: null, article: null };
  var savedLevel = S.Store.get("progress.news.lastLevel", null);
  if (savedLevel && articlesAt(savedLevel).length) state.level = savedLevel;
  else state.level = (LEVELS.find(function (l) { return articlesAt(l.id).length; }) || LEVELS[0]).id;

  var views = {
    list: S.$("#view-list"),
    read: S.$("#view-read"),
    questions: S.$("#view-questions")
  };
  function show(name) {
    Object.keys(views).forEach(function (k) { views[k].classList.toggle("hidden", k !== name); });
    S.Gloss.hideTip();
    var v = views[name];
    v.classList.remove("view-enter"); void v.offsetWidth; v.classList.add("view-enter");
    S.$("#read-progress").classList.toggle("hidden", name !== "read");
    if (name === "read") updateReadProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateReadProgress() {
    var bar = S.$("#read-progress > span");
    var body = S.$("#article-body");
    if (!bar || !body) return;
    var rect = body.getBoundingClientRect();
    var total = rect.height || 1;
    var seen = Math.min(Math.max(window.innerHeight - rect.top, 0), total);
    bar.style.width = Math.round((seen / total) * 100) + "%";
  }
  window.addEventListener("scroll", function () {
    if (!S.$("#view-read").classList.contains("hidden")) updateReadProgress();
  }, { passive: true });
  window.addEventListener("resize", updateReadProgress);

  var ReadAloud = S.makeReadAloud("#view-read", "#read-aloud-btn");

  // ---- Level tabs ---------------------------------------------------------
  function renderTabs() {
    var host = S.$("#level-tabs");
    host.innerHTML = "";
    LEVELS.forEach(function (l) {
      var count = articlesAt(l.id).length;
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

  function isDone(id) { return !!S.Store.get("progress.news.completed." + id, false); }
  function scoreFor(id) { return S.Store.get("progress.news.scores." + id, null); }
  // estimated reading time for a learner (~100 words/min)
  function readMinutes(words) { return Math.max(1, Math.round(words / 100)); }

  function renderList() {
    renderTabs();
    renderTypeLegend();
    var store = S.Store.load();
    store.progress.news.lastLevel = state.level;
    S.Store.save();

    var list = articlesAt(state.level);
    var host = S.$("#news-list");
    host.innerHTML = "";

    var doneCount = list.filter(function (a) { return isDone(a.id); }).length;
    var pct = list.length ? Math.round((doneCount / list.length) * 100) : 0;
    S.$("#level-progress-label").textContent = doneCount + " av " + list.length + " artiklar lästa";
    S.$("#level-progress-pct").textContent = pct + "%";
    S.$("#level-progress-bar").style.width = pct + "%";

    list.forEach(function (a) {
      var done = isDone(a.id);
      var sc = scoreFor(a.id);
      var tt = TEXT_TYPES[a.textType] || { label: a.textType || "", cls: "" };
      var card = S.el("a", {
        href: "javascript:void(0)", class: "mode-card",
        onclick: function () { openArticle(a); }
      }, [
        S.el("div", { class: "row between", style: "align-items:flex-start;" }, [
          S.el("span", { class: "icon", text: done ? "✅" : "📰" }),
          S.el("span", { class: "pill" + (done ? " green" : ""),
            text: done && sc != null ? sc + "%" : (a.wordCount + " ord") })
        ]),
        S.el("h3", { text: a.title }),
        S.el("p", { text: a.titleEn }),
        S.el("div", { class: "row", style: "gap:6px;margin-top:4px;flex-wrap:wrap;" }, [
          S.el("span", { class: "pill " + tt.cls, text: tt.label }),
          S.el("span", { class: "pill", text: a.level }),
          S.el("span", { class: "pill faint", text: "⏱ ~" + readMinutes(a.wordCount) + " min" })
        ])
      ]);
      host.appendChild(card);
    });
  }

  // ---- Article view -------------------------------------------------------
  function openArticle(article) {
    state.article = article;
    ReadAloud.stop();

    S.$("#article-title").textContent = article.title;
    S.$("#article-titleEn").textContent = article.titleEn;
    S.$("#article-source").textContent = "Källa: " + (article.source || "Svenska CI") +
      " · " + article.wordCount + " ord · ~" + readMinutes(article.wordCount) + " min läsning";

    var tags = S.$("#article-tags");
    tags.innerHTML = "";
    var tt = TEXT_TYPES[article.textType] || { label: article.textType || "", cls: "", icon: "📄", desc: "" };
    tags.appendChild(S.el("span", { class: "pill " + tt.cls, text: (tt.icon || "📄") + " " + tt.label }));
    tags.appendChild(S.el("span", { class: "pill", text: article.level }));
    tags.appendChild(S.el("span", { class: "pill", text: article.theme }));

    S.$("#article-typehint").textContent = tt.desc || "";

    var lead = S.$("#article-lead");
    lead.innerHTML = "";
    S.Gloss.renderText(lead, article.lead, article.glossary, { onInteract: function () { ReadAloud.stop(); } });

    var body = S.$("#article-body");
    body.innerHTML = "";
    S.Gloss.renderText(body, article.text, article.glossary, { onInteract: function () { ReadAloud.stop(); } });

    show("read");
  }

  // ---- Questions (same pattern as the reader) -----------------------------
  function renderQuestions(article) {
    var host = S.$("#questions-host");
    host.innerHTML = "";
    S.$("#questions-result").classList.add("hidden");
    var questions = article.questions || [];
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
          if (answered === questions.length) showResult(article, correct, questions.length);
        });
        optButtons.push(btn);
        opts.appendChild(btn);
      });
      block.appendChild(opts);
      host.appendChild(block);
    });
  }

  function showResult(article, correct, total) {
    var pct = Math.round((correct / total) * 100);
    var prevBest = S.Store.get("progress.news.scores." + article.id, null);
    if (prevBest == null || pct > prevBest) {
      var s = S.Store.load(); s.progress.news.scores[article.id] = pct; S.Store.save();
    }
    var wasDone = S.Store.get("progress.news.completed." + article.id, false);
    if (!wasDone) {
      var st = S.Store.load(); st.progress.news.completed[article.id] = true; S.Store.save();
      S.logSession();
      var words = Object.keys(article.glossary || {});
      if (words.length) S.recordEncounter(words, article.id);
    }

    var res = S.$("#questions-result");
    res.classList.remove("hidden"); res.innerHTML = "";
    var msg = pct >= 80 ? "Utmärkt! 🌟" : pct >= 60 ? "Bra jobbat! 👍" : "Fortsätt öva 💪";
    res.appendChild(S.el("div", { class: "card-tight center",
      style: "border:1px solid var(--stroke);border-radius:var(--radius-sm);margin-top:8px;" }, [
      S.el("div", { class: "num", style: "font-size:2.2rem;font-weight:800;", text: pct + "%" }),
      S.el("div", { class: "muted", text: correct + " av " + total + " rätt · " + msg })
    ]));

    var levelList = articlesAt(article.level);
    var allDone = levelList.length && levelList.every(function (a) {
      return S.Store.get("progress.news.completed." + a.id, false);
    });
    if (allDone) {
      var levelLabel = (LEVELS.find(function (l) { return l.id === article.level; }) || {}).label || article.level;
      res.appendChild(S.el("div", { class: "level-banner" }, [
        S.el("div", { class: "big", text: "🎉 Nivå klar!" }),
        S.el("div", { class: "sub", text: "Du har läst alla " + levelList.length + " artiklar på nivå " + levelLabel + "." })
      ]));
      S.toast("Nivå " + levelLabel + " klar! 🎉", "ok", 3000);
    }

    var nav = S.el("div", { class: "row mt-16", style: "gap:10px;" });
    nav.appendChild(S.el("button", { class: "btn", text: "← Till listan",
      onclick: function () { renderList(); show("list"); } }));
    var next = nextArticle(article);
    if (next) nav.appendChild(S.el("button", { class: "btn btn-primary", text: "Nästa artikel →",
      onclick: function () { openArticle(next); } }));

    // Check which glossary words are still new/met
    var newOrMetWords = Object.keys(article.glossary || {}).filter(function (w) {
      var norm = S.normalizeWord(w);
      var count = S.Store.get("words." + norm + ".count", 0);
      var status = S.encounterStatus(count);
      return status === "new" || status === "met";
    });

    if (newOrMetWords.length > 0) {
      var card = S.el("div", {
        class: "card-tight mt-16",
        style: "border:1px solid var(--stroke); border-radius:var(--radius-sm); padding: 12px; background: rgba(255, 255, 255, 0.02); text-align: left;"
      }, [
        S.el("span", { style: "display:block; font-weight:700; color:var(--gold); margin-bottom: 6px;", text: "🔗 Öva dessa ord i SwedishGames" }),
        S.el("p", { style: "margin: 0 0 10px; font-size: 0.88rem; line-height: 1.4; color: var(--ink-dim);", text: "Du har stött på ord som du kan träna mer på aktivt:" }),
        S.el("div", { style: "display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px;" }, newOrMetWords.map(function (w) {
          return S.el("span", { class: "pill faint", style: "font-size: 0.8rem;", text: w });
        })),
        S.el("a", {
          href: "../SwedishGames/index.html",
          class: "btn btn-sm btn-blue",
          style: "display: inline-block; text-decoration: none;",
          text: "Öppna SwedishGames"
        })
      ]);
      res.appendChild(card);
    }

    res.appendChild(nav);
  }

  function nextArticle(article) {
    var list = articlesAt(article.level);
    var idx = list.findIndex(function (a) { return a.id === article.id; });
    return (idx >= 0 && idx + 1 < list.length) ? list[idx + 1] : null;
  }

  // ---- Wire buttons -------------------------------------------------------
  S.$("#back-btn").addEventListener("click", function () { ReadAloud.stop(); renderList(); show("list"); });
  S.$("#back-to-read-btn").addEventListener("click", function () { show("read"); });
  S.$("#to-questions-btn").addEventListener("click", function () {
    ReadAloud.stop();
    renderQuestions(state.article);
    show("questions");
  });
  S.$("#read-aloud-btn").addEventListener("click", function () { ReadAloud.toggle(); });

  // ---- Init ---------------------------------------------------------------
  if (!ALL.length) {
    S.$("#news-list").innerHTML = '<p class="muted">Inga artiklar hittades.</p>';
  } else {
    renderList();
  }
  show("list");

  window.SvCI_News = { state: state, renderList: renderList, openArticle: openArticle };
})();
