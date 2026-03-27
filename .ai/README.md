# Machinist Theme — AI Memory System

_Last updated: 2026-03-27_

## Purpose

This `.ai/` directory is the memory system for AI-assisted development of the Machinist Shopify theme. It captures architecture decisions, file locations, patterns, and business context so that each AI session starts with accurate, actionable context — enabling faster, more consistent development.

## Files

| File | Purpose |
|------|---------|
| `ARCHITECTURE.json` | Theme architecture, JS patterns, CSS system, CI/CD, linting rules |
| `FILES.json` | Complete file index with descriptions and purposes |
| `PATTERNS.md` | Implementation patterns with code examples and file:line references |
| `BUSINESS.json` | Feature status, product definition, user flows, theme editor capabilities |
| `QUICK.md` | Development commands, debugging guides, section/file quick reference |
| `TODO.md` | Current task list (planned, in-progress, complete) |
| `README.md` | This file — memory system overview |
| `SPRINT_UPDATE.md` | Procedures for keeping this memory system current |

## Project Summary

**Machinist** is a Shopify 2.0 theme with a dark industrial aesthetic for precision tech e-commerce.

- **Design system**: Safety orange `#ff4d00` on deep black `#0a0a0a`; Teko headings, Inter body, Source Code Pro technical text
- **JavaScript**: Vanilla Web Components only (no frameworks) — 7 custom elements in `assets/global.js`
- **Sections**: 23 sections total; 8 added recently (shoppable-image-enhanced + 7 industrial sections)
- **Tooling**: ESLint (strict JSDoc), Prettier, Husky hooks, GitHub Actions CI/CD
- **Status**: Core theme + sections library complete; settings_schema.json and localization pending

## Usage

When starting a new AI session on this project:
1. Read `ARCHITECTURE.json` for technical context
2. Read `QUICK.md` for commands and file locations
3. Check `TODO.md` for current work priorities
4. Reference `PATTERNS.md` when implementing new features
5. Check `FILES.json` when looking for specific files

## Update Procedure

Run `/update` to trigger the AI Memory System Update Agent, which:
1. Analyzes recent git diffs
2. Identifies gaps in memory files
3. Updates relevant files
4. Commits changes
