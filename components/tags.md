---
status: "stable"
last_updated: "2025-07-09"
---

# Tags Guidance

Tags are visual indicators used to highlight notable attributes of items and draw viewer attention to important characteristics. They provide quick, scannable context without overwhelming the interface.

![](https://github.com/user-attachments/assets/15680949-2452-43c9-99bd-98a33a83cf14)

## Design

### When to Use Tags

Use tags to:
- Highlight newly added or updated items
- Display important item attributes (status, priority, category)
- Provide quick visual context in lists and data displays
- Draw attention to notable characteristics

### Variants

#### Categorical Tags
Use tags to display status, priority, or category information:
- Status indicators (Active, Pending, Complete)
- Priority levels (High, Medium, Low)
- Category labels (Department, Type, Region)

#### Numerical Tags
Use tags to display counts, quantities, or numerical information:
- Unread message counts (3, 12, 99+)
- Task counts (5 tasks, 2 pending)
- Item quantities (15 items, 3 new)

### Color

Use colors strategically to convey meaning and maintain consistency:

Colors with semantic meaning:
- **Positive (Green)**: Success, active, approved states
- **Negative (Red)**: Errors, urgent, critical items  
- **Accent (Blue)**: Important information, primary actions
- **Secondary (Gray)**: Neutral information, inactive states

Extended color palette for categorical tags:
- Orange (Orange 3) 
- Yellow (Yellow 3) 
- Teal (Teal 3) 
- Sky (Sky 3) 
- Purple (Purple 3) 
- Pink (Pink 3)

### Usage Guidelines

#### Text Content
- Keep text concise - prefer one or two-word keywords
- Avoid phrases or full sentences
- Use consistent capitalization (all-caps recommended)
- Choose descriptive, meaningful labels

#### Visual Consistency
- Use different colors when displaying multiple tags together to improve scannability
- Maintain the same color for identical values across your application (e.g., all "High" priority tags should use the same color)
- Keep consistent sizing within the same interface
- Ensure sufficient contrast for accessibility

### Accessibility

- Tags must have sufficient color contrast (4.5:1 ratio minimum)
- Use `accessibilityText` parameter when tag meaning isn't clear from visual context
- Don't rely solely on color to convey information

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
      textColor: "STANDARD"
    ),
    a!tagItem(
      text: "REVIEWED",
      backgroundColor: "POSITIVE",
      textColor: "STANDARD"
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
- **backgroundColor**: Color scheme - "ACCENT", "POSITIVE", "NEGATIVE", "SECONDARY", Orange 3, Yellow 3, Teal 3, Sky 3, Purple 3, Pink 3
- **textColor**: Optional text color override
- **link**: Optional link for interactive tags
