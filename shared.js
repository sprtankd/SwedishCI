/* ============================================================================
   Swedish CI — shared.js
   Shared utilities for every mode. Adapted from the SwedishGames infrastructure:
   Store (namespaced localStorage), Speech (TTS), Sfx, auroraBackground, gameHeader,
   toast, encounter tracking, and small DOM/text helpers.

   No external libraries. Works offline. localStorage is namespaced under
   `svenska_ci_v1` so it never collides with SwedishGames.
   ========================================================================== */
(function (global) {
  "use strict";

  /* -------------------------------------------------------------- Store -- */
  var STORE_KEY = "svenska_ci_v1";
  var _cache = null;

  function _defaults() {
    return {
      version: 1,
      created: Date.now(),
      // encounter tracking: { word(lowercase): { count, firstSeen, lastSeen, contexts:[storyId] } }
      words: {},
      // per-mode progress, keyed by mode name
      progress: {
        reader:   { completed: {}, scores: {} },   // completed[storyId]=true, scores[storyId]=pct
        news:     { completed: {}, scores: {} },
        listening:{ completed: {}, scores: {} },
        collocations: { done: 0, correct: 0 },
        connectors:   { done: 0, correct: 0 },
        exams: []   // [{id, kind, level, score, total, date}]
      },
      // reading session log for streaks/stats
      sessions: [],         // [{date:'YYYY-MM-DD', count}]
      streak: { current: 0, best: 0, lastDay: null }
    };
  }

  var Store = {
    load: function () {
      if (_cache) return _cache;
      try {
        var raw = localStorage.getItem(STORE_KEY);
        _cache = raw ? Object.assign(_defaults(), JSON.parse(raw)) : _defaults();
      } catch (e) {
        _cache = _defaults();
      }
      // ensure nested shape after merge
      var d = _defaults();
      _cache.words = _cache.words || d.words;
      _cache.progress = Object.assign(d.progress, _cache.progress || {});
      _cache.sessions = _cache.sessions || d.sessions;
      _cache.streak = _cache.streak || d.streak;
      return _cache;
    },
    save: function () {
      try { localStorage.setItem(STORE_KEY, JSON.stringify(this.load())); }
      catch (e) { /* quota / private mode — ignore */ }
    },
    get: function (path, fallback) {
      var o = this.load(), parts = path.split(".");
      for (var i = 0; i < parts.length; i++) {
        if (o == null) return fallback;
        o = o[parts[i]];
      }
      return o === undefined ? fallback : o;
    },
    reset: function () {
      _cache = _defaults();
      this.save();
    }
  };

  /* --------------------------------------------------- Encounter tracking */
  // Mark that a set of words was "encountered" while reading `storyId`.
  // Words graduate: new(0) -> met(1-2) -> familiar(3-5) -> known(6+).
  function recordEncounter(words, storyId) {
    var s = Store.load();
    var now = Date.now();
    (words || []).forEach(function (w) {
      var key = normalizeWord(w);
      if (!key) return;
      var rec = s.words[key];
      if (!rec) {
        rec = { count: 0, firstSeen: now, lastSeen: now, contexts: [] };
        s.words[key] = rec;
      }
      rec.count += 1;
      rec.lastSeen = now;
      if (storyId && rec.contexts.indexOf(storyId) === -1) rec.contexts.push(storyId);
    });
    Store.save();
  }

  function encounterStatus(count) {
    if (!count || count <= 0) return "new";
    if (count <= 2) return "met";
    if (count <= 5) return "familiar";
    return "known";
  }

  function wordStats() {
    var s = Store.load(), out = { new: 0, met: 0, familiar: 0, known: 0, total: 0 };
    Object.keys(s.words).forEach(function (k) {
      out[encounterStatus(s.words[k].count)]++;
      out.total++;
    });
    return out;
  }

  /* ------------------------------------------------------ Session/streak */
  function todayStr() {
    var d = new Date();
    return d.getFullYear() + "-" +
      String(d.getMonth() + 1).padStart(2, "0") + "-" +
      String(d.getDate()).padStart(2, "0");
  }

  // Call when the learner completes a reading/listening session.
  function logSession() {
    var s = Store.load(), today = todayStr();
    var entry = s.sessions.find(function (e) { return e.date === today; });
    if (entry) entry.count++;
    else s.sessions.push({ date: today, count: 1 });

    // streak update
    var st = s.streak;
    if (st.lastDay !== today) {
      var y = new Date(); y.setDate(y.getDate() - 1);
      var yStr = y.getFullYear() + "-" + String(y.getMonth() + 1).padStart(2, "0") +
        "-" + String(y.getDate()).padStart(2, "0");
      st.current = (st.lastDay === yStr) ? st.current + 1 : 1;
      st.lastDay = today;
      if (st.current > st.best) st.best = st.current;
    }
    Store.save();
  }

  function sessionCount() {
    return Store.load().sessions.reduce(function (a, e) { return a + e.count; }, 0);
  }

  /* ------------------------------------------------------ Text utilities */
  // Strip punctuation and lowercase for word-key normalization.
  function normalizeWord(w) {
    return String(w || "")
      .toLowerCase()
      .replace(/[.,!?;:"'’“”()\[\]…—–]/g, "")
      .trim();
  }

  // Tokenize a Swedish text into tokens preserving whitespace/punctuation so the
  // gloss renderer can wrap only real words.
  function tokenize(text) {
    // Matches words (incl. åäö and hyphen/apostrophe inside) OR non-word runs.
    var re = /([A-Za-zÅÄÖåäö][A-Za-zÅÄÖåäö'’-]*)|([^A-Za-zÅÄÖåäö]+)/g;
    var tokens = [], m;
    while ((m = re.exec(text)) !== null) {
      if (m[1] !== undefined) tokens.push({ word: m[1], isWord: true });
      else tokens.push({ word: m[2], isWord: false });
    }
    return tokens;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* --------------------------------------------------------- DOM helpers */
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") node.className = attrs[k];
      else if (k === "html") node.innerHTML = attrs[k];
      else if (k === "text") node.textContent = attrs[k];
      else if (k.slice(0, 2) === "on" && typeof attrs[k] === "function")
        node.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
      else if (attrs[k] != null) node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  /* ------------------------------------------------------------- Aurora */
  // Animated aurora background drawn into a fixed <canvas id="aurora-bg">.
  function auroraBackground(opts) {
    opts = opts || {};
    var canvas = document.getElementById("aurora-bg");
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.id = "aurora-bg";
      document.body.insertBefore(canvas, document.body.firstChild);
    }
    var ctx = canvas.getContext("2d");
    var reduce = global.matchMedia &&
      global.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var blobs = [
      { c: [109, 179, 242], x: 0.2, y: 0.2, r: 0.5, dx: 0.00007, dy: 0.00005, p: 0 },
      { c: [242, 155, 196], x: 0.8, y: 0.3, r: 0.45, dx: -0.00006, dy: 0.00008, p: 2 },
      { c: [95, 208, 160], x: 0.5, y: 0.8, r: 0.55, dx: 0.00005, dy: -0.00006, p: 4 },
      { c: [244, 201, 93], x: 0.3, y: 0.7, r: 0.4, dx: -0.00008, dy: -0.00004, p: 1 }
    ];

    function resize() {
      var dpr = Math.min(global.devicePixelRatio || 1, 2);
      canvas.width = global.innerWidth * dpr;
      canvas.height = global.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    global.addEventListener("resize", resize);

    function draw(t) {
      var w = global.innerWidth, h = global.innerHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#0c1018";
      ctx.fillRect(0, 0, w, h);
      blobs.forEach(function (b) {
        var bx = (b.x + Math.sin(t * 0.0002 + b.p) * 0.06) * w;
        var by = (b.y + Math.cos(t * 0.00015 + b.p) * 0.06) * h;
        var rad = b.r * Math.max(w, h);
        var g = ctx.createRadialGradient(bx, by, 0, bx, by, rad);
        g.addColorStop(0, "rgba(" + b.c[0] + "," + b.c[1] + "," + b.c[2] + ",0.22)");
        g.addColorStop(1, "rgba(" + b.c[0] + "," + b.c[1] + "," + b.c[2] + ",0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      });
    }

    if (reduce) { draw(0); return; }
    var raf;
    function loop(t) { draw(t); raf = global.requestAnimationFrame(loop); }
    raf = global.requestAnimationFrame(loop);
  }

  /* ------------------------------------------------------------ Speech */
  // Swedish Speech utility with offline audio file support, neural voice preference,
  // and dynamic online TTS fallback (Google Translate) to completely avoid English voice distortion.
  var Speech = {
    _voice: null,
    _ready: false,
    _cache: {},
    _now: null,
    rate: 1.0,
    init: function () {
      // Load audio-map.js dynamically if not already present
      if (!document.querySelector('script[src="audio-map.js"]')) {
        var s = document.createElement("script");
        s.src = "audio-map.js";
        document.head.appendChild(s);
      }

      if (!("speechSynthesis" in global)) return;
      var pick = function () {
        var voices = global.speechSynthesis.getVoices();
        // Rank voices to prefer Edge/Safari natural neural voices
        var rank = function (v) {
          if (!/^sv/i.test(v.lang)) return -1;
          var score = 1;
          if (/natural|neural|online/i.test(v.name)) score += 2;
          if (/microsoft/i.test(v.name)) score += 1;
          return score;
        };
        var svVoices = voices.filter(function (v) { return /^sv/i.test(v.lang); });
        svVoices.sort(function (a, b) { return rank(b) - rank(a); });
        Speech._voice = svVoices[0] || null;
        Speech._ready = true;
      };
      pick();
      global.speechSynthesis.onvoiceschanged = pick;
    },
    fileFor: function (text) {
      if (typeof AUDIO_FILES === "undefined" || !AUDIO_FILES) return null;
      var key = String(text || "").toLowerCase().trim();
      if (AUDIO_FILES[key]) return AUDIO_FILES[key];
      // strip common punctuation/quotes
      key = key.replace(/^[„“”"']+/g, "").replace(/[.!?,„“”"']+$/g, "").trim();
      if (AUDIO_FILES[key]) return AUDIO_FILES[key];
      var bare = key.replace(/^(en|ett|att)\s+/g, "");
      return AUDIO_FILES[bare] || null;
    },
    playFile: function (f, rate, onend) {
      this.stop();
      var a = this._cache[f] || (this._cache[f] = new Audio("audio/" + f));
      a.onended = onend || null;
      a.currentTime = 0;
      a.playbackRate = rate && rate < 0.85 ? 0.75 : 1.0;
      this._now = a;
      var p = a.play();
      if (p && p.catch) {
        p.catch(function () {
          if (onend) onend();
        });
      }
      return true;
    },
    available: function () { return true; },
    say: function (text, opts) {
      opts = opts || {};
      var f = this.fileFor(text);
      if (f) {
        return this.playFile(f, opts.rate, opts.onend);
      }
      
      // Fallback 1: Web Speech API TTS (if a Swedish voice is available)
      if ("speechSynthesis" in global) {
        try {
          this.stop();
          var u = new global.SpeechSynthesisUtterance(text);
          if (this._voice) {
            u.voice = this._voice;
          } else {
            // Fallback 2: Google Translate TTS (online)
            if (global.navigator && global.navigator.onLine) {
              var gUrl = "https://translate.google.com/translate_tts?ie=UTF-8&tl=sv&client=tw-ob&q=" + encodeURIComponent(text);
              this._now = new Audio(gUrl);
              this._now.onended = opts.onend || null;
              var p = this._now.play();
              if (p && p.catch) {
                p.catch(function () {
                  if (opts.onend) opts.onend();
                });
              }
              return true;
            } else {
              // Fallback 3: No voice & offline -> Warn the user to prevent English pronunciation
              Speech.warn();
              if (opts.onend) {
                setTimeout(opts.onend, 600);
              }
              return false;
            }
          }
          u.lang = "sv-SE";
          u.rate = opts.rate || this.rate;
          u.pitch = opts.pitch || 1.0;
          if (opts.onend) u.onend = opts.onend;
          global.speechSynthesis.speak(u);
          return true;
        } catch (e) {
          if (opts.onend) setTimeout(opts.onend, 100);
          return false;
        }
      } else {
        if (opts.onend) setTimeout(opts.onend, 100);
        return false;
      }
    },
    stop: function () {
      if (this._now) {
        try { this._now.pause(); } catch (e) {}
        this._now = null;
      }
      if ("speechSynthesis" in global) {
        try { global.speechSynthesis.cancel(); } catch (e) {}
      }
    },
    _warned: false,
    warn: function () {
      if (this._warned) return;
      this._warned = true;
      toast("🔇 <b>Ingen svensk röst hittades offline</b>.<br>Koppla upp dig för att spela nya meningar, eller använd Microsoft Edge.", "err", 8000);
    }
  };

  /* --------------------------------------------------------------- Sfx */
  // Tiny WebAudio blips for subtle feedback (no audio files needed).
  var Sfx = {
    _ctx: null,
    _ac: function () {
      if (!this._ctx) {
        var AC = global.AudioContext || global.webkitAudioContext;
        if (AC) this._ctx = new AC();
      }
      return this._ctx;
    },
    _tone: function (freq, dur, type) {
      var ac = this._ac(); if (!ac) return;
      var o = ac.createOscillator(), g = ac.createGain();
      o.type = type || "sine"; o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.15, ac.currentTime + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + dur);
      o.connect(g); g.connect(ac.destination);
      o.start(); o.stop(ac.currentTime + dur);
    },
    correct: function () { this._tone(660, 0.12); var s = this; setTimeout(function () { s._tone(880, 0.14); }, 90); },
    wrong:   function () { this._tone(180, 0.2, "sawtooth"); },
    tick:    function () { this._tone(440, 0.05); }
  };

  /* ------------------------------------------------------------- Toast */
  function toast(msg, kind, ms) {
    var host = document.getElementById("toast-host");
    if (!host) {
      host = el("div", { id: "toast-host" });
      document.body.appendChild(host);
    }
    var t = el("div", { class: "toast " + (kind || ""), text: msg });
    host.appendChild(t);
    requestAnimationFrame(function () { t.classList.add("show"); });
    setTimeout(function () {
      t.classList.remove("show");
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 300);
    }, ms || 2200);
  }

  /* ------------------------------------------------------ Header / nav */
  // Modes available for the nav bar. `enabled:false` => not yet built.
  var MODES = [
    { id: "reader",       file: "reader.html",        icon: "📖", name: "Reader" },
    { id: "news",         file: "news.html",          icon: "📰", name: "News" },
    { id: "listening",    file: "listening.html",     icon: "🎧", name: "Listening" },
    { id: "collocations", file: "collocations.html",  icon: "🔗", name: "Collocations" },
    { id: "connectors",   file: "connectors.html",    icon: "🧩", name: "Connectors" },
    { id: "tracker",      file: "tracker.html",        icon: "📊", name: "Tracker" },
    { id: "exam-reading", file: "exam-reading.html",  icon: "📝", name: "Reading Exam" },
    { id: "exam-listening", file: "exam-listening.html", icon: "🎙️", name: "Listening Exam" }
  ];

  // Render the shared header into `mountSel`. `active` = current mode id (or null for hub).
  function gameHeader(mountSel, active, opts) {
    opts = opts || {};
    var mount = typeof mountSel === "string" ? $(mountSel) : mountSel;
    if (!mount) return;
    var links = (opts.modes || MODES).filter(function (m) { return m.enabled !== false; })
      .map(function (m) {
        return el("a", {
          href: m.file,
          class: m.id === active ? "active" : "",
          html: m.icon + " " + escapeHtml(m.name)
        });
      });
    var header = el("header", { class: "site-header" + (opts.wide ? " wide" : "") }, [
      el("a", { href: "index.html", class: "brand" }, [
        el("span", { class: "flag", text: "🇸🇪" }),
        el("span", { class: "title", html: "Svenska CI<small>Comprehensible Input</small>" })
      ]),
      el("div", { class: "nav-spacer" }),
      el("nav", { class: "nav-links" }, links)
    ]);
    mount.appendChild(header);
  }

  /* ----------------------------------------------- Glossing engine (shared) */
  // Used by both the Graded Reader and the News Reader. Renders Swedish text into
  // tappable, glossed spans, wraps sentences for per-sentence audio, and drives a
  // shared tooltip. Multi-word glossary phrases (e.g. "stiger upp") are supported.

  function buildGlossMap(glossary) {
    var map = {}, maxLen = 1;
    Object.keys(glossary || {}).forEach(function (k) {
      var norm = k.split(/\s+/).map(normalizeWord).filter(Boolean).join(" ");
      if (!norm) return;
      map[norm] = { sv: k, en: glossary[k] };
      var n = norm.split(" ").length;
      if (n > maxLen) maxLen = n;
    });
    return { map: map, maxLen: maxLen };
  }

  function splitSentences(text) {
    var re = /[^.!?]*[.!?]+["'’”)]*\s*|[^.!?]+$/g;
    var out = text.match(re) || [text];
    return out.filter(function (s) { return s.trim().length; });
  }

  function highlightSentence(node) {
    $$(".sentence.speaking").forEach(function (n) { n.classList.remove("speaking"); });
    if (node) node.classList.add("speaking");
  }

  // Shared tooltip controller (uses a single #gloss-tip element; created if absent).
  var GlossTooltip = {
    node: null,
    anchor: null,
    _wired: false,
    get el() {
      if (!this.node) {
        this.node = document.getElementById("gloss-tip");
        if (!this.node) {
          this.node = el("div", { id: "gloss-tip", class: "gloss-tip" });
          document.body.appendChild(this.node);
        }
      }
      this._wire();
      return this.node;
    },
    _wire: function () {
      if (this._wired) return;
      this._wired = true;
      var self = this;
      document.addEventListener("click", function () { self.hide(); });
      window.addEventListener("scroll", function () { self.hide(); }, true);
    },
    show: function (anchor, word, entry) {
      var tip = this.el;
      if (this.anchor) this.anchor.classList.remove("active");
      this.anchor = anchor;
      anchor.classList.add("active");
      tip.innerHTML = "";
      tip.appendChild(el("span", { class: "sv", text: word }));
      if (entry && entry.en) tip.appendChild(el("span", { class: "en", text: entry.en }));
      var play = el("span", { class: "play", text: "🔊 Lyssna" });
      play.addEventListener("click", function (e) { e.stopPropagation(); Speech.say(word); });
      tip.appendChild(play);

      tip.classList.add("show");
      tip.setAttribute("aria-hidden", "false");
      var r = anchor.getBoundingClientRect();
      var tr = tip.getBoundingClientRect();
      var left = Math.min(Math.max(8, r.left), global.innerWidth - tr.width - 8);
      var top = r.top - tr.height - 8;
      if (top < 8) top = r.bottom + 8;
      tip.style.left = left + "px";
      tip.style.top = top + "px";
      Speech.say(word);
    },
    hide: function () {
      if (!this.node) return;
      this.node.classList.remove("show");
      this.node.setAttribute("aria-hidden", "true");
      if (this.anchor) { this.anchor.classList.remove("active"); this.anchor = null; }
    }
  };

  function stripWord(text) {
    return text.replace(/[.,!?;:"'’“”()\[\]…—–]/g, "").trim();
  }

  function makeWordSpan(text, entry, onInteract) {
    var span = el("span", { class: entry ? "gloss" : "word", text: text });
    span.addEventListener("click", function (e) {
      e.stopPropagation();
      if (onInteract) onInteract();
      GlossTooltip.show(span, stripWord(text), entry);
    });
    return span;
  }

  // Render glossed word/phrase spans for a chunk of text into `container`.
  function renderGlossedInto(container, text, gm, onInteract) {
    var tokens = tokenize(text);
    var i = 0;
    while (i < tokens.length) {
      var tok = tokens[i];
      if (!tok.isWord) { container.appendChild(document.createTextNode(tok.word)); i++; continue; }
      var collected = [], j = i, bestEntry = null, bestEnd = i;
      while (collected.length < gm.maxLen && j < tokens.length) {
        if (tokens[j].isWord) {
          collected.push(normalizeWord(tokens[j].word));
          var cand = collected.join(" ");
          if (gm.map[cand]) { bestEntry = gm.map[cand]; bestEnd = j; }
          j++;
        } else if (/^\s+$/.test(tokens[j].word)) { j++; }
        else { break; }
      }
      if (bestEntry) {
        var raw = "";
        for (var k = i; k <= bestEnd; k++) raw += tokens[k].word;
        container.appendChild(makeWordSpan(raw, bestEntry, onInteract));
        i = bestEnd + 1;
      } else {
        container.appendChild(makeWordSpan(tok.word, null, onInteract));
        i++;
      }
    }
  }

  // Render a block of text into `host` as glossed, sentence-wrapped paragraphs.
  // opts.onInteract() is called whenever the user taps a word/sentence (so callers
  // can stop any running read-aloud). Returns nothing.
  function renderGlossedText(host, text, glossary, opts) {
    opts = opts || {};
    var gm = buildGlossMap(glossary);
    // double newlines separate paragraphs; each becomes its own <p>
    var paragraphs = String(text).split(/\n\s*\n/);
    paragraphs.forEach(function (para) {
      if (!para.trim()) return;
      var p = el("p");
      splitSentences(para).forEach(function (sentence) {
        var sentSpan = el("span", { class: "sentence" });
        var play = el("span", { class: "sent-play", text: "🔊", title: "Lyssna på meningen" });
        play.addEventListener("click", function (e) {
          e.stopPropagation();
          if (opts.onInteract) opts.onInteract();
          highlightSentence(sentSpan);
          Speech.say(sentence.trim(), { onend: function () { sentSpan.classList.remove("speaking"); } });
        });
        sentSpan.appendChild(play);
        renderGlossedInto(sentSpan, sentence, gm, opts.onInteract);
        p.appendChild(sentSpan);
      });
      host.appendChild(p);
    });
  }

  // Factory: a read-aloud controller that speaks every .sentence inside `textSel`
  // sequentially, highlighting the current one and toggling the button at `btnSel`.
  function makeReadAloud(textSel, btnSel) {
    var ctrl = {
      playing: false,
      idx: 0,
      btn: function () { return $(btnSel); },
      start: function () {
        var nodes = $$(textSel + " .sentence");
        if (!nodes.length || !Speech.available()) {
          toast("Uppläsning stöds inte i den här webbläsaren.", "err");
          return;
        }
        this.playing = true;
        this.idx = 0;
        var b = this.btn();
        if (b) { b.textContent = "⏹ Stoppa"; b.classList.add("active"); }
        this._next(nodes);
      },
      _next: function (nodes) {
        var self = this;
        if (!self.playing || self.idx >= nodes.length) { self.stop(); return; }
        var node = nodes[self.idx];
        highlightSentence(node);
        if (node.scrollIntoView) node.scrollIntoView({ block: "center", behavior: "smooth" });
        var txt = node.textContent.replace(/^🔊/, "").trim();
        Speech.say(txt, { onend: function () { self.idx++; self._next(nodes); } });
      },
      stop: function () {
        this.playing = false;
        Speech.stop();
        highlightSentence(null);
        var b = this.btn();
        if (b) { b.textContent = "🔊 Läs upp"; b.classList.remove("active"); }
      },
      toggle: function () { this.playing ? this.stop() : this.start(); }
    };
    return ctrl;
  }

  var Gloss = {
    buildMap: buildGlossMap,
    splitSentences: splitSentences,
    renderInto: renderGlossedInto,
    renderText: renderGlossedText,
    Tooltip: GlossTooltip,
    hideTip: function () { GlossTooltip.hide(); }
  };

  /* --------------------------------------------------------- bootstrap */
  function boot(opts) {
    auroraBackground();
    Speech.init();
    if (!document.getElementById("toast-host"))
      document.body.appendChild(el("div", { id: "toast-host" }));
  }

  /* ----------------------------------------------------------- exports */
  global.SvCI = {
    Store: Store,
    Speech: Speech,
    Sfx: Sfx,
    MODES: MODES,
    auroraBackground: auroraBackground,
    gameHeader: gameHeader,
    toast: toast,
    boot: boot,
    // glossing engine (shared by Reader & News)
    Gloss: Gloss,
    makeReadAloud: makeReadAloud,
    // encounter / progress
    recordEncounter: recordEncounter,
    encounterStatus: encounterStatus,
    wordStats: wordStats,
    logSession: logSession,
    sessionCount: sessionCount,
    todayStr: todayStr,
    // text/dom helpers
    normalizeWord: normalizeWord,
    tokenize: tokenize,
    escapeHtml: escapeHtml,
    el: el, $: $, $$: $$
  };
})(window);
