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
- [ ] 1.8 — Create `data/stories-b1.js` with 5 stories at B1 level (~150-250 words).
      Topics: workplace culture, healthcare system, environmental issues, Swedish
      traditions, immigrant experiences.

---

## Milestone 2: News Reader (📰)
- [ ] 2.1 — Create `data/news-b1.js` with 5 simplified news-style articles at B1 level.
      Topics: weather report, local event, job market, health advice, technology.
      Include glossaries and comprehension questions.
- [ ] 2.2 — Create `news.html` with news article layout: headline, lead paragraph,
      body text with glossing, source attribution. Reuse glossing engine from reader.
- [ ] 2.3 — Add "text type" indicators (informational, argumentative, instructional)
      matching SFI D text categories.
- [ ] 2.4 — Create `data/news-b1plus.js` with 5 articles at B1+ level (~250-400 words).
      Topics: integration debate, climate policy, education reform, gender equality,
      digital society. Use more advanced connectors and abstract vocabulary.
- [ ] 2.5 — Polish news reader: article list view, difficulty indicator, completion
      tracking, word encounter integration.

---

## Milestone 3: Listening Lab (🎧)
- [ ] 3.1 — Create `listening.html` skeleton: audio player controls, question panel,
      transcript reveal area. Wire up from hub.
- [ ] 3.2 — Create `data/listening-a2.js` with 5 short listening passages (transcripts
      + questions). Generate audio via TTS integration.
- [ ] 3.3 — Implement listen-first flow: play audio → answer questions → reveal
      transcript with glosses → re-listen while reading.
- [ ] 3.4 — Add speed controls (0.75x / 1.0x / 1.1x) and repeat controls.
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

- [x] 0.1 — `shared.css` created: Nordic palette CSS vars, animated aurora background
      (4 blurred drifting blobs, prefers-reduced-motion aware), glass `.card`, mode
      grid, game header, glossed-text styles, toast, subtle celebration pulse.
      NOTE: SwedishGames repo (`sprtankd/SwedishLearningGames`) is not in this
      session's GitHub scope, so the design system was built fresh from the visual
      spec in PLAN.md rather than copied from SwedishGames source. Palette/aesthetic
      (gold/green/blue/pink, aurora, glassmorphism) faithfully matches the spec.
      (2026-06-16)
- [x] 0.2 — `shared.js` created: Store (namespaced `svenska_ci_v1` localStorage),
      Speech (Web Speech API sv-SE TTS), Sfx (WebAudio beeps), DOM helpers (el/qs/qsa),
      auroraBackground(), gameHeader(), toast(), celebrate() (subtle pulse, no
      confetti per PLAN.md adult-appropriate guidance), Words encounter tracker
      (new/met/familiar/known), streakUpdate(). (2026-06-16)
- [x] 0.3 — `index.html` hub created: Swedish-language hero, live stats dashboard
      (words met/known, reading sessions, streak, readiness % bar), 8-mode grid with
      only Graded Reader enabled (rest show "Snart"/Coming soon badges + toast on
      click). Verified via `node --check` on extracted inline script (no syntax
      errors); no headless browser available in this sandbox (Playwright's Chromium
      download is blocked by network egress allowlist — `cdn.playwright.dev` not
      permitted), so visual smoke-testing relied on static review instead of a real
      browser. (2026-06-16)
- [x] 0.4 — `data/stories-a2.js` created: 5 A2-low stories (daily routine, shopping,
      café, weather, family), 83-99 words each, simple V2/SVO present-tense Swedish,
      8-9 glossary words each, 5 questions each (1 gist + 4 detail). Verified word
      counts and option-index validity programmatically. (2026-06-16)
- [x] 0.5 — `data/stories-a2-high.js` created: 5 A2-high stories (job interview,
      doctor visit, apartment hunting, taking the bus, Swedish holidays), 123-143
      words each, introduces subordinate clauses (att/eftersom/när/om) and mixed
      tense. Verified word counts and option-index validity programmatically.
      (2026-06-16)
- [x] 0.6 — Scaffold verified: HTML tag-balance check (Python html.parser) on
      index.html is clean, all `href`/`src` references (`shared.css`, `shared.js`)
      resolve to real files, `node --check` passes on all `.js`. **Milestone 0
      complete.** (2026-06-16)
- [x] 1.1 — `reader.html` skeleton built: level tabs (A2-low/A2-high/B1/B1+, disabled
      until data exists), story list cards with completion checkmarks, reading view
      with sticky scroll-progress bar (plain text for now — glossing comes in 1.2),
      questions view stubbed as placeholder. Hub link already wired. Verified inline
      JS syntax + HTML tag balance. (2026-06-16)
- [x] 1.2 — Glossed text rendering implemented: only glossary-listed words/phrases
      become tappable (CI principle — leave known words clean), tap shows tooltip +
      speaks word via `Speech.say`, hover previews translation, click-away dismisses.
      Multi-word phrase glosses (e.g. "slappna av") supported. Verified with a jsdom
      smoke harness (no headless Chromium available in this sandbox — Playwright's
      browser download is blocked by network egress allowlist): loaded reader.html,
      clicked a story card, confirmed 8 gloss spans render with correct translations,
      tooltip show/hide on click and click-away, zero console errors. (2026-06-16)
