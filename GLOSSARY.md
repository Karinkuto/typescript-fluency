# TypeScript Programming Glossary

Core terms for reasoning about TypeScript code. All lessons should use these definitions.

## Data Operations

**Aggregation**:
Combining multiple records into a summary, typically by a key or set of keys.
_Avoid_: Grouping, summarizing

**Filtering**:
Selecting a subset of records that match a condition.
_Avoid_: Finding, selecting

**Mapping**:
Transforming each element of a collection into a new form.
_Avoid_: Converting, transforming

**Reduction**:
Combining all elements of a collection into a single value using an accumulator.
_Avoid_: Folding, accumulating

## Array Methods

**find()**:
Returns the first element matching a condition, or undefined if none match.
_Avoid_: search, lookup

**filter()**:
Returns a new array with all elements matching a condition.
_Avoid_: select, keep

**map()**:
Returns a new array with each element transformed by a function.
_Avoid_: transform, convert

**some()**:
Returns true if at least one element matches a condition.
_Avoid_: any, has

**every()**:
Returns true if all elements match a condition.
_Avoid_: all, allMatch

**reduce()**:
Combines all elements into a single value using an accumulator function.
_Avoid_: fold, accumulate

## Types and Values

**Undefined**:
A variable that has been declared but not assigned a value. Also the default return value of functions.
_Avoid_: empty, missing

**Null**:
An intentional absence of a value. Explicitly set by the programmer.
_Avoid_: empty, nothing

**Truthiness**:
Values that evaluate to true in a boolean context. Everything except: false, 0, "", null, undefined, NaN.
_Avoid_: true-like, boolean equivalent

**Falsy**:
Values that evaluate to false in a boolean context: false, 0, "", null, undefined, NaN.
_Aavoid_: false-like, boolean equivalent

**Type Narrowing**:
The process of TypeScript inferring a more specific type from a condition or check.
_Avoid_: type casting, type assertion

**Object.entries()**:
Converts an object into an array of [key, value] pairs for iteration.
_Avoid_: iterating object directly

**Object.fromEntries()**:
Converts an array of [key, value] pairs back into an object.
_Avoid_: rebuilding object manually

## Patterns

**Find-or-Create**:
Search for an existing entry; if found, update it; if not, create a new one. Common in aggregation.
_Avoid_: upsert pattern (too vague)

**Validation Pattern**:
Loop through records, check rules, keep or discard. Can accumulate errors or return boolean.
_Avoid_: checking, verification

**Composite Matching**:
Matching on multiple fields simultaneously (AND logic) rather than a single field.
_Avoid_: multi-key matching

**Pipeline**:
Chaining array methods (filter → map → reduce) to transform data in steps. Each step takes an array and passes the result to the next.
_Avoid_: step-by-step processing

**Nested Reduce**:
Using reduce inside reduce (or map) to process nested data structures, like items inside orders.
_Avoid_: inner reduce, double reduce

**Computed Property Name**:
Using [variable] as an object key to dynamically set property names based on data values.
_Avoid_: dynamic key
