# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Machinist** is a Shopify theme featuring a dark, industrial aesthetic designed for precision tech e-commerce. The theme uses a mechanical design system with safety orange accents (#ff4d00) on deep black backgrounds (#0a0a0a).

## Development Commands

```bash
# Start development server with live preview
pnpm dev
# Equivalent to: shopify theme dev

# Push theme changes to Shopify store
pnpm push

# Pull latest theme from Shopify store
pnpm pull

# Run theme linter/validator
pnpm check

# Package theme for distribution
pnpm package

# Generate shareable preview link
pnpm share
```

**Prerequisites**: Node.js 18+, PNPM package manager, Shopify CLI

## Architecture Overview

### Shopify Theme Structure

This follows standard Shopify 2.0 theme architecture:

- **`layout/`**: Base theme structure ([theme.liquid](layout/theme.liquid) is the root template)
- **`sections/`**: Reusable, configurable components that can be added via theme editor
  - Section files ending in `.json` are section groups (e.g., `header-group.json`, `footer-group.json`)
  - Section files ending in `.liquid` are renderable sections
- **`snippets/`**: Smaller reusable Liquid components (not directly configurable in theme editor)
- **`templates/`**: Page-level templates that compose sections together
- **`config/settings_schema.json`**: Theme-wide settings available in the Shopify admin
- **`assets/`**: CSS, JavaScript, and static files

### JavaScript Architecture

The theme uses **vanilla Web Components** for all interactive functionality. No framework dependencies.

**Core files**:
- [assets/global.js](assets/global.js): All custom element definitions
- [assets/pubsub.js](assets/pubsub.js): Simple pub/sub system for component communication
- [assets/constants.js](assets/constants.js): Shared constants and event names

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

- **[assets/base.css](assets/base.css)**: Global styles, CSS custom properties, typography, layout primitives
- **[assets/component-card.css](assets/component-card.css)**: Product card styles

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

- [layout/theme.liquid](layout/theme.liquid): Root template, loads global assets
- [sections/header.liquid](sections/header.liquid): Navigation and cart icon
- [sections/main-product.liquid](sections/main-product.liquid): Product detail page
- [snippets/product-card.liquid](snippets/product-card.liquid): Product grid card component
- [config/settings_schema.json](config/settings_schema.json): Theme settings structure

## Design System Guidelines

**Buttons**: Orange border with transparent background, flip to solid orange on hover (instant transition, no easing for "mechanical" feel)

**Badges**: Small labels for product status (e.g., "RESTOCKED", "NEW")

**Grid System**: Visible grid lines (`border: var(--grid-gap) solid var(--c-border)`) create blueprint/schematic aesthetic

**Responsive Breakpoints**:
- Mobile: ≤ 600px
- Tablet: 601px - 1024px
- Desktop: > 1024px

## Common Tasks

**Adding a new section**:
1. Create `.liquid` file in `sections/`
2. Add `{% schema %}` block at bottom with name and settings
3. Section becomes available in theme editor

**Adding a new custom element**:
1. Define class extending `HTMLElement` in [assets/global.js](assets/global.js)
2. Register with `customElements.define('element-name', ClassName)`
3. Use `<element-name>` in Liquid templates

**Modifying theme colors**:
Edit CSS custom properties in [assets/base.css](assets/base.css) or update [config/settings_schema.json](config/settings_schema.json) to make colors configurable in theme editor.

## Theme-Specific Notes

- All text transforms to uppercase for headings (via CSS `text-transform`)
- The theme intentionally avoids jQuery or any JavaScript framework
- Shopify Ajax Cart API is used for cart operations (not Storefront API)
- Theme supports Shopify 2.0 section groups (`header-group.json`, `footer-group.json`)
- Liquid asset filters: `{{ 'file.css' | asset_url | stylesheet_tag }}`
