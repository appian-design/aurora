---
status: "stable"
last_updated: "2025-11-11"
---

# Approach to AI

The UX of AI in Appian Solutions

## Overview

Appian Solutions will use a modified version of the Appian AI Copilot Brand for all AI components. The design is consistent and distinct so that the end-user can quickly identify when AI is being used.

## Colors

| Label | Default Color | Notes |
|-------|--------------|-------|
| Header text | Blue 4 (#0C4283) ||
| Iconography | Blue 3 (#2322F0) ||
| Card Background - Blue | Blue 1 (#E9EDFC) ||
| Card Background - White | #FFFFFF | When card is against the default gray background |
| Header Background | #EDEEFA | For chat interfaces (Card Border Color from palette) |
| Secondary Background | #DCDCE5 | For smaller star elements (Dividers color from palette) |

## Imagery

### Sparkle Icons

#### Sparkle Image - Dark

![](https://github.com/user-attachments/assets/b85b54f7-8bb0-4735-bf4f-5687938630c3)

Use for small iconography

- [Download PNG](../assets/images/ai-imagery/sparkle-dark-1.png)
- [Download SVG](../assets/images/ai-imagery/sparkle-dark-2.svg)

#### Sparkle Image - Light

![](https://github.com/user-attachments/assets/b2cce3d1-1022-45fa-b710-9eef42b99b45)

Use for larger, more illustrative elements

- [Download PNG](../assets/images/ai-imagery/sparkle-light-1.png)
- [Download SVG](../assets/images/ai-imagery/sparkle-light-2.svg)

#### Single-Toned (Blue 3 Only)
![](https://github.com/user-attachments/assets/fb15d394-3331-4592-9e19-de6ff72af5f5)

Use for icons in banner messages and single-row headers:
- Blue 3 solid stars image (size "ICON")
- No stamp background
- For compact UI elements

#### Duo-Toned Illustration
![](https://github.com/user-attachments/assets/807f213a-9d44-4f18-ab14-351f64c5dc9a)

Use for larger images (at least size "TINY") and empty states:
- Blue 3 for the large anchor star (#2322F0)
- #DCDCE5 for the 3 smaller stars (Dividers color from palette)
- For prominent AI features and empty states

### Usage Examples

![](https://github.com/user-attachments/assets/1811b902-b743-4f8b-a02d-94d7e8c30da2)

Prompting the user to navigate to the AI Procedure Copilot from the Contract Writing landing page

![](https://github.com/user-attachments/assets/9f3deb74-ce3a-45da-8f38-8f1d401fa215)

Generate RFI modal for a Requirements Management demo

!!! info "Helpful Tips"

    If an icon is needed and cannot be an image, the "magic" icon can be used

!!! abstract "Accessibility"

    Alt-text is not needed as the image is entirely decorative

## Language

- Title the component "AI Copilot", feel free to add a secondary label to differentiate the functionality
- For example:
  - AI Copilot – Suggested Cases
  - AI Copilot – Comment Summary
- All AI elements should denote if they are using AI
- For generated content consider adding instructional text such as "Review AI generated content to make sure it's accurate and appropriate"

## UX Guidance

We have defined guidelines for three use cases of AI based on how the user interacts with the component. Each situation has unique guidance for when and how to display the UI.

### Auto-Suggestions

![](https://github.com/user-attachments/assets/fe0ec989-619e-4e00-866f-0bfeee4aa1dd)

Auto-Suggestions are AI components that are working in the background to identify insights or suggestions. These are not user initiated and should be more minimally displayed or have the ability to be collapsed or closed.

These should appear only when valuable. For example, if you have a query running to see if there are duplicate items, it should not appear and say "No duplicate found" and instead show only when a suggestion is applicable.

#### Example Use Cases
- Related Cases
- Comment or Message Summary
- Document Summary

#### Behavior
- Allow the user to collapse the section. If the suggested content is going to be large, considering having the section be default-collapsed.
- Do not show the component if there is an error or if it is unavailable

#### Implementation Patterns

**Short Message Banner**
![](https://github.com/user-attachments/assets/8e67e6b4-675c-4b7b-8d36-f8b708dce072)

- Blue 1 background (#E9EDFC)
- Blue 3 solid stars image (size "ICON")
- Black text
- Vertically align "MIDDLE" if there's only one row of text
- Vertically align "TOP" if there's multiple rows of text
- Card padding "LESS"

**Paragraph Summary Cards**
- Background white
- Header: Blue 1 background with Blue 3 solid stars image (size "ICON") and Blue 4 text
- Body text: Black text, directly embedded in card
- Actions: Side by side with header for single action, below body text for multiple actions

### Prompted Content
![](https://github.com/user-attachments/assets/4014cf98-2ffe-464e-9daa-412637992304)

Prompted Content is when a user purposefully engages with an AI element. These components require the user to provide input to create a response.

#### Example Use Cases
- Generating a Case
- Generating an RFI
- Semantic Search

#### Behavior
- Display in an AI-branded card to invite the user to use the AI feature. This is usually embedded within a frequently accessed interface, e.g. a landing page or summary view, in order to encourage the use of more AI functionality.
- Include text that suggests how the user should use this AI module or examples so the user knows how to format their request

#### Implementation Pattern

**Inline Dialog**
- Header: Side by side layout with spacing "DENSE"
- Image: Duo-toned illustration (size "TINY") with minimized width
- Header text: Bold formatting
- Instruction text: Gray 3 color, limited to one row
- Optional expand/collapse icon: Gray 3 on right side
- Form body: Optional suggestion text below input
- Dividers: Gray 2 "THIN" width between form body and actions (when multiple actions or instruction text present)

### Chat Interface

Chatbots are best when you anticipate the user to have more than one question or the AI will need multiple attempts to understand the prompt. These are often used for wayfinding or parsing through high-quantities of information.

Chatbots should be used to provide time savings or additional insight. If they are querying limited information or cannot gather the full context of a system, then you should not use them.

#### Example Use Cases
- Appian AI Copilot
- Document Assistant
- Chatting with documents
- Asking AI questions

#### Behavior
- Allow the user to collapse the section if they do not want to use it
- Do not show the component if there is an error or if it is unavailable

#### Implementation Patterns

![](https://github.com/user-attachments/assets/dbe6ed20-5691-423a-8db3-8ddc462d6898)

**Full Page Chat**
- Side pane for navigation
- White background
- Stamp icon with duo-tone icon as AI user
- Header color: Blue 1; text color: Blue 4
- No sparkle icon in header for full page
- "Review AI generated content" warning underneath text box

**Embedded Chat**
- Max Width: ⅓ of page
- White background
- Header: #EDEEFA (Card Border Color from palette)
- Input box: White with Appian Background (#FAFAFC) around it
- Send button: Airplane icon (white) in semi-rounded square card with Accent blue background, sticky top right next to input box

## Development

### Short Message Banner

```sail
a!sectionLayout(
  label: "",
  contents: {
    a!cardLayout(
      contents: {
        a!sideBySideLayout(
          items: {
            a!sideBySideItem(
              item: a!imageField(
                label: "Image",
                labelPosition: "COLLAPSED",
                images: a!webImage(
                    source: "https://raw.githubusercontent.com/appian-design/aurora/main/docs/assets/images/ai-imagery/sparkle-no-bg"
                ),
                size: "ICON",
                isThumbnail: false,
                style: "STANDARD"
              ),
              width: "MINIMIZE"
            ),
            a!sideBySideItem(
              item: a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: {
                  "We found past procurements that may be relevant to this requirement. ",
                  a!richTextItem(
                    text: {
                      "View"
                    },
                    link: a!safeLink(
                      uri: "google.com",
                      openLinkIn: "NEW_TAB"
                    ),
                    linkStyle: "STANDALONE"
                  )
                }
              )
            )
          },
          alignVertical: "MIDDLE"
        )
      },
      height: "AUTO",
      style: "#E9EDFC",
      padding: "LESS",
      marginBelow: "STANDARD",
      showBorder: false
    )
  }
)
```

### Paragraph Summary Card

```sail
a!sectionLayout(
  label: "",
  contents: {
    a!columnsLayout(
      columns: {
        a!columnLayout(
          contents: {
            a!cardLayout(
              contents: {
                a!cardLayout(
                  contents: {
                    a!sideBySideLayout(
                      items: {
                        a!sideBySideItem(
                          item: a!imageField(
                            label: "Image",
                            labelPosition: "COLLAPSED",
                            images: a!webImage(
                                source: "https://raw.githubusercontent.com/appian-design/aurora/main/docs/assets/images/ai-imagery/sparkle-no-bg"
                            ),
                            size: "ICON",
                            isThumbnail: false,
                            style: "STANDARD"
                          ),
                          width: "MINIMIZE"
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextItem(
                                text: {
                                  "AI Suggestion"
                                },
                                style: {
                                  "STRONG"
                                }
                              )
                            }
                          )
                        )
                      },
                      alignVertical: "MIDDLE"
                    )
                  },
                  height: "AUTO",
                  style: "#E9EDFC",
                  marginBelow: "STANDARD",
                  showBorder: false
                ),
                a!cardLayout(
                  contents: {
                    a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      }
                    )
                  },
                  height: "AUTO",
                  style: "TRANSPARENT",
                  marginBelow: "STANDARD",
                  showBorder: false
                ),
                a!buttonArrayLayout(
                  buttons: {
                    a!buttonWidget(
                      label: "paste suggestion below",
                      icon: "files-o",
                      size: "SMALL",
                      style: "LINK"
                    ),
                    a!buttonWidget(
                      label: "generate again",
                      icon: "refresh",
                      size: "SMALL",
                      style: "LINK"
                    )
                  },
                  align: "START",
                  marginBelow: "LESS"
                )
              },
              height: "AUTO",
              style: "NONE",
              shape: "SEMI_ROUNDED",
              padding: "NONE",
              marginBelow: "STANDARD",
              showBorder: false,
              showShadow: true
            )
          }
        ),
        a!columnLayout(
          contents: {}
        )
      }
    )
  }
)
```

### Prompted Content 

```sail
a!sectionLayout(
  label: "",
  contents: {
    a!cardLayout(
      contents: {
        a!columnsLayout(
          columns: {
            a!columnLayout(
              contents: {
                a!imageField(
                  label: "Image",
                  labelPosition: "COLLAPSED",
                  images: {
                    a!webImage(
                       source: "https://raw.githubusercontent.com/appian-design/aurora/main/docs/assets/images/ai-imagery/sparkle-two-toned"
                    )
                  },
                  size: "TINY",
                  isThumbnail: false,
                  style: "STANDARD"
                )
              },
              width: "EXTRA_NARROW"
            ),
            a!columnLayout(
              contents: {
                a!richTextDisplayField(
                  labelPosition: "COLLAPSED",
                  value: {
                    a!richTextItem(
                      text: {
                        "Tell us what information you need to capture"
                      },
                      style: {
                        "STRONG"
                      }
                    )
                  },
                  marginBelow: "EVEN_LESS"
                ),
                a!richTextDisplayField(
                  labelPosition: "COLLAPSED",
                  value: {
                    a!richTextItem(
                      text: {
                        "You can modify the prompt at any point. Regenerating the prompt will overwrite existing fields in the grid below."
                      },
                      color: "#6C6C75",
                      size: "SMALL"
                    )
                  },
                  marginAbove: "NONE"
                )
              }
            ),
            a!columnLayout(
              contents: {
                a!richTextDisplayField(
                  labelPosition: "COLLAPSED",
                  value: {
                    a!richTextIcon(
                      icon: "angle-down-bold",
                      color: "#6C6C75",
                      size: "MEDIUM_PLUS"
                    )
                  },
                  align: "RIGHT"
                )
              },
              width: "EXTRA_NARROW"
            )
          },
          alignVertical: "MIDDLE",
          marginBelow: "MORE",
          spacing: "DENSE"
        ),
        a!paragraphField(
          label: "Paragraph",
          labelPosition: "COLLAPSED",
          saveInto: {},
          refreshAfter: "UNFOCUS",
          height: "MEDIUM",
          validations: {}
        ),
        a!buttonArrayLayout(
          buttons: {
            a!buttonWidget(
              label: "generate",
              size: "STANDARD",
              style: "SOLID"
            )
          },
          align: "END",
          marginBelow: "NONE"
        )
      },
      height: "AUTO",
      style: "#E9EDFC",
      shape: "SEMI_ROUNDED",
      padding: "STANDARD",
      marginBelow: "STANDARD",
      showBorder: false
    )
  }
)
```
