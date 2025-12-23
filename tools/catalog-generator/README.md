# Product Catalog Generator

Automated system for generating a complete industrial product catalog with 50+ products, 24 collections, and realistic content for the Machinist Shopify theme demo store.

## Overview

This tool generates:
- **50 Industrial Products** across 4 main categories
- **24 Collections** (4 main + 20 subcategories)
- **Realistic Product Data** with descriptions, pricing, inventory, SKUs, and barcodes
- **Section Content** for populating all theme sections
- **CSV Files** ready for Shopify import

## Quick Start

```bash
# Generate product catalog
node generate-products.js

# Output files will be in: output/
# - products.csv (50 products)
# - collections.csv (24 collections)
# - summary.json (generation statistics)
```

## Product Categories

### Manufacturing Equipment (12 products)
- CNC Machines (3 products)
- Lathes & Mills (2 products)
- Presses & Stamping (3 products)
- Welding Equipment (2 products)
- Assembly Systems (2 products)

### Industrial Equipment (14 products)
- Generators & Power (3 products)
- Air Compressors (3 products)
- Material Handling (4 products)
- HVAC Systems (2 products)
- Pumps & Hydraulics (2 products)

### Professional Tools (13 products)
- Power Tools (3 products)
- Hand Tools (2 products)
- Measuring Equipment (2 products)
- Cutting Tools (3 products)
- Tool Storage (3 products)

### Safety Equipment (11 products)
- PPE (4 products)
- Fall Protection (2 products)
- Respiratory Protection (2 products)
- Safety Barriers (1 product)
- Emergency Equipment (2 products)

## Generated Data Features

