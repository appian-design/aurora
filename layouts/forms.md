---
status: "stable"
last_updated: "2024-12-19"
---

# Forms
Facilitate user input by using the appropriate form style and input types for each scenario

![](https://github.com/user-attachments/assets/943d8b37-9cba-44af-a07b-ddd2deb8e500)

## Overview

Forms serve as a way for users to have a conversation with our products. Great form design enhances the ability for the user to successfully complete their tasks. Use forms to guide users through sequential steps for completing a task, and to break long forms up into more manageable components.

Every form needs to have a header, content and form navigation. A form can be used in a site page or in a dialog.

## Design Guidelines

### When to Use Forms

Use this pattern as a starting point for basic forms. The [form layout component](https://docs.appian.com/suite/help/25.3/Form_Layout.html) makes it easy to automate some of these best practices, which include:

- Showing the form title in the header
- Adding submit and cancel buttons, with the recommended styling for both, at the bottom of the form
- If you have a record action that is configured to open in a dialog, the buttons are automatically fixed to the bottom of the dialog and will stay in view as the user scrolls

### Form Types

#### Single-Step Forms
Use for simple data collection that can be completed quickly without overwhelming the user.

#### Multi-Step Forms (Wizards)
Use wizards to guide users through sequential steps for completing a task. Wizards also help to break long forms up into more manageable components.

**Don't** design wizards that require users to frequently reference previous steps to complete the current step.

### Form Layout Options

![](https://github.com/user-attachments/assets/1023e7c2-2f86-42d4-a2dd-01d946d19c80)
Form in a dialog

#### Dialog Forms
![](https://github.com/user-attachments/assets/2be94769-e053-4db8-8631-6020efe1adeb)
In multi-step forms, place the "Back" button first followed by the "Cancel" button next left-aligned. Right align the submit or next action.

![](https://github.com/user-attachments/assets/556b8845-d773-47ab-81c3-46a8271e2ca0)
Provide confirmation upon submission

Checklist:
|Item|Type|
|--- |--- |
|Use "Solid" style for the "submit" or "next" action (in multi-step forms)|Buttons|
|Use "Link" style for the "cancel" action|Buttons|
|Use "Outline" style for "back" navigation in multi-step forms|Buttons|
|Use "Update" (not "Edit") for the "submit" action when a user is modifying an item|Buttons|
|In multi-step forms, place the "Back" button first followed by the "Cancel" button next left-aligned. Right align the submit or next action.|Buttons|
|Stack buttons on mobile in the order as prescribed (see example image)|Buttons|
|In related actions, the form header should match the action Display Name (button label)|Buttons|
|Verbs in the header (e.g.: Create Case) should match the submit button label and any button label used to launch the form|Content|
|Use "Update" (not "Edit") when a user is modifying an item|Content|
|Group related fields close to each other as much as possible to minimize context switching|Content|
|If there is a required input field, add instructions under the form header that specifies - "Mandatory fields are marked with an asterisk (*)"|Content|
|Use the a!FormLayout component|Dialogs|
|Avoid using the a!HeaderContentLayout component|Dialogs|
|Use a dialog size that matches field width. Avoid using a Large dialog size for sparse forms.|Dialogs|
|Place fields in one column as much as possible|Dialogs|
|Set SkipAutoFocus to True|Dialogs|
|The submit action of the form should match the form header. Example: If the form header is "Update Status", then the submit action of the form should state "Update"|Dialogs|

#### Site Page Forms
![](https://github.com/user-attachments/assets/32be4251-0458-4e04-9b6b-3de88e0b3520)
In a form with 3+ steps, provide a review step that lists all the fields as read-only. Allow the user to navigate back to update information.

Checklist:
|Item|Type|
|--- |--- |
|Use "Solid" style for the "submit" or "next" action (in multi-step forms)|Buttons|
|Use "Link" style for the "cancel" action|Buttons|
|Use "Outline" style for "back" navigation in multi-step forms|Buttons|
|Use "Update" (not "Edit") for the "submit" action when a user is modifying an item|Buttons|
|In multi-step forms, place the "Back" button first followed by the "Cancel" button next left-aligned. Right align the submit or next action.|Buttons|
|Stack buttons on mobile in the order as prescribed (see example image)|Buttons|
|In related actions, the form header should match the action Display Name (button label)|Buttons|
|Verbs in the header (e.g.: Create Case) should match the submit button label and any button label used to launch the form|Content|
|Use "Update" (not "Edit") when a user is modifying an item|Content|
|Group related fields close to each other as much as possible to minimize context switching|Content|
|If there is a required input field, add instructions under the form header that specifies - "Mandatory fields are marked with an asterisk (*)"|Content|

## Wizard Patterns

### Wizard with Milestones

Use the [milestone component](https://docs.appian.com/suite/help/25.3/Milestone_Component.html) to show the user's progress. Include links on the milestone component when you want users to easily navigate to previous steps.

Checklist:
|Item|Type|
|--- |--- |
|In a multi-step form, use the milestone component to indicate progress|Progress|
|In a multi-step form, avoid specifying a header label for the step. The milestone step label is sufficient.|Progress|
|In a form with 3+ steps, provide a review step that lists all the fields as read -only. Allow the user to navigate back to update information.|Progress|
|Provide confirmation upon submission|Progress|

**Don't** use a horizontal milestone component when there are a large number of steps, as this can result in a cluttered look. If a wizard contains more than 5 or 6 steps, it's worthwhile to consider a side navigation bar instead.

### Wizard with Side Navigation Bar

Instead of showing wizard steps in a milestone component, you may choose to implement a side navigation bar using a [card layout](https://docs.appian.com/suite/help/25.3/card_layout.html) and [rich text display](https://docs.appian.com/suite/help/25.3/Rich_Text_Component.html) component in a fixed-width column. Consider this approach if you want more control over the appearance of the wizard navigation. This approach also works well when there are too many steps to comfortably fit in a milestone component or when each step in the wizard has a relatively narrow interface. Utilizing available horizontal space to display the navigation also reduces vertical scrolling.

### Progressive Disclosure

For wizards with many steps, use this pattern to break steps up into sub-steps. Only showing the sub-steps for the current step reduces clutter and makes it easier for users to navigate the form.

For forms that can't easily be completed in one session, consider providing a button for users to save their progress and return later. In this pattern, a "Save my progress" button is placed underneath the wizard.

## Field Guidelines

![](https://github.com/user-attachments/assets/4a3978f7-245b-42e6-8a5d-5f4f78c79304)
Use the instructions parameter to provide information vital to form completion

![](https://github.com/user-attachments/assets/8cc52179-593c-4af3-9e58-3407a675850a)
Use field level validation as much as possible. Define the error and provide guidance on how to resolve it. Avoid generic error messages. Do not disable a button, instead let the user click and view the error to understand what is missing or incorrect

### Field Best Practices

Checklist:
|Item|Type|
|--- |--- |
|Avoid specifying character limits for fields where the user is unlikely to reach the limit (e.g.: First Name)|Character Limits|
|Set a field width that matches the expected size of the value. Avoid using a full screen width if we expect the value to be smaller in size.|Character Limits|
|Show character limits where long lengths of text may be possible (e.g.: a!paragraphField()). Use 500, 1000, 2000 or 4000 as character limits based on your use case. Avoid going over 4000 as a character limit.|Character Limits|
|Avoid asking the user for the same information multiple times (e.g.: username)|Content|
|Disable a field only if will be enabled depending on the value of another field.|Disabled Fields|
|Avoid disabling fields that will remain read-only. Set the field as "read only" instead.|Disabled Fields|
|When using repeated blocks of fields (e.g.: "Address Line 1", "Address Line 2"), set the accessibilityText parameter on each field to indicate which block the label is associated with|Grouping|
|Use the instructions parameter to provide information vital to form completion|Instructions|
|Avoid using the a!RichTextDisplayField component to provide instructions. Use the field's instructions parameter instead.|Instructions|
|Always use the label parameter|Label|
|Set LabelPosition to "Above"|Label|
|Avoid verbs. Just use the noun of what is being requested (e.g.: "Customer" instead of "Search Customer")|Label|
|Use the label parameter to show input format (e.g.: Date of Birth(MM/DD/YYYY))|Label|
|Use sentence casing|Label|
|Use a picker when the user has an idea of what they are looking for. Use "Search" in the placeholder parameter.|Picker vs. Dropdown|
|Use a dropdown when the user isn't sure of what they are looking for. Use "Select" in the placeholder parameter.|Picker vs. Dropdown|
|Use the placeholder parameter to specify the interaction (e.g.: "Select Vendor" in a dropdown or "Search Vendors" in a picker)|Placeholder Text|
|Avoid using "---" in placeholder text|Placeholder Text|
|Avoid using the placeholder parameter to specify input format|Placeholder Text|
|Use the STANDARD style in a dense form|Radio Buttons and Checkboxes|
|Use the STANDARD style when presenting as a custom grid filter|Radio Buttons and Checkboxes|
|Use the helpTooltip parameter when the label is not sufficient for the user to understand the term|Tooltips|
|Keep tooltips as brief as possible.|Tooltips|
|Use field level validation as much as possible|Validation|
|Define the error and provide guidance on how to resolve it. Avoid generic error messages (e.g.: "A value is required")|Validation|
|Do not disable the submit or next button due to a validation error. Allow the user to click the button and view the validation error in the field.|Validation|

## Accessibility Guidelines

### Accessibility Text
Always include `accessibilityText` parameters for form elements to ensure screen reader compatibility:

- **Completed Steps**: `accessibilityText: "Completed Step (1 of 6)"`
- **Current Step**: `accessibilityText: "Current Step (2 of 6)"`
- **Future Steps**: `accessibilityText: "Future Step (3 of 6)"`
- **Sections**: `accessibilityText: "Current section"` or `"Completed section"`

### Form Navigation
In both custom wizards and wizard layouts, Appian automatically handles the page scrolling between each step of the wizard. This means that whenever a user navigates to the next step, the page will automatically scroll to the top of the page.

To take advantage of this, make sure that you don't have multiple read-only components—elements that the user does not interact with—that affects the automatic page scrolling.

Additionally, if you are using a form layout in a custom wizard, make sure that the buttons or dynamic links that control form navigation are placed at the bottom of the form layout.

## When to Use Inline Dialogs vs. Modals

|          | ![](https://github.com/user-attachments/assets/353d5082-710b-4bde-8311-b570a7d1f3e9) Use an Inline Dialog When| ![](https://github.com/user-attachments/assets/26dd1986-fe53-49ca-b226-a66b3df7a705) Use a Modal When |
|----------|---------|----------|
|**Number of Fields**|Only one or two fields need editing|More than two fields are required for data entry|
|**Task Complexity**|The action involves one step|The action involves one or multiple steps that are in a single or double column with input fields| 
|**Contextual Awareness**|Visibility of the editable content and the parent page is necessary|Full attention to the task is necessary without the need for referring back to the original context|
|**Progressive Disclosure**|No progressive disclosure is needed|Additional fields or options need to be revealed progressively|

## Confirmation and Review Pages

Confirmation and review pages reassure users of the successful completion of a form and can set expectations for what to do next.

### Confirmation Page
Use confirmation pages to:
- Acknowledge successful form submission
- Provide next steps or expectations
- Include relevant reference numbers or contact information
- Set user expectations for follow-up communications

## Development

### Dialog Example 1: Confirmation Page
```
a!formLayout(
  titleBar: a!headerTemplateFull(
    title: "Create Case",
    backgroundColor: "#020A51"
  ),
  contents: {
    a!stampField(
      labelPosition: "COLLAPSED",
      icon: "thumbs-up",
      backgroundColor: "POSITIVE",
      contentColor: "STANDARD",
      align: "CENTER",
      marginBelow: "MORE",
      accessibilityText: "Success confirmation"
    ),
    a!richTextDisplayField(
      labelPosition: "COLLAPSED",
      value: {
        a!richTextItem(
          text: {
            "Case ",
            a!richTextItem(text: { "#9378-837" }, style: { "STRONG" }),
            " created for Velfin Capital, Inc."
          },
          size: "MEDIUM_PLUS"
        ),
        char(10),
        char(10),
        a!richTextItem(
          text: {
            "Thank you for submitting your case. We will keep you informed on its status via email updates. If you need immediate assistance, please don't hesitate to contact our support team via phone at (480)284-7289."
          },
          size: "STANDARD"
        )
      },
      align: "CENTER",
      marginBelow: "NONE"
    ),
    a!buttonArrayLayout(
      buttons: {
        a!buttonWidget(
          label: "Close",
          size: "SMALL",
          style: "SOLID"
        )
      },
      align: "CENTER",
      marginAbove: "MORE",
      marginBelow: "NONE"
    )
  },
  contentsWidth: "NARROW"
)
```

### Dialog Example 2: Multi-Step Wizard with Accessibility
```
a!localVariables(
  local!firstName,
  local!lastName,
  local!organization,
  local!jobTitle,
  local!country,
  local!countryChoices: {
    "United States",
    "Canada",
    "Mexico",
    "United Kingdom",
    "Germany",
    "France"
  },
  local!countryChoiceValues: { "US", "CA", "MX", "UK", "DE", "FR" },
  a!wizardLayout(
    titleBar: "Create Case",
    showTitleBarDivider: true,
    style: "MINIMAL",
    focusOnFirstInput: true,
    contentsWidth: "NARROW",
    steps: {
      a!wizardStep(
        label: "About You",
        contents: {
          a!textField(
            label: "First Name",
            value: local!firstName,
            saveInto: local!firstName,
            accessibilityText: "Enter your first name"
          ),
          a!textField(
            label: "Last Name",
            value: local!lastName,
            saveInto: local!lastName,
            accessibilityText: "Enter your last name"
          ),
          a!textField(
            label: "Organization",
            value: local!organization,
            saveInto: local!organization,
            accessibilityText: "Enter your organization name"
          ),
          a!textField(
            label: "Job Title",
            value: local!jobTitle,
            saveInto: local!jobTitle,
            accessibilityText: "Enter your job title"
          ),
          a!dropdownField(
            label: "Country",
            placeholder: "Select a Country",
            choiceLabels: local!countryChoices,
            choiceValues: local!countryChoiceValues,
            value: local!country,
            saveInto: local!country,
            accessibilityText: "Select your country from the dropdown"
          )
        }
      ),
      a!wizardStep(
        label: "Case Details",
        accessibilityText: "Step 2 of 3: Case Details"
      ),
      a!wizardStep(
        label: "Review",
        accessibilityText: "Step 3 of 3: Review your information"
      )
    },
    showButtonDivider: true,
    secondaryButtons: {
      a!buttonWidget(
        label: "Cancel",
        style: if(fv!isFirstStep, "OUTLINE", "LINK"),
        accessibilityText: "Cancel form submission"
      )
    },
    primaryButtons: {
      a!buttonWidget(
        label: "Create",
        style: "SOLID",
        showWhen: fv!isLastStep,
        accessibilityText: "Submit case creation form"
      )
    }
  )
)
```

### Site Page Example: Multi-Step Form with Progress Indicator
```
a!headerContentLayout(
  header: a!cardLayout(
    style: "#020A50",
    padding: "MORE",
    contents: {
      a!richTextDisplayField(
        labelPosition: "COLLAPSED",
        value: {
          a!richTextItem(
            text: "Create Case",
            style: "STRONG",
            size: "LARGE"
          )
        },
        align: "LEFT"
      )
    },
    marginBelow: "NONE",
    accessibilityText: "Form header: Create Case"
  ),
  contents: {
    a!columnsLayout(
      marginAbove: "MORE",
      columns: {
        a!columnLayout(width: "EXTRA_NARROW"),
        a!columnLayout(
          width: "NARROW_PLUS",
          contents: {
            a!sideBySideLayout(
              alignVertical: "MIDDLE",
              items: {
                a!sideBySideItem(
                  width: "MINIMIZE",
                  item: a!stampField(
                    size: "TINY",
                    icon: "check",
                    backgroundColor: "ACCENT",
                    accessibilityText: "Completed Step"
                  )
                ),
                a!sideBySideItem(
                  item: a!richTextDisplayField(
                    value: {
                      a!richTextItem(
                        text: "Contact Information",
                        style: "PLAIN",
                        link: a!dynamicLink(),
                        linkStyle: "STANDALONE"
                      )
                    },
                    align: "LEFT"
                  )
                )
              },
              spacing: "STANDARD"
            ),
            a!sideBySideLayout(
              alignVertical: "MIDDLE",
              items: {
                a!sideBySideItem(
                  width: "MINIMIZE",
                  item: a!stampField(
                    size: "TINY",
                    icon: "check",
                    backgroundColor: "ACCENT",
                    accessibilityText: "Completed Step"
                  )
                ),
                a!sideBySideItem(
                  item: a!richTextDisplayField(
                    value: {
                      a!richTextItem(
                        text: "Case Information",
                        style: "PLAIN",
                        link: a!dynamicLink(),
                        linkStyle: "STANDALONE"
                      )
                    },
                    align: "LEFT"
                  )
                )
              },
              spacing: "STANDARD"
            ),
            a!sideBySideLayout(
              alignVertical: "MIDDLE",
              items: {
                a!sideBySideItem(
                  width: "MINIMIZE",
                  item: a!stampField(
                    size: "TINY",
                    text: "3",
                    backgroundColor: "ACCENT",
                    accessibilityText: "Current Step (3 of 3)"
                  )
                ),
                a!sideBySideItem(
                  item: a!richTextDisplayField(
                    value: {
                      a!richTextItem(text: "Review", style: "STRONG")
                    },
                    align: "LEFT"
                  )
                )
              },
              spacing: "STANDARD"
            )
          }
        ),
        a!columnLayout(
          contents: a!localVariables(
            {
              a!richTextDisplayField(
                value: {
                  a!richTextItem(
                    text: "Contact Information",
                    style: "STRONG"
                  )
                },
                align: "LEFT",
                marginBelow: "STANDARD"
              ),
              a!columnsLayout(
                columns: {
                  a!columnLayout(
                    contents: {
                      a!richTextDisplayField(
                        value: {
                          a!richTextItem(
                            text: "Name",
                            style: "PLAIN",
                            size: "MEDIUM",
                            color: "SECONDARY"
                          )
                        },
                        align: "LEFT"
                      ),
                      a!richTextDisplayField(
                        value: {
                          a!richTextItem(
                            text: "Email",
                            style: "PLAIN",
                            size: "MEDIUM",
                            color: "SECONDARY"
                          )
                        },
                        align: "LEFT"
                      ),
                      a!richTextDisplayField(
                        value: {
                          a!richTextItem(
                            text: "Phone",
                            style: "PLAIN",
                            size: "MEDIUM",
                            color: "SECONDARY"
                          )
                        },
                        align: "LEFT"
                      ),
                      a!richTextDisplayField(
                        value: {
                          a!richTextItem(
                            text: "Address",
                            style: "PLAIN",
                            size: "MEDIUM",
                            color: "SECONDARY"
                          )
                        },
                        align: "LEFT"
                      )
                    }
                  ),
                  a!columnLayout(
                    contents: {
                      a!richTextDisplayField(
                        value: {
                          a!richTextItem(
                            text: "Karen Anderson",
                            style: "PLAIN",
                            size: "MEDIUM"
                          )
                        },
                        align: "LEFT"
                      ),
                      a!richTextDisplayField(
                        value: {
                          a!richTextItem(
                            text: "karen.anderson@acme.com",
                            style: "PLAIN",
                            size: "MEDIUM"
                          )
                        },
                        align: "LEFT"
                      ),
                      a!richTextDisplayField(
                        value: {
                          a!richTextItem(
                            text: "571-567-0987",
                            style: "PLAIN",
                            size: "MEDIUM"
                          )
                        },
                        align: "LEFT"
                      ),
                      a!richTextDisplayField(
                        value: {
                          a!richTextItem(
                            text: "9836 Rocky River Court" & char(10) & "Annandale, VA USA 22003",
                            style: "PLAIN",
                            size: "MEDIUM"
                          )
                        },
                        align: "LEFT"
                      )
                    }
                  )
                }
              ),
              a!horizontalLine(),
              /* Case Information Section */
              a!richTextDisplayField(
                value: {
                  a!richTextItem(text: "Case Information", style: "STRONG")
                },
                align: "LEFT",
                marginBelow: "STANDARD",
                marginAbove: "STANDARD"
              ),
              a!columnsLayout(
                columns: {
                  a!columnLayout(
                    contents: {
                      a!richTextDisplayField(
                        value: {
                          a!richTextItem(
                            text: "Type",
                            style: "PLAIN",
                            size: "MEDIUM",
                            color: "SECONDARY"
                          )
                        },
                        align: "LEFT"
                      ),
                      a!richTextDisplayField(
                        value: {
                          a!richTextItem(
                            text: "Title",
                            style: "PLAIN",
                            size: "MEDIUM",
                            color: "SECONDARY"
                          )
                        },
                        align: "LEFT"
                      )
                    }
                  ),
                  a!columnLayout(
                    contents: {
                      a!richTextDisplayField(
                        value: {
                          a!richTextItem(
                            text: "Account Renewal",
                            style: "PLAIN",
                            size: "MEDIUM"
                          )
                        },
                        align: "LEFT"
                      ),
                      a!richTextDisplayField(
                        value: {
                          a!richTextItem(
                            text: "Renew my account",
                            style: "PLAIN",
                            size: "MEDIUM"
                          )
                        },
                        align: "LEFT"
                      )
                    }
                  )
                }
              ),
              a!horizontalLine(),
              a!sideBySideLayout(
                items: {
                  a!sideBySideItem(
                    item: a!buttonArrayLayout(
                      buttons: {
                        a!buttonWidget(
                          label: "BACK",
                          style: "OUTLINE",
                          saveInto: {},
                          accessibilityText: "Go back to previous step"
                        ),
                        a!buttonWidget(
                          label: "CANCEL",
                          style: "LINK",
                          saveInto: {},
                          accessibilityText: "Cancel form submission"
                        )
                      }
                    )
                  ),
                  a!sideBySideItem(
                    item: a!buttonArrayLayout(
                      buttons: {
                        a!buttonWidget(
                          label: "CREATE CASE",
                          style: "SOLID",
                          saveInto: {},
                          accessibilityText: "Submit case creation form"
                        )
                      }
                    )
                  )
                },
                spacing: "STANDARD",
                marginAbove: "STANDARD"
              )
            }
          )
        ),
        a!columnLayout(width: "EXTRA_NARROW"),
        a!columnLayout(
          width: "NARROW_PLUS",
          contents: {
            a!cardLayout(
              style: "#F4F5F9",
              showBorder: false,
              contents: {
                a!richTextDisplayField(
                  value: {
                    a!richTextItem(
                      text: "What happens next?",
                      style: "STRONG",
                      size: "MEDIUM"
                    )
                  },
                  align: "LEFT",
                  marginBelow: "STANDARD"
                ),
                a!richTextDisplayField(
                  value: {
                    a!richTextItem(
                      text: "After submitting your case, you will receive a confirmation email with your case number. Our support team will review your request and respond within 24 hours. You can track the status of your case through your account dashboard.",
                      style: "PLAIN"
                    )
                  },
                  align: "LEFT"
                )
              },
              padding: "STANDARD",
              marginBelow: "STANDARD",
              accessibilityText: "Information about next steps after form submission"
            )
          }
        ),
        a!columnLayout(width: "EXTRA_NARROW")
      }
    )
  }
)
```

### Wizard with Side Navigation Example
```
a!localVariables(
  local!currentStep: 1,
  local!steps: {
    "Personal Information",
    "Contact Details", 
    "Preferences",
    "Account Setup",
    "Security Settings",
    "Review & Submit"
  },
  a!columnsLayout(
    columns: {
      /* Side Navigation */
      a!columnLayout(
        width: "NARROW",
        contents: {
          a!cardLayout(
            contents: {
              a!forEach(
                items: local!steps,
                expression: a!cardLayout(
                  contents: {
                    a!sideBySideLayout(
                      items: {
                        a!sideBySideItem(
                          width: "MINIMIZE",
                          item: a!stampField(
                            size: "TINY",
                            text: fv!index,
                            backgroundColor: if(
                              fv!index < local!currentStep,
                              "POSITIVE",
                              if(
                                fv!index = local!currentStep,
                                "ACCENT", 
                                "SECONDARY"
                              )
                            ),
                            contentColor: "STANDARD",
                            accessibilityText: if(
                              fv!index < local!currentStep,
                              "Completed Step (" & fv!index & " of " & length(local!steps) & ")",
                              if(
                                fv!index = local!currentStep,
                                "Current Step (" & fv!index & " of " & length(local!steps) & ")",
                                "Future Step (" & fv!index & " of " & length(local!steps) & ")"
                              )
                            )
                          )
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            value: a!richTextItem(
                              text: fv!item,
                              style: if(fv!index = local!currentStep, "STRONG", "PLAIN"),
                              color: if(fv!index <= local!currentStep, "STANDARD", "SECONDARY")
                            ),
                            accessibilityText: fv!item & " - " & if(
                              fv!index < local!currentStep,
                              "Completed",
                              if(
                                fv!index = local!currentStep,
                                "Current Step",
                                "Not Started"
                              )
                            )
                          )
                        )
                      },
                      alignVertical: "MIDDLE"
                    )
                  },
                  style: "NONE",
                  padding: "LESS",
                  marginBelow: "STANDARD"
                )
              )
            },
            style: "#F8F9FA",
            padding: "MORE"
          )
        }
      ),
      /* Main Content */
      a!columnLayout(
        contents: {
          a!cardLayout(
            contents: {
              a!richTextDisplayField(
                value: a!richTextItem(
                  text: "Step " & local!currentStep & ": " & index(local!steps, local!currentStep, ""),
                  style: "STRONG",
                  size: "LARGE"
                ),
                marginBelow: "MORE"
              ),
              /* Step content would go here */
              a!textField(
                label: "Sample Field",
                placeholder: "Enter information for step " & local!currentStep,
                accessibilityText: "Sample input field for step " & local!currentStep
              )
            },
            padding: "MORE"
          ),
          /* Navigation Buttons */
          a!buttonArrayLayout(
            buttons: {
              a!buttonWidget(
                label: "Previous",
                style: "OUTLINE",
                showWhen: local!currentStep > 1,
                saveInto: a!save(local!currentStep, local!currentStep - 1),
                accessibilityText: "Go to previous step"
              ),
              a!buttonWidget(
                label: "Cancel",
                style: "LINK",
                accessibilityText: "Cancel wizard"
              ),
              a!buttonWidget(
                label: if(local!currentStep = length(local!steps), "Submit", "Next"),
                style: "SOLID",
                saveInto: if(
                  local!currentStep < length(local!steps),
                  a!save(local!currentStep, local!currentStep + 1),
                  {}
                ),
                accessibilityText: if(
                  local!currentStep = length(local!steps),
                  "Submit form",
                  "Go to next step"
                )
              )
            },
            align: "BETWEEN",
            marginAbove: "MORE"
          )
        }
      )
    }
  )
)
```

## Best Practices Summary

### Form Design Principles
1. **Progressive Disclosure**: Break complex forms into logical steps
2. **Clear Navigation**: Provide obvious paths forward and backward
3. **Contextual Help**: Offer guidance where users need it most
4. **Responsive Design**: Ensure forms work well on all device sizes
5. **Accessibility**: Use proper labels, instructions, and validation messages

### Technical Implementation
1. **Component Selection**: Choose the right layout component for your use case
2. **Parameter Configuration**: Set appropriate values for contentsWidth, labelPosition, etc.
3. **Validation Strategy**: Implement field-level validation with clear error messages
4. **Button Placement**: Position navigation buttons correctly for automatic scrolling
5. **Performance**: Consider data loading and form submission performance

### User Experience
1. **Minimize Cognitive Load**: Group related fields and reduce context switching
2. **Provide Feedback**: Show progress indicators and confirmation messages
3. **Enable Recovery**: Allow users to go back and modify their inputs
4. **Maintain Context**: Help users understand where they are in the process
5. **Optimize for Success**: Design forms that guide users to successful completion
