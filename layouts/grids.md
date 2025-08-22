---
status: "stable"
last_updated: "2024-12-19"
---

# Grids
Display tabular information in a scannable and digestible format
![](https://github.com/user-attachments/assets/69c875e4-59f6-432b-9517-4810ac2b86d7)

## Overview

Use grids to display tabular data in a structured, easy-to-scan layout. Keep grid data values concise and consistently-formatted to maximize readability. Great grid design allows users to quickly scan, sort, compare, and take action on large amounts of data.

### When to Use Grids
✅ **Use grids when:**
- Displaying tabular data that users need to compare across rows
- Data requires sorting, filtering, or searching capabilities  
- Information benefits from columnar organization
- Users need to perform actions on individual rows or bulk selections

❌ **Don't use grids when:**
- Displaying large blocks of text or narrative content
- Simple lists would be more appropriate
- Data doesn't benefit from tabular structure

## Grid Types and Layout Patterns

At its foundation, every grid will have column headers, rows of data, and pagination. Most grids will also include search and filter functionality, sorting capabilities, and record actions. Grids can take up a full page or be placed within a page section layout. They can either be read-only or editable, depending on whether users are meant to be viewing or updating the grid content.

### Read-Only vs. Editable Grids

**Read-Only Grids (a!gridField)**
- **Purpose**: Display data for viewing, analysis, and navigation
- **Features**: Sorting, filtering, searching, selection, record actions
- **Column widths**: Support automatic, fixed, and relative width options
- **Use cases**: Reports, dashboards, data browsing, record lists

**Editable Grids (a!gridLayout)**  
- **Purpose**: Allow in-line data editing and data entry
- **Features**: Cell editing, row addition/deletion, validation, limited styling
- **Column widths**: No automatic widths; use "Distribute" or proportional weights
- **Use cases**: Data entry forms, bulk editing interfaces

### Layout Patterns

**List-Style Grid**
- Designed to fit within container width without horizontal scrolling
- Most common for record lists with drill-down navigation
- Use "Auto" width or weighted proportions for flexible layouts
- Best for navigation-focused interfaces

**Spreadsheet-Style Grid**
- Features fixed widths with horizontal scrolling for overflow
- Intended for data-rich analysis, not navigation
- Set fixed widths ("Narrow", "Medium") for all columns
- Best for analytical interfaces with many columns

## Design

![](https://github.com/user-attachments/assets/69c875e4-59f6-432b-9517-4810ac2b86d7)

In a full page

![](https://github.com/user-attachments/assets/97af65da-18e5-43ed-bc51-ca0a004007b5)

In a page section layout
<br></br>

Grids serve as containers for displaying record information. Great grid design allows users to quickly scan, sort, compare, and take action on large amounts of data.

## Design Guidelines Checklist

### Layout and Component Selection
|Item|Type|Details|
|--- |--- |--- |
|Use the a!gridField component for a read-only grid|Layout|Best for viewing, analyzing, and navigating data|
|Use the a!gridLayout component for an editable grid|Layout|Best for data entry and in-line editing|
|Minimize content sprawl across the grid by putting more than one field in one column (e.g.: Last updated and user who updated can be in the same column)|Layout|Consolidate related information to maximize space efficiency|
|Set preventTextWrapping to true for columns with long read-only text using the a!RichTextDisplayField() component|Layout|Optimizes column widths and prevents layout issues|
|Set a fixed grid column width for icons and center align the rich text icon within the column|Layout|Use "Icon" width for status indicators and action buttons|
|Try to have at most 6 columns. To maximize the use of available space, use text formatting to consolidate logical groupings of fields into a grid column or minimize the number of columns to the ones necessary.|Layout|Maintains readability while maximizing information density|
|Keep column labels to a minimum. Avoid wrapping of labels. Use a tooltip to provide additional context if necessary.|Layout|Ensures clean header appearance and prevents layout issues|

### Styling and Visual Design
|Item|Type|Details|
|--- |--- |--- |
|Use "Standard" spacing by default for optimal balance of density and readability|Styling|Provides good balance between information density and readability|
|Use "Dense" spacing selectively for large datasets to reduce scrolling|Styling|Consider accessibility - some users may find dense grids harder to read|
|Use the "Light" border style by default, but "Standard" when sorting is involved to clearly identify which column is being sorted on|Styling|Light borders create cleaner appearance; Standard borders help with sorting clarity|
|Shade alternate rows for full-page grids to enhance readability. For grids with a smaller batch size (e.g. 5), it is not necessary to shade alternate rows.|Styling|Helps users track across wide grids with many columns|
|Avoid shading alternate rows when secondary text are used on a grid due to accessibility concerns with color contrast. Only use colors that pass color contrast against the shaded row background color for rich text icons.|Styling|Ensures WCAG AA compliance (4.5:1 contrast ratio minimum)|
|For multi-row selections, set the selection styling to checkbox. Avoid using the row highlight style.|Styling|Checkboxes provide clearer multi-selection feedback|
|Avoid using row highlight as the selection styling when the row contains links or actions|Styling|Prevents confusion between selection and interactive elements|
|Use row highlight for single-row selection grids|Styling|Appropriate for single-selection scenarios|
|Use the Rich Text Component's PreventWrapping parameter to optimize column widths especially for values with long text|Styling|Maintains consistent column sizing and layout|

### Performance and Pagination
|Item|Type|Details|
|--- |--- |--- |
|For full page grids, use 25 as the batch size|Pagination|Balances performance with content visibility|
|For grids in larger sections, use 10 as the batch size|Pagination|Allows access to other page components|
|For grids within smaller cards, use 5 as the batch size|Pagination|Minimizes scrolling in constrained spaces|
|For single grid interfaces, consider 25-50 items to reduce paging|Pagination|When grid is primary interface element|
|For multiple component interfaces, use 5-10 items|Pagination|Ensures other components remain accessible|

### Search, Filter and Sort
|Item|Type|Details|
|--- |--- |--- |
|Apply a default sort order such that the most important information shows up at the top of the list (e.g.: most recent updated first)|Search, Filter and Sort|Helps users find relevant information quickly|
|Provide commonly used filters to let users narrow down the list to what they are looking for|Search, Filter and Sort|Use Record Type filters when available for consistency|
|Match the filter order to the order of the grid columns|Search, Filter and Sort|Creates logical flow and user expectations|
|Use Record Type as data source to leverage built-in search and filter capabilities|Search, Filter and Sort|Reduces development effort and ensures consistency|

### Record Actions
|Item|Type|Details|
|--- |--- |--- |
|Use the menu style for record actions if there is only one action that applies to a grid row|Record Actions|Clean, minimal approach for single actions|
|Use the menu (icon) style if there are multiple actions that apply to a grid row|Record Actions|Saves space while providing access to multiple actions|
|If most of the record actions can be bulk applied to multiple rows, display them as buttons above a selectable grid|Record Actions|Efficient for operations affecting multiple items|
|If the title specifies the entity, avoid mentioning that in the button label. For example: if the tab name is Line items, then the button label should be "Import" and not "Import Line Items"|Record Actions|Reduces redundancy and improves clarity|
|For guidance on phrasing record actions, see Voice and Tone|Record Actions|Ensures consistent language across application|
|Don't display multiple related actions within a single grid cell|Record Actions|Use separate columns or above-grid placement instead|

### Column Alignments
|Item|Type|Details|
|--- |--- |--- |
|Left align text, including icons and secondary text|Column Alignments|Standard for text content in left-to-right languages|
|Right align dollar and numeric amounts|Column Alignments|Enables easy comparison of quantitative values|
|Left align ID and phone numbers|Column Alignments|Qualitative numbers can be left-aligned|
|Left align dates, date ranges and timestamps if an icon is used, otherwise keep it right aligned|Column Alignments|Icon presence affects optimal alignment|
|Ensure that every cell must have an icon if status icons are to be used for overdue items. By default, use the "calendar-o" icon in gray 3 color with a caption that says "Due". Reference the Icons page for more guidance on using icons to signify date status|Column Alignments|Maintains visual consistency across all rows|
|Left align tags and use "Standard" size|Column Alignments|Consistent with text alignment patterns|
|Center align rich text icon links, buttons and record actions|Column Alignments|Optimal for interactive elements and status indicators|
|Left align user profile images|Column Alignments|Consistent with other content alignment|
|Left align input fields|Column Alignments|Standard for form elements in editable grids|
|First column should always be left-aligned regardless of value type|Column Alignments|Provides consistent starting point for scanning|
|For editable grids, use left alignment for all field types|Column Alignments|Maintains consistency in editing mode|

### Empty States
|Item|Type|Details|
|--- |--- |--- |
|Use hyphen (-) when displaying cells with no value|Empty States|Provides clear indication of missing data|
|For full page grids, use a custom illustration or stamp / icon with a message that explains how the user can take action to populate the grid. Because the text clearly states the message, do not provide a text alternative or caption for the image / stamp|Empty States|Guides users toward productive actions|
|For grids within smaller section layouts or card containers, use the out of the box empty state message (e.g.: "No [objects] available")|Empty States|Appropriate for constrained spaces|

### Accessibility and Responsive Design
|Item|Type|Details|
|--- |--- |--- |
|Define meaningful row headers when rows have identifiers|Accessibility|Helps screen readers navigate grid content|
|Use descriptive, unique column labels|Accessibility|Ensures screen reader users understand column purpose|
|Ensure keyboard navigation works for all interactive elements|Accessibility|Support tab order and arrow key navigation where appropriate|
|Test color contrast for all visual elements (minimum 4.5:1 ratio)|Accessibility|Ensures WCAG AA compliance|
|Consider spreadsheet-style layout with fixed widths for narrow screens|Responsive|Maintains usability on mobile devices|
|Prioritize most important columns for mobile display|Responsive|Focus on essential information in constrained spaces|

## Additional Resources

### Technical Implementation
- [Editable Grid Component Documentation](https://docs.appian.com/suite/help/25.3/Editable_Grid_Component.html)
- [Read-Only Grid Component Documentation](https://docs.appian.com/suite/help/25.3/Paging_Grid_Component.html)

### Design Patterns
- **List-Style Grids**: Use "Auto" width or weighted proportions for flexible layouts that fit container width
- **Spreadsheet-Style Grids**: Use fixed widths with horizontal scrolling for data-rich analytical interfaces
- **Mobile Considerations**: Switch to fixed-width approach for narrow screens to maintain legibility

### Performance Optimization
- Use Record Types as data sources for built-in search and filtering
- Choose appropriate batch sizes based on interface context
- Implement logical default sort orders to surface relevant content

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
              labelHeadingTag: "H3",
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
                            cs: "James Lee",
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
                            cs: "James Lee",
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
                            cs: "James Lee",
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
                  showBorder: false,
                  showShadow: true
                )
              }
            )
          },
          width: "AUTO"
        )
      }
    )
  },
  backgroundColor: "#FAFAFA"
)
```

## Additional Resources

### Technical Implementation
- [Editable Grid Component Documentation](https://docs.appian.com/suite/help/25.3/Editable_Grid_Component.html) - Technical details for editable grids
- [Read-Only Grid Component Documentation](https://docs.appian.com/suite/help/25.3/Paging_Grid_Component.html) - Technical details for read-only grids

### Design Patterns
- **List-Style Grids**: Use "Auto" width or weighted proportions for flexible layouts that fit container width
- **Spreadsheet-Style Grids**: Use fixed widths with horizontal scrolling for data-rich analytical interfaces
- **Mobile Considerations**: Switch to fixed-width approach for narrow screens to maintain legibility

### Related Components
- [Lists](./lists.md) - For simpler data display without tabular structure
- [Cards](./cards.md) - Alternative layout for complex data items  
- [Record Actions](./record-actions.md) - Guidance on action patterns and placement
- [Voice and Tone Guidelines](./voice-and-tone.md) - For consistent action labeling

### Best Practices Summary

**Performance Optimization:**
- Use Record Types as data sources for built-in search and filtering
- Choose appropriate batch sizes based on interface context
- Implement logical default sort orders to surface relevant content

**Accessibility Excellence:**
- Ensure WCAG AA color contrast compliance (4.5:1 minimum)
- Define meaningful row and column headers for screen readers
- Support keyboard navigation for all interactive elements
- Test with assistive technologies

**Responsive Design:**
- Prioritize essential columns for mobile display
- Consider alternative layouts for very small screens
- Use fixed widths for narrow screens when needed
- Maintain touch target minimum sizes (44px)

**Visual Consistency:**
- Apply consistent alignment rules across all grids
- Use standardized spacing and border styles
- Maintain color palette limits for status indicators
- Ensure consistent empty state handling
