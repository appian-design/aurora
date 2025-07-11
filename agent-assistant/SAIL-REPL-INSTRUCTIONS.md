# SAIL Expression Editor Instructions

## Overview
This document provides detailed instructions for interacting with SAIL expression editors on Appian documentation pages using Playwright automation.

## Prerequisites
- Playwright browser automation tools
- Access to Appian documentation pages with embedded SAIL expression editors

## Target URL Example
```
https://docs.appian.com/suite/help/25.2/sail/PageHeaders_MixAndMatchHeaderTypes.html
```

## Step-by-Step Instructions

### 1. Navigate to the Page
```javascript
await page.goto('https://docs.appian.com/suite/help/25.2/sail/PageHeaders_MixAndMatchHeaderTypes.html');
```

### 2. Identify the SAIL Expression Editor
- The SAIL expression editor is embedded within an iframe
- Look for iframe elements in the page snapshot
- The editor uses CodeMirror for syntax highlighting and editing
- Key elements to identify:
  - `iframe` containing the editor
  - `textbox` element (the actual input area)
  - Code display elements showing SAIL syntax
  - "Evaluate" button for executing expressions

### 3. Set Focus in the Editor
**Method**: Click on any visible code element within the editor
- Target: First line of visible SAIL code (e.g., `a!headerContentLayout`)
- This ensures the CodeMirror editor receives focus
- **Note**: Direct clicking on the textbox may fail due to CodeMirror's event handling

```javascript
// Click on the first line of SAIL code to set focus
await page.locator('iframe').contentFrame().getByText('a!headerContentLayout').click();
```

### 4. Select All Content
**Method**: Use keyboard shortcut Cmd+A (macOS) or Ctrl+A (Windows/Linux)
```javascript
await page.keyboard.press('Meta+a'); // macOS
// or
await page.keyboard.press('Ctrl+a'); // Windows/Linux
```

**Verification**: The textbox element should show the full expression content when selected

### 5. Delete Selected Content
**Method**: Press Delete key to remove all selected content
```javascript
await page.keyboard.press('Delete');
```

**Verification**: The textbox should become empty, and code display area should be cleared

### 6. Trigger Evaluation
**Method**: Click the "Evaluate" button
```javascript
await page.locator('iframe').contentFrame().getByRole('button', { name: 'Evaluate' }).click();
```

### 7. Expected Result
**Success Indicator**: Error message appears
```
"Expression evaluation error: Expression does not evaluate to a component"
```

## Technical Details

### Element References
When using Playwright snapshots, look for these key elements:
- `iframe[ref=e53]` - Main container iframe
- `textbox[ref=f1e289]` - CodeMirror input area
- `button "Evaluate"[ref=f1e492]` - Evaluation trigger
- `paragraph[ref=f1e703]` - Error message display area

### CodeMirror Interaction Notes
- CodeMirror editors intercept direct clicks on the textarea
- Click on visible code elements instead of the underlying textarea
- Use keyboard shortcuts for selection rather than mouse operations
- The editor maintains both a hidden textarea and visible code display

### Error Handling
- If clicking on code elements fails, try clicking on different visible text elements
- Ensure proper focus is set before using keyboard shortcuts
- Wait for page elements to be fully loaded before interaction

### Browser Compatibility
- Tested on macOS with Chrome via Playwright
- Use `Meta+a` for macOS, `Ctrl+a` for other platforms
- Iframe content requires special handling in Playwright

## Common Issues and Solutions

### Issue: Click timeout on textbox
**Solution**: Click on visible code text instead of the textbox element directly

### Issue: Select all doesn't work
**Solution**: Ensure editor has focus by clicking on code first

### Issue: Evaluation doesn't trigger
**Solution**: Verify the Evaluate button is visible and clickable within the iframe

### Issue: Error message doesn't appear
**Solution**: Wait for evaluation to complete; error should appear in the preview area

## Example Complete Workflow
```javascript
// 1. Navigate
await page.goto('https://docs.appian.com/suite/help/25.2/sail/PageHeaders_MixAndMatchHeaderTypes.html');

// 2. Set focus by clicking on first line of code
await page.locator('iframe').contentFrame().getByText('a!headerContentLayout').click();

// 3. Select all content
await page.keyboard.press('Meta+a');

// 4. Delete content
await page.keyboard.press('Delete');

// 5. Evaluate empty expression
await page.locator('iframe').contentFrame().getByRole('button', { name: 'Evaluate' }).click();

// 6. Verify error message appears
// Look for: "Expression evaluation error: Expression does not evaluate to a component"
```

## Use Cases
- Testing SAIL expression validation
- Demonstrating error handling in SAIL editors
- Training on SAIL expression editor interaction
- Automated testing of documentation examples