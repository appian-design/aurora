---
status: "stable"
last_updated: "2025-09-05"
---

# Approach to AI

The UX of AI in Appian Solutions

## Overview

Appian Solutions will use a modified version of the Appian AI Copilot Brand for all AI components. The design is consistent and distinct so that the end-user can quickly identify when AI is being used.

## Colors

| Label | Default Color | Notes |
|-------|--------------|-------|
| Header text | #08088D | |
| Iconography | #08088D | |
| Card Background - Blue | #F2F4FD | When card is against a white background or nested within a dialog box |
| Card Background - White | #FFFFFF | When card is against the default gray background |

## Imagery

Due to the "Sparkle" icon not being available externally, use a custom image uploaded to the system for the AI components.

### Sparkle Image - Dark

![](https://github.com/user-attachments/assets/b85b54f7-8bb0-4735-bf4f-5687938630c3)

Use for small iconography

- [Download PNG](../assets/images/ai-imagery/sparkle-dark-1.png)
- [Download SVG](../assets/images/ai-imagery/sparkle-dark-2.svg)

### Sparkle Image - Light

![](https://github.com/user-attachments/assets/b2cce3d1-1022-45fa-b710-9eef42b99b45)

Use for larger, more illustrative elements

- [Download PNG](../assets/images/ai-imagery/sparkle-light-1.png)
- [Download SVG](../assets/images/ai-imagery/sparkle-light-2.svg)

### Wizard Image

![](https://github.com/user-attachments/assets/c37ac5a3-78da-46a8-8ee2-fd279c8d67f9)

Reserve for marketing and sales slides, presentations and demos only. The light and dark stamps are an homage to the concept without using the explicit illustration.

### Usage Examples

![](https://github.com/user-attachments/assets/1811b902-b743-4f8b-a02d-94d7e8c30da2)

Prompting the user to navigate to the AI Procedure Copilot from the Contract Writing landing page

![](https://github.com/user-attachments/assets/9f3deb74-ce3a-45da-8f38-8f1d401fa215)

Chatbot interface for users to ask questions about a case within Case Management

![](https://github.com/user-attachments/assets/4a5b5e26-b927-4b69-b51c-e1a3642352f6)

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
- For generated content consider adding instructional text such as "Review generated content to make sure it's accurate and appropriate"


## UX Guidance

We have defined guidelines for three use cases of AI based on how the user interacts with the component. Each situation has unique guidance for when and how to display the UI.

### Auto-Suggestions

Auto-Suggestions are AI components that are working in the background to identify insights or suggestions. These are not user initiated and should be more minimally displayed or have the ability to be collapsed or closed.

These should appear only when valuable. For example, if you have a query running to see if there are duplicate items, it should not appear and say "No duplicate found" and instead show only when a suggestion is applicable.

#### Example Use Cases
- Related Cases
- Comment or Message Summary
- Document Summary

#### Behavior
- Allow the user to collapse the section. If the suggested content is going to be large, considering having the section be default-collapsed.
- Do not show the component if there is an error or if it is unavailable

### Prompted Content

Prompted Content is when a user purposefully engages with an AI element. These components require the user to provide input to create a response.

#### Example Use Cases
- Generating a Case
- Generating an RFI
- Semantic Search

#### Behavior
- Display in an AI-branded card to invite the user to use the AI feature. This is usually embedded within a frequently accessed interface, e.g. a landing page or summary view, in order to encourage the use of more AI functionality.
- Include text that suggests how the user should use this AI module or examples so the user knows how to format their request

### Chat Interface

Chatbots are best when you anticipate the user to have more than one question or the AI will need multiple attempts to understand the prompt. These are often used for wayfinding or parsing through high-quantities of information.

Chatbots should be used to provide time savings or additional insight. If they are querying limited information or cannot gather the full context of a system, then you should not use them.

#### Example Use Cases
- Appian AI Copilot
- Document Assistant

#### Behavior
- Allow the user to collapse the section if they do not want to use it
- Do not show the component if there is an error or if it is unavailable
