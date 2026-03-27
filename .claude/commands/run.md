# /run Command

## Purpose
Executes tasks from the current phase, using appropriate subagents and tracking progress.

## Trigger
User runs `/run`, `/run 1.1.1`, `/run next`, or asks to "execute tasks" / "start working"

## Prerequisites
- Tasks must exist for current phase
- `.task-status.json` must be initialized

## Usage

```bash
/run              # Run next pending task based on dependencies
/run next         # Same as above
/run 1.1.1        # Run specific task by ID
/run --continue   # Continue from last in-progress task
/run --all        # Run all pending tasks sequentially (with confirmations)
```

## Workflow

### Step 1: Determine Task to Execute
```
1. Load .task-status.json
2. If specific task ID provided:
   - Validate task exists
   - Check if dependencies are met
   - Warn if dependencies incomplete
3. If no ID (or "next"):
   - Find first pending task with all dependencies complete
   - Prioritize by: Critical > High > Medium > Low
```

### Step 2: Load Task Context
```
1. Read task details from phase-N-tasks.md
2. Load relevant context files:
   - CLAUDE.md (project context)
   - design-system.md (if UI work)
   - Related source files
3. Identify assigned agent
```

### Step 3: Execute Task
```
1. Update task status to "in-progress" in .task-status.json
2. Display task details to user:
   - Task ID and title
   - Description
   - Completion criteria
   - Files involved
3. Dispatch to appropriate agent:
   - dev: Code implementation
   - test: Test creation
   - docs: Documentation
   - review: Code review
4. Agent executes task following criteria
```

### Step 4: Verify Completion
```
1. Check each completion criterion
2. Run any automated validations:
   - Lint checks for code
   - Build verification
   - Test execution
3. Present results to user
4. Ask for confirmation: "Task complete? [y/n/partial]"
```

### Step 5: Update Status
```
1. If confirmed complete:
   - Update .task-status.json status to "complete"
   - Record completion timestamp
   - Regenerate DASHBOARD.md
   - Check if phase gate criteria now met
2. If partial:
   - Keep status as "in-progress"
   - Record notes about what's done
3. If not complete:
   - Keep status as "in-progress"
   - Ask if user wants to continue or switch tasks
```

### Step 6: Next Action
```
1. If more tasks pending:
   - Show next recommended task
   - Ask: "Continue with [next task]? [y/n]"
2. If phase complete:
   - Announce phase completion
   - Show phase summary
   - Ask: "Generate Phase [N+1] plan? [y/n]"
```

## Output During Execution

```markdown
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 TASK 1.1.1: Create base layout template
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Priority: Critical | Effort: M | Agent: dev

📝 Description:
Create the main layout template with header, footer, 
and content area following the design system.

✅ Completion Criteria:
- [ ] layout/theme.liquid created
- [ ] Header component included
- [ ] Footer component included
- [ ] CSS variables from design system applied
- [ ] Responsive breakpoints working

📁 Files:
- CREATE: layout/theme.liquid
- CREATE: snippets/header.liquid
- CREATE: snippets/footer.liquid

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 Starting execution...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Agent Dispatch Rules

| Task Type | Agent | Context Loaded |
|-----------|-------|----------------|
| Code implementation | dev | CLAUDE.md, design-system.md, related files |
| Test creation | test | CLAUDE.md, property-tests.yml, source files |
| Documentation | docs | CLAUDE.md, README.md, source files |
| Code review | review | CLAUDE.md, source files, tests |
| Shopify operations | shopify | CLAUDE.md, theme files |

## Dependency Handling

```
Before running task 1.2.1 with dependency on 1.1.1:

If 1.1.1 is complete:
  → Proceed with 1.2.1

If 1.1.1 is in-progress:
  → "Task 1.1.1 is still in progress. Complete it first or run with --force"

If 1.1.1 is pending:
  → "Task 1.2.1 depends on 1.1.1 which is not started. Run 1.1.1 first?"
```

## Checkpoints

At certain tasks (marked as checkpoints), pause and require user confirmation:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚧 CHECKPOINT: Core systems complete
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Review completed work before proceeding:
- [x] Task 1.1.1: Base layout
- [x] Task 1.1.2: Navigation
- [x] Task 1.2.1: Product schema

Questions to consider:
1. Does the layout match the design system?
2. Are all critical paths working?
3. Any blockers for next phase?

Continue to next section? [y/n]
```

## Error Handling

| Error | Response |
|-------|----------|
| No tasks found | "No tasks found. Run `/task` to generate tasks first." |
| Task not found | "Task [ID] not found. Run `/status` to see available tasks." |
| Dependencies not met | "Task [ID] depends on incomplete tasks: [list]. Complete those first or use --force." |
| Agent error | "Agent encountered an error: [error]. Retry? [y/n]" |

## Post-Execution Summary

```markdown
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ TASK 1.1.1 COMPLETE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Files created/modified:
- ✅ layout/theme.liquid (created)
- ✅ snippets/header.liquid (created)
- ✅ snippets/footer.liquid (created)

Completion criteria:
- ✅ layout/theme.liquid created
- ✅ Header component included
- ✅ Footer component included
- ✅ CSS variables applied
- ✅ Responsive breakpoints working

Time: 23 minutes
Phase progress: 2/20 tasks (10%)

Next task: 1.1.2 - Create navigation component
Continue? [y/n]
```
