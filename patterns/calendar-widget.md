---
status: "stable"
last_updated: "2023-2-16"
---

# Calendar Widget

Calendar Widgets are used to display a calendar / scheduling interaction

## Design
![](https://github.com/user-attachments/assets/ec865f0d-3d3d-4db8-ad91-d87baa2c1669)

## Development

```
a!cardLayout(
  contents: {
    a!cardLayout(
      contents: {
        a!columnsLayout(
          marginAbove: "EVEN_LESS",
          columns: {
            a!columnLayout(
              contents: {
                a!sectionLayout(
                  label: "Mar 1 Wednesday",
                  labelSize: "SMALL",
                  labelHeadingTag: "H2",
                  labelColor: "STANDARD",
                  contents: {},
                  marginAbove: "EVEN_LESS",
                  marginBelow: "NONE"
                )
              },
              width: "2X"
            ),
            a!columnLayout(
              contents: {
                a!richTextDisplayField(
                  labelPosition: "COLLAPSED",
                  value: {
                    a!richTextIcon(
                      icon: "angle-left",
                      color: "SECONDARY",
                      size: "MEDIUM"
                    ),
                    a!richTextItem(text: { "    " }, size: "MEDIUM"),
                    a!richTextIcon(
                      icon: "angle-right",
                      color: "ACCENT",
                      size: "MEDIUM"
                    )
                  },
                  align: "RIGHT",
                  marginBelow: "NONE"
                )
              },
              width: ""
            )
          },
          marginBelow: "NONE"
        ),
        /*a!sideBySideLayout(*/
        /*items: {*/
        /*a!sideBySideItem(*/
        /*item: a!richTextDisplayField(*/
        /*labelPosition: "COLLAPSED",*/
        /*value: {*/
        /*a!richTextHeader(text: { "Mar 1 Wednesday" })*/
        /*}*/
        /*)*/
        /*),*/
        /*a!sideBySideItem(*/
        /*item: a!richTextDisplayField(*/
        /*labelPosition: "COLLAPSED",*/
        /*value: {*/
        /*a!richTextIcon(*/
        /*icon: "angle-left",*/
        /*color: "SECONDARY",*/
        /*size: "MEDIUM"*/
        /*),*/
        /*a!richTextItem(text: { "    " }, size: "MEDIUM"),*/
        /*a!richTextIcon(*/
        /*icon: "angle-right",*/
        /*color: "ACCENT",*/
        /*size: "MEDIUM"*/
        /*)*/
        /*}*/
        /*),*/
        /*width: "MINIMIZE"*/
        /*)*/
        /*},*/
        /*alignVertical: "MIDDLE"*/
        /*)*/
      },
      height: "AUTO",
      style: "NONE",
      shape: "SEMI_ROUNDED",
      marginBelow: "NONE",
      showBorder: false
    ),
    {
      a!localVariables(
        local!employees: {
          a!map(
            id: 1,
            name: "Elizabeth Ward",
            dept: "Engineering",
            role: "Senior Engineer",
            team: "Front-End Components",
            pto: 15,
            startDate: today() - 500
          ),
          a!map(
            id: 2,
            name: "Michael Johnson",
            dept: "Finance",
            role: "Payroll Manager",
            team: "Accounts Payable",
            pto: 2,
            startDate: today() - 100
          ),
          a!map(
            id: 3,
            name: "John Smith",
            dept: "Engineering",
            role: "Quality Engineer",
            team: "User Acceptance Testing",
            pto: 5,
            startDate: today() - 1000
          ),
          a!map(
            id: 4,
            name: "Diana Hellstrom",
            dept: "Engineering",
            role: "UX Designer",
            team: "User Experience",
            pto: 49,
            startDate: today() - 1200
          ),
          a!map(
            id: 5,
            name: "Francois Morin",
            dept: "Sales",
            role: "Account Executive",
            team: "Commercial North America",
            pto: 15,
            startDate: today() - 700
          ),
          a!map(
            id: 6,
            name: "Maya Kapoor",
            dept: "Sales",
            role: "Regional Director",
            team: "Front-End Components",
            pto: 15,
            startDate: today() - 1400
          ),
          a!map(
            id: 7,
            name: "Anthony Wu",
            dept: "Human Resources",
            role: "Benefits Coordinator",
            team: "Accounts Payable",
            pto: 2,
            startDate: today() - 300
          )
        },
        /* This variable is used to pass the full row of data on the selected item to the part of the interface showing the details of the selected item. */
        /* Here we are pre-selecting a row by indexing into the sample data; however, the data for the pre-selected row would typically be passed in as a *
                     * rule input or generated with a query.                                                                                                          */
        local!selectedEmployee: local!employees[4],
        {
          a!columnsLayout(
            columns: {
              a!columnLayout(
                contents: {
                  a!gridLayout(
                    label: "Calendar",
                    labelPosition: "COLLAPSED",
                    headerCells: {
                      a!gridLayoutHeaderCell(label: "Su", align: "CENTER"),
                      a!gridLayoutHeaderCell(label: "M", align: "CENTER"),
                      a!gridLayoutHeaderCell(label: "Tu", align: "CENTER"),
                      a!gridLayoutHeaderCell(label: "W", align: "CENTER"),
                      a!gridLayoutHeaderCell(label: "Th", align: "CENTER"),
                      a!gridLayoutHeaderCell(label: "F", align: "CENTER"),
                      a!gridLayoutHeaderCell(label: "Sa", align: "CENTER")
                    },
                    columnConfigs: {
                      a!gridLayoutColumnConfig(width: "ICON"),
                      a!gridLayoutColumnConfig(width: "ICON"),
                      a!gridLayoutColumnConfig(width: "ICON"),
                      a!gridLayoutColumnConfig(width: "ICON"),
                      a!gridLayoutColumnConfig(width: "ICON"),
                      a!gridLayoutColumnConfig(width: "ICON"),
                      a!gridLayoutColumnConfig(width: "ICON")
                    },
                    rows: {
                      a!gridRowLayout(
                        contents: {
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(
                                text: "28",
                                color: "SECONDARY",
                                size: "SMALL"
                              )
                            },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(
                                text: "29",
                                color: "SECONDARY",
                                size: "SMALL"
                              )
                            },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(
                                text: "30",
                                color: "SECONDARY",
                                size: "SMALL"
                              )
                            },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(
                                text: {
                                  "1 "
                                  /*a!richTextIcon(*/
                                  /*icon: "circle",*/
                                  /*color: "ACCENT",*/
                                  /*size: "SMALL"*/
                                  /*                                                                                    */
                                  /*)*/

                                },
                                color: "ACCENT",
                                size: "SMALL",
                                style: "STRONG"
                              )
                            },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: "2", color: "", size: "SMALL")
                            },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: "3", color: "", size: "SMALL")
                            },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: "4", color: "", size: "SMALL")
                            },
                            align: "CENTER"
                          )
                        }
                      ),
                      a!gridRowLayout(
                        contents: {
                          a!richTextDisplayField(
                            value: { a!richTextItem(text: "5", size: "SMALL") },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: { a!richTextItem(text: "6", size: "SMALL") },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: { a!richTextItem(text: "7", size: "SMALL") },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: { "8" }, color: "", size: "SMALL")
                            },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: "9", color: "", size: "SMALL")
                            },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: "10", color: "", size: "SMALL")
                            },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: "11", color: "", size: "SMALL")
                            },
                            align: "CENTER"
                          )
                        }
                      ),
                      a!gridRowLayout(
                        contents: {
                          a!richTextDisplayField(
                            value: { a!richTextItem(text: "12", size: "SMALL") },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: { a!richTextItem(text: "13", size: "SMALL") },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: { a!richTextItem(text: "14", size: "SMALL") },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: { "15" }, color: "", size: "SMALL")
                            },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: "16", color: "", size: "SMALL")
                            },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: "17", color: "", size: "SMALL")
                            },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: "18", color: "", size: "SMALL")
                            },
                            align: "CENTER"
                          )
                        }
                      ),
                      a!gridRowLayout(
                        contents: {
                          a!richTextDisplayField(
                            value: { a!richTextItem(text: "19", size: "SMALL") },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: { a!richTextItem(text: "20", size: "SMALL") },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: { a!richTextItem(text: "21", size: "SMALL") },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: { "22" }, color: "", size: "SMALL")
                            },
                            align: "CENTER"
                          ),
                          /*a!tagField(*/
                          /*tags: a!tagItem(*/
                          /*text: "23"*/
                          /*),*/
                          /*size: "SMALL",*/
                          /*align: "CENTER",*/
                          /*accessibilityText: "Cases due on this date"*/
                          /*),*/
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(
                                text: {
                                  "23 "
                                  /*a!richTextIcon(*/
                                  /*icon: "circle",*/
                                  /*color: "ACCENT",*/
                                  /*size: "SMALL"*/
                                  /*)*/

                                },
                                color: "ACCENT",
                                size: "SMALL",
                                style: "STRONG"
                              )
                            },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: "24", color: "", size: "SMALL")
                            },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: "25", color: "", size: "SMALL")
                            },
                            align: "CENTER"
                          )
                        }
                      ),
                      a!gridRowLayout(
                        contents: {
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: "26", color: "", size: "SMALL")
                            },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: "27", color: "", size: "SMALL")
                            },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: "28", color: "", size: "SMALL")
                            },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: { "29" }, color: "", size: "SMALL")
                            },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: { "30" }, color: "", size: "SMALL")
                            },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: "31", color: "", size: "SMALL")
                            },
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(
                                text: "1",
                                color: "SECONDARY",
                                size: "SMALL"
                              )
                            },
                            align: "CENTER"
                          )
                        }
                      )
                    },
                    selectionSaveInto: {},
                    validations: {},
                    shadeAlternateRows: true,
                    borderStyle: "LIGHT"
                  ),
                  a!cardLayout(
                    contents: {
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { a!richTextIcon(icon: "calendar-week") },
                            color: "SECONDARY",
                            style: { "STRONG" }
                          ),
                          a!richTextItem(text: { " " }, style: { "STRONG" }),
                          "Due This Month"
                        },
                        marginAbove: "NONE"
                      ),
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: {
                              "WEDNESDAY 03/01/2022"
                            },
                            color: "STANDARD",
                            size: "SMALL"
                          )
                        },
                        marginAbove: "NONE"
                      ),
                      a!cardLayout(
                        contents: {
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: { "CUS-003 Due" },
                                color: "#2322f0",
                                style: { "STRONG" }
                              ),
                              char(10),
                              a!richTextItem(
                                text: {
                                  a!richTextIcon(icon: "archive"),
                                  " Operations"
                                },
                                color: "SECONDARY",
                                size: "SMALL"
                              ),
                              char(10)
                            }
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        marginBelow: "STANDARD",
                        showBorder: false,
                        decorativeBarPosition: "START",
                        decorativeBarColor: "ACCENT"
                      ),
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: {
                              "THURSDAY 03/23/2022"
                            },
                            color: "STANDARD",
                            size: "SMALL"
                          )
                        },
                        marginAbove: "NONE"
                      ),
                      a!cardLayout(
                        contents: {
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: { "CUS-004 Due" },
                                color: "#2322f0",
                                style: { "STRONG" }
                              ),
                              char(10),
                              a!richTextItem(
                                text: {
                                  a!richTextIcon(icon: "archive"),
                                  " Operations"
                                },
                                color: "SECONDARY",
                                size: "SMALL"
                              ),
                              char(10)
                            }
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        marginBelow: "STANDARD",
                        showBorder: false,
                        decorativeBarPosition: "START",
                        decorativeBarColor: "ACCENT"
                      ),
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { "View All" },
                            color: "ACCENT",
                            size: "SMALL",
                            style: { "STRONG" }
                          )
                        },
                        marginAbove: "NONE"
                      )
                    },
                    height: "AUTO",
                    style: "NONE",
                    marginBelow: "EVEN_LESS",
                    showBorder: false
                  )
                }
              )
            },
            stackWhen: { "PHONE", "TABLET_PORTRAIT" }
          )
        }
      )
    }
  },
  height: "AUTO",
  style: "NONE",
  shape: "SEMI_ROUNDED",
  padding: "NONE",
  marginBelow: "NONE",
  showBorder: false,
  showShadow: true
)
```
