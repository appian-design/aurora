---
status: "stable"
last_updated: "2025-3-19"
---

# Banners

Banners are visual elements used to display important information or messages to users

## Design

<img width="1229" alt="image" src="https://github.com/user-attachments/assets/f495efca-141e-4856-bff9-f7aa33063388" />

### Dynamic • Standard

Use this to communicate and draw the user’s attention to the specific state they’re in

<img width="870" alt="image" src="https://github.com/user-attachments/assets/d9a9be3b-438b-4e65-ad15-1940546befcc" />

### Dynamic • Titled

Use this variant of a titled banner when your banner message wraps to more than one line

<img width="870" alt="image" src="https://github.com/user-attachments/assets/7024ea74-eebd-47d7-b0ef-28927f8522f2" />


### Actions

Use buttons or links to enable the user to take actions if needed. Actions may include opening a dialog, expanding or collapsing to view more information, or dismissing the banner for example.

If applying a single button, use the ‘SECONDARY’ style. For two actions, use PRIMARY for the prominent action and LINK style for the secondary action. Use SMALL size for all buttons. Avoid placing more than two actions in a banner.

If using a link, use the ‘LINK’ parameter in the a!richTextItem() component. Avoid placing links adjacent to each other to prevent errors due to mistaken clicks. Set the ‘LINKSTYLE’ to ‘STANDALONE’.

Note: When using the ‘X’ action to dismiss the banner, specific ‘Dismiss {insert name of item}’ in the accessibility text parameter.

<img width="870" alt="image" src="https://github.com/user-attachments/assets/faf525c8-be84-4546-9dea-643f9b736532" />

### Persistent

Use this for messages that are always going to be a part of the UI. It is up to the designer’s discretion if the border is needed or not based on the UI.

<img width="870" alt="image" src="https://github.com/user-attachments/assets/dc5a247b-1afa-451e-b5fe-e0d253deceb9" />

### Minimal

Use this for messages that are always going to be a part of the UI. It is up to the designer’s discretion if the border is needed or not based on the UI.

<img width="870" alt="image" src="https://github.com/user-attachments/assets/b02cbe8e-e377-46c4-98b1-4f9fccafa306" />


## Development

### Dynamic • Standard

```
a!localVariables(
  local!infoBg: "#F0F2FC",
  local!infoIcon: "#143CCC",
  local!closedBg: "#F2F2F5",
  local!closedIcon: "#5C5C66",
  local!successBg: "#EDFCEA",
  local!successIcon: "#24990F",
  local!warnBg: "#FFF9DB",
  local!warnIcon: "#E5BF00",
  local!errorBg: "#FFEFEF",
  local!errorIcon: "#B22D2D",
  local!dynamicStandardBanners: {
    a!map(bgColor: local!infoBg,    icon: "info-circle",          iconColor: local!infoIcon,    text: "A new Case Management System is available. Contact your Administrator with any questions.", actionText: " Learn more"),
    a!map(bgColor: local!closedBg,  icon: "lock",                 iconColor: local!closedIcon,  text: "Case #1123 has been locked. A survey has been sent to the customer.",                       actionText: ""),
    a!map(bgColor: local!successBg, icon: "check-circle",         iconColor: local!successIcon, text: "Case #1123 has been closed. A survey has been sent to the customer.",                       actionText: ""),
    a!map(bgColor: local!warnBg,    icon: "exclamation-triangle", iconColor: local!warnIcon,    text: "The following case has been open for more than 30 days:",                                   actionText: " Case #1124"),
    a!map(bgColor: local!errorBg,   icon: "exclamation-triangle", iconColor: local!errorIcon,   text: "Case #1125 is missing. Please notify your Administrator.",                                  actionText: "")
  },
  {
    a!forEach(
      items: local!dynamicStandardBanners,
      expression: {
        a!cardLayout(
          shape: "SEMI_ROUNDED",
          style: fv!item.bgColor, 
          showBorder: false,
          marginAbove: "STANDARD",
          contents: {
            a!sideBySideLayout(
              spacing: "STANDARD",
              items: {
                a!sideBySideItem(
                  item: {},
                  width: "MINIMIZE"
                ),
                a!sideBySideItem(
                  item: a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: {
                      a!richTextIcon(
                        icon: fv!item.icon,
                        color: fv!item.iconColor,
                        size: "STANDARD",
                      ),
                    },
                    marginAbove: "NONE",
                    marginBelow: "NONE"
                  ),
                  width: "MINIMIZE"
                ),
                a!sideBySideItem(
                  item: a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: {
                      a!richTextItem(
                        text: fv!item.text,
                      ),
                      a!richTextItem(
                        text: fv!item.actionText,
                        color: "ACCENT",
                        link: a!dynamicLink(),
                        linkStyle: "STANDALONE"
                      )
                    },
                    marginAbove: "NONE",
                    marginBelow: "NONE"
                  ),
                  width: "MINIMIZE"
                )
              },
              alignVertical: "TOP",
              marginAbove: "STANDARD",
              marginBelow: "STANDARD"
            )
          }
        ),
      }
    ),
  }
)
```

