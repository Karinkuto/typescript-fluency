// Set D: Boolean Logic Drills
// Practice the known weak spot — conditions and truthiness

// Drill 1: Truthy/Falsy
// Predict what each expression evaluates to BEFORE running

const val1 = 0 || "hello"; // your prediction: returns "hello" since 0 is falsy and a value existing is truthy
const val2 = "" || "default"; // your prediction: my ts linter is giving it away but an empty string is also falsy so we get "default"
const val3 = "false" || "real"; // your prediction: since both are non empty string values we're doing true or true which I think returns the first truthy value in this case "false"
const val4 = null ?? "fallback"; // your prediction: that's a nullish checker so if the value on the left of the operator returns or is null it returns the value on the right so we get "fallback"
const val5 = undefined ?? "fallback"; // your prediction: undefined is also nullish as well i think which means we also get the "fallback" value , but my ts linter is still giving it away
const val6 = 0 ?? "fallback"; // your prediction: since this is a nullish checker and the value on the left is falsy but still not nullish, I believe we get the value 0 even if the value on the right is truthy, again my linter has provided help

// Uncomment to check:
console.log("val1:", val1);
console.log("val2:", val2);
console.log("val3:", val3);
console.log("val4:", val4);
console.log("val5:", val5);
console.log("val6:", val6);

// Drill 2: Safe property access
// Write conditions that safely handle null/undefined

type Person = {
  name: string;
  address?: {
    city?: string;
    zip?: string;
  };
};

const person1: Person = {
  name: "Alice",
  address: { city: "Seattle", zip: "98101" },
};
const person2: Person = { name: "Bob" };
const person3: Person = { name: "Charlie", address: {} };

// Q1: Get city, or "Unknown" if not available
// Write the expression:
const city1 = person1.address?.city ?? "Unknown"; // "Seattle"
const city2 = person2.address?.city ?? "Unknown"; // "Unknown"
const city3 = person3.address?.city ?? "Unknown"; // "Unknown"

// Q2: Get zip, or "No zip" if not available
// Write the expression:
const zip1 = person1.address?.zip ?? "No zip"; // "98101"
const zip2 = person2.address?.zip ?? "No zip"; // "No zip"
const zip3 = person3.address?.zip ?? "No zip"; // "No zip"

// Drill 3: Combining conditions
const items = [
  { name: "A", price: 100, inStock: true, rating: 4.5 },
  { name: "B", price: 50, inStock: false, rating: 3.2 },
  { name: "C", price: 200, inStock: true, rating: 4.8 },
  { name: "D", price: 15, inStock: true, rating: 2.1 },
  { name: "E", price: 80, inStock: false, rating: 4.0 },
]; // Q3: Find items that are in stock AND have rating > 4.0
// Write the code:
const highRatedInStock: typeof items = items.filter(
  ({ inStock, rating }) => inStock && rating > 4.0,
); // [{name: "A", price: 100, inStock: true, rating: 4.5}, {name: "C", price: 200, inStock: true, rating: 4.8}]

// Q4: Are ALL items either in stock or priced under $50?
// Write the code:
const allAffordableOrAvailable = items.every(
  ({ inStock, price }) => inStock || price < 50,
); // false - because when we reach the second entry we get a false which means the entire output will be false since we're using every()

// Q5: Is there any item that's out of stock AND costs more than $100?
// Write the code:
const expensiveOutOfStock = items.some(
  ({ inStock, price }) => !inStock && price > 100,
); // false - because only item C is priced above 100 and it's still in stock

// Drill 4: De Morgan's Law
// Find products that are NOT (cheap AND in stock).
// cheap = price < 150

const products = [
  { name: "A", price: 100, inStock: true },
  { name: "B", price: 200, inStock: false },
  { name: "C", price: 50, inStock: true },
  { name: "D", price: 300, inStock: true },
  { name: "E", price: 80, inStock: false },
]; // Q6: Find products that are NOT (cheap AND in stock)
// cheap = price < 150

// Way 1: write the condition directly as described — NOT (cheap AND in stock)
// Your approach in plain English: just write it as you described, !(price < 150 && inStock)
const notCheapAndInStock1: typeof products = products.filter(
  ({ price, inStock }) => !(price < 150 && inStock),
);

// Way 2: use De Morgan to rewrite the condition as (expensive OR out of stock)
// Hint: !(A && B) = !A || !B
// Your approach in plain English: copy over the solution from way 1 and distribute the negation
const notCheapAndInStock2: typeof products = products.filter(
  ({ price, inStock }) => price >= 150 || !inStock,
);

// Uncomment to check:
console.log("Not (cheap AND in stock) — Way 1:", notCheapAndInStock1);
console.log("Not (cheap AND in stock) — Way 2:", notCheapAndInStock2);
