# Appian Aurora Design System

[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)

A centralized, developer-accessible design system documentation platform that makes design guidance available directly within coding environments through AI assistants and other tools.

## Overview

This open-source repository serves as the single source of truth for our design system documentation, organized in a way that's both human-readable and machine-accessible through Model Context Protocol (MCP) servers. Our goal is to bridge the gap between design guidance and development implementation, ensuring design system resources are accessible exactly when and where they're needed most.

## 🚀 Quick Start

### View the Documentation
Visit our [live documentation site](https://appian-design.github.io/aurora/) to explore the design system.

### 🛠️ Contributing
We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) to get started.

#### 1. Prerequisites
* [Python 3.8+](https://www.python.org/downloads/)
* [Git](https://git-scm.com/downloads/)

#### 2. Setup

```bash
# Clone the repository
git clone [https://github.com/appian-design/aurora.git](https://github.com/appian-design/aurora.git)
cd aurora

# Create and activate a virtual environment
# On macOS/Linux:
python3 -m venv venv
source venv/bin/activate

# On Windows:
python -m venv venv
.\venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

#### 3. Run the Local Server

```bash
# Start the live-reloading server
mkdocs serve

# View the site in your browser at [http://127.0.0.1:8000](http://127.0.0.1:8000)
```
Any changes you save will automatically reload in the browser.


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
aurora/
├── .github/              # GitHub automation and workflows
│   ├── workflows/        # GitHub Actions for deployment and sync checking
│   └── scripts/          # Automation scripts for MCP server sync
├── docs/                 # Contains all Markdown documentation files
│   ├── index.md          # The home page
│   ├── assets/           # Images, CSS, or JS overrides
│   └── ...               # Subdirectories for components, patterns, etc.
├── mkdocs.yml            # MkDocs configuration file
├── requirements.txt      # Python dependencies for local development
└── README.md             # This file
```

## 🤝 Contributing

We believe that great design systems are built by communities. Whether you're a designer, developer, content creator, or accessibility expert, there are many ways to contribute:

### Ways to Contribute

- **Report Issues**: Found a bug or have a suggestion? [Open an issue](https://github.com/appian-design/aurora/issues/new/choose)
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
5. **Test locally**: Run `mkdocs serve` to preview changes
6. **Submit PR**: Push changes and open a pull request for review

Please read our [Contributing Guide](CONTRIBUTING.md) for detailed information and our [Code of Conduct](CODE_OF_CONDUCT.md) for community guidelines.

## 🛠️ Technical Features

### Automated Maintenance

This repository uses automated workflows to help maintain the design system:

- **Monthly Issue Analysis**: Automated review of open issues to identify maintenance opportunities
- **AI-Assisted Implementation**: Support for AI agents to implement routine fixes and updates
- **Automated PR Creation**: PRs are automatically created when branches following the `aurora-agent/*` pattern are pushed

See our [Automated Maintenance Guide](.github/automated-maintenance.md) for details on how to use these workflows.

### MCP Server Integration

This repository is designed to work with the [Aurora MCP Server](https://github.com/appian-design/aurora-mcp) that makes documentation available directly within AI coding assistants. Changes made here are automatically synchronized with the MCP server through automated workflows, enabling:

- Real-time access to design system guidance within development environments
- AI-powered assistance with component selection and implementation
- Contextual design recommendations during coding

### AI Assistant Integration

For AI assistants working with this repository, see [AGENTS.md](AGENTS.md) for guidance on documentation structure, formatting conventions, and best practices.

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

- **GitHub Pages**: Static documentation site automatically deployed from main branch
- **MCP Server**: Documentation metadata automatically synchronized with the [Aurora MCP Server](https://github.com/appian-design/aurora-mcp) for AI integration

## 📖 Helpful Resources

- [GitHub-flavored Markdown reference](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [markdownTables](https://jmalarcon.github.io/markdowntables/): for converting HTML table content to Markdown tables
- [mkdocs Material Documentation](https://squidfunk.github.io/mkdocs-material/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🆘 Getting Help

- **Documentation**: Check our [existing documentation](https://appian-design.github.io/aurora/) first
- **Issues**: Search [existing issues](https://github.com/appian-design/aurora/issues) before creating new ones
- **Discussions**: Start a [discussion](https://github.com/appian-design/aurora/discussions) for questions and ideas
- **Contributing**: Read our [Contributing Guide](CONTRIBUTING.md) for detailed guidance

## 📄 License

See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

This project builds upon the collective wisdom of the Appian UX Design Team and larger design community. We're grateful for the open-source tools, patterns, and practices that make this work possible. And also the LLMs.

---

**Made with ❤️ by the Appian UX Design Team**
