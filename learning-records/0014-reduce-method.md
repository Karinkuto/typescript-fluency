# Reduce Method

Student learned reduce() as the functional version of aggregation patterns. Key concepts:
- Accumulator builds a single value across iterations
- Initial value must be provided (especially for empty arrays)
- Can build numbers (sum, count) or objects (grouping, aggregation)
- Used pattern: spread accumulator, add new key/value, return result

## Applications practiced
1. Summing numbers
2. Counting with boolean conditions (true = 1, false = 0)
3. Building objects by grouping (dynamic keys with [name])
4. Inventory report (single-pass reduce vs multiple passes)
5. Nested reduces (reduce inside reduce for nested arrays)

## Bug caught
Initially divided by 2 on each iteration instead of tracking sum + count separately. Learned that average requires two values (sum, count) in accumulator, then divide at the end.
