# Outline: TypeScript Implementation Fluency

> **Last updated:** 2026-07-09 (Thu) — ~3 weeks into the project.
> Time tracking: every session in `NOTES.md` is stamped `### YYYY-MM-DD — Session N`.

Two sequential scopes built from the two reference books. **Scope 1** is the
current track (per `MISSION.md` — reasoning over syntax, type narrowing,
fluency). **Scope 2** is the advanced/deferred track, done *after* Scope 1 is
complete. Nothing is skipped — only sequenced.

Fluency drills run **continuously** across both scopes (Sets A–E done; keep
reps alive wherever retrieval weakens — esp. boolean logic and array/object
methods).

Sources:
- `reference/Total Typescript The Essentials (...).pdf` — 6 parts, 16 chapters
- `reference/Effective TypeScript 83 Specific Ways... (...).pdf` — 10 parts, 83 items

Legend: ✅ done · 🔶 in progress · ⏳ pending

---

## Prerequisite (already covered via setup / fluency)
- **TT Ch 1** Kickstart Your TypeScript Setup
- **TT Ch 2** IDE Superpowers
- **TT Ch 3** TypeScript in the Development Pipeline

---

## SCOPE 1 — Core track (current)

Goal: translate reasoning into typed code independently; master narrowing,
objects, mutability, type design, and safe `any`/`unknown`.

### A. Total TypeScript: The Essentials

| Ch | Title | Status | Notes |
|----|-------|--------|-------|
| 4 | Essential Types and Annotations | ✅ | Drill F passed |
| 5 | Unions, Literals, and Narrowing | ✅ | Drill G passed |
| 6 | Objects | 🔶 | Exercise H (`bun test`) done; **6-5 (Record w/ literal keys) next** |
| 7 | Mutability | ⏳ | Next after 6-5 |
| 8 | Classes | ⏳ | Core OOP — not framework patterns |
| 11 | Annotations and Assertions | ⏳ | `as`, `!`, const assertions, `@ts-expect-error` |
| 12 | The Weird Parts | ⏳ | Edge cases / footguns |
| 13 | Modules, Scripts, Declaration Files | ⏳ | Modules + scripts core; declaration-file detail → Scope 2 |
| 14 | Configuring TypeScript | ⏳ | tsconfig essentials (`strict`, `noUncheckedIndexedAccess`) |

> TT Ch 9, 10, 15, 16 are Scope 2 (see below).

### B. Effective TypeScript — selected parts (83 items, read selectively)

| Part | Title | Items | Focus vs MISSION | Status |
|------|-------|-------|-----------------|--------|
| 1 | Getting to Know TypeScript | 1–5 | Mental model, structural typing, limit `any` | ⏳ |
| 2 | TypeScript's Type System | 6–17 | Types as sets, type vs value space, annotations vs assertions, `readonly`, index signatures | ⏳ |
| 3 | Inference & Control Flow Analysis | 18–28 | **Narrowing (Item 22)**, evolving types, async basics | ⏳ |
| 4 | Type Design | 29–42 | **Null at perimeter (33)**, valid states, unions of interfaces, precise string types | ⏳ |
| 5 | Unsoundness and the `any` Type | 43–49 | **`unknown` over `any` (46)**, narrow `any` scope, type coverage | ⏳ |
| 7 | TypeScript Recipes | 59–64 | **`never` exhaustiveness (59)**, iterate objects (60), **`Record` sync (61)**, tuples | ⏳ |

> Items pulled on demand when a book-chapter gap surfaces (same trigger as
> `learning-records/0020`). Not read cover-to-cover.

**Scope 1 exit:** student independently writes typed solutions for objects,
narrowing, mutability, and basic type design without AI help; boolean logic
and `undefined`/`null` narrowing are fluent.

---

## SCOPE 2 — Advanced track (after Scope 1)

Goal: type-level sophistication, reusable typed utilities, and real-world
codebase concerns. Explicitly deferred from `MISSION.md` (generics,
decorators, framework patterns, backend/arch, complex async) — now in scope.

### A. Total TypeScript: The Essentials

| Ch | Title | Why deferred |
|----|-------|--------------|
| 9 | TypeScript-Only Features | Enums, namespaces, declaration merging, **decorators** |
| 10 | Deriving Types | `keyof`, mapped/conditional/utility types (type-level) |
| 15 | Designing Your Types | Advanced type architecture |
| 16 | Building Powerful Shared Utilities | Generics-heavy reusable helpers |

### B. Effective TypeScript — remaining parts

| Part | Title | Items | Why deferred |
|------|-------|-------|--------------|
| 6 | Generics & Type-Level Programming | 50–58 | Generics, conditional/template-literal types, type tests |
| 8 | Type Declarations and `@types` | 65–71 | Declaration files, module augmentation |
| 9 | Writing and Running Your Code | 72–78 | DOM hierarchy, source maps, environment modeling, compiler perf |
| 10 | Modernization and Migration | 79–83 | `@ts-check`, `allowJs`, module-by-module migration |

> Scope 2 also folds in any fluency gaps that persist (e.g. complex async
> patterns, advanced chaining) once the fundamentals are solid.

---

## Progress marker
- **As of 2026-07-09:** ~3 weeks elapsed. Fluency Sets A–E done; TT Ch 4✅ 5✅ 6🔶.
- Now: **TT Ch 6 → Exercise 6-5 (Record with literal keys)**, then **Ch 7 (Mutability)**
- Fluency: continuous (Sets A–E complete)
- Scope 1 book chapters remaining: 6 (partial), 7, 8, 11, 12, 13, 14
- Scope 1 ET parts: 1, 2, 3, 4, 5, 7 (selective items)
- **Worst-case ETA from today:** Scope 1 ~late Aug 2026, Scope 2 ~late Sep 2026 (~10 weeks total).
