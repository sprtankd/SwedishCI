/* ============================================================================
   Swedish CI — gate.js
   Client-side passphrase gate. Blocks all page content until the correct
   passphrase is entered. The passphrase is verified against a SHA-256 hash
   so the plaintext never appears in source code.
   
   Once authenticated, a token is stored in sessionStorage so the user
   doesn't need to re-enter the code on every page navigation. The token
   persists until the browser tab/window is closed.
   ========================================================================== */
(function () {
  "use strict";

  var HASH = "f7f7b2a227ca4e40167acd9ef11cff320b1009dcc82e0076879e883602212c48";
  var TOKEN_KEY = "svci_auth";

  // If already authenticated this session, skip the gate
  if (sessionStorage.getItem(TOKEN_KEY) === HASH) return;

  // ---- Build the gate overlay ----
  var overlay = document.createElement("div");
  overlay.id = "gate-overlay";
  overlay.innerHTML = [
    '<div id="gate-card">',
    '  <div class="gate-flag">🇸🇪</div>',
    '  <h1 class="gate-title">Svenska CI</h1>',
    '  <p class="gate-sub">Ange åtkomstkod för att fortsätta<br><span class="gate-en">Enter access code to continue</span></p>',
    '  <form id="gate-form" autocomplete="off">',
    '    <input id="gate-input" type="password" placeholder="Åtkomstkod…" autocomplete="off" autofocus>',
    '    <button type="submit" id="gate-btn">Öppna →</button>',
    '  </form>',
    '  <p id="gate-error" class="gate-err"></p>',
    '</div>'
  ].join("\n");

  // ---- Inject styles ----
  var style = document.createElement("style");
  style.textContent = [
    "#gate-overlay {",
    "  position: fixed; inset: 0; z-index: 99999;",
    "  background: #0c1018;",
    "  display: flex; align-items: center; justify-content: center;",
    "  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;",
    "}",
    "#gate-card {",
    "  background: rgba(255,255,255,0.06);",
    "  border: 1px solid rgba(255,255,255,0.12);",
    "  border-radius: 22px;",
    "  backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);",
    "  box-shadow: 0 12px 40px rgba(0,0,0,0.45);",
    "  padding: 48px 40px 40px;",
    "  max-width: 400px; width: 90%;",
    "  text-align: center;",
    "  animation: gateFadeIn 0.4s ease both;",
    "}",
    ".gate-flag { font-size: 3rem; margin-bottom: 8px; }",
    ".gate-title {",
    "  font-size: 1.8rem; font-weight: 800; margin: 0 0 8px;",
    "  background: linear-gradient(100deg, #f4c95d, #f29bc4 60%, #6db3f2);",
    "  -webkit-background-clip: text; background-clip: text; color: transparent;",
    "}",
    ".gate-sub { color: #aab3c8; margin: 0 0 24px; font-size: 0.95rem; line-height: 1.5; }",
    ".gate-en { font-size: 0.82rem; color: #6f7890; }",
    "#gate-form { display: flex; flex-direction: column; gap: 12px; }",
    "#gate-input {",
    "  padding: 14px 18px; border-radius: 14px;",
    "  border: 1px solid rgba(255,255,255,0.15);",
    "  background: rgba(255,255,255,0.05);",
    "  color: #eef2fb; font-size: 1.05rem; font-family: inherit;",
    "  text-align: center; letter-spacing: 2px;",
    "  transition: border-color 0.15s ease;",
    "}",
    "#gate-input:focus { outline: none; border-color: #6db3f2; }",
    "#gate-input::placeholder { color: #6f7890; letter-spacing: 0.5px; }",
    "#gate-btn {",
    "  padding: 14px 24px; border-radius: 14px; border: none;",
    "  background: linear-gradient(120deg, #f4c95d, #f0b73c);",
    "  color: #2a2008; font-weight: 700; font-size: 1rem;",
    "  cursor: pointer; font-family: inherit;",
    "  transition: filter 0.15s ease, transform 0.1s ease;",
    "}",
    "#gate-btn:hover { filter: brightness(1.08); transform: translateY(-1px); }",
    "#gate-btn:active { transform: translateY(0); }",
    ".gate-err {",
    "  color: #f2788c; font-size: 0.88rem; margin: 8px 0 0;",
    "  min-height: 1.2em; transition: opacity 0.2s ease;",
    "}",
    "@keyframes gateFadeIn {",
    "  from { opacity: 0; transform: translateY(16px) scale(0.96); }",
    "  to   { opacity: 1; transform: none; }",
    "}",
    "@keyframes gateShake {",
    "  0%, 100% { transform: translateX(0); }",
    "  20%, 60% { transform: translateX(-8px); }",
    "  40%, 80% { transform: translateX(8px); }",
    "}"
  ].join("\n");

  document.documentElement.appendChild(style);
  document.documentElement.appendChild(overlay);

  // Hide all body content until authenticated
  var hideStyle = document.createElement("style");
  hideStyle.id = "gate-hide";
  hideStyle.textContent = "body { visibility: hidden !important; overflow: hidden !important; }";
  document.documentElement.appendChild(hideStyle);

  // ---- SHA-256 helper (Web Crypto API) ----
  function sha256(str) {
    var buf = new TextEncoder().encode(str);
    return crypto.subtle.digest("SHA-256", buf).then(function (hash) {
      var arr = Array.from(new Uint8Array(hash));
      return arr.map(function (b) { return b.toString(16).padStart(2, "0"); }).join("");
    });
  }

  // ---- Form handler ----
  var form = overlay.querySelector("#gate-form");
  var input = overlay.querySelector("#gate-input");
  var errEl = overlay.querySelector("#gate-error");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var val = input.value.trim();
    if (!val) { errEl.textContent = "Ange en kod · Enter a code"; return; }

    sha256(val).then(function (h) {
      if (h === HASH) {
        // Success — store token, remove gate
        sessionStorage.setItem(TOKEN_KEY, HASH);
        overlay.style.transition = "opacity 0.3s ease";
        overlay.style.opacity = "0";
        setTimeout(function () {
          overlay.remove();
          style.remove();
          hideStyle.remove();
          document.body.style.visibility = "";
          document.body.style.overflow = "";
        }, 300);
      } else {
        // Wrong code
        errEl.textContent = "Fel kod. Försök igen. · Wrong code.";
        input.value = "";
        input.focus();
        var card = overlay.querySelector("#gate-card");
        card.style.animation = "gateShake 0.4s ease";
        setTimeout(function () { card.style.animation = ""; }, 450);
      }
    });
  });
})();
