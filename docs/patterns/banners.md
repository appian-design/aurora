---
status: "stable"
last_updated: "2025-09-22"
---

# Banners

Banners are visual elements used to display important information or messages to users

## Design

![](https://github.com/user-attachments/assets/3c6b7ad9-60ea-43b4-b9de-3136a9ad119b)


### When to Use Message Banner vs Actions Banner

**Use `a!messageBanner()` for:**
- Status messages (action complete, etc.)
- Simple, concise messages
- Leveraging built-in accessibility features
- Standard INFO, SUCCESS, WARN, ERROR styles

**Use custom action banner patterns for:**
- Longer text content
- Rich text formatting
- Multiple actions or links
- Complex layouts

Use message banners sparingly and keep the language concise, especially if used as a status message. If used as a status message, use "DISPLAY_AND_ANNOUNCE" as the `announceBehavior` setting for accessibility.

### Platform vs Solutions Variations

**Platform Applications:**
- Use "no decorative bar" style for flush messages
- Use "with decorative bar" style for standalone messages
- The decorative bar helps banner messages stand out sufficiently

**Solutions Applications:**
- If you have many banners, the decorative bar could feel heavy, so a simpler style without a decorative bar might work best
- If you have card-based layouts with semi-rounded/rounded cards, a semi-rounded banner shape may be a better choice to match the general aesthetic of your application
- When using semi-rounded shapes, hide the decorative border because it doesn't look as good as it does on the squared variant

**General Rule:** Flush banners should not have the decorative bar.

### Variants

#### Dynamic • Standard

Use this to communicate and draw the user’s attention to the specific state they’re in

![](https://github.com/user-attachments/assets/ef276439-890a-440a-ac90-75fdb4c9dca8)


#### Dynamic • Titled

Use this variant of a titled banner when your banner message wraps to more than one line

![](https://github.com/user-attachments/assets/ef0a1682-aeb2-4807-8d6e-51ff725f198e)


#### Actions

Use buttons or links to enable the user to take actions if needed. Actions may include opening a dialog, expanding or collapsing to view more information, or dismissing the banner for example.

If applying a single button, use the `OUTLINE` style with `ACCENT` color. For two actions, use `SOLID` for the prominent action and `LINK` style for the secondary action. Use `SMALL` size for all buttons. Avoid placing more than two actions in a banner.

If using a link, use the `link` parameter in the `a!richTextItem()` component. Avoid placing links adjacent to each other to prevent errors due to mistaken clicks. Set the `linkStyle` to `STANDALONE`.

Note: When using the ‘X’ action to dismiss the banner, specific ‘Dismiss {insert name of item}’ in the `accessibilityText` parameter.

![](https://github.com/user-attachments/assets/c090366d-1147-4afc-8ed1-61da303b3440)


#### Persistent

Use this for messages that are always going to be a part of the UI. It is up to the designer's discretion if the border is needed or not based on the UI.

![](https://github.com/user-attachments/assets/6710c20b-237e-49e7-a36c-5d7d41b8f7f2)


#### Minimal

Use this for messages that are always going to be a part of the UI. It is up to the designer's discretion if the border is needed or not based on the UI.

![](https://github.com/user-attachments/assets/df66d388-ca3d-42ee-ba4b-e1a24276f62a)

## Development

### Variants

#### Dynamic • Titled (Solutions)

```
{
  a!messageBanner(
    backgroundColor: "INFO",
    icon: "info-circle",
    primaryText: "New System",
    secondaryText: "A new Case Management System is available. Contact your Administrator with any questions.",
    shape: "SEMI_ROUNDED",
    showDecorativeBar: false,
    announceBehavior: "DISPLAY_AND_ANNOUNCE"
  ),
  a!messageBanner(
    backgroundColor: "#F5F5F7",
    icon: "lock",
    highlightColor: "#636363",
    primaryText: "Case Locked",
    secondaryText: "Case #1123 has been closed successfully.",
    shape: "SEMI_ROUNDED",
    showDecorativeBar: false,
    announceBehavior: "DISPLAY_AND_ANNOUNCE"
  ),
  a!messageBanner(
    backgroundColor: "SUCCESS",
    icon: "check-circle",
    highlightColor: "POSITIVE",
    primaryText: "Case Locked",
    secondaryText: "Case #1123 has been closed successfully.",
    shape: "SEMI_ROUNDED",
    showDecorativeBar: false,
    announceBehavior: "DISPLAY_AND_ANNOUNCE"
  ),
  a!messageBanner(
    backgroundColor: "WARN",
    icon: "warning",
    highlightColor: "WARN",
    primaryText: "Case Still Open",
    secondaryText: "The following case has been open for more than 30 days: Case #1124",
    shape: "SEMI_ROUNDED",
    showDecorativeBar: false,
    announceBehavior: "DISPLAY_AND_ANNOUNCE"
  ),
  a!messageBanner(
    backgroundColor: "ERROR",
    icon: "warning",
    highlightColor: "NEGATIVE",
    primaryText: "Case Not Found",
    secondaryText: "Case #1125 is missing. Please notify your Administrator.",
    shape: "SEMI_ROUNDED",
    showDecorativeBar: false,
    announceBehavior: "DISPLAY_AND_ANNOUNCE"
  )
}
```

#### Dynamic • Titled (Platform)

```
{
  a!messageBanner(
    backgroundColor: "INFO",
    icon: "info-circle",
    primaryText: "New System",
    secondaryText: "A new Case Management System is available. Contact your Administrator with any questions.",
    announceBehavior: "DISPLAY_AND_ANNOUNCE"
  ),
  a!messageBanner(
    backgroundColor: "SUCCESS",
    icon: "check-circle",
    highlightColor: "POSITIVE",
    primaryText: "Case Locked",
    secondaryText: "Case #1123 has been closed successfully.",
    announceBehavior: "DISPLAY_AND_ANNOUNCE"
  ),
  a!messageBanner(
    backgroundColor: "WARN",
    icon: "warning",
    highlightColor: "WARN",
    primaryText: "Case Still Open",
    secondaryText: "The following case has been open for more than 30 days: Case #1124",
    announceBehavior: "DISPLAY_AND_ANNOUNCE"
  ),
  a!messageBanner(
    backgroundColor: "ERROR",
    icon: "warning",
    highlightColor: "NEGATIVE",
    primaryText: "Case Not Found",
    secondaryText: "Case #1125 is missing. Please notify your Administrator.",
    announceBehavior: "DISPLAY_AND_ANNOUNCE"
  )
}
```

#### Dynamic • Standard

```
a!localVariables(
  local!infoBg: "#EBF4FF",
  local!infoIcon: "#115EBB",
  local!closedBg: "#F5F5F7",
  local!closedIcon: "#636363",
  local!warnBg: "#FFF5E6",
  local!warnIcon: "#CC7600",
  local!dynamicStandardBanners: {
    a!map(bgColor: local!infoBg,    icon: "info-circle",          iconColor: local!infoIcon,    text: "A new Case Management System is available. Contact your Administrator with any questions.", actionText: " Learn more"),
    a!map(bgColor: local!closedBg,  icon: "lock",                 iconColor: local!closedIcon,  text: "Case #1123 has been locked. A survey has been sent to the customer.",                       actionText: ""),
    a!map(bgColor: "SUCCESS",       icon: "check-circle",         iconColor: "POSITIVE",        text: "Case #1123 has been closed. A survey has been sent to the customer.",                       actionText: ""),
    a!map(bgColor: local!warnBg,    icon: "exclamation-triangle", iconColor: local!warnIcon,    text: "The following case has been open for more than 30 days:",                                   actionText: " Case #1124"),
    a!map(bgColor: "ERROR",         icon: "exclamation-triangle", iconColor: "NEGATIVE",        text: "Case #1125 is missing. Please notify your Administrator.",                                  actionText: "")
  },
  {
    a!forEach(
      items: local!dynamicStandardBanners,
      expression: if(
        a!isNullOrEmpty(fv!item.actionText),
        /* Use a!messageBanner for text only messages */
        a!messageBanner(
          backgroundColor: fv!item.bgColor,
          secondaryText: fv!item.text,
          icon: fv!item.icon,
          highlightColor: fv!item.iconColor,
          showDecorativeBar: false,
          shape: "SEMI_ROUNDED",
          announceBehavior: "DISPLAY_AND_ANNOUNCE"
        ),
        /* Use custom banner pattern when there are links */
        a!cardLayout(
          shape: "SEMI_ROUNDED",
          style: fv!item.bgColor, 
          marginBelow: "STANDARD",
          showBorder: false,
          contents: {
            a!sideBySideLayout(
              spacing: "STANDARD",
              items: {
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
        )
      )
    )
  }
)
```

#### Actions

```
a!localVariables(
  local!infoBg: "#EBF4FF",
  local!infoIcon: "#115EBB",
  local!successBg: "#EDF7EE",
  local!successIcon: "#117C00",
  local!warnBg: "#FFF5E6",
  local!warnIcon: "#CC7600",
  local!errorBg: "#FDEDF0",
  local!errorIcon: "#B2002C",
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
                        label: "Dismiss"
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
                        label: "Ignore"
                      ),
                      a!buttonWidget(
                        size: "SMALL",
                        style: "SOLID",
                        label: "View Errors"
                      )
                    }
                  ),
                  showWhen: fv!index = 4,
                  width: "MINIMIZE"
                ),
                a!sideBySideItem(
                  item: {},
                  width: "MINIMIZE"
                )
              },
              alignVertical: "MIDDLE",
              marginAbove: "STANDARD",
              marginBelow: "STANDARD"
            )
          }
        )
      }
    )
  }
)
```

#### Persistent

```
a!localVariables(
  local!infoBg: "#EBF4FF",
  local!infoIcon: "#115EBB",
  local!closedBg: "#F5F5F7",
  local!closedIcon: "#636363",
  local!successBg: "#EDF7EE",
  local!successIcon: "#117C00",
  local!warnBg: "#FFF5E6",
  local!warnIcon: "#CC7600",
  local!errorBg: "#FDEDF0",
  local!errorIcon: "#B2002C",
  local!persistentBanners: {
    a!map(bgColor: local!infoBg,    icon: "info",                 iconColor: local!infoIcon,    text: "A new Case Management System is available. Contact your Administrator with any questions.", actionText: " Learn more"),
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
        )
      }
    )
  }
)
```

#### Minimal

```
a!localVariables(
  local!infoBg: "#EBF4FF",
  local!infoIcon: "#115EBB",
  local!closedBg: "#F5F5F7",
  local!closedIcon: "#636363",
  local!warnBg: "#FFF5E6",
  local!warnIcon: "#CC7600",
  local!minimalBanners: {
    a!map(bgColor: local!infoBg,    icon: "info-circle",          iconColor: local!infoIcon,    text: "A new Case Management System is available. Contact your Administrator with any questions.", actionText: " Learn more"),
    a!map(bgColor: local!closedBg,  icon: "lock",                 iconColor: local!closedIcon,  text: "Case #1123 has been locked. A survey has been sent to the customer.",                       actionText: ""),
    a!map(bgColor: "SUCCESS",       icon: "check-circle",         iconColor: "POSITIVE",        text: "Case #1123 has been closed. A survey has been sent to the customer.",                       actionText: ""),
    a!map(bgColor: local!warnBg,    icon: "exclamation-triangle", iconColor: local!warnIcon,    text: "The following case has been open for more than 30 days:",                                   actionText: " Case #1124"),
    a!map(bgColor: "ERROR",         icon: "exclamation-triangle", iconColor: "NEGATIVE",        text: "Case #1125 is missing. Please notify your Administrator.",                                  actionText: "")
  },
  {
    a!forEach(
      items: local!minimalBanners,
      expression: if(
        a!isNullOrEmpty(fv!item.actionText),
        /* Use a!messageBanner for text only messages */
        a!messageBanner(
          backgroundColor: "#FFFFFF00",
          secondaryText: fv!item.text,
          icon: fv!item.icon,
          highlightColor: fv!item.iconColor,
          showDecorativeBar: false,
          shape: "SEMI_ROUNDED",
          marginBelow: "NONE",
          announceBehavior: "DISPLAY_AND_ANNOUNCE"
        ),
        /* Use custom banner pattern when there are links */
        a!sideBySideLayout(
          spacing: "STANDARD",
          alignVertical: "TOP",
          items: {
            a!sideBySideItem(width: "MINIMIZE"),
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
          marginAbove: "STANDARD",
          marginBelow: "STANDARD"
        )
      )
    )
  }
)
```
