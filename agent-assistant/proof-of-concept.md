# Proof of Concept

## Reference material

This is where we captured information about our goals and plans for this proof-of-concept. It also references a new document example.

- Goals: goal.md
- Plan brainstorming: brainstorm.md
- Existing design system docs: this project
- New component doc in progress: https://github.com/pglevy/design-system-docs/blob/add-buttons/components/buttons.md

## Main task

Add new document to design-system-docs for the Tag component

## Task list

This are the high-level tasks to be completed. See the section below for specific details about each task.

-[ ] Create a GitHub issue in this repo
-[ ] Draft a new `tags.md` doc following existing examples
-[ ] Check for syntax errors
-[ ] Add a screenshot
-[ ] Open a PR

## Task details

### Create issue

Create an ad-hoc issue for now based on the work you think you will do. Later we will create an issue template for capturing these in a more structured way.

### Draft doc

The component we're going to test with is Tags. This uses a combination of parent and child components: a!tagField and a!tagItem.

- Existing "design" documentation: https://docs.appian.com/suite/help/25.2/sail/ux-tags.html
- Existing "developer" documentation: https://docs.appian.com/suite/help/25.2/Tag_Component.html

### Check for syntax errors

- See SAIL-REPL-INSTRUCTIONS.md for details on how to use the Playwright MCP server to check for syntax errors in the generated SAIL
- Make sure all syntax errors are resolved before proceeding to the next step

### Add a screenshot

- Use Playwright MCP to take a screenshot of the generated SAIL working in the expression editor

### Open a pull request

- Include any comments you think are relevant
- If possible, tag pglevy and aarushivenk for review

## Lessons learned

- Make sure MCP servers intended for use are available before starting
- Reiterate tips on Playwright usage
    - Refresh the page before adding a new expression (otherwise it gets pre-pended to existing content)
    - Copy screenshots from temp directly to repo so they can be added to version control for review
- Commits and PRs will still appear to come from whoever is authenticated (initiated the workflow)