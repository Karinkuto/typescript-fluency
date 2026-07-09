// Set E: Sales Analysis — Fluency Drill
// No lookup, no agent. Describe your approach, write the code, run it.
// If stuck, ask me for a hint (I'll give the smallest nudge possible).

const salesData = [
  { salesperson: "Alice", region: "North", amount: 12000, quarter: "Q1" },
  { salesperson: "Bob", region: "South", amount: 8000, quarter: "Q1" },
  { salesperson: "Alice", region: "North", amount: 15000, quarter: "Q2" },
  { salesperson: "Charlie", region: "North", amount: 9000, quarter: "Q1" },
  { salesperson: "Bob", region: "South", amount: 11000, quarter: "Q2" },
  { salesperson: "Alice", region: "North", amount: 0, quarter: "Q3" },
  { salesperson: "Charlie", region: "North", amount: 13000, quarter: "Q3" },
  { salesperson: "Diana", region: "South", amount: 7000, quarter: "Q2" },
  { salesperson: "Bob", region: "South", amount: 9500, quarter: "Q3" },
  { salesperson: "Diana", region: "South", amount: 10500, quarter: "Q3" },
];

// ──────────────────────────────────────────
// Task 1: Total sales per salesperson
// Return: { Alice: 27000, Bob: 28500, ... }
// ──────────────────────────────────────────
// Your approach in plain English:
// keep track of each unique name and add the amounts related to that name to the amount already assigned, a single reduce will do I think - lets try
// Code:
const salesByPerson = salesData.reduce<Record<string, number>>(
  (acc, { salesperson, amount }) => {
    acc[salesperson] = (acc[salesperson] || 0) + amount;

    return acc;
  },
  {},
);

// ──────────────────────────────────────────
// Task 2: Total sales per region
// Return: { North: 49000, South: 46000 }
// ──────────────────────────────────────────
// Your approach in plain English:
// repeat the solution from task 1 and replace salesperson with region
// Code:
const salesByRegion = salesData.reduce<Record<string, number>>(
  (acc, { region, amount }) => {
    acc[region] = (acc[region] || 0) + amount;
    return acc;
  },
  {},
);

// ──────────────────────────────────────────
// Task 3: Which salespeople had zero in any quarter?
// Return: ["Alice"]
// ──────────────────────────────────────────
// Your approach in plain English:
// I think we just filter for the salesperson where amount was 0 and map it to get the array with just the name
// Code:
const hadZeroQuarter: string[] = salesData
  .filter(({ amount }) => amount === 0)
  .map(({ salesperson }) => salesperson);

// ──────────────────────────────────────────
// Task 4: Build a lookup: salesperson -> array of their sales
// Use Object.fromEntries - unnecessary
// Return: { Alice: [{ amount: 12000, quarter: "Q1" }, ...], ... }
// ──────────────────────────────────────────
// Your approach in plain English:
// alright so we still reduce but this time we make the key the name like the first task and the value an array of objects with amounts and quarters appended to the array everytime there's something new
// Code:
const salesLookup = salesData.reduce<
  Record<string, { amount: number; quarter: string }[]>
>((acc, { salesperson, amount, quarter }) => {
  if (!acc[salesperson]) acc[salesperson] = [];

  acc[salesperson].push({
    amount,
    quarter,
  });

  return acc;
}, {});

// ──────────────────────────────────────────
// Task 5: Which salesperson had the highest total?
// Return: { name: "Bob", total: 28500 }
// ──────────────────────────────────────────
// Your approach in plain English:
// use the salesByPerson object from task 1 and convert it using Object.entries and then sort then map then select the first(top) entry
// Code:
const topSalesperson: { name: string; total: number } = Object.entries(
  salesByPerson,
)
  .sort((a, b) => b[1] - a[1])
  .map(([key, value]) => ({ name: key, total: value }))[0] ?? {
  name: "",
  total: 0,
};

// ──────────────────────────────────────────
// Task 6: Average sale amount per region
// Return: { North: 9800, South: 9200 }
// ──────────────────────────────────────────
// Your approach in plain English:
// use the salesByRegion solution with Object.entries to map over to an array with Averaged sales then Object.fromEntries back
// Code:
const avgByRegion: Record<string, number> = Object.fromEntries(
  Object.entries(salesByRegion).map(([key, value]) => {
    const regionCount = salesData.filter(
      (current) => key === current.region,
    ).length;

    const avg = value / regionCount;

    return [key, avg];
  }),
);

// ── Verification (uncomment to run) ──
console.log("salesByPerson:", salesByPerson);
console.log("salesByRegion:", salesByRegion);
console.log("hadZeroQuarter:", hadZeroQuarter);
console.log("salesLookup:", salesLookup);
console.log("topSalesperson:", topSalesperson);
console.log("avgByRegion:", avgByRegion);
