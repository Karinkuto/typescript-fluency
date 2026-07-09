# Nested Reduces and Sorting

Student learned two advanced patterns:

## Nested reduces
When data is nested (items inside orders), use reduce inside reduce (or map). Outer loop processes parent items, inner loop processes children.

## Sorting objects
To find top/bottom values:
1. Convert to entries: Object.entries(obj)
2. Sort by value: .sort((a, b) => b[1] - a[1]) for descending
3. Pick first: [0]

Sort comparison function:
- b[1] - a[1] = descending (highest first)
- a[1] - b[1] = ascending (lowest first)

## Student feedback
Student correctly pointed out that exercises introduced patterns not yet taught. Important reminder: teach patterns before testing them.
