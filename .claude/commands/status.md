# /status Command

## Purpose
Displays a visual dashboard of project progress, task status, and blockers.

## Trigger
User runs `/status`, `/status phase-1`, or asks "what's the status?" / "show progress"

## Prerequisites
- `.task-status.json` must exist

## Usage

```bash
/status              # Show current phase status
/status phase-1      # Show specific phase status
/status --full       # Show all phases
/status --blockers   # Show only blocking items
```

## Workflow

### Step 1: Load Status Data
```
1. Read .claude/tasks/.task-status.json
2. Parse task statuses and timestamps
3. Calculate completion percentages
4. Identify blockers and next actions
```

### Step 2: Generate Dashboard
```
1. Create/update .claude/status/DASHBOARD.md
2. Build visual progress bar
3. Group tasks by status
4. List phase gate criteria
5. Identify next recommended actions
```

### Step 3: Display Summary
```
1. Show inline summary in response
2. Link to full dashboard file
3. Highlight any blockers
4. Suggest next action
```

## Output Format

### DASHBOARD.md Structure

```markdown
# 📊 Project Status Dashboard

**Project**: [Project Name]
**Current Phase**: Phase 1 - [Phase Name]
**Last Updated**: [timestamp]

---

## Progress Overview

### Phase 1: [Phase Name]
███████████░░░░░░░░░ 55% Complete (11/20 tasks)

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Complete | 11 | 55% |
| 🔄 In Progress | 2 | 10% |
| ⏳ Pending | 7 | 35% |

---

## Task Breakdown

### ✅ Completed (11)

| ID | Task | Completed |
|----|------|-----------|
| 1.1.1 | Create base layout | 2024-01-15 10:30 |
| 1.1.2 | Navigation component | 2024-01-15 11:45 |
| ... | ... | ... |

### 🔄 In Progress (2)

| ID | Task | Started | Notes |
|----|------|---------|-------|
| 1.2.3 | Product schema | 2024-01-15 14:00 | Waiting on API response |
| 1.3.1 | Search component | 2024-01-15 15:30 | 60% complete |

### ⏳ Pending (7)

| ID | Task | Priority | Blocked By |
|----|------|----------|------------|
| 1.2.4 | Metafield display | High | 1.2.3 |
| 1.3.2 | Filter system | Medium | 1.3.1 |
| ... | ... | ... | ... |

---

## 🚧 Blockers

| Issue | Blocking | Action Required |
|-------|----------|-----------------|
| Task 1.2.3 incomplete | 1.2.4, 1.2.5 | Complete product schema |
| Design decision needed | 1.4.1 | Decide on color scheme variant |

---

## Phase Gate Status

### Requirements to Complete Phase 1:
- [x] All critical tasks complete
- [x] Base layout implemented
- [ ] Product display working
- [ ] Tests passing
- [ ] Documentation updated

**Blocking items**: 2 remaining

---

## 📋 Next Actions

1. **Complete Task 1.2.3** - Product schema (in progress)
2. **Review Task 1.3.1** - Search component (in progress)  
3. **Start Task 1.2.4** - Metafield display (once 1.2.3 done)

---

## Quick Commands

- `/run` - Execute next task
- `/run 1.2.3` - Continue specific task
- `/complete 1.2.3` - Mark task complete
- `/add-task` - Add new task
- `/task phase-2` - Generate next phase tasks

---

*Dashboard auto-generated. Run `/status` to refresh.*
```

### Inline Summary (shown in chat)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 PROJECT STATUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Phase 1: Foundation
███████████░░░░░░░░░ 55% (11/20 tasks)

✅ Complete: 11  |  🔄 In Progress: 2  |  ⏳ Pending: 7

🚧 Blockers: 2 items blocking progress

Next action: Complete Task 1.2.3 (Product schema)

Full dashboard: .claude/status/DASHBOARD.md
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Progress Bar Generation

```javascript
function generateProgressBar(percentage, width = 20) {
  const filled = Math.round((percentage / 100) * width);
  const empty = width - filled;
  return '█'.repeat(filled) + '░'.repeat(empty) + ` ${percentage}%`;
}

// Examples:
// 0%:   ░░░░░░░░░░░░░░░░░░░░ 0%
// 25%:  █████░░░░░░░░░░░░░░░ 25%
// 50%:  ██████████░░░░░░░░░░ 50%
// 75%:  ███████████████░░░░░ 75%
// 100%: ████████████████████ 100%
```

## Status Calculations

```javascript
// Task status counts
const counts = {
  complete: tasks.filter(t => t.status === 'complete').length,
  inProgress: tasks.filter(t => t.status === 'in-progress').length,
  pending: tasks.filter(t => t.status === 'pending').length
};

// Completion percentage
const percentage = Math.round((counts.complete / tasks.length) * 100);

// Blockers
const blockers = tasks.filter(t => 
  t.status === 'pending' && 
  t.dependencies.some(d => getTask(d).status !== 'complete')
);

// Phase gate progress
const gateProgress = phaseCriteria.filter(c => c.met).length;
const gateTotal = phaseCriteria.length;
```

## Error Handling

| Error | Response |
|-------|----------|
| No status file | "No project status found. Run `/plan` and `/task` first to initialize." |
| Corrupted JSON | "Status file corrupted. Regenerating from task files..." |
| Phase not found | "Phase [N] not found. Available phases: [list]" |

## Auto-Refresh Triggers

Dashboard is automatically regenerated when:
- `/complete` is run
- `/add-task` is run
- `/run` completes a task
- Task status changes

## Agent Assignment
- Primary: `docs` agent for dashboard generation
- No subagents needed
