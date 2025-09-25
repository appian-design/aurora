---
status: "stable"
last_updated: "2025-09-04"
---

# More / Less Link

More / Less Links are used to display a certain amount of text content and provide a link for the user to expand and view additional information. It prevents clutter in an interface that might be prone to long text.

![](https://github.com/user-attachments/assets/ff935aef-7cbf-437a-986a-9128d892fd17)

## Usage

### When to Use
Use this pattern when:

- You have a wide range of character lengths across content items
- You want consistent grid row heights without some rows being much taller than others
- The expected text length varies significantly and won't consistently fit within the available space

### Character Limit Guidelines
- **Default recommendation**: 255 characters
- **For grids**: Select a limit that keeps expanded text only about twice as tall as regular rows. Avoid limits that are too high, as this can make text columns appear heavier or more dense compared to other columns

## Development

### Component

```
a!localVariables(
  local!text: "The rapid advancement of artificial intelligence and machine learning is profoundly reshaping the landscape of the financial services industry, moving far beyond algorithmic trading and into the core functions of banking, insurance, and personal finance. Financial institutions are increasingly leveraging AI for sophisticated fraud detection, analyzing vast datasets in real-time to identify and flag suspicious transactions with a level of accuracy and speed previously unattainable.",
  local!cutoff: 255,
  local!show: true,
  if(
    len(local!text) <= local!cutoff,
    a!richTextDisplayField(
      labelPosition: "COLLAPSED",
      value: {
        local!text,
      }
    ),
    if(
      local!show,
      a!richTextDisplayField(
        labelPosition: "COLLAPSED",
        value: {
          a!richTextItem(text: left(local!text, local!cutoff)),
          "... ",
          a!richTextItem(
            text: "More",
            link: a!dynamicLink(
              label: "",
              saveInto: a!save(local!show, not(local!show))
            ),
            color: "ACCENT",
            style: "STRONG"
          )
        }
      ),
      a!richTextDisplayField(
        labelPosition: "COLLAPSED",
        value: {
          a!richTextItem(text: local!text),
          "  ",
          a!richTextItem(
            text: "Less",
            link: a!dynamicLink(
              label: "",
              saveInto: a!save(local!show, not(local!show))
            ),
            color: "ACCENT",
            style: "STRONG"
          )
        }
      )
    )
  )
)
```

### Rule Inputs

| Name | Type | Description |
| :---- | :---- | :---- |
| text | Text | Full text that needs to be displayed. |
| cutoff | Number (Integer) | Number of characters to display in the "Less" state. |
