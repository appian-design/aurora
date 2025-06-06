# Design System Documentation

A centralized, developer-accessible design system documentation platform that makes design guidance available directly within coding environments through AI assistants and other tools.

## Overview

This repository serves as the single source of truth for our design system documentation, organized in a way that's both human-readable and machine-accessible through Model Context Protocol (MCP) servers.

## Helpful Tools

- [GitHub-flavored Markdown reference](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [markdownTables](https://jmalarcon.github.io/markdowntables/): for converting HTML table content to Markdown tables

## Repository Structure

```
design-system-docs/
├── about/                  # About the design system
│   ├── release-notes.md
│   ├── prioritizing-ui-designs.md
│   ├── our-solutions.md
│   └── inspiration.md
├── branding/               # Brand identity and visual elements
│   ├── logo-and-favicon.md
│   ├── colors.md
│   ├── icons.md
│   ├── typography.md
│   └── approach-to-ai.md
├── content-style-guide/    # Content and writing guidelines
│   ├── voice-and-tone.md
│   └── dictionary.md
├── accessibility/          # Accessibility guidelines and checklists
│   └── checklist.md
├── layouts/                # Page-level layout templates
│   ├── dashboards.md
│   ├── empty-states.md
│   ├── forms.md
│   ├── grids.md
│   ├── landing-pages.md
│   ├── messaging-module.md
│   ├── pane-layouts.md
│   ├── portals.md
│   └── record-views.md
├── patterns/               # Reusable design patterns
│   ├── banners.md
│   ├── calendar-widget.md
│   ├── charts.md
│   ├── comment-thread.md
│   ├── document-summary.md
│   ├── document-cards.md
│   ├── inline-dialog.md
│   ├── key-performance-indicators.md
│   ├── notifications.md
│   └── pick-list.md
├── components/             # Individual UI components
│   ├── breadcrumbs.md
│   ├── cards.md
│   ├── confirmation-dialog.md
│   ├── milestones.md
│   ├── more-less-link.md
│   └── tabs.md
├── _layouts/               # Jekyll layout templates
├── _includes/              # Jekyll include templates
└── _config.yml             # Jekyll configuration
```

## Content Organization

### About
Information about the design system approach, release notes, and inspiration.

### Branding
Core brand identity elements including colors, typography, logos, and iconography.

### Content Style Guide
Guidelines for voice, tone, and content consistency across all touchpoints.

### Accessibility
Comprehensive accessibility guidelines and checklists for inclusive design.

### Layouts
Page-level layout templates and structural guidance for different types of interfaces.

### Patterns
Reusable design patterns that solve common interface problems and provide consistent user experiences.

### Components
Individual UI components with detailed usage guidelines, code examples, and implementation notes.

## Contributing

### For Designers

1. **Edit directly in GitHub**: Use GitHub's web interface to edit markdown files
2. **Create a branch**: Always work on a feature branch for changes
3. **Request review**: Open a pull request when ready for feedback
4. **Collaborate**: Use PR comments for discussion and iteration

### For Developers

1. **Clone the repository**: `git clone [repository-url]`
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make changes**: Edit markdown files or add new documentation
4. **Submit PR**: Push changes and open a pull request for review

## Local Development

### Jekyll Site

To run the documentation site locally:

```bash
# Install dependencies
bundle install

# Serve the site locally
bundle exec jekyll serve

# View at http://localhost:4000
```

### MCP Server Integration

This repository is designed to work with our MCP server that makes documentation available directly within AI coding assistants. Changes made here will be automatically available through the MCP interface.

## File Formatting

All documentation files use Markdown with YAML front matter:

~~~yaml
---
status: "stable"
last_updated: "YYYY-MM-DD"
parent: "category-name"
related: ["related-item-1", "related-item-2"]
---

# Title

## Design

### Subsection

### Accessibility

## Development

### Sample 1

```html
<code>
```

### Sample 2

```html
<code>
```
~~~

## Deployment

- **GitHub Pages**: Static site automatically deployed from main branch
- **MCP Server**: Documentation served through Model Context Protocol for AI integration

## Getting Help

- Check existing documentation and issues before creating new ones
- Use GitHub Discussions for questions and feature requests
- Follow our contribution guidelines for consistent formatting

---

This documentation platform bridges the gap between design guidance and development implementation, ensuring our design system is accessible exactly when and where it's needed most.
