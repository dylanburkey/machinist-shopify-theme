# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Machinist** is a Shopify theme featuring a dark, industrial aesthetic designed for precision tech e-commerce. The theme uses a mechanical design system with safety orange accents (#ff4d00) on deep black backgrounds (#0a0a0a).

## Development Commands

```bash
# Start development server with live preview
pnpm dev

# Push theme changes to Shopify store
pnpm push

# Pull latest theme from Shopify store
pnpm pull

# Run Shopify theme linter/validator
pnpm check

# Lint JavaScript (ESLint, zero warnings allowed)
pnpm lint
pnpm lint:fix

# Format code (Prettier)
pnpm format          # write fixes
pnpm format:check    # check only

# Full validation (lint + format:check + theme check) — also runs on pre-push
pnpm validate

# Package theme for distribution
pnpm package

# Generate shareable preview link
pnpm share
```

**Prerequisites**: Node.js 18+, PNPM (10.27.0), Shopify CLI

## Git Hooks & CI

**Pre-commit** (Husky + lint-staged): Auto-runs ESLint --fix and Prettier --write on staged `.js`, `.json`, `.css`, and `.md` files.

**Pre-push**: Runs full `pnpm validate` (lint + format:check + theme check). Push is rejected if any check fails.

**CI** (`.github/workflows/ci.yml`): Runs on pushes/PRs to `main`, `dev`, `development`. Validates ESLint, Prettier, Shopify theme check, and JSON validity for `config/` and `locales/` files.

**Production Deploy** (`.github/workflows/deploy-production.yml`): Manual workflow_dispatch that merges `dev` into `main`, creates a deployment tag, and optionally pushes to Shopify. Requires typing "DEPLOY" to confirm.

## JavaScript Coding Conventions

ESLint is configured with strict rules (see `eslint.config.js`). Key requirements:

- **JSDoc required** on all function declarations, method definitions, and class declarations (with `@param` types, `@returns` type)
- **`const` over `let`**, no `var`
- **Strict equality** (`===`) always
- **No `console.log`** — only `console.warn` and `console.error` allowed
- **Arrow callbacks** preferred (`prefer-arrow-callback`)
- **Curly braces required** on all control flow (even single-line)
- Unused vars with `_` prefix are allowed (`argsIgnorePattern: '^_'`)
- Shopify globals (`Shopify`, `theme`) and browser globals are pre-declared

**Prettier**: Single quotes, semicolons, 2-space indent, 100 char print width, trailing commas (es5). CSS files use double quotes.

## Architecture Overview

### Shopify Theme Structure

Standard Shopify 2.0 theme architecture:

- **`layout/`**: Base theme structure (`theme.liquid` is the root template)
- **`sections/`**: Reusable, configurable components for the theme editor
  - `.json` files are section groups (e.g., `header-group.json`, `footer-group.json`)
  - `.liquid` files are renderable sections
- **`snippets/`**: Smaller reusable Liquid components (not directly configurable in theme editor)
- **`templates/`**: Page-level templates that compose sections together
- **`config/settings_schema.json`**: Theme-wide settings available in the Shopify admin
- **`assets/`**: CSS, JavaScript, and static files
- **`tools/catalog-generator/`**: Node.js scripts for generating product catalog data

### JavaScript Architecture

The theme uses **vanilla Web Components** for all interactive functionality. No framework dependencies.

**Core files**:
- `assets/global.js`: All custom element definitions
- `assets/pubsub.js`: Simple pub/sub system for component communication
- `assets/constants.js`: Shared constants and event names

**Custom Elements**:
- `<quantity-input>`: Increment/decrement quantity selector
- `<accordion-section>`: Collapsible content panels
- `<product-gallery>`: Image gallery with thumbnail navigation
- `<add-to-cart-button>`: Handles cart addition with loading states
- `<cart-drawer>`: Slide-out cart panel
- `<header-cart>`: Cart count badge in header
- `<variant-selector>`: Product variant selection and price updates

