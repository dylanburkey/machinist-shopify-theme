# Machinist Theme — Quick Reference

_Last updated: 2026-03-27_

---

## Development Commands

```bash
# Start dev server with live preview
pnpm dev

# Push theme to Shopify store
pnpm push

# Pull latest theme from Shopify store
pnpm pull

# Run Shopify theme linter/validator
pnpm check

# Lint JavaScript (ESLint, zero warnings allowed)
pnpm lint
pnpm lint:fix

# Format code (Prettier)
pnpm format        # write fixes
pnpm format:check  # check only

# Full validation (lint + format:check + theme check) — runs on pre-push
pnpm validate

# Package theme for distribution
pnpm package

# Generate shareable preview link
pnpm share
```

**Prerequisites**: Node.js >= 18, pnpm@10.27.0, Shopify CLI

---

## Git Hooks

| Hook | Trigger | Action |
|------|---------|--------|
| pre-commit | `git commit` | lint-staged: ESLint + Prettier on staged files |
| pre-push | `git push` | `pnpm validate` (full suite) |

Setup after `pnpm install` (Husky auto-initializes via `prepare` script):
```bash
pnpm exec husky
chmod +x .husky/pre-commit .husky/pre-push
```

---

## Key File Locations

| What | File |
|------|------|
| Root template | `layout/theme.liquid` |
| Global JavaScript + web components | `assets/global.js` |
| CSS design system | `assets/base.css` |
| Product card component | `snippets/product-card.liquid` |
| Product page | `sections/main-product.liquid` |
| Cart page | `sections/main-cart.liquid` |
| Hero section | `sections/hero.liquid` |
| Shoppable image | `sections/shoppable-image-enhanced.liquid` |
| Page builder | `sections/builder-grid.liquid` |
| FAQ | `sections/faq.liquid` |
| ESLint config | `eslint.config.js` |
| Prettier config | `.prettierrc` |
| Theme settings schema | `config/settings_schema.json` (currently empty) |

---

## Adding a New Section

1. Create `sections/my-section.liquid`
2. Add `{% schema %}` block at the bottom with `name`, `settings`, `blocks`, `presets`
3. Section becomes available in Shopify theme editor immediately after `pnpm push`

Minimal schema template:
```liquid
{% schema %}
{
  "name": "My Section",
  "settings": [
    { "type": "text", "id": "heading", "label": "Heading", "default": "My Section" }
  ],
  "presets": [{ "name": "My Section" }]
}
{% endschema %}
```

---

## Adding a New Web Component

1. Add class extending `HTMLElement` in `assets/global.js`
2. Register: `customElements.define('my-element', MyClass)`
3. Add JSDoc to all methods (ESLint enforced)
4. Use `<my-element>` in Liquid templates

---

## Common Debugging

### Cart not updating
- Check `window.routes` object is set in `layout/theme.liquid`
- Verify `cart:updated` CustomEvent is dispatching (check `assets/global.js:102-106`)
- Inspect network tab for POST to `cart/add.js`

### Variant selector not updating price
- Check `#price-{{ section.id }}` selector exists in `sections/main-product.liquid`
- Verify `[data-price]` and `[data-compare-price]` attributes are present
- Confirm variant JSON is in `<script type="application/json">` within `variant-selector`

### ESLint failures on commit
- Run `pnpm lint:fix` to auto-fix
- JSDoc errors require manually adding `/** @param ... @returns */` to functions
- `console.log` not allowed — use `console.warn` or `console.error`

### Prettier failures on push
- Run `pnpm format` to auto-fix all files
- Liquid files are excluded (Prettier can't handle Liquid syntax)

### Shopify theme check errors
- Run `pnpm check` to see all errors
- Check for missing `{% schema %}` required fields (`name`, `presets`)

---

## CSS Custom Properties Quick Reference

```css
--c-bg: #0a0a0a          /* Main background */
--c-panel: #141414       /* Cards / panels */
--c-border: #333333      /* Grid lines */
--c-text-main: #e5e5e5   /* Primary text */
--c-text-dim: #888888    /* Secondary text */
--c-accent: #ff4d00      /* Safety orange accent */
--pad: 1.5rem            /* Standard padding */
--grid-gap: 2px          /* Grid line thickness */
--page-width: 140rem     /* Max content width */
```

---

## CI/CD Workflows

| Workflow | File | Trigger |
|----------|------|---------|
| CI | `.github/workflows/ci.yml` | Push/PR to main, dev, development |
| Production deploy | `.github/workflows/deploy-production.yml` | Manual — type "DEPLOY" to confirm |
| Merge dev to main | `.github/workflows/merge-dev-to-main.yml` | Automated |

---

## Section Quick Reference

| Section | File | Purpose |
|---------|------|---------|
| Announcement bar | `sections/announcement-bar.liquid` | Top promotional strip |
| Hero | `sections/hero.liquid` | Full-width banner + CTA |
| Featured collection | `sections/featured-collection.liquid` | Product grid from collection |
| Smart grid | `sections/smart-grid.liquid` | Container query featured cards |
| Builder grid | `sections/builder-grid.liquid` | 12-col page builder |
| Container grid | `sections/container-grid.liquid` | Bento layout |
| Shoppable image | `sections/shoppable-image-enhanced.liquid` | Interactive product hotspots |
| FAQ | `sections/faq.liquid` | Accordion FAQ + search + categories |
| Trust badges | `sections/preset-trust-badges.liquid` | Animated trust icons |
| Side menu | `sections/side-menu.liquid` | Documentation nav + reading progress |
| Social sharing | `sections/social-sharing.liquid` | Share buttons + copy link |
