---
status: "stable"
last_updated: "2025-09-04"
---

# Typography

Guidance on heading styles and how to use them in your interfaces

## Heading Styles

Use title case for all heading styles. Avoid using all caps. By default, use *a!sectionLayout* instead of *a!richTextHeader* for more customizability. Use Gray 4 (#2E2E35) for primary headers and Gray 3 (#6C6C75) for secondary headers. Avoid using the accent color for headers that are not clickable.

!!! info "Helpful Tips"

    When using *a!sectionLayout*, use LARGE size for page titles, SMALL size for section titles and EXTRA_SMALL size for subsection titles.



!!! abstract "Accessibility"

    For *a!sectionLayout*, use the Accessibility Heading Tag parameter to provide semantic context for screen readers.

## Using Section Headings with Actions or Text

### Option 1 of 2: Use Columns Layout

When placing an action component aligned to the other end of the header, place the *a!sectionLayout* header into an *a!columnsLayout*.

### Option 2 of 2: Use Side By Side Layout

When you have patterns that require information or interactions immediately alongside the header, place the *a!headingField* section title into an *a!sideBySideLayout*. Note that you cannot place an *a!sectionLayout* header into an *a!sideBySideLayout*.

## Code Examples

### Example 1: Page Header with Background Color

```
a!headerContentLayout(
  header: {
    a!cardLayout(
      contents: {
        a!headingField(
          text: { "Case Details" },
          color: "#ffffff",
          size: "LARGE"
        )
      },
      height: "AUTO",
      style: "#020A50",
      padding: "MORE",
      marginBelow: "NONE",
      showBorder: false
    )
  },
  contents: {
    /* Page content goes here*/
    
  }
)
```

### Example 2: Section Header with Action Button

```
a!columnsLayout(
  alignVertical: "MIDDLE",
  columns: {
    a!columnLayout(
      contents: {
        a!sectionLayout(
          label: "Section Title",
          labelColor: "STANDARD",
          labelSize: "SMALL",
          labelHeadingTag: "H2",
          marginBelow: "NONE",
          contents: {
            /* Section content goes here */
          }
        )
      }
    ),
    a!columnLayout(
      width: "NARROW",
      contents: {
        a!buttonArrayLayout(
          buttons: a!buttonWidget(
            label: "Add New",
            icon: "plus",
            style: "OUTLINE",
            color: "SECONDARY"
          )
        )
      }
    )
  }
)
```

### Example 3: Section Header with Side-by-Side Information

```
a!sideBySideLayout(
  alignVertical: "MIDDLE",
  items: {
    a!sideBySideItem(
      item: a!headingField(
        text: "Section Title",
        size: "SMALL",
        fontWeight: "SEMI_BOLD",
        headingTag: "H2"
      )
    ),
    a!sideBySideItem(
      width: "MINIMIZE",
      item: a!tagField(
        labelPosition: "COLLAPSED",
        tags: {
          a!tagItem(
            text: 5
          )
        }
      )
    )
  }
)
```
