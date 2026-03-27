# Machinist Theme — Implementation Patterns

_Last updated: 2026-03-27_

---

## 1. Web Component Pattern

All interactive functionality uses vanilla Web Components. No frameworks.

```js
class MyComponent extends HTMLElement {
  constructor() {
    super();
    // Query internal DOM
    this.button = this.querySelector('button');
    this.button?.addEventListener('click', this.onClick.bind(this));
  }

  onClick(event) {
    event.preventDefault();
    // handle interaction
  }
}
customElements.define('my-component', MyComponent);
```

Reference: `assets/global.js:1-306`

### JSDoc requirement (ESLint enforced)
```js
/**
 * Handles button click and dispatches cart event.
 * @param {MouseEvent} event - The click event
 * @returns {Promise<void>}
 */
async onButtonClick(event) { ... }
```

---

## 2. Cart Operations Pattern

Add to cart: POST to `window.routes.cart_add_url` with FormData.

```js
const formData = new FormData(form);
const response = await fetch(window.routes.cart_add_url, {
  method: 'POST',
  body: formData,
});
const result = await response.json();
if (result.status === 422) { throw new Error(result.description); }
document.dispatchEvent(new CustomEvent('cart:updated', { detail: { item: result } }));
```

Reference: `assets/global.js:80-116` (AddToCartButton)

### Cart Drawer Refresh
```js
const response = await fetch(`${window.routes.cart_url}?section_id=cart-drawer`);
const html = await response.text();
const doc = new DOMParser().parseFromString(html, 'text/html');
this.innerHTML = doc.querySelector('cart-drawer').innerHTML;
```

Reference: `assets/global.js:172-188`

---

## 3. Section Schema Pattern

Every `.liquid` section file ends with a `{% schema %}` block.

```liquid
{% schema %}
{
  "name": "Section Display Name",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Default Text"
    }
  ],
  "blocks": [
    {
      "type": "card",
      "name": "Card",
      "settings": [...]
    }
  ],
  "presets": [
    { "name": "Section Display Name" }
  ]
}
{% endschema %}
```

---

## 4. Per-Section CSS Variables Pattern

Scope section-specific variables using `{%- style -%}` with the section ID selector.

```liquid
{%- style -%}
  #shopify-section-{{ section.id }} {
    --hotspot-size: {{ section.settings.hotspot_size }}px;
    --accent-color: {{ section.settings.accent_color }};
  }
{%- endstyle -%}
```

Reference: `sections/shoppable-image-enhanced.liquid:15-27`

This pattern allows theme editor controls to update CSS in real-time.

---

## 5. Hotspot/Interactive Marker Pattern (shoppable-image-enhanced)

5 hotspot types, each rendered with `{%- case block.type -%}`:

- `product_hotspot` — orange pulsing dot, product card popup on click
- `info_hotspot` — green circle with hover text content
- `parts_hotspot` — numbered marker for parts diagrams
- `information_pointer` — blue click-to-reveal text box
- `product_highlights` — teal small product card highlight

Hotspot triggers use `aria-expanded` + `data-hotspot-trigger` + `data-hotspot-card` pattern for accessible show/hide.

Reference: `sections/shoppable-image-enhanced.liquid:58-200`

---

## 6. Responsive Image Pattern (srcset)

Use Shopify's `image_url` filter with srcset for responsive images:

```liquid
<img
  src="{{ block.settings.image | image_url: width: 800 }}"
  srcset="{{ block.settings.image | image_url: width: 400 }} 400w,
          {{ block.settings.image | image_url: width: 800 }} 800w,
          {{ block.settings.image | image_url: width: 1200 }} 1200w"
  sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
  alt="{{ block.settings.image.alt | default: block.settings.heading }}"
  loading="lazy"
>
```

Reference: `sections/smart-grid.liquid:20-28`

---

## 7. Builder Grid Column Span Pattern

Map percentage widths to 12-column spans using Liquid case:

```liquid
{%- liquid
  case block.settings.width
    when '25'  then assign span = 3
    when '33'  then assign span = 4
    when '50'  then assign span = 6
    when '66'  then assign span = 8
    when '75'  then assign span = 9
    when '100' then assign span = 12
    else            assign span = 12
  endcase
  assign mobile_span = block.settings.mobile_width | default: 12
-%}
<div style="--span: {{ span }}; --mobile-span: {{ mobile_span }};">
```

Reference: `sections/builder-grid.liquid:20-43`

---

## 8. FAQ Faceted Search Pattern

Real-time client-side filtering using `data-faq-search` input + `data-category` buttons:

```liquid
<input
  type="text"
  class="faq-search__input"
  placeholder="{{ section.settings.search_placeholder | default: 'Search FAQs...' }}"
  data-faq-search
>
{%- assign categories = section.blocks | map: 'settings' | map: 'category' | uniq -%}
{%- for category in categories -%}
  <button class="faq-category-btn" data-category="{{ category }}">{{ category }}</button>
{%- endfor -%}
```

Reference: `sections/faq.liquid:22-50`

---

## 9. Industrial Aesthetic Rules

Applied consistently across all sections:

- Safety orange accent `#ff4d00` on deep black `#0a0a0a` / dark panel `#141414`
- `font-family: Teko` for all headings (uppercase via CSS `text-transform`)
- `font-family: Source Code Pro` for technical text, prices, labels
- Images default to `filter: grayscale(1)`, reveal color on `:hover { filter: none }`
- Sharp corners (no border-radius) for "machine" aesthetic
- Grid lines via `border: var(--grid-gap) solid var(--c-border)` — 2px visible lines
- Inline SVG icons (self-contained sections, no external icon font dependencies)
- Button hover: instant flip to solid orange (no `transition` easing — "mechanical")

---

## 10. Variant Selector + Price Update Pattern

```js
onVariantChange() {
  this.updateOptions();   // collect select values into this.options array
  this.updateMasterId();  // find matching variant from JSON data
  this.updateURL();       // pushState ?variant=ID
  this.updateFormId();    // update hidden #product-form-{section} input[name="id"]
  this.updatePrice();     // update #price-{section} [data-price] / [data-compare-price]
}
```

Variant JSON embedded inline: `<script type="application/json">{{ product.variants | json }}</script>`

Reference: `assets/global.js:216-302`
