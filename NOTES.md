# Notes

## Teaching Approach

- Always start with "what am I actually trying to do?" before "how do I write this?"
- Ask questions before giving answers
- Encourage predictions before running code
- Student learns through guided discovery, not answer-giving

## Teaching Workflow
1. Teach a concept (from Total TypeScript book or reference material)
2. Fluency drill to test retrieval
3. If struggling → targeted follow-up drills focusing on weak areas
4. If passing → move to next concept

## Student Preferences

- Prefers small, composable exercises
- Gets blocked by standard library methods (find, some, map, filter) — needs repetition
- Boolean logic is a known weak area — reinforce explicitly
- Student reports no major pain points — can achieve results with docs/agent help
- Goal is independence (retrieval strength), not knowledge acquisition
- Spots when exercises force unnecessary complexity — prefers the simplest approach
- Comfortable with reduce, some, every, Object.entries, Object.fromEntries now
- De Morgan's law: understands the concept but needs a genuine use case to internalize

## Session History

- First session: Covered searching, references vs copies, aggregation, composite matching, validation, business rules vs implementation, loop types
- Second session: validation with error reporting, filter(), map(), chaining, spread syntax, short-circuit evaluation, arrow function syntax
- Third session: Fluency practice via 4 exercise sets — method selection, chaining, real-world patterns, boolean logic drills. Key insight: student can independently identify when a simpler method replaces a complex chain. Boolean logic is improving. De Morgan's law introduced with a concrete pricing example.
- Fourth session: Sales analysis fluency drill (6 tasks). All completed with minimal hints. Key gap: forced Object.fromEntries use where reduce was more natural — student identified this. ?? fallback used instead of type assertion for safe indexing. Teacher's expected value for average was wrong, student's code was correct.
- Fifth session: Started Total TypeScript book progression. Chapter 4 (Essential Types & Annotations) — taught tuples, function types, void vs undefined. Drill F passed. Chapter 5 (Unions, Literals, Narrowing) — taught union types, literals, discriminated unions. Drill G passed. Chapter 6 (Objects) — taught interface extends, BaseEntity inheritance, utility types (Pick/Omit/Partial), index signatures, Record with literal keys. Exercise H passed via bun test.   Student raised excellent questions about compile-time vs runtime types, call sites, and test quality.
- Sixth session (2026-07-11): Exercise 6-5 (Record with literal keys) — first-pass correct, verified in lessons/I-records.test.ts (both @ts-expect-error states observed). Bumped TypeScript 5.9.3 → 7.0.2 (native Go compiler); strict tsconfig clean. ~1h, no stall.

## Overall Path
1. Fluency drills (recall without lookup)
2. Total TypeScript book chapters (progressive, with exercises)
3. Effective TypeScript items (deepening specific areas)

## Time Log

Convention: every session gets a `### YYYY-MM-DD — Session N` header. Use this
to derive real pace (hours/session) and replace estimates with measured rates.

- **~2026-06-18 → 2026-07-11 (~3 weeks):** Sessions 1–5. Covered fluency Sets A–E
  + Total TypeScript Ch 4, 5, and Ch 6 (partial, Exercise H done). Elapsed ≈ 3 weeks.
- **2026-07-11:** Recomputed estimate with worst-case 3-day stall assumption.
  Scope 1 ≈ ~6 weeks from today; Scope 2 ≈ ~4 weeks; end-to-end worst ≈ mid-Sep 2026.
- **2026-07-11 09:11 (≈03:11 local) — Session 6 (resumed):** Ch6 Ex6-5 (Record with
  literal keys). Teaching + exercise. Student derived `Record<Environment, {...}>` with
  accurate reasoning on first pass — no stall. Exercise verified in `lessons/I-records.test.ts`
  (both @ts-expect-error states observed). Also bumped TypeScript 5.9.3 → 7.0.2 (now a
  devDependency; `bun.lock` regenerated; strict config clean under TS 7).
  Duration ~1h (09:11–~10:06). No stall; first-pass correct; TS 5.9.3→7.0.2.

## Session Closeout (agent responsibility)

The agent MUST do this at the end of every session — this is the enforcement
for time/date tracking (not a git hook). No session ends without all three:

1. **Stamp `Time Log`** in this file: `### YYYY-MM-DD — Session N` with topic,
   approx hours, and any stall/struggle note.
2. **Commit** with convention: `Session N — <topic> (~Xh, <struggle note>)`.
   Date is automatic from git; hours/struggle come from the message.
3. **Update `Next Session`** with the date + next topic, and bump `OUTLINE.md`
   "Last updated" + progress marker.

Git auto-captures the date; the agent supplies hours + struggle. The manual
`Time Log` is the cross-check / pace source.

## Next Session

**2026-07-11:** Chapter 7 (Mutability) — next, after Exercise 6-5 done.




