---
status: "stable"
last_updated: "2025-09-05"
---

# Tags

Tags are visual indicators used to highlight notable attributes of items and draw viewer attention to important characteristics. They provide quick, scannable context without overwhelming the interface.

![](https://github.com/user-attachments/assets/d42d0727-481f-4f2c-b209-877f45ab11d1)

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

 Tag colors should always use a [color name] 1 for the background and the corresponding [color name] 4 for the text. For example, a green tag would use Green 1 for the background and Green 4 for the text.

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

```
a!tagField(
  labelPosition: "COLLAPSED",
  tags: {
    a!tagItem(
      text: "NEW",
      /* Using Sky 1 and 4 */
      backgroundColor: "#DBECFF",
      textColor: "#0C4283"
    )
  }
)
```

### Multiple Tags with Different Colors

```
a!tagField(
  labelPosition: "COLLAPSED",
  tags: {
    a!tagItem(
      text: "URGENT",
      backgroundColor: "#FED7DE",
      textColor: "#9F0019",
      
    ),
    a!tagItem(
      text: "CUSTOMER FACING",
      backgroundColor: "#DBECFF",
      textColor: "#0C4283"
    ),
    a!tagItem(
      text: "IN PROGRESS",
      backgroundColor: "#FFF6C9",
      textColor: "#856C00"
    )
  },
  size: "STANDARD"
)
```

### Tags with Custom Styling

```
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

```
a!localVariables(
  local!items: {
    {
      id: 1,
      name: "Project Alpha",
      status: "Active",
      priority: "High"
    },
    {
      id: 2,
      name: "Project Beta",
      status: "Pending",
      priority: "Medium"
    },
    {
      id: 3,
      name: "Project Gamma",
      status: "Complete",
      priority: "Low"
    }
  },
  a!gridField(
    label: "Project Status",
    data: local!items,
    columns: {
      a!gridColumn(label: "Project Name", value: fv!row.name),
      a!gridColumn(
        label: "Status",
        value: a!tagField(
          labelPosition: "COLLAPSED",
          tags: {
            a!tagItem(
              text: fv!row.status,
              backgroundColor: if(
                fv!row.status = "Active",
                "#DBECFF",
                if(
                  fv!row.status = "Pending",
                  "#FFEED3",
                  "#E3FBDF"
                )
              ),
              textColor: if(
                fv!row.status = "Active",
                "#0C4283",
                if(
                  fv!row.status = "Pending",
                  "#995C00",
                  "#117C00"
                )
              ),
              
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
                "#FED7DE",
                if(
                  fv!row.priority = "Medium",
                  "#FFEED3",
                  "#E3FBDF",
                  
                )
              ),
              textColor: if(
                fv!row.priority = "High",
                "#9F0019",
                if(
                  fv!row.priority = "Medium",
                  "#995C00",
                  "#117C00"
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

### Tag Item Properties

- **text**: Display text for the tag
- **backgroundColor**: Color scheme. Accepts semantic names (`ACCENT`, `POSITIVE`, `NEGATIVE`, `SECONDARY`) or specific palette colors (e.g., Green 1, Orange 1, Red 1).
- **textColor**: Color scheme. Use the corresponding [color name] 4 for the text color. For example, if backgroundColor is Green 1, textColor should be Green 4. Use the `STANDARD` value if you've chosen a semantic color for the background to maintain proper text contrast.
- **link**: Optional link for interactive tags
