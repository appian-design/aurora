---
status: "stable"
last_updated: "2023-8-10"
---

# Notifications

Notifications are used to inform users about events in a solution

![](https://github.com/user-attachments/assets/b50e4f92-4eaf-4aa5-8cc8-9a0b8df54b76)

## Design

### Guidance
![](https://github.com/user-attachments/assets/c94591ce-5385-4c29-b6e9-06e188c8c603)

Use tags next to each tab to indicate the number of notifications. Display “10+” if there are more than 10.

### Empty States

![](https://github.com/user-attachments/assets/fa519e11-3a19-4cf7-b9c8-cf64cd852aa0)

Each tab will show a list of the 5 most recent notifications. If there are no notifications, the tab will be in an empty state.

### Accessibility

* Set the accessibilityText parameter on the currently selected tab (a!cardLayout) to “Selected”.
* Set accessibilityText parameter to “Read” for read notifications and “Unread” for unread notifications.
* Set caption text on the icons.

## Development

```
a!localVariables(
  local!unread: true(),
  a!columnsLayout(
    columns: {
      a!columnLayout(
        contents: {
          a!sectionLayout(
            label: "Notifications",
            labelSize: "EXTRA_SMALL",
            labelColor: "STANDARD",
            contents: {
              /*notification pattern*/
              a!cardLayout(
                contents: {
                  a!columnsLayout(
                    columns: {
                      /*Unread Tab*/
                      a!columnLayout(
                        contents: {
                          a!cardLayout(
                            contents: {
                              a!columnsLayout(
                                columns: {
                                  a!columnLayout(contents: {}),
                                  a!columnLayout(
                                    contents: {
                                      a!sideBySideLayout(
                                        items: {
                                          a!sideBySideItem(
                                            item: a!richTextDisplayField(
                                              labelPosition: "COLLAPSED",
                                              value: {
                                                a!richTextItem(
                                                  text: { "Unread" },
                                                  color: "STANDARD",
                                                  style: if(local!unread = true(), "STRONG", "PLAIN")
                                                )
                                              },
                                              align: "CENTER"
                                            ),
                                            width: "MINIMIZE"
                                          ),
                                          a!sideBySideItem(
                                            item: a!tagField(
                                              labelPosition: "COLLAPSED",
                                              tags: {
                                                a!tagItem(
                                                  text: "3",
                                                  backgroundColor: "#F2F4FD",
                                                  textColor: "#08088D"
                                                )
                                              },
                                              size: "SMALL",
                                              align: "START",
                                              marginAbove: "NONE",
                                              marginBelow: "NONE"
                                            ),
                                            width: "MINIMIZE"
                                          )
                                        },
                                        alignVertical: "MIDDLE",
                                        spacing: "STANDARD",
                                        marginAbove: "NONE",
                                        marginBelow: "NONE"
                                      )
                                    },
                                    width: "WIDE_PLUS"
                                  ),
                                  a!columnLayout(contents: {})
                                },
                                spacing: "DENSE"
                              )
                            },
                            link: a!dynamicLink(value: true(), saveInto: local!unread),
                            height: "AUTO",
                            style: "TRANSPARENT",
                            shape: "SQUARED",
                            padding: "STANDARD",
                            marginBelow: "NONE",
                            showBorder: false
                          ),
                          a!horizontalLine(
                            weight: "MEDIUM",
                            color: if(
                              local!unread = false(),
                              "#FFFFFF",
                              "ACCENT"
                            ),
                            marginBelow: "NONE"
                          ),
                          a!horizontalLine(
                            weight: "THIN",
                            color: "#EDEDF2",
                            marginBelow: "NONE"
                          )
                        }
                      ),
                      /*All notifications tab*/
                      a!columnLayout(
                        contents: {
                          a!cardLayout(
                            contents: {
                              a!columnsLayout(
                                columns: {
                                  a!columnLayout(contents: {}),
                                  a!columnLayout(
                                    contents: {
                                      a!sideBySideLayout(
                                        items: {
                                          a!sideBySideItem(
                                            item: a!richTextDisplayField(
                                              labelPosition: "COLLAPSED",
                                              value: {
                                                a!richTextItem(
                                                  text: { "All" },
                                                  color: "STANDARD",
                                                  style: if(local!unread = true(), "PLAIN", "STRONG")
                                                )
                                              },
                                              align: "CENTER"
                                            ),
                                            width: "MINIMIZE"
                                          ),
                                          a!sideBySideItem(
                                            item: a!tagField(
                                              label: "Tag Field",
                                              labelPosition: "COLLAPSED",
                                              tags: {
                                                a!tagItem(
                                                  text: "10+",
                                                  backgroundColor: "#F2F4FD",
                                                  textColor: "#08088D"
                                                )
                                              },
                                              size: "SMALL",
                                              marginAbove: "NONE",
                                              marginBelow: "NONE"
                                            ),
                                            width: "MINIMIZE"
                                          )
                                        },
                                        spacing: "STANDARD"
                                      )
                                    },
                                    width: "WIDE"
                                  ),
                                  a!columnLayout(contents: {})
                                }
                              )
                            },
                            link: a!dynamicLink(value: false(), saveInto: local!unread),
                            height: "AUTO",
                            style: "TRANSPARENT",
                            shape: "SQUARED",
                            padding: "STANDARD",
                            marginBelow: "NONE",
                            showBorder: false
                          ),
                          a!horizontalLine(
                            weight: "MEDIUM",
                            color: if(local!unread = true(), "#FFFFFF", "ACCENT"),
                            marginBelow: "NONE"
                          ),
                          a!horizontalLine(
                            weight: "THIN",
                            color: "#EDEDF2",
                            marginBelow: "NONE"
                          )
                        }
                      )
                    },
                    marginBelow: "NONE",
                    spacing: "NONE"
                  ),
                  a!cardLayout(
                    contents: {
                      a!cardLayout(
                        contents: {
                          /*all notifications*/
                          a!forEach(
                            items: {
                              a!map(
                                state: true(),
                                title: "Notification Title",
                                description: "Notification description",
                                time: "5 mins ago",
                                user: "System"
                              ),
                              a!map(
                                state: true(),
                                title: "Notification Title",
                                description: "An example of a long description...",
                                time: "1 hr ago",
                                user: "System"
                              ),
                              a!map(
                                state: true(),
                                title: "Notification Title",
                                description: "Notification description",
                                time: "15 hrs ago",
                                user: "John Doe"
                              ),
                              a!map(
                                state: false(),
                                title: "Notification Title",
                                description: "Notification description",
                                time: "1 day ago",
                                user: "Jane Doe"
                              ),
                              a!map(
                                state: false(),
                                title: "Notification Title",
                                description: "Notification description",
                                time: "Sept 29 9:00 AM EST",
                                user: "System"
                              )
                            },
                            expression: {
                              a!columnsLayout(
                                columns: {
                                  a!columnLayout(
                                    contents: {
                                      a!cardLayout(
                                        contents: {
                                          a!richTextDisplayField(
                                            labelPosition: "COLLAPSED",
                                            value: if(
                                              fv!item.state = true(),
                                              a!richTextIcon(
                                                icon: "envelope-o",
                                                color: "#08088D",
                                                size: "MEDIUM_PLUS"
                                              ),
                                              a!richTextIcon(
                                                icon: "envelope-open-o",
                                                color: "SECONDARY",
                                                size: "MEDIUM_PLUS"
                                              )
                                            ),
                                            align: "CENTER",
                                            marginAbove: "EVEN_LESS",
                                            marginBelow: "LESS"
                                          )
                                        },
                                        height: "AUTO",
                                        style: if(
                                          fv!item.state = true(),
                                          "#E9EDFC",
                                          "#FAFAFC"
                                        ),
                                        shape: "SEMI_ROUNDED",
                                        marginAbove: "EVEN_LESS",
                                        marginBelow: "EVEN_LESS",
                                        showBorder: false
                                      )
                                    },
                                    width: "EXTRA_NARROW"
                                  ),
                                  a!columnLayout(
                                    contents: {
                                      a!richTextDisplayField(
                                        labelPosition: "COLLAPSED",
                                        value: {
                                          a!richTextItem(text: fv!item.title, style: { "STRONG" })
                                        },
                                        marginBelow: "NONE"
                                      ),
                                      a!richTextDisplayField(
                                        labelPosition: "COLLAPSED",
                                        value: {
                                          a!richTextItem(
                                            text: fv!item.description,
                                            color: "SECONDARY",
                                            size: "SMALL"
                                          )
                                        },
                                        marginBelow: "NONE"
                                      ),
                                      a!richTextDisplayField(
                                        labelPosition: "COLLAPSED",
                                        value: {
                                          a!richTextItem(
                                            text: fv!item.user & " " & "•" & " " & fv!item.time,
                                            color: "SECONDARY",
                                            size: "SMALL"
                                          )
                                        },
                                        align: "LEFT",
                                        marginAbove: "NONE"
                                      )
                                    }
                                  ),
                                  a!columnLayout(
                                    contents: {
                                      a!columnsLayout(
                                        columns: {
                                          a!columnLayout(
                                            contents: {
                                              a!richTextDisplayField(
                                                labelPosition: "COLLAPSED",
                                                value: {
                                                  a!richTextIcon(icon: "ellipsis-v", color: "SECONDARY")
                                                },
                                                align: "RIGHT",
                                                marginAbove: "NONE",
                                                marginBelow: "NONE"
                                              )
                                            },
                                            width: "EXTRA_NARROW"
                                          )
                                        },
                                        alignVertical: "MIDDLE",
                                        marginAbove: "NONE",
                                        marginBelow: "NONE"
                                      )
                                    },
                                    width: "EXTRA_NARROW"
                                  )
                                },
                                alignVertical: "MIDDLE",
                                showWhen: local!unread = false(),
                                marginBelow: "NONE",
                                spacing: "DENSE"
                              ),
                              a!horizontalLine(
                                weight: "THIN",
                                color: "#EDEDF2",
                                marginAbove: "LESS",
                                marginBelow: "LESS",
                                showWhen: local!unread = false()
                              )
                            }
                          ),
                          /*unread notifications*/
                          a!forEach(
                            items: {
                              a!map(
                                state: true(),
                                title: "Notification Title",
                                description: "Notification description",
                                time: "5 mins ago",
                                user: "System"
                              ),
                              a!map(
                                state: true(),
                                title: "Notification Title",
                                description: "An example of a long description...",
                                time: "1 hr ago",
                                user: "System"
                              ),
                              a!map(
                                state: true(),
                                title: "Notification Title",
                                description: "Notification description",
                                time: "15 hrs ago",
                                user: "John Doe"
                              )
                            },
                            expression: {
                              a!columnsLayout(
                                columns: {
                                  a!columnLayout(
                                    contents: {
                                      a!cardLayout(
                                        contents: {
                                          a!richTextDisplayField(
                                            labelPosition: "COLLAPSED",
                                            value: if(
                                              fv!item.state = true(),
                                              a!richTextIcon(
                                                icon: "envelope-o",
                                                color: "#08088D",
                                                size: "MEDIUM_PLUS"
                                              ),
                                              a!richTextIcon(
                                                icon: "envelope-open-o",
                                                color: "SECONDARY",
                                                size: "MEDIUM_PLUS"
                                              )
                                            ),
                                            align: "CENTER",
                                            marginAbove: "EVEN_LESS",
                                            marginBelow: "LESS"
                                          )
                                        },
                                        height: "AUTO",
                                        style: if(
                                          fv!item.state = true(),
                                          "#E9EDFC",
                                          "#FAFAFC"
                                        ),
                                        shape: "SEMI_ROUNDED",
                                        marginAbove: "EVEN_LESS",
                                        marginBelow: "EVEN_LESS",
                                        showBorder: false
                                      )
                                    },
                                    width: "EXTRA_NARROW"
                                  ),
                                  a!columnLayout(
                                    contents: {
                                      a!richTextDisplayField(
                                        labelPosition: "COLLAPSED",
                                        value: {
                                          a!richTextItem(text: fv!item.title, style: { "STRONG" })
                                        },
                                        marginBelow: "NONE"
                                      ),
                                      a!richTextDisplayField(
                                        labelPosition: "COLLAPSED",
                                        value: {
                                          a!richTextItem(
                                            text: fv!item.description,
                                            color: "SECONDARY",
                                            size: "SMALL"
                                          )
                                        },
                                        marginBelow: "NONE"
                                      ),
                                      a!richTextDisplayField(
                                        labelPosition: "COLLAPSED",
                                        value: {
                                          a!richTextItem(
                                            text: fv!item.user & " " & "•" & " " & fv!item.time,
                                            color: "SECONDARY",
                                            size: "SMALL"
                                          )
                                        },
                                        align: "LEFT",
                                        marginAbove: "NONE"
                                      )
                                    }
                                  ),
                                  a!columnLayout(
                                    contents: {
                                      a!columnsLayout(
                                        columns: {
                                          a!columnLayout(
                                            contents: {
                                              a!richTextDisplayField(
                                                labelPosition: "COLLAPSED",
                                                value: {
                                                  a!richTextIcon(icon: "ellipsis-v", color: "SECONDARY")
                                                },
                                                align: "RIGHT",
                                                marginAbove: "NONE",
                                                marginBelow: "NONE"
                                              )
                                            },
                                            width: "EXTRA_NARROW"
                                          )
                                        },
                                        alignVertical: "MIDDLE",
                                        marginAbove: "NONE",
                                        marginBelow: "NONE"
                                      )
                                    },
                                    width: "EXTRA_NARROW"
                                  )
                                },
                                alignVertical: "MIDDLE",
                                showWhen: local!unread = true(),
                                marginBelow: "NONE",
                                spacing: "DENSE"
                              ),
                              a!horizontalLine(
                                weight: "THIN",
                                color: "#EDEDF2",
                                marginAbove: "LESS",
                                marginBelow: "LESS",
                                showWhen: local!unread = true()
                              )
                            }
                          )
                        },
                        padding: "EVEN_LESS",
                        marginBelow: "NONE",
                        showBorder: false()
                      ),
                      /*View all can be used as a link to a separate interface*/
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(text: { "View All" }, color: "STANDARD")
                        },
                        align: "CENTER",
                        marginAbove: "NONE",
                        marginBelow: "LESS"
                      )
                    },
                    padding: "LESS",
                    marginBelow: "NONE",
                    showBorder: false()
                  )
                },
                height: "AUTO",
                style: "#FFFFFF",
                shape: "SEMI_ROUNDED",
                padding: "NONE",
                marginBelow: "STANDARD",
                showBorder: false
              )
            }
            
          )
          
        },
        width: "MEDIUM"
      )
      
    }
  )
)
```
