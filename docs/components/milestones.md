---
status: "stable"
last_updated: "2025-09-22"
---

# Milestones

Wizard milestones provide a guided experience to help users complete their tasks. Milestones should clearly identify each step in the process as well as the user's progress through those steps.

Use the milestone built into `a!wizardLayout` to leverage built-in accessibility parameters and automatic navigation links. Use the standalone Milestone Component (`a!milestoneField`) only when you need to display progress outside of a wizard context.

Use milestones when your form has at least 3 steps. Use succinct labels for each step to avoid text wrapping. Make the label concise or reduce the label size to fit in one line.

![](https://github.com/user-attachments/assets/e7444311-7592-4633-ac3a-f9b98ee4d895)


## Design

### Variants

#### Minimal Style Milestone

![](https://github.com/user-attachments/assets/1cc3c06d-6419-410e-b0a3-18c5a10b0997)


Use the minimal style to reduce the prominence of step indicators when progress information is not as important for the user, for example if there are only a few steps. Keep in mind that the milestone styles, which display step labels along with progress, will provide the most information to your users.

When using the minimal style, or when users are expected to use the wizard on small form factors, show step headings so that the user has context for their current step.

#### Vertical Style Milestone

![](https://github.com/user-attachments/assets/24440c5d-2fad-4902-820c-a2c924530f3b)


Use vertical milestone styles to balance horizontal white space with narrower content widths. This is the default milestone style (`DOT_VERTICAL`) and can be configured using the `style` parameter of `a!wizardLayout`. This layout is particularly useful on UIs that are tailored to users that are new to Appian or the solution.

Don't use vertical tab patterns with the vertical milestone style.

Use `VERTICAL` orientation for Large Dialog Box size record actions. Use Vertical orientation for 6+ steps.

**Note:** For pending steps, use a light gray (#EDEEF2) stamp background color with dark gray (#2E2E35) text. For the current step and completed steps, use an accent background color with white text.

#### Horizontal Style Milestone

![](https://github.com/user-attachments/assets/52f40cc3-2cc3-4a97-a320-ba75da466912)

Use horizontal milestone styles when you have shorter step contents. When step contents are tall, use a vertical or minimal style to avoid pushing inputs out of view. Use the horizontal layout when there are 4 - 6 steps in the workflow.

If you have a large number of steps that won't fit comfortably in a horizontal layout on user screen sizes, use a vertical milestone style instead.

Use `HORIZONTAL` orientation for Medium and Small Dialog Box sizes. For 3-6 steps, use your best judgment on Vertical vs. Horizontal. Vertical milestones may look too sparse with 3 steps and horizontal milestones may look crowded with 5-6 steps.

**Note:**
- Identify opportunities to reduce steps as much as possible. A good rule of thumb is to have at most 6 steps
- For accessibility considerations, set the label of the milestone wizard component to "Progress" and the label position to `COLLAPSED`



## Development

### Variants

#### Minimal Style Milestone

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

#### Horizontal Milestone Component

```
a!localVariables(
  local!firstName,
  local!lastName,
  local!email,
  local!department,
  local!role,
  local!manager,
  local!preferences,
  local!notifications,
  a!wizardLayout(
    titleBar: a!headerTemplateFull(
      title: "Account Setup",
      backgroundColor: "#020A50"
    ),
    showTitleBarDivider: true,
    isButtonFooterFixed: true,
    showButtonDivider: true,
    style: "LINE_HORIZONTAL",
    contentsWidth: "NARROW",
    backgroundColor: "#FAFAFC",
    steps: {
      a!wizardStep(
        label: "Basic Info",
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
            label: "Email",
            value: local!email,
            saveInto: local!email,
            required: true
          )
        }
      ),
      a!wizardStep(
        label: "Department",
        contents: {
          a!dropdownField(
            label: "Department",
            placeholder: "Select a Department",
            choiceLabels: {
              "Engineering",
              "Marketing",
              "Sales",
              "HR",
              "Finance"
            },
            choiceValues: { "ENG", "MKT", "SAL", "HR", "FIN" },
            value: local!department,
            saveInto: local!department,
            required: true
          ),
          a!dropdownField(
            label: "Role",
            placeholder: "Select a Role",
            choiceLabels: {
              "Manager",
              "Senior",
              "Associate",
              "Intern"
            },
            choiceValues: { "MGR", "SR", "ASSOC", "INT" },
            value: local!role,
            saveInto: local!role,
            required: true
          )
        }
      ),
      a!wizardStep(
        label: "Manager",
        contents: {
          a!pickerFieldUsers(
            label: "Direct Manager",
            placeholder: "Search for Manager",
            value: local!manager,
            saveInto: local!manager,
            required: true
          )
        }
      ),
      a!wizardStep(
        label: "Preferences",
        contents: {
          a!checkboxField(
            label: "Email Notifications",
            choiceLabels: {
              "Daily summaries",
              "Project updates",
              "System alerts"
            },
            choiceValues: { "daily", "projects", "alerts" },
            value: local!notifications,
            saveInto: local!notifications
          ),
          a!dropdownField(
            label: "Time Zone",
            placeholder: "Select Time Zone",
            choiceLabels: {
              "Eastern",
              "Central",
              "Mountain",
              "Pacific"
            },
            choiceValues: { "EST", "CST", "MST", "PST" },
            value: local!preferences,
            saveInto: local!preferences
          )
        }
      )
    },
    primaryButtons: {
      a!buttonWidget(
        label: "Complete Setup",
        style: "SOLID",
        showWhen: fv!isLastStep,
        saveInto: {
          /* Add account setup completion logic here */
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

#### Vertical Milestone Component

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
