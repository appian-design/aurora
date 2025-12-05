---
status: "stable"
last_updated: "2025-11-11"
---

# Milestones

Wizard milestones provide a guided experience to help users complete their tasks. Milestones should clearly identify each step in the process as well as the user’s progress through those steps.

Use the milestone built into `a!wizardLayout` to leverage built-in accessibility parameters and automatic navigation links. Configure the milestone appearance using the `style` parameter of `a!wizardLayout`. Use the standalone Milestone Component (`a!milestoneField`) only when you need to display progress outside of a wizard context.

Use succinct labels for each step to avoid text wrapping.

![](https://github.com/user-attachments/assets/34dd3e0b-09e4-4fb6-9b67-d19f81809e08)

## Design

### Variants

#### Minimal Style Milestone

![](https://github.com/user-attachments/assets/d7f47cca-b786-4344-a9f2-6c18a75b0195)


Use the minimal style (`style: MINIMAL`) to reduce the prominence of step indicators when progress information is not as important for the user, for example if there are only a few steps (1 - 3 steps). Keep in mind that the other milestone styles, which display step labels along with progress, will provide the most information to your users.

Enable step headings (`showStepHeadings: true`) when using the minimal style or on small screens to provide users with context for their current step.

#### Vertical Style Milestone

![](https://github.com/user-attachments/assets/24440c5d-2fad-4902-820c-a2c924530f3b)


Use vertical milestone styles (`style: DOT_VERTIAL`) to balance horizontal white space with narrower content widths. This layout is particularly useful on UIs that are tailored to users that are new to Appian or the solution.

Avoid combining vertical milestone styles with vertical tab patterns.

Use `VERTICAL` orientation for:
- Large Dialog Box size record actions
- Wizards with 6+ steps


#### Horizontal Style Milestone

![](https://github.com/user-attachments/assets/0de5aacb-70f1-43af-a4b7-588bd38650db)

Use horizontal milestone styles (`style: DOT_HORIZONTAL`) when you have shorter step contents. When step contents are tall, use a vertical or minimal style to avoid pushing inputs out of view.

Use `HORIZONTAL` orientation for:
- Medium and Small Dialog Box sizes
- Wizards with 4 - 6 steps


**Note:**
- Identify opportunities to reduce steps as much as possible. A good rule of thumb is to have at most 6 steps
- For 3-6 steps, use your best judgment on Vertical vs. Horizontal. Vertical milestones may look too sparse with 3 steps and horizontal milestones may look crowded with 5-6 steps.

#### Milestone in Record View
![](https://github.com/user-attachments/assets/902fcac1-4c13-46ea-8ae1-be51c6f67a78)

Use milestones in record views to show process status and guide users through multi-step workflows.

**When to use in record views**
- Multi-step processes with clear sequential stages
- Cases or requests that move through approval workflows
- When users need to understand current status and next steps

**Best practices**
- Place milestone at the top of the record view for immediate visibility
- Use descriptive step labels that match your business process
- Limit to 3-7 steps for optimal readability
- Consider using the milestone in the header to keep it visible while scrolling

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

#### Horizontal Style Milestone

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
    style: "DOT_HORIZONTAL",
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

#### Vertical Style Milestone

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

#### Milestone in Record View

```sail
a!localVariables(
  local!currentStep: 2,
  local!steps: {
    "Intake Review",
    "Department Review", 
    "Payment",
    "Initial Site Inspection",
    "Permit Decision"
  },
  local!documents: {
    a!map(name: "Site Plan", fileName: "site_plan_2025.pdf", uploadDate: "February 22", size: "2.1MB", type: "pdf"),
    a!map(name: "Building Specifications", fileName: "building_specs.docx", uploadDate: "February 22", size: "856KB", type: "word"),
    a!map(name: "Property Survey", fileName: "property_survey.pdf", uploadDate: "February 20", size: "1.3MB", type: "pdf"),
    a!map(name: "Engineering Report", fileName: "structural_analysis.pdf", uploadDate: "February 19", size: "945KB", type: "pdf"),
    a!map(name: "Site Photos", fileName: "structure_photos.zip", uploadDate: "February 18", size: "4.2MB", type: "image")
  },
  a!headerContentLayout(
    isHeaderFixed: true,
    backgroundColor: "#FAFAFC",
    header: a!cardLayout(
      padding: "STANDARD",
      showBorder: false,
      contents: {
        a!columnsLayout(
          columns: {
            a!columnLayout(
              contents: {
                a!richTextDisplayField(
                  labelPosition: "COLLAPSED",
                  value: {
                    a!richTextItem(
                      text: "RES-7FBA3A6 | New Tool Shed",
                      size: "LARGE",
                      style: "STRONG"
                    )
                  },
                  marginBelow: "STANDARD"
                )
              },
              width: "WIDE"
            ),
            a!columnLayout(
              contents: {
                a!buttonArrayLayout(
                  buttons: {
                    a!buttonWidget(
                      label: "Update Permit",
                      style: "OUTLINE",
                      size: "SMALL"
                    ),
                    a!buttonWidget(
                      label: "Approve",
                      style: "SOLID",
                      size: "SMALL"
                    )
                  },
                  align: "END"
                )
              },
              width: "MEDIUM"
            )
          },
          alignVertical: "MIDDLE"
        ),
        a!milestoneField(
          stepStyle: "DOT",
          steps: local!steps,
          active: local!currentStep,
          color: "ACCENT",
          marginBelow: "STANDARD"
        )
      }
    ),
    contents: {
      a!columnsLayout(
        stackWhen: {"TABLET_PORTRAIT", "PHONE"},
        columns: {
          a!columnLayout(
            contents: {
              a!headingField(
                text: "Permit Request",
                size: "SMALL",
                headingTag: "H2",
                fontWeight: "SEMI_BOLD",
                color: "STANDARD",
                marginBelow: "STANDARD"
              ),
              a!cardLayout(
                contents: {
                  a!columnsLayout(
                    stackWhen: {"TABLET_LANDSCAPE", "PHONE"},
                    columns: {
                      a!columnLayout(
                        contents: {
                          a!richTextDisplayField(
                            label: "Type",
                            value: "Residential Structure"
                          ),
                          a!richTextDisplayField(
                            label: "Address",
                            value: "123 Main Street, Springfield, IL 62701"
                          ),
                          a!richTextDisplayField(label: "Applicant", value: "John Smith")
                        }
                      ),
                      a!columnLayout(
                        contents: {
                          a!richTextDisplayField(
                            label: "Square Footage",
                            value: "120 sq ft"
                          ),
                          a!richTextDisplayField(label: "Estimated Cost", value: "$8,500"),
                          a!tagField(
                            label: "Status",
                            tags: a!tagItem(
                              text: "Under Review",
                              backgroundColor: "#FFF6C9",
                              textColor: "#856C00"
                            )
                          )
                        }
                      )
                    }
                  )
                },
                style: "NONE",
                shape: "SEMI_ROUNDED",
                padding: "STANDARD",
                showBorder: true,
                borderColor: "#EDEDF2",
                marginBelow: "STANDARD"
              ),
              a!headingField(
                text: "Related Cases",
                size: "SMALL",
                headingTag: "H2",
                fontWeight: "SEMI_BOLD",
                color: "STANDARD",
                marginBelow: "STANDARD"
              ),
              a!cardLayout(
                contents: {
                  a!gridField(
                    labelPosition: "COLLAPSED",
                    data: {
                      a!map(
                        case: "Fence installation request",
                        engineer: "Sarah Johnson",
                        priority: "Medium",
                        status: "Approved",
                        date: "2/15/2025"
                      ),
                      a!map(
                        case: "Deck permit application",
                        engineer: "Mike Chen",
                        priority: "Low",
                        status: "In Progress",
                        date: "2/20/2025"
                      ),
                      a!map(
                        case: "Pool installation permit",
                        engineer: "Sarah Johnson",
                        priority: "High",
                        status: "Under Review",
                        date: "2/18/2025"
                      ),
                      a!map(
                        case: "Garage addition request",
                        engineer: "David Wilson",
                        priority: "Medium",
                        status: "Approved",
                        date: "2/10/2025"
                      ),
                      a!map(
                        case: "Driveway expansion",
                        engineer: "Mike Chen",
                        priority: "Low",
                        status: "Submitted",
                        date: "2/22/2025"
                      ),
                      a!map(
                        case: "Patio cover installation",
                        engineer: "Jennifer Martinez",
                        priority: "Medium",
                        status: "In Progress",
                        date: "2/12/2025"
                      )
                    },
                    columns: {
                      a!gridColumn(
                        label: "Case",
                        value: a!linkField(
                          links: a!dynamicLink(label: fv!row.case, saveInto: {})
                        )
                      ),
                      a!gridColumn(
                        label: "Assigned Engineer",
                        value: fv!row.engineer
                      ),
                      a!gridColumn(
                        label: "Priority",
                        value: a!tagField(
                          labelPosition: "COLLAPSED",
                          tags: a!tagItem(
                            text: fv!row.priority,
                            backgroundColor: if(
                              fv!row.priority = "High",
                              "#FED7DE",
                              if(
                                fv!row.priority = "Medium",
                                "#FFF6C9",
                                "#E3FBDF"
                              )
                            ),
                            textColor: if(
                              fv!row.priority = "High",
                              "#9F0019",
                              if(
                                fv!row.priority = "Medium",
                                "#856C00",
                                "#117C00"
                              )
                            )
                          )
                        )
                      ),
                      a!gridColumn(label: "Status", value: fv!row.status),
                      a!gridColumn(label: "Submitted On", value: fv!row.date)
                    },
                    pageSize: 10
                  )
                },
                style: "NONE",
                shape: "SEMI_ROUNDED",
                padding: "STANDARD",
                showBorder: true,
                borderColor: "#EDEDF2"
              )
            }
          ),
          a!columnLayout(
            contents: {
              a!headingField(
                text: "Actions",
                size: "SMALL",
                headingTag: "H2",
                fontWeight: "SEMI_BOLD",
                color: "STANDARD",
                marginBelow: "STANDARD"
              ),
              a!cardLayout(
                contents: {
                  a!buttonArrayLayout(
                    buttons: {
                      a!buttonWidget(
                        label: "Schedule Inspection",
                        style: "OUTLINE",
                        width: "FILL"
                      ),
                      a!buttonWidget(
                        label: "Request Additional Info",
                        style: "OUTLINE",
                        width: "FILL"
                      ),
                      a!buttonWidget(
                        label: "Generate Report",
                        style: "OUTLINE",
                        width: "FILL"
                      )
                    },
                    align: "START"
                  )
                },
                style: "NONE",
                shape: "SEMI_ROUNDED",
                padding: "STANDARD",
                showBorder: true,
                borderColor: "#EDEDF2",
                marginBelow: "STANDARD"
              ),
              a!headingField(
                text: "Case Details",
                size: "SMALL",
                headingTag: "H2",
                fontWeight: "SEMI_BOLD",
                color: "STANDARD",
                marginBelow: "STANDARD"
              ),
              a!cardLayout(
                contents: {
                  a!richTextDisplayField(
                    label: "Submitted On",
                    value: "February 22, 2025 4:05 PM"
                  ),
                  a!richTextDisplayField(
                    label: "Modified On",
                    value: "February 22, 2025 12:54 PM"
                  ),
                  a!richTextDisplayField(
                    label: "Assigned Inspector",
                    value: "Jennifer Martinez"
                  ),
                  a!richTextDisplayField(
                    label: "Review Deadline",
                    value: "March 8, 2025"
                  )
                },
                style: "NONE",
                shape: "SEMI_ROUNDED",
                padding: "STANDARD",
                showBorder: true,
                borderColor: "#EDEDF2",
                marginBelow: "STANDARD"
              ),
              a!headingField(
                text: "Documents",
                size: "SMALL",
                headingTag: "H2",
                fontWeight: "SEMI_BOLD",
                color: "STANDARD",
                marginBelow: "STANDARD"
              ),
              a!forEach(
                items: local!documents,
                expression: a!cardLayout(
                  marginBelow: "LESS",
                  borderColor: "#EDEDF2",
                  shape: "SEMI_ROUNDED",
                  contents: {
                    a!sideBySideLayout(
                      items: {
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextIcon(
                                icon: "file-" & fv!item.type & "-o",
                                color: "ACCENT",
                                size: "LARGE"
                              )
                            }
                          ),
                          width: "MINIMIZE"
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: fv!item.name,
                                color: "STANDARD",
                                style: "STRONG"
                              ),
                              char(10),
                              a!richTextItem(text: fv!item.fileName, color: "#767676")
                            }
                          )
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(text: fv!item.uploadDate),
                              char(10),
                              a!richTextItem(text: fv!item.size, color: "SECONDARY")
                            },
                            align: "RIGHT"
                          ),
                          width: "MINIMIZE"
                        )
                      },
                      alignVertical: "MIDDLE"
                    )
                  },
                  link: a!dynamicLink()
                )
              )
            },
            width: "MEDIUM"
          )
        },
        spacing: "STANDARD"
      )
    }
  )
)
```
