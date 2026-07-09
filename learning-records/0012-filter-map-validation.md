# Filter, Map, and Validation Pipelines

Student progressed from for...of validation loops to using filter() and map() fluently. Key milestones:

1. Understood filter() returns matching items (not rejected ones)
2. Found and fixed an optional chaining bug (null?.trim() slips through)
3. Learned spread syntax for extending objects: { ...s, status: "Approved" }
4. Discovered arrow function gotcha — need parentheses around returned objects
5. Completed three exercises: filter+map chaining, type transformation, single-map error reporting

Student now reasons about data transformations before coding — asks "what shape do I want?" before writing code. This is the core skill gap closing.

## Key moment
Student correctly identified that `r.age && r.age >= 18` short-circuits on 0 because 0 is falsy. Shows growing understanding of boolean evaluation.
