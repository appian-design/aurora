# Goal

Main goal: use an agent coding flow to generate new design system documentation for review by designers

## Initial workflow idea

1. Generate GitHub issues for new docs to add to system
1. Ask agent (e.g., Claude Code or Amazon Q) to work on issue
1. For each issue, generate a SAIL snippet (using the design system MCP server for reference), draft some guidance, open a PR for designer review
1. Designer adds comments and suggestions to PR
1. Agent makes changes and new commits
1. After final review and approval designer merges PR

## Ideas for new docs to add

We don't need to add all of these, but these are the types of things we might want to add: https://docs.appian.com/suite/help/25.2/SAIL_Components.html