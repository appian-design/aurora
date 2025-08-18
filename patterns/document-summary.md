---
status: "stable"
last_updated: "2023-11-6"
---

# Document Summary
Allow users to preview a document while easily scanning for relevant document details and actions

![](https://github.com/user-attachments/assets/2f521afb-770e-47a5-9c8b-14b08535f0bb)


## Design

### Navigation
Ensure that there is a back link to the full documents grid at the top left corner.

### Display
Use a two-column layout in which the first column displays the document preview and the second column displays the document details with a fixed column width set to “MEDIUM” or “MEDIUM_PLUS”. An icon used to symbolize the file type should be placed to the left of the document name and important metadata can be optionally displayed in tags to the right.

### Actions
For files that have a preview available, no “Download” record action is needed, as it is automatically included in the document viewer component. High-level record actions that apply to the document as a whole should be displayed as buttons at the top right. Actions associated with particular sections should be placed next to the corresponding section header, while actions specific to certain fields should be placed immediately next to the field value in a side by side layout.

### Empty State
![](https://github.com/user-attachments/assets/e8435b81-fbdc-49b7-b096-23d6ff4f5c10)

If the document cannot be previewed, display an empty state illustration and provide a link for the user to download the file.

## Development

```
a!localVariables(
  local!formPreviewAvailable: false(),
  a!headerContentLayout(
    backgroundColor: "#fafafc",
    contents: {
      a!richTextDisplayField(
        labelPosition: "COLLAPSED",
        value: {
          a!richTextItem(
            text: {
              a!richTextIcon(icon: "angle-left"),
              " ",
              "Back to all documents"
            },
            link: a!dynamicLink(),
            linkStyle: "STANDALONE"
          )
        }
      ),
      a!columnsLayout(
        columns: {
          a!columnLayout(
            contents: {
              a!sideBySideLayout(
                alignVertical: "MIDDLE",
                items: {
                  a!sideBySideItem(
                    width: "MINIMIZE",
                    item: a!headingField(
                      text: "Solicitation - HQ014723R0010.pdf",
                      size: "SMALL",
                      headingTag: "H2",
                      fontWeight: "SEMI_BOLD",
                      marginBelow: "NONE"
                    )
                  ),
                  a!sideBySideItem(
                    item: a!tagField(
                      labelPosition: "COLLAPSED",
                      tags: {
                        a!tagItem(
                          text: "Solicitation Section J",
                          backgroundColor: "#E2FAF9",
                          textColor: "#2C6770"
                        ),
                        a!tagItem(
                          text: "Award Section J",
                          backgroundColor: "#FFF6C9",
                          textColor: "#856C00"
                        )
                      },
                      size: "STANDARD",
                      marginBelow: "NONE"
                    ),
                    width: "MINIMIZE"
                  )
                },
                spacing: "STANDARD",
                marginBelow: "STANDARD"
              ),
              a!cardLayout(
                contents: {
                  a!cardLayout(
                    contents: {
                      a!sideBySideLayout(
                        items: {
                          a!sideBySideItem(
                            item: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextIcon(icon: "bars", color: "#ffffff")
                              }
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextItem(
                                  text: { "Standard Form 1449 - Solicita..." },
                                  color: "#ffffff"
                                )
                              }
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextItem(text: { "1 / 28" }, color: "#ffffff")
                              }
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextItem(text: { "|" }, color: "#b7b7b7")
                              }
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextIcon(icon: "minus", color: "#ffffff")
                              }
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextItem(text: { "97%" }, color: "#ffffff")
                              }
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextIcon(icon: "plus", color: "#ffffff")
                              }
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextItem(text: { "|" }, color: "#b7b7b7")
                              }
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextIcon(icon: "expand-alt", color: "#ffffff")
                              }
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextIcon(icon: "undo", color: "#ffffff")
                              }
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!richTextDisplayField(labelPosition: "COLLAPSED", value: {}),
                            width: "AUTO"
                          ),
                          a!sideBySideItem(
                            item: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextIcon(icon: "download", color: "#ffffff")
                              }
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextIcon(icon: "print", color: "#ffffff")
                              }
                            ),
                            width: "MINIMIZE"
                          ),
                          a!sideBySideItem(
                            item: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextIcon(icon: "ellipsis-v", color: "#ffffff")
                              }
                            ),
                            width: "MINIMIZE"
                          )
                        },
                        spacing: "SPARSE"
                      )
                    },
                    height: "AUTO",
                    style: "#2E2E35",
                    padding: "STANDARD",
                    marginBelow: "NONE",
                    showBorder: false
                  ),
                  a!cardLayout(
                    contents: {
                      a!cardLayout(
                        height: "EXTRA_TALL",
                        style: "#FFFFFF",
                        showBorder: false
                      ),
                      a!cardLayout(
                        height: "MEDIUM",
                        style: "#FFFFFF",
                        showBorder: false
                      )
                    },
                    height: "AUTO",
                    style: "#CBCBD0"
                  )
                },
                showWhen: local!formPreviewAvailable = true,
                style: "TRANSPARENT",
                shape: "SEMI_ROUNDED",
                padding: "NONE",
                marginBelow: "STANDARD",
                showBorder: false,
                showShadow: true
              ),
              a!cardLayout(
                contents: {
                  a!columnsLayout(
                    columns: {
                      a!columnLayout(
                        contents: {
                          a!imageField(
                            label: "",
                            labelPosition: "COLLAPSED",
                            images: {
                              a!webImage(
                                source: "https://raw.githubusercontent.com/pglevy/design-system-docs/main/assets/images/empty-state-image-2.png"
                              )
                            },
                            size: "MEDIUM_PLUS",
                            isThumbnail: false,
                            style: "STANDARD",
                            align: "CENTER",
                            marginAbove: "EVEN_MORE",
                            marginBelow: "STANDARD"
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: a!richTextItem(
                              text: "Preview Unavailable",
                              color: "#6C6C75",
                              size: "MEDIUM"
                            ),
                            align: "CENTER",
                            marginAbove: "LESS"
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: a!richTextItem(
                              text: "File format must be GIF, JPG, PDF, or PNG to preview.",
                              color: "SECONDARY",
                              size: "STANDARD"
                            ),
                            align: "CENTER",
                            marginBelow: "STANDARD"
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: {
                                  a!richTextIcon(icon: "download"),
                                  " ",
                                  "Download"
                                },
                                link: a!safeLink(
                                  uri: "www.google.com",
                                  openLinkIn: "NEW_TAB"
                                ),
                                linkStyle: "STANDALONE",
                                size: "STANDARD"
                              )
                            },
                            align: "CENTER",
                            marginAbove: "EVEN_LESS",
                            marginBelow: "EVEN_MORE"
                          )
                        }
                      )
                    }
                  )
                },
                height: "AUTO",
                showWhen: local!formPreviewAvailable = false,
                style: "NONE",
                shape: "SEMI_ROUNDED",
                padding: "STANDARD",
                marginBelow: "STANDARD",
                borderColor: "#EDEEFA"
              )
            }
          ),
          a!columnLayout(
            contents: {
              a!sideBySideLayout(
                items: {
                  a!sideBySideItem(
                    item: a!headingField(
                      text: "Details",
                      size: "SMALL",
                      headingTag: "H2",
                      fontWeight: "SEMI_BOLD",
                      marginBelow: "NONE"
                    ),
                    width: "MINIMIZE"
                  ),
                  a!sideBySideItem(
                    item: a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: {
                        a!richTextIcon(
                          icon: "pencil-square-o",
                          color: "ACCENT",
                          altText: "Edit",
                          link: a!dynamicLink(),
                          linkStyle: "STANDALONE"
                        )
                      },
                      align: "RIGHT"
                    ),
                    width: "AUTO"
                  )
                },
                alignVertical: "MIDDLE",
                spacing: "STANDARD",
                marginAbove: "EVEN_LESS",
                marginBelow: "STANDARD"
              ),
              a!cardLayout(
                contents: {
                  a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: a!richTextItem(
                      text: "Title",
                      color: "SECONDARY",
                      size: "SMALL"
                    ),
                    marginBelow: "EVEN_LESS"
                  ),
                  a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: a!richTextItem(text: "Testing")
                  ),
                  a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: a!richTextItem(
                      text: "Description",
                      color: "SECONDARY",
                      size: "SMALL"
                    ),
                    marginBelow: "EVEN_LESS"
                  ),
                  a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: a!richTextItem(text: "here is more text")
                  ),
                  a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: {
                      a!richTextItem(
                        text: { "Solicitation Section J Tagged On" },
                        color: "SECONDARY",
                        size: "SMALL"
                      )
                    },
                    marginBelow: "EVEN_LESS"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: {
                            a!richTextItem(
                              text: { "HT940223M0001 | Draft Solicitation" },
                              size: "STANDARD"
                            )
                          },
                          preventWrapping: true
                        )
                      )
                    }
                  ),
                  a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: {
                      a!richTextItem(
                        text: { "Award Section J Tagged On" },
                        color: "SECONDARY",
                        size: "SMALL"
                      )
                    },
                    marginBelow: "EVEN_LESS"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: {
                            a!richTextItem(
                              text: { "HT940223BC003 | Draft Award" },
                              size: "STANDARD"
                            )
                          },
                          preventWrapping: true
                        )
                      )
                    }
                  ),
                  a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: a!richTextItem(
                      text: "Page Count",
                      color: "SECONDARY",
                      size: "SMALL"
                    ),
                    marginBelow: "EVEN_LESS"
                  ),
                  a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: a!richTextItem(text: "20")
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: a!richTextItem(
                            text: "Folder Location",
                            color: "SECONDARY",
                            size: "SMALL"
                          ),
                          marginBelow: "NONE"
                        ),
                        width: "MINIMIZE"
                      )
                    },
                    spacing: "STANDARD",
                    marginBelow: "EVEN_LESS"
                  ),
                  a!sideBySideLayout(
                    items: {
                      a!sideBySideItem(
                        item: a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: a!richTextItem(
                            text: "Solicitations / Solicitation Documents"
                          ),
                          preventWrapping: true
                        )
                      )
                    }
                  ),
                  a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: {
                      a!richTextItem(
                        text: { "Originally Uploaded To" },
                        color: "SECONDARY",
                        size: "SMALL"
                      )
                    },
                    marginBelow: "EVEN_LESS"
                  ),
                  a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: {
                      a!richTextItem(
                        text: { "HT940223M0001 | Draft Solicitation" },
                        size: "STANDARD"
                      )
                    },
                    align: "LEFT",
                    marginBelow: "STANDARD"
                  )
                },
                height: "AUTO",
                style: "NONE",
                shape: "SEMI_ROUNDED",
                padding: "STANDARD",
                marginAbove: "EVEN_LESS",
                marginBelow: "STANDARD",
                borderColor: "#EDEEFA"
              ),
              a!sideBySideLayout(
                items: {
                  a!sideBySideItem(
                    item: a!headingField(
                      text: "Versions",
                      size: "SMALL",
                      headingTag: "H2",
                      fontWeight: "SEMI_BOLD",
                      marginBelow: "NONE"
                    )
                  ),
                  a!sideBySideItem(
                    item: a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: {
                        a!richTextItem(
                          text: {
                            a!richTextIcon(icon: "plus", altText: "Add"),
                            " ",
                            "New"
                          },
                          link: a!dynamicLink(),
                          linkStyle: "STANDALONE"
                        )
                      },
                      marginBelow: "NONE"
                    ),
                    width: "MINIMIZE"
                  )
                },
                marginAbove: "LESS"
              ),
              a!cardLayout(
                contents: {
                  a!gridField(
                    label: "Versions",
                    labelPosition: "COLLAPSED",
                    data: {
                      a!map(
                        version: "Latest",
                        name: "Statement_of_Work.pdf",
                        user: "Kyra Chan",
                        date: "Jun 12, 2023 5:00 PM"
                      ),
                      a!map(
                        version: "2",
                        name: "Statement_of_Work.pdf",
                        user: "Jon Stolte",
                        date: "Jun 8, 2023 5:00 PM"
                      ),
                      a!map(
                        version: "1",
                        name: "sow.pdf",
                        user: "Ben Lloyd",
                        date: "Jun 4, 2023 3:00 PM"
                      )
                    },
                    columns: {
                      a!gridColumn(
                        label: "Version",
                        value: fv!row.version,
                        width: "1X"
                      ),
                      a!gridColumn(
                        label: "Document Name",
                        value: fv!row.name,
                        width: "2X"
                      ),
                      a!gridColumn(
                        label: "Uploaded On",
                        value: fv!row.date,
                        width: "2X"
                      ),
                      a!gridColumn(
                        label: "",
                        value: a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: a!richTextIcon(
                            icon: "download",
                            altText: "Download",
                            link: a!dynamicLink(),
                            linkStyle: "STANDALONE"
                          )
                        ),
                        width: "ICON"
                      )
                    },
                    borderStyle: "LIGHT",
                    shadeAlternateRows: false
                  )
                },
                height: "AUTO",
                style: "NONE",
                shape: "SEMI_ROUNDED",
                padding: "STANDARD",
                marginAbove: "EVEN_LESS",
                marginBelow: "STANDARD",
                borderColor: "#EDEEFA"
              )
            },
            width: "MEDIUM_PLUS"
          )
        },
        marginAbove: "EVEN_LESS"
      )
    }
  )
)
```
