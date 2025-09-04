---
status: "stable"
last_updated: "2025-08-29"
---

# Charts

Charts can be a useful tool in interfaces to get a high level view of data and the state of processes in a visual manner.

## Design

### Chart Labeling

![](https://github.com/user-attachments/assets/bfb04812-eee2-4bbc-b734-d6deca56a949)

Follow labeling that is consistent with other sections in the interface.

* If a help tooltip is needed, use a rich text header in a side by side layout with a help icon.  The icon size must match the size of the title text.
* Use of tooltip should be reserved for chart titles that include terms that may not be universally understood.

> [!Note]
> **Accessibility:** In addition to the tooltip text on the richTextIcon, to ensure the text is read to screen readers, set the help icon CAPTION to the same text as the tooltip.

### Legend

![](https://github.com/user-attachments/assets/64d44c7c-0475-4050-81f2-8a0bea504b80)

For more styling flexibility, we recommend using a custom legend instead of the OOTB legend.
* Note that the functionality to toggle a series on and off using the legend will be lost when choosing to use a custom legend.

### Abbreviated Numbers

![](https://github.com/user-attachments/assets/e8c4b3e8-3d7f-4510-89fb-f68c59f5be4b)

For charts that plot large numbers (above 1 million), consider abbreviating the numbers to make the chart cleaner and easier to scan.
* When abbreviating numbers in the axis, make sure to include the units used in the axis label.

### Data Limits

![](https://github.com/user-attachments/assets/e91722a7-4025-4dd3-a6d1-09b785f8053e)

For bar charts, if there are many distinct categories, consider creating an “other” bar that is an aggregate of the smaller values. This way, the bars and labels can stay at a readable size.

### Chart Ordering

![](https://github.com/user-attachments/assets/0a360f7f-8624-4149-8797-bc7bee5104a3)

All charts should have an intentional order. Some charts have a natural ordering (ex. a process with a clear beginning and end), while others do not. If there is no natural ordering, have the order be displayed based on value (ex. highest to lowest).

### Chart Colors

Use ASDS defined [chart color themes](../branding/colors.md#charts)

### Empty State

![](https://github.com/user-attachments/assets/d196d931-a3d3-4e9c-8edd-b44d6f96aee0)

Use custom empty states for charts with no data to add visual interest.
* Consider pairing the empty state image with text with additional information on why the chart may be empty or a call to action on how to add data.
* Choose an icon that best represents the type of chart that will be shown

## Development

### Chart Label with Help Icon

```
a!sectionLayout(
    label: "",
    contents: {
      a!sideBySideLayout(
        items: {
          a!sideBySideItem(
            item: a!richTextDisplayField(
              labelPosition: "COLLAPSED",
              value: {
                a!richTextHeader(
                  text: {
                    "Chart Header"
                  },
                  size: "SMALL"
                )
              }
            ),
            width: "MINIMIZE"
          ),
          a!sideBySideItem(
            item: a!richTextDisplayField(
              labelPosition: "COLLAPSED",
              helpTooltip: "",
              value: {
                a!richTextIcon(
                  icon: "question-circle",
                  color: "ACCENT"
                )
              },
              tooltip: "Information that would show up in the tooltip.",
              accessibilityText: "Information that would show up in the tooltip."
            )
          )
        },
        alignVertical: "MIDDLE",
        spacing: "DENSE"
      ),
      a!cardLayout(
        contents: {},
        height: "AUTO",
        style: "TRANSPARENT",
        shape: "SEMI_ROUNDED",
        padding: "STANDARD",
        marginBelow: "STANDARD",
        showBorder: false,
        showShadow: true
      )
    }
  )
```

### Custom Legend

```
a!columnsLayout(
  columns: {
    a!columnLayout(
      contents: {
        a!sectionLayout(
          label: "Chart with Custom Legend ",
          labelSize: "SMALL",
          labelHeadingTag: "H2",
          labelColor: "STANDARD",
          contents: {
            a!cardLayout(
              contents: {
                a!pieChartField(
                  label: "",
                  labelPosition: "COLLAPSED",
                  series: {
                    a!chartSeries(label: "Soccer", data: 10),
                    a!chartSeries(label: "Ultimate Frisbee", data: 24),
                    a!chartSeries(label: "Volleyball", data: 39),
                    a!chartSeries(label: "Tennis", data: 42),
                    a!chartSeries(label: "Football", data: 51)
                  },
                  showDataLabels: false,
                  showTooltips: true,
                  allowImageDownload: false,
                  colorScheme: a!colorSchemeCustom(
                    colors: {
                      "#2322F0",
                      "#B561FF",
                      "#FAA92F",
                      "#A5E8E8",
                      "#AFBFF8"
                    }
                  ),
                  style: "DONUT",
                  seriesLabelStyle: "NONE",
                  height: "SHORT"
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
                                      a!richTextItem(
                                        text: {
                                          a!richTextIcon(
                                            icon: "circle"
                                          ),
                                          " "
                                        },
                                        color: "#2322F0",
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
                                      a!richTextItem(
                                        text: {
                                          "Soccer"
                                        },
                                        size: "STANDARD"
                                      )
                                    },
                                    preventWrapping: true
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      a!richTextItem(
                                        text: {
                                          "(10)"
                                        },
                                        size: "STANDARD"
                                      )
                                    }
                                  ),
                                  width: "MINIMIZE"
                                )
                              },
                              alignVertical: "MIDDLE",
                              spacing: "DENSE",
                              marginBelow: "EVEN_LESS"
                            ),
                            a!sideBySideLayout(
                              items: {
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      a!richTextItem(
                                        text: {
                                          a!richTextIcon(
                                            icon: "circle"
                                          ),
                                          " "
                                        },
                                        color: "#FAA92F",
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
                                      "Volleyball"
                                    },
                                    preventWrapping: true
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      "(39)"
                                    }
                                  ),
                                  width: "MINIMIZE"
                                )
                              },
                              alignVertical: "MIDDLE",
                              spacing: "DENSE",
                              marginBelow: "EVEN_LESS"
                            ),
                            a!sideBySideLayout(
                              items: {
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      a!richTextItem(
                                        text: {
                                          a!richTextIcon(
                                            icon: "circle"
                                          ),
                                          " "
                                        },
                                        color: "#AFBFF8",
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
                                      "Football"
                                    },
                                    preventWrapping: true
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      "(51)"
                                    }
                                  ),
                                  width: "MINIMIZE"
                                )
                              },
                              alignVertical: "MIDDLE",
                              spacing: "DENSE"
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
                                    value: {
                                      a!richTextItem(
                                        text: {
                                          a!richTextIcon(
                                            icon: "circle"
                                          ),
                                          " "
                                        },
                                        color: "#B561FF",
                                        size: "SMALL"
                                      )
                                    },
                                    marginBelow: "NONE"
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      a!richTextItem(
                                        text: {
                                          "Ultimate Frisbee"
                                        },
                                        size: "STANDARD"
                                      )
                                    },
                                    preventWrapping: true
                                  ),
                                  width: "AUTO"
                                ),
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      a!richTextItem(
                                        text: {
                                          "(24)"
                                        },
                                        size: "STANDARD"
                                      )
                                    }
                                  ),
                                  width: "MINIMIZE"
                                )
                              },
                              alignVertical: "MIDDLE",
                              spacing: "DENSE",
                              marginBelow: "EVEN_LESS"
                            ),
                            a!sideBySideLayout(
                              items: {
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      a!richTextIcon(
                                        icon: "circle",
                                        color: "#A5E8E8",
                                        size: "SMALL"
                                      ),
                                      a!richTextItem(
                                        text: {
                                          " "
                                        },
                                        color: "#FAA92F",
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
                                      "Tennis"
                                    },
                                    preventWrapping: true
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      "(42)"
                                    }
                                  ),
                                  width: "MINIMIZE"
                                )
                              },
                              alignVertical: "MIDDLE",
                              spacing: "DENSE",
                              marginBelow: "EVEN_LESS"
                            )
                          }
                        )
                      },
                      spacing: "DENSE"
                    )
                  },
                  height: "AUTO",
                  style: "TRANSPARENT",
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
      },
      width: "MEDIUM"
    ),
    a!columnLayout(
      contents: {},
      width: "MEDIUM"
    ),
    a!columnLayout(
      contents: {}
    )
  }
)
```

### Abbreviate Numbers

```
a!columnsLayout(
  columns: {
    a!columnLayout(
      contents: {
        a!sectionLayout(
          label: "Fiscal Year Obligated Spend",
          labelSize: "SMALL",
          labelHeadingTag: "H2",
          labelColor: "STANDARD",
          contents: {
            a!cardLayout(
              contents: {
                a!lineChartField(
                  label: "",
                  labelPosition: "COLLAPSED",
                  categories: { "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep" },
                  series: {
                    a!chartSeries(label: "2023 Fiscal Year", data: { 460, 560,660,769,860,930,963,1060,1260,1460,null() ,null()})
                  },
                  xAxisTitle: "",
                  yAxisTitle: "Obligated Spend (M)",
                  yAxisMax: 2.0E3,
                  referenceLines: a!chartReferenceLine(label: "2023 Fiscal Year Budget", value: 1.85E3, color: "#2E2E35", style: "SHORTDASH"),
                  showLegend: true,
                  showDataLabels: false,
                  showTooltips: true,
                  allowDecimalAxisLabels: false,
                  connectNulls: true,
                  colorScheme: a!colorSchemeCustom(
                    colors: {
                      "#073DC4",
                      "#9d4de3",
                      "#F3961F",
                      "#18b4ab",
                      "#F9CC00"
                    }
                  ),
                  height: "MEDIUM",
                  xAxisStyle: "STANDARD",
                  yAxisStyle: "STANDARD"
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
    )
  }
)
```


### Data Limits

```
a!columnsLayout(
  columns: {
    a!columnLayout(
      contents: {
        a!sectionLayout(
          label: """Other"" Chart",
          labelSize: "SMALL",
          labelColor: "STANDARD",
          contents: {
            a!cardLayout(
              contents: {
                a!columnChartField(
                  label: "",
                  categories: { "Sports", "Category 2", "Category 3" },
                  series: {
                    a!chartSeries(label: "Soccer", data: { 29 }),
                    a!chartSeries(label: "Football", data: { 27 }),
                    a!chartSeries(label: "Basketball", data: { 19 }),
                    a!chartSeries(label: "Tennis", data: { 16 }),
                    a!chartSeries(label: "Wrestling", data: { 10 }),
                    a!chartSeries(
                      label: "Gymnastics [3], Skiing [2], Track [1]",
                      data: { 6 }
                    )
                  },
                  stacking: "NONE",
                  showLegend: false,
                  showTooltips: true,
                  labelPosition: "ABOVE",
                  allowImageDownload: false,
                  colorScheme: a!colorSchemeCustom(
                    colors: {
                      "#2322F0",
                      "#B561FF",
                      "#FAA92F",
                      "#A5E8E8",
                      "#AFBFF8",
                      "#6C6C75",
                      "#56ADC0",
                      "#FFDCA3"
                    }
                  ),
                  height: "SHORT",
                  xAxisStyle: "NONE",
                  yAxisStyle: "STANDARD"
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
                                      a!richTextItem(
                                        text: { a!richTextIcon(icon: "circle"), " " },
                                        color: "#2322F0",
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
                                      a!richTextItem(text: { "Soccer" }, size: "STANDARD")
                                    },
                                    preventWrapping: true
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      a!richTextItem(text: { "(29)" }, size: "STANDARD")
                                    }
                                  ),
                                  width: "MINIMIZE"
                                )
                              },
                              alignVertical: "MIDDLE",
                              spacing: "DENSE",
                              marginBelow: "EVEN_LESS"
                            ),
                            a!sideBySideLayout(
                              items: {
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      a!richTextIcon(
                                        icon: "circle",
                                        color: "#A5E8E8",
                                        size: "SMALL"
                                      ),
                                      a!richTextItem(
                                        text: { " " },
                                        color: "#FAA92F",
                                        size: "SMALL"
                                      )
                                    }
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: { "Tennis" },
                                    preventWrapping: true
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: { "(16)" }
                                  ),
                                  width: "MINIMIZE"
                                )
                              },
                              alignVertical: "MIDDLE",
                              spacing: "DENSE",
                              marginBelow: "EVEN_LESS"
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
                                    value: {
                                      a!richTextItem(
                                        text: { a!richTextIcon(icon: "circle"), " " },
                                        color: "#B561FF",
                                        size: "SMALL"
                                      )
                                    },
                                    marginBelow: "NONE"
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      a!richTextItem(text: { "Football" }, size: "STANDARD")
                                    },
                                    preventWrapping: true
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      a!richTextItem(text: { "(27)" }, size: "STANDARD")
                                    }
                                  ),
                                  width: "MINIMIZE"
                                )
                              },
                              alignVertical: "MIDDLE",
                              spacing: "DENSE",
                              marginBelow: "EVEN_LESS"
                            ),
                            a!sideBySideLayout(
                              items: {
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      a!richTextItem(
                                        text: { a!richTextIcon(icon: "circle"), " " },
                                        color: "#AFBFF8",
                                        size: "SMALL"
                                      )
                                    }
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: { "Wrestling" },
                                    preventWrapping: true
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: { "(10)" }
                                  ),
                                  width: "MINIMIZE"
                                )
                              },
                              alignVertical: "MIDDLE",
                              spacing: "DENSE"
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
                                    value: {
                                      a!richTextItem(
                                        text: { a!richTextIcon(icon: "circle"), " " },
                                        color: "#FAA92F",
                                        size: "SMALL"
                                      )
                                    }
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: { "Basketball" },
                                    preventWrapping: true
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: { "(19)" }
                                  ),
                                  width: "MINIMIZE"
                                )
                              },
                              alignVertical: "MIDDLE",
                              spacing: "DENSE",
                              marginBelow: "EVEN_LESS"
                            ),
                            a!sideBySideLayout(
                              items: {
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      a!richTextItem(
                                        text: { a!richTextIcon(icon: "circle"), " " },
                                        color: "#6C6C75",
                                        size: "SMALL"
                                      )
                                    },
                                    tooltip: ""
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: { "Other" },
                                    preventWrapping: true
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: { "(6)" },
                                    preventWrapping: true,
                                    tooltip: "Gymnastics [3], Skiing [2], Track [1]"
                                  ),
                                  width: "MINIMIZE"
                                )
                              },
                              alignVertical: "MIDDLE",
                              spacing: "DENSE"
                            )
                          }
                        )
                      },
                      spacing: "DENSE"
                    )
                  },
                  height: "AUTO",
                  style: "TRANSPARENT",
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
    a!columnLayout(contents: {})
  }
)
```
