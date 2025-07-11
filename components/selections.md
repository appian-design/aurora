---
status: "stable"
last_updated: "2025-07-07"
---

# Selections

Selections are used to allow users to select one or many choices from a list of options.

> [!Note]
> This pattern contains internal-only components

## Design

![](https://github.com/user-attachments/assets/ae4adf0d-ab3f-4a27-b32c-36bf130f5aa8)

### Variants

#### Multi-Select Dropdown 

Use when a user can select multiple options and the labels are long or they cannot be represented well with icons. 

#### Cards as Choices

Use when a user can select a single or multiple options and the labels are short and they can be represented well with icons. 

#### Toggle

Use when a user can select a single option and the selection triggers an immediate, visible change on the page. Toggles are used to enable or turn on a boolean value. 

#### Checkboxes

Use when a user can select a single option and the selection does not trigger an immediate, visible change on the page. Checkboxes are used to indicate yes or no. 

#### Single-Select Dropdowns

Use when a user can select a single option from a list and the labels are long or they cannot be represented well with icons. 

#### Icon-Segmented Control

Use when a user can select a single option from a list and the the labels can entirely be represented via icons. These labels typically are not Appian-specific terms and can be universally recognizable. 

#### Radio Buttons

Use when a user can select a single option from a list and the the labels are long and vary in length. One option is always selected by default.

#### Text-Segmented Control 

Use when a user can select a single option from a list and the the labels are short and consistent. One option is always selected by default.

## Development

### Variants

#### Multi-Select Dropdown 
```
  a!multipleDropdownField(
    choiceLabels: {"Option 1", "Option 2", "Option 3", "Option 4",
                    "Option 5", "Option 6", "Option 7", "Option 8",
                    "Option 9", "Option 10", "Option 11", "Option 12"},
    choiceValues: {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12},
    label: "Multiple Dropdown",
    labelPosition: "ABOVE",
    saveInto: {},
    searchDisplay: "AUTO",
    validations: {}
  )
```

#### Cards as Choices
> [!Note]
> This is an internal-only skin of the cards as choices component. SAIL coming soon. 


#### Toggle
> [!Note]
> This is an internal-only component, but UIF in TX is currently working on an OOTB component in 25.4

```
a!localVariables(
  local!toggleOn, 
  a!toggleField(
    choiceLabel: "Show border",
    toggledOn: local!toggleOn,
    saveInto: local!toggleOn,
    disabled: false,
    accessibilityLabel: ""
    /* accessibilityLabel is required when choiceLabel is not provided */
  )
)
```

#### Checkboxes
```
a!localVariables(
  local!userAgreed,
  a!checkboxField(
    label: "Acknowledge",
    labelPosition: "COLLAPSED", 
    choiceLabels: {"I agree to the terms and conditions."},
    choiceValues: {true},
    /* If local!userAgreed is false, set the value      */
    /* to null so that the checkbox is unchecked        */
    value: if(local!userAgreed, true, null),
    /* We want to save a false value when the checkbox  */
    /* is unchecked, so we need to check whether        */
    /* save!value is null and update the variable if so */
    saveInto: a!save(
      local!userAgreed,
      if(isnull(save!value), false, true)
    )
  )
)
```


#### Single-Select Dropdowns
```
a!dropdownField(
    choiceLabels: {"Option 1", "Option 2", "Option 3", "Option 4",
                    "Option 5", "Option 6", "Option 7", "Option 8",
                    "Option 9", "Option 10", "Option 11", "Option 12"},
    choiceValues: {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12},
    label: "Dropdown",
    labelPosition: "ABOVE",
    placeholder: "Select a Value",
    saveInto: {},
    searchDisplay: "AUTO",
    validations: {}
  )
```

#### Icon-Segmented Control
> [!Note]
> This is an internal-only component

```
a!asSystem_appian_internal(
  {
    a!iconSegmentedChoiceField(
      label: "my label",
      labelPosition: "ABOVE",
      choices: {
        "align-left",
        "align-center",
        "align-right"
      },
      choiceTooltips: { "Start", "Center", "End" },
      value: 1,
      saveInto: fn!null()
    )
  }
)
```

#### Radio Buttons
```
a!radioButtonField(
    choiceLabels: {"Option 1", "Option 2"},
    choiceValues: {1, 2},
    label: "Radio Buttons",
    labelPosition: "ABOVE",
    saveInto: {},
    choiceLayout: "STACKED",
    validations: {}
  )
```

#### Text-Segmented Control 

> [!Note]
> This control is currently in development 
