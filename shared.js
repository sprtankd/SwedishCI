/* ============================================================
   Swedish CI — shared.js
   Shared utilities for every mode page: storage, speech, UI
   chrome (aurora background, header, toasts), small DOM helpers.
   No external libraries, no build step — plain <script> include.
   ============================================================ */

/* ---------------- Store ----------------
   Single namespaced localStorage blob so we never collide with the
   SwedishGames companion app (which uses its own key). */
const Store = (() => {
  const KEY = "svenska_ci_v1";

  function readAll() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      console.warn("Store: failed to read, resetting", e);
      return {};
    }
  }

  function writeAll(data) {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) {
      console.warn("Store: failed to write", e);
    }
  }

  function get(path, fallback) {
    const data = readAll();
    const parts = path.split(".");
    let cur = data;
    for (const p of parts) {
      if (cur == null || typeof cur !== "object" || !(p in cur)) return fallback;
      cur = cur[p];
    }
    return cur === undefined ? fallback : cur;
  }

  function set(path, value) {
    const data = readAll();
    const parts = path.split(".");
    let cur = data;
    for (let i = 0; i < parts.length - 1; i++) {
      const p = parts[i];
      if (typeof cur[p] !== "object" || cur[p] === null) cur[p] = {};
      cur = cur[p];
    }
    cur[parts[parts.length - 1]] = value;
    writeAll(data);
    return value;
  }

  function update(path, fn, fallback) {
    const current = get(path, fallback);
    const next = fn(current);
    set(path, next);
    return next;
  }

  function all() {
    return readAll();
  }

  return { get, set, update, all, KEY };
})();

/* ---------------- Speech ----------------
   Swedish TTS via the browser's SpeechSynthesis API. No audio files
   shipped with this app (no SwedishGames audio/ folder in scope), so
   everything routes through the Web Speech API with a Swedish voice
   when available, with graceful no-op fallback. */
const Speech = (() => {
  const synth = typeof window !== "undefined" ? window.speechSynthesis : null;
  let voices = [];
  let voicesReady = false;

  function loadVoices() {
    if (!synth) return;
    voices = synth.getVoices();
    voicesReady = voices.length > 0;
  }

  if (synth) {
    loadVoices();
    synth.addEventListener?.("voiceschanged", loadVoices);
  }

  function pickVoice() {
    if (!voices.length) loadVoices();
    return (
      voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("sv")) || null
    );
  }

  function say(text, opts = {}) {
    if (!synth || !text) return false;
    try {
      synth.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      const voice = pickVoice();
      if (voice) utter.voice = voice;
      utter.lang = voice ? voice.lang : "sv-SE";
      utter.rate = opts.rate || 1.0;
      utter.pitch = opts.pitch || 1.0;
      if (opts.onend) utter.onend = opts.onend;
      synth.speak(utter);
      return true;
    } catch (e) {
      console.warn("Speech.say failed", e);
      return false;
    }
  }

  function stop() {
    synth?.cancel();
  }

  function supported() {
    return !!synth;
  }

  function hasSwedishVoice() {
    return !!pickVoice();
  }

  return { say, stop, supported, hasSwedishVoice };
})();

/* ---------------- Sfx ----------------
   Tiny, optional UI sounds via WebAudio oscillator beeps — no audio
   asset files needed. Subtle and easy to ignore; never required for
   comprehension (CI principle: meaning carried by text/audio content,
   not gamified sound). */
const Sfx = (() => {
  let ctx = null;
  function ensureCtx() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    return ctx;
  }

  function tone(freq, durationMs, type = "sine", gain = 0.05) {
    const audioCtx = ensureCtx();
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    g.gain.value = gain;
    osc.connect(g).connect(audioCtx.destination);
    osc.start();
    g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + durationMs / 1000);
    osc.stop(audioCtx.currentTime + durationMs / 1000);
  }

  function correct() {
    tone(660, 140);
    setTimeout(() => tone(880, 160), 90);
  }

  function incorrect() {
    tone(220, 220, "sawtooth", 0.04);
  }

  function click() {
    tone(440, 60, "sine", 0.03);
  }

  return { correct, incorrect, click };
})();

/* ---------------- DOM helpers ---------------- */
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.startsWith("on") && typeof v === "function") {
      node.addEventListener(k.slice(2).toLowerCase(), v);
    } else if (v !== undefined && v !== null) {
      node.setAttribute(k, v);
    }
  }
  for (const child of [].concat(children)) {
    if (child == null) continue;
    node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
  }
  return node;
}

