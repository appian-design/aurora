# Design System Documentation

[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)

A centralized, developer-accessible design system documentation platform that makes design guidance available directly within coding environments through AI assistants and other tools.

## Overview

This open-source repository serves as the single source of truth for our design system documentation, organized in a way that's both human-readable and machine-accessible through Model Context Protocol (MCP) servers. Our goal is to bridge the gap between design guidance and development implementation, ensuring design system resources are accessible exactly when and where they're needed most.

## 🚀 Quick Start

### View the Documentation
Visit our [live documentation site](https://pglevy.github.io/design-system-docs/) to explore the design system.

### Contributing
We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) to get started.

### Local Development
```bash
# Clone the repository
git clone https://github.com/pglevy/design-system-docs.git
cd design-system-docs

# Install dependencies
bundle install

# Serve the site locally
bundle exec jekyll serve

# View at http://localhost:4000
```

## 📚 What's Inside

This design system documentation includes:

- **Components**: Individual UI components with usage guidelines and code examples
- **Patterns**: Reusable design patterns for common interface problems
- **Layouts**: Page-level layout templates and structural guidance
- **Branding**: Core brand identity elements including colors, typography, and iconography
- **Accessibility**: Comprehensive guidelines and checklists for inclusive design
- **Content Style Guide**: Guidelines for voice, tone, and content consistency

## 🏗️ Repository Structure

```
design-system-docs/
├── about/                  # About the design system
├── branding/               # Brand identity and visual elements
├── content-style-guide/    # Content and writing guidelines
├── accessibility/          # Accessibility guidelines and checklists
├── layouts/                # Page-level layout templates
├── patterns/               # Reusable design patterns
├── components/             # Individual UI components
├── _layouts/               # Jekyll layout templates
├── _includes/              # Jekyll include templates
└── _config.yml             # Jekyll configuration
```

## 🤝 Contributing

We believe that great design systems are built by communities. Whether you're a designer, developer, content creator, or accessibility expert, there are many ways to contribute:

### Ways to Contribute

- **Report Issues**: Found a bug or have a suggestion? [Open an issue](https://github.com/pglevy/design-system-docs/issues/new/choose)
- **Improve Documentation**: Help us make our docs clearer and more comprehensive
- **Add Examples**: Contribute code examples and implementation guides
- **Enhance Accessibility**: Help us make our design system more inclusive
- **Share Patterns**: Document new design patterns you've discovered

### For Designers

1. **Edit directly in GitHub**: Use GitHub's web interface to edit markdown files
2. **Create a branch**: Always work on a feature branch for changes
3. **Request review**: Open a pull request when ready for feedback
4. **Collaborate**: Use PR comments for discussion and iteration

### For Developers

1. **Fork the repository**: Click the "Fork" button on GitHub
2. **Clone your fork**: `git clone https://github.com/YOUR-USERNAME/design-system-docs.git`
3. **Create a feature branch**: `git checkout -b feature/your-feature-name`
4. **Make changes**: Edit markdown files or add new documentation
5. **Test locally**: Run `bundle exec jekyll serve` to preview changes
6. **Submit PR**: Push changes and open a pull request for review

Please read our [Contributing Guide](CONTRIBUTING.md) for detailed information and our [Code of Conduct](CODE_OF_CONDUCT.md) for community guidelines.

## 🛠️ Technical Features

### MCP Server Integration

This repository is designed to work with Model Context Protocol (MCP) servers that make documentation available directly within AI coding assistants. Changes made here are automatically available through the MCP interface, enabling:

- Real-time access to design system guidance within development environments
- AI-powered assistance with component selection and implementation
- Contextual design recommendations during coding

### Jekyll-Powered Site

Our documentation is built with Jekyll and automatically deployed via GitHub Pages, providing:

- Fast, static site generation
- Markdown-based content management
- Responsive, accessible design
- Search functionality
- Version control integration

## 📝 File Formatting

All documentation files use Markdown with YAML front matter:

```yaml
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
```

## 🚀 Deployment

- **GitHub Pages**: Static site automatically deployed from main branch
- **MCP Server**: Documentation served through Model Context Protocol for AI integration

## 📖 Helpful Resources

- [GitHub-flavored Markdown reference](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [markdownTables](https://jmalarcon.github.io/markdowntables/): for converting HTML table content to Markdown tables
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🆘 Getting Help

- **Documentation**: Check our [existing documentation](https://pglevy.github.io/design-system-docs/) first
- **Issues**: Search [existing issues](https://github.com/pglevy/design-system-docs/issues) before creating new ones
- **Discussions**: Start a [discussion](https://github.com/pglevy/design-system-docs/discussions) for questions and ideas
- **Contributing**: Read our [Contributing Guide](CONTRIBUTING.md) for detailed guidance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

This project builds upon the collective wisdom of the Appian UX Design Team and larger design community. We're grateful for the open-source tools, patterns, and practices that make this work possible. And also the LLMs.

---

**Made with ❤️ by the Appian UX Design Team**