**Event System**:
The theme uses native DOM events for component communication:
- `cart:updated`: Fired when items added to cart (triggers cart drawer refresh)
- Components listen via `document.addEventListener()`

### CSS Architecture

- **`assets/base.css`**: Global styles, CSS custom properties, typography, layout primitives
- **`assets/component-card.css`**: Product card styles

**CSS Custom Properties** (defined in `base.css`):
```css
--c-bg: #0a0a0a         /* Main background */
--c-panel: #141414      /* Cards/panels */
--c-border: #333333     /* Grid lines */
--c-text-main: #e5e5e5  /* Primary text */
--c-text-dim: #888888   /* Secondary text */
--c-accent: #ff4d00     /* Orange accent */
--pad: 1.5rem           /* Standard padding */
--grid-gap: 2px         /* Grid line thickness */
```

**Typography**:
- Headings: Teko (uppercase, wide letter-spacing)
- Body: Inter (300-600 weights)
- Monospace: Source Code Pro (technical labels, prices)

### Key Patterns

**Liquid Templating**:
- Use `{% render 'snippet-name' %}` to include snippets
- Use `{% section 'section-name' %}` to render sections
- Product/collection data accessed via Liquid objects (e.g., `product.title`, `collection.products`)
- Theme settings: `{{ settings.color_accent }}`
- Localization: `{{ 'key' | t }}`

**Section Schema**:
Sections have JSON schemas at the bottom of `.liquid` files:
```liquid
{% schema %}
{
  "name": "Section Name",
  "settings": [...],
  "blocks": [...]
}
{% endschema %}
```

**Web Component Pattern**:
All interactive components extend `HTMLElement` and use `customElements.define()`. Components handle their own event listeners and state. Communication between components uses either:
1. Native DOM events (`CustomEvent` with detail payload)
2. Direct DOM queries (for tightly coupled components)

**Cart Operations**:
- Add to cart: POST to `window.routes.cart_add_url`
- Cart data: GET from `window.routes.cart_url + '.js'`
- Cart count updates via `cart:updated` event

**Image Hover Effect**:
Product images use `filter: grayscale(1)` by default, revealing color on hover (`:hover { filter: none }`) for mechanical aesthetic.

## Important Files

- `layout/theme.liquid`: Root template, loads global assets
- `sections/header.liquid`: Navigation and cart icon
- `sections/main-product.liquid`: Product detail page
- `snippets/product-card.liquid`: Product grid card component
- `config/settings_schema.json`: Theme settings structure

## Design System Guidelines

**Buttons**: Orange border with transparent background, flip to solid orange on hover (instant transition, no easing for "mechanical" feel)

**Badges**: Small labels for product status (e.g., "RESTOCKED", "NEW")

**Grid System**: Visible grid lines (`border: var(--grid-gap) solid var(--c-border)`) create blueprint/schematic aesthetic

**Responsive Breakpoints**:
- Mobile: <= 600px
- Tablet: 601px - 1024px
- Desktop: > 1024px

## Common Tasks

**Adding a new section**:
1. Create `.liquid` file in `sections/`
2. Add `{% schema %}` block at bottom with name and settings
3. Section becomes available in theme editor

**Adding a new custom element**:
1. Define class extending `HTMLElement` in `assets/global.js`
2. Register with `customElements.define('element-name', ClassName)`
3. Add JSDoc comments on the class and all methods (required by ESLint)
4. Use `<element-name>` in Liquid templates

**Modifying theme colors**:
Edit CSS custom properties in `assets/base.css` or update `config/settings_schema.json` to make colors configurable in theme editor.

## Theme-Specific Notes

- All text transforms to uppercase for headings (via CSS `text-transform`)
- The theme intentionally avoids jQuery or any JavaScript framework
- Shopify Ajax Cart API is used for cart operations (not Storefront API)
- Theme supports Shopify 2.0 section groups (`header-group.json`, `footer-group.json`)
- Liquid asset filters: `{{ 'file.css' | asset_url | stylesheet_tag }}`
