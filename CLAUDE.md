# CLAUDE.md - Appian SAIL Interface Generation Guide

## Overview
This guide helps generate valid Appian SAIL interfaces using documented components and best practices. SAIL (Self-Assembling Interface Layer) is Appian's declarative UI framework for building responsive, accessible interfaces.

## Core Principles

### 1. Interface Structure
- Use top-level layouts: `a!formLayout()`, `a!headerContentLayout()`, `a!paneLayout()`
- Nest layouts appropriately: `a!sectionLayout()`, `a!columnsLayout()`, `a!cardLayout()`
- Always include `contents` parameter for container components

### 2. Component Syntax
All SAIL components follow the pattern: `a!componentName(parameter: value)`

```sail
a!textField(
  label: "Customer Name",
  value: local!customerName,
  saveInto: local!customerName,
  required: true
)
```

## Essential Layout Components

### Section Layout
Groups related content with optional collapsible functionality:
```sail
a!sectionLayout(
  label: "Customer Information",
  labelHeadingTag: "H2",
  contents: {
    /* Components go here */
  },
  isCollapsible: true,
  marginBelow: "STANDARD"
)
```

### Columns Layout
Creates responsive multi-column layouts:
```sail
a!columnsLayout(
  columns: {
    a!columnLayout(
      width: "MEDIUM",
      contents: {
        /* Left column content */
      }
    ),
    a!columnLayout(
      width: "WIDE", 
      contents: {
        /* Right column content */
      }
    )
  },
  stackWhen: {"PHONE", "TABLET_PORTRAIT"}
)
```

### Card Layout
Provides visual grouping with styling options:
```sail
a!cardLayout(
  contents: {
    /* Card content */
  },
  style: "STANDARD",
  padding: "STANDARD",
  showBorder: true,
  shape: "SEMI_ROUNDED"
)
```

## Common Input Components

### Text Field
```sail
a!textField(
  label: "Email Address",
  labelPosition: "ABOVE",
  value: local!email,
  saveInto: local!email,
  required: true,
  validations: if(
    not(isemailaddress(local!email)),
    "Please enter a valid email address",
    null
  )
)
```

### Dropdown
```sail
a!dropdownField(
  label: "Department",
  choiceLabels: {"Sales", "Marketing", "Engineering", "Support"},
  choiceValues: {"sales", "marketing", "eng", "support"},
  value: local!department,
  saveInto: local!department,
  placeholder: "Select a department"
)
```

### Radio Buttons
```sail
a!radioButtonField(
  label: "Priority Level",
  choiceLabels: {"High", "Medium", "Low"},
  choiceValues: {1, 2, 3},
  value: local!priority,
  saveInto: local!priority,
  choiceLayout: "STACKED"
)
```

## Display Components

### Rich Text Display
```sail
a!richTextDisplayField(
  labelPosition: "COLLAPSED",
  value: {
    a!richTextItem(text: "Status: ", style: "STRONG"),
    a!richTextItem(
      text: "Active",
      color: "POSITIVE"
    )
  }
)
```

### Tag Field
```sail
a!tagField(
  labelPosition: "COLLAPSED",
  tags: {
    a!tagItem(
      text: "Urgent",
      backgroundColor: "NEGATIVE"
    ),
    a!tagItem(
      text: "Customer Facing",
      backgroundColor: "ACCENT"
    )
  }
)
```

## Action Components

### Button
```sail
a!buttonWidget(
  label: "Save Changes",
  style: "SOLID",
  color: "ACCENT", 
  size: "STANDARD",
  loadingIndicator: true,
  saveInto: {
    /* Save actions here */
  }
)
```

### Link Field
```sail
a!linkField(
  links: {
    a!dynamicLink(
      label: "View Details",
      value: local!selectedId,
      saveInto: local!selectedId
    )
  }
)
```

## Data Display Components

### Read-Only Grid
```sail
a!gridField(
  label: "Recent Orders",
  data: local!orders,
  columns: {
    a!gridColumn(
      label: "Order ID",
      sortField: "orderId", 
      value: fv!row.orderId
    ),
    a!gridColumn(
      label: "Customer",
      sortField: "customerName",
      value: a!linkField(
        links: {
          a!recordLink(
            label: fv!row.customerName,
            recordType: recordType!Customer,
            identifier: fv!row.customerId
          )
        }
      )
    ),
    a!gridColumn(
      label: "Status",
      value: a!tagField(
        tags: a!tagItem(
          text: fv!row.status,
          backgroundColor: if(
            fv!row.status = "Complete",
            "POSITIVE",
            "SECONDARY"
          )
        )
      )
    )
  },
  showSearchBox: true,
  showRefreshButton: true
)
```

## Chart Components

