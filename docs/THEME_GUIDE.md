# Machinist Theme Guide

## Design System

### Color Palette

| Variable | Hex | Usage |
|----------|-----|-------|
| `--c-bg` | #0a0a0a | Deepest black, main background |
| `--c-panel` | #141414 | Component backgrounds, cards |
| `--c-border` | #333333 | Grid lines, borders |
| `--c-text-main` | #e5e5e5 | Primary text color |
| `--c-text-dim` | #888888 | Secondary/meta text |
| `--c-accent` | #ff4d00 | Safety orange, CTAs, highlights |

### Typography

- **Headings**: Teko (uppercase, letter-spacing: 1px)
- **Body**: Inter (weight: 300-600)
- **Monospace**: Source Code Pro (technical labels, prices)

### Spacing

- `--pad`: 1.5rem (default padding)
- `--grid-gap`: 2px (grid line thickness)

## Component Library

### Buttons

```html
<button class="btn">
  <span class="btn-text">BUTTON TEXT</span>
</button>
```

States:
- Default: Orange border, transparent background
- Hover: Orange background, dark text
- Loading: Spinner animation with disabled state

### Badges

```html
<span class="badge">RESTOCKED</span>
```

### Product Cards

Standard card structure for collection grids with:
- Image container with grayscale filter
- Meta information (SKU, stock status)
- Title and description
- Price and add-to-cart button

### Accordion

Technical specifications accordion with toggle states.

## Section Templates

### Hero Section

Two-column layout:
- Left: Content (status label, headline, subtitle, CTA)
- Right: Industrial image with overlay pattern

### Collection Layout

Sidebar filter + product grid:
- 280px sidebar on desktop
- Full-width on mobile

### Product Detail Page

Gallery + details split:
- Main image with thumbnail navigation
- Product info, quantity selector, specifications

## Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 601px - 1024px
- **Mobile**: ≤ 600px

## Theme Settings Schema

Settings are organized into sections:
1. Colors
2. Typography
3. Header
4. Hero
5. Collection
6. Product
7. Footer
