# Filter and Map Methods

Student learned filter() and map() as alternatives to for...of loops. Key insights:
- filter() returns items matching a condition (not the ones filtered out)
- map() transforms each item into a new shape
- Can chain filter → map for pipeline: select then transform
- Spread syntax { ...obj, newProp } copies and extends objects
- Arrow functions need parentheses around returned object literals: (s) => ({ ...s })

## Bug caught
Optional chaining (?.) with filter caused null exporter to slip through. Student identified that null?.trim() returns undefined, and undefined !== "" is true. Fixed by adding null check first using short-circuit evaluation.

## Student moment
Student independently identified that r.age && r.age >= 18 handles age=0 correctly because 0 is falsy. Strong grasp of short-circuit evaluation now.
