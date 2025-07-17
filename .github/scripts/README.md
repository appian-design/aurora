# MCP Server Sync System

This directory contains scripts and workflows to keep the MCP server metadata in sync with the design-system-docs repository.

## How It Works

### Automatic Sync Checking

The system automatically checks for discrepancies between:
- The content in this repository (design-system-docs)
- The metadata in the MCP server repository

### Triggers

The sync check runs:
- **On file changes**: When any `.md` file is modified in tracked directories
- **Weekly**: Every Monday at 9 AM UTC
- **Manual**: Can be triggered manually from the Actions tab

### What It Checks

The script scans these directories:
- `branding/`
- `components/`
- `layouts/`
- `patterns/`
- `content-style-guide/`
- `accessibility/`

For each markdown file, it extracts:
- **Title**: First `# Heading` in the file
- **Description**: First paragraph after the title
- **File path**: Relative path from repository root

### When Discrepancies Are Found

If the sync check finds differences, it will:
1. Create or update an issue in the `design-system-server` repository
2. Include detailed TypeScript code snippets for the required updates
3. Tag the issue with `sync-needed` and `automated` labels

### When Everything Is In Sync

If no discrepancies are found, it will:
1. Close any existing open sync issues
2. Add a comment confirming the sync is resolved

## Setup Requirements

### GitHub Token

The workflow requires a GitHub token with write access to the MCP server repository:

1. Create a Personal Access Token with `repo` scope
2. Add it as a repository secret named `MCP_REPO_TOKEN`

### File Structure

The script expects markdown files to follow this structure:

```markdown
# Component Title

This is the description paragraph that will be used as the component body.

## Design

...rest of content...
```

## Manual Testing

You can test the sync check locally:

```bash
cd .github/scripts
node check-mcp-sync.js
```

## Customization

### Adding New Categories

To track additional directories, update:

1. `CATEGORIES` object in `check-mcp-sync.js`
2. `paths` section in the workflow file

### Modifying Content Parsing

The `parseMarkdownContent()` function can be customized to:
- Extract different heading levels
- Use different content for descriptions
- Handle special file formats

## Troubleshooting

### Common Issues

1. **Token permissions**: Ensure `MCP_REPO_TOKEN` has write access to issues
2. **File parsing**: Check that markdown files have proper `# Title` headings
3. **Path matching**: Verify file paths match between repositories

### Debugging

Check the workflow logs in the Actions tab for detailed output from the sync check.