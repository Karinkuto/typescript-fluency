# Some and Every Methods

Student learned some() and every() as boolean checks across arrays.
- some() returns true if ANY item matches (uses OR logic)
- every() returns true if ALL items match (uses AND logic)
- They are logical opposites: some(invalid) === !every(valid)

## Key insight
Student correctly identified that short-circuit evaluation applies: if first condition in some() is true, it stops. Same for every() if first condition is false.