function qs(sel, root = document) {
  return root.querySelector(sel);
}

function qsa(sel, root = document) {
  return Array.from(root.querySelectorAll(sel));
}

/* ---------------- Aurora background ----------------
   Call once per page; injects the fixed background layer behind
   everything else. Idempotent — safe to call more than once. */
function auroraBackground() {
  if (qs(".aurora-bg")) return;
  const bg = el("div", { class: "aurora-bg", "aria-hidden": "true" }, [
    el("div", { class: "blob b1" }),
    el("div", { class: "blob b2" }),
    el("div", { class: "blob b3" }),
    el("div", { class: "blob b4" }),
  ]);
  document.body.prepend(bg);
}

/* ---------------- Game header ----------------
   gameHeader({ title, subtitle, backHref, backLabel, right })
   `right` is an array of already-built DOM nodes (e.g. badges) or
   HTML strings, rendered on the right side of the header.
   Returns the header element; caller inserts it where needed. */
function gameHeader(opts = {}) {
  const {
    title = "Swedish CI",
    subtitle = "",
    backHref = "index.html",
    backLabel = "Hub",
    right = [],
  } = opts;

  const header = el("div", { class: "game-header" }, [
    el("div", { class: "gh-left" }, [
      el("a", { class: "gh-back", href: backHref }, [`← ${backLabel}`]),
      el("div", {}, [
        el("div", { class: "gh-title" }, [title]),
        subtitle ? el("div", { class: "gh-subtitle" }, [subtitle]) : null,
      ]),
    ]),
    el(
      "div",
      { class: "gh-right" },
      right.map((r) => (typeof r === "string" ? el("span", { html: r }) : r))
    ),
  ]);

  return header;
}

/* ---------------- Toast ---------------- */
function toast(message, ms = 2600) {
  let host = qs(".toast-host");
  if (!host) {
    host = el("div", { class: "toast-host" });
    document.body.appendChild(host);
  }
  const node = el("div", { class: "toast" }, [message]);
  host.appendChild(node);
  setTimeout(() => {
    node.classList.add("out");
    setTimeout(() => node.remove(), 250);
  }, ms);
}

/* ---------------- Celebration ----------------
   Subtle, adult-appropriate feedback — a soft pulse ring, no confetti.
   Apply to any element (e.g. a card or button) on success/completion. */
function celebrate(target) {
  if (!target) return;
  target.classList.remove("celebrate-pulse");
  // restart animation even if called twice in a row
  void target.offsetWidth;
  target.classList.add("celebrate-pulse");
  setTimeout(() => target.classList.remove("celebrate-pulse"), 800);
}

/* ---------------- Word encounter tracking ----------------
   Tracks passive comprehension encounters per Swedish word, the core
   differentiator from SwedishGames' active-recall tracking. Words
   graduate: new (0) -> met (1-2) -> familiar (3-5) -> known (6+). */
const Words = (() => {
  const PATH = "words";

  function status(count) {
    if (count >= 6) return "known";
    if (count >= 3) return "familiar";
    if (count >= 1) return "met";
    return "new";
  }

  function record(word, contextId) {
    const key = word.toLowerCase();
    Store.update(
      `${PATH}.${key}`,
      (entry) => {
        entry = entry || { count: 0, contexts: [] };
        entry.count += 1;
        if (contextId && !entry.contexts.includes(contextId)) {
          entry.contexts.push(contextId);
        }
        entry.lastSeen = Date.now();
        return entry;
      },
      null
    );
  }

  function get(word) {
    const key = word.toLowerCase();
    const entry = Store.get(`${PATH}.${key}`, { count: 0, contexts: [] });
    return { ...entry, status: status(entry.count) };
  }

  function all() {
    return Store.get(PATH, {});
  }

  return { record, get, all, status };
})();

/* ---------------- Misc helpers ---------------- */
function streakUpdate() {
  const today = new Date().toISOString().slice(0, 10);
  const last = Store.get("streak.lastDate", null);
  let count = Store.get("streak.count", 0);
  if (last === today) return count;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  count = last === yesterday ? count + 1 : 1;
  Store.set("streak.lastDate", today);
  Store.set("streak.count", count);
  return count;
}
