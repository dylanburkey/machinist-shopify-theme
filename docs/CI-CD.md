# CI/CD Pipeline Documentation

This document describes the continuous integration and deployment pipeline for the Machinist Shopify Theme.

## Overview

The CI/CD system consists of:

1. **Local Git Hooks** - Pre-commit and pre-push validation using Husky v9
2. **GitHub Actions Workflows** - Automated testing and deployment
3. **Quality Gates** - ESLint, JSDoc, Prettier, and Shopify Theme Check

---

## Local Development Workflow

### Pre-commit Hook

When you run `git commit`, **lint-staged** runs on staged files only:

| File Type | Actions |
|-----------|---------|
| `*.js` | ESLint with auto-fix, Prettier formatting |
| `*.{json,css,md}` | Prettier formatting |

This keeps commits fast by only checking files you changed. Liquid files are excluded from Prettier because the default HTML parser cannot handle Liquid template syntax.

### Pre-push Hook

Before code is pushed to the remote repository, the full validation suite runs:

```
pnpm validate
  ├── pnpm lint          # ESLint with JSDoc rules (all JS files, zero warnings allowed)
  ├── pnpm format:check  # Prettier (check only, no auto-fix)
  └── pnpm check         # Shopify Theme Check (full Liquid/theme validation)
```

This is the gateway that prevents broken code from reaching the remote.

### Setting Up Hooks

```bash
# Install dependencies (Husky auto-initializes via the `prepare` script)
pnpm install

# If hooks aren't working, manually initialize
pnpm exec husky
chmod +x .husky/pre-commit
chmod +x .husky/pre-push
```

> **Note:** Husky v9 hooks are plain shell scripts. They do **not** source `husky.sh` (that was the v8 API).

---

## NPM Scripts Reference

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start Shopify theme development server |
| `pnpm push` | Push theme to Shopify store |
| `pnpm pull` | Pull latest theme from Shopify store |
| `pnpm check` | Run Shopify theme check (Liquid validation) |
| `pnpm package` | Package theme for distribution |
| `pnpm share` | Generate a shareable theme preview link |
| `pnpm lint` | Run ESLint on `assets/**/*.js` and `tools/**/*.js` (includes JSDoc rules) |
| `pnpm lint:fix` | Run ESLint with auto-fix |
| `pnpm format` | Format all files with Prettier |
| `pnpm format:check` | Check formatting without modifying files |
| `pnpm validate` | Run `lint` + `format:check` + `check` in sequence |
| `pnpm prepare` | Initialize Husky hooks (runs automatically on `pnpm install`) |

---

## GitHub Actions Workflows

### 1. CI - Code Quality & Theme Validation (`ci.yml`)

**Triggers:** Push or PR to `main`, `dev`, or `development`

**Concurrency:** Uses `cancel-in-progress: true` so newer pushes to the same branch cancel in-progress runs, saving CI minutes.

**Jobs (run in parallel):**

| Job | Description |
|-----|-------------|
| `lint` | ESLint + Prettier check + JSON schema validation (`config/`, `locales/`) |
| `theme-check` | Shopify CLI theme check (Liquid syntax, theme best practices) |
| `security` | `pnpm audit` for dependency vulnerabilities (non-blocking) |
| `ci-summary` | Aggregates results from `lint` and `theme-check`; fails if either failed |

**Environment:** Node.js 20, pnpm 10.27.0

### 2. Deploy to Production (`deploy-production.yml`)

**Triggers:** Manual only (`workflow_dispatch`)

**Required Input:** Type `DEPLOY` to confirm

**Options:**
- `skip_theme_push` (boolean) - Skip pushing the theme to Shopify after merge

**Pipeline:**

```
validate-deploy          Confirms "DEPLOY" was typed
       │
pre-deploy-validation    Runs lint, Prettier, theme check, JSON validation on dev branch
       │
merge-to-main            Checks for conflicts, merges dev → main (--no-ff), creates deploy tag
       │
deploy-to-shopify        Pushes theme to Shopify store (skippable)
       │
notify-completion        Prints deployment summary
```

### 3. Merge Dev to Main (`merge-dev-to-main.yml`)

**Triggers:** Manual only (`workflow_dispatch`)

**Options:**
- **Merge strategy:** `merge` (--no-ff, default) or `squash`
- **Create GitHub release:** Optional, auto-generates changelog from commits
- **Version bump type:** `patch` (default), `minor`, or `major`

**Pipeline:**

```
validate           Checks dev is ahead of main, reports commit counts
    │
quality-check      Runs lint, Prettier, theme check on dev branch
    │
merge              Performs merge with selected strategy, pushes to main
    │
create-release     (optional) Bumps package.json version, creates GitHub release with changelog
    │
summary            Prints merge details
```

---

## ESLint Configuration

The project uses ESLint v9 with the flat config format (`eslint.config.js`).

### Scope

Lints files matching `assets/**/*.js` and `tools/**/*.js`. Ignores `node_modules/`, `*.min.js`, `assets/vendor/`, and `*.liquid`.

### Rule Categories

**Code Quality:**
- `no-unused-vars` (error, ignores `_`-prefixed args)
- `no-console` (warn, allows `console.warn` and `console.error`)
- `no-var`, `prefer-const`, `prefer-arrow-callback`
- `no-duplicate-imports`

**Best Practices:**
- `eqeqeq` (always use `===`)
- `curly` (always use braces)
- `no-eval`, `no-implied-eval`, `no-new-func`
- `no-return-await`, `require-await`

