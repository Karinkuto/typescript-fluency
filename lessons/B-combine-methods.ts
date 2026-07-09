// Set B: Combine Methods
// Chain methods to solve these in one pipeline

const orders = [
  {
    id: 1,
    customer: "Alice",
    items: [
      { name: "Book", price: 15 },
      { name: "Pen", price: 3 },
    ],
    status: "completed",
  },
  {
    id: 2,
    customer: "Bob",
    items: [{ name: "Laptop", price: 999 }],
    status: "completed",
  },
  {
    id: 3,
    customer: "Alice",
    items: [
      { name: "Notebook", price: 8 },
      { name: "Pencil", price: 2 },
    ],
    status: "cancelled",
  },
  {
    id: 4,
    customer: "Charlie",
    items: [{ name: "Phone", price: 699 }],
    status: "completed",
  },
  {
    id: 5,
    customer: "Bob",
    items: [
      { name: "Headphones", price: 150 },
      { name: "Case", price: 25 },
    ],
    status: "completed",
  },
];

// Problem 1: Total revenue from completed orders
// Step 1: What do I want? A single number — total of all item prices for completed orders
// Step 2: Which methods? filter → reduce → reduce
// Write the code:
const totalRevenue = orders
  .filter(({ status }) => status === "completed")
  .reduce((total, { items }) => {
    const revenue = items.reduce((sum, { price }) => (sum += price), 0);
    const totalRevenue = revenue + total;
    return totalRevenue;
  }, 0);

// Problem 2: List of customer names who have at least one order over $100
// Step 1: What do I want? Array of unique customer names
// Step 2: Which methods? filter to get orders with items above 100 and reduce to create the array of unique names from the filtered array - this took some time not gonna lie
// Write the code:
const bigSpenders: string[] = orders
  .filter(({ items }) => items.some(({ price }) => price > 100))
  .reduce((unique: string[], order) => {
    if (!unique.some((name) => name === order.customer)) {
      unique.push(order.customer);
    }
    return unique;
  }, []);

// Problem 3: Revenue per customer (object: { Alice: X, Bob: Y, ... })
// Only count completed orders
// Step 1: What do I want? An object mapping customer names to their total spending
// Step 2: Which methods? filter to get only completed orders and reduce to create the single object with customer and revenue
// Write the code:
const revenueByCustomer: Record<string, number> = orders
  .filter(({ status }) => status === "completed")
  .reduce(
    (acc, { customer, items }) => {
      const total = items.reduce((sum, { price }) => (sum += price), 0);
      acc[customer] = (acc[customer] || 0) + total;

      return acc;
    },
    {} as Record<string, number>,
  );

// Problem 4: Average order value for completed orders
// Step 1: What do I want? A number — total revenue / number of completed orders
// Step 2: Which methods? same methods as problem 1 plus the filter and length methods to get the number of completed orders dynamically
// Write the code: i copied over the solution for problem 1 and added the averaging part
const completed = orders.filter(({ status }) => status === "completed");

const averageOrderValue =
  completed.reduce((total, { items }) => {
    const revenue = items.reduce((sum, { price }) => (sum += price), 0);
    const totalRevenue = revenue + total;
    return totalRevenue;
  }, 0) / completed.length;

// Uncomment to check:
console.log("Total revenue:", totalRevenue);
console.log("Big spenders:", bigSpenders);
console.log("Revenue by customer:", revenueByCustomer);
console.log("Average order value:", averageOrderValue);
