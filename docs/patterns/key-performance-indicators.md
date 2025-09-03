---
status: "stable"
last_updated: "2025-08-29"
---

# Key Performance Indicators

KPIs or Key Performance Indicators are meant to show a quick and high level snapshot of organizational performance over time or in meeting their measurable goals. 
KPIs are best suited for Landing Pages, Record Summary Views, or Dashboards.

![](https://github.com/user-attachments/assets/537c9944-a555-44d3-a72a-aca121de319e)

## Design

### Placement

![](https://github.com/user-attachments/assets/bcf62bbb-34f9-4e13-8cf4-6ae24e8276f8)

Place KPIs where they might be optimally discoverable while not impeding their tasks (e.g.: at the top or on the side).
* Avoid using more than 5 KPIs. Fewer the KPIs, the easier it is for the user to consume and act on the information.
* When presenting in Record Summary Views, ensure that the KPIs do not impede or confuse the user from the actions they need to accomplish.

### Action
![](https://github.com/user-attachments/assets/e80501bc-12bf-485c-85eb-37b2e107438e)


When designing KPIs, think about the underlying action or importance and present that to the user if applicable. For example:
* What is the user going to do based on the information presented?
* How should the user interpret the values (urgency)?

### Filter

![](https://github.com/user-attachments/assets/097b4545-be86-40ae-941a-823f8410f92d)

Use KPIs in clickable cards to filter down tabular data

### Supporting Information

If applicable:
* Show trends or benchmarks to the help the user gauge how their organization is performing
* Use tags to call out critical information to highlight or for the user to act on

## Development

### Side Placement

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

### Top Placement

```
a!localVariables(
  /* Sustainability metrics data in local variables */
  local!metricsData: {
    a!map(
      category: "Energy Consumption",
      value: "203,194",
      unit: "MTCO2e",
      reportingPercentage: "93% REPORTING",
      reportingColor: "#ff9900",
      target: "257K",
      progressPercentage: 79,
      progressColor: "#3a77e9",
      targetExceeded: false
    ),
    a!map(
      category: "Transportation",
      value: "85,853",
      unit: "MTCO2e",
      reportingPercentage: "100% REPORTING",
      reportingColor: "SECONDARY",
      target: "78K",
      progressPercentage: 100,
      progressColor: "NEGATIVE",
      targetExceeded: true
    ),
    a!map(
      category: "Waste",
      value: "25,472",
      unit: "MTCO2e",
      reportingPercentage: "100% REPORTING",
      reportingColor: "SECONDARY",
      target: "34K",
      progressPercentage: 72,
      progressColor: "#3a77e9",
      targetExceeded: false
    )
  },
  /* Chart data for emissions analysis */
  local!emissionsOverTimeData: {
    categories: {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"},
    energySeries: {29.8, 28, 24.9, 21.5, 27.4, 27.2, 22.1, 29.9, 25.6, 26.4, 23.1, 25.3},
    transportationSeries: {15.2, 19.8, 17.1, 16.7, 18.8, 15, 19.5, 19.4, 16.9, 16.7, 15.3, 16.6},
    wasteSeries: {7.1, 6.2, 7.1, 7.6, 7.9, 7.6, 6, 7.9, 6.5, 6.3, 6.6, 6.4}
  },
  local!emissionsByCategoryData: {
    a!map(label: "Energy", value: 314),
    a!map(label: "Transportation", value: 219),
    a!map(label: "Waste", value: 89)
  },
  local!emissionsByScopeData: {
    a!map(label: "Scope 1", value: 27),
    a!map(label: "Scope 2", value: 287),
    a!map(label: "Scope 3", value: 308)
  },
  a!headerContentLayout(
    header: {
      a!billboardLayout(
        backgroundColor: "#dbf1d3",
        height: if(
          a!isPageWidth({ "PHONE" }),
          "MEDIUM",
          "SHORT_PLUS"
        ),
        marginBelow: "NONE",
        overlay: a!fullOverlay(
          alignVertical: if(
            a!isPageWidth({ "PHONE" }),
            "TOP",
            "MIDDLE"
          ),
          contents: {
            a!richTextDisplayField(
              labelPosition: "COLLAPSED",
              value: {
                a!richTextItem(
                  text: {
                    "Journey to ",
                    a!richTextItem(
                      text: { "Net-Zero Carbon " },
                      style: { "STRONG" }
                    )
                  },
                  color: "#274e13",
                  size: if(
                    a!isPageWidth({ "PHONE" }),
                    "MEDIUM",
                    "MEDIUM_PLUS"
                  )
                ),
                a!richTextItem(
                  text: { "2025" },
                  color: "#47b311",
                  size: if(
                    a!isPageWidth({ "PHONE" }),
                    "MEDIUM",
                    "MEDIUM_PLUS"
                  ),
                  style: { "STRONG" }
                ),
                char(10)
              },
              align: if(
                a!isPageWidth({ "PHONE" }),
                "CENTER",
                "LEFT"
              ),
              marginBelow: if(
                a!isPageWidth({ "PHONE" }),
                "STANDARD",
                "NONE"
              )
            ),
            a!richTextDisplayField(
              labelPosition: "COLLAPSED",
              value: {
                a!richTextItem(
                  text: { "2021 ACTUAL IMPACT" },
                  size: "SMALL",
                  style: { "STRONG" }
                )
              },
              showWhen: a!isPageWidth({ "PHONE" }),
              align: "CENTER",
              marginBelow: "NONE"
            ),
            a!richTextDisplayField(
              labelPosition: "COLLAPSED",
              value: {
                a!richTextItem(
                  text: {
                    a!richTextItem(
                      text: { "______________________________" },
                      size: "SMALL"
                    ),
                    "____________________________________"
                  },
                  color: "#93c47d"
                )
              },
              showWhen: a!isPageWidth(
                {
                  "DESKTOP_NARROW",
                  "DESKTOP",
                  "DESKTOP_WIDE"
                }
              ),
              marginBelow: "MORE"
            ),
            a!columnsLayout(
              columns: {
                a!columnLayout(
                  contents: {
                    a!columnsLayout(
                      columns: {
                        a!columnLayout(
                          contents: {
                            a!sideBySideLayout(
                              items: {
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    label: "2021 ACTUAL IMPACT",
                                    labelPosition: if(
                                      a!isPageWidth({ "PHONE" }),
                                      "COLLAPSED",
                                      "ABOVE"
                                    ),
                                    value: {
                                      a!richTextItem(
                                        text: { a!richTextIcon(icon: "smog") },
                                        color: "#47b311",
                                        size: if(
                                          a!isPageWidth(
                                            {
                                              "DESKTOP_NARROW",
                                              "DESKTOP",
                                              "DESKTOP_WIDE"
                                            }
                                          ),
                                          "LARGE_PLUS",
                                          "MEDIUM_PLUS"
                                        ),
                                        style: { "STRONG" }
                                      ),
                                      a!richTextItem(
                                        text: { " " },
                                        size: if(
                                          a!isPageWidth(
                                            {
                                              "DESKTOP_NARROW",
                                              "DESKTOP",
                                              "DESKTOP_WIDE"
                                            }
                                          ),
                                          "LARGE_PLUS",
                                          "MEDIUM_PLUS"
                                        ),
                                        style: { "STRONG" }
                                      ),
                                      a!richTextItem(
                                        text: {
                                          a!richTextItem(
                                            text: { "314,519 " },
                                            size: if(
                                              a!isPageWidth(
                                                {
                                                  "DESKTOP_NARROW",
                                                  "DESKTOP",
                                                  "DESKTOP_WIDE"
                                                }
                                              ),
                                              "LARGE_PLUS",
                                              "MEDIUM_PLUS"
                                            ),
                                            style: { "STRONG" }
                                          ),
                                          "MTCO2e"
                                        },
                                        color: "#274e13"
                                      ),
                                      a!richTextItem(
                                        text: { " " },
                                        color: "SECONDARY",
                                        size: "LARGE"
                                      )
                                    },
                                    align: if(
                                      a!isPageWidth({ "PHONE" }),
                                      "CENTER",
                                      "LEFT"
                                    ),
                                    marginBelow: if(a!isPageWidth({ "PHONE" }), "LESS", "NONE")
                                  ),
                                  width: if(
                                    a!isPageWidth({ "PHONE" }),
                                    "AUTO",
                                    "MINIMIZE"
                                  )
                                )
                              },
                              alignVertical: "MIDDLE",
                              spacing: "SPARSE"
                            )
                          },
                          width: "AUTO"
                        ),
                        a!columnLayout(
                          contents: {
                            a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextItem(
                                  text: { "2021 OFFSETS" },
                                  size: "SMALL",
                                  style: { "STRONG" }
                                )
                              },
                              showWhen: a!isPageWidth({ "PHONE" }),
                              align: "CENTER",
                              marginBelow: "NONE"
                            ),
                            a!sideBySideLayout(
                              items: {
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    label: "2021 OFFSETS",
                                    labelPosition: if(
                                      a!isPageWidth({ "PHONE" }),
                                      "COLLAPSED",
                                      "ABOVE"
                                    ),
                                    value: {
                                      a!richTextItem(
                                        text: { a!richTextIcon(icon: "seedling") },
                                        color: "#47b311",
                                        size: if(
                                          a!isPageWidth(
                                            {
                                              "DESKTOP_NARROW",
                                              "DESKTOP",
                                              "DESKTOP_WIDE"
                                            }
                                          ),
                                          "LARGE_PLUS",
                                          "MEDIUM_PLUS"
                                        ),
                                        style: { "STRONG" }
                                      ),
                                      a!richTextItem(
                                        text: { " " },
                                        size: if(
                                          a!isPageWidth(
                                            {
                                              "DESKTOP_NARROW",
                                              "DESKTOP",
                                              "DESKTOP_WIDE"
                                            }
                                          ),
                                          "LARGE_PLUS",
                                          "MEDIUM_PLUS"
                                        ),
                                        style: { "STRONG" }
                                      ),
                                      a!richTextItem(
                                        text: {
                                          a!richTextItem(
                                            text: { "219,482 " },
                                            size: if(
                                              a!isPageWidth(
                                                {
                                                  "DESKTOP_NARROW",
                                                  "DESKTOP",
                                                  "DESKTOP_WIDE"
                                                }
                                              ),
                                              "LARGE_PLUS",
                                              "MEDIUM_PLUS"
                                            ),
                                            style: { "STRONG" }
                                          ),
                                          "MTCO2e"
                                        },
                                        color: "#274e13"
                                      ),
                                      a!richTextItem(
                                        text: { " " },
                                        color: "SECONDARY",
                                        size: "LARGE"
                                      )
                                    },
                                    align: if(
                                      a!isPageWidth({ "PHONE" }),
                                      "CENTER",
                                      "LEFT"
                                    ),
                                    marginBelow: if(a!isPageWidth({ "PHONE" }), "LESS", "NONE")
                                  ),
                                  width: if(
                                    a!isPageWidth({ "PHONE" }),
                                    "AUTO",
                                    "MINIMIZE"
                                  )
                                )
                              },
                              alignVertical: "MIDDLE",
                              spacing: "SPARSE"
                            )
                          },
                          width: "AUTO"
                        ),
                        a!columnLayout(
                          contents: {
                            a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextItem(
                                  text: { "2021 NET IMPACT" },
                                  size: "SMALL",
                                  style: { "STRONG" }
                                )
                              },
                              showWhen: a!isPageWidth({ "PHONE" }),
                              align: "CENTER",
                              marginBelow: "NONE"
                            ),
                            a!sideBySideLayout(
                              items: {
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    label: "2021 NET IMPACT",
                                    labelPosition: if(
                                      a!isPageWidth({ "PHONE" }),
                                      "COLLAPSED",
                                      "ABOVE"
                                    ),
                                    value: {
                                      a!richTextItem(
                                        text: { a!richTextIcon(icon: "globe-africa") },
                                        color: "#47b311",
                                        size: if(
                                          a!isPageWidth(
                                            {
                                              "DESKTOP_NARROW",
                                              "DESKTOP",
                                              "DESKTOP_WIDE"
                                            }
                                          ),
                                          "LARGE_PLUS",
                                          "MEDIUM_PLUS"
                                        ),
                                        style: { "STRONG" }
                                      ),
                                      a!richTextItem(
                                        text: { " " },
                                        size: if(
                                          a!isPageWidth(
                                            {
                                              "DESKTOP_NARROW",
                                              "DESKTOP",
                                              "DESKTOP_WIDE"
                                            }
                                          ),
                                          "LARGE_PLUS",
                                          "MEDIUM_PLUS"
                                        ),
                                        style: { "STRONG" }
                                      ),
                                      a!richTextItem(
                                        text: {
                                          a!richTextItem(
                                            text: { "95,037 " },
                                            size: if(
                                              a!isPageWidth(
                                                {
                                                  "DESKTOP_NARROW",
                                                  "DESKTOP",
                                                  "DESKTOP_WIDE"
                                                }
                                              ),
                                              "LARGE_PLUS",
                                              "MEDIUM_PLUS"
                                            ),
                                            style: { "STRONG" }
                                          ),
                                          "MTCO2e"
                                        },
                                        color: "#274e13"
                                      ),
                                      a!richTextItem(
                                        text: { " " },
                                        color: "SECONDARY",
                                        size: "LARGE"
                                      )
                                    },
                                    align: if(
                                      a!isPageWidth({ "PHONE" }),
                                      "CENTER",
                                      "LEFT"
                                    ),
                                    marginBelow: "NONE"
                                  ),
                                  width: if(
                                    a!isPageWidth({ "PHONE" }),
                                    "AUTO",
                                    "MINIMIZE"
                                  )
                                )
                              },
                              alignVertical: "MIDDLE",
                              spacing: "SPARSE"
                            )
                          },
                          width: "AUTO"
                        )
                      },
                      marginAbove: "NONE",
                      stackWhen: { "PHONE" },
                      showDividers: if(a!isPageWidth({ "PHONE" }), false, true)
                    )
                  },
                  width: "WIDE_PLUS"
                ),
                a!columnLayout(
                  contents: {},
                  width: "MEDIUM_PLUS",
                  showWhen: a!isPageWidth({ "DESKTOP_WIDE" })
                )
              },
              alignVertical: "MIDDLE",
              stackWhen: {
                "PHONE",
                "TABLET_PORTRAIT",
                "TABLET_LANDSCAPE"
              }
            )
          },
          style: "NONE"
        )
      ),
      a!cardLayout(
        contents: {
          a!columnsLayout(
            columns: {
              a!columnLayout(
                contents: {
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: {
                            a!richTextIcon(icon: "calendar", color: "#274e13")
                          }
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!dropdownField(
                          label: "Countries Filter",
                          labelPosition: "COLLAPSED",
                          choiceLabels: {
                            "2021 Full Year",
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
                          value: 1,
                          saveInto: {},
                          searchDisplay: "AUTO",
                          validations: {}
                        )
                      )
                    },
                    alignVertical: "MIDDLE"
                  )
                },
                width: "NARROW_PLUS"
              ),
              a!columnLayout(contents: {}),
              a!columnLayout(
                contents: {
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: {
                            a!richTextIcon(icon: "globe-alt", color: "#274e13")
                          }
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!dropdownField(
                          label: "Countries Filter",
                          labelPosition: "COLLAPSED",
                          choiceLabels: {
                            "All countries",
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
                          value: 1,
                          saveInto: {},
                          searchDisplay: "AUTO",
                          validations: {}
                        )
                      ),
                      a!sideBySideItem(
                        item: a!dropdownField(
                          label: "Regions Filter",
                          labelPosition: "COLLAPSED",
                          choiceLabels: {
                            "All regions",
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
                          value: 1,
                          saveInto: {},
                          searchDisplay: "AUTO",
                          validations: {}
                        )
                      )
                    },
                    alignVertical: "MIDDLE"
                  )
                },
                width: "MEDIUM_PLUS"
              )
            }
          )
        },
        height: "AUTO",
        style: "#85c47d",
        padding: "STANDARD",
        marginBelow: "LESS",
        showBorder: false
      )
    },
    contents: {
      /* First row of metrics cards using a!cardGroupLayout */
      a!cardGroupLayout(
        labelPosition: "COLLAPSED",
        cards: a!forEach(
          items: local!metricsData,
          expression: a!cardLayout(
            shape: "SEMI_ROUNDED",
            contents: {
              a!sectionLayout(
                label: fv!item.category,
                labelHeadingTag: "H2",
                labelSize: "SMALL",
                labelColor: "STANDARD",
                contents: {
                  a!columnsLayout(
                    columns: {
                      a!columnLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: { fv!item.value & " " },
                                      size: "LARGE",
                                      style: { "STRONG" }
                                    ),
                                    fv!item.unit,
                                    a!richTextItem(
                                      text: { " " },
                                      color: "SECONDARY",
                                      size: "LARGE"
                                    )
                                  },
                                  marginAbove: "STANDARD",
                                  marginBelow: "NONE"
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "EVEN_LESS"
                          ),
                          a!tagField(
                            labelPosition: "COLLAPSED",
                            tags: {
                              a!tagItem(
                                text: fv!item.reportingPercentage,
                                backgroundColor: fv!item.reportingColor
                              )
                            },
                            size: "SMALL"
                          )
                        },
                        width: "NARROW"
                      ),
                      a!columnLayout(
                        contents: {
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(text: { fv!item.target }, size: "STANDARD")
                            },
                            align: "CENTER",
                            marginBelow: "NONE"
                          ),
                          a!columnsLayout(
                            columns: {
                              a!columnLayout(
                                contents: {
                                  a!progressBarField(
                                    label: "",
                                    labelPosition: "COLLAPSED",
                                    percentage: fv!item.progressPercentage,
                                    color: fv!item.progressColor,
                                    style: "THICK",
                                    marginAbove: "LESS",
                                    marginBelow: "LESS",
                                    showPercentage: false
                                  )
                                },
                                width: "AUTO"
                              ),
                              a!columnLayout(
                                contents: {
                                  a!progressBarField(
                                    label: "",
                                    labelPosition: "COLLAPSED",
                                    percentage: if(fv!item.targetExceeded, 10, -1),
                                    color: "NEGATIVE",
                                    style: "THICK",
                                    marginAbove: "LESS",
                                    marginBelow: "LESS",
                                    showPercentage: false
                                  )
                                }
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginAbove: "NONE",
                            marginBelow: "EVEN_LESS",
                            spacing: "NONE",
                            stackWhen: { "NEVER" },
                            showDividers: true
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(text: { "TARGET" }, size: "SMALL")
                            },
                            align: "CENTER"
                          )
                        },
                        width: "AUTO"
                      )
                    },
                    alignVertical: "MIDDLE",
                    stackWhen: { "TABLET_LANDSCAPE", "DESKTOP_NARROW" }
                  )
                }
              )
            },
            link: a!dynamicLink(),
            height: "AUTO",
            style: "NONE",
            marginBelow: "STANDARD",
            borderColor: "#EDEEFA"
          )
        ),
        cardWidth: "MEDIUM"
      ),
      /* Second row of chart cards using a!cardGroupLayout */
      a!cardGroupLayout(
        labelPosition: "COLLAPSED",
        cards: {
          /* Emissions over Time Card */
          a!cardLayout(
            contents: {
              a!sectionLayout(
                label: "Emissions over Time",
                labelHeadingTag: "H2",
                labelSize: "SMALL",
                labelColor: "STANDARD",
                contents: {
                  a!areaChartField(
                    label: "",
                    labelPosition: "COLLAPSED",
                    categories: local!emissionsOverTimeData.categories,
                    series: {
                      a!chartSeries(
                        label: "Energy",
                        data: local!emissionsOverTimeData.energySeries
                      ),
                      a!chartSeries(
                        label: "Transportation",
                        data: local!emissionsOverTimeData.transportationSeries
                      ),
                      a!chartSeries(
                        label: "Waste",
                        data: local!emissionsOverTimeData.wasteSeries
                      )
                    },
                    xAxisTitle: "2021",
                    yAxisTitle: "MTCO2e",
                    stacking: "NONE",
                    showLegend: true,
                    showTooltips: true,
                    colorScheme: a!colorSchemeCustom(colors: { "#59C968", "#41934B", "#117D20" }),
                    height: if(
                      a!isPageWidth(
                        {
                          "PHONE",
                          "TABLET_PORTRAIT",
                          "TABLET_LANDSCAPE",
                          "DESKTOP_NARROW"
                        }
                      ),
                      "SHORT",
                      "MEDIUM"
                    ),
                    xAxisStyle: "STANDARD",
                    yAxisStyle: "STANDARD"
                  )
                }
              )
            },
            shape: "SEMI_ROUNDED",
            height: "AUTO",
            style: "NONE",
            marginBelow: "STANDARD",
            borderColor: "#EDEEFA"
          ),
          /* Emissions by Category Card */
          a!cardLayout(
            shape: "SEMI_ROUNDED",
            contents: {
              a!sectionLayout(
                label: "Emissions by Category",
                labelHeadingTag: "H2",
                labelSize: "SMALL",
                labelColor: "STANDARD",
                contents: {
                  a!pieChartField(
                    label: "",
                    labelPosition: "COLLAPSED",
                    series: a!forEach(
                      items: local!emissionsByCategoryData,
                      expression: a!chartSeries(label: fv!item.label, data: fv!item.value)
                    ),
                    colorScheme: a!colorSchemeCustom(
                      colors: {
                        "#59C968",
                        "#41934B",
                        "#117D20",
                        "#0A4A13"
                      }
                    ),
                    style: "DONUT",
                    seriesLabelStyle: if(
                      a!isPageWidth(
                        {
                          "PHONE",
                          "TABLET_PORTRAIT",
                          "TABLET_LANDSCAPE",
                          "DESKTOP_NARROW"
                        }
                      ),
                      "LEGEND",
                      "ON_CHART"
                    ),
                    height: if(
                      a!isPageWidth(
                        {
                          "PHONE",
                          "TABLET_PORTRAIT",
                          "TABLET_LANDSCAPE",
                          "DESKTOP_NARROW"
                        }
                      ),
                      "SHORT",
                      "MEDIUM"
                    )
                  )
                }
              )
            },
            height: "AUTO",
            style: "NONE",
            marginBelow: "STANDARD",
            borderColor: "#EDEEFA"
          ),
          /* Emissions by Scope Card */
          a!cardLayout(
            shape: "SEMI_ROUNDED",
            contents: {
              a!sectionLayout(
                label: "Emissions by Scope",
                labelHeadingTag: "H2",
                labelSize: "SMALL",
                labelColor: "STANDARD",
                contents: {
                  a!pieChartField(
                    label: "",
                    labelPosition: "COLLAPSED",
                    series: a!forEach(
                      items: local!emissionsByScopeData,
                      expression: a!chartSeries(label: fv!item.label, data: fv!item.value)
                    ),
                    colorScheme: a!colorSchemeCustom(
                      colors: {
                        "#59C968",
                        "#41934B",
                        "#117D20",
                        "#0A4A13"
                      }
                    ),
                    style: "DONUT",
                    seriesLabelStyle: if(
                      a!isPageWidth(
                        {
                          "PHONE",
                          "TABLET_PORTRAIT",
                          "TABLET_LANDSCAPE",
                          "DESKTOP_NARROW"
                        }
                      ),
                      "LEGEND",
                      "ON_CHART"
                    ),
                    height: if(
                      a!isPageWidth(
                        {
                          "PHONE",
                          "TABLET_PORTRAIT",
                          "TABLET_LANDSCAPE",
                          "DESKTOP_NARROW"
                        }
                      ),
                      "SHORT",
                      "MEDIUM"
                    )
                  )
                }
              )
            },
            height: "AUTO",
            style: "NONE",
            marginBelow: "STANDARD",
            borderColor: "#EDEEFA"
          )
        },
        cardWidth: "MEDIUM"
      ),

      /* Emissions per Unit Produced Section */
      a!sectionLayout(
        label: "Emissions per Unit Produced",
        labelHeadingTag: "H2",
        labelSize: "SMALL",
        labelColor: "STANDARD",
        contents: {
          a!cardLayout(
            shape: "SEMI_ROUNDED",
            contents: {
              a!columnsLayout(
                columns: {
                  a!columnLayout(
                    contents: {
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: { "ENERGY (SCOPE 1)" },
                            color: "SECONDARY"
                          )
                        }
                      ),
                      a!sideBySideLayout(
                        items: {
                          a!sideBySideItem(
                            item: a!stampField(
                              labelPosition: "COLLAPSED",
                              icon: "bolt",
                              contentColor: "STANDARD",
                              size: "TINY"
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextItem(
                                  text: {
                                    a!richTextItem(text: { "0.020 " }, size: "MEDIUM_PLUS"),
                                    a!richTextItem(text: { "MTCO2e" }, size: "STANDARD")
                                  },
                                  color: "STANDARD"
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
                        value: {
                          a!richTextItem(text: { "+" }, size: "MEDIUM_PLUS")
                        },
                        align: if(
                          a!isPageWidth(
                            {
                              "PHONE",
                              "TABLET_PORTRAIT",
                              "TABLET_LANDSCAPE",
                              "DESKTOP_NARROW"
                            }
                          ),
                          "LEFT",
                          "CENTER"
                        )
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
                            text: { "ENERGY (SCOPE 2)" },
                            color: "SECONDARY"
                          )
                        }
                      ),
                      a!sideBySideLayout(
                        items: {
                          a!sideBySideItem(
                            item: a!stampField(
                              labelPosition: "COLLAPSED",
                              icon: "plug",
                              contentColor: "STANDARD",
                              size: "TINY"
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextItem(
                                  text: {
                                    a!richTextItem(text: { "0.157 " }, size: "MEDIUM_PLUS"),
                                    a!richTextItem(text: { "MTCO2e" }, size: "STANDARD")
                                  },
                                  color: "STANDARD"
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
                        value: {
                          a!richTextItem(text: { "+" }, size: "MEDIUM_PLUS")
                        },
                        align: if(
                          a!isPageWidth(
                            {
                              "PHONE",
                              "TABLET_PORTRAIT",
                              "TABLET_LANDSCAPE",
                              "DESKTOP_NARROW"
                            }
                          ),
                          "LEFT",
                          "CENTER"
                        )
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
                            text: { "TRANSPORTATION" },
                            color: "SECONDARY"
                          )
                        }
                      ),
                      a!sideBySideLayout(
                        items: {
                          a!sideBySideItem(
                            item: a!stampField(
                              labelPosition: "COLLAPSED",
                              icon: "truck-moving",
                              contentColor: "STANDARD",
                              size: "TINY"
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextItem(
                                  text: {
                                    a!richTextItem(text: { "0.123 " }, size: "MEDIUM_PLUS"),
                                    a!richTextItem(text: { "MTCO2e" }, size: "STANDARD")
                                  },
                                  color: "STANDARD"
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
                        value: {
                          a!richTextItem(text: { "+" }, size: "MEDIUM_PLUS")
                        },
                        align: if(
                          a!isPageWidth(
                            {
                              "PHONE",
                              "TABLET_PORTRAIT",
                              "TABLET_LANDSCAPE",
                              "DESKTOP_NARROW"
                            }
                          ),
                          "LEFT",
                          "CENTER"
                        )
                      )
                    },
                    width: "EXTRA_NARROW"
                  ),
                  a!columnLayout(
                    contents: {
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(text: { "WASTE" }, color: "SECONDARY")
                        }
                      ),
                      a!sideBySideLayout(
                        items: {
                          a!sideBySideItem(
                            item: a!stampField(
                              labelPosition: "COLLAPSED",
                              icon: "trash",
                              contentColor: "STANDARD",
                              size: "TINY"
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextItem(
                                  text: {
                                    a!richTextItem(text: { "0.045 " }, size: "MEDIUM_PLUS"),
                                    a!richTextItem(text: { "MTCO2e" }, size: "STANDARD")
                                  },
                                  color: "STANDARD"
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
                        value: {
                          a!richTextItem(text: { "=" }, size: "MEDIUM_PLUS")
                        },
                        align: if(
                          a!isPageWidth(
                            {
                              "PHONE",
                              "TABLET_PORTRAIT",
                              "TABLET_LANDSCAPE",
                              "DESKTOP_NARROW"
                            }
                          ),
                          "LEFT",
                          "CENTER"
                        )
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
                            text: { "TOTAL" },
                            color: "SECONDARY",
                            style: { "STRONG" }
                          )
                        }
                      ),
                      a!sideBySideLayout(
                        items: {
                          a!sideBySideItem(
                            item: a!stampField(
                              labelPosition: "COLLAPSED",
                              icon: "smog",
                              contentColor: "STANDARD",
                              size: "TINY"
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
                                      text: {
                                        a!richTextItem(text: { "0.320" }, style: { "STRONG" }),
                                        " "
                                      },
                                      size: "MEDIUM_PLUS"
                                    ),
                                    a!richTextItem(text: { "MTCO2e" }, size: "STANDARD")
                                  },
                                  color: "STANDARD"
                                )
                              }
                            )
                          )
                        },
                        alignVertical: "MIDDLE"
                      )
                    }
                  )
                },
                alignVertical: "MIDDLE",
                stackWhen: {
                  "PHONE",
                  "TABLET_PORTRAIT",
                  "TABLET_LANDSCAPE",
                  "DESKTOP_NARROW"
                },
                showDividers: false
              )
            },
            height: "AUTO",
            style: "NONE",
            padding: "STANDARD",
            marginBelow: "STANDARD",
            borderColor: "#EDEEFA"
          )
        }
      )
    },
    backgroundColor: "#FAFAFC"
  )
)
```

### Supporting Information - Trends

```
a!headerContentLayout(
  header: a!cardLayout(
    contents: {
      a!localVariables(
        local!dateType: 1,
        local!startDate: todate("01/01/2019"),
        local!endDate: todate("16/01/2019"),
        local!kpis: {
          {
            name: "Total Revenue",
            todayPrice: dollar(fixed(3276.91)),
            yesterdayPrice: dollar(fixed(116.31)),
            icon: "caret-up",
            percent: "(18%)",
            color: "#4CC900",
            data: {1, 3, 2, 4, 3, 2, 5, 7, 10, 12, 7, 6, 15, 14, 13, 10, 15, 13, 15, 22, 24, 19, 15, 25, 25, 30, 30, 35, 32, 36, 39, 35, 38, 39, 40}
          },
          {
            name: "Revenue Per User",
            todayPrice: dollar(fixed(374.12)),
            yesterdayPrice: dollar(fixed( - 32.25)),
            icon: "caret-down",
            percent: "(-7%)",
            color: "#E64345",
            data: {3, 5, 4, 2, 3, 2, 4, 5, 7, 10, 12, 16, 17, 15, 15, 16, 13, 10, 15, 17, 20, 21, 25, 22, 22, 17, 15, 17, 16, 15, 14, 13, 13, 14, 10}
          },
          {
            name: "New Orders",
            todayPrice: 1275,
            yesterdayPrice: - 116,
            icon: "caret-down",
            percent: "(-15%)",
            color: "#E64345",
            data: {3, 5, 7, 6, 8, 10, 12, 4, 16, 13, 22, 26, 24, 25, 16, 14, 13, 13, 14, 12, 16, 20, 22, 27, 30, 35, 34, 35, 23, 18, 16, 17, 14, 12}
          },
          {
            name: "New Users",
            todayPrice: 76,
            yesterdayPrice: 46,
            icon: "caret-up",
            percent: "(22%)",
            color: "#4CC900",
            data: {2, 3, 5, 13, 20, 17, 23, 24, 22, 18, 12, 10, 3, 4, 2, 15, 16, 20, 26, 23, 27, 28, 30, 34, 33, 32, 30, 35, 40, 38, 37, 42}
          }
        },
        {
          a!sectionLayout(
            contents: {
              a!sideBySideLayout(
                items: {
                  a!sideBySideItem(
                    item: a!headingField(
                      marginBelow: "NONE",
                      text: "Financial Summary",
                      size: "SMALL",
                      fontWeight: "SEMI_BOLD"
                    ),
                    width: "MINIMIZE"
                  ),
                  a!sideBySideItem(
                    item: a!dropdownField(
                      label: "Timeframe Type",
                      labelPosition: "COLLAPSED",
                      placeholder: "--- Select a Value ---",
                      choiceLabels: { "Date Range", "Week", "Month", "Year" },
                      choiceValues: { 1, 2, 3, 4 },
                      value: local!dateType,
                      saveInto: local!dateType
                    ),
                    width: "MINIMIZE"
                  ),
                  a!sideBySideItem(
                    item: a!dateField(
                      label: "Date",
                      labelPosition: "COLLAPSED",
                      value: local!startDate,
                      saveInto: local!startDate
                    ),
                    width: "MINIMIZE"
                  ),
                  a!sideBySideItem(
                    item: a!richTextDisplayField(
                      label: "Rich Text",
                      labelPosition: "COLLAPSED",
                      value: "to"
                    ),
                    width: "MINIMIZE"
                  ),
                  a!sideBySideItem(
                    item: a!dateField(
                      label: "Date",
                      labelPosition: "COLLAPSED",
                      value: local!endDate,
                      saveInto: local!endDate
                    ),
                    width: "MINIMIZE"
                  )
                },
                alignVertical: "MIDDLE"
              )
            },
            showWhen: false
          ),
          a!cardGroupLayout(
            labelPosition: "COLLAPSED",
            cardWidth: "NARROW_PLUS",
            cards: {
              a!forEach(
                items: local!kpis,
                expression: a!cardLayout(
                  shape: "SEMI_ROUNDED",
                  contents: {
                    a!columnsLayout(
                      columns: {
                        a!columnLayout(
                          contents: {
                            a!headingField(
                              text: fv!item.name,
                              size: "SMALL",
                              fontWeight: "SEMI_BOLD",
                              marginBelow: "NONE"
                            ),
                            a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextItem(
                                  text: fv!item.todayPrice,
                                  size: "MEDIUM_PLUS"
                                ),
                                char(10),
                                a!richTextIcon(
                                  icon: fv!item.icon,
                                  color: fv!item.color,
                                  size: "MEDIUM"
                                ),
                                a!richTextItem(
                                  text: fv!item.yesterdayPrice & " " & fv!item.percent,
                                  color: fv!item.color,
                                  size: "STANDARD"
                                )
                              }
                            )
                          }
                        ),
                        a!columnLayout(
                          contents: a!localVariables(
                            local!kpiName: fv!item.name,
                            {
                              a!lineChartField(
                                labelPosition: "ABOVE",
                                categories: a!forEach(
                                  items: fv!item.data,
                                  expression: local!kpiName
                                ),
                                series: {
                                  a!chartSeries(
                                    label: "count",
                                    data: fv!item.data,
                                    color: fv!item.color
                                  )
                                },
                                yAxisMax: 40,
                                showLegend: false,
                                height: "MICRO",
                                xAxisStyle: "NONE",
                                yAxisStyle: "NONE"
                              )
                            }
                          )
                        )
                      }
                    )
                  },
                  style: "PLUM_SCHEME",
                  padding: "STANDARD",
                  marginBelow: "NONE",
                  showBorder: false
                )
              )
            }
          )
        }
      )
    },
    height: "AUTO",
    style: "#171523",
    padding: "STANDARD",
    marginBelow: "NONE",
    showBorder: false
  ),
  contents: a!localVariables(
    local!dateType: 1,
    local!startDate: todate("01/01/2019"),
    local!endDate: todate("16/01/2019"),
    local!category: 1,
    local!products: {
      {
        name: "Ruched Dress",
        rating: 4,
        tags: { "Low in Stock" },
        id: 192323,
        data: { 80 },
        data2: { 12 }
      },
      {
        name: "Black Satin Dress",
        rating: 3,
        tags: {},
        id: 293482,
        data: { 72 },
        data2: { 15 }
      },
      {
        name: "Midi Floral Dress",
        rating: 5,
        tags: { "Restock" },
        id: 343498,
        data: { 78 },
        data2: { 6 }
      },
      {
        name: "Maxi Dress",
        rating: 4,
        tags: {},
        id: 374737,
        data: { 63 },
        data2: { 10 }
      },
      {
        name: "Wrap Dress",
        rating: 4,
        tags: {},
        id: 382023,
        data: { 52 },
        data2: { 13 }
      },
      {
        name: "T-Shirt Dress",
        rating: 3,
        tags: { "Restock" },
        id: 232323,
        data: { 53 },
        data2: { 7 }
      }
    },
    {
      a!sectionLayout(
        contents: {
          a!sideBySideLayout(
            items: {
              a!sideBySideItem(
                item: a!headingField(
                  text: "Financial Summary",
                  size: "SMALL",
                  fontWeight: "SEMI_BOLD",
                  marginBelow: "NONE"
                ),
                width: "MINIMIZE"
              ),
              a!sideBySideItem(
                item: a!dropdownField(
                  label: "Timeframe Type",
                  labelPosition: "COLLAPSED",
                  placeholder: "--- Select a Value ---",
                  choiceLabels: { "Date Range", "Week", "Month", "Year" },
                  choiceValues: { 1, 2, 3, 4 },
                  value: local!dateType,
                  saveInto: local!dateType
                ),
                width: "MINIMIZE"
              ),
              a!sideBySideItem(
                item: a!dateField(
                  label: "Date",
                  labelPosition: "COLLAPSED",
                  value: local!startDate,
                  saveInto: local!startDate
                ),
                width: "MINIMIZE"
              ),
              a!sideBySideItem(
                item: a!richTextDisplayField(
                  label: "Rich Text",
                  labelPosition: "COLLAPSED",
                  value: "to"
                ),
                width: "MINIMIZE"
              ),
              a!sideBySideItem(
                item: a!dateField(
                  label: "Date",
                  labelPosition: "COLLAPSED",
                  value: local!endDate,
                  saveInto: local!endDate
                ),
                width: "MINIMIZE"
              )
            },
            alignVertical: "MIDDLE"
          )
        },
        showWhen: false,
        marginAbove: "NONE",
        marginBelow: "NONE"
      ),
      a!columnsLayout(
        columns: {
          a!columnLayout(
            contents: {
              a!cardLayout(
                shape: "SEMI_ROUNDED",
                contents: {
                  a!headingField(
                    text: "Top Selling Products By Category",
                    size: "SMALL",
                    fontWeight: "SEMI_BOLD"
                  ),
                  a!columnsLayout(
                    columns: {
                      a!columnLayout(
                        contents: {
                          a!dropdownField(
                            label: "Dropdown",
                            labelPosition: "COLLAPSED",
                            placeholder: "--- Select a Value ---",
                            choiceLabels: { "Dresses", "Tops" },
                            choiceValues: { 1, 2 },
                            value: local!category,
                            saveInto: local!category
                          )
                        },
                        width: "NARROW"
                      ),
                      a!columnLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(
                                      icon: "circle",
                                      color: "#00A88F",
                                      size: "SMALL"
                                    ),
                                    a!richTextItem(
                                      text: " " & "# of Items Purchased",
                                      size: "SMALL"
                                    )
                                  }
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(
                                      icon: "circle",
                                      color: "#82C272",
                                      size: "SMALL"
                                    ),
                                    a!richTextItem(
                                      text: " " & "# of Items Returned",
                                      size: "SMALL"
                                    )
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "TOP",
                            marginBelow: "NONE"
                          )
                        }
                      )
                    },
                    alignVertical: "MIDDLE"
                  ),
                  a!forEach(
                    items: local!products,
                    expression: a!columnsLayout(
                      columns: {
                        a!columnLayout(
                          contents: {
                            a!sideBySideLayout(
                              items: {
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    value: { a!richTextItem(text: fv!item.name) }
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!localVariables(
                                  local!productRating: fv!item.rating,
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      value: a!forEach(
                                        items: enumerate(5) + 1,
                                        expression: a!richTextIcon(
                                          icon: if(
                                            fv!index <= tointeger(local!productRating),
                                            "star",
                                            "star-o"
                                          ),
                                          color: "#fc9901"
                                        )
                                      ),
                                      align: "RIGHT"
                                    )
                                  )
                                )
                              },
                              alignVertical: "BOTTOM",
                              marginBelow: "NONE"
                            ),
                            a!sideBySideLayout(
                              items: {
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    value: {
                                      a!richTextItem(
                                        text: "Product ID: " & fv!item.id,
                                        color: "SECONDARY"
                                      )
                                    }
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!tagField(
                                    tags: {
                                      a!tagItem(
                                        text: fv!item.tags,
                                        backgroundColor: if(
                                          tostring(fv!item.tags) = "Low in Stock",
                                          "#F7D027",
                                          "#E64345"
                                        )
                                      )
                                    },
                                    size: "SMALL",
                                    align: "END"
                                  )
                                )
                              },
                              alignVertical: "MIDDLE",
                              marginBelow: "NONE"
                            )
                          },
                          width: "NARROW"
                        ),
                        a!columnLayout(
                          contents: {
                            a!richTextDisplayField(labelPosition: "COLLAPSED"),
                            a!barChartField_21r4(
                              categories: fv!item.name,
                              series: {
                                a!chartSeries(label: "Returned", data: fv!item.data2),
                                a!chartSeries(label: "Purcahsed", data: fv!item.data)
                              },
                              yAxisMax: 95,
                              stacking: "NORMAL",
                              showLegend: false,
                              showDataLabels: true,
                              labelPosition: "COLLAPSED",
                              colorScheme: "RAINFOREST",
                              height: "MICRO",
                              xAxisStyle: "NONE",
                              yAxisStyle: "NONE"
                            )
                          }
                        )
                      },
                      alignVertical: "MIDDLE",
                      marginBelow: "NONE",
                      spacing: "DENSE"
                    )
                  )
                },
                style: "PLUM_SCHEME",
                padding: "STANDARD",
                showBorder: false
              )
            }
          ),
          a!columnLayout(
            contents: {
              a!cardLayout(
                shape: "SEMI_ROUNDED",
                contents: {
                  a!headingField(
                    text: "Sales by Region ($)",
                    size: "SMALL",
                    fontWeight: "SEMI_BOLD"
                  ),
                  a!columnChartField(
                    categories: {
                      "Northeast",
                      "Southeast",
                      "Midwest",
                      "Southwest"
                    },
                    series: {
                      a!chartSeries(
                        label: "Full Price",
                        data: { 125000, 100000, 125000, 175000 }
                      ),
                      a!chartSeries(
                        label: "Clearance",
                        data: { 75000, 50000, 25000, 80000 }
                      ),
                      a!chartSeries(
                        label: "Promotion",
                        data: { 200000, 100000, 150000, 90000 }
                      )
                    },
                    stacking: "NORMAL",
                    showLegend: true,
                    showTooltips: true,
                    labelPosition: "COLLAPSED",
                    colorScheme: "RAINFOREST"
                  )
                },
                style: "PLUM_SCHEME",
                padding: "STANDARD",
                showBorder: false
              ),
              a!sectionLayout(),
              a!cardLayout(
                shape: "SEMI_ROUNDED",
                contents: {
                  a!headingField(
                    text: "Top Performing Campaigns",
                    size: "SMALL",
                    fontWeight: "SEMI_BOLD"
                  ),
                  a!gridField(
                    labelPosition: "COLLAPSED",
                    /* Replace the dummy data with a query, rule, or function that returns a datasubset and uses fv!pagingInfo as the paging configuration. */
                    data: todatasubset(
                      {
                        {
                          name: "Free Gift with Purchase",
                          visits: 44939,
                          purchases: 293,
                          revenue: dollar(58100.34)
                        },
                        {
                          name: "Buy-One-Get-One",
                          visits: 35503,
                          purchases: 203,
                          revenue: dollar(64329.00)
                        },
                        {
                          name: "Holiday Bundle",
                          visits: 793234,
                          purchases: 125,
                          revenue: dollar(1002312)
                        }
                      },
                      fv!pagingInfo
                    ),
                    columns: {
                      a!gridColumn(
                        label: "Campaign",
                        sortField: "name",
                        value: a!linkField(links: a!dynamicLink(label: fv!row.name))
                      ),
                      a!gridColumn(
                        label: "# Visits",
                        sortField: "visits",
                        value: fixed(fv!row.visits),
                        align: "END"
                      ),
                      a!gridColumn(
                        label: "# Purchases",
                        sortField: "purchases",
                        value: fixed(fv!row.purchases),
                        align: "END"
                      ),
                      a!gridColumn(
                        label: "Revenue",
                        sortField: "revenue",
                        value: fv!row.revenue,
                        align: "END"
                      )
                    },
                    pageSize: 3,
                    initialSorts: a!sortInfo(field: "revenue", ascending: true),
                    borderStyle: "LIGHT",
                    shadeAlternateRows: false
                  )
                },
                style: "PLUM_SCHEME",
                padding: "STANDARD",
                showBorder: false
              )
            }
          ),
          a!columnLayout(
            contents: {
              a!cardLayout(
                shape: "SEMI_ROUNDED",
                contents: {
                  a!headingField(
                    text: "Customer Satisfaction",
                    size: "SMALL",
                    fontWeight: "SEMI_BOLD"
                  ),
                  a!barChartField_21r4(
                    categories: "Customer Satisfaction",
                    series: {
                      a!chartSeries(label: "Not Satisfied", data: { 23 }),
                      a!chartSeries(label: "Neutral", data: { 13 }),
                      a!chartSeries(label: "Satisfied", data: { 76 })
                    },
                    yAxisMax: 112,
                    stacking: "NORMAL",
                    showLegend: true,
                    showTooltips: true,
                    labelPosition: "COLLAPSED",
                    colorScheme: "RAINFOREST",
                    height: "MICRO",
                    xAxisStyle: "NONE",
                    yAxisStyle: "NONE"
                  )
                },
                style: "PLUM_SCHEME",
                padding: "STANDARD",
                showBorder: false
              ),
              a!sectionLayout(),
              a!cardLayout(
                shape: "SEMI_ROUNDED",
                contents: {
                  a!headingField(
                    text: "Customer Acquisition",
                    size: "SMALL",
                    fontWeight: "SEMI_BOLD"
                  ),
                  a!lineChartField(
                    labelPosition: "COLLAPSED",
                    series: {
                      a!chartSeries(
                        label: "Returning",
                        data: 
                        {30, 35, 55, 60, 64, 82, 86, 90, 126, 135, 150, 145, 142, 128, 115, 130, 104, 104, 90, 79, 69, 68, 48, 58, 58, 57, 56, 53, 52, 50, 35, 47, 52, 50, 45, 57, 55, 70, 70, 80, 90, 90, 60, 50, 50, 65, 62, 68, 92, 100, 85, 80, 75, 85, 90, 80}
                      ),
                      a!chartSeries(
                        label: "New",
                        data: {18, 20, 22, 20, 25, 26, 30, 40, 30, 29, 27, 25, 26, 20, 15, 22, 27, 30, 35, 40, 45, 50, 50, 45, 30, 40, 50, 55, 57, 60, 47, 35, 50, 65, 67, 60, 70, 38, 48, 60, 72, 75, 78, 70, 80, 82, 100, 120, 100, 135, 145, 135, 145, 140, 130, 150}
                      )
                    },
                    yAxisMax: 160,
                    showLegend: true,
                    showTooltips: false,
                    colorScheme: "RAINFOREST",
                    height: "SHORT",
                    xAxisStyle: "NONE",
                    yAxisStyle: "MINIMAL"
                  )
                },
                style: "PLUM_SCHEME",
                padding: "STANDARD",
                showBorder: false
              ),
              a!sectionLayout(),
              a!cardLayout(
                shape: "SEMI_ROUNDED",
                contents: {
                  a!headingField(
                    text: "Traffic Sources",
                    size: "SMALL",
                    fontWeight: "SEMI_BOLD"
                  ),
                  a!pieChartField(
                    labelPosition: "COLLAPSED",
                    series: {
                      a!chartSeries(label: "Social Media", data: 41.7),
                      a!chartSeries(label: "Referral Link", data: 31.9),
                      a!chartSeries(label: "Promotion", data: 18.1),
                      a!chartSeries(label: "Direct", data: 8.3)
                    },
                    showDataLabels: true,
                    showAsPercentage: true,
                    colorScheme: "RAINFOREST",
                    style: "DONUT",
                    seriesLabelStyle: "LEGEND"
                  )
                },
                style: "PLUM_SCHEME",
                padding: "STANDARD",
                showBorder: false,

              )
            },
            width: "MEDIUM"
          )
        },
        marginAbove: "NONE"
      )
    }
  ),
  backgroundColor: "PLUM_SCHEME"
)
```
