---
status: "stable"
last_updated: "2024-12-19"
---

# Forms
Facilitate user input by using the appropriate form style and input types for each scenario

![](https://github.com/user-attachments/assets/943d8b37-9cba-44af-a07b-ddd2deb8e500)

## Design
![](https://github.com/user-attachments/assets/1023e7c2-2f86-42d4-a2dd-01d946d19c80)
Form in a dialog
<br></br>

Forms serve as a way for users to have a conversation with our products. Great form design enhances the ability for the user to successfully complete their tasks. 

Every form needs to have a header, content and form navigation. A form can be used in a site page or in a dialog.

## Form Types

### Simple Forms
Use simple forms for basic data collection with minimal fields and straightforward workflows.

### Multi-step Forms (Wizards)
Wizards are useful when a form is complex or has conditional field logic. Wizard step indicators are helpful for:

- Breaking form fields into categories, making it easier to understand and complete each section
- Structuring form fields and steps in a logical flow to reduce the chance of missing or incorrectly filling out important information
- Improving navigation with visual cues that show users their progress and remaining steps

Depending on the complexity of your form, you can decide between single level sidebar step indicators or multi-level sidebars that further break steps down into sub-steps.

**Important**: In wizards, Appian automatically handles the page scrolling between each step of the wizard. This means that whenever a user navigates to the next step, the page will automatically scroll to the top of the page. If you are using the form layout in a wizard, make sure that the buttons or dynamic links that control form navigation are placed in the *buttons* parameter. If they are placed in the *contents* parameter, auto scrolling will not work.

### Usage

#### Dialog
![](https://github.com/user-attachments/assets/2be94769-e053-4db8-8631-6020efe1adeb)
In multi-step forms, place the "Back" button first followed by the "Cancel" button next left-aligned. Right align the submit or next action.

![](https://github.com/user-attachments/assets/556b8845-d773-47ab-81c3-46a8271e2ca0)
Provide confirmation upon submission
<br></br>

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
|Use the a!wizardLayout component for multi-step forms in dialogs|Wizards|
|Set showStepHeadings to false when using wizard layout to avoid redundant headers|Wizards|
|Use appropriate contentsWidth (NARROW, MEDIUM, WIDE) based on form complexity|Wizards|
|In a multi-step form, use the milestone component to indicate progress|Progress|
|In a multi-step form, avoid specifying a header label for the step. The milestone step label is sufficient.|Progress|
|In a form with 3+ steps, provide a review step that lists all the fields as read-only. Allow the user to navigate back to update information.|Progress|
|Provide confirmation upon submission|Progress|

#### Site Page
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
|Use a!headerContentLayout for site page forms with complex layouts|Site Pages|
|Consider using sidebar step indicators for multi-step forms on site pages|Site Pages|
|In a multi-step form, use the milestone component to indicate progress|Progress|
|In a multi-step form, avoid specifying a header label for the step. The milestone step label is sufficient.|Progress|
|In a form with 3+ steps, provide a review step that lists all the fields as read-only. Allow the user to navigate back to update information.|Progress|
|Provide confirmation upon submission|Progress|

### Fields
![](https://github.com/user-attachments/assets/4a3978f7-245b-42e6-8a5d-5f4f78c79304)
Use the instructions parameter to provide information vital to form completion

![](https://github.com/user-attachments/assets/8cc52179-593c-4af3-9e58-3407a675850a)
Use field level validation as much as possible. Define the error and provide guidance on how to resolve it. Avoid generic error messages. Do not disable a button, instead let the user click and view the error to understand what is missing or incorrect

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
|Use card choice fields for visual selection when users need to choose from options with additional context|Card Choices|
|Configure card choice fields with appropriate templates (bar text stacked, etc.) for clear information hierarchy|Card Choices|
|Use the helpTooltip parameter when the label is not sufficient for the user to understand the term|Tooltips|
|Keep tooltips as brief as possible.|Tooltips|
|Use field level validation as much as possible|Validation|
|Define the error and provide guidance on how to resolve it. Avoid generic error messages (e.g.: "A value is required")|Validation|
|Do not disable the submit or next button due to a validation error. Allow the user to click the button and view the validation error in the field.|Validation|

### Wizard Layout Components

#### Using the Wizard Layout
Use the a!wizardLayout component to easily create great-looking wizards with built-in step navigation and progress indicators.

Key parameters:
- `titleBar`: Use header templates (a!headerTemplateFull, a!headerTemplateImage) for rich headers
- `style`: Choose from DOT_VERTICAL, DOT_HORIZONTAL, or other step indicator styles
- `steps`: Define each step with a!wizardStep components
- `contentsWidth`: Set to NARROW, MEDIUM, or WIDE based on form complexity
- `showStepHeadings`: Set to false to avoid redundant step headers
- `primaryButtons` and `secondaryButtons`: Define navigation and action buttons

#### Sidebar Step Indicators
Use sidebar step indicators for custom wizard implementations when you need more control over the layout and navigation.

Benefits:
- Works well for longer lists of steps
- Helps balance whitespace in simpler forms
- Provides clear visual progress indication
- Allows for custom styling and interaction patterns

Implementation considerations:
- Use milestone components or custom step indicators
- Ensure proper navigation between steps
- Maintain consistent visual hierarchy
- Consider responsive behavior on mobile devices
### When to Use Inline Dialogs vs. Modals

|          | ![](https://github.com/user-attachments/assets/353d5082-710b-4bde-8311-b570a7d1f3e9) Use an Inline Dialog When| ![](https://github.com/user-attachments/assets/26dd1986-fe53-49ca-b226-a66b3df7a705) Use a Modal When |
|----------|---------|----------|
|**Number of Fields**|Only one or two fields need editing|More than two fields are required for data entry|
|**Task Complexity**|The action involves one step|The action involves one or multiple steps that are in a single or double column with input fields| 
|**Contextual Awareness**|Visibility of the editable content and the parent page is necessary|Full attention to the task is necessary without the need for referring back to the original context|
|**Progressive Disclosure**|No progressive disclosure is needed|Additional fields or options need to be revealed progressively|
|**Form Type**|Simple, single-step forms|Multi-step wizards or complex forms with conditional logic|
|**User Flow**|Quick edits or updates that don't interrupt the main workflow|Complete tasks that require focused attention and step-by-step completion|

### Advanced Form Patterns

#### Card Choice Fields
Use card choice fields when users need to select from options that require additional context or visual representation.

Best practices:
- Use appropriate card templates (a!cardTemplateBarTextStacked, etc.)
- Provide primary and secondary text for clear information hierarchy
- Set maxSelections appropriately (1 for single selection, multiple for multi-select)
- Consider using icons or visual elements to enhance recognition

#### Multi-Column Layouts
For complex forms, use column layouts to organize related fields and optimize screen space:
- Group related fields in the same column
- Use appropriate column widths (NARROW, MEDIUM, WIDE, AUTO)
- Consider responsive behavior on different screen sizes
- Maintain logical tab order for accessibility

#### Conditional Field Display
Implement progressive disclosure by showing/hiding fields based on user selections:
- Use showWhen parameter to control field visibility
- Group conditional fields logically
- Provide clear visual cues when fields appear or disappear
- Ensure validation works correctly with conditional fields
## Development

### Dialog Example 1 - Simple Form with Confirmation
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
      marginBelow: "MORE"
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

### Dialog Example 2 - Multi-step Wizard with Card Choices
```
a!localVariables(
  local!firstName,
  local!lastName,
  local!organization,
  local!jobTitle,
  local!country,
  local!office,
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
    titleBar: a!headerTemplateImage(
      title: "Return to Work Readiness Questionnaire",
      secondaryText: "Please answer the questions below and provide any requested documentation in order to determine if you meet local requirements for returning to work.",
      backgroundColor: "#020A51",
      image: a!documentImage(
        document: a!EXAMPLE_DOCUMENT_IMAGE()
      ),
      imageSize: "MEDIUM"
    ),
    style: "DOT_VERTICAL",
    steps: {
      a!wizardStep(
        label: "Work Location",
        contents: {
          a!richTextDisplayField(
            labelPosition: "COLLAPSED",
            value: {
              a!richTextItem(
                text: "Which office will you be returning to?",
                size: "MEDIUM",
                style: "PLAIN"
              )
            },
            marginAbove: "STANDARD",
            marginBelow: "MORE"
          ),
          a!cardChoiceField(
            label: "",
            labelPosition: "COLLAPSED",
            data: {
              a!map(id: 1, primaryText: "United States"),
              a!map(id: 2, primaryText: "United Kingdom"),
              a!map(id: 3, primaryText: "Australia"),
              a!map(id: 4, primaryText: "Spain"),
              a!map(id: 5, primaryText: "Germany"),
              a!map(id: 6, primaryText: "Italy")
            },
            cardTemplate: a!cardTemplateBarTextStacked(
              id: fv!data.id,
              primaryText: fv!data.primaryText
            ),
            value: local!country,
            saveInto: local!country,
            maxSelections: 1,
            validations: {}
          ),
          a!cardChoiceField(
            label: "",
            labelPosition: "COLLAPSED",
            data: {
              a!map(id: 1, primaryText: "Headquarters", secondaryText: "McLean VA"),
              a!map(id: 2, primaryText: "NYC WeWork", secondaryText: "New York NY"),
              a!map(id: 3, primaryText: "Remote WFH", secondaryText: "United States")
            },
            cardTemplate: a!cardTemplateBarTextStacked(
              id: fv!data.id,
              primaryText: fv!data.primaryText,
              secondaryText: fv!data.secondaryText
            ),
            value: local!office,
            saveInto: local!office,
            maxSelections: 1,
            validations: {}
          )
        }
      ),
      a!wizardStep(
        label: "Personal Information",
        contents: {
          a!textField(
            label: "First Name",
            value: local!firstName,
            saveInto: local!firstName
          ),
          a!textField(
            label: "Last Name",
            value: local!lastName,
            saveInto: local!lastName
          ),
          a!textField(
            label: "Organization",
            value: local!organization,
            saveInto: local!organization
          ),
          a!textField(
            label: "Job Title",
            value: local!jobTitle,
            saveInto: local!jobTitle
          ),
          a!dropdownField(
            label: "Country",
            placeholder: "Select a Country",
            choiceLabels: local!countryChoices,
            choiceValues: local!countryChoiceValues,
            value: local!country,
            saveInto: local!country
          )
        }
      ),
      a!wizardStep(
        label: "Review",
        contents: {
          /* Review step with read-only fields */
          a!richTextDisplayField(
            value: {
              a!richTextItem(text: "Please review your information:", style: "STRONG")
            },
            marginBelow: "STANDARD"
          ),
          a!columnsLayout(
            columns: {
              a!columnLayout(
                contents: {
                  a!richTextDisplayField(
                    value: { a!richTextItem(text: "Name:", color: "SECONDARY") }
                  ),
                  a!richTextDisplayField(
                    value: { a!richTextItem(text: "Organization:", color: "SECONDARY") }
                  ),
                  a!richTextDisplayField(
                    value: { a!richTextItem(text: "Job Title:", color: "SECONDARY") }
                  )
                }
              ),
              a!columnLayout(
                contents: {
                  a!richTextDisplayField(
                    value: { a!richTextItem(text: local!firstName & " " & local!lastName) }
                  ),
                  a!richTextDisplayField(
                    value: { a!richTextItem(text: local!organization) }
                  ),
                  a!richTextDisplayField(
                    value: { a!richTextItem(text: local!jobTitle) }
                  )
                }
              )
            }
          )
        }
      )
    },
    contentsWidth: "MEDIUM",
    showStepHeadings: false(),
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
### Site Page Example with Sidebar Step Indicator
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
    marginBelow: "NONE"
  ),
  contents: {
    a!columnsLayout(
      marginAbove: "MORE",
      columns: {
        a!columnLayout(width: "EXTRA_NARROW"),
        a!columnLayout(
          width: "NARROW_PLUS",
          contents: {
            /* Sidebar Step Indicator */
            a!sideBySideLayout(
              alignVertical: "MIDDLE",
              items: {
                a!sideBySideItem(
                  width: "MINIMIZE",
                  item: a!stampField(
                    size: "TINY",
                    icon: "check",
                    backgroundColor: "ACCENT"
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
                    backgroundColor: "ACCENT"
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
                    backgroundColor: "ACCENT"
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
              /* Review Step Content */
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
                      )
                    }
                  )
                }
              ),
              a!horizontalLine(),
              /* Navigation Buttons */
              a!sideBySideLayout(
                items: {
                  a!sideBySideItem(
                    item: a!buttonArrayLayout(
                      buttons: {
                        a!buttonWidget(
                          label: "BACK",
                          style: "OUTLINE",
                          saveInto: {}
                        ),
                        a!buttonWidget(
                          label: "CANCEL",
                          style: "LINK",
                          saveInto: {}
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
                          saveInto: {}
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
            /* Contextual Help Panel */
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
                      text: "After submitting your case, you will receive a confirmation email with your case number. Our support team will review your request and respond within 24 hours. You can track the status of your case in the customer portal.",
                      style: "PLAIN"
                    )
                  },
                  align: "LEFT"
                )
              },
              padding: "STANDARD",
              marginBelow: "STANDARD"
            )
          }
        ),
        a!columnLayout(width: "EXTRA_NARROW")
      }
    )
  }
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
