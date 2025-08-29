---
status: "stable"
last_updated: "2025-08-29"
---

# Comment Thread

Comment threads display a chronological list of messages from different users on a single record

![](https://github.com/user-attachments/assets/8906877c-2083-4931-bffe-7e5a6e8cbcb1)

## Design

### Usage Guidance

#### Styling

Display each user's profile image if one is made available, otherwise use a stamp with the user's initials.

#### Display

To maintain a logical flow of discussion, comments should be presented in chronological order, with the newest comment displayed at the top of the list. Avoid showing all comments at once. Doing so risks overloading the page and distracting users from more relevant content. Instead, use pagination to show the first 5 comments.

#### Behavior

Editing or deleting comments should be restricted to the author of the respective comment, with these actions hidden behind an ellipse icon.

### Variants

#### Flat View
![](https://github.com/user-attachments/assets/70ca149e-2b50-4c37-87eb-feccd6a1d49c)

The flat view option shows comments chronologically in the order they were added. Flat view comments encourage single group discussion and keep things on topic. Adding a comment should be a persistent card at the top of the comments component. Only the author of the comment can edit or delete that comment, but any user has the ability to add in a new comment.

#### Threaded View
![](https://github.com/user-attachments/assets/76bdde20-2d90-4f62-a30e-4a1d5d0fe679)

A threaded design allows for multiple discussions to take place in the context of a single record. In a threaded view, comments are indented beneath the post to indicate embedded replies. For threaded replies, consider implementing a tag component that indicates when the author has responded to a specific thread. This will make it easier for users to identify when the original commenter has actively engaged in the conversation.

Due to how long each thread can get, adding a comment button action opens into an inline card when clicked on. The search bar will be hidden and the add action disabled when the inline card displays. Additionally, all users have the ability to pin a comment, which will show up in the pinned tab to allow for quick and easy navigation. Pinning a threaded comment should pin the entire thread, not just the parent comment.

## Development

### Variants

#### Flat View

```
a!cardLayout(
  contents: {
    a!cardLayout(
      contents: {
        a!sectionLayout(
          label: "",
          contents: {
            a!paragraphField(
              label: "Comment",
              labelPosition: "COLLAPSED",
              placeholder: "Add a comment",
              saveInto: {},
              refreshAfter: "UNFOCUS",
              height: "SHORT",
              validations: {}
            )
          },
          marginAbove: "EVEN_LESS"
        ),
        a!buttonArrayLayout(
          buttons: {
            a!buttonWidget(
              label: "Cancel",
              size: "SMALL",
              style: "LINK"
            ),
            a!buttonWidget(
              label: "Add Comment",
              size: "SMALL",
              style: "SOLID"
            )
          },
          align: "END",
          marginBelow: "EVEN_LESS"
        )
      },
      height: "AUTO",
      style: "#FAFAFA",
      shape: "SEMI_ROUNDED",
      marginAbove: "EVEN_LESS",
      marginBelow: "STANDARD",
      showBorder: false
    ),
    a!columnLayout(
      contents: {
        a!localVariables(
          local!desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
          a!sectionLayout(
            label: "",
            labelSize: "SMALL",
            labelHeadingTag: "H2",
            labelColor: "STANDARD",
            /* define based on your own interface */
            contents: {
              a!sideBySideLayout(
                marginAbove: "LESS",
                items: {
                  a!sideBySideItem(
                    item: a!stampField(
                      labelPosition: "COLLAPSED",
                      text: "JH",
                      backgroundColor: "#6C6C75",
                      contentColor: "#ffffff",
                      size: "TINY"
                    ),
                    width: "MINIMIZE"
                  ),
                  a!sideBySideItem(
                    item: a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: {
                        a!richTextItem(
                          text: { "Jane Henderson" },
                          color: "#2E2E35",
                          style: { "STRONG" }
                        ),
                        char(10),
                        a!richTextItem(
                          text: { "July 3 2023 2:30 PM" },
                          color: "#666666",
                          size: "SMALL"
                        )
                      }
                    )
                  ),
                  a!sideBySideItem(
                    item: a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: {
                        a!richTextIcon(icon: "ellipsis-v", color: "#6C6C75")
                      }
                    ),
                    width: "MINIMIZE"
                  )
                },
                marginBelow: "EVEN_LESS"
              ),
              a!richTextDisplayField(
                value: {
                  a!richTextItem(text: local!desc, size: "STANDARD")
                },
                marginBelow: "STANDARD"
              ),
              a!horizontalLine(marginAbove: "LESS"),
              a!sideBySideLayout(
                items: {
                  a!sideBySideItem(
                    item: a!stampField(
                      labelPosition: "COLLAPSED",
                      text: "WH",
                      backgroundColor: "#EDEEF2",
                      contentColor: "#2E2E35",
                      size: "TINY"
                    ),
                    width: "MINIMIZE"
                  ),
                  a!sideBySideItem(
                    item: a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: {
                        a!richTextItem(
                          text: { "William Hurt" },
                          color: "#2E2E35",
                          style: { "STRONG" }
                        ),
                        char(10),
                        a!richTextItem(
                          text: { "July 2 2023 11:05 AM" },
                          color: "#6C6C75",
                          size: "SMALL"
                        )
                      }
                    )
                  )
                },
                alignVertical: "MIDDLE",
                marginAbove: "LESS",
                marginBelow: "EVEN_LESS"
              ),
              a!richTextDisplayField(
                value: {
                  a!richTextItem(text: local!desc, size: "STANDARD")
                }
              ),
              a!horizontalLine(marginAbove: "LESS"),
              a!sideBySideLayout(
                marginAbove: "LESS",
                items: {
                  a!sideBySideItem(
                    item: a!stampField(
                      labelPosition: "COLLAPSED",
                      text: "BK",
                      backgroundColor: "#EDEEF2",
                      contentColor: "#2E2E35",
                      size: "TINY"
                    ),
                    width: "MINIMIZE"
                  ),
                  a!sideBySideItem(
                    item: a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: {
                        a!richTextItem(
                          text: { "Benjamin Keating" },
                          color: "#2E2E35",
                          style: { "STRONG" }
                        ),
                        char(10),
                        a!richTextItem(
                          text: { "July 1 2023 1:35 PM" },
                          color: "#6C6C75",
                          size: "SMALL"
                        )
                      }
                    )
                  )
                },
                marginBelow: "EVEN_LESS"
              ),
              a!richTextDisplayField(
                value: {
                  a!richTextItem(text: local!desc, size: "STANDARD")
                }
              ),
              a!horizontalLine(marginAbove: "LESS"),
              a!sideBySideLayout(
                marginAbove: "LESS",
                items: {
                  a!sideBySideItem(
                    item: a!stampField(
                      labelPosition: "COLLAPSED",
                      text: "TN",
                      backgroundColor: "#EDEEF2",
                      contentColor: "#2E2E35",
                      size: "TINY"
                    ),
                    width: "MINIMIZE"
                  ),
                  a!sideBySideItem(
                    item: a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: {
                        a!richTextItem(
                          text: { "Thuy Nhat" },
                          color: "#2E2E35",
                          style: { "STRONG" }
                        ),
                        a!richTextItem(
                          text: { " " },
                          color: "ACCENT",
                          style: { "STRONG" }
                        ),
                        char(10),
                        a!richTextItem(
                          text: { "July 1 2023 9:10 AM" },
                          color: "#6C6C75",
                          size: "SMALL"
                        )
                      }
                    )
                  )
                },
                marginBelow: "EVEN_LESS"
              ),
              a!richTextDisplayField(
                value: {
                  a!richTextItem(text: local!desc, size: "STANDARD")
                }
              ),
              a!horizontalLine(marginAbove: "LESS"),
              a!sideBySideLayout(
                marginAbove: "LESS",
                items: {
                  a!sideBySideItem(
                    item: a!stampField(
                      labelPosition: "COLLAPSED",
                      text: "LA",
                      backgroundColor: "#EDEEF2",
                      contentColor: "#2E2E35",
                      size: "TINY"
                    ),
                    width: "MINIMIZE"
                  ),
                  a!sideBySideItem(
                    item: a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: {
                        a!richTextItem(
                          text: { "Lawrence Anderson" },
                          color: "#2E2E35",
                          style: { "STRONG" }
                        ),
                        char(10),
                        a!richTextItem(
                          text: { "June 30 2023 5:45 PM" },
                          color: "#6C6C75",
                          size: "SMALL"
                        )
                      }
                    )
                  )
                },
                marginBelow: "EVEN_LESS"
              ),
              a!richTextDisplayField(
                value: {
                  a!richTextItem(text: local!desc, size: "STANDARD")
                },
                marginBelow: "STANDARD"
              )
            },
            marginBelow: "NONE"
          )
        ),
        a!horizontalLine(marginAbove: "LESS"),
        a!sideBySideLayout(
          items: {
            a!sideBySideItem(
              item: a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: {},
                align: "RIGHT"
              )
            ),
            a!sideBySideItem(
              item: a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: {
                  a!richTextItem(
                    text: {
                      a!richTextIcon(icon: "angle-double-left")
                    },
                    color: "#2e2e35",
                    size: "MEDIUM",
                    style: { "STRONG" }
                  )
                },
                align: "RIGHT"
              ),
              width: "MINIMIZE"
            ),
            a!sideBySideItem(
              item: a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: {
                  a!richTextItem(
                    text: { a!richTextIcon(icon: "angle-left") },
                    color: "#2e2e35",
                    size: "MEDIUM",
                    style: { "STRONG" }
                  )
                },
                align: "RIGHT"
              ),
              width: "MINIMIZE"
            ),
            a!sideBySideItem(
              item: a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: { a!richTextItem(text: { " " }, ) },
                align: "RIGHT"
              ),
              width: "MINIMIZE"
            ),
            a!sideBySideItem(
              item: a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: {
                  a!richTextItem(
                    text: {
                      a!richTextItem(text: { "1 - 5 " }, style: { "STRONG" }),
                      "of 8"
                    },
                    size: "STANDARD"
                  )
                },
                align: "RIGHT"
              ),
              width: "MINIMIZE"
            ),
            a!sideBySideItem(
              item: a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: { a!richTextItem(text: { " " }, ) },
                align: "RIGHT"
              ),
              width: "MINIMIZE"
            ),
            a!sideBySideItem(
              item: a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: {
                  a!richTextItem(
                    text: { a!richTextIcon(icon: "angle-right") },
                    color: "ACCENT",
                    size: "MEDIUM",
                    style: { "STRONG" }
                  )
                },
                align: "RIGHT"
              ),
              width: "MINIMIZE"
            ),
            a!sideBySideItem(
              item: a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: {
                  a!richTextItem(
                    text: {
                      a!richTextIcon(icon: "angle-double-right")
                    },
                    color: "ACCENT",
                    size: "MEDIUM",
                    style: { "STRONG" }
                  )
                },
                align: "RIGHT"
              ),
              width: "MINIMIZE"
            )
          },
          alignVertical: "MIDDLE",
          spacing: "NONE"
        )
      },
      width: "AUTO"
    )
  },
  height: "AUTO",
  style: "NONE",
  shape: "SEMI_ROUNDED",
  padding: "STANDARD",
  marginBelow: "STANDARD",
  borderColor: "#EDEEFA"
)
```

#### Threaded View

```
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
                    a!richTextItem(text: "All", style: "STRONG")
                  },
                  align: "CENTER",
                  marginBelow: "EVEN_LESS"
                )
              },
              accessibilityText: "Selected",
              marginBelow: "NONE",
              showBorder: false
            ),
            a!horizontalLine(
              weight: "MEDIUM",
              color: "ACCENT",
              marginBelow: "NONE"
            )
          },
          width: "NARROW"
        ),
        a!columnLayout(
          contents: {
            a!cardLayout(
              contents: {
                a!sideBySideLayout(
                  items: {
                    a!sideBySideItem(),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: "Pinned",
                            color: "STANDARD",
                            style: ""
                          )
                        },
                        align: "CENTER",
                        marginBelow: "NONE"
                      ),
                      width: "MINIMIZE"
                    ),
                    a!sideBySideItem(
                      item: a!tagField(
                        labelPosition: "COLLAPSED",
                        tags: a!tagItem(
                          text: "2",
                          backgroundColor: "#EDEEF2",
                          textColor: "#2E2E35"
                        ),
                        size: "SMALL"
                      )
                    ),
                    a!sideBySideItem()
                  },
                  marginBelow: "EVEN_LESS"
                )
              },
              marginBelow: "NONE",
              showBorder: false
            ),
            a!horizontalLine(
              weight: "MEDIUM",
              color: "#EDEDF2",
              marginBelow: "NONE"
            )
          },
          width: "NARROW"
        ),
        a!columnLayout(
          contents: {
            a!horizontalLine(
              weight: "MEDIUM",
              color: "#EDEDF2",
              marginBelow: "NONE"
            )
          }
        )
      },
      alignVertical: "BOTTOM",
      marginAbove: "LESS",
      marginBelow: "NONE",
      spacing: "NONE"
    ),
    a!horizontalLine(marginBelow: "NONE"),
    a!cardLayout(
      contents: {
        a!sectionLayout(
          label: "",
          contents: {
            a!columnsLayout(
              columns: {
                a!columnLayout(
                  contents: {
                    a!localVariables(
                      local!desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
                      local!add: true(),  
                      a!sectionLayout(
                        label: "",
                        labelSize: "SMALL",
                        labelHeadingTag: "H2",
                        labelColor: "STANDARD",
                        /* define based on your own interface */
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!buttonArrayLayout(
                                  buttons: {
                                    a!buttonWidget(
                                      label: "Add Comment",
                                      icon: "plus",
                                      saveInto: a!save(local!add, not(local!add)),
                                      size: "SMALL",
                                      style: "OUTLINE",
                                      color: "SECONDARY", 
                                      showWhen: if(local!add, false, true)
                                    )
                                  },
                                  align: "START"
                                )
                              ),
                              a!sideBySideItem(
                                item: a!textField(
                                  label: "Search ",
                                  labelPosition: "COLLAPSED",
                                  instructions: "",
                                  placeholder: "Search Comments",
                                  saveInto: {},
                                  refreshAfter: "UNFOCUS",
                                  showWhen: if(local!add, false, true),
                                  validations: {}
                                )
                              )
                            }
                          ),
                          a!cardLayout(
                            contents: {
                              a!paragraphField(
                                label: "Comment",
                                labelPosition: "COLLAPSED",
                                placeholder: "Add a comment",
                                saveInto: {},
                                refreshAfter: "UNFOCUS",
                                height: "MEDIUM",
                                validations: {}
                              ),
                              a!columnsLayout(
                                columns: {
                                  a!columnLayout(
                                    contents: {
                                      a!sideBySideLayout(
                                        items: {
                                          a!sideBySideItem(
                                            item: a!pickerFieldUsers(
                                              label: "Tag Users",
                                              labelPosition: "ABOVE",
                                              placeholder: "Search Users",
                                              saveInto: {},
                                              validations: {}
                                            )
                                          ),
                                          a!sideBySideItem(
                                            item: a!pickerFieldDocuments(
                                              label: "Link Documents",
                                              labelPosition: "ABOVE",
                                              saveInto: {},
                                              validations: {}
                                            )
                                          ),
                                          a!sideBySideItem(
                                            item: a!radioButtonField(
                                              label: "Visibility",
                                              labelPosition: "ABOVE",
                                              helpTooltip: "Private means only internal employees can view. Public means anyone with access to the case can view.",
                                              choiceLabels: { "Public", "Private" },
                                              choiceValues: { 1, 2 },
                                              saveInto: {},
                                              choiceLayout: "COMPACT",
                                              validations: {}
                                            )
                                          )
                                        },
                                        alignVertical: "TOP"
                                      ),
                                      a!sideBySideLayout(
                                        items: {
                                          a!sideBySideItem(
                                            item: a!buttonArrayLayout(
                                              buttons: {
                                                a!buttonWidget(
                                                  label: "Cancel",
                                                  saveInto: a!save(local!add, not(local!add)),
                                                  size: "SMALL",
                                                  style: "LINK"
                                                )
                                              },
                                              align: "END",
                                              marginBelow: "NONE"
                                            )
                                          ),
                                          a!sideBySideItem(
                                            item: a!buttonArrayLayout(
                                              buttons: {
                                                a!buttonWidget(
                                                  label: "Add Comment",
                                                  saveInto: a!save(local!add, not(local!add)),
                                                  size: "SMALL",
                                                  style: "SOLID"
                                                )
                                              },
                                              align: "END",
                                              marginBelow: "NONE"
                                            ),
                                            width: "MINIMIZE"
                                          )
                                        },
                                        marginAbove: "NONE",
                                        marginBelow: "NONE"
                                      )
                                    }
                                  )
                                },
                                alignVertical: "BOTTOM",
                                marginBelow: "LESS"
                              )
                            },
                            height: "AUTO",
                            showWhen: local!add,
                            style: "#FAFAFA",
                            shape: "SEMI_ROUNDED",
                            padding: "LESS",
                            marginBelow: "STANDARD",
                            borderColor: "#EDEEFA"
                          ),
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  labelPosition: "COLLAPSED",
                                  text: "JH",
                                  backgroundColor: "#6C6C75",
                                  contentColor: "#ffffff",
                                  size: "TINY"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: { "Jane Henderson" },
                                      color: "#2E2E35",
                                      style: { "STRONG" }
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: { "July 3 2023 2:30 PM" },
                                      color: "#666666",
                                      size: "SMALL"
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(icon: "ellipsis-v", color: "#6C6C75")
                                  }
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(icon: "bookmark-o", color: "#6C6C75")
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            marginBelow: "EVEN_LESS"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: local!desc, size: "STANDARD")
                            }
                          ),
                          a!columnsLayout(
                            columns: {
                              a!columnLayout(contents: {}, width: "1X"),
                              a!columnLayout(
                                contents: {
                                  a!cardLayout(
                                    contents: {
                                      a!sideBySideLayout(
                                        items: {
                                          a!sideBySideItem(
                                            item: a!stampField(
                                              labelPosition: "COLLAPSED",
                                              text: "JH",
                                              backgroundColor: "#6C6C75",
                                              contentColor: "#ffffff",
                                              size: "TINY"
                                            ),
                                            width: "MINIMIZE"
                                          ),
                                          a!sideBySideItem(
                                            item: a!richTextDisplayField(
                                              labelPosition: "COLLAPSED",
                                              value: {
                                                a!richTextItem(
                                                  text: { "Jane Henderson" },
                                                  color: "#2E2E35",
                                                  style: { "STRONG" }
                                                ),
                                                char(10),
                                                a!richTextItem(
                                                  text: { "July 3 2023 2:30 PM" },
                                                  color: "#666666",
                                                  size: "SMALL"
                                                )
                                              }
                                            )
                                          ),
                                          a!sideBySideItem(
                                            item: a!richTextDisplayField(
                                              labelPosition: "COLLAPSED",
                                              value: {
                                                a!richTextIcon(icon: "ellipsis-v", color: "#6C6C75")
                                              }
                                            ),
                                            width: "MINIMIZE"
                                          )
                                        },
                                        marginBelow: "EVEN_LESS"
                                      ),
                                      a!richTextDisplayField(
                                        value: {
                                          a!richTextItem(text: local!desc, size: "STANDARD")
                                        }
                                      )
                                    },
                                    height: "AUTO",
                                    style: "TRANSPARENT",
                                    marginBelow: "EVEN_LESS",
                                    showBorder: false,
                                    decorativeBarPosition: "START",
                                    decorativeBarColor: "#CBCBD0"
                                  )
                                },
                                width: "WIDE_PLUS"
                              )
                            }
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: { a!richTextIcon(icon: "reply"), " Reply" },
                                color: "#000000"
                              )
                            }
                          ),
                          a!horizontalLine(marginAbove: "LESS"),
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  labelPosition: "COLLAPSED",
                                  text: "WH",
                                  backgroundColor: "#EDEEF2",
                                  contentColor: "#2E2E35",
                                  size: "TINY"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: { "William Hurt" },
                                      color: "#2E2E35",
                                      style: { "STRONG" }
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: { "July 2 2023 11:05 AM" },
                                      color: "#6C6C75",
                                      size: "SMALL"
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(icon: "bookmark-o", color: "#6C6C75")
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginAbove: "LESS",
                            marginBelow: "EVEN_LESS"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: local!desc, size: "STANDARD")
                            }
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: { a!richTextIcon(icon: "reply"), " Reply" },
                                color: "#000000"
                              )
                            }
                          ),
                          a!horizontalLine(marginAbove: "LESS"),
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  labelPosition: "COLLAPSED",
                                  text: "BK",
                                  backgroundColor: "#EDEEF2",
                                  contentColor: "#2E2E35",
                                  size: "TINY"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: { "Benjamin Keating" },
                                      color: "#2E2E35",
                                      style: { "STRONG" }
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: { "July 1 2023 1:35 PM" },
                                      color: "#6C6C75",
                                      size: "SMALL"
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(icon: "bookmark-o", color: "#6C6C75")
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            marginAbove: "LESS",
                            marginBelow: "EVEN_LESS"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: local!desc, size: "STANDARD")
                            }
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: { a!richTextIcon(icon: "reply"), " Reply" },
                                color: "#000000"
                              )
                            }
                          ),
                          a!horizontalLine(marginAbove: "LESS"),
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  labelPosition: "COLLAPSED",
                                  text: "TN",
                                  backgroundColor: "#EDEEF2",
                                  contentColor: "#2E2E35",
                                  size: "TINY"
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: { "Thuy Nhat" },
                                      color: "#2E2E35",
                                      style: { "STRONG" }
                                    ),
                                    a!richTextItem(
                                      text: { " " },
                                      color: "ACCENT",
                                      style: { "STRONG" }
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: { "July 1 2023 9:10 AM" },
                                      color: "#6C6C75",
                                      size: "SMALL"
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(icon: "bookmark-o", color: "#6C6C75")
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            marginAbove: "LESS",
                            marginBelow: "EVEN_LESS"
                          ),
                          a!richTextDisplayField(
                            value: {
                              a!richTextItem(text: local!desc, size: "STANDARD")
                            }
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: { a!richTextIcon(icon: "reply"), " Reply" },
                                color: "#000000"
                              )
                            }
                          ),
                          a!horizontalLine(marginAbove: "LESS")
                        },
                        marginAbove: "EVEN_LESS",
                        marginBelow: "NONE"
                      )
                    ),
                    a!sideBySideLayout(
                      items: {
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {},
                            align: "RIGHT"
                          )
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: {
                                  a!richTextIcon(icon: "angle-double-left")
                                },
                                color: "#2e2e35",
                                size: "MEDIUM",
                                style: { "STRONG" }
                              )
                            },
                            align: "RIGHT"
                          ),
                          width: "MINIMIZE"
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: { a!richTextIcon(icon: "angle-left") },
                                color: "#2e2e35",
                                size: "MEDIUM",
                                style: { "STRONG" }
                              )
                            },
                            align: "RIGHT"
                          ),
                          width: "MINIMIZE"
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: { a!richTextItem(text: { " " }) },
                            align: "RIGHT"
                          ),
                          width: "MINIMIZE"
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: {
                                  a!richTextItem(text: { "1 - 5 " }, style: { "STRONG" }),
                                  "of 8"
                                },
                                size: "STANDARD"
                              )
                            },
                            align: "RIGHT"
                          ),
                          width: "MINIMIZE"
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: { a!richTextItem(text: { " " }) },
                            align: "RIGHT"
                          ),
                          width: "MINIMIZE"
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: { a!richTextIcon(icon: "angle-right") },
                                color: "ACCENT",
                                size: "MEDIUM",
                                style: { "STRONG" }
                              )
                            },
                            align: "RIGHT"
                          ),
                          width: "MINIMIZE"
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: {
                                  a!richTextIcon(icon: "angle-double-right")
                                },
                                color: "ACCENT",
                                size: "MEDIUM",
                                style: { "STRONG" }
                              )
                            },
                            align: "RIGHT"
                          ),
                          width: "MINIMIZE"
                        )
                      },
                      alignVertical: "MIDDLE",
                      spacing: "NONE"
                    )
                  },
                  width: "AUTO"
                )
              }
            )
          },
          marginBelow: "NONE"
        )
      },
      height: "AUTO",
      style: "NONE",
      shape: "SQUARED",
      padding: "STANDARD",
      marginBelow: "NONE",
      showBorder: false,
      showShadow: false
    )
  },
  height: "AUTO",
  style: "NONE",
  shape: "SEMI_ROUNDED",
  padding: "NONE",
  marginBelow: "NONE",
  borderColor: "#EDEEFA"
)
```
