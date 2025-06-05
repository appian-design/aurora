---
status: "stable"
last_updated: "2024-01-29"
---

# Breadcrumbs

Breadcrumbs are used to showcase multiple nesting of UI drilldowns

## Design

![image](https://github.com/user-attachments/assets/a0994d9f-14a0-4b19-aa3f-891407c870cd)

## Development

```
a!localVariables(
  local!currentNodeId: 4,
  /* This variable would normally be retrieved with a rule like rule!getBreadcrumbsForIdentifier(identifier: local!currentNodeId). */
  local!nodes: a!forEach(
    items: enumerate(local!currentNodeId) + 1,
    expression: choose(
      fv!item,
      a!map(name: "Home", identifier: 1),
      a!map(name: "My Documents", identifier: 2),
      a!map(name: "Strategy", identifier: 3),
      a!map(name: "2018 Road Map", identifier: 4)
    )
  ),
  {
    a!richTextDisplayField(
      labelPosition: "COLLAPSED",
      value: {
        a!forEach(
          items: local!nodes,
          expression: if(
            fv!isLast,
            a!richTextItem(text: fv!item.name, style: "STRONG"),
            {
              a!richTextItem(
                text: fv!item.name,
                /* The saveInto in this link would run the query or rule necessary to navigate the user to *
                   * the node in the breadcrumbs that they just clicked on.                                  */
                link: a!dynamicLink(
                  value: fv!item.identifier,
                  saveInto: local!currentNodeId
                ),
                linkStyle: "STANDALONE"
              ),
              a!richTextItem(
                text: "  /  ",
                color: cons!ASDS_NEUTRAL_PALETTE_NEUTRAL_3
              )
            }
          )
        )
      }
    )
  }
)
```
