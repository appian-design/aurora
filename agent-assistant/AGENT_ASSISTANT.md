# Agent Assistant

## Main goal

We're working on refining an agent workflow for design system component generation. We've done some initial work, but now we want to take it further. 

Questions to explore:

- What is best way to split up information between the issue template and a "component generation instructions" file?
    - It seems like we'd want to capture the repeatable parts of the overall flow in an instructions doc, and the issue template can focus on capturing the specific details needed for each component.
- Some things we're thinking it makes sense to put in an instructions doc:
    - Overall expected structure (e.g., Design and Development sections with common sub-sections)
    - Avoidance of repeated high-level information; only component-specific details (e.g., color usage, content guidelines)
- Overall, making sure the issues that get created and the generation instructions do not overlap or have conflicting information

## Reference info

- Proof-of-concept we started with: agent-assistant/proof-of-concept.md
- Component doc you generated: components/tags.md
- Draft issue template: .github/ISSUE_TEMPLATE/design-system-work-item.md
    - Note: we feel like this has too much information at this point
- You can also look at any of the existing components to see how we've organized things (e.g., components/breadcrumbs.md, components/milestones.md, components/tabs.md)

## Analysis and Decisions

### Information Architecture Solution

After analyzing the current workflow, we identified key issues with the existing approach:

1. **Information Duplication**: The issue template contained structural requirements (YAML format, section organization) that should be in reusable generation instructions
2. **Over-Prescription**: The template specified too many formatting details rather than focusing on component-specific business requirements  
3. **Complexity Mismatch**: Existing components vary significantly in complexity (breadcrumbs is simple, tabs is comprehensive), but the template assumed one-size-fits-all

### Recommended Approach: Flexible Input, Adaptive Output

**Core Principle**: Issue template becomes a flexible capture mechanism that naturally scales from simple to complex based on actual component needs, while generation instructions provide consistent structure and quality standards.

**Issue Template Focus:**
- Component name and SAIL components involved
- Business purpose and use cases
- Required variants (open-ended, not prescribed)
- Optional additional complexity details
- Reference materials and acceptance criteria

**Generation Instructions Focus:**
- Complete markdown template structure
- YAML front matter format
- Code formatting standards
- Quality check procedures
- Guidance on when to add complexity sections

**Complexity Handling Decision**: Skip upfront complexity determination. Let complexity emerge naturally from the requirements provided in the issue, allowing the agent to adapt documentation depth appropriately.

This approach keeps issue creation simple while enabling the generation process to scale to match actual component needs.