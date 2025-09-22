---
status: "stable"
last_updated: "2025-09-22"
---

# Forms
Facilitate user input by using the appropriate form style and input types for each scenario

![](https://github.com/user-attachments/assets/38c4881d-ad58-4043-a40c-b686a898972d)

## Design
![](https://github.com/user-attachments/assets/1023e7c2-2f86-42d4-a2dd-01d946d19c80)
Form in a dialog

Forms serve as a way for users to have a conversation with our products. Great form design enhances the ability for the user to successfully complete their tasks. 

Every form needs to have a header, content and form navigation. A form can be used in a site page or in a dialog.

Use `a!formLayout()` for single-step forms and `a!wizardLayout()` for multi-step forms.

### When to Use Form vs Wizard (Multi-Step Form)

Use form layout when:
- Inputting data is unlikely to be sequential, and users will need to jump around
- Editing data via inline actions from the read-only representation of that data
- Focusing on a specific point in your workflow to input a small portion of the input fields

Use wizard layout when:
- Users need to enter a large number of fields that can be broken up into logical, sequential steps
- Users need a more guided navigation experience, where they can focus on one section of fields at a time with a visual progress indicator
Note: Having to click through a wizard to get to specific data to edit can be cumbersome, so consider when inline actions are more efficient 

### When to Use Inline Dialogs vs. Modals

|          | ![](https://github.com/user-attachments/assets/353d5082-710b-4bde-8311-b570a7d1f3e9) Use an Inline Dialog When| ![](https://github.com/user-attachments/assets/26dd1986-fe53-49ca-b226-a66b3df7a705) Use a Modal When |
|----------|---------|----------|
|**Number of Fields**|Only one or two fields need editing|More than two fields are required for data entry|
|**Task Complexity**|The action involves one step|The action involves one or multiple steps that are in a single or double column with input fields| 
|**Contextual Awareness**|Visibility of the editable content and the parent page is necessary|Full attention to the task is necessary without the need for referring back to the original context|
|**Progressive Disclosure**|No progressive disclosure is needed|Additional fields or options need to be revealed progressively|

### Usage

#### Dialog
![](https://github.com/user-attachments/assets/2be94769-e053-4db8-8631-6020efe1adeb)
Provide confirmation upon submission

![](https://github.com/user-attachments/assets/556b8845-d773-47ab-81c3-46a8271e2ca0)

##### Dialog Sizing

**When to use AUTO height:**
- When dialog contents are short
- You want your dialog size to match your content height exactly
- The form height is not going to change dynamically based on user input

**Do not use AUTO when:**
- Your dialog contents will dynamically change height based on state. This will result in a jumpy experience, because the dialog height will change with the height of its contents
- You are using a wizard, because each wizard step could change the height of your dialog

**Best practices:**
- Do not use very wide widths with very short heights, as it will feel unbalanced on the page
- When choosing a dialog size, use a width that will allow your inputs to fit expected value lengths. Avoid setting a wider width than needed, as this can lead to extremely long inputs, which are more difficult to scan
- Use dialog height and width to determine the size of your form or wizard. Form and wizard layout should always use the "FULL" contents width when used in record action dialogs

Checklist:

|Item|Type|
|--- |--- |
|Use `SOLID` style for the "submit" action|Buttons|
|Use `LINK` style for the "cancel" action|Buttons|
|Use "Update" (not "Edit") for the "submit" action when a user is modifying an item|Buttons|
|Stack buttons on mobile in the order as prescribed (see example image)|Buttons|
|In related actions, the form header should match the action Display Name (button label)|Buttons|
|Don't configure large or small primary or secondary buttons on a wizard. The Next and Back buttons are always the regular size, so custom buttons with a different size will look misaligned.|Buttons|
|Avoid using contents width and button combinations that result in primary or secondary buttons stacking. This can make buttons difficult to use. If your buttons are all necessary and are stacking, use a wider content width to ensure that they don't stack.|Buttons|
|Reserve the solid accent style for the "Next" button and any submit buttons on the last step of your wizard. For all other custom primary buttons, use a different style.|Buttons|
|Use a fixed button footer when using your wizard in a record action dialog.|Buttons|
|Verbs in the header (e.g.: Create Case) should match the submit button label and any button label used to launch the form|Content|
|Use "Update" (not "Edit") when a user is modifying an item|Content|
|Group related fields close to each other as much as possible to minimize context switching|Content|
|If there is a required input field, add instructions under the form header that specifies - "Mandatory fields are marked with an asterisk (*)"|Content|
|When configuring a wizard for a record action dialog, set "contentsWidth" parameter to "FULL" and constrain the size of your wizard with the dialog size options.|Content|
|Use the `a!FormLayout` component|Dialogs|
|Avoid using the `a!HeaderContentLayout` component|Dialogs|
|Use a dialog size that matches field width. Avoid using a `LARGE` dialog size for sparse forms.|Dialogs|
|Place fields in one column as much as possible|Dialogs|
|Set `SkipAutoFocus` to True|Dialogs|
|The submit action of the form should match the form header. Example: If the form header is "Update Status", then the submit action of the form should state "Update"|Dialogs|
|For wizards in record action dialogs, don't use the "AUTO" dialog height. Each step could change the height of the dialog, which would feel jarring to a user.|Dialogs|
|If you have section headings within a step, make sure they are smaller than the step heading. Otherwise, the hierarchy of the page may be harder to understand.|Dialogs|
|Make sure your wizard step contents are designed responsively, following design guidance. The wizard milestone styles responsively switch to the minimal style on narrow screens so that only the step contents need to be designed with small form factors in mind.|Dialogs|
|In a multi-step form, use the milestone component to indicate progress. See [Milestone guidance](milestones.md) for detailed implementation guidance.|Progress|
|In a multi-step form, avoid specifying a header label for the step. The milestone step label is sufficient.|Progress|
|In a form with 3+ steps, provide a review step that lists all the fields as read -only. Allow the user to navigate back to update information.|Progress|
|Provide confirmation upon submission|Progress|

#### Site Page
![](https://github.com/user-attachments/assets/46e959ec-6e76-4d64-a4fb-5b2cd731441b)

In a form with 3+ steps, provide a review step that lists all the fields as read -only. Allow the user to navigate back to update information.

Checklist:

|Item|Type|
|--- |--- |
|Use `SOLID` style for the "submit" action|Buttons|
|Use `LINK` style for the "cancel" action|Buttons|
|Use "Update" (not "Edit") for the "submit" action when a user is modifying an item|Buttons|
|Stack buttons on mobile in the order as prescribed (see example image)|Buttons|
|In related actions, the form header should match the action Display Name (button label)|Buttons|
|Verbs in the header (e.g.: Create Case) should match the submit button label and any button label used to launch the form|Content|
|Use "Update" (not "Edit") when a user is modifying an item|Content|
|Group related fields close to each other as much as possible to minimize context switching|Content|
|If there is a required input field, add instructions under the form header that specifies - "Mandatory fields are marked with an asterisk (*)"|Content|
|In a multi-step form, use the milestone component to indicate progress. See [Milestone guidance](milestones.md) for detailed implementation guidance.|Progress|
|In a multi-step form, avoid specifying a header label for the step. The milestone step label is sufficient.|Progress|
|In a form with 3+ steps, provide a review step that lists all the fields as read -only. Allow the user to navigate back to update information.|Progress|
|Provide confirmation upon submission|Progress|

### Fields
![](https://github.com/user-attachments/assets/4a3978f7-245b-42e6-8a5d-5f4f78c79304)
Use the instructions parameter to provide information vital to form completion

![](https://github.com/user-attachments/assets/8cc52179-593c-4af3-9e58-3407a675850a)
Use field level validation as much as possible. Define the error and provide guidance on how to resolve it. Avoid generic error messages. Do not disable a button, instead let the user click and view the error to understand what is missing or incorrect

It is a best practice to build forms with inputs in a single column to keep the flow of the form clear and reduce errors. Rather than using a wide dialog width and including inputs in multiple columns, consider using a narrower dialog width with a single column of inputs. Although this may introduce more scrolling, it can help with readability of the form. If your form scrolls excessively, consider using a wizard or tabs pattern to break up a large set of input fields into more easily processed steps.

Checklist:

|Item|Type|
|--- |--- |
|Avoid specifying character limits for fields where the user is unlikely to reach the limit (e.g.: First Name)|Character Limits|
|Set a field width that matches the expected size of the value. Avoid using a full screen width if we expect the value to be smaller in size.|Character Limits|
|Show character limits where long lengths of text may be possible (e.g.: `a!paragraphField`()). Use 500, 1000, 2000 or 4000 as character limits based on your use case. Avoid going over 4000 as a character limit.|Character Limits|
|Avoid asking the user for the same information multiple times (e.g.: username)|Content|
|Disable a field only if will be enabled depending on the value of another field.|Disabled Fields|
|Avoid disabling fields that will remain read-only. Set the field as "read only" instead.|Disabled Fields|
|When using repeated blocks of fields (e.g.: "Address Line 1", "Address Line 2"), set the `accessibilityText` parameter on each field to indicate which block the label is associated with|Grouping|
|Use the instructions parameter to provide information vital to form completion|Instructions|
|Avoid using the `a!RichTextDisplayField` component to provide instructions. Use the field's instructions parameter instead.|Instructions|
|Always use the `label` parameter|Label|
|Set `labelPosition` to `ABOVE` Label|
|Avoid verbs. Just use the noun of what is being requested (e.g.: "Customer" instead of "Search Customer")|Label|
|Use the `label` parameter to show input format (e.g.: Date of Birth(MM/DD/YYYY))|Label|
|Use sentence casing|Label|
|Use a picker when the user has an idea of what they are looking for. Use "Search" in the `placeholder` parameter.|Picker vs. Dropdown|
|Use a dropdown when the user isn't sure of what they are looking for. Use "Select" in the `placeholder` parameter.|Picker vs. Dropdown|
|Use the `placeholder` parameter to specify the interaction (e.g.: "Select Vendor" in a dropdown or "Search Vendors" in a picker)|Placeholder Text|
|Avoid using "---" in placeholder text|Placeholder Text|
|Avoid using the `placeholder` parameter to specify input format|Placeholder Text|
|Use the `STANDARD` style in a dense form|Radio Buttons and Checkboxes|
|Use the `STANDARD` style when presenting as a custom grid filter|Radio Buttons and Checkboxes|
|Use the `helpTooltip` parameter when the label is not sufficient for the user to understand the term|Tooltips|
|Keep tooltips as brief as possible.|Tooltips|
|Use field level validation as much as possible|Validation|
|Define the error and provide guidance on how to resolve it. Avoid generic error messages (e.g.: "A value is required")|Validation|
|Do not disable the submit or next button due to a validation error. Allow the user to click the button and view the validation error in the field.|Validation|

## Development

### Dialog Example 1
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

### Wizard Dialog Example
```
a!localVariables(
  local!firstName,
  local!lastName,
  local!email,
  local!phone,
  local!address,
  local!city,
  local!state,
  local!zip,
  local!department,
  local!jobTitle,
  local!startDate,
  local!manager,
  local!workLocation,
  local!employeeId,
  local!securityLevel,
  local!accessGroups,
  local!systemPermissions,
  local!emailNotifications,
  local!smsNotifications,
  local!timeZone,
  local!language,
  a!wizardLayout(
    titleBar: a!headerTemplateSimple(title: "Employee Account Setup"),
    showTitleBarDivider: true,
    style: "DOT_VERTICAL",
    contentsWidth: "FULL",
    backgroundColor: "#FAFAFC",
    isTitleBarFixed: true,
    isButtonFooterFixed: true,
    steps: {
      a!wizardStep(
        label: "Personal Information",
        contents: {
          a!sectionLayout(
            label: "Basic Details",
            labelSize: "SMALL",
            labelColor: "STANDARD",
            contents: a!cardLayout(
              padding: "STANDARD",
              shape: "SEMI_ROUNDED",
              borderColor: "#EDEEFA",
              contents: {
                a!textField(
                  label: "First Name",
                  value: local!firstName,
                  saveInto: local!firstName,
                  required: true
                ),
                a!textField(
                  label: "Last Name",
                  value: local!lastName,
                  saveInto: local!lastName,
                  required: true
                ),
                a!textField(
                  label: "Email Address",
                  value: local!email,
                  saveInto: local!email,
                  required: true
                ),
                a!textField(
                  label: "Phone Number",
                  value: local!phone,
                  saveInto: local!phone
                )
              }
            )
          ),
          a!sectionLayout(
            label: "Address Information",
            labelSize: "SMALL",
            labelColor: "STANDARD",
            marginAbove: "STANDARD",
            contents: a!cardLayout(
              padding: "STANDARD",
              shape: "SEMI_ROUNDED",
              borderColor: "#EDEEFA",
              contents: {
                a!textField(
                  label: "Street Address",
                  value: local!address,
                  saveInto: local!address
                ),
                a!textField(
                  label: "City",
                  value: local!city,
                  saveInto: local!city
                ),
                a!textField(
                  label: "State",
                  value: local!state,
                  saveInto: local!state
                ),
                a!textField(
                  label: "ZIP Code",
                  value: local!zip,
                  saveInto: local!zip
                )
              }
            )
          )
        }
      ),
      a!wizardStep(
        label: "Employment Details",
        contents: {
          a!sectionLayout(
            label: "Position Information",
            labelSize: "SMALL",
            labelColor: "STANDARD",
            contents: a!cardLayout(
              padding: "STANDARD",
              shape: "SEMI_ROUNDED",
              borderColor: "#EDEEFA",
              contents: {
                a!dropdownField(
                  label: "Department",
                  placeholder: "Select Department",
                  choiceLabels: {
                    "Engineering",
                    "Marketing",
                    "Sales",
                    "HR",
                    "Finance",
                    "Operations"
                  },
                  choiceValues: { "ENG", "MKT", "SAL", "HR", "FIN", "OPS" },
                  value: local!department,
                  saveInto: local!department,
                  required: true
                ),
                a!textField(
                  label: "Job Title",
                  value: local!jobTitle,
                  saveInto: local!jobTitle,
                  required: true
                ),
                a!dateField(
                  label: "Start Date",
                  value: local!startDate,
                  saveInto: local!startDate,
                  required: true
                )
              }
            )
          ),
          a!sectionLayout(
            label: "Reporting Structure",
            labelSize: "SMALL",
            labelColor: "STANDARD",
            marginAbove: "STANDARD",
            contents: a!cardLayout(
              padding: "STANDARD",
              shape: "SEMI_ROUNDED",
              borderColor: "#EDEEFA",
              contents: {
                a!pickerFieldUsers(
                  label: "Direct Manager",
                  placeholder: "Search for Manager",
                  value: local!manager,
                  saveInto: local!manager,
                  required: true
                ),
                a!dropdownField(
                  label: "Work Location",
                  placeholder: "Select Location",
                  choiceLabels: {
                    "New York Office",
                    "San Francisco Office",
                    "Remote",
                    "Hybrid"
                  },
                  choiceValues: { "NY", "SF", "REMOTE", "HYBRID" },
                  value: local!workLocation,
                  saveInto: local!workLocation
                ),
                a!textField(
                  label: "Employee ID",
                  value: local!employeeId,
                  saveInto: local!employeeId
                )
              }
            )
          )
        }
      ),
      a!wizardStep(
        label: "Security & Access",
        contents: {
          a!cardLayout(
            padding: "STANDARD",
            shape: "SEMI_ROUNDED",
            borderColor: "#EDEEFA",
            contents: {
              a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: "Security & access fields go here"
              )
            }
          )
        }
      ),
      a!wizardStep(
        label: "Notification Preferences",
        contents: {
          a!cardLayout(
            padding: "STANDARD",
            shape: "SEMI_ROUNDED",
            borderColor: "#EDEEFA",
            contents: {
              a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: "Notification preferences go here"
              )
            }
          )
        }
      ),
      a!wizardStep(
        label: "System Preferences",
        contents: {
          a!cardLayout(
            padding: "STANDARD",
            shape: "SEMI_ROUNDED",
            borderColor: "#EDEEFA",
            contents: {
              a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: "System preferences go here"
              )
            }
          )
        }
      ),
      a!wizardStep(
        label: "Review & Confirm",
        contents: {
          a!sectionLayout(
            label: "Personal Information",
            labelSize: "SMALL",
            labelColor: "STANDARD",
            contents: a!cardLayout(
              padding: "STANDARD",
              shape: "SEMI_ROUNDED",
              borderColor: "#EDEEFA",
              contents: {
                a!columnsLayout(
                  columns: {
                    a!columnLayout(
                      contents: {
                        a!richTextDisplayField(
                          label: "Name",
                          value: a!richTextItem(
                            text: local!firstName & " " & local!lastName
                          )
                        ),
                        a!richTextDisplayField(
                          label: "Email",
                          value: a!richTextItem(text: local!email)
                        )
                      }
                    ),
                    a!columnLayout(
                      contents: {
                        a!richTextDisplayField(
                          label: "Phone",
                          value: a!richTextItem(
                            text: if(
                              isnull(local!phone),
                              "Not provided",
                              local!phone
                            )
                          )
                        ),
                        a!richTextDisplayField(
                          label: "Address",
                          value: a!richTextItem(
                            text: if(
                              and(
                                isnull(local!address),
                                isnull(local!city)
                              ),
                              "Not provided",
                              local!address & ", " & local!city & " " & local!state & " " & local!zip
                            )
                          )
                        )
                      }
                    )
                  }
                )
              }
            )
          ),
          a!sectionLayout(
            label: "Employment Details",
            labelSize: "SMALL",
            labelColor: "STANDARD",
            marginAbove: "STANDARD",
            contents: a!cardLayout(
              padding: "STANDARD",
              shape: "SEMI_ROUNDED",
              borderColor: "#EDEEFA",
              contents: {
                a!columnsLayout(
                  columns: {
                    a!columnLayout(
                      contents: {
                        a!richTextDisplayField(
                          label: "Department",
                          value: a!richTextItem(text: local!department)
                        ),
                        a!richTextDisplayField(
                          label: "Job Title",
                          value: a!richTextItem(text: local!jobTitle)
                        ),
                        a!richTextDisplayField(
                          label: "Start Date",
                          value: a!richTextItem(
                            text: text(local!startDate, "MMM DD, YYYY")
                          )
                        )
                      }
                    ),
                    a!columnLayout(
                      contents: {
                        a!richTextDisplayField(
                          label: "Manager",
                          value: a!richTextItem(
                            text: if(
                              isnull(local!manager),
                              "Not assigned",
                              user(
                                index(local!manager, 1, {}),
                                "displayName"
                              )
                            )
                          )
                        ),
                        a!richTextDisplayField(
                          label: "Work Location",
                          value: a!richTextItem(
                            text: if(
                              isnull(local!workLocation),
                              "Not specified",
                              local!workLocation
                            )
                          )
                        ),
                        a!richTextDisplayField(
                          label: "Employee ID",
                          value: a!richTextItem(
                            text: if(
                              isnull(local!employeeId),
                              "Auto-generated",
                              local!employeeId
                            )
                          )
                        )
                      }
                    )
                  }
                )
              }
            )
          ),
          a!sectionLayout(
            label: "Security & Access",
            labelSize: "SMALL",
            labelColor: "STANDARD",
            marginAbove: "STANDARD",
            contents: a!cardLayout(
              padding: "STANDARD",
              shape: "SEMI_ROUNDED",
              borderColor: "#EDEEFA",
              contents: {
                a!columnsLayout(
                  columns: {
                    a!columnLayout(
                      contents: {
                        a!richTextDisplayField(
                          label: "Security Level",
                          value: a!richTextItem(text: local!securityLevel)
                        ),
                        a!richTextDisplayField(
                          label: "Access Groups",
                          value: a!richTextItem(
                            text: if(
                              isnull(local!accessGroups),
                              "None selected",
                              joinarray(local!accessGroups, ", ")
                            )
                          )
                        )
                      }
                    ),
                    a!columnLayout(
                      contents: {
                        a!richTextDisplayField(
                          label: "System Permissions",
                          value: a!richTextItem(
                            text: if(
                              isnull(local!systemPermissions),
                              "None selected",
                              joinarray(local!systemPermissions, ", ")
                            )
                          )
                        )
                      }
                    )
                  }
                )
              }
            )
          ),
          a!sectionLayout(
            label: "Preferences",
            labelSize: "SMALL",
            labelColor: "STANDARD",
            marginAbove: "STANDARD",
            contents: a!cardLayout(
              padding: "STANDARD",
              shape: "SEMI_ROUNDED",
              borderColor: "#EDEEFA",
              contents: {
                a!columnsLayout(
                  columns: {
                    a!columnLayout(
                      contents: {
                        a!richTextDisplayField(
                          label: "Time Zone",
                          value: a!richTextItem(
                            text: if(
                              isnull(local!timeZone),
                              "Not set",
                              local!timeZone
                            )
                          )
                        ),
                        a!richTextDisplayField(
                          label: "Language",
                          value: a!richTextItem(
                            text: if(
                              isnull(local!language),
                              "English (default)",
                              local!language
                            )
                          )
                        )
                      }
                    ),
                    a!columnLayout(
                      contents: {
                        a!richTextDisplayField(
                          label: "Email Notifications",
                          value: a!richTextItem(
                            text: if(
                              isnull(local!emailNotifications),
                              "None selected",
                              length(local!emailNotifications) & " selected"
                            )
                          )
                        ),
                        a!richTextDisplayField(
                          label: "SMS Notifications",
                          value: a!richTextItem(
                            text: if(
                              isnull(local!smsNotifications),
                              "None selected",
                              length(local!smsNotifications) & " selected"
                            )
                          )
                        )
                      }
                    )
                  }
                )
              }
            )
          )
        }
      )
    },
    primaryButtons: {
      a!buttonWidget(
        label: "Create Account",
        style: "SOLID",
        showWhen: fv!isLastStep,
        saveInto: {
          /* Add account creation logic here */
        }
      )
    },
    secondaryButtons: {
      a!buttonWidget(
        label: "Cancel",
        style: "LINK",
        saveInto: {
          /* Add cancel logic here */ 
        }
      )
    }
  )
)
```

### Minimal Style Wizard Example
```
a!localVariables(
  local!firstName,
  local!lastName,
  local!email,
  local!password,
  local!confirmPassword,
  local!company,
  local!jobTitle,
  local!phone,
  a!wizardLayout(
    titleBar: a!headerTemplateSimple(title: "Create Account"),
    showTitleBarDivider: true,
    style: "MINIMAL",
    contentsWidth: "FULL",
    backgroundColor: "#FAFAFC",
    showButtonDivider: true,
    steps: {
      a!wizardStep(
        label: "Personal Info",
        contents: {
          a!textField(
            label: "First Name",
            value: local!firstName,
            saveInto: local!firstName,
            required: true
          ),
          a!textField(
            label: "Last Name",
            value: local!lastName,
            saveInto: local!lastName,
            required: true
          ),
          a!textField(
            label: "Email Address",
            value: local!email,
            saveInto: local!email,
            required: true
          )
        }
      ),
      a!wizardStep(
        label: "Account Setup",
        contents: {
          a!textField(
            label: "Password",
            value: local!password,
            saveInto: local!password,
            required: true,
            masked: true
          ),
          a!textField(
            label: "Confirm Password",
            value: local!confirmPassword,
            saveInto: local!confirmPassword,
            required: true,
            masked: true
          )
        }
      ),
      a!wizardStep(
        label: "Profile Details",
        contents: {
          a!textField(
            label: "Company",
            value: local!company,
            saveInto: local!company
          ),
          a!textField(
            label: "Job Title",
            value: local!jobTitle,
            saveInto: local!jobTitle
          ),
          a!textField(
            label: "Phone Number",
            value: local!phone,
            saveInto: local!phone
          )
        }
      )
    },
    primaryButtons: {
      a!buttonWidget(
        label: "Create Account",
        style: "SOLID",
        showWhen: fv!isLastStep,
        saveInto: {
          /* Add account creation logic here */       
        }
      )
    },
    secondaryButtons: {
      a!buttonWidget(
        label: "Cancel",
        style: "LINK",
        saveInto: {
          /* Add cancel logic here */
        }
      )
    }
  )
)
```

### Site Page
```
a!localVariables(
  local!firstName,
  local!lastName,
  local!location,
  local!maritalStatus,
  local!identityProof,
  a!wizardLayout(
    titleBar: a!headerTemplateFull(
      title: "Create Case",
      backgroundColor: "#020A51"
    ),
    isButtonFooterFixed: true,
    backgroundColor: "#FAFAFC",
    style: if(a!isPageWidth("TABLET_LANDSCAPE"), "MINIMAL", "DOT_VERTICAL"),
    contentsWidth: "FULL",
    steps: {
      a!wizardStep(
        label: "Profile Information",
        contents: {
          a!columnsLayout(
            columns: {
              a!columnLayout(
                contents: {
                  a!textField(
                    label: "First Name",
                    labelPosition: "ABOVE",
                    required: true,
                    value: local!firstName,
                    saveInto: local!firstName
                  ),
                  a!textField(
                    label: "Last Name",
                    labelPosition: "ABOVE",
                    required: true,
                    value: local!lastName,
                    saveInto: local!lastName
                  ),
                  a!dropdownField(
                    label: "Location",
                    labelPosition: "ABOVE",
                    placeholder: "Select a Location",
                    required: true,
                    choiceLabels: {
                      "New York",
                      "California",
                      "Texas",
                      "Florida"
                    },
                    choiceValues: { "NY", "CA", "TX", "FL" },
                    value: local!location,
                    saveInto: local!location
                  ),
                  a!dropdownField(
                    label: "Marital Status",
                    labelPosition: "ABOVE",
                    placeholder: "Select a Status",
                    choiceLabels: {
                      "Single",
                      "Married",
                      "Divorced",
                      "Widowed"
                    },
                    choiceValues: {
                      "single",
                      "married",
                      "divorced",
                      "widowed"
                    },
                    value: local!maritalStatus,
                    saveInto: local!maritalStatus
                  ),
                  a!fileUploadField(
                    label: "Identity Proof",
                    labelPosition: "ABOVE",
                    instructions: "Upload supporting documentation",
                    value: local!identityProof,
                    saveInto: local!identityProof
                  )
                }
              ),
              a!columnLayout(
                showWhen: a!isPageWidth({"DESKTOP_NARROW", "DESKTOP", "DESKTOP_WIDE"}), 
                width: "EXTRA_NARROW"
              ),
              a!columnLayout(
                width: "NARROW_PLUS",
                contents: {
                  a!cardLayout(
                    style: "#E7F1FF",
                    showBorder: false,
                    shape: "SEMI_ROUNDED",
                    contents: {
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: "What happens next?",
                            style: "STRONG",
                            size: "MEDIUM"
                          )
                        },
                        marginBelow: "STANDARD"
                      ),
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            style: "PLAIN"
                          )
                        }
                      )
                    },
                    padding: "STANDARD"
                  )
                }
              )
            }
          )
        }
      ),
      a!wizardStep(
        label: "Contact Information",
        contents: {
          a!richTextDisplayField(
            labelPosition: "COLLAPSED",
            value: "Contact information form fields would go here"
          )
        }
      ),
      a!wizardStep(
        label: "Payment Information",
        contents: {
          a!richTextDisplayField(
            labelPosition: "COLLAPSED",
            value: "Payment information form fields would go here"
          )
        }
      ),
      a!wizardStep(
        label: "Confirmation",
        contents: {
          a!richTextDisplayField(
            labelPosition: "COLLAPSED",
            value: "Review and confirmation content would go here"
          )
        }
      )
    },
    showButtonDivider: true,
    secondaryButtons: {
      a!buttonWidget(label: "Cancel", style: "LINK")
    },
    primaryButtons: {
      a!buttonWidget(
        showWhen: fv!isLastStep,
        label: "Create",
        style: "SOLID"
      )
    }
  )
)
```
