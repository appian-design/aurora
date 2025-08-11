---
status: "stable"
last_updated: "2024-05-14"
---

# Tabs

Tabs are used to navigate between alternate views within a user interface

![](https://github.com/user-attachments/assets/60220bf3-2e91-4908-975f-983b5e769498)

## Design

### Variants

#### Record Tabs

![](https://github.com/user-attachments/assets/27c88807-6a38-48f1-add7-4fc17ddcc55e)

Use the platform’s record tabs to establish views within a record. Avoid designing custom view tabs when using an Appian record.

> [!Note]
> **Accessibility:** The platform's record tabs have accessibility features available out of the box — nothing more is necessary.

#### Tabs as Side Navigation

![](https://github.com/user-attachments/assets/0bb4dabd-ca89-42ca-9697-b1a408623e11)

Use this option when there are 4 or more tabs.

**Note:** When using this option, keep in mind that the components within the tab will have lesser page width and the design will need to be adjusted accordingly

> [!Note]
> **Accessibility:** Specify “Selected” in the `accessibilityText` parameter of the tab’s card layout to ensure screen readers identify the selected tab. Avoid using the word “tab” in the accessibility text.

#### Horizontal Tabs

![](https://github.com/user-attachments/assets/88d1c232-396e-47d6-a6bd-52f968bea8c2)

Use horizontal tabs to implement views within a page or section. Avoid using more than 4 tabs.

**Note:**

- This layout could work for showing lists based on different statuses
- Ensure the tabs have a wrapping container in order to establish the appropriate hierarchy

> [!Note]
> **Accessibility:** Specify “Selected” in the `accessibilityText` parameter of the tab’s card layout to ensure screen readers identify the selected tab. Avoid using the word “tab” in the accessibility text.

#### Chart Toggle Using Tabs

![](https://github.com/user-attachments/assets/021a6869-eb40-4829-a148-de92b89dfa59)

Use this pattern to toggle data display between a chart view and list view.

> [!Note]
> **Accessibility:** Specify “Selected” in the `accessibilityText` parameter of the `a!buttonWidget` to ensure screen readers identify the selected button/tab. Avoid using the word “tab“ in the accessibility text. The button names should be “chart view“ and “list view“, respectively.

### Accessibility

Specify “Selected” in the `accessibilityText` parameter of the tab’s `a!cardLayout` to ensure screen readers identify the selected tab. Avoid using the word “tab“ in the accessibility text.

## Development

### Variants

#### Tabs as Side Navigation

```
a!localVariables(
  local!tabs: {
    "Tab 1",
    "Tab 2",
    "Tab 3",
    "Tab 4",
    "Tab 5"
  },
  local!selectedTab: 1,
  local!backgroundColor: "#FFFFFF",
  a!forEach(
    items: local!tabs,
    expression: {
      a!cardLayout(
        showBorder: false,
        contents: {
          a!richTextDisplayField(
            labelPosition: "COLLAPSED",
            value: a!richTextItem(
              text: fv!item,
              style: if(
                fv!index = local!selectedTab,
                "STRONG",
                "PLAIN"
              )
            )
          )
        },
        decorativeBarColor: if(
          fv!index = local!selectedTab,
          "ACCENT",
          local!backgroundColor
        ),
        link: a!dynamicLink(),
        decorativeBarPosition: "START",
        marginBelow: "LESS"
      )
    }
  )
)
```

#### Horizontal Tabs

```
a!localVariables(
  local!tabs: {
    a!map(title: "Applied Clauses", tag: "5"),
    a!map(title: "Questionnaire", tag: "2"),
    a!map(title: "Excluded Clauses", tag: "1"),
    a!map(title: "Log History", tag: "0")
  },
  local!selectedTab: 1,
  local!backgroundColor: "#FFFFFF",
  a!cardLayout(
    contents: {
      a!cardLayout(
        contents: {
          a!columnsLayout(
            columns: {
              a!forEach(
                items: local!tabs,
                expression: {
                  a!columnLayout(
                    contents: {
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: { fv!item.title },
                                      color: "STANDARD",
                                      size: "STANDARD",
                                      style: if(
                                        fv!index = local!selectedTab,
                                        "STRONG",
                                        "PLAIN"
                                      )
                                    )
                                  },
                                  align: "CENTER",
                                  marginBelow: "NONE"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!tagField(
                                  labelPosition: "COLLAPSED",
                                  tags: {
                                    a!tagItem(
                                      text: fv!item.tag,
                                      backgroundColor: "#EDEEF2",
                                      textColor: "#2E2E35"
                                    )
                                  },
                                  size: "SMALL",
                                  marginBelow: "NONE"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem()
                            },
                            alignVertical: "BOTTOM",
                            spacing: "",
                            marginAbove: "STANDARD",
                            marginBelow: "LESS"
                          )
                        },
                        link: if(
                          fv!index = local!selectedTab,
                          {},
                          a!dynamicLink(
                            value: fv!index,
                            saveInto: local!selectedTab
                          )
                        ),
                        height: "AUTO",
                        style: "NONE",
                        padding: "EVEN_LESS",
                        marginBelow: "NONE",
                        showBorder: false,
                        decorativeBarPosition: "BOTTOM",
                        decorativeBarColor: if(
                          fv!index = local!selectedTab,
                          "ACCENT",
                          local!backgroundColor
                        ),
                        accessibilityText: if(
                          fv!index = local!selectedTab,
                          "Current Selection",
                          ""
                        )
                      )
                    },
                    width: "NARROW"
                  )
                }
              )
            },
            marginBelow: "NONE",
            spacing: "NONE",
            showDividers: false
          )
        },
        height: "AUTO",
        style: "NONE",
        padding: "NONE",
        marginBelow: "NONE",
        showBorder: false,
        showShadow: false
      ),
      a!cardLayout(padding: "NONE"),
      a!cardLayout(
        contents: {},
        height: "AUTO",
        style: "NONE",
        padding: "STANDARD",
        marginBelow: "STANDARD",
        showBorder: false
      )
    },
    height: "AUTO",
    style: "NONE",
    shape: "SEMI_ROUNDED",
    padding: "NONE",
    marginBelow: "STANDARD",
    showBorder: false,
    showShadow: true
  )
)
```

#### Chart Toggle Using Tabs

```
a!sectionLayout(
  label: "",
  contents: {
    a!columnsLayout(
      columns: {
        a!columnLayout(
          width: "3X",
          contents: a!sectionLayout(
            label: "Users by Funding",
            labelColor: "STANDARD",
            labelSize: "SMALL",
            marginAbove: "LESS",
            marginBelow: "NONE"
          )
        ),
        a!columnLayout(
          width: "1X",
          contents: a!buttonArrayLayout(
            align: "END",
            buttons: {
              a!buttonWidget(
                label: "",
                size: "SMALL",
                icon: "table",
                style: "SOLID"
              ),
              a!buttonWidget(
                label: "",
                size: "SMALL",
                icon: "area-chart",
                style: "LINK"
              )
            },
            marginBelow: "NONE"
          )
        )
      },
      marginBelow: "LESS"
    ),
    a!cardLayout(
      contents: {
        {
          a!localVariables(
            local!requirement: {
              a!map(
                id: 1,
                name: "Kari Becker",
                dept: "Contracting Officer",
                icon: "$11,234.00"
              ),
              a!map(
                id: 2,
                name: "Tom Smith",
                dept: "Contracting Officer",
                icon: "$11,234.00"
              ),
              a!map(
                id: 3,
                name: "Bree Mercer",
                dept: "Contracting Officer",
                icon: "$11,234.00"
              ),
              a!map(
                id: 4,
                name: "Kevin Lu",
                dept: "Contracting Officer",
                icon: "$11,234.00"
              ),
              a!map(
                id: 5,
                name: "Diana Hellstrom",
                dept: "Contracting Officer",
                icon: "$11,234.00"
              ),
              a!map(
                id: 6,
                name: "Francois Morin",
                dept: "Contracting Officer",
                icon: "$11,234.00"
              ),
              a!map(
                id: 7,
                name: "Maya Kapoor",
                dept: "Contracting Officer",
                icon: "$11,234.00"
              )
            },
            {
              a!sectionLayout(
                label: "",
                contents: {
                  a!gridField(
                    /* Replace the dummy data with a query, rule, or function that returns a datasubset and uses fv!pagingInfo as the paging configuration. */
                    data: todatasubset(local!requirement, fv!pagingInfo),
                    columns: {
                      a!gridColumn(
                        label: "Assignment",
                        value: a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: { a!richTextItem(text: fv!row.name) }
                        )
                      ),
                      a!gridColumn(label: "Role", value: fv!row.dept),
                      a!gridColumn(
                        label: "Total Funding",
                        value: fv!row.icon
                      )
                    },
                    pageSize: 10,
                    shadeAlternateRows: false,
                    rowHeader: 1
                  )
                },
                marginBelow: "EVEN_LESS"
              )
            }
          )
        }
      },
      height: "AUTO",
      style: "NONE",
      padding: "STANDARD",
      shape: "SEMI_ROUNDED",
      marginBelow: "STANDARD",
      showBorder: false,
      showShadow: true
    )
  }
)
```
