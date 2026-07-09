// Set A: Choose the Right Method
// For each problem: (1) describe what you want, (2) pick the method, (3) write code

const students = [
  { name: "Alice", grade: 92, passed: true },
  { name: "Bob", grade: 67, passed: false },
  { name: "Charlie", grade: 85, passed: true },
  { name: "Diana", grade: 45, passed: false },
  { name: "Eve", grade: 78, passed: true },
];

// Problem 1: Find the first student who failed
// What am I trying to do? I'm basically gonna filter all the students that failed and pick the first one
// Which method? use the filter method and select the first entry in that filtered array, but i see now that find basically simplifies that by returning the first satisfying value
// Write the code:
const firstFailing = students.find(({ passed }) => !passed);

// Problem 2: Get an array of just the names of students who passed
// What am I trying to do? filter the students that have passed and grab their names
// Which method(s)? the filter method to filter the students that have passed and the map method to create an array of names from those students
// Write the code: the bottom code works but i know it can be simplified but i'll proceed for now - optimized - previously had to chain filter and then reduce and then object.entries and then map the names at index 0 cuz there were dups
const passingNames = students
  .filter(({ passed }) => passed)
  .map(({ name }) => name);

// Problem 3: Do ALL students have a grade above 50?
// What am I trying to do? trying to check if every student has a grade above 50
// Which method? the every method
// Write the code:
const allAbove50 = students.every(({ grade }) => grade > 50);

// Problem 4: Is there ANY student who failed?
// What am I trying to do? trying to check if there are some students who have failed
// Which method? the some method
// Write the code:
const anyFailed = students.some(({ passed }) => !passed);

// Problem 5: What's the average grade?
// What am I trying to do? trying to sum all the grades of the students and divide them by the number of students
// Which method? we reduce to sum all the grades and outside the reduce we divide by the length of the array
// Write the code:
const averageGrade =
  students.reduce((sum, { grade }) => (sum += grade), 0) / students.length;

// Run this file: bun run lessons/A-choose-the-method.ts
// Uncomment below to check your answers:
console.log("First failing:", firstFailing);
console.log("Passing names:", passingNames);
console.log("All above 50:", allAbove50);
console.log("Any failed:", anyFailed);
console.log("Average grade:", averageGrade);
