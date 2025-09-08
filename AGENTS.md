# AGENTS.md - Design System Documentation Guide

## Overview
This guide helps AI assistants understand and work with the design system documentation in this repository. The documentation is organized to provide comprehensive guidance for both designers and developers working with our design system.

## Repository Structure

```
design-system-docs/
├── .github/workflows/    # GitHub Actions for automated deployment
├── docs/                 # Contains all Markdown documentation files
│   ├── index.md          # The home page
│   ├── assets/           # Images, CSS, or JS overrides
│   ├── components/       # Individual UI components
│   ├── patterns/         # Reusable design patterns  
│   ├── layouts/          # Page-level layout templates
│   ├── branding/         # Brand identity and visual elements
│   ├── accessibility/    # Accessibility guidelines and checklist
│   ├── content-style-guide/ # Content and writing guidelines
│   ├── stylesheets/      # Custom CSS overrides
│   └── SAIL_CODING_GUIDE.md # Coding guidance for SAIL framework
├── mkdocs.yml            # MkDocs configuration file
├── requirements.txt      # Python dependencies for local development
└── README.md             # Repository overview and setup instructions
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
- Reference the comprehensive [Accessibility Checklist](docs/accessibility/checklist.md) for detailed requirements

### 4. Developer-Friendly
- Provide working code examples
- Include common variations and use cases
- Explain the reasoning behind design decisions
- Reference the [SAIL Coding Guide](docs/SAIL_CODING_GUIDE.md) for framework-specific implementation guidance

## Global Resources

### Accessibility Checklist
The repository includes a comprehensive [Accessibility Checklist](docs/accessibility/checklist.md) that covers:
- WCAG 2.1 AA compliance requirements
- Testing procedures and tools
- Common accessibility patterns
- Implementation guidelines for inclusive design

### SAIL Coding Guide  
The [SAIL Coding Guide](docs/SAIL_CODING_GUIDE.md) provides:
- Framework-specific implementation patterns
- Best practices for SAIL development
- Code examples and conventions
- Integration guidance for design system components

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
- Always include accessibility considerations using the [Accessibility Checklist](docs/accessibility/checklist.md)
- Follow coding patterns from the [SAIL Coding Guide](docs/SAIL_CODING_GUIDE.md) when applicable
- Provide complete, working examples
- Follow the established documentation format

### Integration with MCP Server
This documentation is designed to work with the companion MCP server that makes this content available directly within development environments. The site is built using MkDocs Material and deployed via GitHub Pages. Changes made here are automatically available through the MCP interface.

## Related Resources

- [Contributing Guide](CONTRIBUTING.md) - How to contribute to this documentation
- [Code of Conduct](CODE_OF_CONDUCT.md) - Community guidelines
- [Design System Server](https://github.com/pglevy/design-system-server) - MCP server for AI integration