---
status: "stable"
last_updated: "2024-12-19"
---

# Grids
Display tabular information in a scannable and digestible format
![](https://github.com/user-attachments/assets/80239a39-309e-4082-aa5a-a5761c9a4edc)

## Design
![](https://github.com/user-attachments/assets/f1757c0b-7d9b-47c1-8833-c4aa0a6e78cd)
In a full page

![](https://github.com/user-attachments/assets/4ed6461d-973f-42ef-91fe-cf7c9ef3f051)
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

### Example Grid

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
