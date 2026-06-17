# Build Progress — read this FIRST every run

> **You are an autonomous agent continuing this project unattended.**
> Your cloud session is ephemeral: **anything not committed AND pushed is lost.** So the
> protocol below is designed to be crash-safe and resumable — if a run dies mid-task, the
> next run resumes cleanly instead of wasting effort or duplicating work.
>
> **IMPORTANT:** Tasks below are split into many small chunks. Each chunk ≈ 15-30 min of
> work. Commit + push after EACH chunk. This way, if your session runs out of tokens,
> at most ONE small chunk is lost — not an entire mode.

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
- [~] 3.4 — Add speed controls (0.75x / 1.0x / 1.1x) and repeat controls. _(claimed 2026-06-17)_
- [ ] 3.5 — Create `data/listening-b1.js` with 5 passages at B1 level. Longer,
      more complex topics.
- [ ] 3.6 — Polish: smooth transitions, progress tracking, mobile audio controls.

---

## Milestone 4: Collocation & Connector Activities (🔗 🧩)
- [ ] 4.1 — Create `data/collocations.js` with 50+ particle verb / preposition
      collocations, each with 2-3 example sentences showing usage in context.
- [ ] 4.2 — Create `collocations.html`: read a mini-context paragraph, fill in the
      correct particle/preposition from choices. NOT flashcards — always in context.
- [ ] 4.3 — Create `data/connectors.js` with 30+ discourse connectors (dessutom,
      däremot, alltså, dock, trots att, eftersom…) with gap-fill exercises in short
      texts.
- [ ] 4.4 — Create `connectors.html`: read a short text with a gap, pick the right
      connector. Show explanation of why it fits.
- [ ] 4.5 — Polish both modes: progress tracking, difficulty progression, review mode.

---

## Milestone 5: Vocab Tracker Dashboard (📊)
- [ ] 5.1 — Create `tracker.html` with word grid showing all 1593 words color-coded
      by encounter status (unknown / met / familiar / known).
- [ ] 5.2 — Add filters: by theme, part of speech, frequency rank, encounter status.
- [ ] 5.3 — Add word detail view: click a word to see all story contexts where it
      appeared, plus its encounter history.
- [ ] 5.4 — Add overall "readiness score" estimating CEFR level based on word
      knowledge distribution.
- [ ] 5.5 — Polish dashboard: responsive grid, smooth animations, export stats.

---

## Milestone 6: Exam Simulators (📝 🎙️)
- [ ] 6.1 — Create `data/exam-reading-c.js` with 2 SFI C-style reading tests
      (2-3 short texts + questions each).
- [ ] 6.2 — Create `exam-reading.html`: timed reading comprehension test interface
      with text display, questions, timer, and scoring.
- [ ] 6.3 — Create `data/exam-reading-d.js` with 2 SFI D-style reading tests
      (longer, more complex texts).
- [ ] 6.4 — Create `data/exam-listening-c.js` with 2 SFI C-style listening tests.
- [ ] 6.5 — Create `exam-listening.html`: timed listening test interface.
- [ ] 6.6 — Create `data/exam-listening-d.js` with 2 SFI D-style listening tests.
- [ ] 6.7 — Add exam history tracking: past scores, date, areas of weakness.
- [ ] 6.8 — Polish exam modes: realistic timer, proper instructions, result breakdown.

---

## Milestone 7: Content expansion & polish
- [ ] 7.1 — Add 10 more A2 stories (total 20).
- [ ] 7.2 — Add 10 more B1 stories (total 15).
- [ ] 7.3 — Add 5 B1+ stories.
- [ ] 7.4 — Add 5 more news articles per level.
- [ ] 7.5 — Add 5 more listening passages per level.
- [ ] 7.6 — Cross-link: after finishing a story, suggest related SwedishGames drills
      for weak vocabulary.
- [ ] 7.7 — Add "study plan" feature: recommended daily routine combining CI +
      SwedishGames activities.
- [ ] 7.8 — Final polish pass: all modes tested, no console errors, responsive on
      mobile, good reading experience.

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

---

## Notes
- This project builds on top of `SwedishGames` data and shared infrastructure.
  The `data/` subfolder in this project contains CI-specific content (stories,
  articles, listening passages, exam simulations).
- Audio for stories will use the same TTS approach: `Speech.say()` from shared.js
  for words that have pre-generated audio, falling back to browser Swedish TTS.
- The encounter tracking system is the key differentiator from SwedishGames: it
  tracks PASSIVE comprehension encounters, not active recall performance.
