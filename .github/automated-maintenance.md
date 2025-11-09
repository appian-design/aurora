# Automated Issue Analysis and Maintenance

This document describes the automated workflow for issue analysis and AI-assisted maintenance in the Aurora Design System.

## Overview

The Aurora Design System uses an automated workflow to:
1. Periodically analyze the issue backlog
2. Identify issues suitable for AI agent implementation
3. Automatically create pull requests from AI-generated changes
4. Maintain quality through human review and approval

This system allows maintainers to focus on strategic work while AI agents handle routine maintenance tasks like documentation updates, simple bug fixes, and pattern additions.

## How It Works

### Phase 1: Periodic Issue Analysis

**Trigger:** Monthly (1st of each month) or manual via GitHub Actions

**What Happens:**
1. A GitHub Action runs and counts all open issues
2. Creates a new analysis issue with:
   - Total count of open issues
   - Links to all open issues
   - Guidelines for categorizing issues as AI-suitable or human-required
3. A team member reviews the analysis issue and identifies AI-ready work

**Manual Trigger:**
1. Go to Actions → "Automated Issue Analysis"
2. Click "Run workflow"
3. Review the created analysis issue

### Phase 2: AI-Assisted Implementation

**Process:**

1. **Human identifies AI-ready issue** from the analysis
2. **Human runs LLM locally** to implement changes (using Claude Code, Cursor, etc.)
3. **Create branch** with naming pattern: `aurora-agent/fix-issue-{NUMBER}`
   - Example: `aurora-agent/fix-issue-157`
4. **Commit changes** to the branch
5. **Push branch** to GitHub

**What Happens Automatically:**
- GitHub Action detects the `aurora-agent/*` branch
- Extracts the issue number from the branch name
- Creates a PR as `github-actions[bot]`
- Links the PR to the original issue
- Adds review checklist

### Phase 3: Review and Merge

**Human Review:**
1. Any team member can review the AI-generated PR (including the person who ran the analysis)
2. Check that changes align with issue requirements
3. Verify code follows project conventions
4. Ensure tests pass
5. Approve and merge if quality standards are met

**Why Bot Authorship?**
- Bot-created PRs allow the analysis initiator to also be a reviewer
- Maintains clear attribution of AI-assisted work
- Follows GitHub's standard review workflows

## Issue Categorization

### AI-Suitable Issues

Issues that can be handled by AI agents:

- ✅ **Documentation fixes** - Typos, unclear wording, missing examples
- ✅ **Simple bug fixes** - Clear reproduction steps and known solutions
- ✅ **Pattern additions** - Following existing conventions
- ✅ **Color value corrections** - Updating color definitions
- ✅ **Code examples** - Adding examples following existing patterns

### Human-Required Issues

Issues that need human decision-making:

- 🧠 **Design decisions** - New patterns, component behavior
- 🧠 **Breaking changes** - API changes, deprecations
- 🧠 **New features** - Features requiring strategic input
- 🧠 **Architecture changes** - System-level modifications
- 🧠 **Accessibility strategy** - New accessibility patterns

## Workflow Examples

### Example 1: Documentation Fix

**Issue:** "Fix typo in color documentation"

```bash
# Human uses LLM to generate fix
# Human creates and pushes branch
git checkout -b aurora-agent/fix-issue-157
# Make changes...
git add .
git commit -m "Fix typo in color documentation"
git push origin aurora-agent/fix-issue-157
```

**Result:** PR automatically created, linked to issue #157

### Example 2: Color Bug Fix

**Issue:** "Update incorrect primary-blue value"

```bash
# Human uses LLM to generate fix
git checkout -b aurora-agent/fix-issue-161
# Update colors.yml...
git add data/colors.yml
git commit -m "Update primary-blue value to match design spec"
git push origin aurora-agent/fix-issue-161
```

**Result:** PR automatically created with changes to colors.yml

## Branch Naming Convention

**Required Pattern:** `aurora-agent/fix-issue-{NUMBER}`

**Examples:**
- ✅ `aurora-agent/fix-issue-123`
- ✅ `aurora-agent/fix-issue-45`
- ❌ `fix-issue-123` (missing prefix)
- ❌ `aurora-agent/issue-123` (missing 'fix-')

**Why This Pattern?**
- Triggers automatic PR creation
- Extracts issue number for linking
- Clearly identifies AI-assisted work
- Follows GitHub branch naming best practices

## Quality Standards

### All PRs Must:
- ✅ Pass existing CI/CD checks
- ✅ Follow project code conventions
- ✅ Include clear commit messages
- ✅ Link to original issue
- ✅ Have human approval before merging

### Review Checklist:
- [ ] Changes align with issue requirements
- [ ] Code follows project style guide
- [ ] Documentation updated if needed
- [ ] No new security vulnerabilities
- [ ] Tests pass (if applicable)
- [ ] Accessibility standards maintained

## Fallback Plans

**If Automatic PR Creation Fails:**
- Create PR manually from the `aurora-agent/*` branch
- Link to issue in PR description
- Request review from another team member

**If AI Implementation Quality is Inconsistent:**
- Reduce scope to documentation-only changes
- Add more specific guidelines to analysis issues
- Increase review rigor for AI-generated changes

**If Monthly Automation is Too Frequent:**
- Adjust cron schedule in `.github/workflows/issue-analysis.yml`
- Use manual trigger instead of scheduled runs

## Configuration

### GitHub Action Files

**Issue Analysis:** `.github/workflows/issue-analysis.yml`
- Schedule: Monthly on 1st day (`0 0 1 * *`)
- Manual trigger: Available via workflow_dispatch
- Permissions: issues (write), contents (read)

**Auto PR Creation:** `.github/workflows/auto-pr.yml`
- Trigger: Push to `aurora-agent/**` branches
- Permissions: contents (read), pull-requests (write), issues (read)

### Customization

To adjust the automation:

1. **Change Analysis Frequency:**
   ```yaml
   # .github/workflows/issue-analysis.yml
   schedule:
     - cron: '0 0 1 * *'  # Modify this line
   ```

2. **Modify Branch Pattern:**
   ```yaml
   # .github/workflows/auto-pr.yml
   on:
     push:
       branches:
         - 'aurora-agent/**'  # Modify this pattern
   ```

3. **Add Auto-Merge (Future):**
   - Add workflow with conditions for specific issue types
   - Require approval + passing checks
   - Enable only for low-risk changes

## Success Metrics

**Immediate Impact:**
- Faster turnaround from issue identification to PR creation
- More maintainer time for strategic design system work
- Consistent handling of routine maintenance tasks

**Ongoing Tracking:**
- Number of AI-assisted PRs created per month
- Time saved on routine maintenance
- Quality of AI-generated changes (approval rate)
- Team satisfaction with automated workflow

## Getting Started

1. **Enable GitHub Actions** (if not already enabled)
2. **Run first analysis:**
   - Go to Actions → "Automated Issue Analysis"
   - Click "Run workflow"
3. **Review analysis issue** and identify 1-2 AI-suitable issues
4. **Test the workflow:**
   - Use LLM to implement changes for one issue
   - Create `aurora-agent/fix-issue-{NUMBER}` branch
   - Push and verify PR is created automatically
5. **Review and merge** the test PR
6. **Scale up** to more issues as confidence grows

## Questions?

For questions about the automated workflow:
- Open an issue with the `automation` label
- Review the implementation in `.github/workflows/`
- Check the original proposal in issue #168

---

*This automated workflow helps Aurora Design System maintainers focus on strategic design decisions while AI agents handle routine maintenance.*
