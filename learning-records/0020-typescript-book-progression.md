# TypeScript Book Progression (Chapters 4-6)

Fifth session. Began structured progression through Total TypeScript: The Essentials, following the workflow: teach → drill → assess → advance.

## Chapter 4: Essential Types & Annotations
- Taught: tuples (with named members), function types (callback types), void vs undefined
- Drill F: all 3 concepts solved on first try
- Assessment: no follow-up needed

## Chapter 5: Unions, Literals, Narrowing
- Taught: union types with literals, narrowing (typeof/truthiness/in), discriminated unions
- Drill G: literal union (Task 1), discriminated union (Task 2), narrowing (Task 3) — all passed
- Key insight from student: TypeScript trusts types at compile time but runtime data (API, JSON.parse) can be anything — spotted the gap between type world and runtime world. This is "The Weird Parts" territory (Ch 12).
- Student correctly identified that discriminated union call sites don't error (only the argument is checked, not the return value).

## Chapter 6: Objects
- Taught: interface extends (vs & intersection), BaseEntity inheritance, utility types (Pick/Omit/Partial), index signatures, Record with literal keys
- Exercise H (adapted for bun test): interface extends with BaseEntity{id, createdAt, name}, utility types solved correctly
- Student pointed out BaseEntity should include `name` (common to both User and Product) — correct catch
- Student pushed back on weak test quality: assertions didn't match descriptions, unused type aliases. Teacher rewrote tests properly. Good quality bar from student.

## Teaching Notes
- Student now prefers exercises from the book rather than custom drills
- Switched test runner from Vitest to bun test (project is bun)
- Type-level test helpers (Equal, Expect) defined locally in assets/types.ts since @totaltypescript/helpers isn't on npm
- Student asks sharp conceptual questions — compile-time vs runtime, call-site semantics, test validity
