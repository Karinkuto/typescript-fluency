# Object Methods and Pipelines

Student learned Object.entries() and Object.fromEntries() for iterating over objects.
- Object.entries() converts object to array of [key, value] pairs
- Object.fromEntries() converts back to object
- Pipeline pattern: Object.entries() → filter → map → Object.fromEntries()

## Key patterns
- Computed property names: [name] uses variable value as key
- Unused parameters: skip with [, name] syntax
- Type annotations needed for method chains: .map(([name, price]): [string, { ... }] => [...])

## Applications
1. Filter object entries by value
2. Transform entries (add discounted prices)
3. Group by with dynamic keys (transactions by category)
4. Single object operation (no loop needed)
