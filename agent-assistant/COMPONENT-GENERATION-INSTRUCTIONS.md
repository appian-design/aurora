# Component Generation Instructions

This document provides guidance for generating design system component documentation that follows consistent structure and quality standards.

## Overview

Component documentation should be comprehensive yet focused, providing both design guidance and functional SAIL code examples. The complexity and depth should match the component's actual requirements rather than following a rigid template.

## File Structure and Naming

### File Location
- **Components:** `components/[component-name].md`
- **Patterns:** `patterns/[pattern-name].md` 
- **Layouts:** `layouts/[layout-name].md`

### File Naming
- Use lowercase with hyphens for multi-word names
- Match the primary SAIL component name when possible
- Examples: `button.md`, `card.md`, `form-layout.md`

## Document Structure

### Required YAML Front Matter
```yaml
---
status: "stable"           # stable | experimental | deprecated
last_updated: "YYYY-MM-DD" # Use current date
---
```

### Required Sections

#### 1. Component Title and Description
```markdown
# [Component Name]

[1-2 sentence description of the component's purpose and primary use case]
```

#### 2. Design Section
```markdown
## Design

[At least one screenshot or image showing the component in use]

### Variants (if more than one)

[If there is only one variant, list it under the Design heading. If there is more than one, add a Variants sub-heading]

#### [Variant Name]
[Description of this variant]

### Usage Guidelines

#### [Guideline Category]
- [Specific guidance point]
- [Additional guidance]
```

#### 3. Development Section
```markdown
## Development

### Variants (separate section if more than one)

#### [Variant Name]

[Functional SAIL code example - must be syntactically correct]
```

### Optional Sections (Add Based on Component Complexity)

#### Accessibility Section
Include when there are component-specific accessibility considerations:

```markdown
### Accessibility

- [Specific accessibility requirement or consideration]
- [Additional accessibility guidance]
- [Integration with screen readers, if relevant]
```

#### Component Rule Inputs Table
Include for components that are typically used as rules with multiple parameters:

```markdown
### Key Parameters

| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| [parameterName] | [Type] | [Description of what this controls] | [Default value] |
| [anotherParameter] | [Type] | [Description] | [Default value] |
```

## Code Standards

### SAIL Code Requirements
- All code examples must be syntactically correct
- Use proper SAIL component syntax: `a!componentName()`
- Include required parameters for functional examples
- Use meaningful variable names in examples
- Follow SAIL best practices from CLAUDE.md instructions

### Code Block Formatting
- Use `sail` language tag for all SAIL code blocks
- Include complete, runnable examples when possible
- Add comments only when they clarify complex logic
- Ensure proper indentation and formatting

## Content Guidelines

### Writing Style
- Use clear, concise language
- Write in second person ("Use this component to...")
- Be specific and actionable in guidance
- Avoid unnecessary jargon or overly technical language

### Variant Documentation
- Focus on **when** and **why** to use each variant
- Explain the differences between variants clearly
- Provide visual examples when variants look different
- Include code examples for each distinct variant

### Usage Guidance Quality
- Provide specific, actionable guidance
- Include both positive guidance (when to use) and negative guidance (when not to use)
- Address common questions or edge cases
- Connect to broader design system principles when relevant

## Quality Assurance

### Pre-Publication Checklist
- [ ] YAML front matter is properly formatted with current date
- [ ] All SAIL code examples are syntactically correct
- [ ] At least one visual example (screenshot/image) is included
- [ ] File is saved in correct directory with proper naming
- [ ] Markdown syntax is correct throughout
- [ ] All links are functional (if any)
- [ ] Content is specific to this component (not generic)

### Code Validation
- Test all SAIL code examples for syntax errors
- See agent-assistant/SAIL-REPL-INSTRUCTIONS.md for instructions on how to test using Playwright MCP
- Verify component names and parameters are correct
- Ensure examples are complete and functional
- Check that code follows established SAIL patterns

### Content Review
- Verify that guidance is specific and actionable
- Ensure all required variants are documented
- Check that accessibility considerations are addressed if relevant
- Confirm that the complexity level matches the component's actual needs

## Complexity Adaptation

### Simple Components
For straightforward components (like breadcrumbs):
- Minimal design section with basic usage guidance
- Single development example
- Focus on essential information only

### Complex Components  
For sophisticated components (like data tables or forms):
- Multiple variants with detailed explanations
- Comprehensive usage guidelines
- Component rule inputs table
- Dedicated accessibility section
- Multiple development examples

### Determining Appropriate Complexity
- Start with basic structure for all components
- Add complexity sections only when the issue provides detailed requirements
- Use existing component docs as complexity reference points
- When in doubt, start simple - documentation can always be expanded later

## Reference Examples

- **Simple component:** `components/breadcrumbs.md`
- **Complex component:** `components/tabs.md`
- **Medium complexity:** `components/milestones.md`

## Integration with Issue Requirements

When working from an issue template:
- Use the exact component name provided
- Document all variants specified in the issue
- Address any special usage scenarios mentioned
- Include accessibility requirements if specified
- Reference any provided design materials or documentation
- Follow any specific technical constraints mentioned

The issue provides the **what** to document; these instructions provide the **how** to structure and format that documentation.