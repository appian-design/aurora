---
status: "stable"
last_updated: "2024-12-19"
---

# Landing Pages

## Design

### Guidance

**Tailor Content to Target Users**

Answer these questions to gain a better understanding of the various user personas viewing the landing page: 
* What information does each user need to view?
* What is the minimum amount of information you need to provide to give users context? 
* What actions do users need to perform, and what information do they need to perform them?  
* What helpful (but not essential) information can you display under a link that directs users to a separate page? 

Use dense layouts for experienced, data-intensive users that prefer efficiency. Use a guided experience layout for novice users that prefer a step-by-step approach.

### Variants

#### Dense UI: Two Columns

![](https://github.com/user-attachments/assets/62ba1029-5588-461f-ba5c-607d570374c9)

This layout is structured for users who want to spend most of their time interacting with the record list and taking action on a record. 

The charts provide the information users need for context but are not required for users to perform daily actions.

#### Dense UI: Three Columns
![](https://github.com/user-attachments/assets/e322b8a9-50b7-480b-8d68-1f28a0eaf0bc)


This layout is structured for users who want to spend most of their time on the record list interacting with record details and associated actions.

This layout incorporates multiple records into a single interface. The two columns on the left help the user take action on the records, while the third column lists reference information.

The charts on the right help the user to gather context, but they aren't essential to the user’s day-to-day actions.

![](https://github.com/user-attachments/assets/df9fa84f-693b-4f82-8d5c-8b20ad2cd44e)

Use Highlights Lists as a Gateway to Other Information

![](https://github.com/user-attachments/assets/469e3309-ad20-4b14-b06a-f750c1b65e35)

Use the Record Action Component

![](https://github.com/user-attachments/assets/64511958-97c8-4ecf-a9fd-5fe75e4f7bcc)

Preserve Layout Consistency When Data Changes

#### Guided Experience
![](https://github.com/user-attachments/assets/333a2fdb-2c57-4eb3-bd1c-318ff53f1e8b)

Only present information that is relevant or important for the user to proceed with their primary task.

Use a combination of links and tabs to minimize clutter on an interface. Use language that clearly tells the user what that link will let them do or where it will take them.

Present information that is useful for the user to make a decision or conduct an activity. Move secondary information into a separate interface in a separate tab, drill down, or dialog.

Note: The billboard image in the screenshot on the left might be unavailable in your environment and thus has been commented out in the code.

## Development

### Variants

#### Dense UI: Two Columns

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
                      label: "Mark Complete",
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

#### Dense UI: Three Columns

```
a!localVariables(
  local!case: false,
  a!headerContentLayout(
    header: {
      a!cardLayout(
        contents: {
          a!columnsLayout(
            stackWhen: {"TABLET_PORTRAIT", "PHONE"},
            columns: {
              a!columnLayout(
                width: "3X",
                contents: {
                  a!columnsLayout(
                    columns: {
                      a!columnLayout(
                        contents: {
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: { "ACTIVE CASES" }
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: { a!richTextIcon(icon: "briefcase") },
                                color: "#606068",
                                size: "MEDIUM_PLUS",
                                style: { "STRONG" }
                              ),
                              a!richTextItem(
                                text: { " 15" },
                                size: "MEDIUM_PLUS",
                                style: { "STRONG" }
                              )
                            }
                          )
                        }
                      ),
                      a!columnLayout(
                        contents: {
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: { "EXPIRED CASES" }
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: {
                                  a!richTextIcon(icon: "exclamation-triangle")
                                },
                                color: "#E2143F",
                                size: "MEDIUM_PLUS",
                                style: { "STRONG" }
                              ),
                              a!richTextItem(
                                text: { " 1" },
                                size: "MEDIUM_PLUS",
                                style: { "STRONG" }
                              )
                            }
                          )
                        }
                      ),
                      a!columnLayout(
                        contents: {
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: { "CASE RESOLUTION TIME" }
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: { a!richTextIcon(icon: "clock") },
                                color: "#606068",
                                size: "MEDIUM_PLUS",
                                style: { "STRONG" }
                              ),
                              a!richTextItem(
                                text: { " 2d " },
                                size: "MEDIUM_PLUS",
                                style: { "STRONG" }
                              ),
                              a!richTextItem(
                                text: { "AVG." },
                                color: "#606068",
                                size: "STANDARD"
                              )
                            }
                          )
                        }
                      ),
                      a!columnLayout(
                        contents: {
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: { "ACTIVE TASKS" }
                          ),
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: { a!richTextIcon(icon: "tasks-alt") },
                                      color: "#606068",
                                      size: "MEDIUM_PLUS",
                                      style: { "STRONG" }
                                    ),
                                    a!richTextItem(
                                      text: { " 15" },
                                      size: "MEDIUM_PLUS",
                                      style: { "STRONG" }
                                    )
                                  }
                                )
                              )
                            },
                            alignVertical: "MIDDLE"
                          )
                        }
                      ),
                      a!columnLayout(
                        contents: {
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: { "EXPIRED TASKS" }
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: {
                                  a!richTextIcon(icon: "exclamation-triangle")
                                },
                                color: "#E2143F",
                                size: "MEDIUM_PLUS",
                                style: { "STRONG" }
                              ),
                              a!richTextItem(
                                text: { " 1" },
                                size: "MEDIUM_PLUS",
                                style: { "STRONG" }
                              )
                            }
                          )
                        }
                      )
                    },
                    spacing: "SPARSE",
                    showDividers: true
                  )
                }
              ),
              a!columnLayout(
                contents: {
                  a!buttonArrayLayout(
                    buttons: {
                      a!buttonWidget(
                        label: "New Case",
                        icon: "plus",
                        saveInto: a!save(local!case, true),
                        size: "LARGE",
                        style: "SOLID"
                      )
                    },
                    align: "END",
                    marginBelow: "NONE"
                  )
                },
                width: "NARROW"
              )
            },
            alignVertical: "MIDDLE"
          )
        },
        height: "AUTO",
        showWhen: local!case = false,
        style: "#ffffff",
        padding: "STANDARD",
        marginBelow: "NONE",
        showBorder: false
      )
    },
    contents: {
      a!columnsLayout(
        columns: {
          a!columnLayout(
            contents: {
              a!columnsLayout(
                columns: {
                  a!columnLayout(
                    contents: a!sectionLayout(
                      label: "Notifications",
                      labelSize: "SMALL",
                      labelColor: "STANDARD",
                      labelHeadingTag: "H2",
                      marginBelow: "NONE"
                    )
                  ),
                  a!columnLayout(
                    contents: a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: {
                        a!richTextItem(
                          text: { "Mark all as read" },
                          color: "ACCENT",
                          size: "SMALL"
                        )
                      },
                      align: "RIGHT"
                    )
                  )
                },
                marginBelow: "NONE"
              ),
              a!cardLayout(
                contents: {
                  a!sectionLayout(
                    label: "",
                    contents: {
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  labelPosition: "COLLAPSED",
                                  helpTooltip: "Attach Document",
                                  icon: "envelope",
                                  text: "",
                                  backgroundColor: "#EDEEF2",
                                  contentColor: "#2E2E35",
                                  size: "TINY",
                                  tooltip: "New Investigation"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: {
                                        a!richTextItem(
                                          text: { "Maria Hunter " },
                                          style: { "STRONG" }
                                        ),
                                        "submitted a "
                                      },
                                      color: "STANDARD",
                                      size: "STANDARD"
                                    ),
                                    a!richTextItem(
                                      text: { "credit check" },
                                      color: "ACCENT",
                                      size: "STANDARD",
                                      style: { "STRONG" }
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: {
                                        a!richTextIcon(icon: "briefcase"),
                                        " CUS-001  ",
                                        a!richTextIcon(icon: "calendar-o"),
                                        " Oct 1"
                                      },
                                      color: "#606068",
                                      size: "SMALL"
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(icon: "ellipsis-v", color: "#606068", )
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "NONE"
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        marginAbove: "LESS",
                        marginBelow: "NONE",
                        showBorder: false
                      )
                    },
                    divider: "BELOW",
                    marginAbove: "EVEN_LESS",
                    marginBelow: "NONE"
                  ),
                  a!sectionLayout(
                    label: "",
                    contents: {
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  labelPosition: "COLLAPSED",
                                  helpTooltip: "Attach Document",
                                  icon: "envelope",
                                  text: "",
                                  backgroundColor: "#EDEEF2",
                                  contentColor: "#2E2E35",
                                  size: "TINY",
                                  tooltip: "New Investigation"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: {
                                        a!richTextItem(text: { "Jacob Jones " }, style: { "STRONG" }),
                                        "reassigned a "
                                      },
                                      color: "STANDARD",
                                      size: "STANDARD"
                                    ),
                                    a!richTextItem(
                                      text: { "task" },
                                      color: "ACCENT",
                                      size: "STANDARD",
                                      style: { "STRONG" }
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: {
                                        a!richTextIcon(icon: "briefcase"),
                                        " CUS-002  ",
                                        a!richTextIcon(icon: "calendar-o"),
                                        " Oct 1"
                                      },
                                      color: "#606068",
                                      size: "SMALL"
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(icon: "ellipsis-v", color: "#606068")
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "NONE"
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        marginAbove: "LESS",
                        marginBelow: "NONE",
                        showBorder: false
                      )
                    },
                    divider: "BELOW",
                    marginAbove: "LESS",
                    marginBelow: "NONE"
                  ),
                  a!sectionLayout(
                    label: "",
                    contents: {
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  labelPosition: "COLLAPSED",
                                  helpTooltip: "Attach Document",
                                  icon: "envelope",
                                  text: "",
                                  backgroundColor: "#EDEEF2",
                                  contentColor: "#2E2E35",
                                  size: "TINY",
                                  tooltip: "New Investigation"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: {
                                        a!richTextItem(text: { "Eli Woods " }, style: { "STRONG" }),
                                        "marked a "
                                      },
                                      color: "STANDARD",
                                      size: "STANDARD"
                                    ),
                                    a!richTextItem(
                                      text: { "task" },
                                      color: "ACCENT",
                                      size: "STANDARD",
                                      style: { "STRONG" }
                                    ),
                                    a!richTextItem(
                                      text: { " as not needed" },
                                      size: "STANDARD"
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: {
                                        a!richTextIcon(icon: "briefcase"),
                                        " CUS-003  ",
                                        a!richTextIcon(icon: "calendar-o"),
                                        " Oct 1"
                                      },
                                      color: "#606068",
                                      size: "SMALL"
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(icon: "ellipsis-v", color: "#606068")
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "NONE"
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        marginAbove: "LESS",
                        marginBelow: "NONE",
                        showBorder: false
                      )
                    },
                    divider: "BELOW",
                    marginAbove: "EVEN_LESS",
                    marginBelow: "NONE"
                  ),
                  a!sectionLayout(
                    label: "",
                    contents: {
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  labelPosition: "COLLAPSED",
                                  helpTooltip: "Attach Document",
                                  icon: "envelope-open",
                                  text: "",
                                  backgroundColor: "#EDEEF2",
                                  contentColor: "#2E2E35",
                                  size: "TINY",
                                  tooltip: "New Investigation"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: {
                                        a!richTextItem(
                                          text: { "Elise Sanders " },
                                          style: { "STRONG" }
                                        ),
                                        "sent you a "
                                      },
                                      color: "STANDARD",
                                      size: "STANDARD"
                                    ),
                                    a!richTextItem(
                                      text: { "message" },
                                      color: "ACCENT",
                                      size: "STANDARD",
                                      style: { "STRONG" }
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: {
                                        a!richTextIcon(icon: "briefcase"),
                                        " CUS-004  ",
                                        a!richTextIcon(icon: "calendar-o"),
                                        " Oct 1"
                                      },
                                      color: "#606068",
                                      size: "SMALL"
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(icon: "ellipsis-v", color: "#606068")
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "NONE"
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        marginAbove: "LESS",
                        marginBelow: "NONE",
                        showBorder: false
                      )
                    },
                    divider: "BELOW",
                    marginAbove: "EVEN_LESS",
                    marginBelow: "NONE"
                  ),
                  a!sectionLayout(
                    label: "",
                    contents: {
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  labelPosition: "COLLAPSED",
                                  helpTooltip: "Attach Document",
                                  icon: "envelope-open",
                                  text: "",
                                  backgroundColor: "#EDEEF2",
                                  contentColor: "#2E2E35",
                                  size: "TINY",
                                  tooltip: "New Investigation"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: {
                                        a!richTextItem(text: { "Tom Greene " }, style: { "STRONG" }),
                                        "uploaded a "
                                      },
                                      color: "STANDARD",
                                      size: "STANDARD"
                                    ),
                                    a!richTextItem(
                                      text: { "document" },
                                      color: "ACCENT",
                                      size: "STANDARD",
                                      style: { "STRONG" }
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: {
                                        a!richTextIcon(icon: "briefcase"),
                                        " CUS-005  ",
                                        a!richTextIcon(icon: "calendar-o"),
                                        " Oct 1"
                                      },
                                      color: "#606068",
                                      size: "SMALL"
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(icon: "ellipsis-v", color: "#606068")
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "NONE"
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        marginAbove: "EVEN_LESS",
                        marginBelow: "NONE",
                        showBorder: false
                      )
                    },
                    divider: "BELOW",
                    marginAbove: "EVEN_LESS",
                    marginBelow: "NONE"
                  ),
                  a!cardLayout(
                    padding: "STANDARD",
                    contents: {
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: {
                              "See All Notifications (15) ",
                              a!richTextIcon(icon: "angle-right")
                            },
                            color: "ACCENT",
                            style: { "STRONG" }
                          )
                        },
                        align: "CENTER"
                      )
                    },
                    showBorder: false
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!richTextDisplayField(
                          labelPosition: "ABOVE",
                          value: {
                            char(10),
                            char(10),
                            char(10),
                            char(10),
                            char(10),
                            char(10),
                            char(10),
                            char(10),
                            char(10),
                            char(10),
                            a!richTextItem(
                              text: { a!richTextIcon(icon: "bell-slash-o") },
                              color: "#606068",
                              size: "LARGE",
                              style: { "STRONG" }
                            ),
                            char(10),
                            a!richTextItem(
                              text: { "No Alerts" },
                              color: "#606068",
                              size: "STANDARD"
                            ),
                            char(10),
                            char(10),
                            char(10),
                            char(10),
                            char(10),
                            char(10),
                            char(10),
                            char(10),
                            char(10),
                            char(10)
                          },
                          showWhen: false,
                          align: "CENTER"
                        )
                      )
                    },
                    showWhen: false,
                    marginBelow: "NONE"
                  )
                },
                height: "AUTO",
                style: "NONE",
                shape: "SEMI_ROUNDED",
                padding: "NONE",
                marginBelow: "STANDARD",
                borderColor: "#EDEEFA"
              ),
              a!columnsLayout(
                columns: {
                  a!columnLayout(
                    contents: a!sectionLayout(
                      label: "Active Tasks",
                      labelSize: "SMALL",
                      labelColor: "STANDARD",
                      labelHeadingTag: "H2",
                      marginAbove: "LESS",
                      marginBelow: "NONE"
                    )
                  ),
                  a!columnLayout(
                    contents: a!buttonArrayLayout(
                      buttons: {
                        a!buttonWidget(
                          label: "New",
                          icon: "plus",
                          size: "SMALL",
                          style: "OUTLINE",
                          color: "SECONDARY"
                        )
                      },
                      align: "END",
                      marginBelow: "STANDARD"
                    )
                  )
                },
                marginAbove: "LESS",
                marginBelow: "NONE"
              ),
              a!cardLayout(
                contents: {
                  a!sectionLayout(
                    label: "",
                    contents: {
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  labelPosition: "COLLAPSED",
                                  helpTooltip: "Attach Document",
                                  icon: "upload",
                                  text: "",
                                  backgroundColor: "#EDEEF2",
                                  contentColor: "#2E2E35",
                                  size: "TINY",
                                  tooltip: "New Investigation"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: {
                                        a!richTextItem(
                                          text: { "Attach Credit Report" },
                                          style: { "STRONG" }
                                        )
                                      },
                                      color: "ACCENT",
                                      size: ""
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: {
                                        a!richTextIcon(icon: "briefcase"),
                                        " CUS-010  "
                                      },
                                      color: "#606068",
                                      size: "SMALL"
                                    ),
                                    a!richTextItem(
                                      text: {
                                        a!richTextIcon(
                                          icon: "exclamation-triangle",
                                          color: "#E2143F"
                                        ),
                                        " Due Sep 15"
                                      },
                                      color: "#606068",
                                      size: "SMALL"
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(icon: "ellipsis-v", color: "#606068")
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "NONE"
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        marginAbove: "EVEN_LESS",
                        marginBelow: "NONE",
                        showBorder: false
                      )
                    },
                    divider: "BELOW",
                    marginAbove: "LESS",
                    marginBelow: "NONE"
                  ),
                  a!sectionLayout(
                    label: "",
                    contents: {
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  labelPosition: "COLLAPSED",
                                  helpTooltip: "Attach Document",
                                  icon: "shield",
                                  text: "",
                                  backgroundColor: "#EDEEF2",
                                  contentColor: "#2E2E35",
                                  size: "TINY",
                                  tooltip: "New Investigation"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: {
                                        a!richTextItem(
                                          text: { "Verify Signature" },
                                          style: { "STRONG" }
                                        )
                                      },
                                      color: "ACCENT",
                                      size: ""
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: {
                                        a!richTextIcon(icon: "briefcase"),
                                        " CUS-015  ",
                                        a!richTextIcon(icon: "clock-o", color: "#F2CB18"),
                                        " Due Oct 1"
                                      },
                                      color: "#606068",
                                      size: "SMALL"
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(icon: "ellipsis-v", color: "#606068")
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "NONE"
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        marginAbove: "LESS",
                        marginBelow: "NONE",
                        showBorder: false
                      )
                    },
                    divider: "BELOW",
                    marginAbove: "EVEN_LESS",
                    marginBelow: "NONE"
                  ),
                  a!sectionLayout(
                    label: "",
                    contents: {
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  labelPosition: "COLLAPSED",
                                  helpTooltip: "Attach Document",
                                  icon: "user-circle",
                                  text: "",
                                  backgroundColor: "#EDEEF2",
                                  contentColor: "#2E2E35",
                                  size: "TINY",
                                  tooltip: "New Investigation"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: {
                                        a!richTextItem(
                                          text: { "Confirm Profile Information " },
                                          style: { "STRONG" }
                                        )
                                      },
                                      color: "ACCENT",
                                      size: ""
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: {
                                        a!richTextIcon(icon: "briefcase"),
                                        " CUS-019  ",
                                        a!richTextIcon(icon: "calendar-o"),
                                        " Due Oct 15"
                                      },
                                      color: "#606068",
                                      size: "SMALL"
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(icon: "ellipsis-v", color: "#606068")
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "NONE"
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        marginAbove: "LESS",
                        marginBelow: "NONE",
                        showBorder: false
                      )
                    },
                    divider: "BELOW",
                    marginAbove: "EVEN_LESS",
                    marginBelow: "NONE"
                  ),
                  a!sectionLayout(
                    label: "",
                    contents: {
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  labelPosition: "COLLAPSED",
                                  helpTooltip: "Attach Document",
                                  icon: "shield",
                                  text: "",
                                  backgroundColor: "#EDEEF2",
                                  contentColor: "#2E2E35",
                                  size: "TINY",
                                  tooltip: "New Investigation"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: {
                                        a!richTextItem(
                                          text: { "Verify Documentation" },
                                          style: { "STRONG" }
                                        )
                                      },
                                      color: "ACCENT",
                                      size: ""
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: {
                                        a!richTextIcon(icon: "briefcase"),
                                        " CUS-020  ",
                                        a!richTextIcon(icon: "calendar-o"),
                                        " Due Nov 1"
                                      },
                                      color: "#606068",
                                      size: "SMALL"
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(icon: "ellipsis-v", color: "#606068")
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "NONE"
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        marginAbove: "LESS",
                        marginBelow: "NONE",
                        showBorder: false
                      )
                    },
                    divider: "BELOW",
                    marginAbove: "EVEN_LESS",
                    marginBelow: "NONE"
                  ),
                  a!sectionLayout(
                    label: "",
                    contents: {
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  labelPosition: "COLLAPSED",
                                  helpTooltip: "Attach Document",
                                  icon: "map",
                                  text: "",
                                  backgroundColor: "#EDEEF2",
                                  contentColor: "#2E2E35",
                                  size: "TINY",
                                  tooltip: "New Investigation"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: {
                                        a!richTextItem(
                                          text: { "Update Customer Address " },
                                          style: { "STRONG" }
                                        )
                                      },
                                      color: "ACCENT",
                                      size: ""
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: {
                                        a!richTextIcon(icon: "briefcase"),
                                        " CUS-025  ",
                                        a!richTextIcon(icon: "calendar-o"),
                                        " Due Nov 10"
                                      },
                                      color: "#606068",
                                      size: "SMALL"
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(icon: "ellipsis-v", color: "#606068")
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "NONE"
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        marginAbove: "LESS",
                        marginBelow: "NONE",
                        showBorder: false
                      )
                    },
                    divider: "BELOW",
                    marginAbove: "EVEN_LESS",
                    marginBelow: "NONE"
                  ),
                  a!sectionLayout(
                    label: "",
                    contents: {
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  labelPosition: "COLLAPSED",
                                  helpTooltip: "Attach Document",
                                  icon: "map",
                                  text: "",
                                  backgroundColor: "#EDEEF2",
                                  contentColor: "#2E2E35",
                                  size: "TINY",
                                  tooltip: "New Investigation"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: {
                                        a!richTextItem(
                                          text: { "Update Customer Address " },
                                          style: { "STRONG" }
                                        )
                                      },
                                      color: "ACCENT",
                                      size: ""
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: {
                                        a!richTextIcon(icon: "briefcase"),
                                        " CUS-035  ",
                                        a!richTextIcon(icon: "calendar-o"),
                                        " Due Nov 10"
                                      },
                                      color: "#606068",
                                      size: "SMALL"
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(icon: "ellipsis-v", color: "#606068")
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "NONE"
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        marginAbove: "LESS",
                        marginBelow: "NONE",
                        showBorder: false
                      )
                    },
                    divider: "BELOW",
                    marginAbove: "EVEN_LESS",
                    marginBelow: "NONE"
                  ),
                  a!sectionLayout(
                    label: "",
                    contents: {
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  labelPosition: "COLLAPSED",
                                  helpTooltip: "Attach Document",
                                  icon: "tasks-alt",
                                  text: "",
                                  backgroundColor: "#EDEEF2",
                                  contentColor: "#2E2E35",
                                  size: "TINY",
                                  tooltip: "New Investigation"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: {
                                        a!richTextItem(
                                          text: { "Update Customer Address " },
                                          style: { "STRONG" }
                                        )
                                      },
                                      color: "ACCENT",
                                      size: ""
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: {
                                        a!richTextIcon(icon: "briefcase"),
                                        " CUS-047  ",
                                        a!richTextIcon(icon: "calendar-o"),
                                        " Due Nov 10"
                                      },
                                      color: "#606068",
                                      size: "SMALL"
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(icon: "ellipsis-v", color: "#606068")
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "NONE"
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        marginAbove: "LESS",
                        marginBelow: "NONE",
                        showBorder: false
                      )
                    },
                    divider: "BELOW",
                    marginAbove: "EVEN_LESS",
                    marginBelow: "NONE"
                  ),
                  a!sectionLayout(
                    label: "",
                    contents: {
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  labelPosition: "COLLAPSED",
                                  helpTooltip: "Attach Document",
                                  icon: "tasks-alt",
                                  text: "",
                                  backgroundColor: "#EDEEF2",
                                  contentColor: "#2E2E35",
                                  size: "TINY",
                                  tooltip: "New Investigation"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: {
                                        a!richTextItem(
                                          text: { "Update Customer Address " },
                                          style: { "STRONG" }
                                        )
                                      },
                                      color: "ACCENT",
                                      size: ""
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: {
                                        a!richTextIcon(icon: "briefcase"),
                                        " CUS-065  ",
                                        a!richTextIcon(icon: "calendar-o"),
                                        " Due Nov 10"
                                      },
                                      color: "#606068",
                                      size: "SMALL"
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(icon: "ellipsis-v", color: "#606068")
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "NONE"
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        marginAbove: "LESS",
                        marginBelow: "NONE",
                        showBorder: false
                      )
                    },
                    divider: "BELOW",
                    marginAbove: "EVEN_LESS",
                    marginBelow: "NONE"
                  ),
                  a!sectionLayout(
                    label: "",
                    contents: {
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  labelPosition: "COLLAPSED",
                                  helpTooltip: "Attach Document",
                                  icon: "tasks-alt",
                                  text: "",
                                  backgroundColor: "#EDEEF2",
                                  contentColor: "#2E2E35",
                                  size: "TINY",
                                  tooltip: "New Investigation"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: {
                                        a!richTextItem(
                                          text: { "Update Customer Address " },
                                          style: { "STRONG" }
                                        )
                                      },
                                      color: "ACCENT",
                                      size: ""
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: {
                                        a!richTextIcon(icon: "briefcase"),
                                        " CUS-105  ",
                                        a!richTextIcon(icon: "calendar-o"),
                                        " Due Nov 10"
                                      },
                                      color: "#606068",
                                      size: "SMALL"
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(icon: "ellipsis-v", color: "#606068")
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "NONE"
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        marginAbove: "LESS",
                        marginBelow: "NONE",
                        showBorder: false
                      )
                    },
                    divider: "BELOW",
                    marginAbove: "EVEN_LESS",
                    marginBelow: "NONE"
                  ),
                  a!sectionLayout(
                    label: "",
                    contents: {
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  labelPosition: "COLLAPSED",
                                  helpTooltip: "Attach Document",
                                  icon: "tasks-alt",
                                  text: "",
                                  backgroundColor: "#EDEEF2",
                                  contentColor: "#2E2E35",
                                  size: "TINY",
                                  tooltip: "New Investigation"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: {
                                        a!richTextItem(
                                          text: { "Update Customer Address " },
                                          style: { "STRONG" }
                                        )
                                      },
                                      color: "ACCENT",
                                      size: ""
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: {
                                        a!richTextIcon(icon: "briefcase"),
                                        " CUS-55  ",
                                        a!richTextIcon(icon: "calendar-o"),
                                        " Due Nov 10"
                                      },
                                      color: "#606068",
                                      size: "SMALL"
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(icon: "ellipsis-v", color: "#606068")
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "NONE"
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        marginAbove: "LESS",
                        marginBelow: "NONE",
                        showBorder: false
                      )
                    },
                    divider: "BELOW",
                    marginAbove: "EVEN_LESS",
                    marginBelow: "NONE"
                  ),
                  a!cardLayout(
                    padding: "STANDARD",
                    contents: {
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: {
                              "See All Active Tasks (25) ",
                              a!richTextIcon(icon: "angle-right")
                            },
                            color: "ACCENT",
                            style: { "STRONG" }
                          )
                        },
                        align: "CENTER"
                      )
                    },
                    showBorder: false
                  )
                },
                height: "AUTO",
                style: "NONE",
                padding: "NONE",
                shape: "SEMI_ROUNDED",
                marginBelow: "STANDARD",
                borderColor: "#EDEEFA"
              )
            },
            width: "MEDIUM"
          ),
          a!columnLayout(
            contents: {
              a!sectionLayout(
                label: "Active Cases",
                labelSize: "SMALL",
                labelColor: "STANDARD",
                labelHeadingTag: "H2",
                marginBelow: "NONE"
              ),
              a!cardLayout(
                contents: {
                  a!cardLayout(
                    shape: "SEMI_ROUNDED",
                    padding: "STANDARD",
                    contents: {
                      a!columnsLayout(
                        columns: {
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
                          ),
                          a!columnLayout(
                            contents: {
                              a!dropdownField(
                                label: "Dropdown",
                                labelPosition: "COLLAPSED",
                                placeholder: "Select a Status",
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
                          ),
                          a!columnLayout(
                            contents: {
                              a!dropdownField(
                                label: "Dropdown",
                                labelPosition: "COLLAPSED",
                                placeholder: "Select a Customer",
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
                          ),
                          a!columnLayout(
                            contents: {
                              a!dropdownField(
                                label: "Dropdown",
                                labelPosition: "COLLAPSED",
                                placeholder: "Select an Assignee",
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
                        },
                        marginAbove: "EVEN_LESS",
                        spacing: "DENSE"
                      ),
                      a!buttonArrayLayout(
                        buttons: {
                          a!buttonWidget(
                            label: "Update",
                            icon: "pencil-square-o",
                            size: "SMALL",
                            style: "OUTLINE",
                            color: "SECONDARY"

                          ),
                          a!buttonWidget(
                            label: "Delete",
                            icon: "trash",
                            size: "SMALL",
                            style: "OUTLINE",
                            color: "SECONDARY",
                            disabled: true
                          )
                        },
                        align: "START"
                      ),
                      a!gridField(
                        label: "Employee Directory",
                        labelPosition: "COLLAPSED",
                        /* Replace the dummy data with a query, rule, or function that returns a datasubset and uses fv!pagingInfo as the paging configuration. */
                        data: todatasubset(
                          {
                            a!map(
                              id: 11,
                              source: "Automatic",
                              source_icon: "link",
                              source_detail: "Operations",
                              award_name: "",
                              company: "William and Baker Inc.",
                              amount: "Me",
                              text_color: "#E2143F",
                              tag_color: "#E2143F",
                              risk_color: "#E2143F",
                              risk_icon: "exclamation-triangle",
                              risk: "Expired 2 days ago",
                              award: "Expired",
                              icon: "spinner",
                              color: "#606068",
                              name: "CUS-001",
                              cs: "Kevin Lu",
                              dept: "In Progress",
                              role: "Type 1",
                              team: "Front-End Components",
                              pto: 15,
                              startDate: "01/01/2020 - 12/31/2021"
                            ),
                            a!map(
                              id: 22,
                              source: "Manual",
                              source_icon: "user-circle",
                              source_detail: "Operations",
                              company: "Lockness Corporation",
                              amount: "Me",
                              text_color: "",
                              tag_color: "#F2CB18",
                              risk_color: "#F2CB18",
                              risk_icon: "clock-o",
                              risk: "Expires in 30 days",
                              award: "Expires soon",
                              icon: "spinner",
                              color: "#606068",
                              name: "CUS-002",
                              dept: "In Progress",
                              cs: "Kevin Lu",
                              role: "Type 2",
                              team: "Accounts Payable",
                              pto: 2,
                              startDate: "01/01/2020 - 12/31/2021"
                            ),
                            a!map(
                              id: 33,
                              source: "Manual",
                              source_icon: "user-circle",
                              source_detail: "Operations",
                              company: "Wilford Inc.",
                              amount: "Me",
                              text_color: "",
                              tag_color: "#F2CB18",
                              risk_color: "#F2CB18",
                              risk_icon: "clock-o",
                              risk: "Expires in 60 days",
                              award: "Expires soon",
                              icon: "check-circle",
                              color: "POSITIVE",
                              name: "CUS-003",
                              cs: "Kevin Lu",
                              dept: "In Progress",
                              role: "Type 3",
                              team: "User Acceptance Testing",
                              pto: 5,
                              startDate: "01/01/2020 - 12/31/2021"
                            ),
                            a!map(
                              id: 44,
                              source: "Automatic",
                              source_icon: "link",
                              source_detail: "Operations",
                              company: "Blue Landscape LLC.",
                              amount: "Me",
                              text_color: "",
                              risk_color: "",
                              risk_icon: "clock-o",
                              risk: "Expires in 67 days ago",
                              award: "",
                              icon: "check-circle",
                              color: "POSITIVE",
                              name: "CUS-004",
                              dept: "On Hold",
                              role: "Type 4",
                              cs: "Anne Williams",
                              team: "User Experience",
                              pto: 49,
                              startDate: "01/01/2020 - 12/31/2021"
                            ),
                            a!map(
                              id: 55,
                              source: "Automatic",
                              source_icon: "link",
                              source_detail: "Operations",
                              company: "Cutting Edge Concrete Services, Inc.",
                              amount: "Kevin Lu",
                              text_color: "",
                              risk_color: "",
                              risk_icon: "clock-o",
                              risk: "Expires in 90 days ago",
                              award: "",
                              icon: "check-circle",
                              color: "POSITIVE",
                              name: "CUS-005",
                              dept: "On Hold",
                              cs: "Anne Williams",
                              role: "Type 5",
                              team: "Commercial North America",
                              pto: 15,
                              startDate: "01/01/2020 - 12/31/2021"
                            ),
                            a!map(
                              id: 66,
                              source: "Automatic",
                              source_icon: "link",
                              source_detail: "IT",
                              company: "Integration Evolve Inc.",
                              amount: "Kevin Lu",
                              text_color: "",
                              risk_color: "",
                              risk_icon: "clock-o",
                              risk: "Expires in 120 days ago",
                              award: "",
                              icon: "check-circle",
                              color: "POSITIVE",
                              name: "CUS-006",
                              dept: "Created",
                              cs: "Anne Williams",
                              role: "Type 6",
                              team: "Front-End Components",
                              pto: 15,
                              startDate: "01/01/2020 - 12/31/2021"
                            ),
                            a!map(
                              id: 77,
                              source: "Automatic",
                              source_icon: "link",
                              source_detail: "IT",
                              company: "Development One Inc.",
                              amount: "Kevin Lu",
                              text_color: "",
                              risk_color: "",
                              risk_icon: "clock-o",
                              risk: "Expires in 180 days ago",
                              award: "",
                              icon: "check-circle",
                              color: "POSITIVE",
                              name: "CUS-007",
                              dept: "Created",
                              role: "Type 7",
                              cs: "Will Robbins",
                              team: "Accounts Payable",
                              pto: 2,
                              startDate: "01/01/2020 - 12/31/2021"
                            ),
                            a!map(
                              id: 44,
                              source: "Automatic",
                              source_icon: "link",
                              source_detail: "IT",
                              company: "Rolls Edmunds Corp.",
                              amount: "Kevin Lu",
                              text_color: "",
                              risk_color: "",
                              risk_icon: "clock-o",
                              risk: "Expires in 67 days ago",
                              award: "",
                              icon: "check-circle",
                              color: "POSITIVE",
                              name: "CUS-008",
                              dept: "Created",
                              role: "Type 4",
                              cs: "Will Robbins",
                              team: "User Experience",
                              pto: 49,
                              startDate: "01/01/2020 - 12/31/2021"
                            ),
                            a!map(
                              id: 55,
                              source: "Automatic",
                              source_icon: "link",
                              source_detail: "HR",
                              company: "Northstar Group",
                              amount: "Kevin Lu",
                              text_color: "",
                              risk_color: "",
                              risk_icon: "clock-o",
                              risk: "Expires in 90 days ago",
                              award: "",
                              icon: "check-circle",
                              color: "POSITIVE",
                              name: "CUS-010",
                              dept: "Created",
                              role: "Type 5",
                              cs: "Will Robbins",
                              team: "Commercial North America",
                              pto: 15,
                              startDate: "01/01/2020 - 12/31/2021"
                            ),
                            a!map(
                              id: 66,
                              source: "Automatic",
                              source_icon: "link",
                              source_detail: "HR",
                              company: "Natural Organics",
                              amount: "Kevin Lu",
                              text_color: "",
                              risk_color: "",
                              risk_icon: "clock-o",
                              risk: "Expires in 120 days ago",
                              award: "",
                              icon: "check-circle",
                              color: "POSITIVE",
                              name: "CUS-011",
                              dept: "Closed",
                              role: "Type 6",
                              cs: "Will Robbins",
                              team: "Front-End Components",
                              pto: 15,
                              startDate: "01/01/2020 - 12/31/2021"
                            ),
                            a!map(
                              id: 77,
                              source: "Automatic",
                              source_icon: "link",
                              source_detail: "Other",
                              company: "William and Baker Inc.",
                              amount: "Kevin Lu",
                              text_color: "",
                              risk_color: "",
                              risk_icon: "clock-o",
                              risk: "Expires in 180 days ago",
                              award: "",
                              icon: "check-circle",
                              color: "POSITIVE",
                              name: "CUS-012",
                              dept: "Closed",
                              role: "Type 7",
                              cs: "Will Robbins",
                              team: "Accounts Payable",
                              pto: 2,
                              startDate: "01/01/2020 - 12/31/2021"
                            ),
                            a!map(
                              id: 44,
                              source: "Automatic",
                              source_icon: "link",
                              source_detail: "Other",
                              company: "RMI Solutions",
                              amount: "Kevin Lu",
                              text_color: "",
                              risk_color: "",
                              risk_icon: "clock-o",
                              risk: "Expires in 67 days ago",
                              award: "",
                              icon: "check-circle",
                              color: "POSITIVE",
                              name: "CUS-013",
                              dept: "Closed",
                              role: "Type 4",
                              cs: "Will Robbins",
                              team: "User Experience",
                              pto: 49,
                              startDate: "01/01/2020 - 12/31/2021"
                            ),
                            a!map(
                              id: 55,
                              source: "Automatic",
                              source_icon: "link",
                              source_detail: "Other",
                              company: "Astrop Inc.",
                              amount: "Kevin Lu",
                              text_color: "",
                              risk_color: "",
                              risk_icon: "clock-o",
                              risk: "Expires in 90 days ago",
                              award: "",
                              icon: "check-circle",
                              color: "POSITIVE",
                              name: "CUS-014",
                              dept: "Closed",
                              role: "Type 5",
                              cs: "Will Robbins",
                              team: "Commercial North America",
                              pto: 15,
                              startDate: "01/01/2020 - 12/31/2021"
                            ),
                            a!map(
                              id: 66,
                              source: "Automatic",
                              source_icon: "link",
                              source_detail: "Other",
                              company: "Wilfurt Enterprises",
                              amount: "Kevin Lu",
                              text_color: "",
                              risk_color: "",
                              risk_icon: "clock-o",
                              risk: "Expires in 120 days ago",
                              award: "",
                              icon: "check-circle",
                              color: "POSITIVE",
                              name: "CUS-015",
                              dept: "Closed",
                              role: "Type 6",
                              cs: "Will Robbins",
                              team: "Front-End Components",
                              pto: 15,
                              startDate: "01/01/2020 - 12/31/2021"
                            ),
                            a!map(
                              id: 77,
                              source: "Automatic",
                              source_icon: "link",
                              source_detail: "Other",
                              company: "Sunbeam Technologies",
                              amount: "Kevin Lu",
                              text_color: "",
                              risk_color: "",
                              risk_icon: "clock-o",
                              risk: "Expires in 180 days ago",
                              award: "",
                              icon: "check-circle",
                              color: "POSITIVE",
                              name: "CUS-016",
                              dept: "Closed",
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
                            label: "Name",
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
                                  icon: "archive",
                                  color: "#606068",
                                  size: "SMALL"
                                ),
                                " ",
                                a!richTextItem(
                                  text: fv!row.source_detail,
                                  color: "#606068",
                                  size: "SMALL"
                                )
                              }
                            )
                          ),
                          a!gridColumn(
                            label: "Status",
                            value: a!richTextDisplayField(
                              value: { a!richTextItem(text: fv!row.dept) },
                              preventWrapping: true
                            )
                          ),
                          a!gridColumn(
                            label: "Customer",
                            sortField: "dept",
                            value: a!richTextDisplayField(
                              value: {
                                a!richTextItem(text: fv!row.company, color: "ACCENT")
                              },
                              preventWrapping: true
                            )
                          ),
                          a!gridColumn(
                            label: "Assigned to",
                            value: a!richTextDisplayField(
                              value: { a!richTextItem(text: fv!row.amount) }
                            )
                          ),
                          a!gridColumn(
                            label: "Due",
                            sortField: "startDate",
                            value: a!richTextDisplayField(
                              value: {
                                a!richTextItem(text: "01/01/2021", style: "STRONG"),
                                char(10),
                                a!richTextIcon(
                                  icon: fv!row.risk_icon,
                                  color: fv!row.tag_color,
                                  size: "SMALL"
                                ),
                                " ",
                                a!richTextItem(text: fv!row.risk, size: "SMALL")
                              }
                            ),
                            align: "END"
                          )
                        },
                        shadeAlternateRows: false,
                        pageSize: 20,
                        selectable: true,
                        borderStyle: "LIGHT"
                      )
                    },
                    height: "AUTO",
                    style: "NONE",
                    marginBelow: "NONE",
                    borderColor: "#EDEEFA"
                  )
                },
                height: "AUTO",
                style: "NONE",
                padding: "NONE",
                marginBelow: "STANDARD",
                borderColor: "#EDEEFA"
              )
            }
          ),
          a!columnLayout(
            contents: {
              a!sectionLayout(
                label: "Cases Submitted",
                labelSize: "SMALL",
                labelColor: "STANDARD",
                labelHeadingTag: "H2",
                marginBelow: "NONE"
              ),
              a!cardLayout(
                padding: "STANDARD",
                shape: "SEMI_ROUNDED",
                contents: {
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!tagField(
                          labelPosition: "COLLAPSED",
                          tags: {
                            a!tagItem(text: "1M", backgroundColor: "ACCENT")
                          },
                          size: "SMALL"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!tagField(
                          labelPosition: "COLLAPSED",
                          tags: {
                            a!tagItem(
                              text: "3M",
                              backgroundColor: "#ffffff",
                              textColor: "#2322f0"
                            )
                          },
                          size: "SMALL"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!tagField(
                          labelPosition: "COLLAPSED",
                          tags: {
                            a!tagItem(
                              text: "6M",
                              backgroundColor: "#ffffff",
                              textColor: "#2322f0"
                            )
                          },
                          size: "SMALL"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!tagField(
                          labelPosition: "COLLAPSED",
                          tags: {
                            a!tagItem(
                              text: "1Y",
                              backgroundColor: "#ffffff",
                              textColor: "#2322f0"
                            )
                          },
                          size: "SMALL"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!tagField(
                          label: "Tag Field",
                          labelPosition: "COLLAPSED",
                          tags: {
                            a!tagItem(
                              text: "3Y",
                              backgroundColor: "#ffffff",
                              textColor: "#2322f0"
                            )
                          },
                          size: "SMALL"
                        ),
                        width: "MINIMIZE"
                      )
                    }
                  ),
                  a!lineChartField(
                    label: "Line Chart",
                    labelPosition: "COLLAPSED",
                    categories: {
                      "1 May",
                      "2 May",
                      "3 May",
                      "3 May",
                      "3 May",
                      "3 May",
                      "3 May",
                      "3 May",
                      "3 May",
                      "3 May",
                      "3 May",
                      "3 May"
                    },
                    series: {
                      a!chartSeries(
                        label: "Chart Series",
                        data: {
                          1,
                          2,
                          3,
                          4,
                          5,
                          6,
                          7,
                          8,
                          9,
                          10,
                          3,
                          6,
                          6,
                          7,
                          5,
                          9,
                          15,
                          17,
                          19,
                          1,
                          2,
                          3,
                          3,
                          1,
                          0,
                          8,
                          19,
                          5,
                          1,
                          2
                        }
                      )
                    },
                    showLegend: false,
                    showTooltips: false,
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
                marginBelow: "STANDARD",
                borderColor: "#EDEEFA"
              ),
              a!sectionLayout(
                label: "Cases by Status",
                labelSize: "SMALL",
                labelColor: "STANDARD",
                labelHeadingTag: "H2",
                marginAbove: "STANDARD",
                marginBelow: "NONE"
              ),
              a!cardLayout(
                contents: {
                  a!sectionLayout(
                    label: "",
                    contents: {
                      a!sideBySideLayout(
                        items: {
                          a!sideBySideItem(
                            item: a!tagField(
                              labelPosition: "COLLAPSED",
                              tags: {
                                a!tagItem(text: "1M", backgroundColor: "ACCENT")
                              },
                              size: "SMALL"
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!tagField(
                              labelPosition: "COLLAPSED",
                              tags: {
                                a!tagItem(
                                  text: "3M",
                                  backgroundColor: "#ffffff",
                                  textColor: "#2322f0"
                                )
                              },
                              size: "SMALL"
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!tagField(
                              labelPosition: "COLLAPSED",
                              tags: {
                                a!tagItem(
                                  text: "6M",
                                  backgroundColor: "#ffffff",
                                  textColor: "#2322f0"
                                )
                              },
                              size: "SMALL"
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!tagField(
                              labelPosition: "COLLAPSED",
                              tags: {
                                a!tagItem(
                                  text: "1Y",
                                  backgroundColor: "#ffffff",
                                  textColor: "#2322f0"
                                )
                              },
                              size: "SMALL"
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!tagField(
                              label: "Tag Field",
                              labelPosition: "COLLAPSED",
                              tags: {
                                a!tagItem(
                                  text: "3Y",
                                  backgroundColor: "#ffffff",
                                  textColor: "#2322f0"
                                )
                              },
                              size: "SMALL"
                            ),
                            width: "MINIMIZE"
                          )
                        }
                      ),
                      a!barChartField(
                        label: "Bar Chart",
                        labelPosition: "COLLAPSED",
                        categories: {
                          "Created",
                          "In Progress",
                          "On Hold",
                          "Closed"
                        },
                        series: {
                          a!chartSeries(label: "Chart Series", data: { 1, 1, 4, 3 })
                        },
                        stacking: "NONE",
                        showLegend: false,
                        showTooltips: true,
                        colorScheme: a!colorSchemeCustom(
                          colors: {
                            "#173AB6",
                            "#E8ECFA",
                            "#F6A53F",
                            "#FFDC3F",
                            "#800322"
                          }
                        ),
                        height: "SHORT",
                        xAxisStyle: "STANDARD",
                        yAxisStyle: "STANDARD"
                      )
                    },
                    marginBelow: "NONE"
                  )
                },
                height: "AUTO",
                style: "NONE",
                shape: "SEMI_ROUNDED",
                padding: "STANDARD",
                marginBelow: "STANDARD",
                borderColor: "#EDEEFA"
              ),
              a!sectionLayout(
                label: "Cases by Type",
                labelSize: "SMALL",
                labelColor: "STANDARD",
                labelHeadingTag: "H2",
                marginAbove: "STANDARD",
                marginBelow: "NONE"
              ),
              a!cardLayout(
                contents: {
                  a!sectionLayout(
                    label: "",
                    contents: {
                      a!sideBySideLayout(
                        items: {
                          a!sideBySideItem(
                            item: a!tagField(
                              labelPosition: "COLLAPSED",
                              tags: {
                                a!tagItem(text: "1M", backgroundColor: "ACCENT")
                              },
                              size: "SMALL"
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!tagField(
                              labelPosition: "COLLAPSED",
                              tags: {
                                a!tagItem(
                                  text: "3M",
                                  backgroundColor: "#ffffff",
                                  textColor: "#2322f0"
                                )
                              },
                              size: "SMALL"
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!tagField(
                              labelPosition: "COLLAPSED",
                              tags: {
                                a!tagItem(
                                  text: "6M",
                                  backgroundColor: "#ffffff",
                                  textColor: "#2322f0"
                                )
                              },
                              size: "SMALL"
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!tagField(
                              labelPosition: "COLLAPSED",
                              tags: {
                                a!tagItem(
                                  text: "1Y",
                                  backgroundColor: "#ffffff",
                                  textColor: "#2322f0"
                                )
                              },
                              size: "SMALL"
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!tagField(
                              label: "Tag Field",
                              labelPosition: "COLLAPSED",
                              tags: {
                                a!tagItem(
                                  text: "3Y",
                                  backgroundColor: "#ffffff",
                                  textColor: "#2322f0"
                                )
                              },
                              size: "SMALL"
                            ),
                            width: "MINIMIZE"
                          )
                        }
                      ),
                      a!barChartField(
                        label: "Bar Chart",
                        labelPosition: "COLLAPSED",
                        categories: {
                          "Created",
                          "In Progress",
                          "On Hold",
                          "Closed"
                        },
                        series: {
                          a!chartSeries(label: "Chart Series", data: { 1, 1, 4, 3 })
                        },
                        stacking: "NONE",
                        showLegend: false,
                        showTooltips: true,
                        colorScheme: a!colorSchemeCustom(
                          colors: {
                            "#173AB6",
                            "#E8ECFA",
                            "#F6A53F",
                            "#FFDC3F",
                            "#800322"
                          }
                        ),
                        height: "SHORT",
                        xAxisStyle: "STANDARD",
                        yAxisStyle: "STANDARD"
                      )
                    },
                    marginBelow: "NONE"
                  )
                },
                height: "AUTO",
                style: "NONE",
                shape: "SEMI_ROUNDED",
                padding: "STANDARD",
                marginBelow: "STANDARD",
                borderColor: "#EDEEFA"
              ),
              a!sectionLayout(
                label: "Resources",
                labelSize: "SMALL",
                labelColor: "STANDARD",
                labelHeadingTag: "H2",
                marginAbove: "STANDARD",
                marginBelow: "NONE"
              ),
              a!cardLayout(
                padding: "STANDARD",
                contents: {
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "link",
                          backgroundColor: "#E8ECFA",
                          contentColor: "#173AB6",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: {
                            a!richTextItem(
                              text: { "User Registration" },
                              color: "ACCENT",
                              style: { "STRONG" }
                            )
                          }
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "EVEN_LESS",
                    marginBelow: "STANDARD"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "link",
                          backgroundColor: "#E8ECFA",
                          contentColor: "#173AB6",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: {
                            a!richTextItem(
                              text: { "Tools and Tips" },
                              color: "ACCENT",
                              style: { "STRONG" }
                            )
                          }
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "STANDARD",
                    marginBelow: "STANDARD"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "download",
                          backgroundColor: "#E8ECFA",
                          contentColor: "#173AB6",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: {
                            a!richTextItem(
                              text: { "Frequently Asked Questions" },
                              color: "ACCENT",
                              style: { "STRONG" }
                            )
                          }
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "STANDARD",
                    marginBelow: "STANDARD"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "download",
                          backgroundColor: "#E8ECFA",
                          contentColor: "#173AB6",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: {
                            a!richTextItem(
                              text: { "Case Standard Language" },
                              color: "ACCENT",
                              style: { "STRONG" }
                            )
                          }
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "STANDARD",
                    marginBelow: "EVEN_LESS"
                  )
                },
                height: "AUTO",
                style: "NONE",
                borderColor: "#EDEEFA",
                shape: "SEMI_ROUNDED",
                marginBelow: "STANDARD"
              )
            },
            width: "MEDIUM"
          )
        }
      )
    },
    backgroundColor: "#FAFAFC"
  )
)
```

#### Guided Experience

```
a!localVariables(
  /* Header Cards Data */
  local!headerCards: {
    {
      title: "Workforce Safety Homepage",
      description: "Take a look at how Workforce Safety serves your users",
      icon: "external-link-square",
      showIcon: true,
      link: a!dynamicLink(),
      showBorder: true
    },
    {
      title: "Workforce Safety Documentation", 
      description: "Understand how Workforce Safety can help your organization",
      icon: "external-link-square",
      showIcon: true,
      link: a!dynamicLink(),
      showBorder: false
    },
    {
      title: "Understand Workforce Safety",
      description: "Take a tour of the different features available in Workforce Safety", 
      icon: null,
      showIcon: false,
      link: a!dynamicLink(),
      showBorder: true
    }
  },

  /* Setup Cards Data */
  local!setupCards: {
    {
      icon: "qrcode",
      title: "Pass Requests",
      description: "Configure the information requested from your employees",
      infoText: "Information needed",
      infoCaption: "Facilties, Departments and Pass Requests Questions",
      link: a!dynamicLink()
    },
    {
      icon: "comments", 
      title: "Contact Tracing",
      description: "Keep track of employees that could be exposed to a COVID infection",
      infoText: "Information needed",
      infoCaption: "Facilities and Areas",
      link: a!dynamicLink()
    },
    {
      icon: "shield",
      title: "Health Information",
      description: "Understand vaccination status and COVID-19 history of employees",
      infoText: "Information needed", 
      infoCaption: "Health Information Questions",
      link: a!dynamicLink()
    }
  },

  /* Questionnaire Cards Data */
  local!questionnaireCards: {
    {
      icon: "qrcode",
      title: "Pass Requests",
      status: "ACTIVE",
      statusColor: "STANDARD",
      link: a!dynamicLink()
    },
    {
      icon: "clipboard",
      title: "Intake Survey", 
      status: "INACTIVE",
      statusColor: "SECONDARY",
      link: a!dynamicLink()
    },
    {
      icon: "bed",
      title: "Isolation Update",
      status: "ACTIVE", 
      statusColor: "STANDARD",
      link: a!dynamicLink()
    }
  },
  /* Feature Management Cards Data */
  local!featureCards: {
    {
      icon: "exclamation-triangle",
      title: "Incident Management",
      link: a!dynamicLink()
    },
    {
      icon: "sign-in",
      title: "Capacity Management", 
      link: a!dynamicLink()
    },
    {
      icon: "th",
      title: "Cohort Management",
      link: a!dynamicLink()
    },
    {
      icon: "medkit", 
      title: "COVID-19 Testing",
      link: a!dynamicLink()
    },
    {
      icon: "book",
      title: "Safety Guidelines",
      link: a!dynamicLink()
    },
    {
      icon: "comments",
      title: "Contact Tracing", 
      link: a!dynamicLink()
    },
    {
      icon: "shield",
      title: "Health Information",
      link: a!dynamicLink()
    },
    {
      icon: "hand-paper-o",
      title: "Community Volunteering",
      link: a!dynamicLink()
    }
  },
  /* Communication Cards Data */
  local!communicationCards: {
    {
      icon: "bullhorn",
      title: "Announcements",
      link: a!dynamicLink()
    },
    {
      icon: "external-link-square",
      title: "Helpful Links",
      link: a!dynamicLink()
    },
    {
      icon: "files-o", 
      title: "Policy Documents",
      link: a!dynamicLink()
    }
  },
  /* System Settings Cards Data */
  local!systemCards: {
    {
      icon: "paint-brush",
      title: "Branding",
      link: a!dynamicLink()
    },
    {
      icon: "users",
      title: "User Groups", 
      link: a!dynamicLink()
    },
    {
      icon: "floppy-o",
      title: "Data Management",
      link: a!dynamicLink()
    }
  },
  a!headerContentLayout(
    header: {
      a!billboardLayout(
        backgroundMedia: a!webImage(
          source:"https://raw.githubusercontent.com/pglevy/design-system-docs/main/assets/images/header-image.png"
        ),
        backgroundColor: "#FAFAFC",
        height: "MEDIUM",
        marginBelow: "NONE",
        overlay: a!barOverlay(
          position: "BOTTOM",
          contents: {
            a!richTextDisplayField(
              labelPosition: "COLLAPSED",
              value: {
                a!richTextItem(
                  text: {
                    "Safely manage "
                  },
                  size: "LARGE"
                ),
                char(10),
                a!richTextItem(
                  text: {
                    "your onsite workforce "
                  },
                  size: "LARGE"
                ),
                char(10),
                char(10),
                char(10)
              }
            ),
            a!cardGroupLayout(
              cards: a!forEach(
                items: local!headerCards,
                expression: a!cardLayout(
                  contents: {
                    a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: {
                        a!richTextItem(
                          text: if(
                            fv!item.showIcon,
                            {
                              fv!item.title,
                              a!richTextItem(
                                text: {
                                  " ",
                                  a!richTextIcon(
                                    icon: fv!item.icon
                                  )
                                },
                                style: {
                                  "STRONG"
                                }
                              )
                            },
                            fv!item.title
                          ),
                          color: "ACCENT",
                          size: "MEDIUM"
                        ),
                        char(10),
                        char(10),
                        a!richTextItem(
                          text: fv!item.description,
                          color: "#666666",
                          size: "STANDARD"
                        )
                      }
                    )
                  },
                  link: fv!item.link,
                  height: "SHORT",
                  style: "NONE",
                  padding: "STANDARD",
                  marginBelow: "NONE",
                  borderColor: "#EDEEFA",
                  shape: "SEMI_ROUNDED"
                )
              ),
              marginBelow: "NONE"
            )
          },
          style: "NONE"
        )
      )
    },
    contents: {
      a!cardLayout(
        contents: {
          a!richTextDisplayField(
            labelPosition: "COLLAPSED",
            value: {
              a!richTextItem(
                text: {
                  "Set Up Workforce Safety"
                },
                size: "MEDIUM_PLUS"
              ),
              char(10)
            }
          ),
          a!richTextDisplayField(
            labelPosition: "COLLAPSED",
            value: {
              a!richTextItem(
                text: {
                  "To get started with using Workforce Safety, configure the following features for your organization"
                },
                color: "SECONDARY",
                size: "STANDARD"
              ),
              char(10),
              char(10)
            }
          ),
          a!cardGroupLayout(
            cards: a!forEach(
              items: local!setupCards,
              expression: a!cardLayout(
                contents: {
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          label: "Stamp",
                          labelPosition: "COLLAPSED",
                          icon: fv!item.icon,
                          text: "",
                          backgroundColor: "#E0E0E0",
                          contentColor: "ACCENT",
                          size: "SMALL",
                          align: "START"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: {
                            a!richTextItem(
                              text: fv!item.title,
                              color: "ACCENT",
                              size: "MEDIUM",
                              style: {
                                "STRONG"
                              }
                            ),
                            char(10)
                          }
                        ),
                        width: "MINIMIZE"
                      )
                    },
                    alignVertical: "MIDDLE"
                  ),
                  a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: {
                      a!richTextItem(
                        text: fv!item.description,
                        color: "#666666"
                      ),
                      char(10),
                      char(10),
                      a!richTextItem(
                        text: {
                          fv!item.infoText & " ",
                          a!richTextIcon(
                            icon: "info-circle",
                            caption: fv!item.infoCaption
                          )
                        },
                        color: "SECONDARY"
                      ),
                      char(10)
                    }
                  )
                },
                link: fv!item.link,
                height: "AUTO",
                style: "NONE",
                padding: "LESS",
                marginBelow: "STANDARD",
                shape: "SEMI_ROUNDED"
              )
            )
          )
        },
        height: "AUTO",
        style: "NONE",
        padding: "STANDARD",
        marginBelow: "STANDARD",
        borderColor: "#EDEEFA",
        shape: "SEMI_ROUNDED"
      ),
      a!cardLayout(
        contents: {
          {
            a!localVariables(
              local!selectedTab: 1,
              local!toggle1: true,
              {
                a!buttonArrayLayout(
                  buttons: {
                    a!buttonWidget(
                      label: "General Settings",
                      saveInto: if(local!selectedTab = 1, {}, a!save(local!selectedTab, 1)),
                      size: "SMALL",
                      width: "MINIMIZE",
                      style: if(local!selectedTab = 1, "SOLID", "LINK")
                    ),
                    a!buttonWidget(
                      label: "Facilities",
                      saveInto: if(local!selectedTab = 2, {}, a!save(local!selectedTab, 2)),
                      size: "SMALL",
                      width: "MINIMIZE",
                      style: if(local!selectedTab = 2, "SOLID", "LINK")
                    ),
                    a!buttonWidget(
                      label: "Departments",
                      saveInto: if(local!selectedTab = 3, {}, a!save(local!selectedTab, 3)),
                      size: "SMALL",
                      width: "MINIMIZE",
                      style: if(local!selectedTab = 3, "SOLID", "LINK")
                    ),
                    a!buttonWidget(
                      label: "Areas",
                      saveInto: if(local!selectedTab = 4, {}, a!save(local!selectedTab, 4)),
                      size: "SMALL",
                      width: "MINIMIZE",
                      style: if(local!selectedTab = 4, "SOLID", "LINK")
                    )
                  },
                  align: "START",
                  marginBelow: "STANDARD"
                ),

                {
                  choose(
                    local!selectedTab,
                    {
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          char(10),
                          a!richTextItem(
                            text: {
                              "Questionnaire Settings"
                            },
                            size: "MEDIUM_PLUS"
                          ),
                          char(10),
                          a!richTextItem(
                            text: {
                              "Tailor the questions needed within your organization for Pass Request, Intake Survey and Isolation Update"
                            },
                            color: "SECONDARY"
                          ),
                          char(10),
                          char(10)
                        }
                      ),
                      a!cardLayout(
                        contents: {
                          a!columnsLayout(
                            columns: {
                              a!columnLayout(
                                contents: {
                                  a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      a!richTextIcon(
                                        icon: if(local!toggle1=true, "toggle-on","toggle-off"),
                                        caption: if(local!toggle1=true, "On","Off"),
                                        link: a!dynamicLink(
                                          value: if(local!toggle1=true, false,true),
                                          saveInto: local!toggle1
                                        ),
                                        linkStyle: "STANDALONE",
                                        color:"ACCENT",
                                        size: "LARGE"
                                      )
                                    },
                                    align: "LEFT"
                                  )
                                },
                                width: "EXTRA_NARROW"
                              ),
                              a!columnLayout(
                                contents: {
                                  a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      a!richTextItem(
                                        text: {
                                          "Prepopulate questionnaire answers"
                                        },
                                        size: "STANDARD",
                                        style: {
                                          "STRONG"
                                        }
                                      ),
                                      char(10),
                                      a!richTextItem(
                                        text: {
                                          "When toggled on, questionnaires are prepopulated with a users previous answers. When toggled off, performance may be impacted."
                                        },
                                        color: "SECONDARY"
                                      ),
                                      char(10)
                                    }
                                  )
                                }
                              )
                            },
                            marginBelow: "NONE",
                            spacing: "NONE"
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        padding: "LESS",
                        marginBelow: "STANDARD",
                        showBorder: true,
                        shape: "SEMI_ROUNDED"
                      ),
                      a!cardGroupLayout(
                        cards: a!forEach(
                          items: local!questionnaireCards,
                          expression: a!cardLayout(
                            contents: {
                              a!sideBySideLayout(
                                items: {
                                  a!sideBySideItem(
                                    item: a!stampField(
                                      label: "Stamp",
                                      labelPosition: "COLLAPSED",
                                      icon: fv!item.icon,
                                      backgroundColor: "#E0E0E0",
                                      contentColor: "ACCENT",
                                      size: "SMALL",
                                      align: "START"
                                    ),
                                    width: "MINIMIZE"
                                  ),
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      labelPosition: "COLLAPSED",
                                      value: {
                                        a!richTextItem(
                                          text: fv!item.title,
                                          color: "ACCENT",
                                          size: "STANDARD",
                                          style: {
                                            "STRONG"
                                          }
                                        ),
                                        char(10),
                                        a!richTextItem(
                                          text: fv!item.status,
                                          color: fv!item.statusColor,
                                          size: "SMALL",
                                          style: {
                                            "STRONG"
                                          }
                                        )
                                      }
                                    )
                                  ),
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      labelPosition: "COLLAPSED",
                                      value: {
                                        a!richTextIcon(
                                          icon: "angle-right",
                                          color: "#d9d9d9",
                                          size: "LARGE"
                                        )
                                      }
                                    ),
                                    width: "MINIMIZE"
                                  )
                                },
                                alignVertical: "MIDDLE"
                              )
                            },
                            link: fv!item.link,
                            height: "AUTO",
                            style: "NONE",
                            marginBelow: "STANDARD",
                            shape: "SEMI_ROUNDED"
                          )
                        )
                      ),
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          char(10),
                          a!richTextItem(
                            text: {
                              "Manage Features "
                            },
                            size: "MEDIUM_PLUS"
                          ),
                          char(10),
                          a!richTextItem(
                            text: {
                              "Manage the settings for the following Workforce Safety features"
                            },
                            color: "SECONDARY"
                          ),
                          char(10),
                          char(10)
                        }
                      ),
                      a!cardGroupLayout(
                        cards: a!forEach(
                          items: local!featureCards,
                          expression: a!cardLayout(
                            contents: {
                              a!sideBySideLayout(
                                items: {
                                  a!sideBySideItem(
                                    item: a!stampField(
                                      label: "Stamp",
                                      labelPosition: "COLLAPSED",
                                      icon: fv!item.icon,
                                      backgroundColor: "#E0E0E0",
                                      contentColor: "ACCENT",
                                      size: "SMALL",
                                      align: "START"
                                    ),
                                    width: "MINIMIZE"
                                  ),
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      labelPosition: "COLLAPSED",
                                      value: {
                                        a!richTextItem(
                                          text: fv!item.title,
                                          color: "ACCENT",
                                          size: "STANDARD",
                                          style: {
                                            "STRONG"
                                          }
                                        )
                                      }
                                    )
                                  ),
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      labelPosition: "COLLAPSED",
                                      value: {
                                        a!richTextIcon(
                                          icon: "angle-right",
                                          color: "#d9d9d9",
                                          size: "LARGE"
                                        )
                                      }
                                    ),
                                    width: "MINIMIZE"
                                  )
                                },
                                alignVertical: "MIDDLE"
                              )
                            },
                            link: fv!item.link,
                            height: "AUTO",
                            style: "NONE",
                            marginBelow: "STANDARD",
                            shape: "SEMI_ROUNDED"
                          )
                        )
                      ),
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          char(10),
                          a!richTextItem(
                            text: {
                              "Employee Communication and Resources"
                            },
                            size: "MEDIUM_PLUS"
                          ),
                          char(10),
                          a!richTextItem(
                            text: {
                              "Use the following features to communicate with employees and provide them with useful information"
                            },
                            color: "SECONDARY"
                          ),
                          char(10),
                          char(10)
                        }
                      )
                    },
                    {
                      /* Replace this rich text with the component or rule that should populate this tab */
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {a!richTextItem(text: "The contents of the second tab would go here", style: "EMPHASIS")},
                        align: "CENTER"
                      )
                    },
                    {
                      /* Replace this rich text with the component or rule that should populate this tab */
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {a!richTextItem(text: "The contents of the third tab would go here", style: "EMPHASIS")},
                        align: "CENTER"
                      )
                    },
                    {
                      /* Replace this rich text with the component or rule that should populate this tab */
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {a!richTextItem(text: "The contents of the fourth tab would go here", style: "EMPHASIS")},
                        align: "CENTER"
                      )
                    }
                  ),
                  a!cardGroupLayout(
                    cards: a!forEach(
                      items: local!communicationCards,
                      expression: a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  label: "Stamp",
                                  labelPosition: "COLLAPSED",
                                  icon: fv!item.icon,
                                  backgroundColor: "#E0E0E0",
                                  contentColor: "ACCENT",
                                  size: "SMALL",
                                  align: "START"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: fv!item.title,
                                      color: "ACCENT",
                                      size: "STANDARD",
                                      style: {
                                        "STRONG"
                                      }
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(
                                      icon: "angle-right",
                                      color: "#d9d9d9",
                                      size: "LARGE"
                                    )
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE"
                          )
                        },
                        link: fv!item.link,
                        height: "AUTO",
                        style: "NONE",
                        marginBelow: "STANDARD",
                        shape: "SEMI_ROUNDED"
                      )
                    )
                  ),
                  a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: {
                      char(10),
                      a!richTextItem(
                        text: {
                          "System Settings"
                        },
                        size: "MEDIUM_PLUS"
                      ),
                      char(10),
                      char(10)
                    }
                  )
                },
                a!cardGroupLayout(
                  cards: a!forEach(
                    items: local!systemCards,
                    expression: a!cardLayout(
                      contents: {
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!stampField(
                                label: "Stamp",
                                labelPosition: "COLLAPSED",
                                icon: fv!item.icon,
                                backgroundColor: "#E0E0E0",
                                contentColor: "ACCENT",
                                size: "SMALL",
                                align: "START"
                              ),
                              width: "MINIMIZE"
                            ),
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: fv!item.title,
                                    color: "ACCENT",
                                    size: "STANDARD",
                                    style: {
                                      "STRONG"
                                    }
                                  )
                                }
                              )
                            ),
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextIcon(
                                    icon: "angle-right",
                                    color: "#d9d9d9",
                                    size: "LARGE"
                                  )
                                }
                              ),
                              width: "MINIMIZE"
                            )
                          },
                          alignVertical: "MIDDLE"
                        )
                      },
                      link: fv!item.link,
                      height: "AUTO",
                      style: "NONE",
                      marginBelow: "STANDARD",
                      shape: "SEMI_ROUNDED"
                    )
                  )
                )
              }
            )
          }
        },
        height: "AUTO",
        style: "NONE",
        padding: "STANDARD",
        marginBelow: "STANDARD",
        showBorder: false,
        showShadow: true,
        shape: "SEMI_ROUNDED"
      )
    },
    backgroundColor: "#FAFAFC"
  )
)
```
