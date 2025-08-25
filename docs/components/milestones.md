---
status: "stable"
last_updated: "2024-01-29"
---

# Milestones

Wizard milestones provide a guided experience to help users complete their tasks. Milestones should clearly identify each step in the process as well as the user’s progress through those steps.

![](https://github.com/user-attachments/assets/357aadac-0f84-4ddf-ab74-484a6a6e09f5)

## Design

### Variants

#### Default

![](https://github.com/user-attachments/assets/7c20e215-cdff-4dfe-a6b4-ff0b8612bed9)

Use the Milestone Component (a!milestoneField) to leverage built-in accessibility parameters. Use this component when your form has at least 3 steps. Depending on the form’s layout, apply a horizontal or vertical layout.

#### Using Stamps as Steps

![](https://github.com/user-attachments/assets/b9940a65-bc43-4444-898e-25d698d122b4)

Use this pattern when your form has at least 3 steps with a form layout that permits the user of a vertical milestone layout. This layout is particularly useful on UIs that are tailored to users that are new to Appian or the solution.

**Note:** For pending steps, use a light gray (#EDEEF2) stamp background color with dark gray (#2E2E35) text. For the current step and completed steps, use an accent background color with white text.

#### Using Instructions as Steps

![](https://github.com/user-attachments/assets/f1d75653-9e14-498d-8d11-4ef8c5825c49)

Use the instructions parameter of `a!formlayout` when the milestone has 2 steps.

#### Use as Horizontal Progress Indicator

![](https://github.com/user-attachments/assets/cef96499-0536-439b-87d7-9fa09ac6e1c4)

Use the horizontal layout when there are 4 - 6 steps in the workflow.

**Note:**

- Identify opportunities to reduce steps as much as possible. A good rule of thumb is to have at most 6 steps.
- Use succinct labels for each step to avoid wrapping
- For accessibility considerations, set the label of the milestone wizard component to “Progress” and the label position to “Collapsed”

### Usage

#### Using Links to Navigate Steps

![](https://github.com/user-attachments/assets/dda48fb0-991b-4b66-a111-9980d5f3fcbc)

Use the “Next” and “Back” buttons to provide navigation across the form steps. Use the Links parameter of a!milestoneField to navigate to a previous step but avoid adding Links for pending form steps.

#### Orientation

![](https://github.com/user-attachments/assets/2c340524-1fc5-4b9d-b0ee-46b90f71dd4b)

Use the following considerations when deciding on the Milestone orientation:

1. **Number of Steps**<br/>For 3-6 steps, use your best judgment on Vertical vs. Horizontal. Vertical milestones may look too sparse with 3 steps and horizontal milestones may look crowded with 5-6 steps. Use Vertical orientation for 6+ steps.
1. **Step Label Length**<br/>Avoid text wrapping of step labels. Make the label succinct or reduce the label size to fit in one line.
1. **Dialog Box Size**<br/>Use Vertical orientation for Large Dialog Box size record actions. Use Horizontal orientation for Medium and Small Dialog Box sizes.

## Development

### Stamp Milestone Component

```
a!localVariables(
  local!defalutMilestones: {
    "Basic Information",
    "Additional Details",
    "Upload Files",
    "Review"
  },
  local!defaultStep: 3,
  a!sectionLayout(
    label: "",
    contents: {
      a!forEach(
        if(
          a!isNullOrEmpty(ri!milestones),
          local!defalutMilestones,
          ri!milestones
        ),
        a!sideBySideLayout(
          items: {
            if(
              fv!index < if(
                a!isNullOrEmpty(ri!currentStep),
                local!defaultStep,
                ri!currentStep
              ),
              a!sideBySideItem(
                item: a!stampField(
                  labelPosition: "COLLAPSED",
                  icon: "check",
                  contentColor: "STANDARD",
                  size: "TINY"
                ),
                width: "MINIMIZE"
              ),
              if(
                fv!index = if(
                  a!isNullOrEmpty(ri!currentStep),
                  local!defaultStep,
                  ri!currentStep
                ),
                a!sideBySideItem(
                  item: a!stampField(
                    label: "",
                    labelPosition: "COLLAPSED",
                    text: fv!index,
                    contentColor: "STANDARD",
                    size: "TINY"
                  ),
                  width: "MINIMIZE"
                ),
                a!sideBySideItem(
                  item: a!stampField(
                    label: "",
                    labelPosition: "COLLAPSED",
                    text: fv!index,
                    backgroundColor: "#EDEEF2",
                    contentColor: "#2E2E35",
                    size: "TINY"
                  ),
                  width: "MINIMIZE"
                ),

              )
            ),
            a!sideBySideItem(
              item: a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: {
                  a!richTextItem(
                    text: { fv!item },
                    color: if(
                      fv!index < if(
                        a!isNullOrEmpty(ri!currentStep),
                        local!defaultStep,
                        ri!currentStep
                      ),
                      "ACCENT",
                      "STANDARD"
                    ),
                    style: if(
                      fv!index = if(
                        a!isNullOrEmpty(ri!currentStep),
                        local!defaultStep,
                        ri!currentStep
                      ),
                      "STRONG",
                      "PLAIN"
                    ),
                    size: "MEDIUM"
                  )
                },
                marginBelow: "NONE"
              )
            )
          },
          alignVertical: "MIDDLE"
        )
      )
    },
    marginBelow: "NONE"
  )
)
```

### Stamp Milestone Component Rule Usage

```
rule!Stamp_Milestone_Component(
  milestones: {"Create Document", "Additional Information", "Add Files", "Review"},
  currentStep: 2
)
```

### Stamp Milestone Component Rule Inputs

|Name|Type|Description|
|--- |--- |--- |
|milestones|Array of Text|List of milestone steps.|
|currentStep|Integer|The step that is currently being highlighted.|
