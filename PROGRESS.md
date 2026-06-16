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
- [~] 3.5 — Create `data/listening-b1.js` with 5 passages at B1 level. Longer,
      more complex topics. (started 2026-06-16)
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
- [x] 1.8 — `data/stories-b1.js` created: 5 B1 stories (workplace culture, healthcare
      system, environmental issues, Swedish traditions/lagom, immigrant experiences),
      194-211 words each, using compound sentences and a wider connector range
      (eftersom, trots att, medan, så, även om, samtidigt som). Wired into
      `reader.html`'s script tags — the B1 level tab (previously always "(snart)")
      is now live. Unlike the earlier A2 data files, questions vary which option
      index is correct (0/1/2, not always 0) since `selectAnswer`/`renderQuestion`
      were already fully data-driven off `q.correct` with no shuffling — unrelated
      to this chunk's scope, but new content didn't need to repeat the old habit.
      Bug found and fixed while testing this content: one B1 glossary entry
      ("vänja sig vid") is a 3-word phrase, but `appendGlossedTokens`'s phrase
      matcher (from 1.2/1.6) only ever tried exactly 2-word lookahead, so it silently
      failed to gloss it (7 of 8 gloss spans instead of 8). Generalized the matcher
      (new `matchPhraseAt` helper) to try the longest known phrase length down to 2
      words at each position, so phrases of any length now work; re-verified the
      existing 2-word phrase ("slappna av" in stories-a2.js) still matches correctly.
      Verified via jsdom: word counts re-synced to actual counts (were off by
      10-18 due to the `text` string being edited after the field was first
      written), glossary-key-in-text / option-length / correct-index validity all
      checked programmatically, B1 tab/cards/sentences/gloss-spans/questions exercised
      end-to-end, full existing regression suite re-run — all pass, zero console
      errors, HTML tag-balance clean. **Milestone 1 (Graded Reader) complete.**
      (2026-06-16)
