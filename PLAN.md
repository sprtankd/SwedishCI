# Swedish CI — Comprehensible Input for SFI C & D

A **multi-file HTML app** (no build step, no CDN — works by double-clicking) that uses
**comprehensible input** (CI) methodology to prepare an adult learner for SFI C and D
exams in record time. Builds on the existing `SwedishGames` vocabulary and grammar data
(1593 words, verb/noun/adj drills, sentence patterns, pronunciation rules, audio clips).

## Who it's for
- **Adult learner** targeting SFI C → D certification (B1–B2 equivalent).
- Already has ~300-word passive vocabulary from the `SwedishGames` flashcards.
- Needs massive **reading & listening input** at i+1, NOT more isolated word drills.

## Pedagogy — Comprehensible Input (keep faithful)

### Core principles (Krashen / VanPatten / CI community)
1. **Input hypothesis (i+1).** Learners acquire language by *understanding messages*
   slightly above their current level. The app must always provide enough context
   (images, glosses, audio) that the learner *gets the meaning* without translating.
2. **Narrow reading / listening.** Repeated encounters with the same high-frequency
   structures across multiple texts. Recycling > novelty.
3. **No forced output.** Comprehension activities only. The learner *notices* patterns;
   production follows naturally. (Some optional output modes later.)
4. **Compelling content.** Stories, situations, and topics relevant to daily life in
   Sweden — the SFI curriculum themes (boende, arbete, hälsa, samhälle, utbildning).
5. **Glossed input.** Unfamiliar words are instantly glossable (hover/tap = English
   translation). No dictionary hunting.
6. **Graded progression.** Content tagged by CEFR-ish level: A2-low → A2-high → B1 → B1+.
   Learner advances when comprehension scores show readiness.
7. **Spaced encounter tracking.** The app tracks which words/structures the learner has
   "met" across stories. Words move from "new" → "met" → "familiar" → "known" based on
   successful comprehension across multiple encounters.

### SFI C & D exam skills to train
- **Reading comprehension** — short texts with gist/detail questions (SFI C); longer
  argumentative/informational texts (SFI D).
- **Listening comprehension** — spoken passages with comprehension checks.
- **Vocabulary in context** — collocations, particle verbs, synonyms, connectors.
- **Grammar through input** — V2 inversion, BIFF, verb tenses, noun forms, adjective
  agreement — all absorbed through reading, not explicit drills.

## Visual identity (do not drift)
- Reuse the `SwedishGames` design system: dark aurora background, glassmorphism cards,
  the Nordic palette (`--gold`, `--green`, `--blue`, `--pink`), `shared.js` + `shared.css`.
- Reading mode: clean, high-contrast text on dark glass. Large, readable font (1.1rem+).
  Generous line-height (1.7+). Glossed words highlighted with subtle underline.
- Mobile-first, works well on tablets in portrait. Comfortable for long reading sessions.
- Celebration/progress feedback is subtle and adult-appropriate (no confetti — use
  progress bars, streak indicators, level-up animations).

## Tech constraints (hard rules)
- **Multi-file HTML, sharing JS/CSS assets.** Same structure as `SwedishGames`:
  `shared.js`, `shared.css`, data files, and one `.html` per mode.
- **No external libraries, no CDN, no build step.** Must work by double-clicking, fully
  offline, on any modern browser.
- Pure vanilla JS + CSS. Mobile-friendly, touch-friendly.
- **Reuse `SwedishGames` data.** Import `swedish-data.js`, `grammar-data.js`,
  `audio-map.js`, and the `audio/` folder via relative paths (symlink or copy).
  Add new CI-specific data files as needed.

## Modes (the hub)

### Phase 1 — Reading CI (core, build first)
1. **📖 Graded Reader** — Short stories/passages at A2→B1 level. Each story has:
   - Glossed text (tap any word for instant English + hear pronunciation)
   - Comprehension questions after each passage (multiple choice, gist + detail)
   - "Understood %" score feeding the encounter tracker
   - Stories themed around SFI topics: daily life, work, health, society, education

