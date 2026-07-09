# Validation with Error Reporting

Student evolved from basic filtering to structured validation with error messages. Started with a simple loop + condition pattern, then:
1. Added whitespace checking using trim()
2. Used short-circuit evaluation for null safety
3. Consolidated conditions with || when error messages matched
4. Built {data, error} output structure for consistent results
5. Split into two arrays (validated/invalidated)

Student independently reasoned through design tradeoffs: readability vs compactness, single array vs two arrays, consistent structure. Showed growing confidence with conditionals and object creation.

## Key moment
Student asked why `!= null` covers both null and undefined — learned loose equality rule. Also correctly identified that consolidating conditions requires same error message, otherwise keep separate.
