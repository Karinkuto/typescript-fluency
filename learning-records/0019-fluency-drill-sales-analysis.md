# Fluency Drill — Sales Analysis

Fourth session. Student completed a 6-task fluency exercise on company sales data, designed to test retrieval of reduce, Object.entries/fromEntries, filter, map, sort, and null-safety patterns without lookup.

## Exercise Summary
- Task 1 (total per salesperson): reduce with `|| 0` — immediate, correct
- Task 2 (total per region): pattern-matched from Task 1 — immediate
- Task 3 (zero-quarter detection): filter + map — correct, clean
- Task 4 (sales lookup with arrays): reduce with mutation pattern — took iteration
  - Initially overwrote instead of appending arrays
  - Discovered `if (!acc[key]) acc[key] = []; acc[key].push(...)` pattern
  - Object.fromEntries approach shown but acknowledged as unnecessarily complex here
- Task 5 (top performer): Object.entries → sort → map → [0] ?? fallback
  - Type error on `[0]` returning `T | undefined`
  - Resolved with `??` fallback instead of `as` assertion or `!`
- Task 6 (avg by region): Object.entries → map (counting per region) → Object.fromEntries
  - Used naturally, correct application of the pattern
  - Spoiler: teacher's expected value for North was wrong (9875 → 9800), student's code was right

## Key Observations
- No major blockers — all tasks completed independently with minimal hints
- Student still defaults to reduce for grouping, which is appropriate
- Object.fromEntries used correctly when it made sense (Task 6)
- Student correctly identified when a pattern was forced (Task 4) and noted it
- Type error resolution with `??` instead of assertion shows growing TypeScript maturity

## Areas Noted
- Still reaching for reduce as default — not a problem, but worth building fluency with alternatives
- Set and unique-value patterns not yet in retrieval memory (offered in hint, hadn't been taught formally)
