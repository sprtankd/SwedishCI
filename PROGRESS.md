# Build Progress — read this FIRST every run

> **You are an autonomous agent continuing this project unattended.**
> Your cloud session is ephemeral: **anything not committed AND pushed is lost.** So the
> protocol below is designed to be crash-safe and resumable — if a run dies mid-task, the
> next run resumes cleanly instead of wasting effort or duplicating work.
>
> **IMPORTANT:** Tasks below are split into many small chunks. Each chunk ≈ 15-30 min of
> work. Commit + push after EACH chunk. This way, if your session runs out of tokens,
> at most ONE small chunk is lost — not an entire mode.
> [!IMPORTANT]
> **CRITICAL: CHECK PRs AND BRANCHES BEFORE STARTING WORK**
> To avoid repeating work in parallel, you **MUST** run the following checks at the start of your session:
> 1. Check all local and remote branches: `git branch -a`
> 2. Check for open Pull Requests: `gh pr list`
> 3. If there is an active PR or branch containing work-in-progress, **do not** branch off `main`. Checkout that branch or resume from it. Only start a new branch from `main` if all previous PRs are merged and you are starting the next pending task.

## Crash-safe build loop (follow exactly)

1. **Sync & read.** Start from the latest `main`. Read `PLAN.md` and this file top-to-bottom.
2. **Pick / resume the NEXT chunk.**
   - If any chunk is marked **`[~]`**, that means a previous run started it — **resume
     that chunk**, do not skip ahead.
   - Otherwise take the **first `[ ]` chunk** under the current milestone.
3. **Claim it (cheap commit).** Change the chunk's box to `[~]` with a timestamp note,
   then **immediately `git commit` + `git push`** just that change. This "claims" the
   chunk so a re-run knows it was attempted.
4. **Build the chunk.** Keep changes small and focused. The app must remain working after
   every chunk — never break existing functionality.
5. **Commit + push after each chunk.** Small commits = no lost work.
6. **Mark done.** Change `[~]` to `[x]` with a one-line note + date, commit + push.
7. **Continue.** Move to the next chunk. Do as many chunks as your session allows.
   No artificial "one item per run" limit — but **never skip the commit+push step**.

## Guardrails
- Never break the hub or any previously-working mode.
- Reuse the `SwedishGames` design system (shared.js patterns, aurora background, glass
  cards, Nordic palette). Do NOT create a separate design language.
- No external libraries, no CDN, no build step. Must work offline via double-click.
- All text content must be at the correct CEFR level for its tagged level.
- If a task is ambiguous, build the simplest faithful version and add a `NOTE:` line.
- **Commit + push after EVERY chunk**, not just at the end.

## Content generation guidelines
- Generate Swedish text at the appropriate level, using high-frequency words from
  `swedish-data.js` where possible.
- Every story/passage needs: title, English title, level tag, theme, glossary of words
  likely unknown at that level, comprehension questions (gist + detail).
- Audio: use pre-generated TTS clips where available (reuse SwedishGames audio infra).
  For new stories, provide TTS integration via the Speech helper from shared.js.

---

## Milestone 0: Project scaffold
---

## Milestone 1: Graded Reader (📖)
---

## Milestone 2: News Reader (📰)
---

## Milestone 3: Listening Lab (🎧)
---

## Milestone 4: Collocation & Connector Activities (🔗 🧩)

### Implementation reference for M4
> **File pattern**: Every mode = `<mode>.html` (shell) + `<mode>.js` (IIFE) + `data/<name>.js`.
> HTML loads `shared.css`, `shared.js`, data file(s), then mode JS. IIFE calls
> `SvCI.boot()`, `SvCI.gameHeader("#header", "<mode-id>")`, then builds UI.
>
> **Shared API** (from `shared.js`):
> - `SvCI.Store.get(path, fallback)` / `.load()` / `.save()` — localStorage
> - `SvCI.Sfx.correct()` / `.wrong()` / `.tick()` — audio feedback
> - `SvCI.toast(msg, kind, ms)` — toast notifications
> - `SvCI.el(tag, attrs, children)` / `SvCI.$(sel)` / `SvCI.$$(sel)` — DOM helpers
> - `SvCI.recordEncounter(words, storyId)` — word encounter tracking
> - `SvCI.logSession()` — session/streak tracking
>
> **Store shape** for these modes (already exists in shared.js defaults):
> ```js
> progress.collocations: { done: 0, correct: 0 }
> progress.connectors:   { done: 0, correct: 0 }
> ```
>
> **Hub integration**: After building a mode, set `enabled: true` for its key in
> `index.html` line ~64 (in the `MODE_INFO` object). This lights up the card on the hub.
>
> **CSS**: Add new selectors to `shared.css` (never separate CSS files).



