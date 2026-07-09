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
- Fifth session: Started Total TypeScript book progression. Chapter 4 (Essential Types & Annotations) — taught tuples, function types, void vs undefined. Drill F passed. Chapter 5 (Unions, Literals, Narrowing) — taught union types, literals, discriminated unions. Drill G passed. Chapter 6 (Objects) — taught interface extends, BaseEntity inheritance, utility types (Pick/Omit/Partial), index signatures, Record with literal keys. Exercise H passed via bun test. Student raised excellent questions about compile-time vs runtime types, call sites, and test quality.

## Overall Path
1. Fluency drills (recall without lookup)
2. Total TypeScript book chapters (progressive, with exercises)
3. Effective TypeScript items (deepening specific areas)

## Time Log

Convention: every session gets a `### YYYY-MM-DD — Session N` header. Use this
to derive real pace (hours/session) and replace estimates with measured rates.

- **~2026-06-18 → 2026-07-09 (~3 weeks):** Sessions 1–5. Covered fluency Sets A–E
  + Total TypeScript Ch 4, 5, and Ch 6 (partial, Exercise H done). Elapsed ≈ 3 weeks.
- **2026-07-09:** Recomputed estimate with worst-case 3-day stall assumption.
  Scope 1 ≈ ~6 weeks from today; Scope 2 ≈ ~4 weeks; end-to-end worst ≈ mid-Sep 2026.

## Next Session

**2026-07-09:** Continue Total TypeScript Chapter 6 — Exercise 6-5 (Record with
literal keys), then Chapter 7 (Mutability).




