# Business Rules vs Implementation Rules

Student understands the difference between a business rule (what the domain requires) and its implementation (how to check it in code). Major conceptual breakthrough.

## Evidence
- Business rule: "Every shipment must identify the exporter"
- Implementation: not null, not undefined, not empty, not whitespace
- Student independently moved from "exporter exists" to "does exporter reference a valid exporter record?"

## Implications
- This is a foundational concept for all future work
- Keep reinforcing: always ask "what does this rule actually mean in data?" before coding
- Ready for exercises that require translating business language into code conditions
