# Machinist Shopify Theme

A dark, industrial-themed Shopify theme designed for precision tech e-commerce stores. Featuring a mechanical aesthetic with bold typography, grid-based layouts, and a distinctive orange accent color scheme.

## Design Philosophy

**Machinist** embodies the precision and power of industrial manufacturing:

- **Dark Industrial Palette**: Deep black backgrounds (#0a0a0a) with safety orange (#ff4d00) accents
- **Technical Typography**: Teko for headings, Inter for body, Source Code Pro for monospace
- **Grid-Based Layouts**: Visible grid lines creating a schematic blueprint feel
- **Mechanical Interactions**: Instant-switch hover states for a mechanical button feel
- **Grayscale-to-Color**: Product images reveal color on hover

## Features

- Fully responsive design (mobile, tablet, desktop)
- Sticky navigation with technical aesthetic
- Hero section with industrial imagery overlay
- Animated ticker/marquee strip for announcements
- Collection page with sidebar filters
- Product cards with hover effects and badges
- Product detail page with:
  - Image gallery with thumbnail navigation
  - Quantity selector
  - Collapsible specifications accordion
  - Add to cart with loading states
- Custom fonts via Google Fonts
- CSS custom properties for easy theming

## Installation

### Prerequisites

- Node.js 18+
- PNPM package manager
- Shopify CLI

### Setup

```bash
# Clone the repository
git clone https://github.com/dylanburkey/machinist-shopify-theme.git
cd machinist-shopify-theme

# Install dependencies
pnpm install

# Start development
pnpm dev
```

### Shopify CLI Commands

```bash
# Connect to your Shopify store
shopify theme dev --store your-store.myshopify.com

# Push theme to store
shopify theme push

# Pull theme from store
shopify theme pull
```

## Project Structure

```
machinist-shopify-theme/
├── assets/           # CSS, JS, images, fonts
├── config/           # Theme settings schema
├── layout/           # Theme layouts (theme.liquid)
├── locales/          # Translation files
├── sections/         # Theme sections
├── snippets/         # Reusable Liquid snippets
├── templates/        # Page templates
│   └── customers/    # Customer account templates
├── docs/             # Documentation
├── package.json
└── README.md
```

## Customization

Theme settings can be configured in the Shopify theme editor. Key customization options:

- **Colors**: Primary, secondary, accent colors
- **Typography**: Font family and size selections
- **Hero Section**: Background image, headline, call-to-action
- **Announcement Bar**: Enable/disable ticker strip
- **Product Grid**: Items per row, card style options

## Development

```bash
# Start development server with hot reload
pnpm dev

# Lint code
pnpm lint

# Build for production
pnpm build
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - see LICENSE file for details.

## Credits

- Design inspired by industrial manufacturing interfaces
- Fonts: Google Fonts (Teko, Inter, Source Code Pro)
- Icons: Lucide Icons

---

Built with precision. Engineered for performance.
