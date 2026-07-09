# References vs Copies (Object Mutability)

Student discovered that pushing an object reference stores the same object, not a copy. Independently reasoned toward creating shallow copies with `{ name: person.name, score: person.score }`.

## Evidence
- Initially believed `push(person)` created a copy
- After experimentation, correctly identified that references are shared
- Independently proposed spread or manual property copying as a solution

## Implications
- Ready for exercises involving data transformation where independence matters
- Can reinforce spread syntax `{ ...person }` as a cleaner pattern
- Important for any filtering/aggregation exercises — must understand when mutations are intentional vs accidental
