---
status: "stable"
last_updated: "2024-12-19"
---

# Forms
Facilitate user input by using the appropriate form style and input types for each scenario

![](https://github.com/user-attachments/assets/943d8b37-9cba-44af-a07b-ddd2deb8e500)

## Design
![](https://github.com/user-attachments/assets/1023e7c2-2f86-42d4-a2dd-01d946d19c80)
Form in a dialog
<br></br>

Forms serve as a way for users to have a conversation with our products. Great form design enhances the ability for the user to successfully complete their tasks. 

Every form needs to have a header, content and form navigation. A form can be used in a site page or in a dialog.

### Usage

#### Dialog
![](https://github.com/user-attachments/assets/2be94769-e053-4db8-8631-6020efe1adeb)
In multi-step forms, place the “Back” button first followed by the “Cancel” button next left-aligned. Right align the submit or next action.

![](https://github.com/user-attachments/assets/556b8845-d773-47ab-81c3-46a8271e2ca0)
Provide confirmation upon submission
<br></br>

Checklist:
|Item|Type|
|--- |--- |
|Use “Solid” style for the “submit” or “next” action (in multi-step forms)|Buttons|
|Use “Link” style for the “cancel” action|Buttons|
|Use “Outline” style for “back” navigation in multi-step forms|Buttons|
|Use “Update” (not “Edit”) for the “submit” action when a user is modifying an item|Buttons|
|In multi-step forms, place the “Back” button first followed by the “Cancel” button next left-aligned. Right align the submit or next action.|Buttons|
|Stack buttons on mobile in the order as prescribed (see example image)|Buttons|
|In related actions, the form header should match the action Display Name (button label)|Buttons|
|Verbs in the header (e.g.: Create Case) should match the submit button label and any button label used to launch the form|Content|
|Use “Update” (not “Edit”) when a user is modifying an item|Content|
|Group related fields close to each other as much as possible to minimize context switching|Content|
|If there is a required input field, add instructions under the form header that specifies - "Mandatory fields are marked with an asterisk (*)"|Content|
|Use the a!FormLayout component|Dialogs|
|Avoid using the a!HeaderContentLayout component|Dialogs|
|Use a dialog size that matches field width. Avoid using a Large dialog size for sparse forms.|Dialogs|
|Place fields in one column as much as possible|Dialogs|

#### Site Page
![](https://github.com/user-attachments/assets/32be4251-0458-4e04-9b6b-3de88e0b3520)
In a form with 3+ steps, provide a review step that lists all the fields as read -only. Allow the user to navigate back to update information.

Checklist:
|Item|Type|
|--- |--- |
|Use “Solid” style for the “submit” or “next” action (in multi-step forms)|Buttons|
|Use “Link” style for the “cancel” action|Buttons|
|Use “Outline” style for “back” navigation in multi-step forms|Buttons|
|Use “Update” (not “Edit”) for the “submit” action when a user is modifying an item|Buttons|
|In multi-step forms, place the “Back” button first followed by the “Cancel” button next left-aligned. Right align the submit or next action.|Buttons|
|Stack buttons on mobile in the order as prescribed (see example image)|Buttons|
|In related actions, the form header should match the action Display Name (button label)|Buttons|
|Verbs in the header (e.g.: Create Case) should match the submit button label and any button label used to launch the form|Content|
|Use “Update” (not “Edit”) when a user is modifying an item|Content|
|Group related fields close to each other as much as possible to minimize context switching|Content|
|If there is a required input field, add instructions under the form header that specifies - "Mandatory fields are marked with an asterisk (*)"|Content|
|In a multi-step form, use the milestone component to indicate progress|Progress|
|In a multi-step form, avoid specifying a header label for the step. The milestone step label is sufficient.|Progress|
|In a form with 3+ steps, provide a review step that lists all the fields as read -only. Allow the user to navigate back to update information.|Progress|
|Provide confirmation upon submission|Progress|

### Fields
![](https://github.com/user-attachments/assets/4a3978f7-245b-42e6-8a5d-5f4f78c79304)
Use the instructions parameter to provide information vital to form completion

![](https://github.com/user-attachments/assets/8cc52179-593c-4af3-9e58-3407a675850a)
Use field level validation as much as possible. Define the error and provide guidance on how to resolve it. Avoid generic error messages. Do not disable a button, instead let the user click and view the error to understand what is missing or incorrect

Checklist:
|Item|Type|
|--- |--- |
|Avoid specifying character limits for fields where the user is unlikely to reach the limit (e.g.: First Name)|Character Limits|
|Set a field width that matches the expected size of the value. Avoid using a full screen width if we expect the value to be smaller in size.|Character Limits|
|Show character limits where long lengths of text may be possible (e.g.: a!paragraphField()). Use 500, 1000, 2000 or 4000 as character limits based on your use case. Avoid going over 4000 as a character limit.|Character Limits|
|Avoid asking the user for the same information multiple times (e.g.: username)|Content|
|Disable a field only if will be enabled depending on the value of another field.|Disabled Fields|
|Avoid disabling fields that will remain read-only. Set the field as "read only" instead.|Disabled Fields|
|When using repeated blocks of fields (e.g.: "Address Line 1", "Address Line 2"), set the accessibilityText parameter on each field to indicate which block the label is associated with|Grouping|
|Use the instructions parameter to provide information vital to form completion|Instructions|
|Avoid using the a!RichTextDisplayField component to provide instructions. Use the field's instructions parameter instead.|Instructions|
|Always use the label parameter|Label|
|Set LabelPosition to "Above"|Label|
|Avoid verbs. Just use the noun of what is being requested (e.g.: "Customer" instead of "Search Customer")|Label|
|Use the label parameter to show input format (e.g.: Date of Birth(MM/DD/YYYY))|Label|
|Use sentence casing|Label|
|Use a picker when the user has an idea of what they are looking for. Use "Search" in the placeholder parameter.|Picker vs. Dropdown|

### When to Use Inline Dialogs vs. Modals

|          |![forms-inline-dialog](https://github.com/user-attachments/assets/5f2f25dc-ce0f-4a7e-b73e-aa3a3175cbec) Use an Inline Dialog When| ![forms-modal-dialog](https://github.com/user-attachments/assets/26dd1986-fe53-49ca-b226-a66b3df7a705) Use a Modal When |
|----------|---------|----------|
|**Number of Fields**|Only one or two fields need editing|More than two fields are required for data entry|
|**Task Complexity**|The action involves one step|The action involves one or multiple steps that are in a single or double column with input fields| 
|**Contextual Awareness**|Visibility of the editable content and the parent page is necessary|Full attention to the task is necessary without the need for referring back to the original context|
|**Progressive Disclosure**|No progressive disclosure is needed|Additional fields or options need to be revealed progressively|

## Development

#### Dialog

#### Site Page



