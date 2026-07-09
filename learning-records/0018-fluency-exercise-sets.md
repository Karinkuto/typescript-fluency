# Fluency Exercise Sets

Third session. Student completed 4 targeted exercise sets designed to build method selection and chaining fluency.

## Set A — Choose the Right Method
- Recognized that filter + first simplifies to find without prompting
- Used every, some, reduce correctly
- Boolean conditions using `!passed` instead of `passed === false` — improvement from earlier sessions

## Set B — Combine Methods
- Chained filter → reduce (nested reduce for items inside orders)
- Used filter + some for "if any item matches" pattern
- Grouped and summed revenue by customer using reduce with dynamic keys
- Extracted `completed` variable to avoid filtering the array twice for average order value
- Refactored spread on accumulator to mutation after Biome warning about performance

## Set C — Real-World Patterns
- Grouping transactions by category + date using reduce
- Creating lookup objects with Object.fromEntries
- Unique values using reduce + some
- Nested data: reducing across companies and their employees for total salary
- Bug in Q2: filtered individual transactions by amount > 50 instead of grouping by category first and summing

## Set D — Boolean Logic
- `||` vs `??` correctly understood (first truthy vs nullish coalescing)
- Optional chaining with `?.` for safe nested property access
- Combining conditions with AND/OR correctly
- De Morgan's law introduced: `!(A && B) = !A || !B` demonstrated with pricing example (cheap AND in stock)

## Key Observations
- Student independently identifies simpler approaches over complex chains
- Boolean logic is noticeably improved from earlier sessions
- Pattern recognition is developing — can describe the problem in English before writing code
- Student pushed back when an exercise felt forced, showing good judgment about when patterns apply
