---
status: "stable"
last_updated: "2025-07-07"
---

# Breadcrumbs

Breadcrumbs display the user's current location within the application's hierarchy, allowing them to navigate back to higher-level pages.


## Design

![image](https://github.com/user-attachments/assets/a0994d9f-14a0-4b19-aa3f-891407c870cd)

* **Purpose**: Breadcrumbs are for showing structural hierarchy, not navigation history. The breadcrumbs for a given object should always be the same regardless of how the user arrived at the object.
* **Structure**: Always start the breadcrumb trail with the highest level, e.g., home page.
* **Separators**: Use a forward slash (/) as the separator. Do not add a link on separators.
* **Current Page**: The last item in the trail should typically be the title of the current page and should not be a link. This can be omitted if it causes visual noise or unnecessary wrapping.
* **Clarity**: Use concise and recognizable page titles for labels. If a page title is very long, consider using a shortened but still understandable version in the breadcrumb.
* **Responsiveness**: Shrink links into an ellipsis menu (...) when the available width is insufficient
* **Accessibility**: For screen readers, only the navigable links (not the current page) will be focusable. Add `accessibilityText` to identify the component as breadcrumbs per [ARIA breadcrumb pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/examples/breadcrumb/).
* **When not to use**: Avoid using breadcrumbs for multi-step processes like wizards or forms where a progress bar or step indicator would be more appropriate. Breadcrumbs are for navigating a site's hierarchy, not for indicating progress through a linear workflow.

## Development

```
a!localVariables(
  local!currentNodeId: 6,
  /* This variable would normally be retrieved with a rule like rule!getBreadcrumbsForIdentifier(identifier: local!currentNodeId). */
  local!nodes: a!forEach(
    items: enumerate(local!currentNodeId) + 1,
    expression: choose(
      fv!item,
      a!map(name: "Home", identifier: 1),
      a!map(name: "My Documents", identifier: 2),
      a!map(name: "Strategy", identifier: 3),
      a!map(name: "2018 Road Map", identifier: 4),
      a!map(name: "January Results", identifier: 5),
      a!map(
        name: "January Market Perception",
        identifier: 6
      )
    )
  ),
  {
    a!richTextDisplayField(
      showWhen: local!currentNodeId <> local!nodes[1].identifier,
      labelPosition: "COLLAPSED",
      accessibilityText: "Breadcrumb navigation",
      value: {
        /* Select the appropriate page width and identifier cutoff to prevent the breadcrumb from wrapping on small screens */
        if(
          and(
            a!isPageWidth("PHONE"),
            local!currentNodeId > 4
          ),
          {
            a!richTextItem(
              text: local!nodes[1].name,
              /* The saveInto in this link would run the query or rule necessary to navigate the user to
               * the node in the breadcrumbs that they just clicked on. */
              link: a!dynamicLink(
                value: local!nodes[1].identifier,
                saveInto: local!currentNodeId,
                showWhen: local!currentNodeId <> local!nodes[1].identifier
              ),
              linkStyle: "STANDALONE"
            ),
            a!richTextItem(
              text: "  / ...  /  ",
              /* Replace this with ASDS_NEUTRAL_PALETTE_NEUTRAL_3 */
              color: "#6C6C75"
            ),
            a!richTextItem(
              text: local!nodes[local!currentNodeId].name,
              /* The saveInto in this link would run the query or rule necessary to navigate the user to
               * the node in the breadcrumbs that they just clicked on. */
              linkStyle: "STANDALONE"
            ),

          },
          a!forEach(
            items: local!nodes,
            expression: if(
              fv!isLast,
              a!richTextItem(text: fv!item.name, style: "STRONG"),
              {
                a!richTextItem(
                  text: fv!item.name,
                  /* The saveInto in this link would run the query or rule necessary to navigate the user to
                   * the node in the breadcrumbs that they just clicked on. */
                  link: a!dynamicLink(
                    value: fv!item.identifier,
                    saveInto: local!currentNodeId
                  ),
                  linkStyle: "STANDALONE"
                ),
                a!richTextItem(
                  text: "  /  ",
                  /* Replace this with ASDS_NEUTRAL_PALETTE_NEUTRAL_3 */
                  color: "#6C6C75"
                )
              }
            )
          )
        )
      }
    )
  }
)
```
