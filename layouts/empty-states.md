---
status: "stable"
last_updated: "2023-11-15"
---

# Empty States

Used to depict when the UI has no content to display. Empty states can be used to communicate intent and action with your user. A well designed empty state makes a great first impression, guides the user so that they complete their tasks intuitively and minimizes confusion.

## Design

### Initial Use
![](https://github.com/user-attachments/assets/c4251b79-854a-43f5-8a2e-254ede50c319)

Use this pattern when the application is first opened by a user and there is no content to display.
* Explain the intent of the app to the user and how it can be used. This can be particularly useful for new users who may not be familiar with the app.
* Provide a clear action for the user to proceed as part of their journey in using the application.

### No Results to Display

![](https://github.com/user-attachments/assets/588db892-f449-4200-8baf-3f5164f94266)
Provide the user with possible options if their search action turns up with no results

![](https://github.com/user-attachments/assets/cc46a041-04b1-497a-addc-26d71146aba5)
Simplistic depiction of an empty state within a section of the UI
<br></br>

Use this pattern if a user action (e.g.: search) shows no results. Provide options to help the user achieve their intended outcome.
* Provide the user with possible options if their search action turns up with no results
* Mention explicitly when no data exists for key value pairs. Avoid using this pattern in grids. In grids, use “-” instead.

### Errors

![empty-states-errors](https://github.com/user-attachments/assets/8d699349-e3b1-464f-87f7-2feb011b4d4c)

Use this pattern when a user enters an error or exception state.
* State the error in layperson terms. Avoid using technical terms or system jargon.
* Provide users with actionable suggestions how to exit the error or exception state

## Development

### Initial Use
```
a!headerContentLayout(
  header: {},
  contents: {
    a!columnsLayout(
      columns: {
        a!columnLayout(
          contents: {
            a!cardLayout(
              height: "AUTO",
              style: "#FAFAFC",
              marginBelow: "NONE",
              showBorder: false
            ),
            a!cardLayout(
              contents: {
                a!richTextDisplayField(
                  labelPosition: "COLLAPSED",
                  value: {
                    a!richTextIcon(
                      icon: "tasks-alt",
                      color: "ACCENT",
                      size: "MEDIUM_PLUS"
                    )
                  },
                  align: "CENTER"
                )
              },
              link: a!dynamicLink(label: "Dynamic Link", saveInto: {}),
              tooltip: "Workflow",
              height: "AUTO",
              style: "#FAFAFC",
              marginBelow: "NONE",
              showBorder: false
            ),
            a!cardLayout(
              contents: {
                a!richTextDisplayField(
                  labelPosition: "COLLAPSED",
                  value: {
                    a!richTextIcon(
                      icon: "users",
                      color: "#6C6C75",
                      size: "MEDIUM_PLUS"
                    )
                  },
                  align: "CENTER"
                )
              },
              link: a!dynamicLink(label: "Dynamic Link", saveInto: {}),
              tooltip: "User Groups",
              height: "AUTO",
              style: "#FAFAFC",
              marginBelow: "NONE",
              showBorder: false
            ),
            a!cardLayout(
              contents: {
                a!richTextDisplayField(
                  labelPosition: "COLLAPSED",
                  value: {
                    a!richTextIcon(
                      icon: "database",
                      color: "#6C6C75",
                      size: "MEDIUM_PLUS"
                    )
                  },
                  align: "CENTER"
                )
              },
              link: a!dynamicLink(label: "Dynamic Link", saveInto: {}),
              tooltip: "Data",
              height: "AUTO",
              style: "#FAFAFC",
              marginBelow: "NONE",
              showBorder: false
            ),
            a!cardLayout(
              contents: {
                a!richTextDisplayField(
                  labelPosition: "COLLAPSED",
                  value: {
                    a!richTextIcon(
                      icon: "bell",
                      color: "#6C6C75",
                      size: "MEDIUM_PLUS"
                    )
                  },
                  align: "CENTER"
                )
              },
              link: a!dynamicLink(label: "Dynamic Link", saveInto: {}),
              tooltip: "Team",
              height: "AUTO",
              style: "#fafafc",
              marginBelow: "NONE",
              showBorder: false
            ),
            a!cardLayout(
              height: "EXTRA_TALL",
              style: "#FAFAFC",
              /*style: "#020a51",*/
              marginBelow: "NONE",
              showBorder: false
            ),
            a!cardLayout(
              height: "EXTRA_TALL",
              style: "#FAFAFC",
              marginBelow: "NONE",
              showBorder: false
            )
          },
          width: "EXTRA_NARROW"
        ),
        a!columnLayout(
          contents: {
            a!imageField(
              label: "",
              labelPosition: "COLLAPSED",
              images: {
                a!documentImage(document: cons!onboard_63)
              },
              size: "LARGE_PLUS",
              isThumbnail: false,
              style: "STANDARD",
              align: "CENTER",
              marginAbove: "EVEN_MORE"
            ),
            a!columnsLayout(
              columns: {
                a!columnLayout(contents: {}),
                a!columnLayout(
                  contents: {
                    a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: {
                        a!richTextItem(
                          text: {
                            "Welcome to  App Configuration Manager"
                          },
                          size: "MEDIUM_PLUS",
                          style: { "STRONG" }
                        )
                      },
                      align: "CENTER",
                      marginBelow: "MORE"
                    ),
                    a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: {
                        "Use our guided configuration to set up your app to meet your organization’s needs. You can set up alerts, groups, user permissions and more."
                      },
                      align: "CENTER",
                      marginBelow: "MORE"
                    ),
                    a!buttonArrayLayout(
                      buttons: {
                        a!buttonWidget(
                          label: "Get Started",
                          icon: "hand-o-right",
                          size: "LARGE",
                          style: "OUTLINE"
                        )
                      },
                      align: "CENTER",
                      marginBelow: "NONE"
                    )
                  },
                  width: "MEDIUM_PLUS"
                ),
                a!columnLayout(contents: {})
              }
            )
          }
        )
      },
      showDividers: true,
      spacing: "NONE"
    )
  },
  backgroundColor: "#FAFAFC",
  contentsPadding: "NONE"
)
```

### No Results to Display
```
a!headerContentLayout(
  header: {},
  contents: {
    a!columnsLayout(
      columns: {
        a!columnLayout(
          contents: {
            a!columnsLayout(
              columns: {
                a!columnLayout(
                  contents: {
                    a!cardLayout(
                      contents: {
                        a!cardLayout(
                          contents: {},
                          height: "SHORT_PLUS",
                          style: "#fafafc",
                          marginBelow: "STANDARD",
                          showBorder: false
                        ),
                        a!columnsLayout(
                          columns: {
                            a!columnLayout(contents: {}),
                            a!columnLayout(
                              contents: {
                                a!columnsLayout(
                                  columns: {
                                    a!columnLayout(contents: {}),
                                    a!columnLayout(
                                      contents: {
                                        a!sideBySideLayout(
                                          items: {
                                            a!sideBySideItem(
                                              item: a!richTextDisplayField(labelPosition: "COLLAPSED", value: {}),
                                              width: "MINIMIZE"
                                            ),
                                            a!sideBySideItem(
                                              item: a!textField(
                                                label: "Search",
                                                labelPosition: "ABOVE",
                                                value: "Automobiles",
                                                saveInto: {},
                                                refreshAfter: "UNFOCUS",
                                                validations: {}
                                              )
                                            ),
                                            a!sideBySideItem(
                                              item: a!buttonArrayLayout(
                                                buttons: {
                                                  a!buttonWidget(
                                                    label: "Search",
                                                    icon: "search",
                                                    size: "SMALL",
                                                    style: "OUTLINE"
                                                  )
                                                },
                                                align: "START",
                                                marginBelow: "NONE"
                                              ),
                                              width: "MINIMIZE"
                                            ),
                                            a!sideBySideItem(
                                              item: a!richTextDisplayField(labelPosition: "COLLAPSED", value: {}),
                                              width: "MINIMIZE"
                                            )
                                          },
                                          alignVertical: "BOTTOM",
                                          spacing: "DENSE"
                                        )
                                      },
                                      width: "MEDIUM_PLUS"
                                    ),
                                    a!columnLayout(contents: {})
                                  },
                                  marginBelow: "EVEN_MORE"
                                ),
                                a!imageField(
                                  label: "",
                                  labelPosition: "COLLAPSED",
                                  images: {
                                    a!documentImage(document: cons!EMPTY_SEARCH)
                                  },
                                  size: "MEDIUM_PLUS",
                                  isThumbnail: false,
                                  style: "STANDARD",
                                  align: "CENTER"
                                ),
                                a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: { "No results found" },
                                      size: "MEDIUM_PLUS"
                                    )
                                  },
                                  align: "CENTER"
                                ),
                                a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: {
                                        "Try modifying your search terms, check your spelling or use fewer words."
                                      },
                                      color: "#6a6a6a",
                                      size: "MEDIUM"
                                    )
                                  },
                                  align: "CENTER",
                                  marginBelow: "MORE"
                                ),
                                a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: {
                                        "Still not sure what to do? Contact our "
                                      },
                                      color: "#6a6a6a",
                                      size: "STANDARD"
                                    ),
                                    a!richTextItem(
                                      text: {
                                        a!richTextItem(
                                          text: { "support team" },
                                          color: "ACCENT",
                                          size: "STANDARD"
                                        )
                                      },
                                      link: a!safeLink(
                                        uri: "http://www.test.com",
                                        openLinkIn: "NEW_TAB"
                                      ),
                                      linkStyle: "INLINE"
                                    ),
                                    a!richTextItem(
                                      text: { "." },
                                      color: "#6a6a6a",
                                      size: "STANDARD"
                                    )
                                  },
                                  align: "CENTER",
                                  marginBelow: "EVEN_MORE"
                                )
                              },
                              width: "WIDE"
                            ),
                            a!columnLayout(contents: {})
                          },
                          marginBelow: "EVEN_MORE"
                        ),
                        a!cardLayout(
                          contents: {},
                          height: "SHORT_PLUS",
                          style: "#fafafc",
                          marginBelow: "STANDARD",
                          showBorder: false
                        )
                      },
                      height: "AUTO",
                      style: "#fafafc",
                      padding: "MORE",
                      marginBelow: "STANDARD",
                      showBorder: false
                    )
                  }
                )
              },
              spacing: "NONE",
              stackWhen: { "NEVER" },
              showDividers: true
            )
          }
        )
      },
      spacing: "NONE",
      stackWhen: { "NEVER" }
    )
  },
  backgroundColor: "#fafafc",
  showWhen: true,
  contentsPadding: "NONE"
)
```

### Errors
```
a!headerContentLayout(
  header: {},
  contents: {
    a!cardLayout(
      contents: {},
      height: "SHORT",
      style: "TRANSPARENT",
      marginBelow: "STANDARD",
      showBorder: false
    ),
    a!cardLayout(
      contents: {
        a!columnsLayout(
          columns: {
            a!columnLayout(contents: {}, width: "EXTRA_NARROW"),
            a!columnLayout(
              contents: {
                a!sectionLayout(
                  label: "Unable to connect with service",
                  labelSize: "LARGE",
                  labelHeadingTag: "H1",
                  labelColor: "STANDARD",
                  contents: {
                    a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: {
                        a!richTextItem(
                          text: {
                            "We are unable to connect to the document reconciliation system. Here are some things to try: "
                          },
                          color: "STANDARD",
                          size: "MEDIUM"
                        )
                      },
                      marginAbove: "STANDARD",
                      marginBelow: "STANDARD"
                    ),
                    a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: {
                        a!richTextBulletedList(
                          items: {
                            a!richTextItem(text: { "Try again later" }, size: "MEDIUM"),
                            a!richTextItem(
                              text: { "Contact your system administrator" },
                              size: "MEDIUM"
                            )
                          }
                        )
                      },
                      marginAbove: "EVEN_LESS",
                      marginBelow: "MORE"
                    ),
                    a!buttonArrayLayout(
                      buttons: {
                        a!buttonWidget_23r3(
                          label: "Try Again",
                          style: "PRIMARY",
                          size: "STANDARD"
                        ),
                        a!buttonWidget_23r3(
                          label: "Back to Home",
                          style: "NORMAL",
                          size: "STANDARD"
                        )
                      },
                      align: "START",
                      marginAbove: "NONE",
                      marginBelow: "EVEN_MORE"
                    )
                  }
                )
              },
              width: "MEDIUM_PLUS"
            ),
            a!columnLayout(width: "NARROW")
          },
          alignVertical: "TOP",
          spacing: "STANDARD"
        )
      },
      height: "AUTO",
      style: "#FAFAFC",
      padding: "MORE",
      marginAbove: "MORE",
      marginBelow: "EVEN_MORE",
      showBorder: false
    )
  },
  backgroundColor: "#FAFAFC",
  contentsPadding: "NONE"
)
```
