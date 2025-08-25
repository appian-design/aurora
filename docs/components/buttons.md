---
status: "stable"
last_updated: "2025-07-07"
---

# Buttons
A button allows users to trigger an action, such as submitting a form, opening a dialog, or navigating to another page.

![](https://github.com/user-attachments/assets/9e39e76b-2133-4271-8fa3-caa2c7f5ef20)

## Design

### Usage 
#### Labels
  * Button labels must be clear, concise, and predictable. The label should describe the action the button will perform.
  * When launching an action, use a clear verb + noun structure. For example, use "Create User" instead of a generic "Submit."
  * Aim for one to three words
  * Use all caps

#### Placement

![](https://github.com/user-attachments/assets/0723f84f-3e3d-44ca-ad4e-34c50d0f9ada)

  * In forms, place the primary action ("Submit") on the right, and the secondary action ("Cancel") on the left in RTL
  * In wizards, place the primary action ("Next" or "Submit") on the right, and the secondary action ("Back" or "Cancel") on the left in RTL. Use `LINK` style for the cancel button.

#### Shape
  * For designs in the Platform, use `SQUARE` buttons
  * For designs in Solutions and PHQ, use `SEMI_ROUNDED` buttons

### Variants

#### Primary Action
Use for the primary or most important action on a page. There should be only one solid button per view to guide the user toward the intended action.
* Use `SOLID` style and `ACCENT` color for constructive actions ("Create, "Add", "Save", "Submit")
* Use `OUTLINE` style and `NEGATIVE` color for destructive actions ("Delete", "Remove")

#### Secondary Action
Use for secondary actions that supplement the primary action. These actions are important but not the main goal of the page. You can have multiple secondary buttons. Examples include "Add Another" or "Cancel."
* Use `OUTLINE` style and `ACCENT` color 

## Development

### Form 
```
a!localVariables(
  local!name,
  local!email,
  a!formLayout(
    titleBar: a!headerTemplateFull(
      title: "Form",
      secondaryText: "Enter your details",
      backgroundColor: "ACCENT"
    ),
    showTitleBarDivider: false,
    contents: {
      a!textField(
        label: "Name",
        value: local!name,
        saveInto: local!name
      ),
      a!textField(
        label: "Email",
        value: local!email,
        saveInto: local!email
      )
    },
    buttons: a!buttonLayout(
      primaryButtons: {
        a!buttonWidget(
          label: "Submit",
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
)
```

### Wizard 
```
a!localVariables(
  local!name,
  local!email,
  a!wizardLayout(
    titleBar: a!headerTemplateFull(
      title: "Wizard",
      secondaryText: "Enter your details"
    ),
    steps: {
      a!wizardStep(
        label: "Personal Info",
        contents: {
          a!textField(
            label: "Name",
            value: local!name,
            saveInto: local!name
          )
        }
      ),
      a!wizardStep(
        label: "Contact Info",
        contents: {
          a!textField(
            label: "Email",
            value: local!email,
            saveInto: local!email
          )
        }
      ),
      a!wizardStep(
        label: "Review",
        contents: {
          a!richTextDisplayField(
            value: a!richTextItem(
              text: "Please review your information before submitting."
            )
          )
        }
      )
    },
    primaryButtons: {
      a!buttonWidget(
        label: "Submit",
        submit: true,
        style: "SOLID",
        loadingIndicator: true,
        showWhen: fv!isLastStep
      )
    },
    secondaryButtons: {
      a!buttonWidget(
        label: "Cancel",
        value: true,
        saveInto: {},
        submit: true,
        style: "LINK",
        validate: false
      )
    }
  )
)
```
