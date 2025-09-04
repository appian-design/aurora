---
status: "stable"
last_updated: "2025-08-29"
---

# Inline Dialog

Inline Dialogs are used to quickly perform an action on item in a list with at most 3 to 4 form fields. Avoid using this pattern for lists that may have a long list of fields. In those cases, use a dialog instead.

![](https://github.com/user-attachments/assets/5e69f211-bfd7-4bf0-8ef8-d6473bc44023)

## Design

Use the Appian Background color (#FAFAFA) for the inline dialog background and apply a border to the dialog. Add a section divider between the form fields and the form actions.

## Development

### Component
```
a!localVariables(
  local!active: false,
  {
    a!columnsLayout(
      columns: {
        a!columnLayout(contents: {}),
        a!columnLayout(
          contents: {
            {
              a!localVariables(
                {
                  a!buttonArrayLayout(
                    buttons: {
                      a!buttonWidget(
                        label: "Add Employee",
                        icon: "plus",
                        saveInto: a!save(local!active, not(local!active)),
                        size: "SMALL",
                        style: "OUTLINE",
                        color: "SECONDARY",
                        disabled: if(local!active, true, false)
                      )
                    },
                    align: "START"
                  ),
                  a!cardLayout(
                    contents: {
                      a!columnsLayout(
                        columns: {
                          a!columnLayout(
                            contents: {
                              a!textField(
                                label: "Name",
                                labelPosition: "ABOVE",
                                saveInto: {},
                                refreshAfter: "UNFOCUS",
                                validations: {}
                              ),
                              a!dateField(
                                label: "Start Date",
                                labelPosition: "ABOVE",
                                saveInto: {},
                                validations: {}
                              )
                            }
                          ),
                          a!columnLayout(
                            contents: {
                              a!dropdownField(
                                label: "Department",
                                labelPosition: "ABOVE",
                                placeholder: "Select a Department",
                                choiceLabels: {
                                  "Option 1",
                                  "Option 2",
                                  "Option 3",
                                  "Option 4",
                                  "Option 5",
                                  "Option 6",
                                  "Option 7",
                                  "Option 8",
                                  "Option 9",
                                  "Option 10",
                                  "Option 11",
                                  "Option 12"
                                },
                                choiceValues: { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 },
                                saveInto: {},
                                searchDisplay: "AUTO",
                                validations: {}
                              )
                            }
                          )
                        }
                      ),
                      a!sectionLayout(
                        label: "",
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!buttonArrayLayout(
                                  buttons: {
                                    a!buttonWidget(
                                      label: "Cancel",
                                      saveInto: a!save(local!active, not(local!active)),
                                      size: "SMALL",
                                      style: "LINK"
                                    )
                                  },
                                  align: "START",
                                  marginBelow: "NONE"
                                )
                              ),
                              a!sideBySideItem(
                                item: a!buttonArrayLayout(
                                  buttons: {
                                    a!buttonWidget(
                                      label: "Add",
                                      saveInto: a!save(local!active, not(local!active)),
                                      size: "SMALL",
                                      style: "SOLID"
                                    )
                                  },
                                  align: "END",
                                  marginBelow: "NONE"
                                )
                              )
                            },
                            marginBelow: "NONE"
                          )
                        },
                        divider: "ABOVE",
                        marginBelow: "LESS"
                      )
                    },
                    height: "AUTO",
                    showWhen: local!active,
                    style: "#FAFAFA",
                    marginBelow: "STANDARD",
                    borderColor: "#EDEEFA"
                  ),
                  a!columnsLayout(
                    columns: {
                      a!columnLayout(
                        contents: {}
                      )
                    },
                    stackWhen: { "PHONE", "TABLET_PORTRAIT" }
                  )
                }
              )
            }
          },
          width: "WIDE"
        ),
        a!columnLayout(contents: {})
      }
    )
  }
)
```

### Rule Inputs
|Name|Type|Description|
|--- |--- |--- |
|formButtonLabel|Text|The label of the button that will trigger the form to appear.|
|buttonType|Text|Controls button styling. Options: "OUTLINE" (default), "GHOST", "LINK", "SOLID"|
|buttonIcon|Text|Controls icon that appears. Use formal icon library names.|
|formFields|Any Type (Interface)|All form fields should be grouped in a SAIL interface. Use this variable to call the fields.|
|formAction|Text|The primary submit action for this form, e.g. “Add“.|