### Products Include:
- ✅ Unique SKUs (format: VEN-####-###)
- ✅ UPC Barcodes (12-digit)
- ✅ Realistic pricing ($12 - $185,000)
- ✅ Inventory quantities
- ✅ Professional descriptions
- ✅ Industry-specific tags
- ✅ Vendor attribution
- ✅ Weight specifications
- ✅ Cost-per-item (40% margin)
- ✅ SEO titles and descriptions
- ✅ Collection assignments

### Collections Include:
- ✅ SEO-optimized titles
- ✅ Category descriptions
- ✅ Proper handle formatting
- ✅ Hierarchical structure (main + sub)

## Importing to Shopify

### Step 1: Import Products

1. Log into Shopify Admin
2. Navigate to **Products** → **Import**
3. Upload `output/products.csv`
4. Map columns (should auto-detect)
5. Click "Import products"
6. Wait for import to complete (~2-5 minutes)

### Step 2: Import Collections

1. Navigate to **Products** → **Collections** → **Import**
2. Upload `output/collections.csv`
3. Map columns
4. Click "Import collections"

### Step 3: Verify Import

Check that:
- [ ] 50 products are visible
- [ ] 24 collections exist
- [ ] Products are assigned to collections
- [ ] Prices display correctly
- [ ] Inventory is set

## Adding Product Images

### Option 1: Use Image Sources Guide

See [image-sources.md](image-sources.md) for curated image sources.

**Recommended sources:**
- Unsplash: Free industrial imagery
- Pexels: Manufacturing photos
- Pixabay: Equipment photos

### Option 2: Use Placeholder Images

Placeholders are auto-generated in theme:
```
https://via.placeholder.com/2048x2048/0a0a0a/ff4d00?text=PRODUCT+NAME
```

### Option 3: Batch Upload

1. Download images following naming convention:
   ```
   {vendor}-{product-number}.jpg
   ```

2. Use Shopify bulk editor:
   - Products → Select all → Edit products
   - Add images column
   - Upload images

3. Or use Shopify CLI:
   ```bash
   shopify theme images upload assets/images/products/
   ```

## Populating Section Content

The `section-content.js` file provides realistic content for all theme sections:

### Hero Sections
```javascript
import { sectionContent } from './section-content.js';

// Homepage hero
const heroContent = sectionContent.hero.homepage;
// heading: "PRECISION INDUSTRIAL EQUIPMENT"
// subheading: "Professional-Grade Tools..."
```

### Feature Sections
```javascript
// Manufacturing features
const features = sectionContent.features.manufacturing;
// Returns array of 4 features with titles, descriptions, icons
```

### About Content
```javascript
const about = sectionContent.about;
// Company story, values, stats
```

### Collection Descriptions
```javascript
const desc = sectionContent.collections["manufacturing-equipment"];
// Title, description, features list
```

### FAQ Content
```javascript
const faq = sectionContent.faq;
// 3 categories with multiple Q&A pairs
```

### Apply Content to Sections

1. **Edit Theme Files** in Shopify admin:
   - Online Store → Themes → Customize
   - Select section to edit
   - Paste content from `section-content.js`

2. **Or Update Liquid Templates**:
   ```liquid
   {% comment %}Use content from section-content.js{% endcomment %}
   <h1>{{ "PRECISION INDUSTRIAL EQUIPMENT" }}</h1>
   <p>{{ "Professional-Grade Tools..." }}</p>
   ```

## Complete Demo Store Setup Checklist

### Products & Collections
- [ ] Import products.csv (50 products)
- [ ] Import collections.csv (24 collections)
- [ ] Verify collection assignments
- [ ] Add product images
- [ ] Review product details

### Homepage
- [ ] Add hero section with content from `sectionContent.hero.homepage`
- [ ] Add featured collection section
- [ ] Add features grid with `sectionContent.features`
- [ ] Add testimonials from `sectionContent.testimonials`
- [ ] Add newsletter signup
- [ ] Add trust badges

### Collection Pages
- [ ] Update collection descriptions
- [ ] Add collection banner images
- [ ] Configure collection sorting
- [ ] Test filtering

### Product Pages
- [ ] Verify variant display
- [ ] Test add-to-cart functionality
- [ ] Check specification tables
- [ ] Verify related products

### About Page
- [ ] Add company story
- [ ] Add values section
- [ ] Add statistics
- [ ] Add team/facility images

### Contact & Support
- [ ] Add FAQ section content
- [ ] Configure contact form
- [ ] Add support phone/email

### Navigation
- [ ] Create main menu with categories
- [ ] Add footer navigation
- [ ] Configure breadcrumbs

### Content Pages
- [ ] Shipping & Returns policy
- [ ] Privacy Policy
- [ ] Terms of Service
- [ ] Safety Information

## Customization

### Adding More Products

Edit `product-templates.js`:

```javascript
"category-handle": [
  {
    title: "Product Name",
    vendor: "Vendor Name",
    type: "Product Type",
    tags: ["tag1", "tag2"],
    priceRange: [min, max],
    inventory: [min, max],
    description: "Product description..."
  }
]
```

Then regenerate:
```bash
node generate-products.js
```

### Adding Categories

1. Edit `categories.js` to add new category
2. Edit `product-templates.js` to add products
3. Edit `section-content.js` to add content
4. Regenerate catalog

### Modifying Pricing

Edit `priceRange` in product templates:
```javascript
priceRange: [minPrice, maxPrice]
```

### Adjusting Inventory

Edit `inventory` in product templates:
```javascript
inventory: [minQty, maxQty]
```

## File Structure

```
tools/catalog-generator/
├── README.md                  # This file
├── package.json               # Node.js config
├── categories.js              # Category definitions
├── product-templates.js       # Product data templates
├── section-content.js         # Section content library
├── image-sources.md           # Image sourcing guide
├── generate-products.js       # Main generator script
└── output/                    # Generated files
    ├── products.csv           # Product import file
    ├── collections.csv        # Collection import file
    └── summary.json           # Generation statistics
```

## Troubleshooting

### Import Errors

**"Required field missing"**
- Ensure CSV has all required columns
- Check for empty required fields

**"Invalid price format"**
- Verify prices are numbers without currency symbols
- Check for decimal formatting

**"Collection not found"**
- Import collections before products
- Verify collection handles match

### Image Issues

**Images not displaying**
- Check image URLs are accessible
- Verify image format (JPG/PNG)
- Ensure images meet size requirements (2048x2048px min)

**Grayscale effect not working**
- Check CSS filter is applied
- Verify image has sufficient color
- Test hover state

## Next Steps

After generating and importing the catalog:

1. **Add Images**: Use [image-sources.md](image-sources.md) guide
2. **Populate Sections**: Apply content from `section-content.js`
3. **Configure Theme**: Set accent colors, fonts, layout
4. **Test Functionality**: Cart, checkout, search
5. **Add Metafields**: Product specifications, attachments
6. **Configure Apps**: Reviews, wishlist, etc.
7. **SEO Optimization**: Meta descriptions, alt texts
8. **Launch Demo**: Share preview link

## Support

For issues or questions:
- Review this README
- Check `summary.json` for generation stats
- Inspect CSV files for data accuracy
- Consult Shopify import documentation

## License

Part of the Machinist Shopify Theme project.
