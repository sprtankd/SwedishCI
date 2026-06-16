# 🇸🇪 Swedish CI — Comprehensible Input for SFI C & D

Master Swedish through **reading and listening** — the natural way.

This is a companion to [Svenska Spel (SwedishGames)](../SwedishGames/), which focuses on
explicit practice (flashcards, quizzes, drills). **Swedish CI** provides volume input:
graded stories, news articles, listening exercises, and exam simulators — all designed
around Stephen Krashen's **Comprehensible Input** hypothesis.

## Quick start
Open **`index.html`** in any browser (double-click it). No server, no internet needed.

## Modes

| Mode | File | What it does |
|------|------|-------------|
| 📖 Graded Reader | `reader.html` | Short stories at A2→B1+ with glossed vocabulary, audio, and comprehension questions |
| 📰 News Reader | `news.html` | Simplified news articles (informational + argumentative) for SFI D reading practice |
| 🎧 Listening Lab | `listening.html` | Audio passages with questions, transcript reveal, and speed controls |
| 🔗 Collocations | `collocations.html` | Particle verbs and prepositions in context — always in sentences, never isolated |
| 🧩 Connectors | `connectors.html` | Discourse connectors (dessutom, däremot, alltså…) in gap-fill texts |
| 📊 Vocab Tracker | `tracker.html` | Visual dashboard of all 1593+ words by encounter status and CEFR readiness |
| 📝 Reading Exam | `exam-reading.html` | Timed SFI C/D reading comprehension practice tests |
| 🎙️ Listening Exam | `exam-listening.html` | Timed SFI C/D listening comprehension practice tests |

## How it works
- **Glossed text:** Tap/hover any unfamiliar word for an instant English translation + audio.
- **Encounter tracking:** The app tracks every word you meet across stories. Words graduate
  from "new" → "met" → "familiar" → "known" based on repeated passive encounters.
- **Level progression:** Content is tagged A2-low → A2-high → B1 → B1+. Your readiness
  score estimates your current CEFR level.
- **Exam simulation:** Practice under timed SFI C/D conditions to build test confidence.

## Relationship to SwedishGames
Both projects share:
- `swedish-data.js` (1593 words + sentences)
- `grammar-data.js` (verbs, nouns, adjectives, sentence patterns)
- `audio-map.js` + `audio/` folder (3000+ native speaker recordings)
- Similar visual design (aurora background, glass cards, Nordic palette)

**Use together:** SwedishGames for targeted drills → SwedishCI for volume input.

## Development
See `PLAN.md` for the full project plan and `PROGRESS.md` for the build checklist.
Built by autonomous AI agents following the crash-safe build protocol.
