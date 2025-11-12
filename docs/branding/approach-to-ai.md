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
- Size "ICON"
- Blue 3 only (#2322F0)
- No stamp background

### Duo-Toned Icon
![](https://github.com/user-attachments/assets/709306cb-6d81-48fa-8ed4-b82b4931ee21)

[Download PNG](../assets/images/ai-imagery/sparkle-two-toned.png)

**Use for:**
- Larger images (at least size "TINY")
- Empty states and prominent AI features
- Blue 3 for the large anchor star (#2322F0)
- Blue 2 for the three smaller stars (#DCDEF5)

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

### Auto-Suggestions
![](https://github.com/user-attachments/assets/e1f19e95-3139-4c60-8f54-30b9c149d872)
Short Message Banner

![](https://github.com/user-attachments/assets/957bdbb9-0244-4055-a609-e4495cb5d433)
Paragraph Summary Card

Auto-Suggestions are AI components that work in the background to identify insights or suggestions. These are not user initiated and should be minimally displayed with the ability to be collapsed or closed.

#### When to Use
- Related Cases identification
- Comment or Message summaries
- Document analysis insights
- Duplicate detection alerts

#### Behavior Guidelines
- Show only when valuable - avoid displaying "No results found" messages
- Allow users to collapse sections, especially for large content
- Default to collapsed state for lengthy suggestions
- Hide component entirely if there's an error or unavailable
- Use single-toned icons for compact banner messages

#### Styling Considerations
- **Short Message Banner**: Blue 1 background, single-toned icon (size "ICON"), minimal padding
- **Paragraph Summary Cards**: White background with Blue 1 header, embedded body text, flexible action placement

### Prompted Content

![](https://github.com/user-attachments/assets/4c34cb6c-e750-468f-86ca-19c0acbb9a8f)


Prompted Content occurs when users purposefully engage with AI elements, requiring input to generate responses.

#### When to Use
- Case generation forms
- RFI creation interfaces
- Semantic search functionality
- Content generation prompts

#### Behavior Guidelines
- Display in AI-branded cards to invite engagement
- Embed within frequently accessed interfaces (landing pages, summary views)
- Include instructional text and examples for proper formatting
- Use duo-toned illustrations for prominence
- Provide clear input guidance and expectations

#### Styling Considerations
- **Inline Dialog**: Side-by-side header layout with duo-toned illustration (size "TINY")
- Header text should be bold with Gray 3 instruction text
- Optional expand/collapse functionality
- Conditional dividers based on content complexity

### Chat Interface

![](https://github.com/user-attachments/assets/43d0939a-b1d7-4a5f-b5b3-c058c7a790e4)

Chat interfaces work best when users have multiple questions or when AI needs several attempts to understand prompts. Ideal for wayfinding and parsing large amounts of information.

#### When to Use
- Appian AI Copilot integration
- Document assistance and Q&A
- Complex information navigation
- Multi-turn conversations

#### Behavior Guidelines
- Provide time savings and additional insights
- Avoid for limited information queries or incomplete system context
- Allow users to collapse if not needed
- Hide if errors occur or unavailable
- Include "Review AI generated content" warnings

#### Styling Considerations
- **Full Page Chat**: Side navigation pane, duo-tone AI user stamps, Blue 1 headers with Blue 4 text
- **Embedded Chat**: Maximum ⅓ page width, white background with Blue 1 headers
- Airplane send icon in semi-rounded Accent blue card
- Sticky positioning for input controls

  
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
