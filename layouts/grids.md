---
status: "stable"
last_updated: "2024-12-19"
---

# Grids
Display tabular information in a scannable and digestible format
![](https://github.com/user-attachments/assets/69c875e4-59f6-432b-9517-4810ac2b86d7)


## Design
![](https://github.com/user-attachments/assets/69c875e4-59f6-432b-9517-4810ac2b86d7)

In a full page

![](https://github.com/user-attachments/assets/97af65da-18e5-43ed-bc51-ca0a004007b5)

In a page section layout
<br></br>

Grids serve as containers for displaying record information. Great grid design allows users to quickly scan, sort, compare, and take action on large amounts of data.

At its foundation, every grid will have column headers, rows of data, and pagination. Most grids will also include search and filter functionality, sorting capabilities, and record actions. Grids can take up a full page or be placed within a page section layout. They can either be read-only or editable, depending on whether users are meant to be viewing or updating the grid content.

Checklist:
|Item|Type|
|--- |--- |
|Use the a!gridField component for a read-only grid|Layout|
|Use the a!gridLayout component for an editable grid|Layout|
|Minimize content sprawl across the grid by putting more than one field in one column (e.g.: Last updated and user who updated can be in the same column)|Layout|
|Set preventTextWrapping to true for columns with long read-only text using the a!RichTextDisplayField() component|Layout|
|Set a fixed grid column width for icons and center align the rich text icon within the column|Layout|
|Avoid using the “Dense” spacing option|Styling|
|Use the “Light” border style by default, but “Standard” when sorting is involved to clearly identify which column is being sorted on|Styling|
|Shade alternate rows for full-page grids to enhance readability. For grids with a smaller batch size (e.g. 5), it is not necessary to shade alternate rows.|Styling|
|Avoid shading alternate rows when secondary text are used on a grid due to accessibility concerns with color contrast. Only use colors that pass color contrast against the shaded row background color for rich text icons.|Styling|
|For multi-row selections, set the selection styling to checkbox. Avoid using the row highlight style.|Styling|
|Avoid using row highlight as the selection styling when the row contains links or actions|Styling|
|Use row highlight for single-row selection grids|Styling|
|For full page grids, use 25 as the batch size|Pagination|
|For grids in larger sections, use 10 as the batch size|Pagination|
|For grids within smaller cards, use 5 as the batch size|Pagination|
|Apply a default sort order such that the most important information shows up at the top of the list (e.g.: most recent updated first)|Search, Filter and Sort|
|Provide commonly used filters to let users narrow down the list to what they are looking for|Search, Filter and Sort|
|Match the filter order to the order of the grid columns|Search, Filter and Sort|
|Use the menu style for record actions if there is only one action that applies to a grid row|Record Actions|
|Use the menu (icon) style if there are multiple actions that apply to a grid row|Record Actions|
|If most of the record actions can be bulk applied to multiple rows, display them as buttons above a selectable grid|Record Actions|
|If the title specifies the entity, avoid mentioning that in the button label. For example: if the tab name is Line items, then the button label should be "Import" and not "Import Line Items"|Record Actions|
|For guidance on phrasing record actions, see Voice and Tone|Record Actions|
|Left align text, including icons and secondary text|Column Alignments|
|Right align dollar and numeric amounts|Column Alignments|
|Left align ID and phone numbers|Column Alignments|
|Left align dates, date ranges and timestamps if an icon is used, otherwise keep it right aligned|Column Alignments|
|Ensure that every cell must have an icon if status icons are to be used for overdue items. By default, use the “calendar-o” icon in gray 3 color with a caption that says “Due”. Reference the Icons page for more guidance on using icons to signify date stat|Column Alignments|
|Left align tags and use "Standard" size|Column Alignments|
|Center align rich text icon links, buttons and record actions|Column Alignments|
|Left align user profile images|Column Alignments|
|Left align input fields|Column Alignments|
|Use hyphen (-) when displaying cells with no value|Empty States|
|For full page grids, use a custom illustration or stamp / icon with a message that explains how the user can take action to populate the grid. Because the text clearly states the message, do not provide a text alternative or caption for the image / stamp|Empty States|
|For grids within smaller section layouts or card containers, use the out of the box empty state message (e.g.: “No [objects] available”)|Empty States|
|Try to have at most 6 columns. To maximize the use of available space, use text formatting to consolidate logical groupings of fields into a grid column or minimize the number of columns to the ones necessary.|Column Alignments|
|Keep column labels to a minimum. Avoid wrapping of labels. Use a tooltip to provide additional context if necessary.|Column Alignments|
|Use the Rich Text Component's PreventWrapping parameter to optimize column widths especially for values with long text|Styling|

## Development

### Page Section Grid

```
a!headerContentLayout(
  backgroundColor: "#FAFAFC",
  contents: a!columnsLayout(
    columns: {
      /* Main Content Column */
      a!columnLayout(
        width: "AUTO",
        contents: {
          a!sectionLayout(
            contents: {
              /* Top Overview Section */
              a!columnsLayout(
                showDividers: true,
                marginBelow: "MORE",
                columns: {
                  a!columnLayout(
                    contents: {
                      a!richTextDisplayField(
                        value: {
                          a!richTextItem(text: "Status", style: "STRONG"),
                          a!richTextItem(text: char(10)),
                          a!richTextItem(text: "Draft", style: "PLAIN")
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
                            text: "Period of Performance",
                            style: "STRONG"
                          ),
                          a!richTextItem(text: char(10)),
                          a!richTextItem(
                            text: "Nov 26, 2023 - Nov 30, 2034",
                            style: "PLAIN"
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
                          a!richTextItem(text: "Total Amount", style: "STRONG"),
                          a!richTextItem(text: char(10)),
                          a!richTextItem(text: "$394,429,745.4", style: "PLAIN")
                        },
                        align: "LEFT"
                      )
                    }
                  )
                }
              )
            }
          ),
          a!sectionLayout(
            label: "Checklist Tasks",
            labelSize: "SMALL",
            labelHeadingTag: "H2",
            labelColor: "STANDARD",
            contents: a!cardLayout(
              shape: "SEMI_ROUNDED",
              borderColor: "#EDEEFA",
              contents: {
                /* Filters section:
                  * Uses a!columnsLayout to place filter fields side-by-side.
                  * These filters would typically be defined in the userFilters parameter in the a!gridField()
                  * Filters would be defined based on record filter references 
                */
                a!columnsLayout(
                  marginBelow: "NONE",
                  columns: {
                    a!columnLayout(
                      contents: {
                        a!sideBySideLayout(
                          marginAbove: "EVEN_LESS",
                          spacing: "DENSE",
                          items: {
                            a!sideBySideItem(
                              item: a!textField(
                                label: "Search Tasks",
                                labelPosition: "COLLAPSED",
                                placeholder: "Search Tasks"
                              )
                            ),
                            a!sideBySideItem(
                              width: "MINIMIZE",
                              item: a!buttonArrayLayout(
                                buttons: a!buttonWidget(
                                  label: "SEARCH",
                                  style: "OUTLINE",
                                  color: "SECONDARY",
                                  size: "SMALL",
                                  saveInto: {}/* No action for mockup */

                                )
                              )
                            )
                          }
                        )
                      }
                    ),
                    a!columnLayout(
                      contents: {
                        a!dropdownField(
                          marginAbove: "EVEN_LESS",
                          label: "Select an Assignee",
                          labelPosition: "COLLAPSED",
                          placeholder: "Select an Assignee",
                          choiceLabels: { "Assignee 1", "Assignee 2" },
                          choiceValues: { "Assignee 1", "Assignee 2" },
                          value: null,
                          saveInto: {}
                        )
                      }
                    )
                  }
                ),
                a!buttonArrayLayout(
                  buttons: {
                    a!buttonWidget(
                      label: "ADD CHECKLIST",
                      icon: "plus",
                      style: "OUTLINE",
                      color: "SECONDARY",
                      saveInto: {}
                    ),
                    a!buttonWidget(
                      label: "MARK COMPLETE",
                      icon: "check",
                      style: "OUTLINE",
                      color: "SECONDARY",
                      disabled: true,
                      saveInto: {}
                    ),
                    a!buttonWidget(
                      label: "MARK NOT NEEDED",
                      style: "OUTLINE",
                      icon: "times",
                      color: "SECONDARY",
                      disabled: true,
                      saveInto: {}
                    ),
                    a!buttonWidget(
                      label: "REASSIGN",
                      icon: "hand-o-right",
                      style: "OUTLINE",
                      color: "SECONDARY",
                      disabled: true,
                      saveInto: {}
                    ),
                    a!buttonWidget(
                      label: "CLAIM ITEM",
                      icon: "user-plus",
                      style: "OUTLINE",
                      color: "SECONDARY",
                      disabled: true,
                      saveInto: {}
                    ),
                    a!buttonWidget(
                      label: "CANCEL",
                      icon: "ban",
                      style: "OUTLINE",
                      color: "SECONDARY",
                      disabled: true,
                      saveInto: {}
                    )
                  },
                  align: "START"
                ),
                a!gridField(
                  selectable: true,
                  showSearchBox: {}, /* This parameter is typically where you'd define the search field */
                  userFilters: {}, /* This parameter is typically where you'd define grid filters */
                  data: {
                    /*
                     * Sample checklist data. In a real application, this data would typically come
                     * from a database query (e.g., a!queryEntity).
                    */
                    a!map(
                      task: "Schedule kick off",
                      dueDate: "Aug 30, 2023",
                      type: "Confirmation",
                      assignee: "Sara Daniels",
                      icon: "stamp",
                      color: "#31808B"
                    ),
                    a!map(
                      task: "Review SOW",
                      dueDate: "Aug 30, 2023",
                      type: "Review",
                      assignee: "Sara Daniels",
                      icon: "user-check",
                      color: "#962FEA"
                    ),
                    a!map(
                      task: "Establish timeframes",
                      dueDate: "Aug 30, 2023",
                      type: "Confirmation",
                      assignee: "Sara Daniels",
                      icon: "stamp",
                      color: "#31808B"
                    ),
                    a!map(
                      task: "Send Pricing",
                      dueDate: "Aug 30, 2023",
                      type: "Attach Document",
                      assignee: "Sara Daniels",
                      icon: "link",
                      color: "#115EBB"
                    ),
                    a!map(
                      task: "Develop Task List",
                      dueDate: "Aug 30, 2023",
                      type: "Create Document from Template",
                      assignee: "Sara Daniels",
                      icon: "copy",
                      color: "#CC7600"
                    )
                  },
                  columns: {
                    a!gridColumn(
                      label: "Task",
                      value: a!richTextDisplayField(
                        value: a!richTextItem(
                          text: fv!row.task,
                          link: a!dynamicLink(),
                          linkStyle: "STANDALONE"
                        )
                      )
                    ),
                    a!gridColumn(label: "Due Date", value: fv!row.dueDate),
                    a!gridColumn(
                      label: "Type",
                      value: a!richTextDisplayField(
                        value: {
                          a!richTextIcon(icon: fv!row.icon, color: fv!row.color),
                          " ",
                          fv!row.type
                        }
                      )
                    ),
                    a!gridColumn(label: "Assignee", value: fv!row.assignee),
                    a!gridColumn(
                      label: "",
                      width: "ICON",
                      /* For the three dots icon */
                      value: a!richTextDisplayField(
                        value: a!richTextIcon(icon: "ellipsis-v", color: "SECONDARY")
                      )
                    )
                  }
                )
              }
            )
          )
        }
      ),
      a!columnLayout(
        width: "NARROW_PLUS",
        contents: {
          a!sectionLayout(
            label: "Details",
            labelSize: "SMALL",
            labelHeadingTag: "H2",
            labelColor: "STANDARD",
            contents: a!cardLayout(
              shape: "SEMI_ROUNDED",
              borderColor: "#EDEEFA",
              padding: "STANDARD",
              contents: {
                a!richTextDisplayField(
                  marginBelow: "NONE",
                  value: {
                    a!richTextItem(
                      text: "Purchase Requisition Number",
                      color: "SECONDARY",
                      size: "SMALL"
                    ),
                    a!richTextItem(text: char(10)),
                    a!richTextItem(text: "1999382", style: "PLAIN")
                  },
                  align: "LEFT"
                ),
                a!richTextDisplayField(
                  marginBelow: "NONE",
                  value: {
                    a!richTextItem(
                      text: "Authority",
                      color: "SECONDARY",
                      size: "SMALL"
                    ),
                    a!richTextItem(text: char(10)),
                    a!richTextItem(
                      text: "Brand New Description (62.03)",
                      style: "PLAIN"
                    )
                  },
                  align: "LEFT"
                ),
                a!richTextDisplayField(
                  marginBelow: "NONE",
                  value: {
                    a!richTextItem(
                      text: "Type",
                      color: "SECONDARY",
                      size: "SMALL"
                    ),
                    a!richTextItem(text: char(10)),
                    a!richTextItem(text: "Prototype", style: "PLAIN")
                  },
                  align: "LEFT"
                ),
                a!richTextDisplayField(
                  value: {
                    a!richTextItem(
                      text: "Effective Date",
                      color: "SECONDARY",
                      size: "SMALL"
                    ),
                    a!richTextItem(text: char(10)),
                    a!richTextItem(text: "09/03/2023", style: "PLAIN"),
                    a!richTextItem(text: char(10))
                  },
                  align: "LEFT"
                ),
                a!richTextDisplayField(
                  align: "CENTER",
                  value: {
                    a!richTextItem(
                      text: "View All",
                      link: a!dynamicLink(),
                      linkStyle: "STANDALONE"
                    )
                  }
                )
              }
            )
          ),
          a!sectionLayout(
            label: "Funding",
            labelSize: "SMALL",
            labelHeadingTag: "H2",
            labelColor: "STANDARD",
            contents: a!cardLayout(
              shape: "SEMI_ROUNDED",
              borderColor: "#EDEEFA",
              padding: "STANDARD",
              contents: {
                /* Placeholder for funding progress bar and details */
                a!progressBarField(
                  label: "Progress",
                  labelPosition: "COLLAPSED",
                  percentage: 75,
                  style: "THICK",
                  showPercentage: false,
                  color: "ACCENT"
                ),
                a!richTextDisplayField(
                  value: {
                    a!richTextItem(text: "Obligated Amount", style: "PLAIN"),
                    a!richTextItem(text: char(10)),
                    a!richTextItem(text: "$394,429,745.4", style: "STRONG")
                  },
                  align: "LEFT"
                )
              }
            )
          )
        }
      )
    }
  )
)
```

### Full Grid with Side Content
```
a!headerContentLayout(
  header: {},
  contents: {
    a!columnsLayout(
      columns: {
        a!columnLayout(
          contents: {
            a!sectionLayout(
              label: "Active Awards",
              labelSize: "SMALL",
              labelHeadingTag: "H2",
              labelColor: "STANDARD",
              contents: {
                a!cardLayout(
                  contents: {
                    a!columnsLayout(
                      columns: {
                        a!columnLayout(
                          contents: {
                            a!pickerFieldCustom(
                              labelPosition: "COLLAPSED",
                              placeholder: "Search Awards"
                            )
                          },
                          width: "NARROW_PLUS"
                        ),
                        a!columnLayout(
                          contents: {
                            a!dropdownField(
                              labelPosition: "COLLAPSED",
                              placeholder: "Select Contracting Officer(s)"
                            )
                          },
                          width: "NARROW_PLUS"
                        ),
                        a!columnLayout(
                          contents: {
                            a!dropdownField(
                              labelPosition: "COLLAPSED",
                              placeholder: "Select Contracting Specialist(s)"
                            )
                          },
                          width: "NARROW_PLUS"
                        ),
                        a!columnLayout(
                          contents: {
                            a!sideBySideLayout(
                              items: {
                                a!sideBySideItem(
                                  item: a!dateField(labelPosition: "COLLAPSED")
                                ),
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(labelPosition: "COLLAPSED", value: { "to" }),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!dateField(labelPosition: "COLLAPSED")
                                )
                              },
                              alignVertical: "MIDDLE"
                            )
                          },
                          width: "NARROW_PLUS"
                        )
                      },
                      marginAbove: "EVEN_LESS"
                    ),
                    a!buttonArrayLayout(
                      buttons: {
                        a!buttonWidget(
                          label: "Add",
                          icon: "plus",
                          size: "SMALL",
                          style: "OUTLINE",
                          color: "SECONDARY"
                        ),
                        a!buttonWidget(
                          label: "Import",
                          icon: "upload",
                          size: "SMALL",
                          style: "OUTLINE",
                          color: "SECONDARY"
                        ),
                        a!buttonWidget(
                          label: "Update",
                          icon: "pencil-square-o",
                          size: "SMALL",
                          style: "OUTLINE",
                          color: "SECONDARY",
                          disabled: true
                        )
                      },
                      align: "START",
                      marginBelow: "STANDARD"
                    ),
                    a!gridField(
                      label: "Employee Directory",
                      labelPosition: "COLLAPSED",
                      /* Replace the dummy data with a query, rule, or function that returns a datasubset and uses fv!pagingInfo as the paging configuration. */
                      data: todatasubset(
                        {
                          a!map(
                            id: 11,
                            award_name: "",
                            company: "Sherwood Avionics Inc",
                            amount: "$546,988.00",
                            text_color: "NEGATIVE",
                            tag_color: "#FFD8D8",
                            tag_text_color: "#800322",
                            risk_color: "#E2143F",
                            risk_icon: "clock-o",
                            risk: "Expired 2 days ago",
                            award: "Expired",
                            icon: "spinner",
                            color: "SECONDARY",
                            name: "80AFRC17F0239",
                            cs: "Kevin Lu",
                            dept: "Theresa Jones",
                            role: "Type 1",
                            team: "Front-End Components",
                            pto: 15,
                            startDate: "01/01/2020 - 12/31/2021"
                          ),
                          a!map(
                            id: 22,
                            company: "Lockheed Martin Corporation",
                            amount: "$288,471,393.48",
                            text_color: "",
                            tag_color: "#FFF6C9",
                            tag_text_color: "#7E5D0F",
                            risk_color: "#FFDC3F",
                            risk_icon: "clock-o",
                            risk: "Expires in 30 days",
                            award: "Expires soon",
                            icon: "spinner",
                            color: "SECONDARY",
                            name: "80AFRC17P0011",
                            dept: "Theresa Jones",
                            cs: "Kevin Lu",
                            role: "Type 2",
                            team: "Accounts Payable",
                            pto: 2,
                            startDate: "01/01/2020 - 12/31/2021"
                          ),
                          a!map(
                            id: 33,
                            company: "Lockheed Martin Corporation",
                            amount: "$3,224,578.50",
                            text_color: "",
                            tag_color: "#FFF6C9",
                            tag_text_color: "#7E5D0F",
                            risk_color: "#FFDC3F",
                            risk_icon: "clock-o",
                            risk: "Expires in 60 days",
                            award: "Expires soon",
                            icon: "check-circle",
                            color: "POSITIVE",
                            name: "80AFRC18C0018",
                            cs: "Kevin Lu",
                            dept: "Charles Parker",
                            role: "Type 3",
                            team: "User Acceptance Testing",
                            pto: 5,
                            startDate: "01/01/2020 - 12/31/2021"
                          ),
                          a!map(
                            id: 44,
                            company: "Blue Origin LLC.",
                            amount: "$109,129.36",
                            text_color: "",
                            risk_color: "SECONDARY",
                            risk_icon: "clock-o",
                            risk: "Expires in 67 days ago",
                            award: "",
                            icon: "check-circle",
                            color: "POSITIVE",
                            name: "80AFRC18C0036",
                            dept: "Charles Parker",
                            role: "Type 4",
                            cs: "Anne Williams",
                            team: "User Experience",
                            pto: 49,
                            startDate: "01/01/2020 - 12/31/2021"
                          ),
                          a!map(
                            id: 55,
                            company: "Cutting Edge Concrete Services, Inc.",
                            amount: "$11,712,193.32",
                            text_color: "",
                            risk_color: "SECONDARY",
                            risk_icon: "clock-o",
                            risk: "Expires in 90 days ago",
                            award: "",
                            icon: "check-circle",
                            color: "POSITIVE",
                            name: "80AFRC18F0085",
                            dept: "Charles Parker",
                            cs: "Anne Williams",
                            role: "Type 5",
                            team: "Commercial North America",
                            pto: 15,
                            startDate: "01/01/2020 - 12/31/2021"
                          ),
                          a!map(
                            id: 66,
                            company: "Integration Innovation Inc.",
                            amount: "$580,870.02",
                            text_color: "",
                            risk_color: "SECONDARY",
                            risk_icon: "clock-o",
                            risk: "Expires in 120 days ago",
                            award: "",
                            icon: "check-circle",
                            color: "POSITIVE",
                            name: "80AFRC18F0100",
                            dept: "Charles Parker",
                            cs: "Anne Williams",
                            role: "Type 6",
                            team: "Front-End Components",
                            pto: 15,
                            startDate: "01/01/2020 - 12/31/2021"
                          ),
                          a!map(
                            id: 77,
                            company: "Development One Inc.",
                            amount: "$29,558.00",
                            text_color: "",
                            risk_color: "SECONDARY",
                            risk_icon: "clock-o",
                            risk: "Expires in 180 days ago",
                            award: "",
                            icon: "check-circle",
                            color: "POSITIVE",
                            name: "80AFRC18F0160",
                            dept: "Charles Parker",
                            role: "Type 7",
                            cs: "Will Robbins",
                            team: "Accounts Payable",
                            pto: 2,
                            startDate: "01/01/2020 - 12/31/2021"
                          ),
                          a!map(
                            id: 44,
                            company: "Rolls Royce Corp.",
                            amount: "$658,000.00",
                            text_color: "",
                            risk_color: "SECONDARY",
                            risk_icon: "clock-o",
                            risk: "Expires in 67 days ago",
                            award: "",
                            icon: "check-circle",
                            color: "POSITIVE",
                            name: "80AFRC18P0007",
                            dept: "Theresa Jones",
                            role: "Type 4",
                            cs: "Will Robbins",
                            team: "User Experience",
                            pto: 49,
                            startDate: "01/01/2020 - 12/31/2021"
                          ),
                          a!map(
                            id: 55,
                            company: "Sherwood Avionics Inc.",
                            amount: "$1,188,748.00",
                            text_color: "",
                            risk_color: "SECONDARY",
                            risk_icon: "clock-o",
                            risk: "Expires in 90 days ago",
                            award: "",
                            icon: "check-circle",
                            color: "POSITIVE",
                            name: "80AFRC18P0021",
                            dept: "Theresa Jones",
                            role: "Type 5",
                            cs: "Will Robbins",
                            team: "Commercial North America",
                            pto: 15,
                            startDate: "01/01/2020 - 12/31/2021"
                          ),
                          a!map(
                            id: 66,
                            company: "Sherwood Avionics Inc",
                            amount: "$500,000,000",
                            text_color: "",
                            risk_color: "SECONDARY",
                            risk_icon: "clock-o",
                            risk: "Expires in 120 days ago",
                            award: "",
                            icon: "check-circle",
                            color: "POSITIVE",
                            name: "80AFRC19C0004",
                            dept: "Jane Doe",
                            role: "Type 6",
                            cs: "Will Robbins",
                            team: "Front-End Components",
                            pto: 15,
                            startDate: "01/01/2020 - 12/31/2021"
                          ),
                          a!map(
                            id: 77,
                            company: "Sherwood Avionics Inc",
                            amount: "$500,000,000",
                            text_color: "",
                            risk_color: "SECONDARY",
                            risk_icon: "clock-o",
                            risk: "Expires in 180 days ago",
                            award: "",
                            icon: "check-circle",
                            color: "POSITIVE",
                            name: "80AFRC19C0013",
                            dept: "Jane Doe",
                            role: "Type 7",
                            cs: "Will Robbins",
                            team: "Accounts Payable",
                            pto: 2,
                            startDate: "01/01/2020 - 12/31/2021"
                          ),
                          a!map(
                            id: 44,
                            company: "Sherwood Avionics Inc",
                            amount: "$500,000,000",
                            text_color: "",
                            risk_color: "SECONDARY",
                            risk_icon: "clock-o",
                            risk: "Expires in 67 days ago",
                            award: "",
                            icon: "check-circle",
                            color: "POSITIVE",
                            name: "80AFRC19C0018",
                            dept: "Jane Doe",
                            role: "Type 4",
                            cs: "Will Robbins",
                            team: "User Experience",
                            pto: 49,
                            startDate: "01/01/2020 - 12/31/2021"
                          ),
                          a!map(
                            id: 55,
                            company: "Sherwood Avionics Inc",
                            amount: "$500,000,000",
                            text_color: "",
                            risk_color: "SECONDARY",
                            risk_icon: "clock-o",
                            risk: "Expires in 90 days ago",
                            award: "",
                            icon: "check-circle",
                            color: "POSITIVE",
                            name: "80AFRC19C0031",
                            dept: "Jane Doe",
                            role: "Type 5",
                            cs: "Will Robbins",
                            team: "Commercial North America",
                            pto: 15,
                            startDate: "01/01/2020 - 12/31/2021"
                          ),
                          a!map(
                            id: 66,
                            company: "Sherwood Avionics Inc",
                            amount: "$500,000,000",
                            text_color: "",
                            risk_color: "SECONDARY",
                            risk_icon: "clock-o",
                            risk: "Expires in 120 days ago",
                            award: "",
                            icon: "check-circle",
                            color: "POSITIVE",
                            name: "80AFRC19F0025",
                            dept: "Jane Doe",
                            role: "Type 6",
                            cs: "Will Robbins",
                            team: "Front-End Components",
                            pto: 15,
                            startDate: "01/01/2020 - 12/31/2021"
                          ),
                          a!map(
                            id: 77,
                            company: "Sherwood Avionics Inc",
                            amount: "$500,000,000",
                            text_color: "",
                            risk_color: "SECONDARY",
                            risk_icon: "clock-o",
                            risk: "Expires in 180 days ago",
                            award: "",
                            icon: "check-circle",
                            color: "POSITIVE",
                            name: "80AFRC19F0164",
                            dept: "Jane Doe",
                            role: "Type 7",
                            team: "Accounts Payable",
                            cs: "Will Robbins",
                            pto: 2,
                            startDate: "01/01/2020 - 12/31/2021"
                          )
                        },
                        fv!pagingInfo
                      ),
                      columns: {
                        a!gridColumn(
                          label: "Award",
                          sortField: "name",
                          value: a!richTextDisplayField(
                            value: {
                              a!richTextItem(
                                text: fv!row.name,
                                color: "ACCENT",
                                style: "STRONG"
                              ),
                              char(10),
                              a!richTextIcon(
                                icon: "building",
                                color: "SECONDARY",
                                size: "SMALL"
                              ),
                              " ",
                              a!richTextItem(
                                text: fv!row.company,
                                color: "SECONDARY",
                                size: "SMALL"
                              )
                            }
                          )
                        ),
                        a!gridColumn(
                          label: "Contracting Officer",
                          value: a!richTextDisplayField(
                            value: { a!richTextItem(text: fv!row.dept) }
                          )
                        ),
                        a!gridColumn(
                          label: "Contracting Specialist",
                          value: a!richTextDisplayField(value: { a!richTextItem(text: fv!row.cs) })
                        ),
                        a!gridColumn(
                          label: "",
                          value: a!tagField(
                            tags: {
                              a!tagItem(
                                text: fv!row.award,
                                backgroundColor: fv!row.tag_color,
                                textColor: fv!row.tag_text_color
                              )
                            },
                            size: ""
                          ),
                          align: "CENTER"
                        ),
                        a!gridColumn(
                          label: "Period of Performance",
                          sortField: "startDate",
                          value: a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: fv!row.startDate, ),
                              char(10),
                              a!richTextIcon(
                                icon: "clock-o",
                                color: fv!row.risk_color,
                                size: "SMALL"
                              ),
                              " ",
                              a!richTextItem(
                                text: fv!row.risk,
                                color: fv!row.text_color,
                                size: "SMALL"
                              )
                            }
                          ),
                          align: "END"
                        ),
                        a!gridColumn(
                          label: "Award Amount",
                          value: a!richTextDisplayField(
                            value: { a!richTextItem(text: fv!row.amount, ) }
                          ),
                          align: "END"
                        )
                      },
                      pageSize: 15,
                      selectable: true,
                      borderStyle: "LIGHT",
                      shadeAlternateRows: false
                    )
                  },
                  height: "AUTO",
                  style: "NONE",
                  shape: "SEMI_ROUNDED",
                  padding: "STANDARD",
                  marginBelow: "NONE",
                  borderColor: "#EDEEFA"
                )
              }
            )
          },
          width: "AUTO"
        ),
        a!columnLayout(
          contents: {
            a!sectionLayout(
              label: "Awards by Status",
              labelSize: "SMALL",
              labelHeadingTag: "H2",
              labelColor: "STANDARD",
              contents: {
                a!cardLayout(
                  contents: {
                    a!sideBySideLayout(
                      items: {
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "ABOVE",
                            value: {
                              a!richTextItem(
                                text: { "112" },
                                color: "#2c3365",
                                size: "LARGE",
                                style: { "STRONG" }
                              ),
                              a!richTextItem(
                                text: {
                                  a!richTextItem(
                                    text: { " " },
                                    size: "MEDIUM",
                                    style: { "STRONG" }
                                  ),
                                  a!richTextItem(text: { "TOTAL ACTIVE" }, size: "STANDARD")
                                },
                                color: "SECONDARY"
                              )
                            },
                            align: "LEFT"
                          )
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            label: "Rich Text",
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextIcon(icon: "circle", color: "#173AB6"),
                              " On Track ",
                              a!richTextItem(text: { "76" }, style: { "STRONG" }),
                              char(10),
                              a!richTextIcon(icon: "circle", color: "#BCC9F3"),
                              " Expiring Soon ",
                              a!richTextItem(text: { "13" }, style: { "STRONG" }),
                              char(10),
                              a!richTextIcon(icon: "circle", color: "#F6A53F"),
                              " Expired ",
                              a!richTextItem(text: { "23" }, style: { "STRONG" })
                            }
                          ),
                          width: "MINIMIZE"
                        )
                      },
                      marginBelow: "NONE"
                    ),
                    a!barChartField_21r4(
                      categories: "Customer Satisfaction",
                      series: {
                        a!chartSeries(label: "Expired", data: { 23 }),
                        a!chartSeries(label: "Expiring Soon", data: { 13 }),
                        a!chartSeries(label: "On Track", data: { 76 })
                      },
                      yAxisMax: 110,
                      stacking: "NORMAL",
                      showLegend: false,
                      showTooltips: true,
                      labelPosition: "ABOVE",
                      colorScheme: a!colorSchemeCustom(
                        colors: {
                          "#173AB6",
                          "#BCC9F3",
                          "#F6A53F",
                          "#FFD393",
                          "#9D4DE3"
                        }
                      ),
                      height: "MICRO",
                      xAxisStyle: "NONE",
                      yAxisStyle: "NONE"
                    )
                  },
                  height: "AUTO",
                  style: "NONE",
                  shape: "SEMI_ROUNDED",
                  padding: "STANDARD",
                  marginBelow: "STANDARD",
                  borderColor: "#EDEEFA"
                )
              }
            ),
            a!sectionLayout(
              label: "Funds Obligated",
              labelSize: "SMALL",
              labelHeadingTag: "H2",
              labelColor: "STANDARD",
              contents: {
                a!cardLayout(
                  contents: {
                    a!sideBySideLayout(
                      items: {
                        a!sideBySideItem(
                          item: a!gaugeField(
                            label: "Gauge",
                            labelPosition: "COLLAPSED",
                            percentage: 80.0,
                            primaryText: a!gaugePercentage(),
                            color: "#173AB6",
                            size: "SMALL"
                          ),
                          width: "MINIMIZE"
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: { "FY 2021" },
                                color: "STANDARD",
                                size: "STANDARD"
                              ),
                              char(10),
                              a!richTextItem(
                                text: { "$400M" },
                                color: "STANDARD",
                                size: "LARGE",
                                style: { "STRONG" }
                              ),
                              a!richTextItem(
                                text: {
                                  a!richTextItem(text: { " " }, style: { "STRONG" }),
                                  a!richTextItem(text: { "/ $500M" }, size: "MEDIUM")
                                },
                                color: "SECONDARY"
                              )
                            }
                          )
                        )
                      },
                      alignVertical: "MIDDLE",
                      spacing: "SPARSE",
                      marginBelow: "NONE"
                    )
                  },
                  height: "AUTO",
                  style: "NONE",
                  shape: "SEMI_ROUNDED",
                  padding: "STANDARD",
                  marginBelow: "STANDARD",
                  borderColor: "#EDEEFA"
                )
              }
            ),
            a!sectionLayout(
              label: "Funds Spent",
              labelSize: "SMALL",
              labelHeadingTag: "H2",
              labelColor: "STANDARD",
              contents: {
                a!cardLayout(
                  contents: {
                    a!sideBySideLayout(
                      items: {
                        a!sideBySideItem(
                          item: a!gaugeField(
                            label: "Gauge",
                            labelPosition: "COLLAPSED",
                            percentage: 62.5,
                            primaryText: a!gaugePercentage(),
                            color: "#173AB6",
                            size: "SMALL"
                          ),
                          width: "MINIMIZE"
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              "FY 2021",
                              char(10),
                              a!richTextItem(
                                text: { "$250M" },
                                color: "STANDARD",
                                size: "LARGE",
                                style: { "STRONG" }
                              ),
                              a!richTextItem(
                                text: {
                                  a!richTextItem(text: { " " }, style: { "STRONG" }),
                                  a!richTextItem(text: { "/ $400M" }, size: "MEDIUM")
                                },
                                color: "SECONDARY"
                              )
                            }
                          )
                        )
                      },
                      alignVertical: "MIDDLE",
                      spacing: "SPARSE",
                      marginBelow: "NONE"
                    )
                  },
                  height: "AUTO",
                  style: "NONE",
                  shape: "SEMI_ROUNDED",
                  padding: "STANDARD",
                  marginBelow: "STANDARD",
                  borderColor: "#EDEEFA"
                )
              },
              marginBelow: "STANDARD"
            ),
            a!sectionLayout(
              label: "Socio-Economic Targets",
              labelSize: "SMALL",
              labelHeadingTag: "H2",
              labelColor: "STANDARD",
              contents: {
                a!cardLayout(
                  contents: {
                    a!sideBySideLayout(
                      items: {
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(text: { "8(a)" }, size: "STANDARD")
                            }
                          )
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: { "$150M" },
                                color: "#173AB6",
                                size: "STANDARD",
                                style: { "STRONG" }
                              ),
                              a!richTextItem(text: { " / $200M" }, size: "STANDARD")
                            }
                          ),
                          width: "MINIMIZE"
                        )
                      },
                      marginAbove: "EVEN_LESS",
                      marginBelow: "LESS"
                    ),
                    a!progressBarField(
                      label: "Progress Bar",
                      labelPosition: "COLLAPSED",
                      percentage: 75,
                      color: "#173AB6",
                      style: "THICK"
                    ),
                    a!sideBySideLayout(
                      items: {
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: { "Small Business" },
                                size: "STANDARD"
                              )
                            }
                          )
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: { "$40M" },
                                color: "#173AB6",
                                size: "STANDARD",
                                style: { "STRONG" }
                              ),
                              a!richTextItem(text: { " / $100M" }, size: "STANDARD")
                            }
                          ),
                          width: "MINIMIZE"
                        )
                      },
                      marginBelow: "LESS"
                    ),
                    a!progressBarField(
                      label: "Progress Bar",
                      labelPosition: "COLLAPSED",
                      percentage: 40,
                      color: "#173AB6",
                      style: "THICK"
                    ),
                    a!sideBySideLayout(
                      items: {
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(text: { "WOSB" }, size: "STANDARD")
                            }
                          )
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: { "$90M" },
                                color: "#173AB6",
                                size: "STANDARD",
                                style: { "STRONG" }
                              ),
                              a!richTextItem(text: { " / $100M" }, size: "STANDARD")
                            }
                          ),
                          width: "MINIMIZE"
                        )
                      },
                      marginBelow: "LESS"
                    ),
                    a!progressBarField(
                      label: "Progress Bar",
                      labelPosition: "COLLAPSED",
                      percentage: 90,
                      color: "#173AB6",
                      style: "THICK"
                    ),
                    a!sideBySideLayout(
                      items: {
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(text: { "SDVOSB" }, size: "STANDARD")
                            }
                          )
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: { "$50M" },
                                color: "#173AB6",
                                size: "STANDARD",
                                style: { "STRONG" }
                              ),
                              a!richTextItem(text: { " / $100M" }, size: "STANDARD")
                            }
                          ),
                          width: "MINIMIZE"
                        )
                      },
                      marginBelow: "LESS"
                    ),
                    a!progressBarField(
                      label: "Progress Bar",
                      labelPosition: "COLLAPSED",
                      percentage: 50,
                      color: "#173AB6",
                      style: "THICK",
                      marginBelow: "LESS"
                    )
                  },
                  height: "AUTO",
                  style: "NONE",
                  shape: "SEMI_ROUNDED",
                  padding: "STANDARD",
                  marginBelow: "STANDARD",
                  borderColor: "#EDEEFA"
                )
              }
            ),
            a!cardLayout(
              contents: {
                a!columnsLayout(
                  columns: {
                    a!columnLayout(
                      contents: {
                        a!pickerFieldCustom(
                          labelPosition: "COLLAPSED",
                          placeholder: "Search To-Dos"
                        )
                      }
                    ),
                    a!columnLayout(
                      contents: {
                        a!dropdownField(
                          label: "Dropdown",
                          labelPosition: "COLLAPSED",
                          placeholder: "Select a Type",
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
                a!buttonArrayLayout(
                  buttons: {
                    a!buttonWidget(
                      label: "Mark complete",
                      icon: "plus",
                      size: "SMALL",
                      style: "SECONDARY",
                      disabled: true
                    )
                  },
                  align: "START",
                  marginBelow: "STANDARD"
                ),
                a!sideBySideLayout(
                  items: {
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { a!richTextIcon(icon: "square-o") },
                            color: "ACCENT",
                            size: "MEDIUM_PLUS",
                            style: { "STRONG" }
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { "Schedule Kickoff Meeting" },
                            size: "STANDARD",
                            style: { "STRONG" }
                          ),
                          char(10),
                          a!richTextItem(
                            text: { "Confirmation  • 80AFRC17F0239" },
                            color: "SECONDARY",
                            size: "SMALL"
                          )
                        },
                        align: "LEFT"
                      )
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextIcon(
                            icon: "exclamation-circle",
                            color: "NEGATIVE",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { " " },
                            color: "STANDARD",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { "-2d " },
                            color: "NEGATIVE",
                            size: "STANDARD"
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    )
                  },
                  alignVertical: "MIDDLE",
                  marginBelow: "STANDARD"
                ),
                a!sideBySideLayout(
                  items: {
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { a!richTextIcon(icon: "square-o") },
                            color: "ACCENT",
                            size: "MEDIUM_PLUS",
                            style: { "STRONG" }
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { "Review SOW" },
                            size: "STANDARD",
                            style: { "STRONG" }
                          ),
                          char(10),
                          a!richTextItem(
                            text: { "Confirmation  • 80AFRC17F0239" },
                            color: "SECONDARY",
                            size: "SMALL"
                          )
                        },
                        align: "LEFT"
                      )
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextIcon(
                            icon: "exclamation-circle",
                            color: "NEGATIVE",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { " " },
                            color: "STANDARD",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { "-2d " },
                            color: "NEGATIVE",
                            size: "STANDARD"
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    )
                  },
                  alignVertical: "MIDDLE",
                  marginBelow: "STANDARD"
                ),
                a!sideBySideLayout(
                  items: {
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { a!richTextIcon(icon: "square-o") },
                            color: "ACCENT",
                            size: "MEDIUM_PLUS",
                            style: { "STRONG" }
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { "Establish timeframes" },
                            size: "STANDARD",
                            style: { "STRONG" }
                          ),
                          char(10),
                          a!richTextItem(
                            text: { "Confirmation  • 80AFRC17F0239" },
                            color: "SECONDARY",
                            size: "SMALL"
                          )
                        },
                        align: "LEFT"
                      )
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextIcon(
                            icon: "exclamation-circle",
                            color: "NEGATIVE",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { " " },
                            color: "STANDARD",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { "-2d " },
                            color: "NEGATIVE",
                            size: "STANDARD"
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    )
                  },
                  alignVertical: "MIDDLE",
                  marginBelow: "STANDARD"
                ),
                a!sideBySideLayout(
                  items: {
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { a!richTextIcon(icon: "square-o") },
                            color: "ACCENT",
                            size: "MEDIUM_PLUS",
                            style: { "STRONG" }
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { "Send Pricing" },
                            size: "STANDARD",
                            style: { "STRONG" }
                          ),
                          char(10),
                          a!richTextItem(
                            text: { "Confirmation  • 80AFRC17F0239" },
                            color: "SECONDARY",
                            size: "SMALL"
                          )
                        },
                        align: "LEFT"
                      )
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextIcon(
                            icon: "exclamation-circle",
                            color: "NEGATIVE",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { " " },
                            color: "STANDARD",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { "-2d " },
                            color: "NEGATIVE",
                            size: "STANDARD"
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    )
                  },
                  alignVertical: "MIDDLE",
                  marginBelow: "STANDARD"
                ),
                a!sideBySideLayout(
                  items: {
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { a!richTextIcon(icon: "square-o") },
                            color: "ACCENT",
                            size: "MEDIUM_PLUS",
                            style: { "STRONG" }
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { "Develop Task List" },
                            size: "STANDARD",
                            style: { "STRONG" }
                          ),
                          char(10),
                          a!richTextItem(
                            text: { "Confirmation  • 80AFRC17F0239" },
                            color: "SECONDARY",
                            size: "SMALL"
                          )
                        },
                        align: "LEFT"
                      )
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextIcon(
                            icon: "exclamation-circle",
                            color: "NEGATIVE",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { " " },
                            color: "STANDARD",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { "-2d " },
                            color: "NEGATIVE",
                            size: "STANDARD"
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    )
                  },
                  alignVertical: "MIDDLE",
                  marginBelow: "STANDARD"
                ),
                a!sideBySideLayout(
                  items: {
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { a!richTextIcon(icon: "square-o") },
                            color: "ACCENT",
                            size: "MEDIUM_PLUS",
                            style: { "STRONG" }
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { "Legal Check" },
                            size: "STANDARD",
                            style: { "STRONG" }
                          ),
                          char(10),
                          a!richTextItem(
                            text: { "Confirmation  • 80AFRC17F0239" },
                            color: "SECONDARY",
                            size: "SMALL"
                          )
                        },
                        align: "LEFT"
                      )
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextIcon(
                            icon: "exclamation-circle",
                            color: "NEGATIVE",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { " " },
                            color: "STANDARD",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { "-2d " },
                            color: "NEGATIVE",
                            size: "STANDARD"
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    )
                  },
                  alignVertical: "MIDDLE",
                  marginBelow: "STANDARD"
                ),
                a!sideBySideLayout(
                  items: {
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { a!richTextIcon(icon: "square-o") },
                            color: "ACCENT",
                            size: "MEDIUM_PLUS",
                            style: { "STRONG" }
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { "Issue GFE" },
                            size: "STANDARD",
                            style: { "STRONG" }
                          ),
                          char(10),
                          a!richTextItem(
                            text: { "Confirmation  • 80AFRC17F0239" },
                            color: "SECONDARY",
                            size: "SMALL"
                          )
                        },
                        align: "LEFT"
                      )
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextIcon(
                            icon: "exclamation-circle",
                            color: "NEGATIVE",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { " " },
                            color: "STANDARD",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { "-2d " },
                            color: "NEGATIVE",
                            size: "STANDARD"
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    )
                  },
                  alignVertical: "MIDDLE",
                  marginBelow: "STANDARD"
                ),
                a!sideBySideLayout(
                  items: {
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { a!richTextIcon(icon: "square-o") },
                            color: "ACCENT",
                            size: "MEDIUM_PLUS",
                            style: { "STRONG" }
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { "Sign NDA" },
                            size: "STANDARD",
                            style: { "STRONG" }
                          ),
                          char(10),
                          a!richTextItem(
                            text: { "Confirmation  • 80AFRC17F0239" },
                            color: "SECONDARY",
                            size: "SMALL"
                          )
                        },
                        align: "LEFT"
                      )
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextIcon(
                            icon: "exclamation-circle",
                            color: "NEGATIVE",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { " " },
                            color: "STANDARD",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { "-2d " },
                            color: "NEGATIVE",
                            size: "STANDARD"
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    )
                  },
                  alignVertical: "MIDDLE",
                  marginBelow: "STANDARD"
                ),
                a!sideBySideLayout(
                  items: {
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { a!richTextIcon(icon: "square-o") },
                            color: "ACCENT",
                            size: "MEDIUM_PLUS",
                            style: { "STRONG" }
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { "Send Vendor Notice" },
                            size: "STANDARD",
                            style: { "STRONG" }
                          ),
                          char(10),
                          a!richTextItem(
                            text: { "Confirmation  • 80AFRC17F0239" },
                            color: "SECONDARY",
                            size: "SMALL"
                          )
                        },
                        align: "LEFT"
                      )
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextIcon(
                            icon: "exclamation-circle",
                            color: "NEGATIVE",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { " " },
                            color: "STANDARD",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { "-2d " },
                            color: "NEGATIVE",
                            size: "STANDARD"
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    )
                  },
                  alignVertical: "MIDDLE",
                  marginBelow: "STANDARD"
                ),
                a!sideBySideLayout(
                  items: {
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { a!richTextIcon(icon: "square-o") },
                            color: "ACCENT",
                            size: "MEDIUM_PLUS",
                            style: { "STRONG" }
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { "Finalize SOW" },
                            size: "STANDARD",
                            style: { "STRONG" }
                          ),
                          char(10),
                          a!richTextItem(
                            text: { "Confirmation  • 80AFRC17F0239" },
                            color: "SECONDARY",
                            size: "SMALL"
                          )
                        },
                        align: "LEFT"
                      )
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextIcon(
                            icon: "exclamation-circle",
                            color: "NEGATIVE",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { " " },
                            color: "STANDARD",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { "-2d " },
                            color: "NEGATIVE",
                            size: "STANDARD"
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    )
                  },
                  alignVertical: "MIDDLE",
                  marginBelow: "STANDARD"
                ),
                a!sideBySideLayout(
                  items: {
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { a!richTextIcon(icon: "square-o") },
                            color: "ACCENT",
                            size: "MEDIUM_PLUS",
                            style: { "STRONG" }
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { "Confirm Deadlines" },
                            size: "STANDARD",
                            style: { "STRONG" }
                          ),
                          char(10),
                          a!richTextItem(
                            text: { "Confirmation  • 80AFRC17F0239" },
                            color: "SECONDARY",
                            size: "SMALL"
                          )
                        },
                        align: "LEFT"
                      )
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextIcon(
                            icon: "exclamation-circle",
                            color: "NEGATIVE",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { " " },
                            color: "STANDARD",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { "-2d " },
                            color: "NEGATIVE",
                            size: "STANDARD"
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    )
                  },
                  alignVertical: "MIDDLE",
                  marginBelow: "STANDARD"
                ),
                a!sideBySideLayout(
                  items: {
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { a!richTextIcon(icon: "square-o") },
                            color: "ACCENT",
                            size: "MEDIUM_PLUS",
                            style: { "STRONG" }
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { "Schedule Kickoff Meeting" },
                            size: "STANDARD",
                            style: { "STRONG" }
                          ),
                          char(10),
                          a!richTextItem(
                            text: { "Confirmation  • 80AFRC17F0239" },
                            color: "SECONDARY",
                            size: "SMALL"
                          )
                        },
                        align: "LEFT"
                      )
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextIcon(
                            icon: "exclamation-circle",
                            color: "NEGATIVE",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { " " },
                            color: "STANDARD",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { "-2d " },
                            color: "NEGATIVE",
                            size: "STANDARD"
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    )
                  },
                  alignVertical: "MIDDLE",
                  marginBelow: "STANDARD"
                ),
                a!sideBySideLayout(
                  items: {
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { a!richTextIcon(icon: "square-o") },
                            color: "ACCENT",
                            size: "MEDIUM_PLUS",
                            style: { "STRONG" }
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { "Schedule Kickoff Meeting" },
                            size: "STANDARD",
                            style: { "STRONG" }
                          ),
                          char(10),
                          a!richTextItem(
                            text: { "Confirmation  • 80AFRC17F0239" },
                            color: "SECONDARY",
                            size: "SMALL"
                          )
                        },
                        align: "LEFT"
                      )
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextIcon(
                            icon: "exclamation-circle",
                            color: "NEGATIVE",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { " " },
                            color: "STANDARD",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { "-2d " },
                            color: "NEGATIVE",
                            size: "STANDARD"
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    )
                  },
                  alignVertical: "MIDDLE",
                  marginBelow: "STANDARD"
                ),
                a!sideBySideLayout(
                  items: {
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { a!richTextIcon(icon: "square-o") },
                            color: "ACCENT",
                            size: "MEDIUM_PLUS",
                            style: { "STRONG" }
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { "Schedule Kickoff Meeting" },
                            size: "STANDARD",
                            style: { "STRONG" }
                          ),
                          char(10),
                          a!richTextItem(
                            text: { "Confirmation  • 80AFRC17F0239" },
                            color: "SECONDARY",
                            size: "SMALL"
                          )
                        },
                        align: "LEFT"
                      )
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        label: "",
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextIcon(
                            icon: "exclamation-circle",
                            color: "NEGATIVE",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { " " },
                            color: "STANDARD",
                            size: "STANDARD"
                          ),
                          a!richTextItem(
                            text: { "-2d " },
                            color: "NEGATIVE",
                            size: "STANDARD"
                          )
                        },
                        align: "LEFT"
                      ),
                      width: "MINIMIZE"
                    )
                  },
                  alignVertical: "MIDDLE",
                  marginBelow: "STANDARD"
                )
              },
              height: "AUTO",
              showWhen: false,
              style: "NONE",
              marginBelow: "STANDARD",
              showBorder: false
            )
          },
          width: "MEDIUM"
        )
      }
    )
  },
  backgroundColor: "#FAFAFC"
)
```
