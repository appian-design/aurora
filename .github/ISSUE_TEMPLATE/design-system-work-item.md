---
name: Design System Work Item
about: Template for design system backlog items with clear deliverable expectations
title: '[COMPONENT/PATTERN/LAYOUT]: [Brief Description]'
labels: ['design-system', 'backlog']
assignees: ''
---

## Work Item Type
<!-- Select one by putting an "x" in the brackets -->
- [ ] New Component
- [ ] New Pattern  
- [ ] New Layout
- [ ] Component Update
- [ ] Pattern Update
- [ ] Layout Update
- [ ] Documentation Fix

## Component Details
**Name:** [Exact component/pattern/layout name]
**Category:** [components/patterns/layouts/branding/accessibility]
**File Path:** [e.g., components/button.md or patterns/data-table.md]

## Deliverable Requirements

### Documentation Structure
<!-- Check all sections that must be included in the final deliverable -->
- [ ] YAML front matter (Name, Last Updated, Status, Only Applies to)
- [ ] Brief component summary
- [ ] Design section with variants
- [ ] Usage guidelines with specific topics
- [ ] Development section with code examples
- [ ] Accessibility considerations (if applicable)

### Required Content
**Variants to Document:**
- [ ] [Variant 1 name]
- [ ] [Variant 2 name]
- [ ] [Additional variants as needed]

**Usage Topics to Cover:**
- [ ] [Topic 1, e.g., Orientation, Sizing, States]
- [ ] [Topic 2, e.g., Navigation, Interaction]
- [ ] [Additional topics as needed]

**Code Examples Required:**
- [ ] SAIL code for each variant
- [ ] Component rule inputs table
- [ ] [Other specific code requirements]

## Acceptance Criteria
<!-- Clear, testable criteria for completion -->
- [ ] Documentation follows the established markdown template structure
- [ ] All required variants are documented with descriptions
- [ ] Usage guidelines are specific and actionable
- [ ] SAIL code examples are provided and functional
- [ ] Component rule inputs table is complete
- [ ] Images/screenshots are included for visual reference
- [ ] File is saved in correct directory with proper naming

## Context & Background
<!-- Provide context for why this work is needed -->
**Business Need:**
[Why is this component/pattern/layout needed?]

**Design Requirements:**
[Any specific design constraints or requirements]

**Technical Constraints:**
[Any platform or technical limitations to consider]

## Reference Materials
<!-- Links to designs, existing implementations, or related documentation -->
- Design mockups: [Link]
- Existing implementation: [Link]
- Related components: [Link to related docs]
- Inspiration/examples: [Link]

## Definition of Done
<!-- Specific criteria that must be met for this issue to be considered complete -->
- [ ] Markdown file created/updated in correct location
- [ ] Content follows established template structure exactly
- [ ] All code examples are tested and functional
- [ ] Documentation is reviewed and approved
- [ ] Changes are merged to main branch
- [ ] MCP server can successfully retrieve and serve the content

## AI Agent Guidance
<!-- Specific instructions for AI agents working on this issue -->
**Expected Output:** A complete markdown file following the established template structure with all required sections populated.

**Key Requirements:**
- Use exact component name in file name and headers
- Include functional SAIL code examples
- Provide specific, actionable usage guidance
- Follow YAML front matter format precisely
- Include component rule inputs table with proper formatting

**Quality Checks:**
- Verify all markdown syntax is correct
- Ensure code blocks use proper language tags
- Confirm all required sections are present and populated
- Validate that content is specific to this component/pattern/layout