**JSDoc (via `eslint-plugin-jsdoc`):**
- Required for: function declarations, method definitions, class declarations, exported functions
- Not required for: arrow functions, function expressions
- Enforces: `@param` with types, `@returns` with types, valid type syntax

> **Note:** Formatting rules (`semi`, `quotes`) are intentionally omitted from ESLint. Prettier handles all formatting to avoid conflicts between the two tools.

### Globals

Browser globals (`window`, `document`, `fetch`, `customElements`, `HTMLElement`, observers, timers, etc.) and Shopify globals (`Shopify`, `theme`) are declared as `readonly`.

---

## Prettier Configuration

**Base settings:**
- Semicolons: yes
- Single quotes: yes (except CSS)
- Tab width: 2 spaces
- Trailing commas: ES5
- Print width: 100
- Arrow parens: always
- End of line: LF

**File-specific overrides:**
- `*.json` - 2-space tabs (matches base, explicit for clarity)
- `*.css` - Double quotes (CSS convention)

**Ignored files** (via `.prettierignore`):
- `node_modules/`, `*.min.js`, `*.min.css`
- `.shopify/`, `*.liquid` (Liquid requires `@shopify/prettier-plugin-liquid` for safe formatting)
- IDE files, OS files, logs, temp files

---

## JSDoc Requirements

All function declarations, method definitions, and class declarations must have JSDoc comments:

```javascript
/**
 * Calculate the total price with tax
 * @param {number} price - The base price
 * @param {number} taxRate - The tax rate as a decimal
 * @returns {number} The total price including tax
 */
function calculateTotal(price, taxRate) {
  return price * (1 + taxRate);
}

/**
 * Product card web component
 * @class
 * @extends HTMLElement
 */
class ProductCard extends HTMLElement {
  /**
   * Initialize the component
   * @returns {void}
   */
  connectedCallback() {
    // ...
  }
}
```

Arrow functions and function expressions do not require JSDoc.

---

## Required Secrets

Configure these in your GitHub repository settings (Settings > Secrets and variables > Actions):

| Secret | Description | Used By |
|--------|-------------|---------|
| `SHOPIFY_CLI_THEME_TOKEN` | Shopify CLI theme access token | `ci.yml`, `deploy-production.yml` |
| `SHOPIFY_STORE` | Shopify store domain (e.g., `my-store.myshopify.com`) | `deploy-production.yml` |

### Generating a Shopify CLI Token

```bash
shopify auth logout
shopify theme dev --store your-store.myshopify.com
# Copy the token from the output
```

---

## Branching Strategy

```
main (production)
  │
  └── dev (development)
        │
        ├── feature/new-section
        ├── fix/cart-bug
        └── refactor/css-variables
```

### Developer Workflow

1. Create a feature branch from `dev`
2. Make changes with proper commits (lint-staged runs on each commit)
3. Push to feature branch (pre-push hook validates everything)
4. Create PR to `dev` (CI workflow runs automatically)
5. Merge after review
6. When ready for production, use the **Deploy to Production** or **Merge Dev to Main** workflow

---

## Troubleshooting

### ESLint Errors

```bash
# See detailed errors
pnpm lint

# Auto-fix what's possible
pnpm lint:fix
```

### JSDoc Missing

The linter requires JSDoc for:
- Function declarations
- Method definitions
- Class declarations
- Exported functions

Run `pnpm lint` to see which functions need documentation.

### Prettier Formatting Issues

```bash
# Check which files are not formatted
pnpm format:check

# Auto-format everything
pnpm format
```

### Husky Hooks Not Running

```bash
# Reinstall hooks
pnpm exec husky
chmod +x .husky/pre-commit
chmod +x .husky/pre-push
```

If hooks still don't run, verify that `.husky/pre-commit` and `.husky/pre-push` exist and are executable. Husky v9 hooks are plain scripts that do **not** source `husky.sh`.

### Merge Conflicts in Deploy Workflow

If the deploy workflow fails due to conflicts:
1. Locally checkout `main`
2. Run `git merge dev`
3. Resolve conflicts
4. Push to `main`
5. Re-run the deploy workflow

### CI Failing on PR

Check which job failed:
- **lint** - Run `pnpm lint` and `pnpm format:check` locally
- **theme-check** - Run `pnpm check` locally
- **security** - Review `pnpm audit` output (this job is non-blocking)

---

## File Structure

```
.github/
  workflows/
    ci.yml                  # Main CI workflow (push/PR to main, dev, development)
    deploy-production.yml   # Full production deploy (manual trigger)
    merge-dev-to-main.yml   # Quick merge workflow (manual trigger)
  PULL_REQUEST_TEMPLATE.md  # PR template
  ISSUE_TEMPLATE/
    bug_report.md           # Bug report issue template

.husky/
  pre-commit              # Runs lint-staged on staged files
  pre-push                # Runs full pnpm validate

eslint.config.js          # ESLint v9 flat config (code quality + JSDoc rules)
.prettierrc               # Prettier formatting config
.prettierignore           # Files excluded from Prettier
package.json              # Scripts, dependencies, lint-staged config
```

---

## Dev Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `@shopify/cli` | ^3.50.0 | Shopify CLI for theme development |
| `@shopify/theme` | ^3.50.0 | Shopify theme CLI plugin |
| `@eslint/js` | ^9.0.0 | ESLint recommended config |
| `eslint` | ^9.0.0 | JavaScript linter |
| `eslint-plugin-jsdoc` | ^50.0.0 | JSDoc validation rules |
| `prettier` | ^3.2.0 | Code formatter |
| `husky` | ^9.0.0 | Git hooks manager |
| `lint-staged` | ^15.0.0 | Run linters on staged files |