- [x] 2.1 — `data/news-b1.js` created: 5 B1 news-style articles (weather, local
      event, job market, health advice, technology), 131-152 words each, schema
      `{id, title, titleEn, level, theme, textType, source, wordCount, lead, body,
      glossary, questions}`. Split `lead`/`body` (rather than one `text` field) to
      anticipate 2.2's headline/lede/body layout; `textType: "informational"`
      anticipates 2.3's SFI-D text-type indicators; `source: "Svenska CI Nyheter"`
      is a fictional in-app byline since these are invented articles for
      pedagogical use, not real reporting. Questions vary `correct` across
      0/1/2 (continuing the 1.8 pattern). Bug found and fixed: all 5 articles'
      `wordCount` fields were stale (declared 156-167, actual 131-152) from
      editing text after first writing the field — resynced via script to the
      true computed count. Verified programmatically: `node --check` syntax
      clean, every declared `wordCount` matches actual lead+body word count,
      every glossary key (including the multi-word phrases "hjärt- och
      kärlsjukdomar", "digitala verktyg", "interaktiva tavlor", "grundläggande
      färdigheter") appears in its article's text, every article has exactly 5
      questions with exactly 3 options and a valid `correct` index. No
      end-to-end render test yet possible since `news.html` doesn't exist —
      will be exercised once 2.2 builds the news reader page. (2026-06-16)
- [x] 2.2 — `news.html` created: level tabs (B1 live, B1+ shows "snart"), article
      list cards, article view with headline/English subtitle/meta badges
      (theme, textType, wordCount), lead paragraph rendered in a distinct
      bold/larger `.news-lead` style, body text glossed identically to the
      Graded Reader, italic source-attribution line noting articles are
      invented for practice (not real reporting), sentence-click + "Läs hela
      texten" read-aloud spanning both lead and body in document order,
      comprehension questions/scoring/progress reusing the same data-driven
      pattern as `reader.html` but namespaced under `news.progress.<id>` and
      "Nästa artikel" instead of "Nästa berättelse". Glossing/audio engine
      (`WORD_RE`, `SENTENCE_RE`, `appendGlossedTokens`, `matchPhraseAt`,
      `makeGlossSpan`, tooltip, read-aloud chain) is duplicated from
      reader.html rather than factored into a shared file, since the project
      has no script-sharing mechanism beyond `shared.js`/`shared.css` and
      duplicating ~250 lines across two pages is simpler than introducing a
      new shared-module convention for two call sites. Enabled "News Reader"
      in `index.html`'s mode grid (was a disabled "Snart" card) now that the
      page works. Bug found and fixed while testing: the data file's
      3-word phrase `"hjärt- och kärlsjukdomar"` used Swedish hyphen-elision
      (a word fragment + "och" + a second word), which the existing
      `matchPhraseAt`/`WORD_RE` tokenizer can't match because it requires a
      single literal space between phrase words, not a hyphen — confirmed via
      jsdom test showing the phrase rendered as plain unglossed text. Fixed
      by rewording the article text to the fully-spelled-out
      `"hjärtsjukdomar och kärlsjukdomar"` (same meaning, same word count)
      rather than extending the tokenizer for this orthographic edge case.
      NOTE: hyphen-elision compounds (e.g. "för- och efternamn") should be
      avoided in future glossary phrases, or the tokenizer would need a
      dedicated enhancement to support them. Verified via jsdom: 2 new test
      files exercise article list/level tabs, opening an article, gloss
      rendering (incl. the 3-word and 2-word phrases, and repeated
      occurrences of the same phrase across sentences), gloss-word click
      isolation from sentence playback, full pass-path scoring incl. word
      encounter recording and `stats.readingSessions`, "Nästa artikel"
      navigation, level-complete badge/toast/celebrate across all 5
      articles, fail-path scoring, and the full lead+body read-aloud chain —
      all pass with zero console errors. `node --check` and HTML tag-balance
      clean for both `news.html` and the updated `index.html`. Full existing
      reader.html regression suite re-run — still all pass. (2026-06-16)
- [x] 2.3 — Text-type indicators added to `news.html`: a `TEXT_TYPES` map
      (informational 📰 blue / argumentative 💬 pink / instructional 📋
      green) covers the three genres SFI D reading exams test recognition
      of, each with a short Swedish description exposed as a hover tooltip
      (`title` attribute) so the labels double as a learning aid, not just
      decoration. A `textTypeBadge()` helper renders the icon+label+color
      badge and is used both on article-list cards and the article view's
      meta row (replacing the old plain-text `textType` badge). All 5
      current B1 articles are tagged "informational" since they're news
      articles; "argumentative"/"instructional" examples will appear
      naturally once 2.4's B1+ debate/opinion topics are written — verified
      the other two badge variants render correctly now via a jsdom test
      calling `textTypeBadge()` directly with fabricated values, so the UI
      is confirmed working ahead of that content existing. `node --check`
      and HTML tag-balance clean; full regression suite (10 reader.html +
      4 news.html tests) re-run — all pass, zero console errors.
      (2026-06-16)
- [x] 2.4 — `data/news-b1plus.js` created: 5 B1+ articles (integration debate,
      climate policy, school reform, gender equality at home, online safety),
      254-279 words each (within the 250-400 target), same schema as the B1
      set. Deliberately diversified `textType` across all three SFI-D genres
      (2 argumentative, 2 informational, 1 instructional) instead of defaulting
      to "informational" like the B1 set, so the 2.3 text-type badges get real
      non-fabricated examples of every variant. Body text uses blank-line
      paragraph breaks (`\n\n`), which exposed a latent CSS gap: `.story-text`
      (shared by `reader.html`'s and `news.html`'s body containers) had no
      `white-space` rule, so `\n\n` would have collapsed to a single space.
      Fixed by adding `white-space: pre-line;` to `.story-text` in
      `shared.css` — confirmed safe for all 4 existing data files (none
      contain `\n`), so this is purely additive for the new content. Wired
      into `news.html` via a second `<script src="data/news-b1plus.js">` tag;
      the page's `LEVELS` array already referenced `NEWS_B1_PLUS` defensively
      since 2.2, so the B1+ tab auto-activated (no other code change needed).
      Bug found and fixed during drafting: 3 of 5 articles (integration,
      climate, education) were initially 218-236 words, short of the 250-400
      target — extended each with one more substantive sentence and re-synced
      the `wordCount` fields via the same id-keyed regex-patch script used in
      2.1. Verified via jsdom (new `test-news-b1plus.js`): B1+ tab shows
      "(0/5)" and is enabled (not "snart"); switching to it lists exactly 5
      articles with the intended 2/2/1 argumentative/informational/
      instructional badge split; opening each of the 4 articles containing
      multi-word glossary phrases confirms "strukturella hinder", "fossila
      bränslen", "förnybar energi", "socioekonomiska faktorer", "fristående
      skolor", and "obetalda omsorgen" each render as single gloss spans (not
      broken by the longer/more abstract B1+ vocabulary); full question flow
      answering all 5 questions correctly on all 5 articles in turn scores
      5/5 each time and the level tab updates to "(5/5)" after the last one,
      confirming level-complete detection works for the B1+ set too. Full
      regression suite (10 reader.html + 5 news.html tests, including the new
      one) re-run after the `shared.css` change — all pass, zero console
      errors. One pre-existing test (`test-news.js`) had a stale assertion
      from 2.1 expecting the B1+ tab to be disabled "(no data yet)" — updated
      that expectation to match the now-intended enabled state rather than
      changing app behavior. `node --check` and HTML tag-balance clean for
      `news.html`. (2026-06-16)
