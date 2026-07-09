# Validation Design Patterns

Student practiced validation across three exercises with increasing complexity:
1. Filter valid items + map to add property
2. Filter valid items + transform to different shape
3. Single map producing {data, error} for all items

Student can now:
- Write filter conditions with multiple rules
- Use ternary chains for conditional logic in map
- Produce consistent {data, error} output structure
- Distinguish between filtering (select subset) and mapping (transform all)

## Key design decision
Student chose {data, error} structure for validation results. Understands why consistent shape matters for downstream code.
