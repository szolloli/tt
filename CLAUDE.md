# Tamarka

Static single-page quiz site. Countdown to 31.10.2026, then a sequence of questions the visitor answers by typing. No build step, no dependencies, not a git repo yet.

## Files

- `index.html` — all markup, CSS and logic (inline `<style>` and `<script>`).
- `questions.js` — quiz content and config, exposed as `window.QUIZ`. Edit this to change questions.

Open `index.html` directly in a browser. Fonts load from Google Fonts (needs internet).

## Config (`questions.js`)

- `targetDate` — countdown target, local time. Currently `new Date(2026, 9, 31, 0, 0, 0)` (months are 0-indexed).
- `finalMessage` — shown after the last question ("Hotovo ♥", placeholder text).
- `questions` — array of `{ text, answers: [...] }`. `___` in `text` renders as a blank.

Current questions:
1. "Tamarka píše Oliverovi, Dianka píše ___" — Rigi / Rigimu / Jakub Rigoci
2. "Po kolkatich mesiacoch napisala Tamarka Oliverovi, že keby začali spolu skoršie spávať už by mohli mať dieťa." — šesťnásť / šestnastich / 16

## Behavior

- **Views:** `countdown`, `quiz`, `end`. Switching fades the old view out (700 ms, `FADE` in JS and `--fade` in CSS must match), then fades the new one in.
- **Answer matching:** `normalize()` lowercases, strips diacritics (NFD), removes non-alphanumerics, collapses whitespace. Both input and each accepted answer are normalized, so `š` = `s`. Exact match after normalization; empty input never matches.
- **Wrong answer:** input gets the `.shake` class and its text is selected. **Correct:** fade to next question; after the last, show `finalMessage`.
- **Debug switch:** removed from `main`; lives on the `test` branch only.
- **Progress persistence:** `localStorage` key `quizIndex` holds the number of answered questions. On load, if > 0 the countdown is skipped and the quiz resumes there; if all answered, the end screen shows. `?reset` clears progress. All storage access is wrapped in try/catch, so it degrades to no persistence (private mode).

## Styling

Dark near-black text (`--ink`) on light gray (`--bg`), centered. Fonts are CSS variables at the top of the `<style>` block: `--font-main` (Space Grotesk: countdown, questions) and `--font-ui` (DM Sans: input, labels, hints). To change fonts, update both the variable and the Google Fonts `<link>`.

## State

Working version, not yet verified in a browser by Claude (no automated tests). Progress is per-browser only; there is no backend.

## Possible next steps

- Replace the placeholder `finalMessage`.
- Add more questions in `questions.js`.
- Deploy somewhere static (GitHub Pages, Netlify) if it should be reachable by someone else.