- [x] 2.5 — Polished the news reader article list: completion tracking and
      word-encounter integration were already wired up since 2.2/2.4
      (`news.progress.<id>`, `recordArticleEncounters`), so the gap was that
      none of it was visible on the list cards beyond a binary ✅ checkmark.
      Added a 4th badge per card that swaps based on attempt state: articles
      not yet attempted show a personalized difficulty indicator — `🌱 N nya
      ord`, counting how many of *that article's* glossary words the learner
      hasn't encountered anywhere yet (`Words.get(w).count === 0`) — which is
      a more useful "how hard is this for me right now" signal than a static
      CEFR label, since it's i+1-aware and reflects the learner's own
      vocabulary growth across both B1 and B1+ content. Once an article has
      at least one attempt, the badge swaps to `🏅 {bestScore}%` (gold),
      surfacing completion quality instead of just completion. Verified via
      a new jsdom test (`test-news-polish.js`): untouched cards show 4 badges
      including a 🌱-prefixed new-words count; completing an article's
      questions (regardless of pass/fail) swaps that card's badge to a
      🏅-prefixed gold percentage and removes the new-words badge; a second,
      still-untouched card continues to show a sane new-words count. Full
      regression suite (10 reader.html + 7 news.html tests, 20 files total)
      re-run — all pass, zero console errors. `node --check` and HTML
      tag-balance clean. This completes Milestone 2 (News Reader).
      (2026-06-16)