### Dynamic • Titled

```
a!localVariables(
  local!infoBg: "#F0F2FC",
  local!infoIcon: "#143CCC",
  local!closedBg: "#F2F2F5",
  local!closedIcon: "#5C5C66",
  local!successBg: "#EDFCEA",
  local!successIcon: "#24990F",
  local!warnBg: "#FFF9DB",
  local!warnIcon: "#E5BF00",
  local!errorBg: "#FFEFEF",
  local!errorIcon: "#B22D2D",
  local!dynamicTitledBanners: {
    a!map(bgColor: local!infoBg,    icon: "info-circle",          iconColor: local!infoIcon,    title: "New System",      text: "A new Case Management System is available. Contact your Administrator with any questions.", actionText: " Learn more"),
    a!map(bgColor: local!closedBg,  icon: "lock",                 iconColor: local!closedIcon,  title: "Case Locked",     text: "Case #1123 has been locked. A survey has been sent to the customer.",                       actionText: ""),
    a!map(bgColor: local!successBg, icon: "check-circle",         iconColor: local!successIcon, title: "Case Closed",     text: "Case #1123 has been closed. A survey has been sent to the customer.",                       actionText: ""),
    a!map(bgColor: local!warnBg,    icon: "exclamation-triangle", iconColor: local!warnIcon,    title: "Case Still Open", text: "The following case has been open for more than 30 days:",                                   actionText: " Case #1124"),
    a!map(bgColor: local!errorBg,   icon: "exclamation-triangle", iconColor: local!errorIcon,   title: "Case Not Found",  text: "Case #1125 is missing. Please notify your Administrator.",                                  actionText: "")
  },
  {
    a!forEach(
      items: local!dynamicTitledBanners,
      expression: a!cardLayout(
        shape: "SEMI_ROUNDED",
        style: fv!item.bgColor,
        showBorder: false,
        marginAbove: "STANDARD",
        contents: {
          a!sideBySideLayout(
            spacing: "STANDARD",
            alignVertical: "TOP",
            marginAbove: "STANDARD",
            marginBelow: "NONE",
            items: {
              a!sideBySideItem(item: {}, width: "MINIMIZE"),
              a!sideBySideItem(
                item: a!richTextDisplayField(
                  labelPosition: "COLLAPSED",
                  value: {
                    a!richTextIcon(
                      icon: fv!item.icon,
                      color: fv!item.iconColor,
                    )
                  }
                ),
                width: "MINIMIZE"
              ),
              a!sideBySideItem(
                item: a!headingField(
                  text: fv!item.title,
                  headingTag: "H3",
                  size: "EXTRA_SMALL",
                  fontWeight: "BOLD",
                  marginAbove: "NONE",
                  marginBelow: "NONE",
                )
              ),
              a!sideBySideItem(item: {}, width: "MINIMIZE"),
            }
          ),
          a!sideBySideLayout(
            items: {
              a!sideBySideItem(item: {}, width: "MINIMIZE"),
              a!sideBySideItem(
                item: a!richTextDisplayField(
                  labelPosition: "COLLAPSED",
                  marginAbove: "NONE",
                  marginBelow: "NONE",
                  value: {
                    a!richTextIcon(
                      icon: "info-circle",
                      color: fv!item.bgColor,
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
                      text: fv!item.text
                    )
                  },
                  marginAbove: "NONE"
                )
              ),
              a!sideBySideItem(item: {}, width: "MINIMIZE")
            },
            marginAbove: "NONE",
            marginBelow: "STANDARD",
          )
        },
      ),
    ),
  }
)
```

### Actions

