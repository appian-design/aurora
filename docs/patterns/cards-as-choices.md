---
status: "stable"
last_updated: "2025-09-21"
---

# Cards as Choices

Cards as choices present a set of distinct options to a user in a visually engaging, easily scannable format. This pattern serves as an alternative to radio buttons or dropdowns, especially when choices benefit from descriptive text, icons, or images. 

![](https://github.com/user-attachments/assets/d30db36f-cf02-4be1-bcfa-6323dccd4848)

## Design

### Variants

#### Hero Cards 

![](https://github.com/user-attachments/assets/f615d031-2efc-42c7-866c-900a1097b010)

Use this variant when the cards as choice field is the only content in a form/wizard step and could benefit from more visual prominence. 

#### Stacked Content

![](https://github.com/user-attachments/assets/3b723387-2bb2-44eb-86d2-60473d350e74)

The stacked content layout is the base, preferred version for card choices when the space permits and you can keep the text for choices brief.

- Keep the width "NARROW" or ensure that cards retain a "semi-squared" ratio
- Use up to 4 lines of text (i.e. primary text can have 2 lines of text if secondary text takes up 2 lines)

#### Side by Side Content 

![](https://github.com/user-attachments/assets/1b9603f6-f024-4037-836f-f41c70d28069)

The side by side content is the version used when you need more text to describe the choices or if you need a denser layout.

- Use a width up to around "MEDIUM_PLUS." This style accommodates both wider and narrower widths, but we want to ensure that the text is still readable
- When there is secondary text: use up to 3 lines of text (i.e. primary text can only have 1 line of text if secondary text takes up 2 lines)
- When there is no secondary text: use only 1 line of primary text


## Development

### Variants

#### Hero Cards 
```
a!localVariables(
  local!selectedCard,
  local!options: {
    a!map(
      id: 1,
      name: "Create new file",
      icon: "plus-circle",
      description: "For full control and custom design",
      contentColor: "#152B99",
      backgroundColor: "#EDEEFA"
    ),
    a!map(
      id: 2,
      name: "Use existing file",
      icon: "upload",
      description: "To save time by importing your own file",
      contentColor: "#790DA1",
      backgroundColor: "#F2E9FF"
    )
  },
  {
    a!columnsLayout(
      columns: {
        a!columnLayout(),
        a!columnLayout(
          contents: {
            a!headingField(
              text: "Choose a creation method",
              fontWeight: "SEMI_BOLD",
              align: "CENTER",
              marginBelow: "MORE"
            ),
            a!cardGroupLayout(
              cards: a!forEach(
                items: local!options,
                expression: a!cardLayout(
                  contents: {
                    a!cardLayout(
                      contents: {
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: a!richTextIcon(
                                  icon: if(
                                    and(
                                      a!isNotNullOrEmpty(local!selectedCard),
                                      local!selectedCard = fv!item.id
                                    ),
                                    "check-circle",
                                    "circle-o-large"
                                  ),
                                  color: if(
                                    and(
                                      a!isNotNullOrEmpty(local!selectedCard),
                                      local!selectedCard = fv!item.id
                                    ),
                                    "ACCENT",
                                    "#6C6C75"
                                  )
                                )
                              ),
                              width: "MINIMIZE"
                            ),
                            a!sideBySideItem()
                          }
                        ),
                        a!stampField(
                          icon: fv!item.icon,
                          backgroundColor: fv!item.backgroundColor,
                          contentColor: fv!item.contentColor,
                          size: "LARGE",
                          align: "CENTER",
                          marginBelow: "MORE"
                        )
                      },
                      style: fv!item.backgroundColor,
                      padding: "STANDARD",
                      showBorder: false()
                    ),
                    a!cardLayout(
                      contents: {
                        a!headingField(
                          text: fv!item.name,
                          size: "SMALL",
                          fontWeight: "BOLD",
                          marginBelow: "LESS"
                        ),
                        a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: fv!item.description
                        )
                      },
                      padding: "STANDARD",
                      showBorder: false()
                    )
                  },
                  link: a!dynamicLink(
                    label: "Select option",
                    value: fv!item.id,
                    saveInto: local!selectedCard
                  ),
                  shape: "SEMI_ROUNDED",
                  padding: "NONE",
                  borderColor: if(
                    and(
                      a!isNotNullOrEmpty(local!selectedCard),
                      local!selectedCard = fv!item.id
                    ),
                    "ACCENT",
                    "#EDEEFA"
                  )
                )
              ),
              cardWidth: "EXTRA_NARROW"
            )
          },
          width: "WIDE"
        ),
        a!columnLayout()
      }
    )
  }
)
```

#### Stacked Content
```
a!localVariables(
  local!cardGroupLabel: "Choose Your Actions",
  local!cardWidth: "NARROW",
  /* use FILL if the cards will be in a small enough width*/
  local!isMultiSelect: fn!true(),
  local!cards: {
    a!map(
      primaryText: "Create",
      secondaryText: "Allow users to add new records to the record type",
      /* use either an icon or an image. internal icons are accepted */
      icon: "plus",
      image: fn!null(),
      /* put the constant referencing the image here */
      selected: fn!true(),
      disabled: fn!false(),
      tooltip: fn!null()/* fill this in for disabled state */

    ),
    a!map(
      primaryText: "Update",
      secondaryText: "Allow users to update a specific record",
      /* use either an icon or an image. internal icons are accepted */
      icon: "pencil",
      image: fn!null(),
      /* put the constant referencing the image here */
      selected: fn!true(),
      disabled: fn!false(),
      tooltip: fn!null()/* fill this in for disabled state */

    ),
    a!map(
      primaryText: "Delete",
      secondaryText: "Allow users to delete from the record type",
      /* use either an icon or an image. internal icons are accepted */
      icon: "trash",
      image: fn!null(),
      /* put the constant referencing the image here */
      selected: fn!false(),
      disabled: fn!false(),
      tooltip: fn!null()/* fill this in for disabled state */

    )
  },
  a!sectionLayout(
    contents: a!cardGroupLayout(
      label: local!cardGroupLabel,
      cards: {
        a!forEach(
          items: local!cards,
          expression: a!cardLayout(
            contents: {
              /* selected indicator */
              a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: a!richTextIcon(
                  icon: if(
                    local!isMultiSelect,
                    if(
                      fv!item.selected,
                      "check-square",
                      "square-o"
                    ),
                    if(
                      fv!item.selected,
                      "dot-circle-large",
                      "circle-o-large"
                    )
                  ),
                  color: if(
                    fv!item.disabled,
                    if(fv!item.selected, "#898989", "#ddd"),
                    if(fv!item.selected, "ACCENT", "#959595")
                  ),
                  size: "MEDIUM"
                ),
                align: "RIGHT",
                marginAbove: "NONE",
                marginBelow: "NONE"
              ),
              /* stamp with the icon */
              a!stampField(
                labelPosition: "COLLAPSED",
                icon: fv!item.icon,
                backgroundColor: if(fv!item.disabled, "#e0e0e0", "#dcdbff"),
                contentColor: if(fv!item.disabled, "#898989", "ACCENT"),
                size: "TINY",
                align: if(
                  a!isNotNullOrEmpty(fv!item.secondaryText),
                  "START",
                  "CENTER"
                ),
                showWhen: a!isNullOrEmpty(fv!item.image),
                marginBelow: if(
                  a!isNotNullOrEmpty(fv!item.secondaryText),
                  "STANDARD",
                  "EVEN_LESS"
                )
              ),
              /* image */
              a!imageField(
                labelPosition: "COLLAPSED",
                images: a!documentImage(document: fv!item.image),
                showWhen: a!isNotNullOrEmpty(fv!item.image),
                size: "ICON_PLUS",
                align: if(
                  a!isNotNullOrEmpty(fv!item.secondaryText),
                  "START",
                  "CENTER"
                ),
                marginBelow: if(
                  a!isNotNullOrEmpty(fv!item.secondaryText),
                  "STANDARD",
                  "EVEN_LESS"
                )
              ),
              /* primary text */
              a!richTextDisplayField(
                labelPosition: "ABOVE",
                value: {
                  a!richTextItem(
                    text: fv!item.primaryText,
                    style: if(
                      a!isNotNullOrEmpty(fv!item.secondaryText),
                      "STRONG",
                      "PLAIN"
                    )
                  )
                },
                align: if(
                  a!isNotNullOrEmpty(fv!item.secondaryText),
                  "LEFT",
                  "CENTER"
                ),
                marginAbove: "LESS",
                marginBelow: if(
                  a!isNotNullOrEmpty(fv!item.secondaryText),
                  "EVEN_LESS",
                  "STANDARD"
                )
              ),
              /* secondary text */
              a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: {
                  a!richTextItem(text: fv!item.secondaryText)
                },
                showWhen: a!isNotNullOrEmpty(fv!item.secondaryText),
                marginBelow: "STANDARD"
              ),
              a!richTextDisplayField(marginBelow: "LESS")
            },
            link: if(
              fv!item.disabled,
              {},
              if(
                local!isMultiSelect,
                a!dynamicLink(
                  saveInto: if(
                    fv!item.selected,
                    a!save(fv!item.selected, fn!false()),
                    a!save(fv!item.selected, fn!true())
                  )
                ),
                if(
                  fv!item.selected,
                  a!dynamicLink(),
                  a!dynamicLink(
                    saveInto: {
                      a!forEach(
                        items: local!cards,
                        expression: a!save(fv!item.selected, fn!false())
                      ),
                      a!save(fv!item.selected, fn!true())
                    }
                  )
                )
              )
            ),
            padding: "STANDARD",
            style: if(
              fv!item.disabled,
              if(fv!item.selected, "#f0f0f0", "#fafafa"),
              if(
                fv!item.selected,
                "#EEEEFE",
                "TRANSPARENT"
              )
            ),
            tooltip: fv!item.tooltip,
            accessibilityText: "option " & fv!index & " of " & length(local!cards) & if(fv!item.selected, ", selected, ", ", ") & "toggle button, " & "to select or de-select this option, press return.",
            shape: "SEMI_ROUNDED",
            borderColor: if(
              fv!item.disabled,
              if(fv!item.selected, "#898989", fn!null()),
              if(fv!item.selected, "ACCENT", fn!null())
            )
          )
        )
      },
      cardWidth: if(
        local!cardWidth = "FILL",
        fn!null(),
        local!cardWidth
      ),
      fillContainer: if(
        local!cardWidth = "FILL",
        fn!true(),
        fn!false()
      )
    ),
    marginBelow: "NONE",
    accessibilityText: if(
      local!isMultiSelect,
      "Multi select Group, ",
      "Single Select Group, "
    )
  )
)
```

#### Side by Side Content 
```
a!localVariables(
  local!cardGroupLabel: "Extraction Type",
  local!isMultiSelect: fn!false(),
  local!cardWidth: "MEDIUM_PLUS", /*choose from NARROW (when there's no secondary text) or MEDIUM, MEDIUM_PLUS, and FILL*/
  local!cards: {
    a!map(
      primaryText: "Process text only",
      secondaryText: "Extract data from within text documents. Supports up to 100 pages",
      /* use either an icon or an image. internal icons are accepted */
      icon: "file-text-o",
      image: fn!null(), /* put the constant referencing the image here */
      selected: fn!true(),
      disabled: fn!false(),
      tooltip: fn!null() /* fill this in for disabled state */
    ),
    a!map(
      primaryText: "Process visual elements and text",
      secondaryText: "Extract data from visual elements, like checkboxes, charts, or images, and text within documents. Supports up to 20 pages",
      /* use either an icon or an image. internal icons are accepted */
      icon: "picture-o",
      image: fn!null(), /* put the constant referencing the image here */
      selected: fn!false(),
      disabled: fn!false(),
      tooltip: fn!null() /* fill this in for disabled state */
    )
  },
  a!sectionLayout(
    contents: a!cardGroupLayout(
      label: local!cardGroupLabel,
      cards: {
        a!forEach(
          items: local!cards,
          expression: a!cardLayout(
            contents: {
              a!sideBySideLayout(
                items: {
                  /* stamp with the icon */
                  a!sideBySideItem(
                    item: a!stampField(
                      labelPosition: "ABOVE",
                      icon: fv!item.icon,
                      backgroundColor: if(fv!item.disabled, "#e0e0e0", "#dcdbff"),
                      contentColor: if(fv!item.disabled, "#898989", "ACCENT"),
                      size: "TINY",
                      marginAbove: "STANDARD",
                      marginBelow: "STANDARD"
                    ),
                    width: "MINIMIZE",
                    showWhen: a!isNotNullOrEmpty(fv!item.icon)
                  ),
                  /*text */
                  a!sideBySideItem(
                    item: a!richTextDisplayField(
                      labelPosition: "ABOVE",
                      value: {
                        a!richTextItem(
                          text: fv!item.primaryText,
                          style: if(
                            a!isNotNullOrEmpty(fv!item.secondaryText),
                            "STRONG",
                            "PLAIN"
                          )
                        ), 
                        char(10), 
                        a!richTextItem(text: fv!item.secondaryText, showWhen: a!isNotNullOrEmpty(fv!item.secondaryText),)
                      },
                      marginAbove: if(
                        a!isNotNullOrEmpty(fv!item.secondaryText),
                        "LESS",
                        "STANDARD"
                      ),
                      marginBelow: "EVEN_LESS"
                    )
                  ),
                  /*selected indicator */
                  a!sideBySideItem(
                    item:  a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: a!richTextIcon(
                        icon: if(
                          local!isMultiSelect,
                          if(
                            fv!item.selected,
                            "check-square",
                            "square-o"
                          ),
                          if(
                            fv!item.selected,
                            "dot-circle-large",
                            "circle-o-large"
                          )
                        ),
                        color: if(
                          fv!item.disabled,
                          if(fv!item.selected, "#898989", "#ddd"),
                          if(fv!item.selected, "ACCENT", "#959595")
                        ),
                        size: "MEDIUM"
                      ),
                      align: "RIGHT"
                    ),
                    width: "MINIMIZE"
                  )
                },
                marginBelow: "LESS"
              )
            },
            link: if(
              fv!item.disabled,
              {},
              if(
                local!isMultiSelect,
                a!dynamicLink(
                  saveInto: if(
                    fv!item.selected,
                    a!save(fv!item.selected, fn!false()),
                    a!save(fv!item.selected, fn!true())
                  )
                ),
                if(
                  fv!item.selected,
                  a!dynamicLink(),
                  a!dynamicLink(
                    saveInto: {
                      a!forEach(
                        items: local!cards,
                        expression: a!save(fv!item.selected, fn!false())
                      ),
                      a!save(fv!item.selected, fn!true())
                    }
                  )
                )
              )
            ),
            padding: "STANDARD",
            style: if(
              fv!item.disabled,
              if(fv!item.selected, "#f0f0f0", "#fafafa"),
              if(
                fv!item.selected,
                "#EEEEFE",
                "TRANSPARENT"
              )
            ),
            tooltip: fv!item.tooltip,
            accessibilityText: "option " & fv!index & " of " & length(local!cards) & if(fv!item.selected, ", selected, ", ", ") & "toggle button, " & "to select or de-select this option, press return.",
            shape: "SEMI_ROUNDED",
            borderColor: if(
              fv!item.disabled,
              if(fv!item.selected, "#898989", fn!null()),
              if(fv!item.selected, "ACCENT", fn!null())
            )
          )
        )
      },
      cardWidth: local!cardWidth, 
      fillContainer: true()
    ),
    marginBelow: "NONE",
    accessibilityText: if(
      local!isMultiSelect,
      "Multi select Group, ",
      "Single Select Group, "
    )
  )
)
```