- [x] 3.1 — `listening.html` skeleton created: level tabs (A2/B1, both disabled
      "(snart)" until 3.2/3.5 add `data/listening-a2.js` / `data/listening-b1.js`
      — the page defensively references `LISTENING_A2`/`LISTENING_B1` the same
      way news.html anticipated `NEWS_B1_PLUS` ahead of time), passage list
      cards (theme, estimated listening time from `wordCount`/130wpm, and the
      same 2.5-style new-words/best-score swap badge), a listen view with
      play/stop + replay controls driving the same sentence-chained
      `Speech.say` engine as reader.html/news.html (rendered into a transcript
      container that's kept hidden via `display:none` until the learner
      explicitly clicks "Visa transkript" — listen-first, read-second, per
      the chunk's pedagogical intent), a listening-progress bar, and a
      questions view identical in structure to reader.html/news.html but
      namespaced under `listening.progress.<id>`. Glossing/audio/question
      engine is duplicated a third time rather than shared, consistent with
      the project's no-build-step, no-shared-module precedent from 2.2.
      Wired into the hub: flipped "Listening Lab" from `enabled:false` to
      `true` in `index.html` now (rather than waiting for 3.2's data), since
      the chunk's own description explicitly calls for hub wiring and the
      empty-level placeholder ("Inga avsnitt ännu på den här nivån") is the
      same graceful empty state already used by reader.html/news.html, not a
      broken experience. Verified via two new jsdom tests: `test-listening1.js`
      exercises the full skeleton end-to-end with a fabricated passage object
      (ahead of real data, same approach as 2.3's `textTypeBadge()` test) —
      transcript stays hidden by default and reveals/hides on toggle, glossing
      renders correctly, play/replay correctly chains through both sentences
      via the stubbed `speechSynthesis`, the progress bar reaches 100% after
      playback, and the full question flow scores correctly and persists to
      `listening.progress.<id>` plus increments the shared
      `stats.readingSessions` counter and records glossary words into the
      `Words` store; `test-hub-listening.js` confirms the hub card is enabled,
      unlinked from any "Snart" badge, and points to `listening.html`. Full
      regression suite (22 files total) re-run — all pass, zero console
      errors. `node --check` (via extracted inline script) and HTML
      tag-balance clean for both `listening.html` and `index.html`.
      (2026-06-16)
- [x] 3.2 — `data/listening-a2.js` created: 5 A2 listening passages covering
      realistic SFI listening-test genres rather than 5 of the same shape —
      a voicemail (telephone message), a train-station PA announcement, a
      shop-counter dialogue, a radio weather report, and a dentist-booking
      phone call — 61-69 words each, schema `{id, title, titleEn, level,
      theme, wordCount, transcript, glossary, questions}` (no lead/body split
      since a listening passage is one continuous audio clip, unlike a news
      article's headline+lede+body). Wired into `listening.html` via a
      `<script src="data/listening-a2.js">` tag; the A2 tab auto-activated
      since `LEVELS` already referenced `LISTENING_A2` defensively since 3.1.
      Bug found and fixed while drafting: the weather passage's glossary
      phrase "klarnar upp" (a separable particle verb, "to clear up") didn't
      appear as adjacent text once the sentence was V2-fronted with "Imorgon"
      — Swedish inversion places the subject "det" between the fronted
      adverbial and the verb+particle pair ("Imorgon klarnar **det** upp"),
      splitting the two words the phrase-tokenizer needs adjacent. Fixed by
      rewording to subject-first order ("Det klarnar upp imorgon, …"), which
      keeps "klarnar upp" textually adjacent while remaining equally natural,
      correct Swedish — same rewording strategy as 2.2's hyphen-elision fix
      (avoid the construction in content rather than extending the
      tokenizer). Verified via two jsdom tests: the existing
      `test-listening1.js` was updated since its "both tabs disabled" stale
      assumption no longer held (A2 tab is enabled now; only B1 stays
      "(snart)" pending 3.5) — same kind of stale-assertion fix as 2.4's
      `test-news.js` update; a new `test-listening-a2.js` confirms 5 real
      cards render, the weather passage's two multi-word phrases
      ("tillfälligt regn", "klarnar upp") and the shopping passage's "letar
      efter" all gloss correctly as single units, and completing all 5
      passages' question sets scores 5/5 each and flips the A2 tab to
      "(5/5)" confirming level-complete detection. Full regression suite
      (23 files total) re-run — all pass, zero console errors. `node --check`
      and HTML tag-balance clean. (2026-06-16)
- [x] 3.3 — Implemented the listen-first flow in `listening.html`: two new
      state flags, `transcriptUnlocked` and `hasListenedFully`, gate the
      page. Opening a passage hides the "📝 Visa transkript" button entirely
      (`display:none`) and the "Till frågorna →" handler now checks
      `hasListenedFully` first — if the learner hasn't played the passage
      through to completion yet, it shows a `toast()` ("Lyssna på hela
      avsnittet innan du går till frågorna.") and refuses to navigate,
      instead of silently jumping to questions. `playPassage()`'s natural-
      completion branch (reaching the end of the sentence chain without
      cancellation) flips `hasListenedFully = true` and swaps the
      `listen-hint` text to a "✅ Bra! Nu kan du gå vidare till frågorna."
      confirmation. Once questions are answered, `finishQuestions()`'s
      result screen now always offers a third button, "📝 Visa transkript &
      lyssna igen", wired to a new `reviewPassage(passage)` function — it
      force-unlocks and reveals the transcript, switches the toggle button
      to "🙈 Dölj transkript", hides the listen-hint, and returns to
      `view-listen` so the learner can re-listen while reading along,
      fulfilling the chunk's literal sequence (play → questions → reveal →
      re-listen). Factored the title/meta/transcript-rendering body shared
      by `openPassage`/`reviewPassage` into a new `renderPassageView(passage)`
      helper to avoid duplicating that block a third time in-file (distinct
      from the project's cross-file engine duplication, which stays as-is).
      Revisiting an already-completed passage (`isPassageDone(id)` true)
      skips the gate entirely — both flags default to `true` on open — so a
      learner who already proved comprehension isn't forced to re-listen
      just to peek at the transcript again; a previously-failed passage
      still re-locks on reopen. Updated the static `listen-hint` default
      text to describe the new gate instead of the old "read second" framing.
      Updated two now-stale jsdom tests rather than reverting behavior (same
      convention as 2.4/3.2): `test-listening1.js` now asserts the toggle
      button stays hidden until after questions, that a premature
      "Till frågorna" click is blocked, and exercises the full post-questions
      review-button flow (transcript reveal, toggle re-enabled, second toggle
      click works); `test-listening-a2.js`'s 5-passage completion loop now
      plays each passage to completion (via the stubbed chained
      `speechSynthesis`) before clicking "Till frågorna" — restructured from
      a synchronous `for` loop into an async `completePassageAt(pos)`
      recursive helper since the listen-chain now requires waiting on
      `setTimeout`-driven `onend` callbacks between passages. Full
      regression suite (23 files) re-run — all pass, zero console errors.
      `node --check` (on the extracted inline script) and HTML tag-balance
      both clean. (2026-06-16)
- [x] 3.4 — Added speed and repeat controls to `listening.html`. A new
      `SPEEDS` array (`0.75x` / `1.0x` / `1.1x`, matching PLAN.md's literal
      labels) backs a pill-button row (`.speed-controls`/`.speed-btn`,
      styled like the existing `.level-tab` pattern) rendered above the
      progress bar; the selected `currentRate` persists across sessions via
      `Store.set("listening.rate", ...)` and feeds every `Speech.say(...,
      {rate: currentRate})` call in `playSentence`/`playPassage`, replacing
      the old hardcoded `rate: 0.9`. NOTE: this is a deliberate small
      behavior change — "normal" speed is now an honest 1.0x (matching its
      label) rather than the slightly-slower 0.9 every mode used ad hoc
      before explicit speed control existed; reader.html/news.html's
      separate "read aloud" features are untouched, out of this chunk's
      scope. Added a repeat-sentence control: a new `lastPlayedSentence`
      tracker records whichever sentence span/text was most recently spoken
      (whether via the whole-passage chain or an individual click), and a
      new "🔂 Upprepa raden" button calls `repeatLastSentence()` to replay
      just that one sentence at the current rate — useful during the
      listen-first phase where the transcript (and thus per-sentence click-
      to-replay) is hidden until after questions, so this is the *only* way
      to re-hear one line without restarting the whole passage. Clicking it
      before anything has played shows a `toast()` instead of erroring.
      Both new pieces of state reset on `openPassage`/`reviewPassage` so a
      newly opened passage doesn't inherit a stale sentence reference from
      the previous one. Verified via a new `test-listening-speed.js`: 3
      speed buttons render with 1.0x active by default, clicking 0.75x
      updates the active button, persists to `listening.rate` in
      localStorage, and is reflected in the actual `rate` set on the next
      spoken utterance (captured via the harness's `speechSynthesis.speak`
      stub, not `Speech.say` directly — confirmed once more that top-level
      `const`-declared modules aren't reachable via `window` in this jsdom
      harness); repeat-sentence is a no-op before any playback and replays
      exactly one utterance at the selected rate afterward. Full regression
      suite (24 files total) re-run — all pass, zero console errors.
      `node --check` and HTML tag-balance clean. (2026-06-16)

---

## Notes
- This project builds on top of `SwedishGames` data and shared infrastructure.
  The `data/` subfolder in this project contains CI-specific content (stories,
  articles, listening passages, exam simulations).
- Audio for stories will use the same TTS approach: `Speech.say()` from shared.js
  for words that have pre-generated audio, falling back to browser Swedish TTS.
- The encounter tracking system is the key differentiator from SwedishGames: it
  tracks PASSIVE comprehension encounters, not active recall performance.
