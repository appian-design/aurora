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
| Header Background | Blue 1 (#EDEEFA) | For chat interfaces |
| Secondary Background | Blue 2 (#DCDEF5) | For smaller star elements |

## Imagery

### Single-Toned Icon
![](https://github.com/user-attachments/assets/30d7de82-ca19-4cd4-8691-c4b521c25232)

[Download PNG](../assets/images/ai-imagery/sparkle-single-tone.png)

**Use for:**
- Banner messages and single-row headers
- Compact UI elements
- Size `ICON`
- Blue 3 only (#2322F0)
- No stamp background

### Duo-Toned Icon
![](https://github.com/user-attachments/assets/709306cb-6d81-48fa-8ed4-b82b4931ee21)

[Download PNG](../assets/images/ai-imagery/sparkle-two-toned.png)

**Use for:**
- Larger images (at least size `TINY`)
- Empty states and prominent AI features
- Blue 3 for the large anchor star (#2322F0)
- Blue 2 for the three other stars (#DCDEF5)

### Previous Icons

- [Sparkle Image - Dark PNG](../assets/images/ai-imagery/sparkle-dark-1.png)
- [Sparkle Image - Dark SVG](../assets/images/ai-imagery/sparkle-dark-2.svg)
- [Sparkle Image - Light PNG](../assets/images/ai-imagery/sparkle-light-1.png)
- [Sparkle Image - Light SVG](../assets/images/ai-imagery/sparkle-light-2.svg)

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

## Usage Examples

We have defined guidelines for three use cases of AI based on how the user interacts with the component. Each situation has unique guidance for when and how to display the UI.

### Auto-Suggestions
![](https://github.com/user-attachments/assets/e1f19e95-3139-4c60-8f54-30b9c149d872)
Short Message Banner

![](https://github.com/user-attachments/assets/957bdbb9-0244-4055-a609-e4495cb5d433)
Paragraph Summary Card

Auto-Suggestions are AI components that are working in the background to identify insights or suggestions. These are not user initiated and should be minimally displayed with the ability to be collapsed or closed.

These should appear only when valuable. For example, if you have a query running to see if there are duplicate items, it should not appear and say "No duplicate found" and instead show only when a suggestion is applicable.

#### Example Use Cases
- Related Cases
- Comment or Message Summary
- Document Summary

#### Behavior
- Allow the user to collapse the section. If the suggested content is going to be large, considering having the section be default-collapsed.
- Do not show the component if there is an error or if it is unavailable

### Prompted Content

![](https://github.com/user-attachments/assets/4c34cb6c-e750-468f-86ca-19c0acbb9a8f)

Prompted Content occurs when users purposefully engage with AI elements, requiring input to generate responses.

#### Example Use Cases
- Generating a Case
- Generating an RFI
- Semantic Search

#### Behavior
- Display in an AI-branded card to invite the user to use the AI feature. This is usually embedded within a frequently accessed interface, e.g. a landing page or summary view, in order to encourage the use of more AI functionality.
- Include text that suggests how the user should use this AI module or examples so the user knows how to format their request

### Chat Interface

![](https://github.com/user-attachments/assets/43d0939a-b1d7-4a5f-b5b3-c058c7a790e4)

Chatbots are best when you anticipate the user to have more than one question or the AI will need multiple attempts to understand the prompt. These are often used for wayfinding or parsing through high-quantities of information.

Chatbots should be used to provide time savings or additional insight. If they are querying limited information or cannot gather the full context of a system, then you should not use them.

#### Example Use Cases
- Appian AI Copilot
- Document Assistant

#### Behavior
- Allow the user to collapse the section if they do not want to use it
- Do not show the component if there is an error or if it is unavailable

#### Styling Considerations
- **Full Page Chat**: Side navigation pane, duo-tone AI user stamps, Blue 1 headers with Blue 4 text
- **Embedded Chat**: Maximum ⅓ page width, white background with Blue 1 headers
  
## Development

### Auto-Suggestion - Short Message Banner

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
                    source: "https://raw.githubusercontent.com/appian-design/aurora/main/docs/assets/images/ai-imagery/sparkle-single-tone"
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

### Auto-Suggestion - Paragraph Summary Card

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
                                source: "https://raw.githubusercontent.com/appian-design/aurora/main/docs/assets/images/ai-imagery/sparkle-single-tone"
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
