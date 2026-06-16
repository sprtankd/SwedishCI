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
- [ ] 0.5 — Create `data/stories-a2-high.js` with 5 stories at A2-high level
      (~100-150 words each). Topics: job interview, visiting the doctor, apartment
      hunting, taking the bus, swedish holidays.
- [ ] 0.6 — Initial commit of scaffold: hub + data files + shared assets. Verify
      index.html opens cleanly with no console errors.

---

## Milestone 1: Graded Reader (📖)
- [ ] 1.1 — Create `reader.html` skeleton: header, story display area, question panel,
      progress indicators. Wire up navigation from hub.
- [ ] 1.2 — Implement glossed text rendering: parse story text, make each word tappable,
      show English gloss + pronunciation on tap/hover. Use a tooltip or inline reveal.
- [ ] 1.3 — Implement comprehension questions panel: show questions after reading,
      multiple choice, score tracking, explanations on answer.
- [ ] 1.4 — Implement story progression: level selector (A2-low / A2-high / B1 / B1+),
      story list within each level, completion tracking in localStorage.
- [ ] 1.5 — Implement word encounter tracking: when a reader reads a story, all glossary
      words are marked as "encountered". Track encounter count per word across stories.
      Words graduate: new (0) → met (1-2) → familiar (3-5) → known (6+).
- [ ] 1.6 — Add audio playback for story text: "read aloud" button that speaks the full
      story via TTS (Speech helper). Per-sentence playback on tap.
- [ ] 1.7 — Polish reader UI: smooth transitions between stories, reading progress bar,
      celebration on completing a level's stories. Mobile responsive.
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

---

## Notes
- This project builds on top of `SwedishGames` data and shared infrastructure.
  The `data/` subfolder in this project contains CI-specific content (stories,
  articles, listening passages, exam simulations).
- Audio for stories will use the same TTS approach: `Speech.say()` from shared.js
  for words that have pre-generated audio, falling back to browser Swedish TTS.
- The encounter tracking system is the key differentiator from SwedishGames: it
  tracks PASSIVE comprehension encounters, not active recall performance.