2. **📰 News Reader** — Simplified news-style articles about Sweden/life topics.
   Same gloss + comprehension system but non-fiction informational style (SFI D focus).

3. **🎧 Listening Lab** — Audio passages with transcript reveal:
   - Listen first (pre-generated TTS at natural speed)
   - Answer comprehension questions
   - Reveal transcript with glosses
   - Re-listen while reading along
   - Speed controls: slow (0.75x) / normal / fast (1.1x)

### Phase 2 — Structured Input Activities
4. **🔗 Collocation Cards** — Learn particle verbs, preposition collocations, and
   common phrases through input activities (read a mini-context, pick the correct
   collocation). NOT flashcards — always in sentence context.

5. **🧩 Connector Challenge** — Practice discourse connectors (dessutom, däremot,
   alltså, dock, trots att…) by choosing which connector fits the gap in a short text.
   Critical for SFI D writing/reading.

6. **📊 Vocab Tracker Dashboard** — Visual display of all 1593+ words:
   - Color-coded: unknown / met / familiar / known
   - Filter by theme, part of speech, frequency rank
   - Click any word to see all contexts where it appeared
   - Overall "readiness score" estimating CEFR level

### Phase 3 — Exam Practice
7. **📝 Reading Exam Sim** — Timed SFI C/D style reading comprehension tests:
   - 2-3 texts + questions per session
   - SFI C: short practical texts (ads, instructions, simple articles)
   - SFI D: longer argumentative/informational texts
   - Automatic scoring with explanations

8. **🎙️ Listening Exam Sim** — Timed listening comprehension in SFI format:
   - Hear once (or twice at C level), answer multiple choice
   - Passages about everyday topics (C) and societal/abstract topics (D)

### Phase 4 — Optional Output Practice
9. **✍️ Guided Writing** — Prompted writing exercises with CI-based scaffolds:
   - Read a model text → answer comprehension → write your own version
   - NOT tested/graded (honor system), but self-assessment rubric provided

### Backlog / ideas (not scheduled)
- Cloze reading (fill-in-the-blank words in context)
- Speed reading trainer (timed text reveal for fluency)
- Dialog simulator (read a conversation, choose responses)
- Spaced reading (re-encounter old stories at increasing intervals)

## Content architecture

### Story data format
```js
{
  id: "daily-001",
  title: "En vanlig dag",
  titleEn: "An ordinary day",
  level: "A2",
  theme: "daily-life",
  wordCount: 120,
  text: "Maria vaknar klockan sju. Hon ...",
  glossary: { "vaknar": "wakes up", "klockan": "at (time)" },
  audio: "stories/daily-001.mp3",  // pre-generated
  questions: [
    { type: "gist", q: "Vad handlar texten om?",
      qEn: "What is the text about?",
      options: ["Marias dag", "En resa", "En fest"],
      correct: 0 },
    { type: "detail", q: "När vaknar Maria?", ... }
  ]
}
```

### Content levels & word targets
| Level | Words active | Sentence complexity | Text length | Maps to |
|-------|-------------|-------------------|-------------|---------|
| A2-low | 200–400 | SVO, simple V2 | 60–100 words | SFI C start |
| A2-high | 400–700 | V2, questions, bisats intro | 100–150 words | SFI C mid |
| B1 | 700–1100 | BIFF, connectors, compound sentences | 150–250 words | SFI C→D |
| B1+ | 1100–1600 | All structures, abstract vocab | 250–400 words | SFI D |

## Definition of done (per mode)
- Opens with no console errors; works by double-click and on touch.
- Reuses shared design system; matches the visual identity above.
- Has clear, adult-appropriate UI with smooth interactions.
- Linked from the hub with its mode entry enabled.
- Comprehension tracking feeds the global encounter system.
- All texts at the correct CEFR level (verified against word lists).

## Relationship to SwedishGames
This is a **companion project**, not a replacement. SwedishGames = explicit practice
(flashcards, quizzes, drills). SwedishCI = implicit acquisition through input.
The two share data files and the audio library. A learner would use both:
- SwedishGames for targeted weak-spot drilling
- SwedishCI for volume input and comprehension building

See **PROGRESS.md** for the running build checklist.