```
a!localVariables(
  local!infoBg: "#F0F2FC",
  local!infoIcon: "#143CCC",
  local!closedBg: "#F2F2F5",
  local!closedIcon: "#5C5C66",
  local!successBg: "#EDFCEA",
  local!successIcon: "#24990F",
  local!warnBg: "#FFF9DB",
  local!warnIcon: "#E5BF00",
  local!errorBg: "#FFEFEF",
  local!errorIcon: "#B22D2D",
  local!dynamicActionBanners: {
    a!map(bgColor: local!infoBg,    icon: "info-circle",          iconColor: local!infoIcon,    title: "New System",      text: "A new Case Management System is available. Contact your Administrator with any questions.", actionText: " Learn more"),
    a!map(bgColor: local!successBg, icon: "check-circle",         iconColor: local!successIcon, title: "Case Closed",     text: "Case #1123 has been closed. A survey has been sent to the customer.",                       actionText: ""),
    a!map(bgColor: local!warnBg,    icon: "exclamation-triangle", iconColor: local!warnIcon,    title: "Case Still Open", text: "The following case has been open for more than 30 days:",                                   actionText: " Case #1124"),
    a!map(bgColor: local!errorBg,   icon: "exclamation-triangle", iconColor: local!errorIcon,   title: "Case Not Found",  text: "Case #1125 is missing. Please notify your Administrator.",                                  actionText: "")
  },
  {
    a!forEach(
      items: local!dynamicActionBanners,
      expression: {
        a!cardLayout(
          shape: "SEMI_ROUNDED",
          style: fv!item.bgColor, 
          showBorder: false,
          marginAbove: "STANDARD",
          contents: {
            a!sideBySideLayout(
              spacing: "STANDARD",
              items: {
                a!sideBySideItem(
                  item: {},
                  width: "MINIMIZE"
                ),
                a!sideBySideItem(
                  item: a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: {
                      a!richTextIcon(
                        icon: fv!item.icon,
                        color: fv!item.iconColor,
                        size: "STANDARD",
                      ),
                    },
                    marginAbove: "NONE",
                    marginBelow: "NONE"
                  ),
                  width: "MINIMIZE"
                ),
                a!sideBySideItem(
                  item: a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: {
                      a!richTextItem(
                        text: fv!item.text,
                      ),
                      a!richTextItem(
                        text: fv!item.actionText,
                        color: "ACCENT",
                        link: a!dynamicLink(),
                        linkStyle: "STANDALONE"
                      )
                    },
                    marginAbove: "NONE",
                    marginBelow: "NONE"
                  ),
                  width: "AUTO"
                ),
                a!sideBySideItem(
                  item: a!buttonArrayLayout(
                    align: "END",
                    marginAbove: "NONE",
                    marginBelow: "NONE",
                    buttons: {
                      a!buttonWidget(
                        size: "SMALL",
                        style: "SOLID",
                        color: "#FFF",
                        label: "DISMISS"
                      )
                    }
                  ),
                  showWhen: fv!index = 1,
                  width: "MINIMIZE"
                ),
                a!sideBySideItem(
                  item: a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: {
                      a!richTextItem(
                        text: "Go to log",
                        color: "#2322f0",
                        link: a!dynamicLink(),
                        linkStyle: "STANDALONE"
                      )
                    },
                    marginAbove: "NONE",
                    marginBelow: "NONE"
                  ),
                  showWhen: fv!index = 2,
                  width: "MINIMIZE"
                ),
                a!sideBySideItem(
                  item: a!richTextDisplayField(
                    labelPosition: "COLLAPSED",
                    value: {
                      a!richTextIcon(
                        icon: "close",
                        color: "#000",
                        link: a!dynamicLink(),
                        linkStyle: "STANDALONE"
                      )
                    },
                    marginAbove: "NONE",
                    marginBelow: "NONE"
                  ),
                  showWhen: fv!index = 3,
                  width: "MINIMIZE"
                ),
                a!sideBySideItem(
                  item: a!buttonArrayLayout(
                    align: "END",
                    marginAbove: "NONE",
                    marginBelow: "NONE",
                    buttons: {
                      a!buttonWidget(
                        size: "SMALL",
                        style: "LINK",
                        label: "IGNORE"
                      ),
                      a!buttonWidget(
                        size: "SMALL",
                        style: "SOLID",
                        label: "VIEW ERRORS"
                      )
                    }
                  ),
                  showWhen: fv!index = 4,
                  width: "MINIMIZE"
                ),
                a!sideBySideItem(
                  item: {},
                  width: "MINIMIZE"
                ),
              },
              alignVertical: "TOP",
              marginAbove: "STANDARD",
              marginBelow: "STANDARD"
            )
          }
        ),
      }
    ),
  }
)
```

### Persistent

