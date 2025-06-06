---
status: "stable"
last_updated: "2025-06-03"
---

# Cards Guidance

Cards are containers used to group content together. They allow the user to view information and take actions.

![](https://github.com/user-attachments/assets/ff51f723-9446-49c7-8933-c0a13800853a)

## Design

### Variants

#### Floating Cards

![](https://github.com/user-attachments/assets/5b3915b1-2bfd-4640-9c43-6877005e8611)

Show reference information in a card when going for a minimalist look in a modal dialog.

#### Sidebar

![](https://github.com/user-attachments/assets/1db791fe-4953-4d52-9f7c-51c3d2b15d37)

Use the sidebar option on a form that uses a full page layout to provide reference information.

#### Semi-Rounded Cards

![](https://github.com/user-attachments/assets/e8c828d6-3c3f-4ca0-8f0e-1b0452e717e3)

Use semi-rounded cards if the card is being used as an information container, for example, KPI cards, lists, and reference information.

**Exception:** Use squared cards when the card is flush against the header or applied as a sidebar.

#### Drop Shadows and Card Border

![](https://github.com/user-attachments/assets/49fa7140-d8a5-4c6c-85b3-a6ab81d459fc)

When using a transparent gray background, add a drop shadow to cards and avoid displaying the card border. For white backgrounds, display the card border but avoid applying a drop shadow.

#### Decorative Bar

![](https://github.com/user-attachments/assets/a81046b5-8637-47e7-a517-096fba347a23)

To indicate reference information cards, use the accent color decorative bar at the top. Avoid applying the decorative bar for multiple cards that are side by side, for example, KPI cards. The decorative bar should be used to establish visual prominence to helpful information within a busy interface.

#### Empty State

![image](https://github.com/user-attachments/assets/00b77d48-67ba-41aa-9f1d-7089c8b210cc)

Use this pattern if there is no content available to display and provide forward flow to help the user with content they might be looking for.

If applicable, provide a prominent action for the user so that they are able to add useful content.

![image](https://github.com/user-attachments/assets/d2ba8296-6eaf-45f7-a5ae-e206e099b06c)

Mention explicitly when no data exists for key value pairs. Avoid using this pattern in grids. In grids, use “-” instead.

### Usage

#### Avoid Cards Within Cards

Placing cards within cards can create unnecessary borders and lines that crowd the interface. If you are looking for a way to group content, use column and section dividers instead.

#### Padding

Use standard padding instead of the default padding to create more whitespace in dense UIs.

## Development

```
a!headerContentLayout(
  header: {},
  contents: {
    a!columnsLayout(
      columns: {
        a!columnLayout(
          contents: {
            a!sectionLayout(
              label: "Advanced Settings",
              labelSize: "SMALL",
              labelColor: "STANDARD",
              contents: {
                a!cardLayout(
                  contents: {
                    a!sectionLayout(
                      label: "",
                      contents: {
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: { "Watchers" }
                              ),
                              width: "2X"
                            ),
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: { "No watchers available" },
                                    color: "#6C6C75",
                                    style: { "EMPHASIS" }
                                  )
                                }
                              ),
                              width: "4X"
                            )
                          }
                        )
                      },
                      divider: "BELOW"
                    ),
                    a!sectionLayout(
                      label: "",
                      contents: {
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: { "Related Cases" }
                              ),
                              width: "2X"
                            ),
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: { "No related cases available" },
                                    color: "#6C6C75",
                                    style: { "EMPHASIS" }
                                  )
                                }
                              ),
                              width: "4X"
                            )
                          }
                        )
                      },
                      divider: "BELOW"
                    ),
                    a!sectionLayout(
                      label: "",
                      contents: {
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: { "Tags" }
                              ),
                              width: "2X"
                            ),
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: { "No tags available" },
                                    color: "#6C6C75",
                                    style: { "EMPHASIS" }
                                  )
                                }
                              ),
                              width: "4X"
                            )
                          }
                        )
                      },
                      divider: "NONE"
                    )
                  },
                  height: "AUTO",
                  style: "NONE",
                  shape: "SEMI_ROUNDED",
                  padding: "STANDARD",
                  marginBelow: "STANDARD",
                  showBorder: false,
                  showShadow: true
                )
              }
            ),
            a!sectionLayout(
              label: "Alerts",
              labelSize: "SMALL",
              labelColor: "STANDARD",
              contents: {
                a!cardLayout(
                  contents: {
                    a!sectionLayout(
                      label: "",
                      contents: {
                        a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: {
                            a!richTextIcon(
                              icon: "bell-slash-o",
                              color: "#6C6C75",
                              size: "LARGE_PLUS"
                            )
                          },
                          align: "CENTER",
                          marginAbove: "STANDARD"
                        ),
                        a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: {
                            a!richTextItem(
                              text: { "No Alerts set up" },
                              size: "MEDIUM"
                            )
                          },
                          align: "CENTER",
                          marginBelow: "NONE"
                        ),
                        a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: {
                            a!richTextItem(
                              text: { "Nowʼs a good time to set one up!" },
                              color: "#6C6C75",
                              size: "SMALL"
                            )
                          },
                          align: "CENTER",
                          marginAbove: "EVEN_LESS",
                          marginBelow: "STANDARD"
                        ),
                        a!buttonArrayLayout(
                          buttons: {
                            a!buttonWidget(
                              label: "New Alert",
                              icon: "plus",
                              size: "SMALL",
                              style: "OUTLINE"
                            )
                          },
                          align: "CENTER",
                          marginAbove: "EVEN_LESS",
                          marginBelow: "STANDARD"
                        )
                      },
                      marginBelow: "EVEN_LESS"
                    )
                  },
                  height: "AUTO",
                  style: "NONE",
                  shape: "SEMI_ROUNDED",
                  padding: "STANDARD",
                  marginBelow: "STANDARD",
                  showBorder: false,
                  showShadow: true
                )
              }
            )
          },
          width: "MEDIUM"
        )
      },
      spacing: "STANDARD",
      stackWhen: { "NEVER" }
    )
  },
  backgroundColor: "#FAFAFC",
  showWhen: true,
  contentsPadding: "STANDARD"
)
```
