---
status: "stable"
last_updated: "2024-01-29"
---

# Confirmation Dialog

Confirmation dialogs are used to present the user with a directive action to prevent adverse situations

![](https://github.com/user-attachments/assets/def4ee48-5910-45fd-9213-8c0d8a8ac736)

## Design

### Variants

#### Action Confirmation

![](https://github.com/user-attachments/assets/40647a81-852f-4bdf-b948-dc0a9de292b5)

Use to present a confirmation that an action might be irreversible

#### Error State

![](https://github.com/user-attachments/assets/53d5411f-16b3-4cd6-ad61-e9f2339c70df)

Use to present an error state

**Note:** Use this approach sparingly. For instance, when designing forms, use field level validations as much as possible.

### Usage

#### Confirmation Modal

![](https://github.com/user-attachments/assets/fafc07b1-eb55-4892-b260-50e22ad28c37)

If the out of the box confirmation dialog component is not technically feasible, you may use `a!formLayout` with a warning banner to inform users that the action is not reversible.

## Development

### Confirmation Modal

```
a!formLayout(
  titleBar: a!headerTemplateSimple(
    title: "Delete Document | Claim9236.pdf",
  ), 
  contents: {
    a!richTextDisplayField(
      labelPosition: "COLLAPSED",
      value: "Are you sure you want to delete this document?"
    ),
    a!cardLayout(
      contents: {
        a!sideBySideLayout(
          items: {
            a!sideBySideItem(item: {}, width: "MINIMIZE"),
            a!sideBySideItem(
              item: a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: {
                  a!richTextIcon(
                    icon: "exclamation-triangle",
                    color: "#E5BF00",
                    size: "STANDARD"
                  )
                },
                marginAbove: "NONE",
                marginBelow: "NONE"
              ),
              width: "MINIMIZE"
            ),
            a!sideBySideItem(
              item: a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: a!richTextItem(
                  text: "This document cannot be recovered once deleted"
                ),
                marginAbove: "NONE",
                marginBelow: "NONE"
              ),
              width: "MINIMIZE"
            )
          },
          alignVertical: "TOP",
          spacing: "STANDARD",
          marginAbove: "STANDARD",
          marginBelow: "STANDARD"
        )
      },
      style: "#FFF9DB",
      shape: "SEMI_ROUNDED",
      marginAbove: "STANDARD",
      showBorder: false
    )
  },
  buttons: a!buttonLayout(
    primaryButtons: {
      a!buttonWidget(
        label: "Delete",
        submit: true,
        style: "SOLID",
        loadingIndicator: true
      )
    },
    secondaryButtons: {
      a!buttonWidget(
        label: "Cancel",
        value: true,
        saveInto: {},
        submit: true,
        style: "OUTLINE",
        validate: false
      )
    }
  )
)
```