```
a!localVariables(
  local!infoBg: "#F0F2FC",
  local!infoIcon: "#143CCC",
  local!closedBg: "#F2F2F5",
  local!closedIcon: "#5C5C66",
  local!successBg: "#EDFCEA",
  local!successIcon: "#24990F",
  local!warnBg: "#FFF9DB",
  local!warnIcon: "#E5BF00",
  local!errorBg: "#FFEFEF",
  local!errorIcon: "#B22D2D",
  local!persistentBanners: {
    a!map(bgColor: local!infoBg,    icon: "info",          iconColor: local!infoIcon,    text: "A new Case Management System is available. Contact your Administrator with any questions.", actionText: " Learn more"),
    a!map(bgColor: local!closedBg,  icon: "lock",                 iconColor: local!closedIcon,  text: "Case #1123 has been locked. A survey has been sent to the customer.",                       actionText: ""),
    a!map(bgColor: local!successBg, icon: "check-circle",         iconColor: local!successIcon, text: "Case #1123 has been closed. A survey has been sent to the customer.",                       actionText: ""),
    a!map(bgColor: local!warnBg,    icon: "exclamation-triangle", iconColor: local!warnIcon,    text: "The following case has been open for more than 30 days:",                                   actionText: " Case #1124"),
    a!map(bgColor: local!errorBg,   icon: "exclamation-triangle", iconColor: local!errorIcon,   text: "Case #1125 is missing. Please notify your Administrator.",                                  actionText: "")
  },
  {
    a!forEach(
      items: local!persistentBanners,
      expression: {
        a!cardLayout(
          shape: "SEMI_ROUNDED",
          showBorder: true,
          marginAbove: "STANDARD",
          contents: {
            a!columnsLayout(
              alignVertical: "MIDDLE",
              spacing: "DENSE",
              columns: {
                a!columnLayout(
                  width: "EXTRA_NARROW",
                  contents: {
                    a!cardLayout(
                      showBorder: false,
                      style: fv!item.bgColor,
                      padding: "STANDARD",
                      shape: "SEMI_ROUNDED",
                      contents: {
                        a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          align: "CENTER",
                          marginAbove: "EVEN_LESS",
                          marginBelow: "EVEN_LESS",
                          value: {
                            a!richTextIcon(
                              icon: fv!item.icon,
                              color: fv!item.iconColor
                            )
                          }
                        )
                      }
                    )
                  }
                ),
                a!columnLayout(
                  contents: {
                    a!headingField(
                      text: "The URL you have entered is not valid",
                      size: "EXTRA_SMALL",
                      fontWeight: "BOLD",
                      headingTag: "H3",
                      marginAbove: "NONE",
                      marginBelow: "NONE"
                    ),
                    a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      marginAbove: "NONE",
                      marginBelow: "NONE",
                      value: {
                        a!richTextItem(
                          text: "Please check the Web Address in the configuration panel",
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ),
      }
    ),
  }
)
```

### Minimal

```
a!localVariables(
  local!infoBg: "#F0F2FC",
  local!infoIcon: "#143CCC",
  local!closedBg: "#F2F2F5",
  local!closedIcon: "#5C5C66",
  local!successBg: "#EDFCEA",
  local!successIcon: "#24990F",
  local!warnBg: "#FFF9DB",
  local!warnIcon: "#E5BF00",
  local!errorBg: "#FFEFEF",
  local!errorIcon: "#B22D2D",
  local!dynamicTitledBanners: {
    a!map(bgColor: local!infoBg,    icon: "info-circle",          iconColor: local!infoIcon,    title: "New System",      text: "A new Case Management System is available. Contact your Administrator with any questions.", actionText: " Learn more"),
    a!map(bgColor: local!closedBg,  icon: "lock",                 iconColor: local!closedIcon,  title: "Case Locked",     text: "Case #1123 has been locked. A survey has been sent to the customer.",                       actionText: ""),
    a!map(bgColor: local!successBg, icon: "check-circle",         iconColor: local!successIcon, title: "Case Closed",     text: "Case #1123 has been closed. A survey has been sent to the customer.",                       actionText: ""),
    a!map(bgColor: local!warnBg,    icon: "exclamation-triangle", iconColor: local!warnIcon,    title: "Case Still Open", text: "The following case has been open for more than 30 days:",                                   actionText: " Case #1124"),
    a!map(bgColor: local!errorBg,   icon: "exclamation-triangle", iconColor: local!errorIcon,   title: "Case Not Found",  text: "Case #1125 is missing. Please notify your Administrator.",                                  actionText: "")
  },
  {
    a!forEach(
      items: local!dynamicTitledBanners,
      expression: {
        a!sideBySideLayout(
          spacing: "STANDARD",
          items: {
            a!sideBySideItem(
              item: {},
              width: "MINIMIZE"
            ),
            a!sideBySideItem(
              item: a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: {
                  a!richTextIcon(
                    icon: fv!item.icon,
                    color: fv!item.iconColor,
                    size: "STANDARD",
                  ),
                },
                marginAbove: "NONE",
                marginBelow: "NONE"
              ),
              width: "MINIMIZE"
            ),
            a!sideBySideItem(
              item: a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: {
                  a!richTextItem(
                    text: fv!item.text,
                  ),
                  a!richTextItem(
                    text: fv!item.actionText,
                    color: "ACCENT",
                    link: a!dynamicLink(),
                    linkStyle: "STANDALONE"
                  )
                },
                marginAbove: "NONE",
                marginBelow: "NONE"
              ),
              width: "MINIMIZE"
            )
          },
          alignVertical: "MIDDLE",
          marginAbove: "STANDARD",
          marginBelow: "STANDARD"
        )
      }
    ),
  }
)
```
