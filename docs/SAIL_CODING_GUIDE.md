# Agents

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

## Starting with local variables

!!! tip "Important"

    All interfaces should start with the `a!localVariables` component. Any other functions or components references local variables have to be wrapped in this top-level component.

### Local variable types

Local variables do not have a defined type. The type of a local variable is determined by the value of the variable at any given time.

```
a!localVariables(
  local!isActive: true,
  local!activeEmployees: a!queryEntity(
    entity: cons!EMPLOYEE_DSE,
    query: a!query(
      filter: a!queryFilter("active", "=", local!isActive),
      pagingInfo: a!pagingInfo(1, 10)
    )
  ).data,
  local!activeEmployees
)
```

In this example, local!isActive is of type Boolean and local!activeEmployees is of type Dictionary.

### Variables without an initial value

Local variables that do not have an initial value are of type Null. This can often cause errors when trying to pass the local variable to a function, so you may need to cast it to the expected type.

```
a!localVariables(
  local!quantity,
  a!integerField(
    label: "Quantity",
    value: local!quantity,
    saveInto: local!quantity,
    validations: if(
      local!quantity<0,
      "Quantity must be greater than 0",
      ""
    )
  )
)
```

In this example, local!quantity<0 fails because the variable is not an integer. You can solve this by casting the variable before doing comparisons using the `tointeger()` function.

### Updating a variable value

The type of a local variable can change if it is saved into from a component within an interface. The variable will now be of the same type as the new value that was saved into it.

```
a!localVariables(
  local!number: 1,
  a!floatingPointField(
    label: "Number",
    value: local!number,
    saveInto: local!number
  )
)
```

In this example, local!number starts out as an Integer. However, once a user interacts with the Number field, a Decimal value will be saved into local!number.

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

Use empty `a!columnLayout` components on either side of a column to center content.

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

Button widgets should always be placed inside a `a!buttonArrayLayout`.

```sail
a!buttonArrayLayout(
  buttons: {
    a!buttonWidget(
      label: "Save Changes",
      style: "SOLID",
      color: "ACCENT",
      size: "STANDARD",
      value: true,
      loadingIndicator: true,
      saveInto: {
        /* Save actions here */
        /*a!save(local!submitted, save!value) */
      }
    )
  },
  align: "END"
)
```

### Link

Use `a!richTextItem` instead of `a!linkField` for links.

```sail
a!richTextDisplayField(
  labelPosition: "COLLAPSED",
  value: {
    a!richTextItem(
      text: "Visit site",
      link: a!safeLink(uri: "http://www.appian.com"),
      linkStyle: "INLINE"
       /* Use STANDALONE for linkStyle when linked text is not part of a sentence with other unlinked text. */
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
showWhen: a!isNotNullOrEmpty(local!selectedCustomer)
```

### Validation Patterns
```sail
validations: {
  if(len(local!value) < 3, "Must be at least 3 characters", null),
  if(a!isNullOrEmpty(local!value), "This field is required", null)
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
  titleBar: a!headerTemplateSimple(title: "New Customer Registration"),
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
        style: "OUTLINE",
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

## Logical Operators

SAIL uses function-style logical operators rather than symbolic operators. Always use these functions when combining multiple conditions:

```sail
/* Correct usage of logical operators */
and(condition1, condition2, condition3)
or(condition1, condition2, condition3)
not(condition)

/* Incorrect usage - this will cause errors */
condition1 and condition2
condition1 or condition2
```

### Examples:

```sail
/* Multiple conditions in showWhen */
showWhen: and(
  a!isNotNullOrEmpty(local!selectedItem),
  local!isEditable,
  local!hasPermission
)

/* Complex condition in if statement */
if(
  or(
    a!isNullOrEmpty(local!value),
    not(typename(typeof(local!value)) = "Number (Integer)"),
    tointeger(local!value) < 0
  ),
  "Please enter a valid positive number",
  null
)

/* Combining and/or conditions */
if(
  and(
    a!isNotNullOrEmpty(local!email),
    or(
      not(contains(local!email, ".com")),
      contains(local!email, "test")
    )
  ),
  "Please enter a valid email address",
  null
)
```

Remember that these functions can take any number of arguments, not just two:

```sail
/* Multiple conditions with and() */
and(condition1, condition2, condition3, condition4)

/* Multiple conditions with or() */
or(option1, option2, option3, option4, option5)
```