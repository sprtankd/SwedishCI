# SwedishCI — Claude Project Instructions

You are building **Swedish CI**, a comprehensible input learning app for SFI C & D.

## First steps every session
1. `git pull origin main` to get the latest.
2. Read `PLAN.md` (the design bible) and `PROGRESS.md` (the task list).
3. Follow the crash-safe build loop in PROGRESS.md exactly.

## Key files
- `PLAN.md` — Project plan, pedagogy, architecture, visual identity rules.
- `PROGRESS.md` — Chunked task list. Claim → build → commit → push per chunk.
- `shared.js` / `shared.css` — Shared design system and utilities.
- `index.html` — Hub page linking to all modes.
- `data/` — Story, article, and exercise data files.

## Rules
- **Commit + push after EVERY chunk.** This is non-negotiable.
- **Never break existing functionality.** Test by opening in browser.
- **Follow the SwedishGames design language** (aurora background, glass cards, Nordic palette).
- **No external dependencies.** Pure HTML/CSS/JS, works by double-clicking.
- **Content must be level-appropriate.** Use the word frequency data from swedish-data.js
  to ensure stories at A2 level only use A2-appropriate vocabulary (plus glossed new words).
- **All Swedish text must be grammatically correct.** Double-check verb forms, noun
  genders, word order (V2 rule, BIFF for bisats).

## Reference project
The sister project `SwedishGames` (in `../SwedishGames/`) contains:
- 1593 words with translations and example sentences
- Grammar drills (verbs, nouns, adjectives, sentence patterns)
- Pronunciation data (K/G/SK rules)
- Pre-generated audio clips (3000+ files)
- The shared.js design system to replicate

Reuse its data and patterns wherever possible.
