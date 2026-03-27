# /plan Command

## Purpose
Analyzes PROJECT_STARTER.md and generates a detailed phase plan with goals, criteria, and design system documentation.

## Trigger
User runs `/plan` or asks to "create a plan" / "generate phase plan"

## Prerequisites
- PROJECT_STARTER.md must exist and be filled out
- At minimum: Project name, description, and scope defined

## Workflow

### Step 1: Validate PROJECT_STARTER.md
```
1. Check if .claude/PROJECT_STARTER.md exists
2. Parse the document for required sections:
   - Project Overview (required)
   - Scope & Boundaries (required)
   - Design System (recommended)
   - Technical Requirements (recommended)
3. If missing required sections, prompt user to complete them
4. List any recommended sections that are empty
```

### Step 2: Extract Design System
```
1. Parse Design System section from PROJECT_STARTER.md
2. Create/update .claude/project-plan/design-system.md with:
   - Color palette with CSS variable names
   - Typography scale
   - Spacing system
   - Component patterns
   - Inspiration analysis
3. Generate CSS custom properties snippet for easy implementation
```

### Step 3: Analyze & Decompose
```
1. Break down scope into logical phases
2. Identify dependencies between features
3. Determine MVP vs. enhancement features
4. Map user stories to features
5. Consider technical constraints
```

### Step 4: Generate Phase Plan
```
1. Create .claude/project-plan/phase-1.md with:
   - Phase overview and goals
   - Success criteria (measurable)
   - Feature breakdown
   - Technical approach
   - Design system reference
   - Dependencies
   - Phase gate criteria
2. If project is large, outline future phases
```

### Step 5: Initialize Task Status
```
1. Create .claude/tasks/.task-status.json with phase-1 structure
2. Set all tasks to "pending"
3. Define phase gate criteria
4. Generate initial DASHBOARD.md
```

## Output Format

### design-system.md
```markdown
# Design System: [Project Name]

## CSS Custom Properties

\`\`\`css
:root {
  /* Colors */
  --color-primary: #value;
  --color-secondary: #value;
  /* ... */
  
  /* Typography */
  --font-heading: 'Font Name', sans-serif;
  --font-body: 'Font Name', sans-serif;
  /* ... */
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  /* ... */
}
\`\`\`

## Color Palette
[Visual representation with hex values]

## Typography Scale
[Font samples with sizes]

## Inspiration Analysis
[Key takeaways from inspiration sites]

## Component Patterns
[Common patterns to follow]
```

### phase-1.md
```markdown
# Phase 1: [Phase Name]

## Overview
[What this phase accomplishes]

## Goals
1. [Specific, measurable goal]
2. [Specific, measurable goal]

## Success Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]

## Features
### Feature 1: [Name]
- Description: 
- Priority: Critical/High/Medium/Low
- Dependencies: None / [List]
- Estimated complexity: S/M/L/XL

## Technical Approach
[How features will be implemented]

## Design System Reference
See: .claude/project-plan/design-system.md

## Phase Gate Criteria
To complete Phase 1 and begin Phase 2:
- [ ] All critical tasks complete
- [ ] Design system implemented
- [ ] Core functionality working
- [ ] Basic tests passing

## Next Phase Preview
Phase 2 will focus on: [Brief description]
```

## Error Handling

| Error | Response |
|-------|----------|
| PROJECT_STARTER.md not found | "Please create and fill out PROJECT_STARTER.md first. Run `/help starter` for guidance." |
| Missing required sections | "PROJECT_STARTER.md is missing: [sections]. Please complete these before running /plan." |
| Empty design system | "No design system defined. Would you like me to suggest a default based on the project type?" |

## Agent Assignment
- Primary: `docs` agent
- Support: `dev` agent for technical analysis

## Post-Execution
1. Confirm plan generated successfully
2. Display phase-1 summary
3. Prompt user: "Review the plan in .claude/project-plan/phase-1.md. When ready, run `/task` to generate tasks."