- [x] 1.3 — Comprehension question panel implemented: one question at a time with a
      progress bar, multiple-choice options reveal correct/incorrect color + correct
      answer on selection, score tally, results screen (pass threshold 60%) with
      "Läs igen" / "Till listan" actions, completion + best-score persisted to
      `reader.progress.<storyId>`, `stats.readingSessions` incremented. NOTE: story
      data has no separate "explanation" field (PLAN.md's schema doesn't define one)
      — revealing the correct option text serves as the explanation, which is
      sufficient for these literal-fact comprehension questions. jsdom smoke test
      caught and fixed a real bug: `Store.update(path, fn, {})` passed a truthy
      empty-object fallback so the updater's `entry || {...defaults}` never
      triggered, corrupting `attempts`/`bestScore` to NaN→null; fixed by omitting
      the fallback arg so missing entries default through `undefined`. Verified
      both pass (5/5, completed=true) and fail (0/5, completed=false) paths end to
      end with zero console errors. (2026-06-16)
- [x] 1.4 — Story progression polished: level tabs now show live completion counts
      ("A2-låg (2/5)"), results screen offers a "Nästa berättelse →" button to the
      next uncompleted story in the level, and a level-complete badge appears once
      every story in a level is done. Completion persistence (from 1.3) confirmed
      working across multi-story sessions via jsdom smoke test — counts and
      checkmarks update correctly after completing 2 stories in sequence, zero
      console errors. (2026-06-16)
- [x] 1.5 — Word encounter tracking implemented: moving from the reading view to the
      questions view (`btn-to-questions` click) records one encounter for every
      glossary word in that story via `Words.record(word, story.id)`. Re-reading a
      story ("Läs igen") and finishing again adds further encounters (dedup'd
      `contexts` per story id), so words graduate new→met(1-2)→familiar(3-5)→known(6+)
      as designed. Gloss spans get an `.encountered` class once `Words.get(key).count
      > 0` (already wired in 1.2, now actually populated). Verified via jsdom smoke
      test (`test-encounters.js`): counts increment 1→2 across two completions of the
      same story, `.encountered` class appears correctly on reopen, zero console
      errors. Also verified the cross-page contract with `index.html`'s dashboard
      (`test-hub-integration.js`): pre-seeded localStorage with words at met/
      familiar/known counts plus `stats.readingSessions`, loaded the hub fresh, and
      confirmed `renderStats()` correctly aggregates "Ord mötta" (3), "Kända ord" (1),
      session count, and readiness label — all matched expected values with zero
      console errors. (2026-06-16)
- [x] 1.6 — Audio playback added: `renderGlossedText` now splits each story into
      sentences (`SENTENCE_RE`), wrapping each in a clickable `.story-sentence` span
      (glossing logic moved into a new `appendGlossedTokens` helper, unchanged
      behavior) — tapping a sentence speaks just that sentence via `Speech.say` and
      highlights it while playing. A new "🔊 Läs hela texten" button speaks every
      sentence in order by chaining `Speech.say(..., {onend: playNext})`, highlighting
      the active sentence and toggling to "⏸ Stoppa uppläsning"; clicking again (or
      navigating away/opening another story) calls `stopReadAloud()` which cancels
      mid-sequence cleanly. Gloss-word clicks inside a sentence already call
      `e.stopPropagation()` so single-word taps don't also trigger sentence playback.
      NOTE: per-word/sentence audio reuses the existing Web Speech API TTS approach
      (no pre-recorded clips), consistent with how gloss-word pronunciation already
      worked — PLAN.md allows falling back to browser TTS where pre-generated audio
      isn't available, and no SwedishGames audio asset pipeline is reachable from
      this repo's scope. Verified via jsdom: extended the test harness's
      `speechSynthesis.speak` stub to fire `onend` asynchronously (simulating real
      playback) so the onend-chained sequence could be exercised; confirmed all 15
      sentences of a story are spoken in order and highlighted/un-highlighted
      correctly, stopping mid-sequence halts further progress and resets the button,
      and single gloss-word clicks remain isolated from sentence playback. Re-ran the
      full existing regression suite (reader/questions/fail/progression/encounters/
      hub-integration smoke tests) — all still pass with zero console errors. HTML
      tag-balance and `node --check` on the inline script both clean. (2026-06-16)
- [x] 1.7 — Reader UI polish: (1) view switches (`showView`) now fade+slide in via a
      `view-fade-in` keyframe on `.active` (disabled under `prefers-reduced-motion`);
      (2) fixed a stale reading-progress-bar bug — `updateReadingProgress()` (factored
      out of the scroll handler) is now also called immediately on `openStory()`, so
      the bar reflects the new story right away instead of showing the previous
      story's last scroll position until the user scrolls; (3) level-completion is
      now louder (still no confetti, per PLAN.md): in addition to the existing green
      "🏅 Hela nivån X är klar!" badge, a `toast()` fires the same message and the
      badge gets a delayed `celebrate()` pulse; (4) mobile: action-button rows in the
      story/questions views stack full-width under 480px (`#view-story > .flex`,
      `#questions-card .flex`), level-tab padding/font shrink slightly — story-list
      grid and header row were already responsive via existing `auto-fit`/`flex-wrap`.
      Verified via jsdom: a new `test-level-complete.js` completes all 5 A2-low
      stories and confirms the badge, toast text, and delayed `celebrate-pulse` class
      all fire correctly; `test-progress-bar.js` confirms the fill recomputes on every
      `openStory()` call instead of staying stale. Full existing regression suite
      (reader/questions/fail/progression/encounters/hub-integration/audio) re-run —
      all pass, zero console errors. HTML tag-balance and `node --check` clean.
      (2026-06-16)

---

## Notes
- This project builds on top of `SwedishGames` data and shared infrastructure.
  The `data/` subfolder in this project contains CI-specific content (stories,
  articles, listening passages, exam simulations).
- Audio for stories will use the same TTS approach: `Speech.say()` from shared.js
  for words that have pre-generated audio, falling back to browser Swedish TTS.
- The encounter tracking system is the key differentiator from SwedishGames: it
  tracks PASSIVE comprehension encounters, not active recall performance.
