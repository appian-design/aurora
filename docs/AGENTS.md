# AGENTS.md - Design System Documentation Guide

## Overview
This guide helps AI assistants understand and work with the design system documentation in this repository. The documentation is organized to provide comprehensive guidance for both designers and developers working with our design system.

## Repository Structure

```
design-system-docs/
├── components/         # Individual UI components
├── patterns/          # Reusable design patterns  
├── layouts/           # Page-level layout templates
├── branding/          # Brand identity and visual elements
├── accessibility/     # Accessibility guidelines
├── content-style-guide/ # Content and writing guidelines
├── _layouts/          # Jekyll layout templates
├── _includes/         # Jekyll include templates
└── _config.yml        # Jekyll configuration
```

## Documentation Format

All documentation files use Markdown with YAML front matter:

```yaml
---
status: "stable"
last_updated: "YYYY-MM-DD"
parent: "category-name"
related: ["related-item-1", "related-item-2"]
---

# Component/Pattern Name

## Design
[Design guidance, usage guidelines, visual examples]

### Accessibility
[Accessibility considerations and requirements]

## Development
[Implementation guidance and code examples]

### Sample 1
```html
<code examples>
```

### Sample 2
```html
<additional code examples>
```
```

## Key Principles

### 1. Comprehensive Coverage
- Each component/pattern should include both design and development guidance
- Include accessibility considerations for all components
- Provide multiple code examples when helpful

### 2. Consistency
- Follow the established file structure and naming conventions
- Use consistent terminology across all documentation
- Maintain the same level of detail across similar components

### 3. Accessibility First
- Every component must include accessibility guidance
- Follow WCAG 2.1 AA standards
- Include ARIA patterns and semantic HTML examples

### 4. Developer-Friendly
- Provide working code examples
- Include common variations and use cases
- Explain the reasoning behind design decisions

## Content Guidelines

### Writing Style
- Use clear, concise language
- Write for both designers and developers
- Include context for design decisions
- Provide actionable guidance

### Code Examples
- Use semantic HTML
- Include proper ARIA attributes
- Show responsive patterns
- Demonstrate accessibility features

### Visual Examples
- Include screenshots or diagrams when helpful
- Show different states (hover, focus, disabled)
- Demonstrate responsive behavior

## Working with This Repository

### For AI Assistants
- Reference existing patterns when suggesting new components
- Maintain consistency with established conventions
- Always include accessibility considerations
- Provide complete, working examples
- Follow the established documentation format

### Integration with MCP Server
This documentation is designed to work with the companion MCP server that makes this content available directly within development environments. Changes made here are automatically available through the MCP interface.

## Related Resources

- [Contributing Guide](CONTRIBUTING.md) - How to contribute to this documentation
- [Code of Conduct](CODE_OF_CONDUCT.md) - Community guidelines
- [Design System Server](https://github.com/pglevy/design-system-server) - MCP server for AI integration