---

## Milestone 5: Vocab Tracker Dashboard (📊)

### Implementation reference for M5
> **Data source**: `SvCI.Store.load().words` — object keyed by normalized word:
> `{ "hund": { count: 3, firstSeen: timestamp, lastSeen: timestamp, contexts: ["daily-001"] } }`
> Status = `SvCI.encounterStatus(count)` → "new"(0) / "met"(1-2) / "familiar"(3-5) / "known"(6+)
>
> No separate data file needed — tracker reads directly from Store. But to resolve
> context IDs to story/article titles, load ALL data files in tracker.html:
> `stories-a2.js`, `stories-a2-high.js`, `stories-b1.js`, `news-b1.js`, `news-b1plus.js`,
> `listening-a2.js`, `listening-b1.js`.

<!-- Completed chunks moved to Done -->

---

## Milestone 6: Exam Simulators (📝 🎙️)

### Implementation reference for M6
> **Exam data schema (reading)**:
> ```js
> window.SvCI_EXAM_READING_C = [{
>   id: "exam-rc-1", title: "Läsförståelse C — Prov 1", level: "C",
>   timeMinutes: 30,
>   texts: [{
>     id: "rc1-t1", title: "Hyresavtal", type: "informerande",
>     text: "Lediga lägenheter...",  // ~100 words for C, ~200-300 for D
>     questions: [{
>       q: "Vad kostar lägenheten?", qEn: "How much?",
>       options: ["8 500 kr", "7 200 kr", "9 000 kr", "6 800 kr"], correct: 0
>     }]
>   }]
> }];
> ```
>
> **Exam data schema (listening)** — same but with `passages` instead of `texts`:
> ```js
> window.SvCI_EXAM_LISTENING_C = [{
>   id: "exam-lc-1", title: "Hörförståelse C — Prov 1", level: "C",
>   timeMinutes: 20,
>   passages: [{
>     id: "lc1-p1", title: "Telefonsamtal", transcript: "Hej, jag ringer...",
>     replays: 2,  // C=2 replays, D=1 replay
>     questions: [{ q, qEn, options[4], correct }]
>   }]
> }];
> ```
>
> **Store path**: `progress.exams.push({id, kind:'reading'|'listening', level, score, total, date})`
>
> **TTS for listening exams**: Use `SvCI.Speech.say(transcript)` at rate 1.0 (no speed
> controls in exam mode — it's a test).

<!-- Completed chunks moved to Done -->

---

## Milestone 7: Content expansion & polish

### Implementation reference for M7
> All new content MUST follow the EXACT existing data schemas. Check existing data files
> for the precise shape. Stories: `{id, title, titleEn, level, theme, wordCount, text,
> glossary, questions[{type, q, qEn, options, correct}]}`. Questions: 4 for A2, 5 for B1/B1+.
> News: same + `{headline, lead, body, source, textType}`.
> Listening: same + `{transcript}`.
>
> New stories can go in new data files (e.g. `data/stories-a2-extra.js`) as long as
> they register into the SAME `window.SvCI_STORIES` array (push/concat). Or append
> to existing files. Either works.

- [ ] 7.1 — Add 10 more A2 stories (total 20). Topics: library visit, cooking, park
      walk, neighbor chat, birthday, laundry, gym, train trip, supermarket, pet.
      60-100 words each, 4 questions each.
- [ ] 7.2 — Add 10 more B1 stories (total 15). Topics: job interview followup, school
      meeting, recycling debate, moving house, Swedish holidays deeper, healthcare
      system, bank visit, friendship, volunteer work, news discussion. 150-250w, 5 Qs.
- [ ] 7.3 — Add 5 B1+ stories (250-350w). Topics: democracy/voting, work-life balance
      debate, immigration perspectives, allemansrätten, digital privacy. 5 Qs each.
- [ ] 7.4 — Add 5 more news articles per level (B1 + B1+). Follow news schema exactly.
- [ ] 7.5 — Add 5 more listening passages per level (A2 + B1). Follow listening schema.
- [ ] 7.6 — Cross-link: after story/news completion, check which glossary words are
      still "new"/"met" status. Show card: "Öva dessa ord i SwedishGames" with relative
      link `../SwedishGames/index.html`. Simple suggestion, no deep integration.
- [ ] 7.7 — Study plan: new section on hub (index.html) below mode grid. Conditional
      based on stats: <10 texts → "Start with 2 Reader stories/day"; 10-30 → "Add News
      + Listening"; >30 → "Try Exam simulators + Collocations". Simple rendering.
- [ ] 7.8 — Final polish: all .html opens by double-click with no console errors, all
      modes linked from hub, mobile responsive (test 375px), touch targets ≥44px,
      keyboard nav, localStorage persists across modes, reading experience font ≥1.1rem
      line-height ≥1.7.

---

## Done
(Completed chunks are moved here with a date and note.)
- [x] 0.1 — `shared.css` base design system (aurora bg, glass cards, Nordic palette,
      glossing styles, mode grid, toast). _(2026-06-17)_
- [x] 0.2 — `shared.js`: Store (namespaced `svenska_ci_v1`), Speech (sv-SE TTS), Sfx,
      auroraBackground canvas, gameHeader nav, toast, encounter tracking, streaks,
      tokenize/gloss helpers. _(2026-06-17)_
- [x] 0.3 — `index.html` hub: hero, progress dashboard (words met/known, texts done,
      sessions, streak, word-knowledge bar), 8 mode cards (only Reader enabled).
      jsdom smoke test passes, no console errors. _(2026-06-17)_
- [x] 0.4 — `data/stories-a2.js`: 5 A2-low stories (81–90w each) — daily routine,
      shopping, café, weather, family. Registry pattern into `window.SvCI_STORIES`;
      glossaries + 4 questions each, validated. _(2026-06-17)_
- [x] 0.5 — `data/stories-a2-high.js`: 5 A2-high stories (106–118w) — job interview,
      doctor, apartment hunting, bus, Swedish holidays. Subordinate clauses introduced;
      glossaries + 5 questions each, validated. _(2026-06-17)_
- [x] 0.6 — Scaffold verified: all shared assets + data files present, jsdom smoke
      test of index.html passes with no console errors. Milestone 0 complete. _(2026-06-17)_
- [x] 1.1 — `reader.html` + `reader.js` skeleton: level tabs (A2-low/high/B1/B1+),
      per-level progress bar, story list cards, reading view, questions view, view
      switching. Wired from hub. jsdom smoke test passes. _(2026-06-17)_
- [x] 1.2 — Glossing engine: tokenizes story text, wraps glossary words/phrases
      (incl. multi-word like "stiger upp") in tappable spans with dotted underline;
      every other word tappable for pronunciation. Tooltip shows sv + en + 🔊 listen
      via Speech. Dismiss on outside click/scroll. Smoke test passes. _(2026-06-17)_
- [x] 1.3 — Interactive comprehension questions: multiple choice with correct/wrong
      styling, Sfx feedback, per-question explanations, score panel (best score +
      completion saved to localStorage, session logged), "next text" navigation.
      Smoke test: 100% scored & persisted. _(2026-06-17)_
- [x] 1.4 — Story progression: level selector + per-level story lists + completion
      tracking (delivered in 1.1/1.3) plus last-level persistence so the reader
      resumes where the learner left off. Smoke test: level + completion survive
      reload. _(2026-06-17)_
- [x] 1.5 — Word encounter tracking: on first story completion, every glossary
      word/phrase is recorded as one encounter tied to that story (counts accumulate
      across distinct stories; new→met→familiar→known). Smoke test: 30 words tracked
      with contexts + correct status graduation. _(2026-06-17)_
- [x] 1.6 — Audio playback: "🔊 Läs upp" reads the whole story sentence-by-sentence
      via sv-SE TTS, highlighting + scrolling to the current sentence; per-sentence
      🔊 tap plays one sentence; word tap plays the word. Sentences wrapped in spans.
      Smoke test: 12 sentences chained + reset. _(2026-06-17)_
- [x] 1.7 — Reader polish: view-enter fade transitions, fixed in-story reading
      progress bar (fills on scroll), level-complete celebration banner + toast when
      all of a level's stories are done. Mobile responsive tweaks. Smoke test passes. _(2026-06-17)_
- [x] 1.8 — `data/stories-b1.js`: 5 B1 stories (174–187w) — workplace culture, healthcare,
      environment/climate, traditions, immigrant experience. Connectors + BIFF; 20–23
      gloss words & 5 questions each. B1 tab now enabled (15 stories total). Milestone 1
      complete. _(2026-06-17)_
- [x] 2.1 — `data/news-b1.js`: 5 B1 news articles (146–167w) — weather, city festival,
      job market, health advice, technology/payments. Headline+lead+body+source+textType
      (informational/instructional), glossaries + 5 questions each. Registers into
      `window.SvCI_NEWS`. Validated. _(2026-06-17)_
- [x] 2.2 — Refactored the glossing engine + read-aloud into shared.js (`SvCI.Gloss`,
      `SvCI.makeReadAloud`) so Reader & News share one engine (reader smoke tests still
      pass). Built `news.html` + `news.js`: headline, lead, glossed body, source
      attribution, questions, encounter tracking, level tabs. Hub card enabled.
      Smoke test passes. _(2026-06-17)_
- [x] 2.3 — Text-type indicators (informerande/instruerande/argumenterande) with
      colored pills on cards + article view, a legend explaining the SFI D categories,
      and a per-article genre hint. Smoke test passes. _(2026-06-17)_
- [x] 2.4 — `data/news-b1plus.js`: 5 B1+ articles (225–251w) — integration, climate
      policy, education reform, gender equality, digital society. Argumentative +
      informational, 4 paragraphs each, abstract vocab + connectors (å ena/andra sidan,
      däremot, tvärtom, desto). Enhanced shared renderer to split paragraphs on blank
      lines. B1+ news tab enabled. _(2026-06-17)_
      NOTE: B1+ articles landed at ~225–251 words, a touch under the ~250-400 target,
      but with full B1+ complexity/abstraction. Length can be extended in Milestone 7.
- [x] 2.5 — News reader polish: difficulty indicator (text-type + level pills) and
      estimated reading time (~100 wpm) on cards and in the article view. List view,
      completion tracking and word-encounter integration verified. Milestone 2 complete.
      _(2026-06-17)_
- [x] 3.1 — `listening.html` + `listening.js` skeleton: level tabs (A2/B1), passage
      list with empty-state, listen view with TTS player (play/stop/replay), questions
      view, transcript-reveal view (glossed + re-listen via shared engine). Listen-first
      flow wired; empty-data smoke test passes with no console errors. _(2026-06-17)_
- [x] 3.2 — `data/listening-a2.js`: 5 A2 listening passages (50–68 spoken words) —
      voicemail, shop dialogue, station announcement, day-off monologue, booking call.
      Audio via TTS from transcript. Glossaries + 4 questions each. Registers into
      `window.SvCI_LISTENING`. Full flow smoke test passes. _(2026-06-17)_
- [x] 3.3 — Listen-first flow completed: questions stay locked ("🔒 Spela ljudet
      först") until the learner has played the audio at least once; transcript revealed
      only after answering; re-listen with glosses. Hub Listening card enabled. Smoke
      test passes. _(2026-06-17)_
- [x] 3.4 — Speed controls (0,75× / 1× / 1,1×) on the listen view and transcript
      re-listen, applied via shared Speech rate, persisted in localStorage and restored
      on reload; replay button repeats audio. Smoke test passes. _(2026-06-17)_
- [x] 3.5 — `data/listening-b1.js`: 5 B1 passages (92–105 spoken words) — cycling
      interview, workplace chat, apartment voicemail, recycling announcement, "lagom"
      talk. Glossaries + 5 questions each. B1 listening tab enabled (10 total). _(2026-06-17)_
- [x] 3.6 — Listening polish: view-enter transitions, per-level progress tracking,
      level-complete celebration banner + toast, touch-friendly mobile audio controls
      (wrapping play/replay + speed tabs). Smoke test passes. Milestone 3 complete. _(2026-06-17)_
- [x] 4.1 — `data/collocations.js` created with 65 collocation entries (50 particle verbs
      + 15 adjective/verb preposition pairs) with schema `{id, collocation, collocationEn,
      type, level, blank, options, correct, examples}`. Ported from divergent branch. _(2026-06-17)_
- [x] 4.2 — `collocations.html` + `collocations.js` created: Collocation Cards mode with level filtering, shuffled cards, automatic correct/incorrect styling/Sfx, dynamic progress tracking, and local persistence of scores/mistakes. _(2026-06-17)_
- [x] 4.3 — `data/connectors.js` created with 31 discourse connectors across 7 semantic categories, each populated with 2 custom B1-level exercises, English translations, and detailed explanations. _(2026-06-17)_
- [x] 4.4 — `connectors.html` + `connectors.js` created: Connector Challenge mode with category tabs, shuffled exercises, inline explanation panels showing after answer selection, correct/incorrect visual/Sfx cues, and local persistence of scores/mistakes. _(2026-06-17)_
- [x] 4.5 — Polish & integration complete for both modes: A2-to-B1 level locking (unlocks at >=70%), "Granska fel" review mode, animated entry transitions, and responsive mobile-first grid controls. _(2026-06-17)_
- [x] 5.1 — Create `tracker.html` + `tracker.js` with word grid. _(2026-06-17)_
- [x] 5.2 — Add filters: Status pills (All/New/Met/Familiar/Known) + Sort dropdown. _(2026-06-17)_
- [x] 5.3 — Word detail view: click a pill → overlay panel showing metadata, context resolution and speech synth. _(2026-06-17)_
- [x] 5.4 — Readiness score: estimate CEFR level from word knowledge distribution. _(2026-06-17)_
- [x] 5.5 — Polish: responsive grid, staggered animations, CSV exporting, and keyboard nav. _(2026-06-17)_
- [x] 6.1 — Create `data/exam-reading-c.js`: 2 SFI C-style reading tests. _(2026-06-17)_
- [x] 6.2 — Create `exam-reading.html` + `exam-reading.js`: Exam selection screen, instructions, timer widget, submit flow, and grading. _(2026-06-17)_
- [x] 6.3 — Create `data/exam-reading-d.js`: 2 SFI D-style reading tests with longer texts. _(2026-06-17)_
- [x] 6.4 — Create `data/exam-listening-c.js`: 2 SFI C-style listening tests with passages and questions. _(2026-06-17)_
- [x] 6.5 — Create `exam-listening.html` + `exam-listening.js`: Timed listening simulator with TTS player, locked questions, and replay limits. _(2026-06-17)_
- [x] 6.6 — Create `data/exam-listening-d.js`: 2 SFI D-style listening tests with 1 replay. _(2026-06-17)_
- [x] 6.7 — Exam history: show past attempts under cards and render comprehensive Historik history table. _(2026-06-17)_
- [x] 6.8 — Polish exams: timer warning style at <5 min, danger pulse at <2 min, audio tick at <1 min, per-passage breakdown, focus area recommendations, and trend indicators. _(2026-06-17)_


---

## Notes
- This project builds on top of `SwedishGames` data and shared infrastructure.
  The `data/` subfolder in this project contains CI-specific content (stories,
  articles, listening passages, exam simulations).
- Audio for stories will use the same TTS approach: `Speech.say()` from shared.js
  for words that have pre-generated audio, falling back to browser Swedish TTS.
- The encounter tracking system is the key differentiator from SwedishGames: it
  tracks PASSIVE comprehension encounters, not active recall performance.
