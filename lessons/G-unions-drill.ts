// Set G: Unions, Literals, Discriminated Unions
// No lookup. Ask for a hint if stuck.

// ──────────────────────────────────────────
// Task 1: Literal union type
// Create a type called Direction that can only be
// "north" | "south" | "east" | "west"
// Then annotate the parameter below with it.
// ──────────────────────────────────────────

const move = (direction: "north" | "south" | "west" | "east") => {
  console.log(`Moving ${direction}`);
};

move("north"); // OK
move("south"); // OK
move("up"); // should error

// ──────────────────────────────────────────
// Task 2: Discriminated union
// A user can be either:
//   - "admin" with a role and a list of permissions (string[])
//   - "viewer" with a role but no permissions
// Create the type, then fix the function body.
// ──────────────────────────────────────────

// ??? — define User type here
type User = { role: "admin"; permissions: string[] } | { role: "viewer" };

const getPermissions = (user: User): string[] => {
  if (user.role === "admin") return user.permissions;
};

// Tests:
getPermissions({ role: "admin", permissions: ["read", "write"] }); // should return ["read", "write"]
getPermissions({ role: "viewer" }); // should error — no permissions on viewer

// ──────────────────────────────────────────
// Task 3: Narrowing
// Fix this function so the type errors go away.
// Don't change the parameter type — change the function body.
// ──────────────────────────────────────────

const process = (input: string | number | null) => {
  if (input && typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input;
  } else {
    return "nothing";
  }
};

// Tests:
console.log(process("hello")); // should return "HELLO"
console.log(process(42)); // should return "42"
console.log(process(null)); // should return "nothing"

// ── Run: bun run lessons/G-unions-drill.ts ──
