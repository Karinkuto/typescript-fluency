// Set C: Real-World Patterns
// These mirror actual problems you'd encounter

// Pattern 1: Categorization / Grouping
const transactions = [
  { id: 1, category: "food", amount: 45, date: "2024-01-15" },
  { id: 2, category: "transport", amount: 30, date: "2024-01-15" },
  { id: 3, category: "food", amount: 22, date: "2024-01-16" },
  { id: 4, category: "entertainment", amount: 60, date: "2024-01-16" },
  { id: 5, category: "food", amount: 38, date: "2024-01-17" },
  { id: 6, category: "transport", amount: 15, date: "2024-01-17" },
];

// Q1: Group transactions by category
// Your approach in plain English: i think we should go over each object in that array and reduce it to a single object where each entry has a key of the category and a value of another object with the key of the date and the value of the amount - the final part about appending the detail entries without overwriting is something i searched up and got it working but i'm still shakey and doesn't look like the shape I had in mind category : {"date": amount, "date": amount}
// Code:
const grouped: Record<string, typeof transactions> = transactions.reduce(
  (acc, transaction) => {
    const detail = {
      id: transaction.id,
      category: transaction.category,
      amount: transaction.amount,
      date: transaction.date,
    };

    acc[transaction.category] = [...(acc[transaction.category] || []), detail];

    return acc;
  },
  {} as Record<string, typeof transactions>,
);

// Q2: Which categories spent more than $50 total?
// Your approach in plain English: filter for entries with amounts greater than 50 and provide an array with their category names
// Code:
const bigCategories: string[] = Object.entries(
  transactions.reduce(
    (acc, transaction) => {
      acc[transaction.category] =
        (acc[transaction.category] || 0) + transaction.amount;
      return acc;
    },
    {} as Record<string, number>,
  ),
)
  .filter(([, amount]) => amount > 50)
  .map(([category]) => category);

// Pattern 2: Transformation
const users = [
  { firstName: "Alice", lastName: "Smith", email: "alice@test.com" },
  { firstName: "Bob", lastName: "Jones", email: "bob@test.com" },
  { firstName: "Charlie", lastName: "Smith", email: "charlie@test.com" },
];

// Q3: Create a lookup object by email: { "alice@test.com": { firstName, lastName } }
// Your approach in plain English: map the existing data into that key value shape where the key is the email and the value is an object with the first and last names - grant it i could have done it without Object.fromEntries but the type error for the expected output shape was satisfied when I used Object.fromEntries
// Code:
const userLookup: Record<string, { firstName: string; lastName: string }> =
  Object.fromEntries(
    users.map(({ email, firstName, lastName }) => [
      [email],
      { firstName, lastName },
    ]),
  );

// Q4: Get all unique last names
// Your approach in plain English: so this is similar to a problem we did in Set B, we reduce the array to an array of unique names, pushing new names if there is no value that matches that name in the unique array
// Code:
const uniqueLastNames: string[] = users.reduce(
  (unique: string[], { lastName }) => {
    if (!unique.some((name) => lastName === name)) {
      unique.push(lastName);
    }

    return unique;
  },
  [],
);

// Pattern 3: Nested data
const companies = [
  {
    name: "Acme",
    employees: [
      { name: "Alice", department: "engineering", salary: 120000 },
      { name: "Bob", department: "marketing", salary: 80000 },
    ],
  },
  {
    name: "Globex",
    employees: [
      { name: "Charlie", department: "engineering", salary: 110000 },
      { name: "Diana", department: "marketing", salary: 75000 },
    ],
  },
];

// Q5: Total salary bill across all companies
// Your approach in plain English: double reduce on each company and employee to sum up the salaries of all employees from each company
// Code:
const totalSalaryBill = companies.reduce(
  (sum, { employees }) =>
    (sum += employees.reduce((sum, { salary }) => (sum += salary), 0)),
  0,
);

// Q6: List of all engineering employees: ["Alice at Acme", "Charlie at Globex"]
// Your approach in plain English: store all the employees that are in a given company variable and map them to an array and return a template literal with those values
// Code:
const engineeringEmployees: string[] = companies.map(({ employees, name }) => {
  const engineer = employees
    .filter(({ department }) => department === "engineering")
    .map(({ name }) => name);
  return `${engineer} at ${name}`;
}); 

// Uncomment to check:
console.log("Grouped:", grouped);
console.log("Big categories:", bigCategories);
console.log("User lookup:", userLookup);
console.log("Unique last names:", uniqueLastNames);
console.log("Total salary bill:", totalSalaryBill);
console.log("Engineering employees:", engineeringEmployees);
