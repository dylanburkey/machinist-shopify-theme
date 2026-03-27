# AI Memory System — Update Procedures

_Last updated: 2026-03-27_

## When to Update

Update the memory system after:
- Adding new sections or snippets
- Adding/modifying web components
- Changing the CSS design system
- Adding new npm scripts or tooling
- Significant architectural decisions
- Completing features from TODO.md
- Any CI/CD pipeline changes

## How to Update

Run `/update` in Claude Code. The AI Memory System Update Agent will:
1. Read all 8 `.ai/` files
2. Run `git diff` and `git log` to see recent changes
3. Identify gaps between what changed and what's documented
4. Apply edits to relevant files
5. Update `meta.lastUpdated` timestamps
6. Commit changes with `/commit`

## Manual Update Process

If running manually, follow this order:

### Step 1: Git Analysis
```bash
git log --oneline -20
git diff HEAD~5..HEAD --stat
git diff HEAD~5..HEAD
git diff --stat   # uncommitted changes
```

### Step 2: File Updates by Category

| Change Type | Update These Files |
|-------------|-------------------|
| New section added | `FILES.json`, `BUSINESS.json`, `PATTERNS.md` |
| New web component | `FILES.json`, `ARCHITECTURE.json`, `PATTERNS.md` |
| New npm script | `QUICK.md`, `ARCHITECTURE.json` |
| New CI/CD config | `ARCHITECTURE.json`, `QUICK.md` |
| Feature completed | `TODO.md`, `BUSINESS.json` |
| New pattern discovered | `PATTERNS.md` |
| File moved/renamed | `FILES.json`, `QUICK.md` |
| Design system change | `ARCHITECTURE.json`, `PATTERNS.md` |

### Step 3: Validation
```bash
python3 -m json.tool .ai/ARCHITECTURE.json > /dev/null
python3 -m json.tool .ai/FILES.json > /dev/null
python3 -m json.tool .ai/BUSINESS.json > /dev/null
wc -l .ai/*.md .ai/*.json
```

Target total: ~3000 lines (+/- 200 acceptable)

### Step 4: Timestamps
Update `meta.lastUpdated` to `YYYY-MM-DD` format in all JSON files.

### Step 5: Commit
```bash
git add .ai/
git commit -m "Update AI memory system — [brief description of changes]"
```

## File Size Guidelines

| File | Target Size |
|------|-------------|
| `ARCHITECTURE.json` | 80-120 lines |
| `FILES.json` | 80-100 lines |
| `PATTERNS.md` | 200-300 lines |
| `BUSINESS.json` | 80-100 lines |
| `QUICK.md` | 150-200 lines |
| `TODO.md` | 40-60 lines |
| `README.md` | 40-60 lines |
| `SPRINT_UPDATE.md` | 60-80 lines |
| **Total** | **~900-1000 lines** |

## What NOT to Store in .ai/

- Full file contents (reference file:line instead)
- Conversation transcripts
- Temporary notes
- Duplicate information across files
- Speculative future plans (use TODO.md sparingly)
