// Type-level test helpers (from Total TypeScript book)
type DebugEqual<A, B> =
  [A] extends [B] ? ([B] extends [A] ? true : false) : false;

export type Equal<A, B> = DebugEqual<A, B>;
export type Expect<T extends true> = T;
