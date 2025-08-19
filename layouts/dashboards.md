---
status: "stable"
last_updated: "2024-02-05"
---

# Dashboards
Provide actionable insights from business data

![](https://github.com/user-attachments/assets/bfc64cee-31f2-4bcd-8fcd-2aa742e5c457)


## Design

![](https://github.com/user-attachments/assets/5a2eb2b5-d15f-4701-9922-629579ce0048)

A dashboard aggregates data in order to highlight trends, statuses and alerts that enable users to take relevant action.

A dashboard’s structure should be governed by its purpose. When designing dashboards, think about what data to present, how to present it and what actions the user might take based on the data.

A dashboard is generally composed of one or more the following components:
* Filters (for parsing the data)
* Data representation (e.g.: KPIs, charts or tables)
* Actions

### Usage


#### Filters

![](https://github.com/user-attachments/assets/13ff4669-fc3e-4a72-a7eb-76ec6d20a014)
Filters are placed on the side to signify its effect on both the grid and the KPIs.

![](https://github.com/user-attachments/assets/870c51e2-8dca-4183-b92f-28704b1bc193)
The grid and KPI filters are placed relative to what content they affect.

Checklist:
* For OOTB grids, use the out of the box record filter.
* For other components that require filtering, use custom filters. Custom filter should always have a label with label position being set to "ABOVE"
* All data used in filters should be visible on the component that it affects (e.g.: you should not have a grid filter for a data field that is not present in the grid.)|
* Ensure filters are placed at the correct hierarchy. A filter's location should clearly indicate which section of the interface they apply to.
* Use a filter bar or sidebar for higher level filters
* Use inline filters for filters that only affect one component of the interface


#### Data Representation

![](https://github.com/user-attachments/assets/b2308982-88a9-4b33-8354-311e3df56cdb)
Combination of different data representations. Read more about Charts, KPIs, and Grids

Checklist:
* Read ASDS chart guidance to understand best practices when including charts in interfaces
* Read ASDS KPI guidance to understand best practices when including KPIs in interfaces
* Read ASDS Grids guidance to understand best practices when including grids in interfaces
* If grid rows have links to a detailed view, links should be attached to the record identifier.


#### Actions

![](https://github.com/user-attachments/assets/f16e7868-8370-482c-ae45-67df27f3a6ff)
Action is in context with the data it will affect

![](https://github.com/user-attachments/assets/016a845d-c99a-444e-aee9-26be200975a3)
Edit Dashboard button is the most priminent action on the interface

Checklist:
* Place actions in context with the data that is used to help users determine whether or not to take action.
* Make primary action the most heavily weighted visual component on the interface.

## Development

### Actionable Insights
```
a!localVariables(
  local!AppianBackground: "#FAFAFC",
  local!CategoricalSceme: {
    "#2322F0",
    "#B561FF",
    "#FAA92F",
    "#56ADC0",
    "#FFD948"
  },
  local!data: {
    a!map(
      awardId: "HT98200012",
      amount: "$12,234,234.12",
      buyer: "Research and Development",
      releaseDate: "10/20/23",
      draft: 12,
      underReview: 9,
      approved: 4,
      awaitingSignature: 20,
      totalCycleTime: 45,
      contractingOfficer: "Sara Daniels",
      vendor: "Boeing Co"
    ),
    a!map(
      awardId: "HT23907980",
      amount: "$2,842,214.48",
      buyer: "Enforcement and Compliance Assurance",
      releaseDate: "10/20/23",
      draft: 10,
      underReview: 6,
      approved: 6,
      awaitingSignature: 16,
      totalCycleTime: 38,
      contractingOfficer: "Sara Daniels",
      vendor: "Xerox"
    ),
    a!map(
      awardId: "HT98080979",
      amount: "$234,853.00",
      buyer: "Chief of Staff",
      releaseDate: "10/20/23",
      draft: 13,
      underReview: 11,
      approved: 7,
      awaitingSignature: 24,
      totalCycleTime: 55,
      contractingOfficer: "Sara Daniels",
      vendor: "Lockheed Martin"
    ),
    a!map(
      awardId: "HT44312124",
      amount: "$1,843,028.34",
      buyer: "Human Resources",
      releaseDate: "10/20/23",
      draft: 9,
      underReview: 14,
      approved: 4,
      awaitingSignature: 28,
      totalCycleTime: 55,
      contractingOfficer: "Sara Daniels",
      vendor: "Appian Corp."
    ),
    a!map(
      awardId: "HT72324123",
      amount: "$$98,273.44",
      buyer: "Research and Development",
      releaseDate: "10/20/23",
      draft: 12,
      underReview: 8,
      approved: 10,
      awaitingSignature: 12,
      totalCycleTime: 42,
      contractingOfficer: "Sara Daniels",
      vendor: "Boeing Co"
    ),
    a!map(
      awardId: "15F908G908",
      amount: "$873,434.87",
      buyer: "Research and Development",
      releaseDate: "10/20/23",
      draft: 11,
      underReview: 10,
      approved: 9,
      awaitingSignature: 17,
      totalCycleTime: 47,
      contractingOfficer: "Sara Daniels",
      vendor: "Boeing Co"
    ),
    a!map(
      awardId: "15F09901C81",
      amount: "$23,821.99",
      buyer: "Office of the Administrator",
      releaseDate: "10/20/23",
      draft: 7,
      underReview: 11,
      approved: 5,
      awaitingSignature: 21,
      totalCycleTime: 44,
      contractingOfficer: "Sara Daniels",
      vendor: "Boeing Co"
    ),
    a!map(
      awardId: "15J7897893D",
      amount: "$1,843,028.34",
      buyer: "Information Technology",
      releaseDate: "10/20/23",
      draft: 15,
      underReview: 6,
      approved: 8,
      awaitingSignature: 19,
      totalCycleTime: 48,
      contractingOfficer: "Sara Daniels",
      vendor: "Boeing Co"
    ),
    a!map(
      awardId: "15J00124412",
      amount: "$1,843,028.34",
      buyer: "Enforcement and Compliance Assurance",
      releaseDate: "10/20/23",
      draft: 5,
      underReview: 14,
      approved: 5,
      awaitingSignature: 20,
      totalCycleTime: 44,
      contractingOfficer: "Sara Daniels",
      vendor: "Boeing Co"
    ),
    a!map(
      awardId: "15J23441234",
      amount: "$1,843,028.34",
      buyer: "Chief of Staff",
      releaseDate: "10/20/23",
      draft: 19,
      underReview: 15,
      approved: 6,
      awaitingSignature: 19,
      totalCycleTime: 59,
      contractingOfficer: "Sara Daniels",
      vendor: "Boeing Co"
    ),
    a!map(
      awardId: "HT98092344",
      amount: "$1,843,028.34",
      buyer: "Office of the Administrator",
      releaseDate: "10/20/23",
      draft: 20,
      underReview: 10,
      approved: 4,
      awaitingSignature: 16,
      totalCycleTime: 50,
      contractingOfficer: "Sara Daniels",
      vendor: "Boeing Co"
    ),
    a!map(
      awardId: "HT443243411",
      amount: "$873,434.87",
      buyer: "Information Technology",
      releaseDate: "10/20/23",
      draft: 12,
      underReview: 10,
      approved: 12,
      awaitingSignature: 18,
      totalCycleTime: 52,
      contractingOfficer: "Sara Daniels",
      vendor: "Boeing Co"
    ),
    a!map(
      awardId: "19H34641221",
      amount: "$98,273.44",
      buyer: "Research and Development",
      releaseDate: "10/20/23",
      draft: 10,
      underReview: 8,
      approved: 6,
      awaitingSignature: 22,
      totalCycleTime: 46,
      contractingOfficer: "Sara Daniels",
      vendor: "Boeing Co"
    ),
    a!map(
      awardId: "20F7897M123",
      amount: "$92,371.76",
      buyer: "Enforcement and Compliance Assurance",
      releaseDate: "T10/20/23",
      draft: 13,
      underReview: 5,
      approved: 13,
      awaitingSignature: 14,
      totalCycleTime: 45,
      contractingOfficer: "Sara Daniels",
      vendor: "Boeing Co"
    ),
    a!map(
      awardId: "HT129085123",
      amount: "$23,821.99",
      buyer: "Chief of Staff",
      releaseDate: "10/20/23",
      draft: 14,
      underReview: 13,
      approved: 8,
      awaitingSignature: 17,
      totalCycleTime: 52,
      contractingOfficer: "Sara Daniels",
      vendor: "Boeing Co"
    ),

  },
  local!chartData: {
    71,
    40,
    100,
    78,
    51,
    45,
    56,
    60,
    73,
    53,
    68,
    47,
    80
  },
  a!headerContentLayout(
    contents: {
      a!sectionLayout(
        contents: {
          a!columnsLayout(
            columns: {
              a!columnLayout(
                contents: {
                  a!sectionLayout(
                    contents: {
                      a!cardLayout(
                        contents: {
                          a!columnsLayout(
                            columns: {
                              a!columnLayout(
                                contents: {
                                  a!sectionLayout(
                                    label: "Award Cycle Time Report",
                                    labelSize: "SMALL",
                                    labelHeadingTag: "H2",
                                    labelColor: "STANDARD",
                                    contents: {},
                                    marginBelow: "NONE"
                                  )
                                }
                              ),
                              a!columnLayout(
                                contents: {
                                  a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      a!richTextItem(
                                        text: { "July 2022 - July 2023" },
                                        color: "SECONDARY",
                                        size: "STANDARD"
                                      )
                                    },
                                    align: "RIGHT",
                                    marginBelow: "NONE"
                                  )
                                }
                              )
                            },
                            marginBelow: "STANDARD"
                          ),
                          a!columnsLayout(
                            columns: {
                              a!columnLayout(
                                contents: {
                                  a!cardLayout(
                                    contents: {
                                      a!richTextDisplayField(
                                        labelPosition: "COLLAPSED",
                                        value: {
                                          a!richTextItem(
                                            text: { "Average Cycle Time by Month" },
                                            color: "#6C6C75"
                                          )
                                        }
                                      ),
                                      a!lineChartField(
                                        label: "Average Cycle Time by Month",
                                        labelPosition: "COLLAPSED",
                                        categories: {
                                          "JUL, 2022",
                                          "AUG, 2022",
                                          "SEP, 2022",
                                          "OCT, 2022",
                                          "NOV, 2022",
                                          "DEC, 2022",
                                          "JAN, 2023",
                                          "FEB, 2023",
                                          "MAR, 2023",
                                          "APR, 2023",
                                          "MAY, 2023",
                                          "JUN, 2023",
                                          "JUL, 2023"
                                        },
                                        series: {
                                          a!chartSeries(
                                            label: "Average Cycle Time",
                                            data: local!chartData
                                          )
                                        },
                                        xAxisTitle: "Time",
                                        yAxisTitle: "Average Cycle Time (Days)",
                                        yAxisMax: if(max(local!chartData) < 200, 200 + 20, {}),
                                        referenceLines: {
                                          a!chartReferenceLine(
                                            label: "Threshold",
                                            value: 200,
                                            color: "#6C6C75",
                                            style: "DASHDOT"
                                          )
                                        },
                                        showLegend: false,
                                        showDataLabels: false,
                                        showTooltips: true,
                                        colorScheme: a!colorSchemeCustom(colors: { "#027dbb" }),
                                        height: "MEDIUM",
                                        xAxisStyle: "STANDARD",
                                        yAxisStyle: "MINIMAL"
                                      )
                                    },
                                    height: "TALL_PLUS",
                                    style: "#FCFCFF",
                                    shape: "SEMI_ROUNDED",
                                    padding: "STANDARD",
                                    marginBelow: "STANDARD",
                                    borderColor: "#EDEEFA"
                                  )
                                }
                              ),
                              a!columnLayout(
                                contents: {
                                  a!cardLayout(
                                    contents: {
                                      a!columnsLayout(
                                        columns: {
                                          a!columnLayout(
                                            contents: {
                                              a!cardLayout(
                                                contents: {
                                                  a!richTextDisplayField(
                                                    labelPosition: "COLLAPSED",
                                                    value: {
                                                      a!richTextItem(
                                                        text: { "Number of Awards" },
                                                        color: "#6C6C75"
                                                      )
                                                    }
                                                  ),
                                                  a!richTextDisplayField(
                                                    label: "",
                                                    labelPosition: "COLLAPSED",
                                                    value: {
                                                      a!richTextItem(
                                                        text: { "185" },
                                                        color: "#2E2E35",
                                                        size: "LARGE"
                                                      ),
                                                      char(10)
                                                    }
                                                  )
                                                },
                                                height: "AUTO",
                                                style: "#FCFCFF",
                                                shape: "SEMI_ROUNDED",
                                                padding: "STANDARD",
                                                marginBelow: "NONE",
                                                borderColor: "#EDEEFA"
                                              )
                                            }
                                          ),
                                          a!columnLayout(
                                            contents: {
                                              a!cardLayout(
                                                contents: {
                                                  a!richTextDisplayField(
                                                    labelPosition: "COLLAPSED",
                                                    value: {
                                                      a!richTextItem(
                                                        text: { "Average Cycle Time" },
                                                        color: "#6C6C75"
                                                      )
                                                    }
                                                  ),
                                                  a!richTextDisplayField(
                                                    label: "",
                                                    labelPosition: "COLLAPSED",
                                                    value: {
                                                      a!richTextItem(
                                                        text: { "56 " },
                                                        color: "#2E2E35",
                                                        size: "LARGE"
                                                      ),
                                                      a!richTextItem(
                                                        text: { "Days" },
                                                        color: "SECONDARY",
                                                        size: "MEDIUM"
                                                      ),
                                                      char(10)
                                                    }
                                                  )
                                                },
                                                height: "AUTO",
                                                style: "#FCFCFF",
                                                shape: "SEMI_ROUNDED",
                                                padding: "STANDARD",
                                                marginBelow: "NONE",
                                                borderColor: "#EDEEFA"
                                              )
                                            }
                                          )
                                        },
                                        marginBelow: "LESS",
                                        spacing: "DENSE"
                                      ),
                                      a!cardLayout(
                                        contents: {
                                          a!richTextDisplayField(
                                            labelPosition: "COLLAPSED",
                                            value: {
                                              a!richTextItem(
                                                text: { "Average Cycle Time Per Phase" },
                                                color: "#6C6C75"
                                              )
                                            }
                                          ),
                                          a!pieChartField(
                                            label: "Average Cycle Time Per Phase",
                                            labelPosition: "COLLAPSED",
                                            series: {
                                              a!chartSeries(label: "Chart Series 1", data: 1),
                                              a!chartSeries(label: "Chart Series 2", data: 2),
                                              a!chartSeries(label: "Chart Series 3", data: 3),
                                              a!chartSeries(label: "Chart Series 3", data: 4)
                                            },
                                            showTooltips: true,
                                            colorScheme: a!colorSchemeCustom(colors: local!CategoricalSceme),
                                            style: "DONUT",
                                            seriesLabelStyle: "NONE",
                                            height: "SHORT"
                                          ),
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
                                                            a!richTextIcon(
                                                              icon: "circle",
                                                              color: local!CategoricalSceme[1],
                                                              size: "SMALL"
                                                            ),
                                                            a!richTextItem(text: { " " }, size: "SMALL"),
                                                            a!richTextItem(
                                                              text: { "Draft " },
                                                              color: "SECONDARY",
                                                              size: "SMALL"
                                                            ),
                                                            a!richTextItem(text: { "   " }, size: "SMALL"),
                                                            a!richTextIcon(
                                                              icon: "circle",
                                                              color: local!CategoricalSceme[2],
                                                              size: "SMALL"
                                                            ),
                                                            a!richTextItem(text: { " " }, size: "SMALL"),
                                                            a!richTextItem(
                                                              text: { "Under Review " },
                                                              color: "SECONDARY",
                                                              size: "SMALL"
                                                            ),
                                                            a!richTextItem(text: { "   " }, size: "SMALL"),
                                                            a!richTextIcon(
                                                              icon: "circle",
                                                              color: local!CategoricalSceme[3],
                                                              size: "SMALL"
                                                            ),
                                                            a!richTextItem(text: { " " }, size: "SMALL"),
                                                            a!richTextItem(
                                                              text: { "Approved " },
                                                              color: "SECONDARY",
                                                              size: "SMALL"
                                                            ),
                                                            a!richTextItem(text: { " " }, size: "SMALL"),
                                                            char(10),
                                                            a!richTextIcon(
                                                              icon: "circle",
                                                              color: local!CategoricalSceme[4],
                                                              size: "SMALL"
                                                            ),
                                                            a!richTextItem(
                                                              text: { " Awaiting Signature" },
                                                              color: "SECONDARY",
                                                              size: "SMALL"
                                                            )
                                                          },
                                                          align: "CENTER"
                                                        ),
                                                        width: "AUTO"
                                                      )
                                                    },
                                                    spacing: "STANDARD",
                                                    marginAbove: "NONE",
                                                    marginBelow: "EVEN_LESS"
                                                  )
                                                },
                                                width: "WIDE"
                                              )
                                            },
                                            spacing: "DENSE"
                                          )
                                        },
                                        height: "TALL",
                                        style: "#FCFCFF",
                                        shape: "SEMI_ROUNDED",
                                        padding: "STANDARD",
                                        marginAbove: "EVEN_LESS",
                                        marginBelow: "NONE",
                                        borderColor: "#EDEEFA"
                                      )
                                    },
                                    height: "TALL_PLUS",
                                    style: "NONE",
                                    shape: "SEMI_ROUNDED",
                                    padding: "NONE",
                                    marginAbove: "NONE",
                                    marginBelow: "STANDARD",
                                    showBorder: false
                                  )
                                },
                                width: "MEDIUM"
                              )
                            },
                            spacing: "DENSE"
                          ),
                          a!cardLayout(
                            contents: {
                              {
                                a!columnsLayout(
                                  columns: {
                                    a!columnLayout(
                                      contents: {
                                        a!dateField(
                                          label: "Date", 
                                          labelPosition: "ABOVE"
                                        )
                                      }
                                    ),
                                    a!columnLayout(
                                      contents: {
                                        a!dropdownField(
                                          label: "Requesting Department",
                                          labelPosition: "ABOVE",
                                          placeholder: "All Departments",
                                          choiceLabels: {
                                            "Engineering",
                                            "Professional Services", 
                                            "Finance"
                                          },
                                          choiceValues: {
                                            "Engineering",
                                            "Professional Services",
                                            "Finance"
                                          },
                                          value: null,
                                          saveInto: {}
                                        )
                                      }
                                    ),
                                    a!columnLayout(
                                      contents: {
                                        a!dropdownField(
                                          label: "Vendor",
                                          labelPosition: "ABOVE", 
                                          placeholder: "All Vendors",
                                          choiceLabels: {
                                            "Vendor A",
                                            "Vendor B",
                                            "Vendor C"
                                          },
                                          choiceValues: {
                                            "Vendor A",
                                            "Vendor B", 
                                            "Vendor C"
                                          },
                                          value: null,
                                          saveInto: {}
                                        )
                                      }
                                    ),
                                    a!columnLayout(
                                      contents: {
                                        a!dropdownField(
                                          label: "Contracting Officer",
                                          labelPosition: "ABOVE",
                                          placeholder: "All Officers",
                                          choiceLabels: {
                                            "Officer A",
                                            "Officer B",
                                            "Officer C"
                                          },
                                          choiceValues: {
                                            "Officer A",
                                            "Officer B",
                                            "Officer C"
                                          },
                                          value: null,
                                          saveInto: {}
                                        )
                                      }
                                    ),
                                    a!columnLayout(
                                      contents: {
                                        a!dropdownField(
                                          label: "Spend Buckets",
                                          labelPosition: "ABOVE",
                                          placeholder: "All Buckets", 
                                          choiceLabels: {
                                            "$0 - $10K",
                                            "$10K - $50K",
                                            "$50K+"
                                          },
                                          choiceValues: {
                                            "0-10000",
                                            "10000-50000", 
                                            "50000+"
                                          },
                                          value: null,
                                          saveInto: {}
                                        )
                                      }
                                    )
                                  },
                                  alignVertical: "BOTTOM",
                                  marginAbove: "NONE",
                                  spacing: "STANDARD"
                                ),
                                a!gridField(
                                  label: "",
                                  labelPosition: "ABOVE",
                                  data: local!data,
                                  columns: {
                                    a!gridColumn(
                                      label: "Award ID",
                                      value: a!richTextDisplayField(
                                        value: a!richTextItem(text: fv!row.awardId, color: "ACCENT")
                                      )
                                    ),
                                    a!gridColumn(
                                      label: "Amount",
                                      value: a!richTextDisplayField(
                                        value: a!richTextItem(text: fv!row.amount, color: "#6C6C75")
                                      ),
                                      align: "END"
                                    ),
                                    a!gridColumn(
                                      label: "Release Date",
                                      value: a!richTextDisplayField(
                                        value: a!richTextItem(
                                          text: fv!row.releaseDate,
                                          color: "#6C6C75"
                                        )
                                      ),
                                      align: "END"
                                    ),
                                    a!gridColumn(
                                      label: "Requesting Department",
                                      value: a!richTextDisplayField(
                                        value: a!richTextItem(text: fv!row.buyer, color: "#6C6C75")
                                      ),
                                      backgroundColor: if(
                                        mod(fv!identifier, 2),
                                        "#FCFCFF",
                                        "#ffffff"
                                      )
                                    ),
                                    a!gridColumn(
                                      label: "Vendor",
                                      value: a!richTextDisplayField(
                                        value: a!richTextItem(text: fv!row.vendor, color: "#6C6C75")
                                      )
                                    ),
                                    a!gridColumn(
                                      label: "Contracting Officer",
                                      value: a!richTextDisplayField(
                                        value: a!richTextItem(
                                          text: fv!row.contractingOfficer,
                                          color: "#6C6C75"
                                        )
                                      )
                                    ),
                                    a!gridColumn(
                                      label: "Time in Draft",
                                      value: a!richTextDisplayField(
                                        value: a!richTextItem(text: fv!row.draft, color: "#6C6C75")
                                      ),
                                      align: "END"
                                    ),
                                    a!gridColumn(
                                      label: "Time Under Review",
                                      value: a!richTextDisplayField(
                                        value: a!richTextItem(
                                          text: fv!row.underReview,
                                          color: "#6C6C75"
                                        )
                                      ),
                                      align: "END"
                                    ),
                                    a!gridColumn(
                                      label: "Time Approved",
                                      value: a!richTextDisplayField(
                                        value: a!richTextItem(text: fv!row.approved, color: "#6C6C75")
                                      ),
                                      align: "END"
                                    ),
                                    a!gridColumn(
                                      label: "Time Awaiting Signature",
                                      value: a!richTextDisplayField(
                                        value: a!richTextItem(
                                          text: fv!row.awaitingSignature,
                                          color: "#6C6C75"
                                        )
                                      ),
                                      align: "END"
                                    ),
                                    a!gridColumn(
                                      label: "Total Cycle Time",
                                      value: a!richTextDisplayField(
                                        value: a!richTextItem(
                                          text: fv!row.totalCycleTime,
                                          color: "#6C6C75"
                                        )
                                      ),
                                      align: "END"
                                    )
                                  },
                                  validations: {},
                                  borderStyle: "LIGHT",
                                  shadeAlternateRows: true
                                )
                              }
                            },
                            height: "AUTO",
                            style: "TRANSPARENT",
                            shape: "SEMI_ROUNDED",
                            padding: "STANDARD",
                            marginBelow: "STANDARD",
                            showBorder: false
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
                  )
                }
              ),
              a!columnLayout(
                contents: a!localVariables(
                  local!Blue1: "#E9EDFC",
                  local!Blue4: "#08088D",
                  local!Orange1: "#FFEED3",
                  local!Orange3: "#FAA92F",
                  a!sectionLayout(
                    contents: {
                      a!cardLayout(
                        contents: {
                          a!cardLayout(
                            contents: {
                              a!imageField(
                                label: "",
                                labelPosition: "COLLAPSED",
                                images: {
                                  a!webImage(
                                    source:"https://raw.githubusercontent.com/pglevy/design-system-docs/main/assets/images/callout-image-1.png"
                                  )
                                },
                                size: "FIT",
                                isThumbnail: false,
                                style: "STANDARD",
                                align: "CENTER"
                              ),
                              a!richTextDisplayField(
                                label: "",
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: { "Great overall progress!" },
                                    size: "STANDARD",
                                    style: { "STRONG" }
                                  )
                                },
                                align: "CENTER",
                                marginAbove: "NONE",
                                marginBelow: "EVEN_LESS"
                              ),
                              a!richTextDisplayField(
                                label: "",
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: {
                                      "80% of you awards were process under the the threshold of 67 days. "
                                    },
                                    color: "SECONDARY",
                                    size: "STANDARD"
                                  )
                                },
                                align: "CENTER",
                                marginAbove: "NONE",
                                marginBelow: "MORE"
                              ),
                              a!buttonArrayLayout(
                                buttons: {
                                  a!buttonWidget(
                                    label: "Edit Threshold",
                                    size: "SMALL",
                                    width: "MINIMIZE",
                                    style: "SOLID"
                                  )
                                },
                                align: "CENTER"
                              )
                            },
                            height: "AUTO",
                            style: "TRANSPARENT",
                            padding: "STANDARD",
                            marginBelow: "STANDARD",
                            showBorder: false
                          ),
                          a!cardLayout(
                            contents: {
                              a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: { "Areas to Improve" },
                                align: "LEFT",
                                marginAbove: "STANDARD"
                              ),
                              a!cardLayout(
                                contents: {
                                  a!columnsLayout(
                                    columns: {
                                      a!columnLayout(
                                        contents: {
                                          a!cardLayout(
                                            contents: {
                                              a!richTextDisplayField(
                                                labelPosition: "COLLAPSED",
                                                value: {
                                                  a!richTextIcon(
                                                    icon: "exclamation-triangle",
                                                    color: local!Orange3,
                                                    size: "STANDARD"
                                                  )
                                                },
                                                align: "CENTER"
                                              )
                                            },
                                            height: "AUTO",
                                            style: local!Orange1,
                                            shape: "ROUNDED",
                                            padding: "STANDARD",
                                            marginBelow: "NONE",
                                            showBorder: false
                                          )
                                        },
                                        width: "EXTRA_NARROW"
                                      ),
                                      a!columnLayout(
                                        contents: {
                                          a!sideBySideLayout(
                                            items: {
                                              a!sideBySideItem(
                                                item: a!richTextDisplayField(
                                                  label: "",
                                                  labelPosition: "COLLAPSED",
                                                  instructions: "",
                                                  value: {
                                                    a!richTextItem(
                                                      text: { "Awaiting Signature" },
                                                      color: "#6C6C75",
                                                      size: "SMALL",
                                                      style: { "STRONG" }
                                                    ),
                                                    char(10),
                                                    a!richTextItem(
                                                      text: {
                                                        "The average cycle time for this phase is 5 days above the set threshold"
                                                      },
                                                      color: "SECONDARY",
                                                      size: "SMALL"
                                                    )
                                                  }
                                                )
                                              ),
                                              a!sideBySideItem(
                                                item: a!tagField(
                                                  labelPosition: "COLLAPSED",
                                                  tags: {
                                                    a!tagItem(
                                                      text: "›",
                                                      backgroundColor: "#fafafa",
                                                      textColor: "#6C6C75"
                                                    )
                                                  },
                                                  size: "STANDARD"
                                                ),
                                                width: "MINIMIZE"
                                              )
                                            },
                                            alignVertical: "MIDDLE",
                                            spacing: "STANDARD"
                                          )
                                        }
                                      )
                                    },
                                    alignVertical: "MIDDLE",
                                    spacing: "DENSE"
                                  )
                                },
                                height: "AUTO",
                                style: "NONE",
                                shape: "SEMI_ROUNDED",
                                marginBelow: "LESS",
                                borderColor: "#EDEEFA"
                              ),
                              a!cardLayout(
                                contents: {
                                  a!columnsLayout(
                                    columns: {
                                      a!columnLayout(
                                        contents: {
                                          a!cardLayout(
                                            contents: {
                                              a!richTextDisplayField(
                                                labelPosition: "COLLAPSED",
                                                value: {
                                                  a!richTextIcon(
                                                    icon: "exclamation-triangle",
                                                    color: local!Orange3,
                                                    size: "STANDARD"
                                                  )
                                                },
                                                align: "CENTER"
                                              )
                                            },
                                            height: "AUTO",
                                            style: local!Orange1,
                                            shape: "ROUNDED",
                                            padding: "STANDARD",
                                            marginBelow: "NONE",
                                            showBorder: false
                                          )
                                        },
                                        width: "EXTRA_NARROW"
                                      ),
                                      a!columnLayout(
                                        contents: {
                                          a!sideBySideLayout(
                                            items: {
                                              a!sideBySideItem(
                                                item: a!richTextDisplayField(
                                                  labelPosition: "COLLAPSED",
                                                  value: {
                                                    a!richTextItem(
                                                      text: { "Draft" },
                                                      color: "#6C6C75",
                                                      size: "SMALL",
                                                      style: { "STRONG" }
                                                    ),
                                                    char(10),
                                                    a!richTextItem(
                                                      text: {
                                                        "The average cycle time for this phase is 8 days above the set threshold"
                                                      },
                                                      color: "SECONDARY",
                                                      size: "SMALL"
                                                    )
                                                  }
                                                )
                                              ),
                                              a!sideBySideItem(
                                                item: a!tagField(
                                                  labelPosition: "COLLAPSED",
                                                  tags: {
                                                    a!tagItem(
                                                      text: "›",
                                                      backgroundColor: "#fafafa",
                                                      textColor: "#6C6C75"
                                                    )
                                                  },
                                                  size: "STANDARD"
                                                ),
                                                width: "MINIMIZE"
                                              )
                                            },
                                            alignVertical: "MIDDLE",
                                            spacing: "STANDARD"
                                          )
                                        }
                                      )
                                    },
                                    alignVertical: "MIDDLE",
                                    spacing: "DENSE"
                                  )
                                },
                                height: "AUTO",
                                style: "NONE",
                                shape: "ROUNDED",
                                padding: "LESS",
                                marginBelow: "STANDARD",
                                borderColor: "#EDEEFA"
                              )
                            },
                            height: "AUTO",
                            style: "#FCFCFF",
                            shape: "SEMI_ROUNDED",
                            marginBelow: "STANDARD",
                            borderColor: "#EDEEFA"
                          )
                        },
                        height: "AUTO",
                        style: "#ffffff",
                        shape: "SEMI_ROUNDED",
                        padding: "LESS",
                        marginBelow: "STANDARD",
                        borderColor: "#EDEEFA"
                      ),
                      a!cardLayout(
                        contents: {
                          a!richTextDisplayField(
                            label: "",
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: { "Awards with Longest Cycle Times" },
                                size: "STANDARD",
                                style: { "STRONG" }
                              )
                            },
                            marginAbove: "NONE",
                            marginBelow: "STANDARD"
                          ),
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!tagField(
                                  label: "Tag Field",
                                  labelPosition: "COLLAPSED",
                                  tags: {
                                    a!tagItem(
                                      text: "1",
                                      backgroundColor: local!Blue1,
                                      textColor: local!Blue4
                                    )
                                  },
                                  size: "STANDARD",
                                  align: "CENTER"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  label: "HT98200012",
                                  labelPosition: "COLLAPSED",
                                  instructions: "",
                                  value: {
                                    a!richTextItem(text: { "HT98200012" }, color: "ACCENT"),
                                    char(10),
                                    "Personal projects should be an important part of life as Award description up until a certain character cut off. This will give a brief introduction about what the award is.",
                                    char(10),
                                    a!richTextItem(text: { "55 Days" }, color: "SECONDARY")
                                  },
                                  preventWrapping: false
                                )
                              )
                            },
                            marginAbove: "EVEN_LESS"
                          ),
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!tagField(
                                  label: "Tag Field",
                                  labelPosition: "COLLAPSED",
                                  tags: {
                                    a!tagItem(
                                      text: "2",
                                      backgroundColor: local!Blue1,
                                      textColor: local!Blue4
                                    )
                                  },
                                  size: "STANDARD",
                                  align: "CENTER"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  label: "HT98200012",
                                  labelPosition: "COLLAPSED",
                                  instructions: "",
                                  value: {
                                    a!richTextItem(text: { "HT98200012" }, color: "ACCENT"),
                                    char(10),
                                    "Award description up until a certain character cut off. This will give a brief introduction about what the award is.",
                                    char(10),
                                    a!richTextItem(text: { "55 Days" }, color: "SECONDARY")
                                  }
                                )
                              )
                            }
                          ),
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!tagField(
                                  label: "Tag Field",
                                  labelPosition: "COLLAPSED",
                                  tags: {
                                    a!tagItem(
                                      text: "3",
                                      backgroundColor: local!Blue1,
                                      textColor: local!Blue4
                                    )
                                  },
                                  size: "STANDARD",
                                  align: "CENTER"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  label: "HT98200012",
                                  labelPosition: "COLLAPSED",
                                  instructions: "",
                                  value: {
                                    a!richTextItem(text: { "HT98200012" }, color: "ACCENT"),
                                    char(10),
                                    "Award description up until a certain character cut off. This will give a brief introduction about what the award is.",
                                    char(10),
                                    a!richTextItem(text: { "55 Days" }, color: "SECONDARY")
                                  }
                                )
                              )
                            }
                          ),
                          a!richTextDisplayField(
                            label: "",
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: { "Vendors with Longest Cycle Times" },
                                style: { "STRONG" }
                              )
                            },
                            marginAbove: "STANDARD",
                            marginBelow: "STANDARD"
                          ),
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!tagField(
                                  label: "Tag Field",
                                  labelPosition: "COLLAPSED",
                                  tags: {
                                    a!tagItem(
                                      text: "1",
                                      backgroundColor: local!Blue1,
                                      textColor: local!Blue4
                                    )
                                  },
                                  size: "STANDARD",
                                  align: "CENTER"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  label: "",
                                  labelPosition: "COLLAPSED",
                                  instructions: "",
                                  value: {
                                    "Microsoft",
                                    char(10),
                                    a!richTextItem(
                                      text: { "66 Days on Average" },
                                      color: "SECONDARY"
                                    )
                                  }
                                )
                              )
                            },
                            marginAbove: "EVEN_LESS"
                          ),
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!tagField(
                                  label: "Tag Field",
                                  labelPosition: "COLLAPSED",
                                  tags: {
                                    a!tagItem(
                                      text: "2",
                                      backgroundColor: local!Blue1,
                                      textColor: local!Blue4
                                    )
                                  },
                                  size: "STANDARD",
                                  align: "CENTER"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  label: "",
                                  labelPosition: "COLLAPSED",
                                  instructions: "",
                                  value: {
                                    "Lockheed Martin",
                                    char(10),
                                    a!richTextItem(
                                      text: { "66 Days on Average" },
                                      color: "SECONDARY"
                                    )
                                  }
                                )
                              )
                            },
                            marginAbove: "EVEN_LESS"
                          ),
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!tagField(
                                  label: "Tag Field",
                                  labelPosition: "COLLAPSED",
                                  tags: {
                                    a!tagItem(
                                      text: "3",
                                      backgroundColor: local!Blue1,
                                      textColor: local!Blue4
                                    )
                                  },
                                  size: "STANDARD",
                                  align: "CENTER"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  label: "",
                                  labelPosition: "COLLAPSED",
                                  instructions: "",
                                  value: {
                                    "Boeing",
                                    char(10),
                                    a!richTextItem(
                                      text: { "66 Days on Average" },
                                      color: "SECONDARY"
                                    )
                                  }
                                )
                              )
                            },
                            marginAbove: "EVEN_LESS"
                          ),
                          a!richTextDisplayField(
                            label: "",
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: {
                                  "Requesting Departments with Longest Cycle Times"
                                },
                                style: { "STRONG" }
                              )
                            },
                            marginAbove: "STANDARD",
                            marginBelow: "STANDARD"
                          ),
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!tagField(
                                  label: "Tag Field",
                                  labelPosition: "COLLAPSED",
                                  tags: {
                                    a!tagItem(
                                      text: "1",
                                      backgroundColor: local!Blue1,
                                      textColor: local!Blue4
                                    )
                                  },
                                  size: "STANDARD",
                                  align: "CENTER"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  label: "",
                                  labelPosition: "COLLAPSED",
                                  instructions: "",
                                  value: {
                                    "Research and Development",
                                    char(10),
                                    a!richTextItem(
                                      text: { "66 Days on Average" },
                                      color: "SECONDARY"
                                    )
                                  }
                                )
                              )
                            },
                            marginAbove: "EVEN_LESS",
                            marginBelow: "STANDARD"
                          ),
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!tagField(
                                  label: "Tag Field",
                                  labelPosition: "COLLAPSED",
                                  tags: {
                                    a!tagItem(
                                      text: "2",
                                      backgroundColor: local!Blue1,
                                      textColor: local!Blue4
                                    )
                                  },
                                  size: "STANDARD",
                                  align: "CENTER"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  label: "",
                                  labelPosition: "COLLAPSED",
                                  instructions: "",
                                  value: {
                                    "Enforcement and Compliance Assurance",
                                    char(10),
                                    a!richTextItem(
                                      text: { "63 Days on Average" },
                                      color: "SECONDARY"
                                    )
                                  }
                                )
                              )
                            },
                            marginAbove: "EVEN_LESS"
                          ),
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!tagField(
                                  label: "Tag Field",
                                  labelPosition: "COLLAPSED",
                                  tags: {
                                    a!tagItem(
                                      text: "3",
                                      backgroundColor: local!Blue1,
                                      textColor: local!Blue4
                                    )
                                  },
                                  size: "STANDARD",
                                  align: "CENTER"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  label: "",
                                  labelPosition: "ABOVE",
                                  instructions: "",
                                  value: {
                                    "Chief of Staff",
                                    char(10),
                                    a!richTextItem(
                                      text: { "60 Days on Average" },
                                      color: "SECONDARY"
                                    )
                                  }
                                )
                              )
                            },
                            marginAbove: "EVEN_LESS"
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
                  )
                ),
                width: "MEDIUM"
              )
            }
          )
        }
      )
    },
    backgroundColor: local!AppianBackground
  )
)
```

### Filters

```
a!headerContentLayout(
  header: {
    a!billboardLayout(
      backgroundMedia: a!webImage(
        source: "https://raw.githubusercontent.com/pglevy/design-system-docs/main/assets/images/billboard-bg-1.jpg"
      ),
      height: "EXTRA_SHORT",
      marginBelow: "NONE"
    ),
    a!cardLayout(
      contents: {
        a!columnsLayout(
          columns: {
            a!columnLayout(
              contents: {
                a!columnsLayout(
                  columns: {
                    a!columnLayout(
                      contents: {
                        a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: { "GIFT DOLLARS TO TARGET" }
                        ),
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextIcon(
                                    icon: "money",
                                    color: "SECONDARY",
                                    size: "MEDIUM_PLUS"
                                  ),
                                  a!richTextItem(
                                    text: { " 82.9%" },
                                    size: "MEDIUM_PLUS",
                                    style: { "STRONG" }
                                  )
                                }
                              )
                            ),
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextIcon(
                                    icon: "caret-up",
                                    color: "POSITIVE",
                                    size: "STANDARD"
                                  ),
                                  a!richTextItem(
                                    text: { "1.9%" },
                                    color: "STANDARD",
                                    size: "STANDARD"
                                  )
                                }
                              ),
                              width: "MINIMIZE"
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
                          value: { "DONOR RETENTION" }
                        ),
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextIcon(
                                    icon: "user-circle-o",
                                    color: "SECONDARY",
                                    size: "MEDIUM_PLUS"
                                  ),
                                  a!richTextItem(
                                    text: { " 74.2%" },
                                    size: "MEDIUM_PLUS",
                                    style: { "STRONG" }
                                  )
                                }
                              )
                            ),
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextIcon(
                                    icon: "caret-down",
                                    color: "NEGATIVE",
                                    size: "STANDARD"
                                  ),
                                  a!richTextItem(
                                    text: { "2.3%" },
                                    color: "STANDARD",
                                    size: "STANDARD"
                                  )
                                }
                              ),
                              width: "MINIMIZE"
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
                          value: { "NEW DONORS TO TARGET" }
                        ),
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextIcon(
                                    icon: "user-plus",
                                    color: "SECONDARY",
                                    size: "MEDIUM_PLUS"
                                  ),
                                  a!richTextItem(
                                    text: { " 91.6%" },
                                    size: "MEDIUM_PLUS",
                                    style: { "STRONG" }
                                  )
                                }
                              )
                            ),
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextIcon(
                                    icon: "caret-up",
                                    color: "POSITIVE",
                                    size: "STANDARD"
                                  ),
                                  a!richTextItem(
                                    text: { "3.0%" },
                                    color: "STANDARD",
                                    size: "STANDARD"
                                  )
                                }
                              ),
                              width: "MINIMIZE"
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
                          value: { "RECURRING GIFT RATE" }
                        ),
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextIcon(
                                    icon: "refresh",
                                    color: "SECONDARY",
                                    size: "MEDIUM_PLUS"
                                  ),
                                  a!richTextItem(
                                    text: { " 48.5%" },
                                    size: "MEDIUM_PLUS",
                                    style: { "STRONG" }
                                  )
                                }
                              )
                            ),
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextIcon(
                                    icon: "caret-down",
                                    color: "NEGATIVE",
                                    size: "STANDARD"
                                  ),
                                  a!richTextItem(
                                    text: { "5.1%" },
                                    color: "STANDARD",
                                    size: "STANDARD"
                                  )
                                }
                              ),
                              width: "MINIMIZE"
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
                          value: { "ACTIVE CAMPAIGNS" }
                        ),
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextIcon(
                                    icon: "bullhorn",
                                    color: "SECONDARY",
                                    size: "MEDIUM_PLUS"
                                  ),
                                  a!richTextItem(
                                    text: { " 17" },
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
                    )
                  },
                  spacing: "SPARSE",
                  showDividers: true
                )
              },
              width: "WIDE_PLUS"
            ),
            a!columnLayout(contents: {}, width: "AUTO"),
            a!columnLayout(
              contents: {
                a!buttonArrayLayout(
                  buttons: {
                    a!buttonWidget(
                      label: "NEW CAMPAIGN",
                      icon: "plus-circle",
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
      padding: "STANDARD",
      marginBelow: "NONE"
    )
  },
  contents: {
    a!columnsLayout(
      columns: {
        a!columnLayout(
          contents: {
            a!sectionLayout(
              label: "Alerts",
              labelSize: "SMALL",
              labelHeadingTag: "H2",
              labelColor: "STANDARD",
              contents: {
                a!cardLayout(
                  shape: "SEMI_ROUNDED",
                  contents: {
                    a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: {
                        char(10),
                        char(10),
                        char(10),
                        char(10),
                        a!richTextIcon(
                          icon: "bell-slash-o",
                          color: "#d9d9d9",
                          size: "EXTRA_LARGE"
                        ),
                        char(10),
                        a!richTextItem(
                          text: { "No Alerts" },
                          color: "SECONDARY",
                          size: "MEDIUM"
                        )
                      },
                      align: "CENTER"
                    )
                  },
                  height: "MEDIUM_PLUS",
                  style: "NONE",
                  marginBelow: "STANDARD",
                  borderColor: "#EDEEFA"
                )
              }
            ),
            a!sectionLayout(
              label: "My Tasks",
              labelSize: "SMALL",
              labelHeadingTag: "H2",
              labelColor: "STANDARD",
              contents: {
                a!cardLayout(
                  contents: {
                    a!cardLayout(
                      shape: "SEMI_ROUNDED",
                      contents: {
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: {
                                      "Complete performance review for Pete Moody"
                                    },
                                    style: { "STRONG" }
                                  )
                                },
                                preventWrapping: true
                              )
                            )
                          },
                          marginBelow: "NONE"
                        ),
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextIcon(
                                    icon: "hand-o-right",
                                    color: "SECONDARY",
                                    size: "SMALL"
                                  ),
                                  a!richTextItem(text: { " Me" }, size: "SMALL")
                                },
                                preventWrapping: true
                              )
                            ),
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: { "Yesterday 12:05 PM" },
                                    color: "SECONDARY",
                                    size: "SMALL"
                                  )
                                }
                              ),
                              width: "MINIMIZE"
                            )
                          },
                          alignVertical: "MIDDLE"
                        )
                      },
                      link: a!dynamicLink(label: "Dynamic Link", saveInto: {}),
                      height: "AUTO",
                      style: "NONE",
                      marginBelow: "NONE",
                      showBorder: false
                    ),
                    a!cardLayout(
                      contents: {
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: {
                                      "Review conference presentation template branding updates"
                                    },
                                    style: { "STRONG" }
                                  )
                                },
                                preventWrapping: true
                              )
                            )
                          },
                          marginBelow: "NONE"
                        ),
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextIcon(
                                    icon: "hand-o-right",
                                    color: "SECONDARY",
                                    size: "SMALL"
                                  ),
                                  a!richTextItem(text: { " Me, " }, size: "SMALL"),
                                  a!richTextItem(
                                    text: { "Darryl Gill" },
                                    color: "ACCENT",
                                    size: "SMALL"
                                  ),
                                  a!richTextItem(text: { ", " }, size: "SMALL"),
                                  a!richTextItem(
                                    text: { "Erin Pope" },
                                    color: "ACCENT",
                                    size: "SMALL"
                                  )
                                },
                                preventWrapping: true
                              )
                            ),
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: { "Monday 9:27 AM" },
                                    color: "SECONDARY",
                                    size: "SMALL"
                                  )
                                }
                              ),
                              width: "MINIMIZE"
                            )
                          },
                          alignVertical: "MIDDLE"
                        )
                      },
                      link: a!dynamicLink(label: "Dynamic Link", saveInto: {}),
                      height: "AUTO",
                      style: "NONE",
                      marginBelow: "NONE",
                      showBorder: false,
                      showShadow: true
                    ),
                    a!cardLayout(
                      contents: {
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: { "Update Q3 performance targets" },
                                    style: { "STRONG" }
                                  )
                                },
                                preventWrapping: true
                              )
                            )
                          },
                          marginBelow: "NONE"
                        ),
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextIcon(
                                    icon: "hand-o-right",
                                    color: "SECONDARY",
                                    size: "SMALL"
                                  ),
                                  a!richTextItem(
                                    text: { " Department Leadership" },
                                    size: "SMALL"
                                  )
                                },
                                preventWrapping: true
                              )
                            ),
                            a!sideBySideItem(
                              item: a!tagField(
                                labelPosition: "COLLAPSED",
                                tags: {
                                  a!tagItem(
                                    text: "OVERDUE",
                                    backgroundColor: "NEGATIVE"
                                  )
                                },
                                size: "SMALL"
                              ),
                              width: "MINIMIZE"
                            ),
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: { "Feb 23" },
                                    color: "SECONDARY",
                                    size: "SMALL"
                                  )
                                }
                              ),
                              width: "MINIMIZE"
                            )
                          },
                          alignVertical: "MIDDLE"
                        )
                      },
                      link: a!dynamicLink(label: "Dynamic Link", saveInto: {}),
                      height: "AUTO",
                      style: "NONE",
                      marginBelow: "NONE",
                      showBorder: false,
                      showShadow: true
                    ),
                    a!cardLayout(
                      contents: {
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: { "2022 Team Assignments" },
                                    style: { "STRONG" }
                                  )
                                },
                                preventWrapping: true
                              )
                            )
                          },
                          marginBelow: "NONE"
                        ),
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextIcon(
                                    icon: "hand-o-right",
                                    color: "SECONDARY",
                                    size: "SMALL"
                                  ),
                                  a!richTextItem(text: { " Me, " }, size: "SMALL"),
                                  a!richTextItem(
                                    text: { "Kari Becker" },
                                    color: "ACCENT",
                                    size: "SMALL"
                                  )
                                },
                                preventWrapping: true
                              )
                            ),
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: { "Feb 22" },
                                    color: "SECONDARY",
                                    size: "SMALL"
                                  )
                                }
                              ),
                              width: "MINIMIZE"
                            )
                          },
                          alignVertical: "MIDDLE"
                        )
                      },
                      link: a!dynamicLink(label: "Dynamic Link", saveInto: {}),
                      height: "AUTO",
                      style: "NONE",
                      marginBelow: "NONE",
                      showBorder: false,
                      showShadow: true
                    ),
                    a!cardLayout(
                      contents: {
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: {
                                      "Nominate top performer award recipients"
                                    },
                                    style: { "STRONG" }
                                  )
                                },
                                preventWrapping: true
                              )
                            )
                          },
                          marginBelow: "NONE"
                        ),
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextIcon(
                                    icon: "hand-o-right",
                                    color: "SECONDARY",
                                    size: "SMALL"
                                  ),
                                  a!richTextItem(
                                    text: { " Managers, Vice Presidents" },
                                    size: "SMALL"
                                  )
                                },
                                preventWrapping: true
                              )
                            ),
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: { "Feb 21" },
                                    color: "SECONDARY",
                                    size: "SMALL"
                                  )
                                }
                              ),
                              width: "MINIMIZE"
                            )
                          },
                          alignVertical: "MIDDLE"
                        )
                      },
                      link: a!dynamicLink(label: "Dynamic Link", saveInto: {}),
                      height: "AUTO",
                      style: "NONE",
                      marginBelow: "NONE",
                      showBorder: false,
                      showShadow: true
                    ),
                    a!cardLayout(
                      contents: {
                        a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: {
                            a!richTextItem(
                              text: {
                                "See All Tasks ",
                                a!richTextIcon(icon: "chevron-right")
                              },
                              color: "ACCENT",
                              style: { "STRONG" }
                            )
                          },
                          align: "CENTER"
                        )
                      },
                      link: a!dynamicLink(label: "Dynamic Link", saveInto: {}),
                      height: "AUTO",
                      style: "NONE",
                      marginBelow: "NONE",
                      showBorder: false,
                      showShadow: true
                    )
                  },
                  height: "AUTO",
                  style: "NONE",
                  padding: "NONE",
                  shape: "SEMI_ROUNDED",
                  marginBelow: "STANDARD",
                  borderColor: "#EDEEFA"
                )
              }
            )
          },
          width: "MEDIUM"
        ),
        a!columnLayout(
          contents: {
            a!sectionLayout(
              label: "Active Campaigns",
              labelSize: "SMALL",
              labelHeadingTag: "H2",
              labelColor: "STANDARD",
              contents: {
                a!cardLayout(
                  shape: "SEMI_ROUNDED",
                  borderColor: "#EDEEFA",
                  contents: {
                    a!localVariables(
                      local!campaigns: {
                        /*
     * Sample campaign data. In a real application, this data would typically come
     * from a database query (e.g., a!queryEntity).
     */
                        a!map(
                          id: 1,
                          name: "Summer Sale 2025",
                          status: "Active",
                          startDate: today() - 30,
                          endDate: today() + 60,
                          budget: 15000
                        ),
                        a!map(
                          id: 2,
                          name: "New Product Launch",
                          status: "Active",
                          startDate: today() - 15,
                          endDate: today() + 45,
                          budget: 25000
                        ),
                        a!map(
                          id: 3,
                          name: "Holiday Promotion",
                          status: "Paused",
                          startDate: today() - 5,
                          endDate: today() + 30,
                          budget: 10000
                        ),
                        a!map(
                          id: 4,
                          name: "Winter Clearance 2024",
                          status: "Completed",
                          startDate: today() - 90,
                          endDate: today() - 30,
                          budget: 8000
                        ),
                        a!map(
                          id: 5,
                          name: "Q3 Lead Generation",
                          status: "Active",
                          startDate: today() - 45,
                          endDate: today() + 15,
                          budget: 18000
                        ),
                        a!map(
                          id: 6,
                          name: "Customer Loyalty Program",
                          status: "Active",
                          startDate: today() - 10,
                          endDate: today() + 90,
                          budget: 12000
                        ),
                        a!map(
                          id: 7,
                          name: "Summer Sale 2025",
                          status: "Active",
                          startDate: today() - 30,
                          endDate: today() + 60,
                          budget: 15000
                        ),
                        a!map(
                          id: 8,
                          name: "New Product Launch",
                          status: "Active",
                          startDate: today() - 15,
                          endDate: today() + 45,
                          budget: 25000
                        ),
                        a!map(
                          id: 9,
                          name: "Holiday Promotion",
                          status: "Paused",
                          startDate: today() - 5,
                          endDate: today() + 30,
                          budget: 10000
                        ),
                        a!map(
                          id: 10,
                          name: "Winter Clearance 2024",
                          status: "Completed",
                          startDate: today() - 90,
                          endDate: today() - 30,
                          budget: 8000
                        ),
                        a!map(
                          id: 11,
                          name: "Q3 Lead Generation",
                          status: "Active",
                          startDate: today() - 45,
                          endDate: today() + 15,
                          budget: 18000
                        ),
                        a!map(
                          id: 12,
                          name: "Customer Loyalty Program",
                          status: "Active",
                          startDate: today() - 10,
                          endDate: today() + 90,
                          budget: 12000
                        ),
                        a!map(
                          id: 13,
                          name: "Summer Sale 2025",
                          status: "Active",
                          startDate: today() - 30,
                          endDate: today() + 60,
                          budget: 15000
                        ),
                        a!map(
                          id: 14,
                          name: "New Product Launch",
                          status: "Active",
                          startDate: today() - 15,
                          endDate: today() + 45,
                          budget: 25000
                        ),
                        a!map(
                          id: 15,
                          name: "Holiday Promotion",
                          status: "Paused",
                          startDate: today() - 5,
                          endDate: today() + 30,
                          budget: 10000
                        ),
                        a!map(
                          id: 16,
                          name: "Winter Clearance 2024",
                          status: "Completed",
                          startDate: today() - 90,
                          endDate: today() - 30,
                          budget: 8000
                        ),
                        a!map(
                          id: 17,
                          name: "Q3 Lead Generation",
                          status: "Active",
                          startDate: today() - 45,
                          endDate: today() + 15,
                          budget: 18000
                        ),
                        a!map(
                          id: 18,
                          name: "Customer Loyalty Program",
                          status: "Active",
                          startDate: today() - 10,
                          endDate: today() + 90,
                          budget: 12000
                        ),
                        a!map(
                          id: 19,
                          name: "Summer Sale 2025",
                          status: "Active",
                          startDate: today() - 30,
                          endDate: today() + 60,
                          budget: 15000
                        ),
                        a!map(
                          id: 20,
                          name: "New Product Launch",
                          status: "Active",
                          startDate: today() - 15,
                          endDate: today() + 45,
                          budget: 25000
                        ),
                        a!map(
                          id: 21,
                          name: "Holiday Promotion",
                          status: "Paused",
                          startDate: today() - 5,
                          endDate: today() + 30,
                          budget: 10000
                        ),
                        a!map(
                          id: 22,
                          name: "Winter Clearance 2024",
                          status: "Completed",
                          startDate: today() - 90,
                          endDate: today() - 30,
                          budget: 8000
                        ),
                        a!map(
                          id: 23,
                          name: "Q3 Lead Generation",
                          status: "Active",
                          startDate: today() - 45,
                          endDate: today() + 15,
                          budget: 18000
                        ),
                        a!map(
                          id: 24,
                          name: "Customer Loyalty Program",
                          status: "Active",
                          startDate: today() - 10,
                          endDate: today() + 90,
                          budget: 12000
                        ),
                        a!map(
                          id: 25,
                          name: "Summer Sale 2025",
                          status: "Active",
                          startDate: today() - 30,
                          endDate: today() + 60,
                          budget: 15000
                        ),

                      },
                      local!filterName: "",
                      /* Local variable to store the campaign name filter */
                      local!filterStatus: "",
                      /* Local variable to store the campaign status filter */
                      {
                        /*
       * Filters section:
       * Uses a!columnsLayout to place filter fields side-by-side.
       * These filters would typically be defined in the userFilters parameter in the a!gridField()
       * Filters would be defined based on record filter references 
       */
                        a!columnsLayout(
                          columns: {
                            a!columnLayout(
                              contents: {
                                a!textField(
                                  label: "Campaign Name",
                                  value: local!filterName,
                                  saveInto: local!filterName,
                                  placeholder: "Enter campaign name",
                                  refreshAfter: "KEYPRESS",
                                  /* Update filter on each keypress */

                                )
                              }
                            ),
                            a!columnLayout(
                              contents: {
                                a!dropdownField(
                                  label: "Status",
                                  placeholder: "Select a status",
                                  choiceLabels: { "Active", "Paused", "Completed" },
                                  choiceValues: { "Active", "Paused", "Completed" },
                                  value: local!filterStatus,
                                  saveInto: local!filterStatus,

                                )
                              }
                            )
                          }
                        ),
                        /*
       * Campaign Grid:
       * Uses a!gridField to display the filtered campaign data.
       * Grid columns are defined with their respective field names and formatting.
       */
                        a!gridField(
                          data: local!campaigns,
                          pageSize: 15,
                          columns: {
                            a!gridColumn(
                              label: "ID",
                              value: fv!row.id,
                              width: "ICON"
                            ),
                            a!gridColumn(
                              label: "Campaign Name",
                              value: fv!row.name,
                              width: "MEDIUM"
                            ),
                            a!gridColumn(
                              label: "Status",
                              value: fv!row.status,
                              width: "NARROW"
                            ),
                            a!gridColumn(
                              label: "Start Date",
                              value: fv!row.startDate,
                              width: "NARROW"
                            ),
                            a!gridColumn(
                              label: "End Date",
                              value: fv!row.endDate,
                              width: "NARROW"
                            ),
                            a!gridColumn(
                              label: "Budget",
                              value: fv!row.budget,
                              width: "NARROW"
                            )
                          },
                          /*
         * Empty grid message when no data matches the filters.
         */
                          emptyGridMessage: "No active campaigns found matching your criteria.",
                          /*
         * showWhen ensures the grid only appears if filteredCampaigns is not empty.
         * The `emptyGridMessage` will automatically be displayed if the grid
         * data is empty after filtering.
         */
                          showWhen: not(isnull(local!campaigns)),
                          userFilters: {}/* This parameter is typically where you'd define grid filters */

                        )
                      }
                    )
                  }
                )
              }
            )
          },
          width: "AUTO"
        ),
        a!columnLayout(
          contents: {
            a!sectionLayout(
              label: "Actions",
              labelSize: "SMALL",
              labelHeadingTag: "H2",
              labelColor: "STANDARD",
              contents: {
                a!cardLayout(
                  shape: "SEMI_ROUNDED",
                  contents: {
                    a!buttonArrayLayout(
                      buttons: {
                        a!buttonWidget(
                          label: "Enroll New Donor",
                          icon: "user-plus",
                          width: "FILL",
                          style: "OUTLINE",
                          color: "SECONDARY"
                        ),
                        a!buttonWidget(
                          label: "Launch Quarterly Audit",
                          icon: "search",
                          width: "FILL",
                          style: "OUTLINE",
                          color: "SECONDARY"
                        ),
                        a!buttonWidget(
                          label: "New Campaign Category",
                          icon: "plus-circle",
                          width: "FILL",
                          style: "OUTLINE",
                          color: "SECONDARY"
                        )
                      },
                      align: "START",
                      marginBelow: "NONE"
                    )
                  },
                  height: "AUTO",
                  style: "NONE",
                  marginBelow: "STANDARD",
                  borderColor: "#EDEEFA"
                )
              }
            ),
            a!sectionLayout(
              label: "Resources",
              labelSize: "SMALL",
              labelHeadingTag: "H2",
              labelColor: "STANDARD",
              contents: {
                a!cardLayout(
                  shape: "SEMI_ROUNDED",
                  contents: {
                    a!cardLayout(
                      contents: {
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!stampField(
                                labelPosition: "COLLAPSED",
                                icon: "download",
                                backgroundColor: "#d7e5f3",
                                contentColor: "#3d85c6",
                                size: "TINY"
                              ),
                              width: "MINIMIZE"
                            ),
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: { "Campaign Manager Playbook" },
                                    style: { "STRONG" }
                                  )
                                },
                                preventWrapping: true
                              )
                            )
                          },
                          alignVertical: "MIDDLE"
                        )
                      },
                      link: a!dynamicLink(label: "Dynamic Link", saveInto: {}),
                      height: "AUTO",
                      style: "NONE",
                      padding: "",
                      marginBelow: "NONE",
                      showBorder: false,
                      showShadow: true
                    ),
                    a!cardLayout(
                      contents: {
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!stampField(
                                labelPosition: "COLLAPSED",
                                icon: "link",
                                backgroundColor: "#d7f3e0",
                                contentColor: "#459b20",
                                size: "TINY"
                              ),
                              width: "MINIMIZE"
                            ),
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: { "Google Ads Dashboard" },
                                    style: { "STRONG" }
                                  )
                                }
                              )
                            )
                          },
                          alignVertical: "MIDDLE"
                        )
                      },
                      link: a!dynamicLink(label: "Dynamic Link", saveInto: {}),
                      height: "AUTO",
                      style: "NONE",
                      marginBelow: "NONE",
                      showBorder: false,
                      showShadow: true
                    ),
                    a!cardLayout(
                      contents: {
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!stampField(
                                labelPosition: "COLLAPSED",
                                icon: "link",
                                backgroundColor: "#d7f3e0",
                                contentColor: "#459b20",
                                size: "TINY"
                              ),
                              width: "MINIMIZE"
                            ),
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: { "Microsoft Ads Dashboard" },
                                    style: { "STRONG" }
                                  )
                                }
                              )
                            )
                          },
                          alignVertical: "MIDDLE"
                        )
                      },
                      link: a!dynamicLink(label: "Dynamic Link", saveInto: {}),
                      height: "AUTO",
                      style: "NONE",
                      marginBelow: "NONE",
                      showBorder: false,
                      showShadow: true
                    ),
                    a!cardLayout(
                      contents: {
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!stampField(
                                labelPosition: "COLLAPSED",
                                icon: "download",
                                backgroundColor: "#d7e5f3",
                                contentColor: "#3d85c6",
                                size: "TINY"
                              ),
                              width: "MINIMIZE"
                            ),
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: { "New Hire Onboarding Guide" },
                                    style: { "STRONG" }
                                  )
                                },
                                preventWrapping: true
                              )
                            )
                          },
                          alignVertical: "MIDDLE"
                        )
                      },
                      link: a!dynamicLink(label: "Dynamic Link", saveInto: {}),
                      height: "AUTO",
                      style: "NONE",
                      marginBelow: "NONE",
                      showBorder: false,
                      showShadow: true
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
            a!sectionLayout(
              label: "My Goals",
              labelSize: "SMALL",
              labelHeadingTag: "H2",
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
                                a!richTextItem(text: { "CALLS PLACED" }, color: "STANDARD")
                              },
                              align: "CENTER"
                            ),
                            a!gaugeField(
                              labelPosition: "COLLAPSED",
                              percentage: 68.0,
                              primaryText: a!gaugeIcon(icon: "phone"),
                              color: "#45818e",
                              size: "SMALL",
                              align: "CENTER"
                            ),
                            a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                "68% ",
                                a!richTextItem(text: { "of goal" }, color: "SECONDARY")
                              },
                              align: "CENTER"
                            )
                          }
                        ),
                        a!columnLayout(
                          contents: {
                            a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextItem(text: { "NEW DONORS" }, color: "STANDARD")
                              },
                              align: "CENTER"
                            ),
                            a!gaugeField(
                              labelPosition: "COLLAPSED",
                              percentage: 100.0,
                              primaryText: a!gaugeIcon(icon: "user"),
                              color: "#a64d79",
                              size: "SMALL",
                              align: "CENTER"
                            ),
                            a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextItem(
                                  text: { "104%" },
                                  color: "POSITIVE",
                                  style: { "STRONG" }
                                ),
                                " ",
                                a!richTextItem(text: { "of goal" }, color: "SECONDARY")
                              },
                              align: "CENTER"
                            )
                          }
                        )
                      }
                    )
                  },
                  height: "AUTO",
                  style: "NONE",
                  padding: "MORE",
                  marginBelow: "STANDARD",
                  borderColor: "#EDEEFA"
                )
              }
            )
          },
          width: "MEDIUM"
        )
      },
      stackWhen: {
        "PHONE",
        "TABLET_PORTRAIT",
        "TABLET_LANDSCAPE",
        "DESKTOP_NARROW"
      }
    )
  },
  showWhen: true,
  backgroundColor: "#FAFAFC"
)
```

### Chart Data Representation
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
            data: 
            {1, 3, 2, 4, 3, 2, 5, 7, 10, 12, 7, 6, 15, 14, 13, 10, 15, 13, 15, 22, 24, 19, 15, 25, 25, 30, 30, 35, 32, 36, 39, 35, 38, 39, 40}
          },
          {
            name: "Revenue Per User",
            todayPrice: dollar(fixed(374.12)),
            yesterdayPrice: dollar(fixed( - 32.25)),
            icon: "caret-down",
            percent: "(-7%)",
            color: "#E64345",
            data: 
            {3, 5, 4, 2, 3, 2, 4, 5, 7, 10, 12, 16, 17, 15, 15, 16, 13, 10, 15, 17, 20, 21, 25, 22, 22, 17, 15, 17, 16, 15, 14, 13, 13, 14, 10}
          },
          {
            name: "New Orders",
            todayPrice: 1275,
            yesterdayPrice: - 116,
            icon: "caret-down",
            percent: "(-15%)",
            color: "#E64345",
            data: 
            {3, 5, 7, 6, 8, 10, 12, 4, 16, 13, 22, 26, 24, 25, 16, 14, 13, 13, 14, 12, 16, 20, 22, 27, 30, 35, 34, 35, 23, 18, 16, 17, 14, 12}
          },
          {
            name: "New Users",
            todayPrice: 76,
            yesterdayPrice: 46,
            icon: "caret-up",
            percent: "(22%)",
            color: "#4CC900",
            data: 
            {2, 3, 5, 13, 20, 17, 23, 24, 22, 18, 12, 10, 3, 4, 2, 15, 16, 20, 26, 23, 27, 28, 30, 34, 33, 32, 30, 35, 40, 38, 37, 42}
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
    style: "#17202b",
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
                        data: {30, 35, 55, 60, 64, 82, 86, 90, 126, 135, 150, 145, 142, 128, 115, 130, 104, 104, 90, 79, 69, 68, 48, 58, 58, 57, 56, 53, 52, 50, 35, 47, 52, 50, 45, 57, 55, 70, 70, 80, 90, 90, 60, 50, 50, 65, 62, 68, 92, 100, 85, 80, 75, 85, 90, 80}
                      ),
                      a!chartSeries(
                        label: "New",
                        data: 
                        {18, 20, 22, 20, 25, 26, 30, 40, 30, 29, 27, 25, 26, 20, 15, 22, 27, 30, 35, 40, 45, 50, 50, 45, 30, 40, 50, 55, 57, 60, 47, 35, 50, 65, 67, 60, 70, 38, 48, 60, 72, 75, 78, 70, 80, 82, 100, 120, 100, 135, 145, 135, 145, 140, 130, 150}
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

### Data Representation with Prominent Action
```
a!localVariables(
  local!AppianBackground: "#FAFAFC",
  local!Blue1: "#E9EDFC",
  local!Blue3: "#2322F0",
  local!CategoricalSceme: {
    "#2322F0",
    "#B561FF",
    "#FAA92F",
    "#56ADC0",
    "#FFD948"
  },
  local!contractData: {
    a!map(
      awardId: "693JJ321F000201",
      description: "GSA EIS TELECOM SERVICES 693KA820F00178-A00020 INCORPORATES ADDITIONAL OST AND MODAL WORK ORDER FUND",
      obligatedAmount: "16,511,078.33",
      startDate: "1/5/2023",
      endDate: "7/4/2023",
      Department: "Communication"
    ),
    a!map(
      awardId: "693C7323M000001",
      description: "SERVICES FOR WASHINGTON GAS FOR THE TEMPORARY AND PERMANENT GAS MAIN RELOCATION WORK FOR THE... ",
      obligatedAmount: "2,219,854.30",
      startDate: "4/16/2023",
      endDate: "5/9/2023",
      Department: "Operations"
    ),
    a!map(
      awardId: "6982AF22C000030",
      description: "CHANGE TASK ORDER CONTRACTING OFFICER'S REPRESENTATIVE FLAP JEFFER 150009(1), UNDI ROAD BYPASS IMPROVEMENTS FINAL DESIGN PHASES",
      obligatedAmount: "831,930.95",
      startDate: "4/7/2023",
      endDate: "6/21/2023",
      Department: "Public Affairs"
    ),
    a!map(
      awardId: "693JJ318F300045",
      description: "THE PURPOSE OF THIS MODIFICATION IS TO INCORPORATE A REVISED STATEMENT OF WORK AT NO ADDITIONAL COST",
      obligatedAmount: "384,878.00",
      startDate: "1/18/2023",
      endDate: "8/19/2023",
      Department: "Communication"
    ),
    a!map(
      awardId: "6982AF20C000025",
      description: "CO FLAP PUW16(1) NICHOLS ROAD, CONSTRUCTION SERVICES",
      obligatedAmount: "365,119.85",
      startDate: "4/8/2023",
      endDate: "7/19/2023",
      Department: "Research and Technology"
    ),
    a!map(
      awardId: "6982AF18C000016",
      description: "FUNDING FOR OPTIONAL TASK 3",
      obligatedAmount: "197,994.00",
      startDate: "1/21/2023",
      endDate: "7/25/2023",
      Department: "Research and Technology"
    ),
    a!map(
      awardId: "693JJ321F000201",
      description: "INCORPORATES ADDITIONAL OST AND MODAL WORK ORDER FUND",
      obligatedAmount: "191,078.30",
      startDate: "1/5/2023",
      endDate: "7/4/2023",
      Department: "Communications"
    ),
    a!map(
      awardId: "693JJ318F000077",
      description: "WA FLAP JEFFER 150009(1), UNDI ROAD BYPASS IMPROVEMENTS FINAL DESIGN PHASES",
      obligatedAmount: "162,483.05",
      startDate: "4/8/2023",
      endDate: "7/17/2023",
      Department: "Public Affairs"
    ),
    a!map(
      awardId: "6982AF23C000013",
      description: "TO REVISE SCHEDULE OF SERVICES ",
      obligatedAmount: "126,486.17",
      startDate: "11/22/2022",
      endDate: "6/13/2023",
      Department: "Operations"
    ),
    a!map(
      awardId: "693JJ321F000301",
      description: "MINIMUM GUARANTEE FOR IDIQ.",
      obligatedAmount: "100,000.00",
      startDate: "2/28/2023",
      endDate: "6/20/2023",
      Department: "Accounting"
    ),
    a!map(
      awardId: "693C7323M000001",
      description: "SERVICES FOR WASHINGTON GAS FOR THE TEMPORARY AND PERMANENT GAS MAIN RELOCATION WORK FOR THE... ",
      obligatedAmount: "100,000.00",
      startDate: "4/16/2023",
      endDate: "5/9/2023",
      Department: "Operations"
    ),
    a!map(
      awardId: "693JJ318F000077",
      description: "WA FLAP JEFFER 150009(1), UNDI ROAD BYPASS IMPROVEMENTS FINAL DESIGN PHASES",
      obligatedAmount: "100,000.00",
      startDate: "4/8/2023",
      endDate: "7/17/2023",
      Department: "Public Affairs"
    ),
    a!map(
      awardId: "693JJ321F000201",
      description: "GSA EIS TELECOM SERVICES 693KA820F00178-A00020 INCORPORATES ADDITIONAL OST AND MODAL WORK ORDER FUND",
      obligatedAmount: "100,000.00",
      startDate: "1/5/2023",
      endDate: "7/4/2023",
      Department: "Communication"
    ),
    a!map(
      awardId: "693JJ321F000301",
      description: "MINIMUM GUARANTEE FOR IDIQ.",
      obligatedAmount: "100,000.00",
      startDate: "2/28/2023",
      endDate: "6/20/2023",
      Department: "Accounting"
    ),
    a!map(
      awardId: "6982AF18C000016",
      description: "FUNDING FOR OPTIONAL TASK 3",
      obligatedAmount: "100,000.00",
      startDate: "1/21/2023",
      endDate: "7/25/2023",
      Department: "Research and Technology"
    ),
    a!map(
      awardId: "693C7323M000001",
      description: "SERVICES FOR WASHINGTON GAS FOR THE TEMPORARY AND PERMANENT GAS MAIN RELOCATION WORK FOR THE... ",
      obligatedAmount: "100,000.00",
      startDate: "4/16/2023",
      endDate: "5/9/2023",
      Department: "Operations"
    ),
    a!map(
      awardId: "693JJ318F000077",
      description: "WA FLAP JEFFER 150009(1), UNDI ROAD BYPASS IMPROVEMENTS FINAL DESIGN PHASES",
      obligatedAmount: "100,000.00",
      startDate: "4/8/2023",
      endDate: "7/17/2023",
      Department: "Public Affairs"
    ),
    a!map(
      awardId: "693JJ321F000201",
      description: "GSA EIS TELECOM SERVICES 693KA820F00178-A00020 INCORPORATES ADDITIONAL OST AND MODAL WORK ORDER FUND",
      obligatedAmount: "100,000.00",
      startDate: "1/5/2023",
      endDate: "7/4/2023",
      Department: "Communication"
    ),
    a!map(
      awardId: "693JJ321F000301",
      description: "MINIMUM GUARANTEE FOR IDIQ.",
      obligatedAmount: "100,000.00",
      startDate: "2/28/2023",
      endDate: "6/20/2023",
      Department: "Accounting"
    ),
    a!map(
      awardId: "6982AF18C000016",
      description: "FUNDING FOR OPTIONAL TASK 3",
      obligatedAmount: "100,000.00",
      startDate: "1/21/2023",
      endDate: "7/25/2023",
      Department: "Research and Technology"
    )
  },
  local!categories: 1,
  a!headerContentLayout(
    header: a!cardLayout(
      contents: {
        a!columnsLayout(
          columns: {
            a!columnLayout(contents: {}, width: "AUTO"),
            a!columnLayout(
              contents: {
                a!columnsLayout(
                  columns: {
                    a!columnLayout(
                      contents: {
                        a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: {
                            a!richTextItem(
                              text: { "2023 Fiscal Year Obligated Spend" },
                              size: "LARGE",
                              style: { "STRONG" }
                            )
                          }
                        ),
                        a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: {
                            a!richTextItem(
                              text: {
                                "Your one stop shop to view and analyze organizational spending and procurement activity tracking."
                              },
                              size: "STANDARD"
                            )
                          },
                          marginBelow: "MORE"
                        ),
                        a!buttonArrayLayout(
                          buttons: {
                            a!buttonWidget(
                              label: "Edit Dashboard",
                              size: "STANDARD",
                              style: "SOLID"
                            )
                          },
                          align: "START",
                          marginAbove: "NONE",
                          marginBelow: "NONE"
                        )
                      }
                    ),
                    a!columnLayout(
                      contents: {
                        a!imageField(
                          label: "",
                          labelPosition: "ABOVE",
                          images: {
                            a!webImage(
                              source:"https://raw.githubusercontent.com/pglevy/design-system-docs/main/assets/images/header-image-2.png"
                            )
                          },
                          size: "FIT",
                          isThumbnail: false,
                          style: "STANDARD",
                          align: "CENTER"
                        )
                      }
                    )
                  },
                  alignVertical: "MIDDLE",
                  spacing: "STANDARD"
                )
              },
              width: "WIDE_PLUS"
            ),
            a!columnLayout(contents: {}, width: "AUTO")
          },
          alignVertical: "MIDDLE"
        )
      },
      height: "AUTO",
      style: "NONE",
      padding: "STANDARD",
      marginBelow: "NONE",
      showBorder: false
    ),
    isHeaderFixed: false(),
    contents: {
      a!columnsLayout(
        columns: {
          a!columnLayout(
            contents: {
              a!cardLayout(
                contents: {
                  a!columnsLayout(
                    columns: {
                      a!columnLayout(
                        contents: {
                          a!sectionLayout(
                            label: "GWCM Categories",
                            labelSize: "SMALL",
                            labelHeadingTag: "H2",
                            labelColor: "STANDARD",
                            contents: {},
                            marginBelow: "NONE"
                          )
                        }
                      ),
                      a!columnLayout(
                        contents: {
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            helpTooltip: "Government wide category management",
                            value: {
                              a!richTextIcon(icon: "question-circle", color: "ACCENT")
                            },
                            tooltip: "Government wide category management",
                            align: "RIGHT"
                          )
                        },
                        width: "EXTRA_NARROW"
                      )
                    },
                    alignVertical: "TOP"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "building",
                          backgroundColor: "#EDEEF2",
                          contentColor: "#2E2E35",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!progressBarField(
                          label: "Facilities and Construction",
                          labelPosition: "ABOVE",
                          instructions: "$469.07M / $407M (22% of Total Budget)",
                          percentage: 115,
                          color: local!Blue3,
                          style: "THIN"
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginBelow: "STANDARD"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "book",
                          backgroundColor: "#EDEEF2",
                          contentColor: "#2E2E35",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!progressBarField(
                          label: "Human Capital ",
                          labelPosition: "ABOVE",
                          instructions: "$237.08M / $240.5M (13% of Total Budget)",
                          percentage: 98,
                          color: local!Blue3,
                          style: "THIN"
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "LESS"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "wrench",
                          backgroundColor: "#EDEEF2",
                          contentColor: "#2E2E35",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!progressBarField(
                          label: "Industrial Products and Services",
                          labelPosition: "ABOVE",
                          instructions: "$250.62M / $222M (12% of Total Budget)",
                          percentage: 113,
                          color: local!Blue3,
                          style: "THIN"
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "LESS"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "laptop",
                          backgroundColor: "#EDEEF2",
                          contentColor: "#2E2E35",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!progressBarField(
                          label: "Information Technology",
                          labelPosition: "ABOVE",
                          instructions: "$249.49M / $296M  (16% of Total Budget)",
                          percentage: 84,
                          color: local!Blue3,
                          style: "THIN"
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "LESS"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "briefcase-medical",
                          backgroundColor: "#EDEEF2",
                          contentColor: "#2E2E35",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!progressBarField(
                          label: "Medical",
                          labelPosition: "ABOVE",
                          instructions: "$21.7M / $37M  (2% of Total Budget)",
                          percentage: 59,
                          color: local!Blue3,
                          style: "THIN",
                          showPercentage: true
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "LESS",
                    marginBelow: "MORE"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: {
                            a!richTextItem(
                              text: {
                                "View all categories ",
                                a!richTextIcon(icon: "angle-down")
                              },
                              link: a!dynamicLink(value: 2, saveInto: local!categories),
                              linkStyle: "STANDALONE",
                              color: "ACCENT"
                            )
                          },
                          align: "CENTER"
                        )
                      )
                    }
                  )
                },
                height: "AUTO",
                showWhen: if(local!categories = 1, true, false),
                style: "NONE",
                shape: "SEMI_ROUNDED",
                padding: "MORE",
                marginBelow: "MORE",
                borderColor: "#EDEEFA"
              ),
              a!cardLayout(
                contents: {
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "building",
                          backgroundColor: "#EDEEF2",
                          contentColor: "#2E2E35",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!progressBarField(
                          label: "Facilities and Construction",
                          labelPosition: "ABOVE",
                          instructions: "$469.07M / $407M (22% of Total Budget)",
                          percentage: 115,
                          color: local!Blue3,
                          style: "THIN"
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginBelow: "STANDARD"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "book",
                          backgroundColor: "#EDEEF2",
                          contentColor: "#2E2E35",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!progressBarField(
                          label: "Human Capital ",
                          labelPosition: "ABOVE",
                          instructions: "$237.08M / $240.5M (13% of Total Budget)",
                          percentage: 98,
                          color: local!Blue3,
                          style: "THIN"
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "LESS"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "wrench",
                          backgroundColor: "#EDEEF2",
                          contentColor: "#2E2E35",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!progressBarField(
                          label: "Industrial Products and Services",
                          labelPosition: "ABOVE",
                          instructions: "$250.62M / $222M (12% of Total Budget)",
                          percentage: 113,
                          color: local!Blue3,
                          style: "THIN"
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "LESS"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "laptop",
                          backgroundColor: "#EDEEF2",
                          contentColor: "#2E2E35",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!progressBarField(
                          label: "Information Technology",
                          labelPosition: "ABOVE",
                          instructions: "$249.49M / $296M  (16% of Total Budget)",
                          percentage: 84,
                          color: local!Blue3,
                          style: "THIN"
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "LESS"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "briefcase-medical",
                          backgroundColor: "#EDEEF2",
                          contentColor: "#2E2E35",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!progressBarField(
                          label: "Medical",
                          labelPosition: "ABOVE",
                          instructions: "$21.7M / $37M  (2% of Total Budget)",
                          percentage: 59,
                          color: local!Blue3,
                          style: "THIN",
                          showPercentage: true
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "LESS",
                    marginBelow: "MORE"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "print",
                          backgroundColor: "#EDEEF2",
                          contentColor: "#2E2E35",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!progressBarField(
                          label: "Office Management",
                          labelPosition: "ABOVE",
                          instructions: "$65M / $92.5M (5% of Total Budget)",
                          percentage: 70,
                          color: local!Blue3,
                          style: "THIN",
                          showPercentage: true
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "LESS",
                    marginBelow: "MORE"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "user-alt",
                          backgroundColor: "#EDEEF2",
                          contentColor: "#2E2E35",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!progressBarField(
                          label: "Professional Services",
                          labelPosition: "ABOVE",
                          instructions: "$40.98M / $55.5M  (3% of Total Budget)",
                          percentage: 73,
                          color: local!Blue3,
                          style: "THIN",
                          showPercentage: true
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "LESS",
                    marginBelow: "MORE"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "shield",
                          backgroundColor: "#EDEEF2",
                          contentColor: "#2E2E35",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!progressBarField(
                          label: "Security and Protection",
                          labelPosition: "ABOVE",
                          instructions: "$56.81M / $92.5M (5% of Total Budget)",
                          percentage: 60,
                          color: local!Blue3,
                          style: "THIN",
                          showPercentage: true
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "LESS",
                    marginBelow: "MORE"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "truck",
                          backgroundColor: "#EDEEF2",
                          contentColor: "#2E2E35",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!progressBarField(
                          label: "Transportation and Logistics Services",
                          labelPosition: "ABOVE",
                          instructions: "$42.87M / $55.5M (3% of Total Budget)",
                          percentage: 77,
                          color: local!Blue3,
                          style: "THIN",
                          showPercentage: true
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "LESS",
                    marginBelow: "MORE"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "plane",
                          backgroundColor: "#EDEEF2",
                          contentColor: "#2E2E35",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!progressBarField(
                          label: "Travel",
                          labelPosition: "ABOVE",
                          instructions: "$175,000 / $200,250  (3% of Total Budget)",
                          percentage: 21,
                          color: local!Blue3,
                          style: "THIN",
                          showPercentage: true
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "LESS",
                    marginBelow: "MORE"
                  ),
                  a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: {
                      a!richTextItem(
                        text: {
                          "View less categories ",
                          a!richTextIcon(icon: "angle-up")
                        },
                        link: a!dynamicLink(value: 1, saveInto: local!categories),
                        linkStyle: "STANDALONE",
                        color: "ACCENT"
                      )
                    },
                    align: "CENTER"
                  )
                },
                height: "AUTO",
                showWhen: if(local!categories = 2, true, false),
                style: "NONE",
                shape: "SEMI_ROUNDED",
                padding: "MORE",
                marginBelow: "MORE",
                showBorder: false,
                showShadow: true
              ),
              a!cardLayout(
                contents: {
                  a!sectionLayout(
                    label: "Socioeconomic Spend",
                    labelSize: "SMALL",
                    labelColor: "STANDARD",
                    contents: {},
                    marginBelow: "NONE"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "home",
                          backgroundColor: "#EDEEF2",
                          contentColor: "#2E2E35",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!progressBarField(
                          label: "Total Small Business",
                          labelPosition: "ABOVE",
                          instructions: "$581.11M / $462.5M (25% of Total Budget)",
                          percentage: 126,
                          color: local!Blue3,
                          style: "THIN"
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginBelow: "STANDARD"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "house-damage",
                          backgroundColor: "#EDEEF2",
                          contentColor: "#2E2E35",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!progressBarField(
                          label: "Small Disadvantaged Business",
                          labelPosition: "ABOVE",
                          instructions: "$166.72M/ $222M (12% of Total Budget)",
                          percentage: 75,
                          color: local!Blue3,
                          style: "THIN"
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "LESS"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "female",
                          backgroundColor: "#EDEEF2",
                          contentColor: "#2E2E35",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!progressBarField(
                          label: "Women Owned Business",
                          labelPosition: "ABOVE",
                          instructions: "$89.73M/ $185M (10% of Total Budget)",
                          percentage: 48,
                          color: local!Blue3,
                          style: "THIN"
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "LESS"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "wheelchair",
                          backgroundColor: "#EDEEF2",
                          contentColor: "#2E2E35",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!progressBarField(
                          label: "Service Disabled Veteran-Owned Business",
                          labelPosition: "ABOVE",
                          instructions: "$94.95M/ $185M (10% of Total Budget)",
                          percentage: 51,
                          color: local!Blue3,
                          style: "THIN"
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "LESS"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!stampField(
                          labelPosition: "COLLAPSED",
                          icon: "award",
                          backgroundColor: "#EDEEF2",
                          contentColor: "#2E2E35",
                          size: "TINY"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!progressBarField(
                          label: "Certified HUBZone Small Business",
                          labelPosition: "ABOVE",
                          instructions: "$32.86M/ $92.5M (5% of Total Budget)",
                          percentage: 34,
                          color: local!Blue3,
                          style: "THIN"
                        )
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginAbove: "LESS"
                  )
                },
                height: "AUTO",
                style: "NONE",
                shape: "SEMI_ROUNDED",
                padding: "MORE",
                marginBelow: "MORE",
                borderColor: "#EDEEFA"
              )
            },
            width: "MEDIUM"
          ),
          a!columnLayout(
            contents: {
              a!cardLayout(
                contents: {
                  a!columnsLayout(
                    columns: {
                      a!columnLayout(
                        contents: {
                          a!cardLayout(
                            contents: {
                              a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: { "Total Obligated Amount" },
                                    color: "#6C6C75"
                                  )
                                }
                              ),
                              a!richTextDisplayField(
                                label: "",
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: { "$1.46B" },
                                    color: "#2E2E35",
                                    size: "LARGE"
                                  ),
                                  a!richTextItem(
                                    text: { "/1.85B" },
                                    color: "SECONDARY",
                                    size: "MEDIUM"
                                  )
                                }
                              )
                            },
                            height: "AUTO",
                            style: "#FCFCFF",
                            shape: "SEMI_ROUNDED",
                            padding: "STANDARD",
                            marginBelow: "STANDARD",
                            borderColor: "#EDEEFA"
                          )
                        }
                      ),
                      a!columnLayout(
                        contents: {
                          a!cardLayout(
                            contents: {
                              a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: { "Number of Actions" },
                                    color: "#6C6C75"
                                  )
                                }
                              ),
                              a!richTextDisplayField(
                                label: "",
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: { "715" },
                                    color: "#2E2E35",
                                    size: "LARGE"
                                  ),
                                  char(10)
                                }
                              )
                            },
                            height: "AUTO",
                            style: "#FCFCFF",
                            shape: "SEMI_ROUNDED",
                            padding: "STANDARD",
                            marginBelow: "STANDARD",
                            borderColor: "#EDEEFA"
                          )
                        }
                      ),
                      a!columnLayout(
                        contents: {
                          a!cardLayout(
                            contents: {
                              a!sideBySideLayout(
                                items: {
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      labelPosition: "COLLAPSED",
                                      value: {
                                        a!richTextItem(text: { "Best In Class" }, color: "#6C6C75")
                                      },
                                      tooltip: ""
                                    )
                                  ),
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      labelPosition: "COLLAPSED",
                                      value: {
                                        a!richTextItem(
                                          text: {
                                            " ",
                                            a!richTextIcon(icon: "question-circle")
                                          },
                                          color: "ACCENT"
                                        )
                                      },
                                      tooltip: "Best-in-Class (BIC) is a government-wide designation for acquisition solutions that can be used by multiple agencies and satisfies key criteria defined by Office of Management and Budget (OMB)"
                                    ),
                                    width: "MINIMIZE"
                                  )
                                }
                              ),
                              a!richTextDisplayField(
                                label: "",
                                labelPosition: "COLLAPSED",
                                helpTooltip: "",
                                value: {
                                  a!richTextItem(
                                    text: { "21.3%" },
                                    color: "#2E2E35",
                                    size: "LARGE"
                                  ),
                                  char(10)
                                }
                              )
                            },
                            height: "AUTO",
                            style: "#FCFCFF",
                            shape: "SEMI_ROUNDED",
                            padding: "STANDARD",
                            marginBelow: "STANDARD",
                            borderColor: "#EDEEFA"
                          )
                        }
                      )
                    },
                    marginBelow: "MORE",
                    spacing: "DENSE"
                  ),
                  a!columnsLayout(
                    columns: {
                      a!columnLayout(
                        contents: {
                          a!sectionLayout(
                            label: "Fiscal Year Obligated Spend",
                            labelSize: "SMALL",
                            labelColor: "STANDARD",
                            contents: {},
                            marginBelow: "NONE"
                          )
                        }
                      ),
                      a!columnLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  helpTooltip: "Government wide category management",
                                  value: {
                                    a!richTextIcon(
                                      icon: "circle",
                                      color: "ACCENT",
                                      size: "SMALL"
                                    )
                                  },
                                  tooltip: "Government wide category management",
                                  align: "RIGHT"
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  helpTooltip: "Government wide category management",
                                  value: {
                                    a!richTextItem(
                                      text: { "2023 Fiscal Year" },
                                      color: "SECONDARY",
                                      size: "SMALL"
                                    )
                                  },
                                  tooltip: "Government wide category management",
                                  align: "RIGHT"
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            spacing: "DENSE"
                          )
                        },
                        width: "AUTO"
                      )
                    },
                    alignVertical: "TOP"
                  ),
                  a!lineChartField(
                    label: "",
                    labelPosition: "COLLAPSED",
                    categories: {
                      "Oct",
                      "Nov",
                      "Dec",
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep"
                    },
                    series: {
                      a!chartSeries(
                        label: "2023 Fiscal Year",
                        data: {
                          460533958,
                          560533958,
                          660533958,
                          769533958,
                          860533958,
                          930533958,
                          963533968,
                          1060333949,
                          1260553958,
                          1460533958,
                          null(),
                          null()
                        }
                      )
                    },
                    yAxisTitle: "",
                    yAxisMax: 2.0E9,
                    referenceLines: a!chartReferenceLine(
                      label: "2023 Fiscal Year Budget",
                      value: 1.85E9,
                      color: "#2E2E35",
                      style: "SHORTDASH"
                    ),
                    showLegend: false,
                    showDataLabels: false,
                    showTooltips: true,
                    allowDecimalAxisLabels: false,
                    connectNulls: true,
                    colorScheme: a!colorSchemeCustom(colors: { local!CategoricalSceme }),
                    height: "MEDIUM",
                    xAxisStyle: "STANDARD",
                    yAxisStyle: "STANDARD"
                  )
                },
                height: "AUTO",
                style: "NONE",
                shape: "SEMI_ROUNDED",
                padding: "MORE",
                marginBelow: "MORE",
                borderColor: "#EDEEFA"
              ),
              a!cardLayout(
                contents: {
                  a!columnsLayout(
                    columns: {
                      a!columnLayout(
                        contents: {
                          a!sectionLayout(
                            label: "Awards",
                            labelSize: "SMALL",
                            labelColor: "STANDARD",
                            labelHeadingTag: "H2",
                            contents: {},
                            marginBelow: "NONE"
                          )
                        }
                      ),
                      a!columnLayout(
                        contents: {
                          a!tagField(
                            labelPosition: "COLLAPSED",
                            tags: {
                              a!tagItem(
                                text: "↗",
                                backgroundColor: local!Blue1,
                                textColor: local!Blue3
                              )
                            },
                            size: "STANDARD",
                            align: "END"
                          )
                        }
                      )
                    },
                    alignVertical: "TOP"
                  ),
                  a!columnsLayout(
                    columns: {
                      a!columnLayout(
                        contents: a!localVariables(
                          local!dateRange,
                          'type!{http://www.appian.com/ae/types/2009}DateRangeWidget'(
                            inlineLabel: if(isnull("date"), "Date Range", ""),
                            placeholder: fn!resource_appian_internal(
                              "sysrule.recordsLayout.userfiltersDropdownPlaceholder"
                            ),
                            datePlaceholder: fn!resource_appian_internal("sysrule.datePicker.placeholder"),
                            todayLabel: fn!resource_appian_internal("sysrule.datePicker.todayLabel"),
                            noneLabel: fn!resource_appian_internal("sysrule.datePicker.noneLabel"),
                            value: local!dateRange,
                            saveInto: local!dateRange
                          )
                        )
                      ),
                      a!columnLayout(
                        contents: 'type!{http://www.appian.com/ae/types/2009}DropdownWidget'(
                          inlineLabel: if(
                            isnull("Obligated Amount"),
                            "Obligated Amount",
                            "Obligated amount"
                          ),
                          placeholder: if(isnull(" "), "All Departments", " "),
                          choices: if(
                            isnull(" "),
                            {
                              "Engineering",
                              "Professional Services",
                              "Finance"
                            },
                            " "
                          ),
                          value: {},
                          saveInto: {}
                        )
                      )
                    }
                  ),
                  a!gridField(
                    label: "Contracts",
                    labelPosition: "COLLAPSED",
                    data: local!contractData,
                    columns: {
                      a!gridColumn(
                        label: "Award ID",
                        value: a!linkField(
                          links: a!dynamicLink(label: fv!row.awardId)
                        ),
                        align: "START"
                      ),
                      a!gridColumn(
                        label: "Description",
                        value: a!richTextDisplayField(
                          value: a!richTextItem(
                            text: fv!row.description,
                            color: "#6C6C75"
                          )
                        )
                      ),
                      a!gridColumn(
                        label: "Obligated Amount ($)",
                        value: a!richTextDisplayField(
                          value: a!richTextItem(
                            text: fv!row.obligatedAmount,
                            color: "#6C6C75"
                          )
                        ),
                        align: "END"
                      ),
                      a!gridColumn(
                        label: "Start Date",
                        value: a!richTextDisplayField(
                          value: a!richTextItem(text: fv!row.startDate, color: "#6C6C75")
                        ),
                        align: "END"
                      ),
                      a!gridColumn(
                        label: "End Date",
                        value: a!richTextDisplayField(
                          value: a!richTextItem(text: fv!row.endDate, color: "#6C6C75")
                        ),
                        align: "END"
                      )
                    },
                    pageSize: 10,
                    initialSorts: {},
                    validations: {},
                    borderStyle: "LIGHT"
                  )
                },
                height: "AUTO",
                style: "NONE",
                shape: "SEMI_ROUNDED",
                padding: "MORE",
                marginBelow: "STANDARD",
                borderColor: "#EDEEFA"
              )
            }
          ),
          a!columnLayout(
            contents: {
              a!cardLayout(
                contents: {
                  a!sectionLayout(
                    label: "",
                    contents: {
                      a!sectionLayout(
                        label: "Additional Reports",
                        labelSize: "SMALL",
                        labelColor: "STANDARD",
                        labelHeadingTag: "H2",
                        contents: {},
                        marginBelow: "NONE"
                      ),
                      a!sideBySideLayout(
                        items: {
                          a!sideBySideItem(
                            item: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextItem(
                                  text: { "Work In Progress" },
                                  color: "ACCENT",
                                  size: "STANDARD"
                                )
                              },
                              marginBelow: "NONE"
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!tagField(
                              labelPosition: "COLLAPSED",
                              tags: {
                                a!tagItem(
                                  text: "↗",
                                  backgroundColor: local!Blue1,
                                  textColor: local!Blue3
                                )
                              },
                              size: "SMALL",
                              align: "START"
                            )
                          )
                        },
                        alignVertical: "MIDDLE",
                        marginBelow: "LESS"
                      ),
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: {
                              "Get a high level overview of your organization's work in progress."
                            },
                            color: "SECONDARY"
                          )
                        }
                      )
                    },
                    divider: "NONE",
                    marginBelow: "STANDARD"
                  ),
                  a!sectionLayout(
                    label: "",
                    contents: {
                      a!sideBySideLayout(
                        items: {
                          a!sideBySideItem(
                            item: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextItem(
                                  text: { "Unliquidated Obligations (ULO)" },
                                  color: "ACCENT",
                                  size: "STANDARD"
                                )
                              },
                              marginBelow: "NONE"
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!tagField(
                              labelPosition: "COLLAPSED",
                              tags: {
                                a!tagItem(
                                  text: "↗",
                                  backgroundColor: local!Blue1,
                                  textColor: local!Blue3
                                )
                              },
                              size: "SMALL",
                              align: "START"
                            )
                          )
                        },
                        alignVertical: "MIDDLE",
                        marginBelow: "LESS"
                      ),
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: {
                              "Keep track of unliquidated obligations to avoid deobligation of funds."
                            },
                            color: "SECONDARY"
                          )
                        }
                      )
                    },
                    divider: "NONE"
                  ),
                  a!sectionLayout(
                    label: "",
                    contents: {
                      a!sideBySideLayout(
                        items: {
                          a!sideBySideItem(
                            item: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextItem(
                                  text: { "NAICS Summary Report" },
                                  color: "ACCENT",
                                  size: "STANDARD"
                                )
                              },
                              marginBelow: "NONE"
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!tagField(
                              labelPosition: "COLLAPSED",
                              tags: {
                                a!tagItem(
                                  text: "↗",
                                  backgroundColor: local!Blue1,
                                  textColor: local!blue3
                                )
                              },
                              size: "SMALL",
                              align: "START"
                            )
                          )
                        },
                        alignVertical: "MIDDLE",
                        marginBelow: "LESS"
                      ),
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: {
                              "View your organization's spend broken up by NAICS code."
                            },
                            color: "SECONDARY"
                          )
                        }
                      )
                    },
                    divider: "NONE",
                    marginBelow: "NONE"
                  )
                },
                height: "AUTO",
                style: "NONE",
                shape: "SEMI_ROUNDED",
                padding: "MORE",
                marginBelow: "MORE",
                borderColor: "#EDEEFA"
              ),
              a!cardLayout(
                contents: {
                  a!sectionLayout(
                    label: "Top Vendor Spend",
                    labelSize: "SMALL",
                    labelColor: "STANDARD",
                    labelHeadingTag: "H2",
                    contents: {},
                    marginBelow: "NONE"
                  ),
                  a!barChartField(
                    label: "Bar Chart",
                    labelPosition: "COLLAPSED",
                    categories: {
                      "Top NAICS Spend",
                      "Category 2",
                      "Category 3"
                    },
                    series: {
                      a!chartSeries(label: "Utilities", data: { 5 }),
                      a!chartSeries(
                        label: "American Sanitary Products (ASP)",
                        data: { 4 },
                        links: {}
                      ),
                      a!chartSeries(
                        label: "Document Imaging Dimensions (DID)",
                        data: { 3 },
                        links: {}
                      ),
                      a!chartSeries(
                        label: "Hardware Inc.",
                        data: { 2 },
                        links: {}
                      ),
                      a!chartSeries(
                        label: "SPS Industrial",
                        data: { 1 },
                        links: {}
                      )
                    },
                    stacking: "NONE",
                    showLegend: true,
                    showDataLabels: false,
                    showTooltips: true,
                    colorScheme: a!colorSchemeCustom(colors: { local!CategoricalSceme }),
                    height: "MEDIUM",
                    xAxisStyle: "NONE",
                    yAxisStyle: "MINIMAL"
                  )
                },
                height: "AUTO",
                style: "NONE",
                shape: "SEMI_ROUNDED",
                padding: "MORE",
                marginBelow: "MORE",
                borderColor: "#EDEEFA"
              ),
              a!cardLayout(
                contents: {
                  a!sectionLayout(
                    label: "Top PSC Spend",
                    labelSize: "SMALL",
                    labelColor: "STANDARD",
                    labelHeadingTag: "H2",
                    contents: {},
                    marginBelow: "NONE"
                  ),
                  a!barChartField(
                    label: "Bar Chart",
                    labelPosition: "COLLAPSED",
                    categories: {
                      "Top NAICS Spend",
                      "Category 2",
                      "Category 3",
                      "2344",
                      "1243"
                    },
                    series: {
                      a!chartSeries(
                        label: "Education, Training, Employment, & Social",
                        data: { 5 }
                      ),
                      a!chartSeries(
                        label: "National Defense",
                        data: { 4 },
                        links: {}
                      ),
                      a!chartSeries(label: "Energy", data: { 3 }, links: {}),
                      a!chartSeries(
                        label: "Natural Resources and Enviornment",
                        data: { 2 },
                        links: {}
                      ),
                      a!chartSeries(
                        label: "Income and Security",
                        data: { 1 },
                        links: {}
                      )
                    },
                    stacking: "NONE",
                    showLegend: true,
                    showDataLabels: false,
                    showTooltips: true,
                    colorScheme: a!colorSchemeCustom(colors: { local!CategoricalSceme }),
                    height: "MEDIUM",
                    xAxisStyle: "NONE",
                    yAxisStyle: "MINIMAL"
                  )
                },
                height: "AUTO",
                style: "NONE",
                shape: "SEMI_ROUNDED",
                padding: "MORE",
                marginBelow: "MORE",
                borderColor: "#EDEEFA"
              )
            },
            width: "MEDIUM"
          )
        }
      )
    },
    backgroundColor: local!AppianBackground
  )
)
```

### Secondary Actions
```
a!headerContentLayout(
  backgroundColor: "#FAFAFC",
  contents: a!localVariables(
    local!packageTrackingMilestones: {
      a!map(
        name: "Order Received",
        date: today() - 6,
        isCompleted: true,
        icon: "file-text"
      ),
      a!map(
        name: "Shipment Scheduled",
        date: today() - 5,
        isCompleted: true,
        icon: "calendar-check-o"
      ),
      a!map(
        name: "Items Packed",
        date: today() - 4,
        isCompleted: true,
        icon: "gift"
      ),
      a!map(
        name: "Shipment Label Created",
        date: null,
        isCompleted: false,
        icon: "qrcode"
      ),
      a!map(
        name: "Items Picked Up",
        date: null,
        isCompleted: false,
        icon: "truck-loading"
      ),
      a!map(
        name: "Items Out for Delivery",
        date: null,
        isCompleted: false,
        icon: "road"
      ),
      a!map(
        name: "Items Shipped",
        date: null,
        isCompleted: false,
        icon: "truck"
      ),
      a!map(
        name: "Delivered",
        date: null,
        isCompleted: false,
        icon: "luggage-cart"
      )
    },
    local!customerInformation: a!map(
      name: "Divya Jagodara",
      memberSince: 2019,
      email: "d.jagodara@email.com",
      phoneNumber: "123-456-7890"
    ),
    local!shippingDetails: a!map(
      trackingNumber: "1234567898765",
      shippedOn: null,
      estimatedShipping: today() + 10,
      option: "Ground",
      deliveredOn: null,
      estimatedDelivery: today() + 12,
      shippingStreetAddress: "7950 Jones Branch Dr",
      shippingCityAddress: "McLean, VA 22102",
      deliveryInstructions: "This contains fragile items. Transport with caution."
    ),
    local!shippingParcelInformation: a!map(
      weight: 3,
      length: 3,
      width: 23,
      height: 23,
      isFragile: true
    ),
    local!orderItems: {
      a!map(
        name: "Silver Round Watch",
        quantity: 1,
        pickedUpOn: today(),
        pickedUpBy: "Jared Connors",
        pricePerItem: "$100",
        image: "https://raw.githubusercontent.com/pglevy/design-system-docs/main/assets/images/data-image-1.jpg"
      ),
      a!map(
        name: "Suede Lace Up Shoe",
        quantity: 1,
        pickedUpOn: null,
        pickedUpBy: null,
        pricePerItem: "$50",
        image: "https://raw.githubusercontent.com/pglevy/design-system-docs/main/assets/images/data-image-2.jpg"
      )
    },
    local!orderSummary: a!map(
      totalCost: 150.00,
      shippingCost: 15.00,
      taxTotal: 9.50
    ),
    local!orderDocuments: {
      a!map(name: "Receipt", uploadedOn: today() - 6),
      a!map(name: "Packing Slip", uploadedOn: null),
      a!map(name: "Return Label", uploadedOn: null)
    },
    local!orderActivityLog: {
      a!map(
        date: today() - 3,
        events: {
          a!map(
            user: "Anthony Wu",
            event: "updated Notes in Parcel Information",
            time: "02:40 PM",
            isSystemGenerated: false
          ),
          a!map(
            user: "Anthony Wu",
            event: "updated Delivery Instructions in Details",
            time: "02:30 AM",
            isSystemGenerated: false
          ),

        }
      ),
      a!map(
        date: today() - 6,
        events: {
          a!map(
            user: "Bree Mercer",
            event: "reassigned order to Anthony Wu",
            time: "05:45 PM",
            isSystemGenerated: false
          ),
          a!map(
            user: "Bree Mercer",
            event: "uploaded Receipt in Documents",
            time: "05:30 PM",
            isSystemGenerated: false
          ),
          a!map(
            user: "Order System",
            event: "updated assignee to Bree Mercer",
            time: "02:49 PM",
            isSystemGenerated: true
          )
        }
      )
    },
    local!dateFormat: "MMM D, YYYY",
    {
      a!headingField(
        text: "Order" & " " & "#12345667",
        headingTag: "H1",
        fontWeight: "BOLD"
      ),
      /* KPI header */
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
                      a!richTextItem(text: "Next Action", color: "SECONDARY")
                    }
                  ),
                  a!buttonArrayLayout(
                    buttons: {
                      a!buttonWidget(
                        label: if(
                          a!isPageWidth("TABLET_PORTRAIT"),
                          "Create Label",
                          "Create Shipping Label"
                        ),
                        style: "SOLID"
                      )
                    },
                    align: "START",
                    marginBelow: "NONE"
                  )
                }
              ),
              a!columnLayout(
                contents: {
                  a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: {
                      a!richTextItem(
                        text: "Shipping Priority",
                        color: "SECONDARY"
                      )
                    }
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: {
                            a!richTextItem(
                              text: "Normal",
                              size: "MEDIUM",
                              style: "STRONG"
                            )
                          }
                        )
                      ),
                      a!sideBySideItem(
                        item: a!buttonArrayLayout(
                          buttons: {
                            a!buttonWidget(label: "Expedite", size: "SMALL")
                          },
                          align: "START",
                          marginBelow: "NONE"
                        ),
                        width: "MINIMIZE"
                      )
                    },
                    alignVertical: "MIDDLE",
                    stackWhen: "TABLET_PORTRAIT"
                  )
                }
              ),
              a!columnLayout(
                contents: {
                  a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: {
                      a!richTextItem(
                        text: "Days Since Order Received",
                        color: "SECONDARY"
                      )
                    }
                  ),
                  a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: {
                      a!richTextItem(text: 6, size: "MEDIUM", style: "STRONG")
                    },
                    marginBelow: "NONE"
                  ),
                  a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: {
                      a!richTextItem(
                        text: {
                          "Received on",
                          " ",
                          text(today() - 6, local!dateFormat)
                        },
                        size: "SMALL"
                      )
                    }
                  )
                }
              ),
              a!columnLayout(
                contents: {
                  a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: {
                      a!richTextItem(text: "Assignee", color: "SECONDARY")
                    }
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!imageField(
                          labelPosition: "COLLAPSED",
                          images: a!userImage(),
                          size: "TINY",
                          style: "AVATAR"
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: {
                            a!richTextItem(
                              text: "Anthony Wu",
                              link: a!userRecordLink(),
                              linkStyle: "STANDALONE",
                              size: "MEDIUM",
                              style: "STRONG"
                            )
                          },
                          preventWrapping: true
                        )
                      ),
                      a!sideBySideItem(
                        item: a!buttonArrayLayout(
                          buttons: {
                            a!buttonWidget(label: "Reassign", size: "SMALL")
                          },
                          align: "START",
                          marginBelow: "NONE"
                        ),
                        width: "MINIMIZE"
                      )
                    },
                    alignVertical: "MIDDLE",
                    stackWhen: "TABLET_PORTRAIT"
                  )
                }
              )
            },
            spacing: "SPARSE",
            showDividers: true
          )
        },
        padding: "STANDARD",
        marginBelow: "MORE",
        borderColor: "#EDEEFA"
      ),
      a!columnsLayout(
        columns: {
          a!columnLayout(
            contents: a!columnsLayout(
              columns: {
                /* Package Tracking and Customer column */
                a!columnLayout(
                  contents: {
                    a!sectionLayout(
                      label: "Package Tracking",
                      accessibilityText: "H2",
                      labelColor: "STANDARD",
                      labelSize: "SMALL",
                      contents: a!cardLayout(
                        shape: "SEMI_ROUNDED",
                        borderColor: "#EDEEFA",
                        contents: {
                          a!forEach(
                            items: local!packageTrackingMilestones,
                            expression: {
                              a!sideBySideLayout(
                                items: {
                                  a!sideBySideItem(
                                    item: a!stampField(
                                      icon: if(
                                        fv!item.isCompleted,
                                        "check",
                                        fv!item.icon
                                      ),
                                      backgroundColor: if(
                                        fv!item.isCompleted,
                                        "TRANSPARENT",
                                        "#efefef"
                                      ),
                                      contentColor: if(
                                        fv!item.isCompleted,
                                        "POSITIVE",
                                        "STANDARD"
                                      ),
                                      size: "TINY"
                                    ),
                                    width: "MINIMIZE"
                                  ),
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      value: {
                                        a!richTextItem(text: fv!item.name),
                                        char(10),
                                        a!richTextItem(
                                          text: if(
                                            isnull(fv!item.date),
                                            char(8211),
                                            text(fv!item.date, local!dateFormat)
                                          ),
                                          color: "SECONDARY"
                                        )
                                      }
                                    )
                                  )
                                },
                                alignVertical: "MIDDLE",
                                marginBelow: "STANDARD"
                              )
                            }
                          )
                        }
                      )
                    ),
                    a!sectionLayout(
                      label: "Customer",
                      accessibilityText: "H2",
                      labelColor: "STANDARD",
                      labelSize: "SMALL",
                      contents: a!cardLayout(
                        shape: "SEMI_ROUNDED",
                        contents: {
                          a!imageField(
                            labelPosition: "COLLAPSED",
                            images: a!userImage(),
                            size: "SMALL",
                            style: "AVATAR",
                            align: "CENTER"
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: local!customerInformation.name,
                                size: "MEDIUM"
                              ),
                              char(10)
                            },
                            align: "CENTER",
                            marginBelow: "EVEN_LESS"
                          ),
                          a!tagField(
                            labelPosition: "COLLAPSED",
                            tags: {
                              a!tagItem(
                                text: "Member since" & " " & local!customerInformation.memberSince,
                                backgroundColor: "ACCENT"
                              )
                            },
                            size: "SMALL",
                            align: "CENTER",
                            marginBelow: "EVEN_LESS"
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: {
                                  a!richTextIcon(icon: "envelope-o"),
                                  " ",
                                  local!customerInformation.email
                                },
                                color: "SECONDARY",
                                size: "STANDARD"
                              ),
                              char(10),
                              a!richTextItem(
                                text: {
                                  a!richTextIcon(icon: "phone"),
                                  " ",
                                  local!customerInformation.phoneNumber
                                },
                                color: "SECONDARY",
                                size: "STANDARD"
                              ),
                              char(10)
                            },
                            align: "CENTER"
                          )
                        },
                        padding: "STANDARD",
                        marginBelow: "STANDARD",
                        borderColor: "#EDEEFA"
                      )
                    )
                  },
                  width: if(
                    a!isPageWidth("TABLET_PORTRAIT"),
                    "NARROW",
                    "NARROW_PLUS"
                  )
                ),
                /* Shipping and Order Items column */
                a!columnLayout(
                  contents: {
                    a!sectionLayout(
                      label: "Shipping",
                      accessibilityText: "H2",
                      labelColor: "STANDARD",
                      labelSize: "SMALL",
                      contents: a!cardLayout(
                        padding: "STANDARD",
                        shape: "SEMI_ROUNDED",
                        borderColor: "#EDEEFA",
                        contents: {
                          a!sectionLayout(
                            label: upper("Details"),
                            labelSize: "EXTRA_SMALL",
                            labelHeadingTag: "H3",
                            labelColor: "SECONDARY",
                            contents: {
                              a!columnsLayout(
                                columns: {
                                  a!columnLayout(
                                    contents: {
                                      a!linkField(
                                        label: "Tracking Number",
                                        labelPosition: "ABOVE",
                                        links: {
                                          a!safeLink(
                                            label: local!shippingDetails.trackingNumber
                                          )
                                        }
                                      )
                                    }
                                  ),
                                  a!columnLayout(
                                    contents: {
                                      a!richTextDisplayField(
                                        label: "Option",
                                        value: local!shippingDetails.option
                                      )
                                    }
                                  ),
                                  a!columnLayout(
                                    contents: {
                                      a!richTextDisplayField(
                                        label: "Shipping Address",
                                        value: {
                                          local!shippingDetails.shippingStreetAddress,
                                          char(10),
                                          local!shippingDetails.shippingCityAddress
                                        }
                                      )
                                    }
                                  )
                                }
                              ),
                              a!columnsLayout(
                                columns: {
                                  a!columnLayout(
                                    contents: {
                                      a!richTextDisplayField(
                                        label: "Shipped On",
                                        value: {
                                          if(
                                            isnull(local!shippingDetails.shippedOn),
                                            "Not yet shipped",
                                            text(
                                              local!shippingDetails.shippedOn,
                                              local!dateFormat
                                            )
                                          ),
                                          char(10),
                                          a!richTextItem(
                                            text: {
                                              a!richTextIcon(
                                                icon: "bullseye",
                                                caption: "Estimated Shipping Date"
                                              ),
                                              " ",
                                              "Estimated on",
                                              " ",
                                              text(
                                                local!shippingDetails.estimatedShipping,
                                                local!dateFormat
                                              )
                                            },
                                            color: "SECONDARY"
                                          )
                                        }
                                      )
                                    }
                                  ),
                                  a!columnLayout(
                                    contents: {
                                      a!richTextDisplayField(
                                        label: "Delivered On",
                                        value: {
                                          if(
                                            isnull(local!shippingDetails.deliveredOn),
                                            "Shipped On",
                                            text(
                                              local!shippingDetails.deliveredOn,
                                              local!dateFormat
                                            )
                                          ),
                                          char(10),
                                          a!richTextItem(
                                            text: {
                                              a!richTextIcon(
                                                icon: "bullseye",
                                                caption: "Estimated Delivery Date"
                                              ),
                                              " ",
                                              "Estimated Shipping Date",
                                              " ",
                                              text(
                                                local!shippingDetails.estimatedDelivery,
                                                local!dateFormat
                                              )
                                            },
                                            color: "SECONDARY"
                                          )
                                        }
                                      )
                                    }
                                  ),
                                  a!columnLayout(
                                    contents: {
                                      a!paragraphField(
                                        label: "Delivery Instructions",
                                        value: local!shippingDetails.deliveryInstructions,
                                        readOnly: true
                                      )
                                    }
                                  )
                                }
                              )
                            },
                            marginBelow: "MORE"
                          ),
                          a!sectionLayout(
                            label: upper("Parcel Information"),
                            labelSize: "EXTRA_SMALL",
                            labelColor: "SECONDARY",
                            contents: {
                              a!columnsLayout(
                                columns: {
                                  a!columnLayout(
                                    contents: {
                                      a!richTextDisplayField(
                                        label: "Total Weight (lbs)",
                                        value: local!shippingParcelInformation.weight
                                      )
                                    }
                                  ),
                                  a!columnLayout(
                                    contents: {
                                      a!richTextDisplayField(
                                        label: "Dimensions (inches)",
                                        value: {
                                          local!shippingParcelInformation.length,
                                          " (" & "L" & ") x ",
                                          local!shippingParcelInformation.width,
                                          " (" & "W" & ") x ",
                                          local!shippingParcelInformation.height,
                                          " (" & "H" & ")"
                                        }
                                      )
                                    }
                                  ),
                                  a!columnLayout(
                                    contents: {
                                      a!tagField(
                                        label: "Notes",
                                        tags: {
                                          a!tagItem(
                                            text: upper("Fragile"),
                                            backgroundColor: "#ffc13e"
                                          )
                                        },
                                        showWhen: local!shippingParcelInformation.isFragile,
                                        size: "SMALL"
                                      )
                                    }
                                  )
                                }
                              )
                            }
                          )
                        }
                      )
                    ),
                    a!sectionLayout(
                      label: "Order Items",
                      accessibilityText: "H2",
                      labelColor: "STANDARD",
                      labelSize: "SMALL",
                      contents: a!cardLayout(
                        padding: "STANDARD",
                        shape: "SEMI_ROUNDED",
                        borderColor: "#EDEEFA",
                        contents: {
                          a!columnsLayout(
                            columns: {
                              a!columnLayout(
                                contents: {
                                  a!sectionLayout(
                                    contents: {
                                      a!forEach(
                                        items: local!orderItems,
                                        expression: {
                                          a!columnsLayout(
                                            columns: {
                                              a!columnLayout(
                                                contents: {
                                                  a!cardLayout(
                                                    contents: a!imageField(
                                                      labelPosition: "COLLAPSED",
                                                      images: a!webImage(source: fv!item.image),
                                                      size: "FIT"
                                                    ),
                                                    padding: "NONE"
                                                  )
                                                },
                                                width: "NARROW"
                                              ),
                                              a!columnLayout(
                                                contents: {
                                                  a!sectionLayout(
                                                    label: upper(fv!item.name),
                                                    labelHeadingTag: "H3",
                                                    labelSize: "EXTRA_SMALL",
                                                    labelColor: "SECONDARY",
                                                    contents: {
                                                      a!columnsLayout(
                                                        columns: {
                                                          a!columnLayout(
                                                            contents: {
                                                              a!richTextDisplayField(
                                                                label: "Price per Item",
                                                                value: fv!item.pricePerItem
                                                              ),
                                                              a!richTextDisplayField(
                                                                label: "Quantity",
                                                                value: fv!item.quantity
                                                              )
                                                            }
                                                          ),
                                                          a!columnLayout(
                                                            contents: {
                                                              a!richTextDisplayField(
                                                                label: "Picked Up On",
                                                                value: if(
                                                                  isnull(fv!item.pickedUpOn),
                                                                  a!richTextItem(text: char(8211), color: "SECONDARY"),
                                                                  text(fv!item.pickedUpOn, local!dateFormat)
                                                                )
                                                              ),
                                                              a!richTextDisplayField(
                                                                label: "Picked Up By",
                                                                value: if(
                                                                  isnull(fv!item.pickedUpBy),
                                                                  a!richTextItem(text: char(8211), color: "SECONDARY"),
                                                                  a!richTextItem(
                                                                    text: fv!item.pickedUpBy,
                                                                    link: a!userRecordLink(),
                                                                    linkStyle: "STANDALONE"
                                                                  )
                                                                )
                                                              )
                                                            }
                                                          )
                                                        }
                                                      )
                                                    }
                                                  )
                                                }
                                              )
                                            },
                                            alignVertical: "TOP"
                                          )
                                        }
                                      )
                                    },
                                    marginBelow: "NONE"
                                  )
                                }
                              ),
                              a!columnLayout(
                                contents: {
                                  a!sectionLayout(
                                    label: upper("Summary"),
                                    labelSize: "EXTRA_SMALL",
                                    labelColor: "SECONDARY",
                                    labelHeadingTag: "H3",
                                    contents: {
                                      a!richTextDisplayField(
                                        label: "Items" & " (" & length(local!orderItems) & ")",
                                        labelPosition: "JUSTIFIED",
                                        value: a!currency(
                                          isoCode: "USD",
                                          value: local!orderSummary.totalCost,
                                          format: "SYMBOL"
                                        ),
                                        align: "RIGHT"
                                      ),
                                      a!richTextDisplayField(
                                        label: "Member since",
                                        labelPosition: "JUSTIFIED",
                                        value: a!currency(
                                          isoCode: "USD",
                                          value: local!orderSummary.shippingCost,
                                          format: "SYMBOL"
                                        ),
                                        align: "RIGHT"
                                      ),
                                      a!richTextDisplayField(
                                        label: "Tax",
                                        labelPosition: "JUSTIFIED",
                                        value: a!currency(
                                          isoCode: "USD",
                                          value: local!orderSummary.taxTotal,
                                          format: "SYMBOL"
                                        ),
                                        align: "RIGHT"
                                      )
                                    },
                                    divider: "BELOW",
                                    marginBelow: "LESS"
                                  ),
                                  a!richTextDisplayField(
                                    label: "Order Total",
                                    labelPosition: "JUSTIFIED",
                                    value: {
                                      a!richTextItem(
                                        text: a!currency(
                                          isoCode: "USD",
                                          value: local!orderSummary.totalCost + local!orderSummary.shippingCost + local!orderSummary.taxTotal,
                                          format: "SYMBOL"
                                        ),
                                        size: "MEDIUM",
                                        style: "STRONG"
                                      )
                                    },
                                    align: "RIGHT"
                                  )
                                },
                                width: "NARROW_PLUS"
                              )
                            },
                            stackWhen: {
                              "PHONE",
                              "TABLET_PORTRAIT",
                              "TABLET_LANDSCAPE",
                              "DESKTOP_NARROW"
                            },
                            showDividers: not(
                              a!isPageWidth(
                                {
                                  "PHONE",
                                  "TABLET_PORTRAIT",
                                  "TABLET_LANDSCAPE",
                                  "DESKTOP_NARROW"
                                }
                              )
                            )
                          )
                        }
                      )
                    )
                  }
                )
              }
            )
          ),
          /* Documents and Activity Log column */
          a!columnLayout(
            contents: {
              a!columnsLayout(
                columns: {
                  a!columnLayout(
                    contents: {
                      a!sectionLayout(
                        label: "Documents",
                        accessibilityText: "H2",
                        labelColor: "STANDARD",
                        labelSize: "SMALL",
                        contents: {
                          a!forEach(
                            items: local!orderDocuments,
                            expression: a!cardLayout(
                              shape: "SEMI_ROUNDED",
                              contents: {
                                a!sideBySideLayout(
                                  items: {
                                    a!sideBySideItem(
                                      item: a!richTextDisplayField(
                                        labelPosition: "COLLAPSED",
                                        value: {
                                          if(
                                            isnull(fv!item.uploadedOn),
                                            a!richTextIcon(
                                              icon: "circle-o",
                                              color: "SECONDARY",
                                              size: "MEDIUM_PLUS"
                                            ),
                                            a!richTextIcon(
                                              icon: "check-circle-o",
                                              color: "POSITIVE",
                                              size: "MEDIUM_PLUS"
                                            )
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
                                            size: "STANDARD"
                                          ),
                                          char(10),
                                          a!richTextItem(
                                            text: if(
                                              isnull(fv!item.uploadedOn),
                                              char(8211),
                                              {
                                                "Uploaded on",
                                                " ",
                                                text(fv!item.uploadedOn, local!dateFormat)
                                              }
                                            ),
                                            color: "SECONDARY",
                                            size: "SMALL"
                                          )
                                        }
                                      )
                                    ),
                                    a!sideBySideItem(
                                      item: a!richTextDisplayField(
                                        labelPosition: "COLLAPSED",
                                        value: {
                                          a!richTextItem(
                                            text: if(
                                              isnull(fv!item.uploadedOn),
                                              {
                                                a!richTextIcon(icon: "upload"),
                                                " ",
                                                "Upload"
                                              },
                                              {
                                                a!richTextIcon(icon: "download"),
                                                " ",
                                                "Download"
                                              }
                                            ),
                                            color: "ACCENT",
                                            size: "SMALL"
                                          )
                                        }
                                      ),
                                      width: "MINIMIZE"
                                    )
                                  },
                                  alignVertical: "MIDDLE",
                                  marginBelow: "NONE"
                                )
                              },
                              marginBelow: "LESS",
                              borderColor: "#EDEEFA"
                            )
                          )
                        }
                      )
                    }
                  ),
                  a!columnLayout(
                    contents: {
                      a!sectionLayout(
                        label: "Activity Log",
                        accessibilityText: "H2",
                        labelColor: "STANDARD",
                        labelSize: "SMALL",
                        contents: {
                          /* Activity date */
                          a!forEach(
                            items: local!orderActivityLog,
                            expression: {
                              a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  upper(text(fv!item.date, "MMM")),
                                  " ",
                                  a!richTextItem(
                                    text: day(fv!item.date),
                                    size: "MEDIUM",
                                    style: "STRONG"
                                  )
                                }
                              ),
                              /* Activity list */
                              a!forEach(
                                items: fv!item.events,
                                expression: a!cardLayout(
                                  shape: "SEMI_ROUNDED",
                                  contents: {
                                    a!richTextDisplayField(
                                      labelPosition: "COLLAPSED",
                                      value: {
                                        a!richTextItem(text: fv!item.time, color: "SECONDARY"),
                                        char(10),
                                        a!richTextItem(
                                          text: fv!item.user,
                                          link: a!userRecordLink(
                                            showWhen: not(fv!item.isSystemGenerated)
                                          ),
                                          linkStyle: "STANDALONE",
                                          style: "STRONG"
                                        ),
                                        a!richTextItem(text: " " & fv!item.event)
                                      }
                                    )
                                  },
                                  marginBelow: "LESS",
                                  borderColor: "#EDEEFA"
                                )
                              )
                            }
                          )
                        }
                      )
                    }
                  )
                },
                stackWhen: {
                  "DESKTOP_WIDE",
                  "DESKTOP",
                  "DESKTOP_NARROW",
                  "PHONE"
                }
              )
            },
            width: "NARROW_PLUS"
          )
        },
        spacing: "SPARSE",
        stackWhen: {
          "TABLET_LANDSCAPE",
          "TABLET_PORTRAIT",
          "PHONE"
        }
      )
    }
  )
)
```

---

**Image Credits:**

- Billboard background image: Photo by [Andy Holmes](https://unsplash.com/@andyjh07?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/flock-of-penguins-tmsxaFx1Sws?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
      
- Product images: Photos by [Darryl Low](https://unsplash.com/@1188low?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) and [Mana Akbarzadegan](https://unsplash.com/@manaakbar?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/black-round-analog-watch-at-10-10-M85fe7-_nnA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)    
