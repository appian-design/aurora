---
status: "stable"
last_updated: "2025-01-08"
---

# Tags Guidance

Tags are visual indicators used to highlight notable attributes of items and draw viewer attention to important characteristics. They provide quick, scannable context without overwhelming the interface.

![Tags component example showing working SAIL code in expression editor](basic-tag-success.png)

## Design

### When to Use Tags

Use tags to:
- Highlight newly added or updated items
- Display important item attributes (status, priority, category)
- Provide quick visual context in lists and data displays
- Draw attention to notable characteristics

### Variants

#### Single Tag
Use a single tag to highlight one key attribute or status.

#### Multiple Tags
When displaying multiple tags, use uniform, muted colors to maintain visual hierarchy and avoid overwhelming the interface.

#### Colored Tags
Use colors strategically to convey meaning:
- **Positive (Green)**: Success, active, approved states
- **Negative (Red)**: Errors, urgent, critical items
- **Accent (Blue)**: Important information, primary actions
- **Secondary (Gray)**: Neutral information, inactive states

### Usage Guidelines

#### Text Content
- Keep text concise - prefer one or two-word keywords
- Avoid phrases or full sentences
- Use consistent capitalization (all-caps recommended)
- Choose descriptive, meaningful labels

#### Visual Consistency
- Use uniform colors when displaying multiple tags together
- Maintain consistent sizing within the same interface
- Ensure sufficient contrast for accessibility

#### Layout Considerations
- Tags work well in side-by-side layouts
- Allow tags to wrap in narrow containers
- Consider spacing between multiple tags

### Accessibility

- Tags must have sufficient color contrast (4.5:1 ratio minimum)
- Use `accessibilityText` parameter when tag meaning isn't clear from visual context
- Don't rely solely on color to convey information
- Consider screen reader compatibility when using linked tags

## Development

### Basic Tag Implementation

```sail
a!tagField(
  labelPosition: "COLLAPSED",
  tags: {
    a!tagItem(
      text: "NEW",
      backgroundColor: "ACCENT"
    )
  }
)
```

### Multiple Tags with Different Colors

```sail
a!tagField(
  labelPosition: "COLLAPSED",
  tags: {
    a!tagItem(
      text: "URGENT",
      backgroundColor: "NEGATIVE"
    ),
    a!tagItem(
      text: "CUSTOMER FACING",
      backgroundColor: "ACCENT"
    ),
    a!tagItem(
      text: "IN PROGRESS",
      backgroundColor: "SECONDARY"
    )
  },
  size: "STANDARD"
)
```

### Tags with Custom Styling

```sail
a!tagField(
  labelPosition: "COLLAPSED",
  tags: {
    a!tagItem(
      text: "HIGH PRIORITY",
      backgroundColor: "NEGATIVE",
      textColor: "WHITE"
    ),
    a!tagItem(
      text: "REVIEWED",
      backgroundColor: "POSITIVE",
      textColor: "WHITE"
    )
  },
  align: "START",
  size: "SMALL"
)
```

### Tags in Data Display Context

```sail
a!localVariables(
  local!items: {
    {id: 1, name: "Project Alpha", status: "Active", priority: "High"},
    {id: 2, name: "Project Beta", status: "Pending", priority: "Medium"},
    {id: 3, name: "Project Gamma", status: "Complete", priority: "Low"}
  },
  a!gridField(
    label: "Project Status",
    data: local!items,
    columns: {
      a!gridColumn(
        label: "Project Name",
        value: fv!row.name
      ),
      a!gridColumn(
        label: "Status",
        value: a!tagField(
          labelPosition: "COLLAPSED",
          tags: {
            a!tagItem(
              text: fv!row.status,
              backgroundColor: if(
                fv!row.status = "Active",
                "POSITIVE",
                if(
                  fv!row.status = "Pending",
                  "SECONDARY",
                  "ACCENT"
                )
              )
            )
          }
        )
      ),
      a!gridColumn(
        label: "Priority",
        value: a!tagField(
          labelPosition: "COLLAPSED",
          tags: {
            a!tagItem(
              text: fv!row.priority,
              backgroundColor: if(
                fv!row.priority = "High",
                "NEGATIVE",
                if(
                  fv!row.priority = "Medium",
                  "ACCENT",
                  "SECONDARY"
                )
              )
            )
          }
        )
      )
    }
  )
)
```

### Key Parameters

- **tags**: List of `a!tagItem()` components
- **size**: "SMALL" or "STANDARD" (default)
- **align**: "START", "CENTER", or "END"
- **labelPosition**: "ABOVE", "ADJACENT", "COLLAPSED", or "JUSTIFIED"
- **accessibilityText**: Screen reader description when needed

### Tag Item Properties

- **text**: Display text for the tag
- **backgroundColor**: Color scheme - "ACCENT", "POSITIVE", "NEGATIVE", "SECONDARY"
- **textColor**: Optional text color override
- **link**: Optional link for interactive tags