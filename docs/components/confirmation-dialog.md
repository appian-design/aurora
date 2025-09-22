---
status: "stable"
last_updated: "2025-9-22"
---

# Confirmation Dialog

Confirmation dialogs are used to present the user with a directive action to prevent adverse situations

![](https://github.com/user-attachments/assets/76632f64-4fb9-4dfc-b715-444a5152a0f4)

## Design

### Variants

#### Informational Dialog
![](https://github.com/user-attachments/assets/d3280a0a-9ebd-4db4-84b5-00f245a42f69)

Use to display view-only information. No action is possible. 

#### Action Confirmation

![](https://github.com/user-attachments/assets/6dc4276d-8777-415f-b7c6-bfce3cda0a92)

Use to present a confirmation that an action might be irreversible. 

When the action is destructive, the primary action should be in `OUTLINE` style and `NEGATIVE` color. 

## Development

### Variants

#### Informational Dialog 
```
a!formLayout(
  titleBar: a!headerTemplateSimple(
    title: "Package Deleted"
  ), 
  contents: {
    a!richTextDisplayField(
      labelPosition: "COLLAPSED",
      value: "This package was deleted on 9/24/24 1:49 PM by Admin User."
    )
  },
  buttons: a!buttonLayout(
    primaryButtons: {
      a!buttonWidget(
        label: "Close",
        submit: true,
        style: "SOLID"
      )
    }
  )
)
```

#### Action Confirmation
```
a!formLayout(
  titleBar: a!headerTemplateSimple(
    title: "Publish Document"
  ), 
  contents: {
    a!richTextDisplayField(
      labelPosition: "COLLAPSED",
      value: "Once published, this document will be viewable by all users."
    )
  },
  buttons: a!buttonLayout(
    primaryButtons: {
      a!buttonWidget(
        label: "Publish",
        submit: true,
        style: "SOLID"
      )
    }, 
    secondaryButtons: {
      a!buttonWidget(
        label: "Cancel"
      )
    }
  )
)
```

#### Destructive Action Confirmation 

```
a!formLayout(
  titleBar: a!headerTemplateSimple(title: "Delete Document"),
  contents: {
    a!richTextDisplayField(
      labelPosition: "COLLAPSED",
      value: "You are about to permanently delete Claim9236.pdf."
    ),
    a!messageBanner(
      primaryText: "This document cannot be recovered once deleted",
      backgroundColor: "WARN",
      highlightColor: "WARN",
      icon: "exclamation-triangle"
    )
  },
  buttons: a!buttonLayout(
    primaryButtons: {
      a!buttonWidget(
        label: "Delete",
        submit: true,
        style: "OUTLINE",
        color: "NEGATIVE",
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