### Column Chart
```sail
a!columnChartField(
  label: "Sales by Quarter",
  categories: {"Q1", "Q2", "Q3", "Q4"},
  series: {
    a!chartSeries(
      label: "2024",
      data: {45000, 52000, 48000, 61000}
    )
  },
  colorScheme: "RAINFOREST",
  showLegend: true,
  height: "MEDIUM"
)
```

## Accessibility Best Practices

### Heading Hierarchy
```sail
a!headingField(
  text: "Customer Dashboard",
  size: "LARGE", 
  headingTag: "H1"
),
a!sectionLayout(
  label: "Account Information",
  labelHeadingTag: "H2",
  contents: {
    a!headingField(
      text: "Contact Details",
      size: "MEDIUM",
      headingTag: "H3"
    )
  }
)
```

### Form Labels and Instructions
```sail
a!textField(
  label: "Social Security Number",
  instructions: "Enter your 9-digit SSN without dashes",
  value: local!ssn,
  saveInto: local!ssn,
  validationGroup: "personal_info",
  accessibilityText: "Social Security Number for tax purposes"
)
```

## Common Parameter Patterns

### Visibility Control
```sail
showWhen: not(isnull(local!selectedCustomer))
```

### Validation Patterns
```sail
validations: {
  if(len(local!value) < 3, "Must be at least 3 characters", null),
  if(isnull(local!value), "This field is required", null)
}
```

### Margin Control
```sail
marginAbove: "STANDARD",
marginBelow: "MORE"
```

### Label Positioning
```sail
labelPosition: "ABOVE"  /* ABOVE, ADJACENT, COLLAPSED, JUSTIFIED */
```

## Responsive Design

### Side by Side Layout
```sail
a!sideBySideLayout(
  items: {
    a!sideBySideItem(
      width: "MINIMIZE",
      item: a!imageField(
        labelPosition: "COLLAPSED",
        images: a!userImage(user: local!userId),
        size: "SMALL"
      )
    ),
    a!sideBySideItem(
      item: a!richTextDisplayField(
        labelPosition: "COLLAPSED",
        value: local!userName
      )
    )
  },
  alignVertical: "MIDDLE",
  stackWhen: {"PHONE"}
)
```

## Interface Templates

### Basic Form
```sail
a!formLayout(
  label: "New Customer Registration",
  contents: {
    a!sectionLayout(
      label: "Basic Information",
      contents: {
        a!columnsLayout(
          columns: {
            a!columnLayout(
              contents: {
                a!textField(
                  label: "First Name",
                  value: local!firstName,
                  saveInto: local!firstName,
                  required: true
                )
              }
            ),
            a!columnLayout(
              contents: {
                a!textField(
                  label: "Last Name", 
                  value: local!lastName,
                  saveInto: local!lastName,
                  required: true
                )
              }
            )
          }
        )
      }
    )
  },
  buttons: a!buttonLayout(
    primaryButtons: {
      a!buttonWidget(
        label: "Submit",
        submit: true,
        style: "SOLID"
      )
    },
    secondaryButtons: {
      a!buttonWidget(
        label: "Cancel",
        value: true,
        saveInto: local!showCancelDialog
      )
    }
  )
)
```

### Dashboard Layout
```sail
a!headerContentLayout(
  header: {
    a!cardLayout(
      contents: {
        a!richTextDisplayField(
          labelPosition: "COLLAPSED",
          value: {
            a!richTextItem(
              text: "Sales Dashboard",
              size: "LARGE",
              style: "STRONG"
            )
          }
        )
      },
      style: "ACCENT"
    )
  },
  contents: {
    a!columnsLayout(
      columns: {
        a!columnLayout(
          width: "NARROW",
          contents: {
            /* Sidebar content */
          }
        ),
        a!columnLayout(
          contents: {
            /* Main content area */
          }
        )
      }
    )
  }
)
```

## Common Validation Patterns

```sail
/* Required field validation */
if(isnull(local!value), "This field is required", null)

/* Email validation */
if(not(isemailaddress(local!email)), "Please enter a valid email", null)

/* Phone number validation */
if(not(isphoneNumber(local!phone)), "Please enter a valid phone number", null)

/* Date range validation */
if(local!endDate < local!startDate, "End date must be after start date", null)

/* Text length validation */
if(len(local!description) > 500, "Description cannot exceed 500 characters", null)
```

## Performance Considerations

1. **Use local variables** for form data to minimize server calls
2. **Implement showWhen** strategically to conditionally render expensive components  
3. **Limit grid row counts** - use paging for large datasets
4. **Optimize chart data** - aggregate data server-side when possible
5. **Use refresh parameters** judiciously to control when components update

Remember: Always test interfaces in Appian Designer to ensure proper syntax and functionality.