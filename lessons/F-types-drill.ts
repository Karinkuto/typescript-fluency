// Set F: Types Drill — Tuples, Function Types, void
// No lookup, no agent. If stuck, ask for a hint.

// ──────────────────────────────────────────
// Task 1: Fix the tuple type
// This function takes a [lat, lng] pair and returns a string.
// The type annotation is wrong — fix it so both tests pass.
// ──────────────────────────────────────────
const formatCoordinate = (coord: [lat: number, lng: number]) => {
  return `${coord[0]}, ${coord[1]}`;
};

// Tests for Task 1:
formatCoordinate([40.7128, -74.006]); // should work
formatCoordinate([51.5074, -0.1278, 100]); // should error — too many elements

// ──────────────────────────────────────────
// Task 2: Type a callback parameter
// This function processes a list of scores.
// Type the `transform` parameter so it takes a number and returns a number.
// ──────────────────────────────────────────
type Transform = (num: number) => number;

const processScores = (scores: number[], transform: Transform) => {
  return scores.map(transform);
};

// Tests for Task 2:
processScores([85, 92, 78], (score) => score * 2); // should work
processScores([85, 92, 78], (score) => `${score}`); // should error — returns string

// ──────────────────────────────────────────
// Task 3: void vs undefined
// Fix the type of the `callback` parameter so the tests pass.
// ──────────────────────────────────────────
const runWithLogging = (message: string, callback: () => void) => {
  console.log(`Starting: ${message}`);
  callback();
  console.log(`Finished: ${message}`);
};

// Tests for Task 3:
runWithLogging("test", () => {
  console.log("doing work");
}); // should work (callback returns nothing)

runWithLogging("test", () => {
  return 42;
}); // should work (we don't care about return value)

// ── Run with: bun run lessons/F-types-drill.ts ──
