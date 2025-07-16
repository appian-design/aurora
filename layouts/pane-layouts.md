---
status: "stable"
last_updated: "2024-12-19"
---

# Pane Layouts

Use a!PaneLayout() to display independently scrolling sections within the interface

![](https://github.com/user-attachments/assets/9b9b551a-a404-4dc7-a1d7-b76a52bcf6d2)

## Design

### Structure

![](https://github.com/user-attachments/assets/b153e99c-40b3-42b7-8148-fab8a1fa2c9b)

Depending on the need, use a two or three pane layout
* Set an “AUTO” width for the content pane and “NARROW_PLUS” or “MEDIUM” for the secondary panes (left or right or both)
* Set the secondary panes to the default background color or to white (#FFF). If the secondary pane is interactive (includes filters, form fields or actions), set a white background
* Set the content pane to the default background color

### Usage

#### List-Detail View

![](https://github.com/user-attachments/assets/7d9a4f6d-b1e3-45ad-9ad7-cc70eb71cf93)

A message inbox that highlights selected message and contents

<img width="1614" alt="pane-layouts-list-view2" src="https://github.com/user-attachments/assets/905f3454-760a-4282-a4dd-286bdd7f9eb7" />

A document list which displays the document in the content pane

Use to present a list of clickable items with detailed information.

#### Configuration

![](https://github.com/user-attachments/assets/dc09902b-5e16-4cf0-8d31-ff9af9fee4b2)

Use to establish provide the ability to set preferences and settings

#### Filters

![](https://github.com/user-attachments/assets/6c8365bb-1a0b-46b4-8102-da0e661fe8e4)

Filters with data set on the right pane

Use to filter data presented in the content area

#### In Forms

![](https://github.com/user-attachments/assets/61001a05-f2c5-432c-a0b1-99e30497e103)

Single page form with reference information on the right pane

![](https://github.com/user-attachments/assets/920fea8e-f45e-4ffc-8ae3-d8229a67f0d3)

Wizard form with steps on the left pane

Use to showcase steps or provide reference information

Note: If providing reference information, set a fixed width for the right pane at “NARROW_PLUS” or “MEDIUM” depending on the content. 

## Development

### List-Detail View
```
a!localVariables(
  local!messages: {
    a!map(from: "Marie Richards",  stampColor: "#990000", to: "me",                             subject: "Request for additional information",   time: "11:29 AM",  isRead: true),
    a!map(from: "Brandon Pittman", stampColor: "#3d85c6", to: "me, Rita Ramos, and Jorge Pena", subject: "Upcoming facility audit",              time: "10:52 AM",  isRead: true),
    a!map(from: "Clay Nelson",     stampColor: "#38761d", to: "me and Alice Dixon",             subject: "Complete onboarding for new supplier", time: "Yesterday", isRead: false),
    a!map(from: "Darnell Warner",  stampColor: "#351c75", to: "me",                             subject: "Upcoming facility audit",              time: "Yesterday", isRead: false),
    a!map(from: "Marie Richards",  stampColor: "#990000", to: "me",                             subject: "Request for additional information",   time: "Jul 1",     isRead: true),
    a!map(from: "Brandon Pittman", stampColor: "#3d85c6", to: "me, Rita Ramos, and Jorge Pena", subject: "Upcoming facility audit",              time: "Jul 1",     isRead: true),
    a!map(from: "Clay Nelson",     stampColor: "#38761d", to: "me and Alice Dixon",             subject: "Complete onboarding for new supplier", time: "Jul 1",     isRead: true),
    a!map(from: "Darnell Warner",  stampColor: "#351c75", to: "me",                             subject: "Upcoming facility audit",              time: "Jul 1",     isRead: true),
    a!map(from: "Marie Richards",  stampColor: "#990000", to: "me",                             subject: "Request for additional information",   time: "Jul 1",     isRead: true),
    a!map(from: "Brandon Pittman", stampColor: "#3d85c6", to: "me, Rita Ramos, and Jorge Pena", subject: "Upcoming facility audit",              time: "Jul 1",     isRead: true),
    a!map(from: "Clay Nelson",     stampColor: "#38761d", to: "me and Alice Dixon",             subject: "Complete onboarding for new supplier", time: "Jul 1",     isRead: true),
    a!map(from: "Darnell Warner",  stampColor: "#351c75", to: "me",                             subject: "Upcoming facility audit",              time: "Jul 1",     isRead: true),
    a!map(from: "Marie Richards",  stampColor: "#990000", to: "me",                             subject: "Request for additional information",   time: "Jul 1",     isRead: true),
    a!map(from: "Brandon Pittman", stampColor: "#3d85c6", to: "me, Rita Ramos, and Jorge Pena", subject: "Upcoming facility audit",              time: "Jul 1",     isRead: true),
    a!map(from: "Clay Nelson",     stampColor: "#38761d", to: "me and Alice Dixon",             subject: "Complete onboarding for new supplier", time: "Jul 1",     isRead: true),
    a!map(from: "Darnell Warner",  stampColor: "#351c75", to: "me",                             subject: "Upcoming facility audit",              time: "Jul 1",     isRead: true),
    a!map(from: "Marie Richards",  stampColor: "#990000", to: "me",                             subject: "Request for additional information",   time: "Jul 1",     isRead: true),
    a!map(from: "Brandon Pittman", stampColor: "#3d85c6", to: "me, Rita Ramos, and Jorge Pena", subject: "Upcoming facility audit",              time: "Jul 1",     isRead: true),
    a!map(from: "Clay Nelson",     stampColor: "#38761d", to: "me and Alice Dixon",             subject: "Complete onboarding for new supplier", time: "Jul 1",     isRead: true),
    a!map(from: "Darnell Warner",  stampColor: "#351c75", to: "me",                             subject: "Upcoming facility audit",              time: "Jul 1",     isRead: true)
  },
  local!sideNavPages: {
    a!map(icon: "envelope",             name: "Messages" & " (" & length(where(not(local!messages.isRead))) & ")"),
    a!map(icon: "user-tag",             name: "My Cases"),
    a!map(icon: "exclamation-triangle", name: "Overdue Cases"),
    a!map(icon: "tasks",                name: "All Cases"),
    a!map(icon: "files-solid",          name: "Knowledge Base"),
    a!map(icon: "search",               name: "Advanced Search")
  },
  local!selectedPage: 1,
  local!selectedMessageIndex: 2,
  local!showMessage: true,
  if(not(a!isPageWidth({"TABLET_PORTRAIT", "PHONE"})),
  /* Pane layout for non-mobile interfaces */
  a!paneLayout(
    panes: {
      /* Side navigation column for other page widths */
      a!pane(
        contents: {
          a!cardLayout(
            contents: {
              a!forEach(
                items: local!sideNavPages,
                expression: a!cardLayout(
                  contents: {
                    a!sideBySideLayout(
                      items: {
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: char(448),
                                color: if(
                                  local!selectedPage = fv!index,
                                  "STANDARD",
                                  "#3B464E"
                                ),
                                size: "LARGE"
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
                                size: "MEDIUM",
                                style: if(
                                  local!selectedPage = fv!index,
                                  "STRONG",
                                  "PLAIN"
                                )
                              )
                            }
                          )
                        )
                      },
                      alignVertical: "MIDDLE",
                      spacing: "DENSE"
                    )
                  },
                  /* Link to update selected page */
                  link: a!dynamicLink(),
                  style: "#3B464E",
                  padding: "NONE",
                  showBorder: false,
                  accessibilityText: if(
                    local!selectedPage = fv!index,
                    "Selected tab.",
                    "Unselected tab. Press enter to select tab."
                  )
                )
              )
            },
            style: "#3B464E",
            showBorder: false
          )
        },
        width: "NARROW",
        backgroundColor: "#3B464E",
        padding: "EVEN_LESS",
        showWhen: not(a!isPageWidth({"TABLET_PORTRAIT", "PHONE"}))
      ),
      /* Message list pane */
      a!pane(
        contents: {
          /* Page name on phone */
          a!cardLayout(
            contents: {
              a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: a!richTextItem(
                  text: index(
                    local!sideNavPages.name,
                    local!selectedPage,
                    {}
                  ),
                  size: "MEDIUM",
                  style: "STRONG"
                )
              )
            },
            showWhen: a!isPageWidth("PHONE"),
            showBorder: false
          ),
          /* Message cards */
          a!forEach(
            items: local!messages,
            expression: a!cardLayout(
              contents: {
                a!sideBySideLayout(
                  items: {
                    a!sideBySideItem(
                      item: a!stampField(
                        labelPosition: "COLLAPSED",
                        text: initials(fv!item.from),
                        backgroundColor: fv!item.stampColor,
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
                            text: fv!item.from,
                            style: if(
                              fv!item.isRead,
                              "PLAIN",
                              "STRONG"
                            )
                          ),
                          " ",
                          a!richTextItem(
                            text: "to" & " " & fv!item.to,
                            color: "SECONDARY"
                          ),
                          char(10),
                          a!richTextItem(
                            text: fv!item.subject,
                            color: "STANDARD",
                            style: if(
                              fv!item.isRead,
                              "PLAIN",
                              "STRONG"
                            )
                          )
                        }
                      )
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: fv!item.time,
                            color: if(
                              fv!item.isRead,
                              "SECONDARY",
                              "STANDARD"
                            ),
                            style: if(
                              fv!item.isRead,
                              "PLAIN",
                              "STRONG"
                            )
                          )
                        }
                      ),
                      width: "MINIMIZE"
                    )
                  },
                  alignVertical: "MIDDLE"
                )
              },
              /* Link to update selected message and mark message as read */
              link: a!dynamicLink(
                saveInto: {
                  if(
                    a!isPageWidth("PHONE"),
                    a!save(local!showMessage, true),
                    {}
                  )
                }
              ),
              style: if(
                and(
                  not(a!isPageWidth("PHONE")),
                  local!selectedMessageIndex = fv!index
                ),
                "NONE",
                "#f0f0f0"
              ),
              padding: if(
                not(a!isPageWidth("TABLET_LANDSCAPE")),
                "STANDARD",
                "LESS"
              ),
              showBorder: false
            )
          )
        },
        width: if(
          a!isPageWidth({"DESKTOP_NARROW", "TABLET_LANDSCAPE", "TABLET_PORTRAIT"}),
          "NARROW_PLUS",
          "MEDIUM_PLUS"
        ),
        backgroundColor: "#f0f0f0",
        padding: "EVEN_LESS",
        showWhen: if(
          a!isPageWidth("PHONE"),
          not(local!showMessage),
          true
        )
      ),
      /* Selected message pane */
      a!pane(
        contents: {
          a!cardLayout(
            contents: {
              /* Back button to messages list on phone */
              a!sectionLayout(
                contents: {
                  a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: a!richTextItem(
                      text: {
                        a!richTextIcon(
                          icon: "chevron-left",
                          altText: "Back arrow"
                        ),
                        " ",
                        "All messages"
                      },
                      link: a!dynamicLink(value: false, saveInto: local!showMessage),
                      linkStyle: "STANDALONE"
                    )
                  )
                },
                showWhen: a!isPageWidth("PHONE"),
                divider: "BELOW"
              ),
              a!localVariables(
                local!selectedMessage: index(
                  local!messages,
                  local!selectedMessageIndex,
                  {}
                ),
                local!selectedMessageAttachments: {
                  a!map(id: 1, name: "Facility Fact Sheet.pdf", size: "178KB", type: "pdf")
                },
                local!numOfAttachments: length(local!selectedMessageAttachments),
                /* Number of columns for attachments */
                local!numOfCols: 2,
                {
                  /* Selected message header */
                  a!sectionLayout(
                    contents: {
                      a!columnsLayout(
                        columns: {
                          a!columnLayout(
                            contents: {
                              a!stampField(
                                labelPosition: "COLLAPSED",
                                text: initials(local!selectedMessage.from),
                                backgroundColor: local!selectedMessage.stampColor,
                                contentColor: "STANDARD",
                                size: if(a!isPageWidth("PHONE"), "TINY", "SMALL")
                              )
                            },
                            width: "EXTRA_NARROW"
                          ),
                          a!columnLayout(
                            contents: {
                              a!sideBySideLayout(
                                items: {
                                  a!sideBySideItem(
                                    item: a!stampField(
                                      labelPosition: "COLLAPSED",
                                      text: initials(local!selectedMessage.from),
                                      backgroundColor: local!selectedMessage.stampColor,
                                      contentColor: "STANDARD",
                                      size: if(
                                        a!isPageWidth({ "TABLET_PORTRAIT", "PHONE" }),
                                        "TINY",
                                        "SMALL"
                                      )
                                    ),
                                    width: "MINIMIZE",
                                    showWhen: false
                                  ),
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      labelPosition: "COLLAPSED",
                                      value: {
                                        local!selectedMessage.from,
                                        " ",
                                        a!richTextItem(text: "to me" & ", ", color: "SECONDARY"),
                                        a!richTextItem(text: "Rita Ramos", color: "ACCENT"),
                                        a!richTextItem(text: ", " & "and" & " ", color: "SECONDARY"),
                                        a!richTextItem(text: "Jorge Pena", color: "ACCENT")
                                      },
                                      preventWrapping: true
                                    )
                                  ),
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      labelPosition: "COLLAPSED",
                                      value: {
                                        a!richTextItem(
                                          text: local!selectedMessage.time,
                                          color: "SECONDARY",
                                          size: if(
                                            a!isPageWidth({ "TABLET_PORTRAIT", "PHONE" }),
                                            "SMALL",
                                            "STANDARD"
                                          )
                                        )
                                      },
                                      align: "RIGHT"
                                    ),
                                    width: "MINIMIZE"
                                  )
                                },
                                alignVertical: "MIDDLE",
                                marginBelow: "NONE"
                              ),
                              a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: a!richTextItem(
                                  text: local!selectedMessage.subject,
                                  size: if(
                                    a!isPageWidth({"TABLET_LANDSCAPE", "TABLET_PORTRAIT", "PHONE"}),
                                    "MEDIUM",
                                    "MEDIUM_PLUS"
                                  )
                                ),
                                preventWrapping: true
                              )
                            },
                            width: if(
                              a!isPageWidth("PHONE"),
                              "MEDIUM_PLUS",
                              "AUTO"
                            )
                          )
                        },
                        alignVertical: "MIDDLE",
                        stackWhen: "NEVER"
                      )
                    },
                    divider: "BELOW"
                  ),
                  /* Selected message text */
                  a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis, nunc ut hendrerit imperdiet, ex tellus maximus magna, ac imperdiet ante est sed eros. Curabitur vitae placerat velit, eu aliquet est. Sed sed justo ac augue porta volutpat. Donec vitae euismod quam, vitae faucibus mauris. Duis venenatis, sem non mattis feugiat, quam libero malesuada augue, at mollis odio neque sed massa. Morbi elit eros, euismod sed justo sed, volutpat suscipit orci. Vestibulum tincidunt ex diam, nec sagittis nulla malesuada ac. Donec vitae libero scelerisque, blandit lorem eget, porttitor nisl. Phasellus sed rhoncus metus, et porttitor elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tortor diam, viverra sit amet massa vel, ornare tincidunt nibh. Vestibulum tristique vitae urna sed aliquam.",
                      char(10),
                      char(10),
                      "Quisque velit urna, varius quis tempor non, luctus sit amet massa. Nunc a quam sed lorem pretium ultrices. In varius, felis non viverra tincidunt, lorem augue ultricies purus, ac efficitur nunc ipsum at odio. Morbi imperdiet aliquam nibh, ut rhoncus nibh lacinia eget. Duis aliquam in arcu ac ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ut tincidunt nunc. Nunc eget fringilla lorem, et euismod tortor. Nunc in tincidunt eros. Vivamus pellentesque lectus ultricies tellus volutpat, vel mattis magna iaculis. Aliquam sollicitudin fermentum mi vitae tempor. In sagittis pharetra est, nec venenatis urna dignissim quis. Sed tempus felis urna, non pulvinar neque mollis non.",
                      char(10),
                      char(10),
                      "Morbi pellentesque dolor id nisl pretium, in imperdiet risus pretium. Curabitur maximus suscipit ornare. Etiam iaculis odio vitae sapien posuere, nec mattis sapien dignissim. Nam vestibulum justo nec tincidunt dignissim. Vestibulum aliquet nisl sed orci egestas, in placerat erat semper. Curabitur sed ex ex. Fusce feugiat nibh purus, ut faucibus neque dapibus sit amet. Vestibulum vitae arcu lacinia, ultricies lorem ac, finibus felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec turpis lorem, dignissim id auctor non, pretium eget augue. In a luctus lacus. Pellentesque convallis porttitor metus id accumsan. Donec ut diam tempus, sagittis enim feugiat, vehicula erat. Vestibulum vitae ex a tortor hendrerit scelerisque in at leo. Vivamus lectus velit, sollicitudin sed lacinia ut, pretium sed magna. Sed vel felis mollis, luctus sem ac, facilisis velit."
                    }
                  ),
                  /* Selected message attachments */
                  a!sectionLayout(
                    contents: {
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: local!numOfAttachments & " " & if(local!numOfAttachments > 1, "Attachments", "Attachment")
                      ),
                      a!columnsLayout(
                        columns: a!forEach(
                          items: enumerate(local!numOfCols) + 1,
                          expression: a!localVariables(
                            local!colIndex: fv!index,
                            a!columnLayout(
                              contents: {
                                a!forEach(
                                  items: local!selectedMessageAttachments,
                                  expression: a!cardLayout(
                                    contents: {
                                      a!sideBySideLayout(
                                        items: {
                                          a!sideBySideItem(
                                            item: a!richTextDisplayField(
                                              labelPosition: "COLLAPSED",
                                              value: {
                                                a!richTextIcon(
                                                  icon: "file-" & fv!item.type & "-o",
                                                  altText: fv!item.type,
                                                  color: "ACCENT",
                                                  size: "LARGE"
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
                                                  style: "STRONG"
                                                ),
                                                char(10),
                                                a!richTextItem(text: fv!item.size, color: "SECONDARY")
                                              }
                                            )
                                          )
                                        },
                                        alignVertical: "MIDDLE"
                                      )
                                    },
                                    link: a!dynamicLink(),
                                    /* This logic assigns each card to the right column */
                                    showWhen: or(mod(fv!index, local!numOfCols) = local!colIndex, and(mod(fv!index, local!numOfCols) = 0, local!colIndex = local!numOfCols)),
                                    marginBelow: "LESS"
                                  )
                                )
                              },
                              width: "MEDIUM"
                            )
                          )
                        ),
                        marginAbove: "NONE",
                        marginBelow: "NONE",
                        spacing: "DENSE",
                        stackWhen: {"TABLET_LANDSCAPE", "TABLET_PORTRAIT", "PHONE"}
                      )
                    },
                    showWhen: local!numOfAttachments > 0,
                    divider: "ABOVE"
                  )
                }
              )
            },
            padding: "MORE",
            marginBelow: "STANDARD",
            showBorder: false
          )
        },
        padding: "EVEN_LESS",
        showWhen: if(
          a!isPageWidth("PHONE"),
          local!showMessage,
          true
        )
      )
    }
  ),
  /* Navigation optimized for mobile and small screens */
  a!headerContentLayout(
    header: {
      a!cardLayout(
        contents: {
          a!cardLayout(
            contents: {
              /* Top navigation for tablet portrait */
              a!columnsLayout(
                columns: {
                  a!forEach(
                    local!sideNavPages,
                    a!columnLayout(
                      contents: {
                        a!cardLayout(
                          contents: {
                            a!richTextDisplayField(
                              value: {
                                a!richTextItem(
                                  text: fv!item.name,
                                  color: "STANDARD",
                                  size: "SMALL",
                                  style: if(
                                    local!selectedPage = fv!index,
                                    "STRONG",
                                    "PLAIN"
                                  )
                                )
                              },
                              preventWrapping: true,
                              align: "CENTER"
                            )
                          },
                          /* Link to update selected page */
                          link: a!dynamicLink(),
                          style: "#3B464E",
                          padding: "LESS",
                          showBorder: false,
                          decorativeBarPosition: "BOTTOM",
                          decorativeBarColor: if(
                            local!selectedPage = fv!index,
                            "#ffffff",
                            "#3B464E"
                          ),
                          accessibilityText: if(
                            local!selectedPage = fv!index,
                            "Selected tab.",
                            "Unselected tab. Press enter to select tab."
                          )
                        )
                      },
                      width: "NARROW"
                    )
                  )
                },
                showWhen: a!isPageWidth("TABLET_PORTRAIT"),
                marginBelow: "NONE",
                spacing: "NONE"
              ),
              /* Top navigation for phone */
              a!columnsLayout(
                columns: {
                  a!forEach(
                    items: local!sideNavPages,
                    expression: a!columnLayout(
                      contents: {
                        a!stampField(
                          icon: fv!item.icon,
                          backgroundColor: if(
                            local!selectedPage = fv!index,
                            "#ffffff",
                            "#3B464E"
                          ),
                          contentColor: if(
                            local!selectedPage = fv!index,
                            "ACCENT",
                            "STANDARD"
                          ),
                          /* Link to update selected page */
                          link: a!dynamicLink(),
                          size: "SMALL",
                          align: "CENTER",
                          tooltip: fv!item.name,
                          marginBelow: "NONE",
                          accessibilityText: if(
                            local!selectedPage = fv!index,
                            "Selected tab.",
                            "Unselected tab. Press enter to select tab."
                          )
                        ),
                        a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: a!richTextItem(
                            text: fv!item.name,
                            size: "SMALL",
                            style: if(
                              local!selectedPage = fv!index,
                              "STRONG",
                              "PLAIN"
                            )
                          ),
                          showWhen: not(a!isPageWidth("PHONE")),
                          align: "CENTER"
                        )
                      }
                    )
                  )
                },
                showWhen: a!isPageWidth("PHONE"),
                spacing: if(a!isPageWidth("PHONE"), "NONE", "SPARSE"),
                stackWhen: "NEVER"
              )
            },
            showWhen: a!isPageWidth({"TABLET_PORTRAIT", "PHONE"}),
            style: "#3B464E",
            showBorder: false
          ),
          a!columnsLayout(
            columns: {
              /* Side navigation column for other page widths */
              a!columnLayout(
                contents: {
                  a!cardLayout(
                    contents: {
                      a!forEach(
                        items: local!sideNavPages,
                        expression: a!cardLayout(
                          contents: {
                            a!sideBySideLayout(
                              items: {
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      a!richTextItem(
                                        text: char(448),
                                        color: if(
                                          local!selectedPage = fv!index,
                                          "STANDARD",
                                          "#3B464E"
                                        ),
                                        size: "LARGE"
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
                                        size: "MEDIUM",
                                        style: if(
                                          local!selectedPage = fv!index,
                                          "STRONG",
                                          "PLAIN"
                                        )
                                      )
                                    }
                                  )
                                )
                              },
                              alignVertical: "MIDDLE",
                              spacing: "DENSE"
                            )
                          },
                          /* Link to update selected page */
                          link: a!dynamicLink(),
                          style: "#3B464E",
                          padding: "NONE",
                          showBorder: false,
                          accessibilityText: if(
                            local!selectedPage = fv!index,
                            "Selected tab.",
                            "Unselected tab. Press enter to select tab."
                          )
                        )
                      )
                    },
                    style: "#3B464E",
                    showBorder: false
                  ),
                  a!cardLayout(
                    height: "EXTRA_TALL",
                    showWhen: not(a!isPageWidth("PHONE")),
                    style: "#3B464E",
                    showBorder: false
                  ),
                  a!cardLayout(
                    height: "EXTRA_TALL",
                    showWhen: not(a!isPageWidth("PHONE")),
                    style: "#3B464E",
                    showBorder: false
                  ),
                  a!cardLayout(
                    height: "EXTRA_SHORT",
                    showWhen: not(a!isPageWidth("PHONE")),
                    style: "#3B464E",
                    showBorder: false
                  )
                },
                width: "NARROW",
                showWhen: not(a!isPageWidth({"TABLET_PORTRAIT", "PHONE"}))
              ),
              /* Message list column */
              a!columnLayout(
                contents: {
                  /* Page name on phone */
                  a!cardLayout(
                    contents: {
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: a!richTextItem(
                          text: index(
                            local!sideNavPages.name,
                            local!selectedPage,
                            {}
                          ),
                          size: "MEDIUM",
                          style: "STRONG"
                        )
                      )
                    },
                    showWhen: a!isPageWidth("PHONE"),
                    showBorder: false
                  ),
                  /* Message cards */
                  a!forEach(
                    items: local!messages,
                    expression: a!cardLayout(
                      contents: {
                        a!sideBySideLayout(
                          items: {
                            a!sideBySideItem(
                              item: a!stampField(
                                labelPosition: "COLLAPSED",
                                text: initials(fv!item.from),
                                backgroundColor: fv!item.stampColor,
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
                                    text: fv!item.from,
                                    style: if(
                                      fv!item.isRead,
                                      "PLAIN",
                                      "STRONG"
                                    )
                                  ),
                                  " ",
                                  a!richTextItem(
                                    text: "to" & " " & fv!item.to,
                                    color: "SECONDARY"
                                  ),
                                  char(10),
                                  a!richTextItem(
                                    text: fv!item.subject,
                                    color: "STANDARD",
                                    style: if(
                                      fv!item.isRead,
                                      "PLAIN",
                                      "STRONG"
                                    )
                                  )
                                }
                              )
                            ),
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: fv!item.time,
                                    color: if(
                                      fv!item.isRead,
                                      "SECONDARY",
                                      "STANDARD"
                                    ),
                                    style: if(
                                      fv!item.isRead,
                                      "PLAIN",
                                      "STRONG"
                                    )
                                  )
                                }
                              ),
                              width: "MINIMIZE"
                            )
                          },
                          alignVertical: "MIDDLE"
                        )
                      },
                      /* Link to update selected message and mark message as read */
                      link: a!dynamicLink(
                        saveInto: {
                          if(
                            a!isPageWidth("PHONE"),
                            a!save(local!showMessage, true),
                            {}
                          )
                        }
                      ),
                      style: if(
                        and(
                          not(a!isPageWidth("PHONE")),
                          local!selectedMessageIndex = fv!index
                        ),
                        "NONE",
                        "#f0f0f0"
                      ),
                      padding: if(
                        not(a!isPageWidth("TABLET_LANDSCAPE")),
                        "STANDARD",
                        "LESS"
                      ),
                      showBorder: false
                    )
                  )
                },
                width: if(
                  a!isPageWidth({"DESKTOP_NARROW", "TABLET_LANDSCAPE", "TABLET_PORTRAIT"}),
                  "NARROW_PLUS",
                  "MEDIUM_PLUS"
                ),
                showWhen: if(
                  a!isPageWidth("PHONE"),
                  not(local!showMessage),
                  true
                )
              ),
              /* Selected message column */
              a!columnLayout(
                contents: {
                  a!cardLayout(
                    contents: {
                      /* Back button to messages list on phone */
                      a!sectionLayout(
                        contents: {
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: a!richTextItem(
                              text: {
                                a!richTextIcon(
                                  icon: "chevron-left",
                                  altText: "Back arrow"
                                ),
                                " ",
                                "All messages"
                              },
                              link: a!dynamicLink(value: false, saveInto: local!showMessage),
                              linkStyle: "STANDALONE"
                            )
                          )
                        },
                        showWhen: a!isPageWidth("PHONE"),
                        divider: "BELOW"
                      ),
                      a!localVariables(
                        local!selectedMessage: index(
                          local!messages,
                          local!selectedMessageIndex,
                          {}
                        ),
                        local!selectedMessageAttachments: {
                          a!map(id: 1, name: "Facility Fact Sheet.pdf", size: "178KB", type: "pdf")
                        },
                        local!numOfAttachments: length(local!selectedMessageAttachments),
                        /* Number of columns for attachments */
                        local!numOfCols: 2,
                        {
                          /* Selected message header */
                          a!sectionLayout(
                            contents: {
                              a!columnsLayout(
                                columns: {
                                  a!columnLayout(
                                    contents: {
                                      a!stampField(
                                        labelPosition: "COLLAPSED",
                                        text: initials(local!selectedMessage.from),
                                        backgroundColor: local!selectedMessage.stampColor,
                                        contentColor: "STANDARD",
                                        size: if(a!isPageWidth("PHONE"), "TINY", "SMALL")
                                      )
                                    },
                                    width: "EXTRA_NARROW"
                                  ),
                                  a!columnLayout(
                                    contents: {
                                      a!sideBySideLayout(
                                        items: {
                                          a!sideBySideItem(
                                            item: a!stampField(
                                              labelPosition: "COLLAPSED",
                                              text: initials(local!selectedMessage.from),
                                              backgroundColor: local!selectedMessage.stampColor,
                                              contentColor: "STANDARD",
                                              size: if(
                                                a!isPageWidth({ "TABLET_PORTRAIT", "PHONE" }),
                                                "TINY",
                                                "SMALL"
                                              )
                                            ),
                                            width: "MINIMIZE",
                                            showWhen: false
                                          ),
                                          a!sideBySideItem(
                                            item: a!richTextDisplayField(
                                              labelPosition: "COLLAPSED",
                                              value: {
                                                local!selectedMessage.from,
                                                " ",
                                                a!richTextItem(text: "to me" & ", ", color: "SECONDARY"),
                                                a!richTextItem(text: "Rita Ramos", color: "ACCENT"),
                                                a!richTextItem(text: ", " & "and" & " ", color: "SECONDARY"),
                                                a!richTextItem(text: "Jorge Pena", color: "ACCENT")
                                              },
                                              preventWrapping: true
                                            )
                                          ),
                                          a!sideBySideItem(
                                            item: a!richTextDisplayField(
                                              labelPosition: "COLLAPSED",
                                              value: {
                                                a!richTextItem(
                                                  text: local!selectedMessage.time,
                                                  color: "SECONDARY",
                                                  size: if(
                                                    a!isPageWidth({ "TABLET_PORTRAIT", "PHONE" }),
                                                    "SMALL",
                                                    "STANDARD"
                                                  )
                                                )
                                              },
                                              align: "RIGHT"
                                            ),
                                            width: "MINIMIZE"
                                          )
                                        },
                                        alignVertical: "MIDDLE",
                                        marginBelow: "NONE"
                                      ),
                                      a!richTextDisplayField(
                                        labelPosition: "COLLAPSED",
                                        value: a!richTextItem(
                                          text: local!selectedMessage.subject,
                                          size: if(
                                            a!isPageWidth({"TABLET_LANDSCAPE", "TABLET_PORTRAIT", "PHONE"}),
                                            "MEDIUM",
                                            "MEDIUM_PLUS"
                                          )
                                        ),
                                        preventWrapping: true
                                      )
                                    },
                                    width: if(
                                      a!isPageWidth("PHONE"),
                                      "MEDIUM_PLUS",
                                      "AUTO"
                                    )
                                  )
                                },
                                alignVertical: "MIDDLE",
                                stackWhen: "NEVER"
                              )
                            },
                            divider: "BELOW"
                          ),
                          /* Selected message text */
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis, nunc ut hendrerit imperdiet, ex tellus maximus magna, ac imperdiet ante est sed eros. Curabitur vitae placerat velit, eu aliquet est. Sed sed justo ac augue porta volutpat. Donec vitae euismod quam, vitae faucibus mauris. Duis venenatis, sem non mattis feugiat, quam libero malesuada augue, at mollis odio neque sed massa. Morbi elit eros, euismod sed justo sed, volutpat suscipit orci. Vestibulum tincidunt ex diam, nec sagittis nulla malesuada ac. Donec vitae libero scelerisque, blandit lorem eget, porttitor nisl. Phasellus sed rhoncus metus, et porttitor elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tortor diam, viverra sit amet massa vel, ornare tincidunt nibh. Vestibulum tristique vitae urna sed aliquam.",
                              char(10),
                              char(10),
                              "Quisque velit urna, varius quis tempor non, luctus sit amet massa. Nunc a quam sed lorem pretium ultrices. In varius, felis non viverra tincidunt, lorem augue ultricies purus, ac efficitur nunc ipsum at odio. Morbi imperdiet aliquam nibh, ut rhoncus nibh lacinia eget. Duis aliquam in arcu ac ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ut tincidunt nunc. Nunc eget fringilla lorem, et euismod tortor. Nunc in tincidunt eros. Vivamus pellentesque lectus ultricies tellus volutpat, vel mattis magna iaculis. Aliquam sollicitudin fermentum mi vitae tempor. In sagittis pharetra est, nec venenatis urna dignissim quis. Sed tempus felis urna, non pulvinar neque mollis non.",
                              char(10),
                              char(10),
                              "Morbi pellentesque dolor id nisl pretium, in imperdiet risus pretium. Curabitur maximus suscipit ornare. Etiam iaculis odio vitae sapien posuere, nec mattis sapien dignissim. Nam vestibulum justo nec tincidunt dignissim. Vestibulum aliquet nisl sed orci egestas, in placerat erat semper. Curabitur sed ex ex. Fusce feugiat nibh purus, ut faucibus neque dapibus sit amet. Vestibulum vitae arcu lacinia, ultricies lorem ac, finibus felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec turpis lorem, dignissim id auctor non, pretium eget augue. In a luctus lacus. Pellentesque convallis porttitor metus id accumsan. Donec ut diam tempus, sagittis enim feugiat, vehicula erat. Vestibulum vitae ex a tortor hendrerit scelerisque in at leo. Vivamus lectus velit, sollicitudin sed lacinia ut, pretium sed magna. Sed vel felis mollis, luctus sem ac, facilisis velit."
                            }
                          ),
                          /* Selected message attachments */
                          a!sectionLayout(
                            contents: {
                              a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: local!numOfAttachments & " " & if(local!numOfAttachments > 1, "Attachments", "Attachment")
                              ),
                              a!columnsLayout(
                                columns: a!forEach(
                                  items: enumerate(local!numOfCols) + 1,
                                  expression: a!localVariables(
                                    local!colIndex: fv!index,
                                    a!columnLayout(
                                      contents: {
                                        a!forEach(
                                          items: local!selectedMessageAttachments,
                                          expression: a!cardLayout(
                                            contents: {
                                              a!sideBySideLayout(
                                                items: {
                                                  a!sideBySideItem(
                                                    item: a!richTextDisplayField(
                                                      labelPosition: "COLLAPSED",
                                                      value: {
                                                        a!richTextIcon(
                                                          icon: "file-" & fv!item.type & "-o",
                                                          altText: fv!item.type,
                                                          color: "ACCENT",
                                                          size: "LARGE"
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
                                                          style: "STRONG"
                                                        ),
                                                        char(10),
                                                        a!richTextItem(text: fv!item.size, color: "SECONDARY")
                                                      }
                                                    )
                                                  )
                                                },
                                                alignVertical: "MIDDLE"
                                              )
                                            },
                                            link: a!dynamicLink(),
                                            /* This logic assigns each card to the right column */
                                            showWhen: or(mod(fv!index, local!numOfCols) = local!colIndex, and(mod(fv!index, local!numOfCols) = 0, local!colIndex = local!numOfCols)),
                                            marginBelow: "LESS"
                                          )
                                        )
                                      },
                                      width: "MEDIUM"
                                    )
                                  )
                                ),
                                marginAbove: "NONE",
                                marginBelow: "NONE",
                                spacing: "DENSE",
                                stackWhen: {"TABLET_LANDSCAPE", "TABLET_PORTRAIT", "PHONE"}
                              )
                            },
                            showWhen: local!numOfAttachments > 0,
                            divider: "ABOVE"
                          )
                        }
                      )
                    },
                    padding: "MORE",
                    marginBelow: "STANDARD",
                    showBorder: false
                  )
                },
                showWhen: if(
                  a!isPageWidth("PHONE"),
                  local!showMessage,
                  true
                )
              )
            },
            alignVertical: "TOP",
            spacing: "NONE",
            showDividers: not(a!isPageWidth("PHONE"))
          )
        },
        style: "#fff",
        padding: "NONE",
        showBorder: false
      )
    },
    backgroundColor: "WHITE"
  )
  )
)
```

### Filters
```
a!localVariables(
  local!priorityForOrdersByCustomerDataSubset: a!dataSubset(
    data: {
      a!map(priority: "Critical"),
      a!map(priority: "High"),
      a!map(priority: "Medium"),
      a!map(priority: "Low")
    }
  ),
  local!priorityListForOrdersByCustomer: a!forEach(
    items: index(
      local!priorityForOrdersByCustomerDataSubset.data,
      "priority"
    ),
    expression: tostring(fv!item)
  ),
  local!priorityForOrderTrendByStatus,
  local!startdateForOrderTrendByStatus: date(year(today()), 1, 1),
  local!endDateForOrderTrendByStatus: today() - 1,
  a!paneLayout(
    panes: {
      a!pane(
        contents: {
          a!richTextDisplayField(
            value: {
              a!richTextHeader(text: upper("Filters"), size: "SMALL")
            }
          ),
          a!imageField(labelPosition: "COLLAPSED"),
          a!textField(
            label: "Listing Number",
            labelPosition: "ABOVE",
            saveInto: {},
            refreshAfter: "UNFOCUS",
            validations: {}
          ),
          a!multipleDropdownField(
            choiceLabels: local!priorityListForOrdersByCustomer,
            choiceValues: local!priorityListForOrdersByCustomer,
            label: "Priority",
            labelPosition: "ABOVE",
            placeholder: "All priorities",
            value: local!priorityForOrderTrendByStatus,
            saveInto: local!priorityForOrderTrendByStatus
          ),
          a!imageField(labelPosition: "COLLAPSED"),
          a!multipleDropdownField(
            choiceLabels: local!priorityListForOrdersByCustomer,
            choiceValues: local!priorityListForOrdersByCustomer,
            label: "Type",
            labelPosition: "ABOVE",
            placeholder: "All types",
            value: local!priorityForOrderTrendByStatus,
            saveInto: local!priorityForOrderTrendByStatus
          ),
          a!checkboxField(
            choiceLabels: { "Central air", "Outdoor kitchen", "Pool" },
            choiceValues: { 1, 2, 3 },
            label: "Property Features"
          ),
          a!imageField(labelPosition: "COLLAPSED"),
          a!checkboxField(
            choiceLabels: {
              "New",
              "Open house",
              "Reduced",
              "No offers"
            },
            choiceValues: { 1, 2, 3, 4 },
            label: "Status",
            labelPosition: "ABOVE",
            saveInto: {},
            validations: {}
          ),
          a!richTextDisplayField(
            labelPosition: "COLLAPSED",
            value: {
              a!richTextItem(text: { "Listed" }, style: { "STRONG" })
            },
            marginAbove: "STANDARD",
            marginBelow: "EVEN_LESS"
          ),
          a!sideBySideLayout(
            items: {
              a!sideBySideItem(
                item: a!dateField(
                  label: "Start Date",
                  labelPosition: "COLLAPSED",
                  value: local!startdateForOrderTrendByStatus,
                  saveInto: local!startdateForOrderTrendByStatus
                ),
                width: "MINIMIZE"
              ),
              a!sideBySideItem(
                item: a!richTextDisplayField(
                  labelPosition: "COLLAPSED",
                  value: { " to " },
                  align: "LEFT"
                ),
                width: "MINIMIZE"
              ),
              a!sideBySideItem(
                item: a!dateField(
                  label: "End Date",
                  labelPosition: "COLLAPSED",
                  value: local!endDateForOrderTrendByStatus,
                  saveInto: local!endDateForOrderTrendByStatus,
                  validations: if(
                    and(
                      not(
                        isnull(local!startdateForOrderTrendByStatus)
                      ),
                      not(
                        isnull(local!endDateForOrderTrendByStatus)
                      )
                    ),
                    if(
                      local!endDateForOrderTrendByStatus <= local!startdateForOrderTrendByStatus,
                      "Please set the 'end date' to a value later than the 'start date'",
                      ""
                    ),
                    ""
                  )
                ),
                width: "MINIMIZE"
              )
            },
            alignVertical: "MIDDLE",
            spacing: "DENSE",
            stackWhen: { "NEVER" }
          ),
          a!richTextDisplayField(
            labelPosition: "COLLAPSED",
            value: {
              a!richTextItem(text: { "Offered" }, style: { "STRONG" })
            },
            marginAbove: "STANDARD",
            marginBelow: "EVEN_LESS"
          ),
          a!sideBySideLayout(
            items: {
              a!sideBySideItem(
                item: a!dateField(
                  label: "Start Date",
                  labelPosition: "COLLAPSED",
                  value: local!startdateForOrderTrendByStatus,
                  saveInto: local!startdateForOrderTrendByStatus
                ),
                width: "MINIMIZE"
              ),
              a!sideBySideItem(
                item: a!richTextDisplayField(
                  labelPosition: "COLLAPSED",
                  value: { " to " },
                  align: "LEFT"
                ),
                width: "MINIMIZE"
              ),
              a!sideBySideItem(
                item: a!dateField(
                  label: "End Date",
                  labelPosition: "COLLAPSED",
                  value: local!endDateForOrderTrendByStatus,
                  saveInto: local!endDateForOrderTrendByStatus,
                  validations: if(
                    and(
                      not(
                        isnull(local!startdateForOrderTrendByStatus)
                      ),
                      not(
                        isnull(local!endDateForOrderTrendByStatus)
                      )
                    ),
                    if(
                      local!endDateForOrderTrendByStatus <= local!startdateForOrderTrendByStatus,
                      "Please set the 'end date' to a value later than the 'start date'",
                      ""
                    ),
                    ""
                  )
                ),
                width: "MINIMIZE"
              )
            },
            alignVertical: "MIDDLE",
            spacing: "DENSE",
            stackWhen: { "NEVER" }
          ),
          a!imageField(labelPosition: "COLLAPSED"),
          a!pickerFieldCustom(
            label: "Listing Agent",
            labelPosition: "ABOVE",
            placeholder: "All Customers",
            saveInto: {},
            validations: {}
          )
        },
        width: "MEDIUM"
      ),
      a!pane(
        contents: {
          a!columnsLayout(
            columns: {
              a!columnLayout(
                contents: {
                  a!cardLayout(
                    contents: {
                      a!billboardLayout(
                        backgroundMedia: a!webImage(
                          source: "https://raw.githubusercontent.com/pglevy/design-system-docs/main/assets/images/billboard-bg-2.jpg"
                        ),
                        backgroundColor: "#f0f0f0",
                        height: "SHORT_PLUS",
                        marginBelow: "NONE",
                        overlay: a!fullOverlay(
                          alignVertical: "TOP",
                          contents: {
                            a!tagField(
                              labelPosition: "COLLAPSED",
                              tags: {
                                a!tagItem_24r2(
                                  text: "NEW LISTING",
                                  backgroundColor: "#ff9900"
                                )
                              }
                            )
                          },
                          style: "NONE"
                        )
                      ),
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(text: { "$1,695,000" }, size: "MEDIUM_PLUS")
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: { a!richTextIcon(icon: "calendar"), " 2d" },
                                      color: "SECONDARY",
                                      size: "MEDIUM"
                                    )
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "STANDARD"
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(text: { "3 Beds  " }, size: "STANDARD"),
                              "•  2.5 Baths  •  2,403 Sq. Ft.",
                              char(10),
                              a!richTextItem(
                                text: {
                                  "12345 Maple Ave, Palm Springs, CA 92262"
                                },
                                size: "SMALL"
                              )
                            },
                            preventWrapping: false
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        padding: "STANDARD",
                        marginBelow: "NONE",
                        showBorder: false
                      )
                    },
                    link: a!dynamicLink(label: "Dynamic Link", saveInto: {}),
                    height: "AUTO",
                    style: "NONE",
                    shape: "SEMI_ROUNDED",
                    padding: "NONE",
                    marginBelow: "STANDARD"
                  )
                }
              ),
              a!columnLayout(
                contents: {
                  a!cardLayout(
                    contents: {
                      a!billboardLayout(
                        backgroundMedia: a!webImage(
                          source: "https://raw.githubusercontent.com/pglevy/design-system-docs/main/assets/images/billboard-bg-3.jpg"
                        ),
                        backgroundColor: "#f0f0f0",
                        height: "SHORT_PLUS",
                        marginBelow: "NONE",
                        overlay: a!fullOverlay(
                          alignVertical: "TOP",
                          contents: {
                            a!tagField(
                              labelPosition: "COLLAPSED",
                              tags: {
                                a!tagItem_24r2(
                                  text: "OPEN HOUSE SCHEDULED",
                                  backgroundColor: "#38761d"
                                )
                              }
                            )
                          },
                          style: "NONE"
                        )
                      ),
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(text: { "$2,150,000" }, size: "MEDIUM_PLUS")
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: { a!richTextIcon(icon: "calendar"), " 15d" },
                                      color: "SECONDARY",
                                      size: "MEDIUM"
                                    )
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "STANDARD"
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(text: { "4 Beds  " }, size: "STANDARD"),
                              "•  3.5 Baths  •  2,942 Sq. Ft.",
                              char(10),
                              a!richTextItem(
                                text: {
                                  "2345 Mesa Blvd, Palm Springs, CA 92264"
                                },
                                size: "SMALL"
                              )
                            },
                            preventWrapping: false
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        padding: "STANDARD",
                        marginBelow: "NONE",
                        showBorder: false
                      )
                    },
                    link: a!dynamicLink(label: "Dynamic Link", saveInto: {}),
                    height: "AUTO",
                    style: "NONE",
                    shape: "SEMI_ROUNDED",
                    padding: "NONE",
                    marginBelow: "STANDARD"
                  )
                }
              ),
              a!columnLayout(
                contents: {
                  a!cardLayout(
                    contents: {
                      a!billboardLayout(
                        backgroundMedia: a!webImage(
                          source: "https://raw.githubusercontent.com/pglevy/design-system-docs/main/assets/images/billboard-bg-4.jpg"
                        ),
                        backgroundColor: "#f0f0f0",
                        height: "SHORT_PLUS",
                        marginBelow: "NONE",
                        overlay: a!fullOverlay(
                          alignVertical: "TOP",
                          contents: {
                            a!tagField(
                              labelPosition: "COLLAPSED",
                              tags: {
                                a!tagItem_24r2(
                                  text: "OPEN HOUSE SCHEDULED",
                                  backgroundColor: "#38761d"
                                )
                              }
                            )
                          },
                          style: "NONE"
                        )
                      ),
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(text: { "$1,945,000" }, size: "MEDIUM_PLUS")
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: { a!richTextIcon(icon: "calendar"), " 26d" },
                                      color: "SECONDARY",
                                      size: "MEDIUM"
                                    )
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "STANDARD"
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(text: { "3 Beds  " }, size: "STANDARD"),
                              "•  2.5 Baths  •  2,178 Sq. Ft.",
                              char(10),
                              a!richTextItem(
                                text: {
                                  "345 Main St, Cathedral City, CA 92234"
                                },
                                size: "SMALL"
                              )
                            },
                            preventWrapping: false
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        padding: "STANDARD",
                        marginBelow: "NONE",
                        showBorder: false
                      )
                    },
                    link: a!dynamicLink(label: "Dynamic Link", saveInto: {}),
                    height: "AUTO",
                    style: "NONE",
                    shape: "SEMI_ROUNDED",
                    padding: "NONE",
                    marginBelow: "STANDARD"
                  )
                }
              )
            },
            stackWhen: {
              "PHONE",
              "TABLET_PORTRAIT",
              "TABLET_LANDSCAPE",
              "DESKTOP_NARROW"
            }
          ),
          a!columnsLayout(
            columns: {
              a!columnLayout(
                contents: {
                  a!cardLayout(
                    contents: {
                      a!billboardLayout(
                        backgroundMedia: a!webImage(
                          source: "https://raw.githubusercontent.com/pglevy/design-system-docs/main/assets/images/billboard-bg-5.jpg"
                        ),
                        backgroundColor: "#f0f0f0",
                        height: "SHORT_PLUS",
                        marginBelow: "NONE",
                        overlay: a!fullOverlay(
                          alignVertical: "TOP",
                          contents: {
                            a!tagField(
                              labelPosition: "COLLAPSED",
                              tags: {
                                a!tagItem_24r2(
                                  text: "PRICE REDUCED",
                                  backgroundColor: "#3c78d8"
                                )
                              }
                            )
                          },
                          style: "NONE"
                        )
                      ),
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(text: { "$2,092,000" }, size: "MEDIUM_PLUS")
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: { a!richTextIcon(icon: "calendar"), " 33d" },
                                      color: "SECONDARY",
                                      size: "MEDIUM"
                                    )
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "STANDARD"
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(text: { "5 Beds  " }, size: "STANDARD"),
                              "•  4.5 Baths  •  3,219 Sq. Ft.",
                              char(10),
                              a!richTextItem(
                                text: {
                                  "45678 Desert Ln, Palm Desert, CA 92260"
                                },
                                size: "SMALL"
                              )
                            },
                            preventWrapping: false
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        padding: "STANDARD",
                        marginBelow: "NONE",
                        showBorder: false
                      )
                    },
                    link: a!dynamicLink(label: "Dynamic Link", saveInto: {}),
                    height: "AUTO",
                    style: "NONE",
                    shape: "SEMI_ROUNDED",
                    padding: "NONE",
                    marginBelow: "STANDARD"
                  )
                }
              ),
              a!columnLayout(
                contents: {
                  a!cardLayout(
                    contents: {
                      a!billboardLayout(
                        backgroundMedia: a!webImage(
                          source: "https://raw.githubusercontent.com/pglevy/design-system-docs/main/assets/images/billboard-bg-6.jpg"
                        ),
                        backgroundColor: "#f0f0f0",
                        height: "SHORT_PLUS",
                        marginBelow: "NONE",
                        overlay: a!fullOverlay(
                          alignVertical: "TOP",
                          contents: {
                            a!tagField(
                              labelPosition: "COLLAPSED",
                              tags: {
                                a!tagItem_24r2(
                                  text: "NO OFFERS RECEIVED",
                                  backgroundColor: "#cc0000"
                                )
                              }
                            )
                          },
                          style: "NONE"
                        )
                      ),
                      a!cardLayout(
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(text: { "$1,723,000" }, size: "MEDIUM_PLUS")
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: { a!richTextIcon(icon: "calendar"), " 42d" },
                                      color: "SECONDARY",
                                      size: "MEDIUM"
                                    )
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "STANDARD"
                          ),
                          a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(text: { "3 Beds  " }, size: "STANDARD"),
                              "•  3 Baths  •  2,230 Sq. Ft.",
                              char(10),
                              a!richTextItem(
                                text: {
                                  "567 Fountain St, Hot Springs, CA 92241"
                                },
                                size: "SMALL"
                              )
                            },
                            preventWrapping: false
                          )
                        },
                        height: "AUTO",
                        style: "NONE",
                        padding: "STANDARD",
                        marginBelow: "NONE",
                        showBorder: false
                      )
                    },
                    link: a!dynamicLink(label: "Dynamic Link", saveInto: {}),
                    height: "AUTO",
                    style: "NONE",
                    shape: "SEMI_ROUNDED",
                    padding: "NONE",
                    marginBelow: "STANDARD"
                  )
                }
              ),
              a!columnLayout(contents: {})
            },
            stackWhen: {
              "PHONE",
              "TABLET_PORTRAIT",
              "TABLET_LANDSCAPE",
              "DESKTOP_NARROW"
            }
          )
        },
        width: "AUTO"
      )
    }
  )
)
```

### In Forms
```
a!localVariables(
  local!currentEmployeeInformation: a!map(
    name: "Megan Barton",
    role: "Software Engineer",
    streetAddress: "8238 Constitution St.",
    city: "Carlisle",
    state: "PA",
    zipCode: "17013",
    country: "United States",
    phone: "(215) 200-6387",
    email: "megan.barton@email.com"
  ),
  a!headerContentLayout(
    header: a!cardLayout(
      style: "#020a50",
      showBorder: false,
      padding: "STANDARD",
      contents: {
        a!headingField(
          marginAbove: "STANDARD",
          text: "Update Employee Address"
        )
      }
    ),
    backgroundColor: "#F5F5F7",
    contents: {
      a!paneLayout(
        panes: {
          a!pane(
            contents: {
              a!columnsLayout(
                marginAbove: "MORE",
                columns: {
                  a!columnLayout(),
                  a!columnLayout(
                    contents: {
                      a!sectionLayout(
                        contents: {
                          a!localVariables(
                            local!showEmployeeInformation: false,
                            if(
                              a!isPageWidth("PHONE"),
                              {
                                /* On phone widths, show employee information *
                                     * in an initially collapsed card             */
                                a!cardLayout(
                                  contents: {
                                    a!sideBySideLayout(
                                      items: {
                                        a!sideBySideItem(
                                          item: a!stampField(
                                            labelPosition: "COLLAPSED",
                                            text: initials(local!currentEmployeeInformation.name),
                                            backgroundColor: "SECONDARY",
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
                                                text: local!currentEmployeeInformation.name
                                              ),
                                              char(10),
                                              a!richTextItem(
                                                text: local!currentEmployeeInformation.role,
                                                color: "SECONDARY",
                                                size: "SMALL"
                                              )
                                            }
                                          )
                                        ),
                                        a!sideBySideItem(
                                          item: a!richTextDisplayField(
                                            value: a!richTextIcon(
                                              icon: if(
                                                local!showEmployeeInformation,
                                                "chevron-down",
                                                "chevron-right"
                                              ),
                                              color: "SECONDARY",
                                              size: "MEDIUM"
                                            ),
                                            align: "RIGHT"
                                          )
                                        )
                                      },
                                      alignVertical: "MIDDLE"
                                    )
                                  },
                                  link: a!dynamicLink(
                                    value: not(local!showEmployeeInformation),
                                    saveInto: local!showEmployeeInformation
                                  ),
                                  style: "#F5F5F7",
                                  padding: "MORE",
                                  marginBelow: if(
                                    local!showEmployeeInformation,
                                    "NONE",
                                    "MORE"
                                  ),
                                  showBorder: false,
                                  accessibilityText: if(
                                    local!showEmployeeInformation,
                                    "Employee information displayed. Press enter to hide.",
                                    "Employee information hidden. Press enter to display."
                                  )
                                ),
                                a!cardLayout(
                                  contents: {
                                    a!sectionLayout(
                                      label: upper("Current Address"),
                                      labelSize: "EXTRA_SMALL",
                                      labelColor: "STANDARD",
                                      contents: {
                                        a!richTextDisplayField(
                                          labelPosition: "COLLAPSED",
                                          value: {
                                            local!currentEmployeeInformation.streetAddress,
                                            char(10),
                                            local!currentEmployeeInformation.city,
                                            ", ",
                                            local!currentEmployeeInformation.state,
                                            " ",
                                            local!currentEmployeeInformation.zipCode,
                                            char(10),
                                            local!currentEmployeeInformation.country
                                          }
                                        )
                                      },
                                      marginBelow: "MORE"
                                    ),
                                    a!sectionLayout(
                                      label: upper("Contact Information"),
                                      labelSize: "EXTRA_SMALL",
                                      labelColor: "STANDARD",
                                      contents: {
                                        a!richTextDisplayField(
                                          labelPosition: "COLLAPSED",
                                          value: {
                                            a!richTextIcon(icon: "phone", color: "SECONDARY"),
                                            "  ",
                                            local!currentEmployeeInformation.phone
                                          }
                                        ),
                                        a!richTextDisplayField(
                                          labelPosition: "COLLAPSED",
                                          value: {
                                            a!richTextIcon(icon: "envelope", color: "SECONDARY"),
                                            "  ",
                                            local!currentEmployeeInformation.email
                                          }
                                        )
                                      },
                                      marginBelow: "NONE"
                                    )
                                  },
                                  showWhen: local!showEmployeeInformation,
                                  style: "#F5F5F7",
                                  padding: "MORE",
                                  marginBelow: "MORE",
                                  showBorder: false
                                )
                              },
                              {}
                            )
                          ),
                          a!dropdownField(
                            choiceLabels: { "United States" },
                            choiceValues: { 1 },
                            label: "Country",
                            placeholder: "--- " & "Select" & " ---",
                            value: 1,
                            marginBelow: "MORE"
                          ),
                          a!textField(
                            label: "Street Address",
                            marginBelow: "MORE",
                            inputPurpose: "STREET_ADDRESS"
                          ),
                          a!columnsLayout(
                            columns: {
                              a!columnLayout(contents: { a!textField(label: "City") }),
                              a!columnLayout(
                                contents: {
                                  a!columnsLayout(
                                    columns: {
                                      a!columnLayout(
                                        contents: {
                                          a!dropdownField(
                                            choiceLabels: { "Option 1", "Option 2", "Option 3" },
                                            choiceValues: { 1, 2, 3 },
                                            label: "State",
                                            placeholder: "--- " & "Select" & " ---"
                                          )
                                        }
                                      ),
                                      a!columnLayout(contents: { a!textField(label: "ZIP") })
                                    },
                                    spacing: "DENSE",
                                    stackWhen: "NEVER"
                                  )
                                }
                              )
                            },
                            marginBelow: "STANDARD",
                            spacing: "DENSE",
                            stackWhen: { "TABLET_PORTRAIT", "PHONE" }
                          )
                        }
                      ),
                      a!horizontalLine(
                        marginAbove: "STANDARD",
                        marginBelow: "STANDARD"
                      ),
                      a!columnsLayout(
                        columns: {
                          if(
                            a!isPageWidth("PHONE"),
                            {
                              a!columnLayout(
                                contents: a!buttonArrayLayout(
                                  buttons: a!buttonWidget(label: "Update", style: "SOLID")
                                )
                              ),
                              a!columnLayout(
                                contents: a!buttonArrayLayout(
                                  buttons: a!buttonWidget(label: "Cancel"),
                                  align: "START"
                                )
                              )
                            },
                            {
                              a!columnLayout(
                                contents: a!buttonArrayLayout(
                                  buttons: a!buttonWidget(label: "Cancel"),
                                  align: "START"
                                )
                              ),
                              a!columnLayout(
                                contents: a!buttonArrayLayout(
                                  buttons: a!buttonWidget(label: "Update", style: "SOLID")
                                )
                              )
                            }
                          )
                        },
                        marginAbove: "EVEN_LESS"
                      )
                    }
                  ),
                  a!columnLayout()
                }
              )
            }
          ),
          a!pane(
            contents: {
              a!cardLayout(
                contents: {
                  a!sectionLayout(
                    label: upper("Employee"),
                    labelSize: "EXTRA_SMALL",
                    labelColor: "STANDARD",
                    contents: {
                      a!sideBySideLayout(
                        items: {
                          a!sideBySideItem(
                            item: a!stampField(
                              labelPosition: "COLLAPSED",
                              text: initials(local!currentEmployeeInformation.name),
                              backgroundColor: "SECONDARY",
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
                                  text: local!currentEmployeeInformation.name
                                ),
                                char(10),
                                a!richTextItem(
                                  text: local!currentEmployeeInformation.role,
                                  color: "SECONDARY",
                                  size: "SMALL"
                                )
                              }
                            )
                          )
                        },
                        alignVertical: "MIDDLE"
                      )
                    },
                    marginBelow: "MORE"
                  ),
                  a!sectionLayout(
                    label: upper("Current Address"),
                    labelSize: "EXTRA_SMALL",
                    labelColor: "STANDARD",
                    contents: {
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          local!currentEmployeeInformation.streetAddress,
                          char(10),
                          local!currentEmployeeInformation.city,
                          ", ",
                          local!currentEmployeeInformation.state,
                          " ",
                          local!currentEmployeeInformation.zipCode,
                          char(10),
                          local!currentEmployeeInformation.country
                        }
                      )
                    },
                    marginBelow: "MORE"
                  ),
                  a!sectionLayout(
                    label: upper("Contact Information"),
                    labelSize: "EXTRA_SMALL",
                    labelColor: "STANDARD",
                    contents: {
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextIcon(icon: "phone", color: "SECONDARY"),
                          "  ",
                          local!currentEmployeeInformation.phone
                        }
                      ),
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextIcon(icon: "envelope", color: "SECONDARY"),
                          "  ",
                          local!currentEmployeeInformation.email
                        }
                      )
                    },
                    marginBelow: "NONE"
                  )
                },
                padding: "STANDARD",
                showBorder: false()
              )
            },
            width: "NARROW_PLUS",
            showWhen: not(a!isPageWidth("PHONE"))
          )
        }
      )
    }
  )
)
```

---

**Image Credits:**
- Billboard background images: Photos by Unsplash photographers¹

¹ *Image credits need verification - please check original Unsplash URLs for photographer details*
