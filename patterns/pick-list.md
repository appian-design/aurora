---
status: "stable"
last_updated: "2024-10-24"
---

# Pick List

Pick Lists are used on a form to allow users to select one or more items from a long list and additional metadata is helpful

![](https://github.com/user-attachments/assets/d5254879-4759-4db4-adb3-d38c0649612a)

## Design

### Usage Guidance

#### Styling 

The left grid is read-only and the right grid is either read-only or editable. The styling of both grids should match. By default, we recommend having a light border style and no alternatively-shaded rows. Search and filters should also be above both grids when applicable. There is an active count tag next to each grid header.

#### Behavior

When an item is selected, the selected item will automatically appear on the right side and stay selected on the left. The user should be able to remove selected items by deselecting it in the left grid or removing it on the right using the “X” icon.

### Empty State

![](https://github.com/user-attachments/assets/568e2120-d870-4e5b-a31c-2398ba07d383)

The OOTB grid empty state should appear when no item has been selected

### Accessibility

Define the headings on each side of the picker as semantic headings rather than rich text. Ensure a unique, hidden label is set for each grid that matches the semantic header.

## Development

```
a!localVariables(
  local!lineItemData: {
    a!map(
      title: "Laptops",
      lineItem: "0001",
      itemType: "CLIN",
      type: "Product • PSC 5650",
      periodOfPerformance: "11/05/2022-11/04/2024",
      pricingArrangement: "Cost Plus Fixed Fee",
      option: "Base",
      availableValue: "$10,000",
      quantity: null,
      totalAmount: null
    ),
    a!map(
      title: "Laptop Chargers",
      lineItem: "0001 AA",
      itemType: "SLIN",
      type: "Product • PSC 5650",
      periodOfPerformance: "11/05/2022-11/04/2024",
      pricingArrangement: "Cost Plus Fixed Fee",
      option: "Base",
      availableValue: "$10,000",
      quantity: null,
      totalAmount: null
    ),
    a!map(
      title: "Keyboards",
      lineItem: "0001 AB",
      itemType: "SLIN",
      type: "Product • PSC 5650",
      periodOfPerformance: "11/05/2022-11/04/2024",
      pricingArrangement: "Cost Plus Fixed Fee",
      option: "Base",
      availableValue: "$10,000",
      quantity: null,
      totalAmount: null
    ),
    a!map(
      title: "Desks",
      lineItem: "0002",
      itemType: "CLIN",
      type: "Product • PSC 5650",
      periodOfPerformance: "11/05/2022-11/04/2024",
      pricingArrangement: "Cost Plus Fixed Fee",
      option: "Unexercised",
      availableValue: "5,000 units",
      quantity: null,
      totalAmount: null
    ),
    a!map(
      title: "Chairs",
      lineItem: "0003",
      itemType: "CLIN",
      type: "Product • PSC 5650",
      periodOfPerformance: "11/05/2022-11/04/2024",
      pricingArrangement: "Cost Plus Fixed Fee",
      option: "Exercised",
      availableValue: "5,000 units",
      quantity: null,
      totalAmount: null
    ),
    a!map(
      title: "Monitors",
      lineItem: "0004",
      itemType: "CLIN",
      type: "Product • PSC 5650",
      periodOfPerformance: "11/05/2022-11/04/2024",
      pricingArrangement: "Cost Plus Fixed Fee",
      option: "Unexercised",
      availableValue: "$8,000",
      quantity: null,
      totalAmount: null
    ),
    a!map(
      title: "An example of a much longer line item title",
      lineItem: "0005",
      itemType: "CLIN",
      type: "Service • PSC 5650",
      periodOfPerformance: "11/05/2022-11/04/2024",
      pricingArrangement: "Cost Plus Fixed Fee",
      option: "Exercised",
      availableValue: "$10,000",
      quantity: null,
      totalAmount: null
    ),
    a!map(
      title: "Desks",
      lineItem: "0006",
      itemType: "CLIN",
      type: "Product • PSC 5650",
      periodOfPerformance: "11/05/2022-11/04/2024",
      pricingArrangement: "Cost Plus Fixed Fee",
      option: "Base",
      availableValue: "5,000 units",
      quantity: null,
      totalAmount: null
    ),
    a!map(
      title: "Chairs",
      lineItem: "0007",
      itemType: "CLIN",
      type: "Product • PSC 5650",
      periodOfPerformance: "11/05/2022-11/04/2024",
      pricingArrangement: "Cost Plus Fixed Fee",
      option: "Base",
      availableValue: "5,000 units",
      quantity: null,
      totalAmount: null
    ),
    a!map(
      title: "Monitors",
      lineItem: "0008",
      itemType: "CLIN",
      type: "Product • PSC 5650",
      periodOfPerformance: "11/05/2022-11/04/2024",
      pricingArrangement: "Cost Plus Fixed Fee",
      option: "Exercised",
      availableValue: "$8,000",
      quantity: null,
      totalAmount: null
    ),
    a!map(
      title: "Laptops",
      lineItem: "0009",
      itemType: "CLIN",
      type: "Product • PSC 5650",
      periodOfPerformance: "11/05/2022-11/04/2024",
      pricingArrangement: "Cost Plus Fixed Fee",
      option: "Unexercised",
      availableValue: "$10,000",
      quantity: null,
      totalAmount: null
    ),
    a!map(
      title: "Desks",
      lineItem: "0010",
      itemType: "CLIN",
      type: "Product • PSC 5650",
      periodOfPerformance: "11/05/2022-11/04/2024",
      pricingArrangement: "Cost Plus Fixed Fee",
      option: "Base",
      availableValue: "5,000 units",
      quantity: null,
      totalAmount: null
    ),
    a!map(
      title: "Chairs",
      lineItem: "0011",
      itemType: "CLIN",
      type: "Product • PSC 5650",
      periodOfPerformance: "11/05/2022-11/04/2024",
      pricingArrangement: "Cost Plus Fixed Fee",
      option: "Base",
      availableValue: "5,000 units",
      quantity: null,
      totalAmount: null
    ),
    a!map(
      title: "Monitors",
      lineItem: "0012",
      itemType: "CLIN",
      type: "Product • PSC 5650",
      periodOfPerformance: "11/05/2022-11/04/2024",
      pricingArrangement: "Cost Plus Fixed Fee",
      option: "Exercised",
      availableValue: "$8,000",
      quantity: null,
      totalAmount: null
    )
  },
  local!selectedLineItems: null,
  a!sectionLayout(
    labelSize: "SMALL",
    labelHeadingTag: "H2",
    labelColor: "STANDARD",
    contents: {
      a!sectionLayout(
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
                          value: a!richTextItem(
                            text: "Available Line Items",
                            size: "MEDIUM",
                            style: "STRONG"
                          )
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!tagField(
                          labelPosition: "COLLAPSED",
                          tags: a!tagItem(
                            text: count(local!lineItemData),
                            backgroundColor: "#EDEEF2",
                            textColor: "#2E2E35"
                          )
                        ),
                        width: "MINIMIZE"
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginBelow: "LESS"
                  ),
                  a!columnsLayout(
                    columns: {
                      a!columnLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!textField(
                                  labelPosition: "COLLAPSED",
                                  placeholder: "Search Line Items"
                                )
                              ),
                              a!sideBySideItem(
                                item: a!buttonArrayLayout(
                                  buttons: a!buttonWidget(
                                    label: "Search",
                                    size: "SMALL",
                                    style: "OUTLINE",
                                    color: "SECONDARY"
                                  ),
                                  marginBelow: "NONE"
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            spacing: "DENSE"
                          )
                        },
                        width: "NARROW_PLUS"
                      ),
                      a!columnLayout(
                        contents: {
                          a!dropdownField(
                            label: "",
                            labelPosition: "COLLAPSED",
                            placeholder: "Period of Performance | Any - Any",
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
                            label: "",
                            labelPosition: "COLLAPSED",
                            placeholder: "Option | Base, Exercised",
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
                    spacing: "DENSE"
                  ),
                  a!gridField(
                    label: "Available Line Items",
                    labelPosition: "COLLAPSED",
                    data: local!lineItemData,
                    columns: {
                      a!gridColumn(
                        label: "Line Item",
                        value: a!richTextDisplayField(
                          value: {
                            if(
                              fv!row.itemType = "SLIN",
                              a!richTextItem(text: "↳ "),
                              ""
                            ),
                            a!richTextItem(
                              text: fv!row.lineItem,
                              link: a!recordLink(),
                              linkStyle: "STANDALONE"
                            )
                          },
                          preventWrapping: true
                        )
                      ),
                      a!gridColumn(
                        label: "Title",
                        value: a!richTextDisplayField(
                          value: {
                            a!richTextItem(text: fv!row.title),
                            char(10),
                            a!richTextItem(
                              text: fv!row.type,
                              color: "SECONDARY",
                              size: "SMALL"
                            )
                          }
                        )
                      ),
                      a!gridColumn(
                        label: "Period of Performance",
                        value: fv!row.periodOfPerformance
                      ),
                      a!gridColumn(
                        label: "Pricing Arrangement",
                        value: fv!row.pricingArrangement
                      ),
                      a!gridColumn(label: "Option", value: fv!row.option)
                    },
                    pageSize: 10,
                    selectable: true,
                    selectionValue: local!selectedLineItems,
                    selectionSaveInto: {
                      local!selectedLineItems,
                      if(
                        contains(tointeger(local!selectedLineItems), { 1 }),
                        {
                          if(
                            not(
                              contains(tointeger(local!selectedLineItems), { 2 })
                            ),
                            a!save(
                              target: local!selectedLineItems,
                              value: append(local!selectedLineItems, { 2 })
                            ),
                            {}
                          ),
                          if(
                            not(
                              contains(tointeger(local!selectedLineItems), { 3 })
                            ),
                            a!save(
                              target: local!selectedLineItems,
                              value: append(local!selectedLineItems, { 3 })
                            ),
                            {}
                          )
                        },
                        a!save(
                          target: local!selectedLineItems,
                          value: remove(
                            remove(
                              local!selectedLineItems,
                              wherecontains(tointeger(local!selectedLineItems), { 2 })
                            ),
                            wherecontains(tointeger(local!selectedLineItems), { 3 })
                          )
                        )
                      )
                    },
                    validations: {},
                    borderStyle: "LIGHT",
                    emptyGridMessage: "No line items available",
                    shadeAlternateRows: false
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
                          value: a!richTextItem(
                            text: "Selected Line Items",
                            size: "MEDIUM",
                            style: "STRONG"
                          )
                        ),
                        width: "MINIMIZE"
                      ),
                      a!sideBySideItem(
                        item: a!tagField(
                          labelPosition: "COLLAPSED",
                          tags: a!tagItem(
                            text: count(local!selectedLineItems),
                            backgroundColor: "#EDEEF2",
                            textColor: "#2E2E35"
                          )
                        ),
                        width: "MINIMIZE"
                      )
                    },
                    alignVertical: "MIDDLE",
                    marginBelow: "LESS"
                  ),
                  a!columnsLayout(
                    columns: {
                      a!columnLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!textField(
                                  labelPosition: "COLLAPSED",
                                  placeholder: "Search Line Items"
                                )
                              ),
                              a!sideBySideItem(
                                item: a!buttonArrayLayout(
                                  buttons: a!buttonWidget(
                                    label: "Search",
                                    size: "SMALL",
                                    style: "OUTLINE",
                                    color: "SECONDARY"
                                  ),
                                  marginBelow: "NONE"
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            spacing: "DENSE"
                          )
                        },
                        width: "NARROW_PLUS"
                      ),
                      a!columnLayout(
                        contents: {
                          a!dropdownField(
                            label: "",
                            labelPosition: "COLLAPSED",
                            placeholder: "Period of Performance | Any - Any",
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
                            label: "",
                            labelPosition: "COLLAPSED",
                            placeholder: "Option | Base, Exercised",
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
                    spacing: "DENSE"
                  ),
                  a!gridLayout(
                    label: "Selected Line Items",
                    labelPosition: "COLLAPSED",
                    headerCells: {
                      a!gridLayoutHeaderCell(label: "Line Item"),
                      a!gridLayoutHeaderCell(label: "Title"),
                      a!gridLayoutHeaderCell(label: "Period of Performance"),
                      a!gridLayoutHeaderCell(label: "Pricing Arrangement"),
                      a!gridLayoutHeaderCell(label: "Option"),
                      a!gridLayoutHeaderCell(label: "")
                    },
                    columnConfigs: {
                      a!gridLayoutColumnConfig(width: "DISTRIBUTE", weight: 3),
                      a!gridLayoutColumnConfig(width: "DISTRIBUTE", weight: 7),
                      a!gridLayoutColumnConfig(width: "DISTRIBUTE", weight: 4),
                      a!gridLayoutColumnConfig(width: "DISTRIBUTE", weight: 4),
                      a!gridLayoutColumnConfig(width: "DISTRIBUTE", weight: 2),
                      a!gridLayoutColumnConfig(width: "ICON")
                    },
                    rows: a!forEach(
                      items: local!selectedLineItems,
                      expression: a!gridRowLayout(
                        contents: {
                          a!textField(
                            value: index(local!lineItemData, fv!item).lineItem,
                            saveInto: index(local!lineItemData, fv!item).lineItem
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: index(local!lineItemData, fv!item).title
                              ),
                              char(10),
                              a!richTextItem(
                                text: index(local!lineItemData, fv!item).type,
                                color: "SECONDARY",
                                size: "SMALL"
                              )
                            }
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: index(local!lineItemData, fv!item).periodOfPerformance
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: index(local!lineItemData, fv!item).pricingArrangement
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: index(local!lineItemData, fv!item).option
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: a!richTextIcon(
                              icon: "close",
                              link: a!dynamicLink(
                                value: null,
                                saveInto: a!save(
                                  target: local!selectedLineItems,
                                  value: remove(local!selectedLineItems, fv!index)
                                )
                              ),
                              linkStyle: "STANDALONE",
                              color: "ACCENT"
                            )
                          )
                        }
                      )
                    ),
                    height: "TALL",
                    emptyGridMessage: "No line items available",
                    validations: {},
                    shadeAlternateRows: false,
                    borderStyle: "LIGHT"
                  )
                }
              )
            },
            marginAbove: "EVEN_LESS",
            spacing: "SPARSE",
            showDividers: true,
            marginBelow: "NONE"
          )
        },
        marginBelow: "NONE"
      )
    }
  )
)
```
