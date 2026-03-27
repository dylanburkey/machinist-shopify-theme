# Machinist Theme — TODO

_Last updated: 2026-03-27_

---

## Pending / Not Started

- [ ] **config/settings_schema.json** — Currently empty `[]`. Needs theme-wide settings: color_accent, typography fonts, logo, favicon, social links
- [ ] **Localization** — `locales/` folder needs localization strings for UI text (button labels, error messages, etc.)
- [ ] **Accessibility audit** — Review ARIA roles and labels across all web components and sections (especially shoppable-image-enhanced hotspot focus management)
- [ ] **Performance audit** — Audit lazy loading, image sizes, and Core Web Vitals
- [ ] **Shopify Online Store 2.0 metafields** — Explore metafield usage in sections for richer product data
- [ ] **Staged changes in package.json + CLAUDE.md** — Uncommitted working tree changes need to be committed (add `type: module`, lint/format/validate scripts, husky setup, updated CLAUDE.md)

## In Progress

- [ ] CI/CD pipeline validation — workflows added but need end-to-end testing against live Shopify store

## Complete

- [x] Core theme architecture (layout, sections, snippets, templates, assets)
- [x] 7 web components (global.js)
- [x] CSS design system (base.css, component-card.css)
- [x] shoppable-image-enhanced section (5 hotspot types)
- [x] builder-grid section (12-column page builder, 10 block types)
- [x] smart-grid section (container query cards)
- [x] container-grid section (bento layout)
- [x] faq section (faceted search, 3 display modes)
- [x] preset-trust-badges section
- [x] side-menu section (reading progress)
- [x] social-sharing section
- [x] ESLint flat config (strict JSDoc rules)
- [x] Prettier config
- [x] Husky pre-commit + pre-push hooks
- [x] GitHub Actions CI workflow
- [x] GitHub Actions production deploy workflow
- [x] GitHub Actions merge-dev-to-main workflow
- [x] CLAUDE.md documentation
- [x] .ai/ memory system initialized
