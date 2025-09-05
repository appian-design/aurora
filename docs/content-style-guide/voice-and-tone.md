---
status: "stable"
last_updated: "2025-09-05"
---

# Voice and Tone Principles

Content guidance for Appian Solution UIs

## Principles

### Be concise

Write succinct text that makes interfaces more usable, enough for the user to understand and builds trust.

#### Checklist

| Item | Type |
|------|------|
| Include verbs in buttons (e.g.: Create Case) | Buttons |
| Avoid periods in buttons | Buttons |
| Avoid repeating the same terms across components. In particular, look out for repetitive terms across headings, labels and button labels. | Content |
| Use "sorry" in messages that result in serious consequences for the user (e.g.: data loss, interruption to the user's task). Review your design to ensure that you are not able to avoid the situation in the first place. | Content |
| Use "please" only if we are asking the user to do something inconvenient | Content |
| Use sentence case for headings | Heading |
| Avoid using punctuation in headings | Heading |
| Organize headings and subheadings hierarchically. Set H2 under H1, H3 under H2 and so on. | Heading |
| Use headings for page or section titles | Heading |
| Use subheadings to break into specific sections within a larger section to make the content more scannable | Heading |
| Use active voice and avoid passive voice. In an active voice, the subject does the action. In a passive voice, the subject has the action done to it. | Voice |

### Be clear

Write text that is understandable by anyone and anywhere. Offer a helping hand when needed.

#### Checklist

| Item | Type |
|------|------|
| Avoid relying solely on visuals (e.g.: images and icons) alone to communicate. Use words, alt-text and captions (for icons). | Accessibility |
| Aim for high contrast between your font and background. Refer to the Colors in the branding section of the Appian Solutions Design System. | Accessibility |
| In an image alt-text, avoid writing "Image of". The screen reader knows it is an image. | Accessibility |
| Organize `a!sectionLayout` and `a!boxLayout` headings and subheadings in hierarchy - H2 under H1, H3 under H2 etc. | Accessibility |
| When using an icon-only button, use the `tooltip` parameter to label the action | Accessibility |
| Avoid Appian platform, engineering or UI design terms (e.g.: record, summary view, tab) in customer facing content. Instead of "records", use lists. Instead of "summary view" or "tab", use the name of the view. | Terms and Abbreviations |
| Avoid using i.e. or e.g. | Terms and Abbreviations |
| If the abbreviation is well known (e.g.: API), then use it without having to spell it out. If not well known, spell out abbreviations the first time you use it. Then use the short version for all other references. | Terms and Abbreviations |

### Be consistent

Adhere to the rules of grammar to keep our writing consistent.

#### Checklist

| Item | Type |
|------|------|
| Use all caps for file extension types (e.g.: .PDF, .GIF) | Casing |
| Avoid all caps when specifying an exact filename (e.g.: agreement.pdf) | Casing |
| Avoid all caps to specify an action (e.g.: don't use "ALWAYS save before proceeding") | Casing |
| Use title case for form field labels (e.g.: First Name) | Casing |
| Use sentence case for all other scenarios | Casing |
| For full dates, use Date-Month-Year format (e.g.: 26 Jan 2024) | Date |
| For compact dates, use Month-Year format (e.g.: Jan 2024) | Date |
| Use bold text to draw the reader's eye to key terms but keep bolding to the minimum | Font styling |
| Avoid using color as the only way to convey information. Use words to describe the scenario | Font styling |
| Avoid italicizing links | Font styling |
| Avoid mixing italics with other formatting (e.g.: bold or underline) | Font styling |
| Use italics to call out domain specific terms within a sentence (for example, when citing a clause) | Font styling |
| Avoid linking the preceding article before the noun (don't link "the" in "the document") | Links |
| Avoid linking punctuation marks | Links |
| Avoid saying "Click here". Link applicable keywords instead. | Links |

## Examples

### Heading Hierarchy

![](https://github.com/user-attachments/assets/6e203b96-d3d0-4774-bcdb-33a4f1e03953)

In the screen above, Dashboard is set H1, Income is set to H2, and Revenue and Profit Margin are set to H3.

### Button Labels

![](https://github.com/user-attachments/assets/451a9bbd-2da7-48fc-8380-c7d637eccce8)

Since it is clear that the action is related to the case, "View" as a button label is sufficient. Avoid using "View Case".

### Error Messages

![](https://github.com/user-attachments/assets/da5f5def-8dc5-4c00-8776-f562049dfccb)

Use sorry and please only when asking the user to do something inconvenient. Avoid using them in common messages (e.g.: instructions).

### Empty States

![](https://github.com/user-attachments/assets/58c4686d-e868-4ed5-9836-2fba7eeffb18)

Ensure that your empty state content is simple to follow. There should be a title highlighting the state, supporting content and action for the user to take.

### Error States

![](https://github.com/user-attachments/assets/ab693e1c-271d-4f7c-bb5a-f291add9168e)

Ensure that the content in your error state is simple for the user to understand and take action.

### File Extensions

![](https://github.com/user-attachments/assets/922a7566-82fa-46a4-af4e-b6242e79d9ae)

Use all caps for file extension types (e.g.: .PDF, .GIF).
