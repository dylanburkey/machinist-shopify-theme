# /task Command

## Purpose
Reviews a phase plan and generates detailed, executable tasks with clear completion criteria.

## Trigger
User runs `/task` or `/task phase-1` or asks to "create tasks" / "generate tasks"

## Prerequisites
- Phase plan must exist (e.g., `.claude/project-plan/phase-1.md`)
- Design system should be defined

## Workflow

### Step 1: Load Phase Plan
```
1. Determine which phase to process:
   - If `/task` with no args, use current active phase from .task-status.json
   - If `/task phase-N`, use specified phase
2. Read .claude/project-plan/phase-N.md
3. Parse features, goals, and criteria
```

### Step 2: Generate Tasks
```
For each feature in the phase plan:
1. Break down into atomic tasks (1-4 hours of work each)
2. Assign unique task IDs: [phase].[feature].[task] (e.g., 1.1.1)
3. Define clear completion criteria
4. Identify dependencies
5. Assign priority (critical/high/medium/low)
6. Tag with relevant categories
```

### Step 3: Create Task File
```
1. Generate .claude/tasks/phase-N-tasks.md
2. Group tasks by feature
3. Include:
   - Task ID
   - Title
   - Description
   - Completion criteria (checkable)
   - Dependencies
   - Priority
   - Estimated effort
   - Assigned agent
```

### Step 4: Update Status System
```
1. Update .claude/tasks/.task-status.json with new tasks
2. Set all to "pending" status
3. Regenerate DASHBOARD.md
```

## Output Format

### phase-N-tasks.md
```markdown
# Phase [N] Tasks

Generated: [timestamp]
Total Tasks: [count]
Critical: [count] | High: [count] | Medium: [count] | Low: [count]

---

## Feature 1: [Feature Name]

### Task 1.1.1: [Task Title]
- **ID**: 1.1.1
- **Priority**: Critical
- **Effort**: M (2-4 hours)
- **Agent**: dev
- **Dependencies**: None
- **Description**: 
  [Detailed description of what needs to be done]

- **Completion Criteria**:
  - [ ] [Specific, verifiable criterion]
  - [ ] [Specific, verifiable criterion]
  - [ ] [Specific, verifiable criterion]

- **Files to Create/Modify**:
  - `path/to/file.ext` - [what to do]

- **Notes**:
  [Any additional context]

---

### Task 1.1.2: [Task Title]
...

---

## Feature 2: [Feature Name]
...

---

## Task Summary

| ID | Title | Priority | Status | Dependencies |
|----|-------|----------|--------|--------------|
| 1.1.1 | [Title] | Critical | ⏳ Pending | None |
| 1.1.2 | [Title] | High | ⏳ Pending | 1.1.1 |
...

---

## Execution Order

Recommended task execution order based on dependencies:

1. **1.1.1** - [Title] (no dependencies)
2. **1.1.2** - [Title] (depends on 1.1.1)
...

---

## Phase Gate Checklist

Before moving to Phase [N+1]:
- [ ] All critical tasks complete
- [ ] All high-priority tasks complete
- [ ] Tests passing
- [ ] Documentation updated

Run `/status` to see current progress.
Run `/run` to start executing tasks.
```

## Task ID Schema

```
[phase].[feature].[task].[subtask]

Examples:
- 1.1.1     = Phase 1, Feature 1, Task 1
- 1.2.3     = Phase 1, Feature 2, Task 3
- 1.1.1.a   = Phase 1, Feature 1, Task 1, Subtask A
```

## Priority Definitions

| Priority | Definition | SLA |
|----------|------------|-----|
| Critical | Blocks other work, core functionality | Must complete first |
| High | Important for phase completion | Complete in phase |
| Medium | Enhances quality/UX | Complete if time allows |
| Low | Nice to have | Can defer to next phase |

## Effort Estimation

| Size | Time | Description |
|------|------|-------------|
| XS | <30 min | Config change, small fix |
| S | 30min-2hr | Single file, straightforward |
| M | 2-4hr | Multiple files, some complexity |
| L | 4-8hr | Complex feature, multiple components |
| XL | 8hr+ | Major feature, should be broken down |

## Error Handling

| Error | Response |
|-------|----------|
| Phase plan not found | "Phase plan not found. Run `/plan` first to generate a plan." |
| Tasks already exist | "Tasks for phase-N already exist. Use `/task --force` to regenerate, or `/add-task` to add new tasks." |
| Invalid phase number | "Phase [N] does not exist. Available phases: [list]" |

## Agent Assignment
- Primary: `docs` agent for task generation
- Validation: `review` agent to check task quality

## Post-Execution
1. Display task summary
2. Show first 3-5 tasks to execute
3. Prompt: "Tasks generated! Run `/status` to see the dashboard or `/run` to start executing."
