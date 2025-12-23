# Image Sources for Industrial Product Catalog

This document provides curated image sources for populating the demo store with professional industrial imagery.

## Free Stock Photo Sources (Industrial/Manufacturing)

### Unsplash Collections
High-quality, free-to-use images:

1. **Industrial & Manufacturing**
   - Search: "industrial machinery", "manufacturing", "factory"
   - URL: https://unsplash.com/s/photos/industrial-machinery
   - Focus: CNC machines, factory floors, manufacturing equipment

2. **Tools & Equipment**
   - Search: "power tools", "workshop", "metalworking"
   - URL: https://unsplash.com/s/photos/power-tools
   - Focus: Professional tools, workshops, craftsmen

3. **Safety Equipment**
   - Search: "safety equipment", "hard hat", "protective gear"
   - URL: https://unsplash.com/s/photos/safety-equipment
   - Focus: PPE, safety gear, industrial safety

4. **Construction & Industrial**
   - Search: "construction equipment", "heavy machinery"
   - URL: https://unsplash.com/s/photos/construction-equipment
   - Focus: Heavy equipment, material handling, industrial sites

### Pexels Collections
Additional free stock imagery:

1. **Manufacturing**
   - https://www.pexels.com/search/manufacturing/
   - Focus: Production lines, industrial processes

2. **Machinery**
   - https://www.pexels.com/search/machinery/
   - Focus: Heavy machinery, equipment close-ups

3. **Workshop**
   - https://www.pexels.com/search/workshop/
   - Focus: Tools, workbenches, craftsmanship

### Pixabay
Free images for commercial use:

1. **Industry**
   - https://pixabay.com/images/search/industry/
   - Focus: Industrial scenes, equipment

## Image Specifications

### Product Images
- **Dimensions**: 2048 x 2048px minimum
- **Format**: JPG or PNG
- **Aspect Ratio**: 1:1 (square) preferred
- **Background**: Solid color or subtle gradient (matches theme aesthetic)
- **Style**: Professional, high-contrast, sharp focus

### Collection Banner Images
- **Dimensions**: 2400 x 800px
- **Format**: JPG
- **Style**: Industrial/mechanical aesthetic, dark tones with orange accents

### Hero/Section Images
- **Dimensions**: 1920 x 1080px minimum
- **Format**: JPG optimized
- **Style**: Wide-angle industrial scenes, dramatic lighting

## Image Processing Guidelines

### Color Treatment
- Apply slight desaturation for cohesive look
- Enhance contrast for industrial aesthetic
- Add subtle orange color grade to match theme accent (#ff4d00)

### Optimization
```bash
# ImageMagick batch processing
mogrify -resize 2048x2048^ -gravity center -extent 2048x2048 -quality 85 *.jpg
```

### Theme-Specific Treatment
- Grayscale effect applied via CSS (filter: grayscale(1))
- Color reveals on hover
- Ensure source images work well in grayscale

## Placeholder Image Generator

For quick mockups without downloading images:

### Placeholder.com
```
https://via.placeholder.com/2048x2048/0a0a0a/ff4d00?text=Product+Image
```

### Industrial Placeholder URLs
- CNC Machine: `https://via.placeholder.com/2048/141414/ff4d00?text=CNC+MACHINE`
- Power Tool: `https://via.placeholder.com/2048/141414/ff4d00?text=POWER+TOOL`
- Safety Equipment: `https://via.placeholder.com/2048/141414/ff4d00?text=SAFETY+GEAR`

## Product-Specific Image Recommendations

### CNC Machines
- Close-ups of tool heads and spindles
- Full machine shots on white/neutral background
- Control panel details
- Machining in action (chips flying, coolant)

### Power Tools
- Hero product shots against solid background
- In-use action shots
- Detail shots of controls and features
- Tool accessories and bits

### Safety Equipment
- Product on model (hard hats, gloves, boots)
- Product detail shots
- Certification labels and features
- Multiple color/size variations

### Heavy Equipment
- Wide shots showing scale
- Operator perspective shots
- Detail shots of controls
- Equipment in industrial setting

## Batch Download Scripts

### Using wget (for public image lists)
```bash
# Create file: image-urls.txt with one URL per line
wget -i image-urls.txt -P ./images/products/
```

### Using curl
```bash
# Download single image
curl -o product-001.jpg "https://example.com/image.jpg"
```

## Image Asset Organization

```
assets/
  images/
    products/
      manufacturing/
        cnc-machines/
        lathes/
        presses/
      industrial/
        generators/
        compressors/
      tools/
        power-tools/
        hand-tools/
      safety/
        ppe/
        fall-protection/
    collections/
      manufacturing-banner.jpg
      industrial-banner.jpg
      tools-banner.jpg
      safety-banner.jpg
    hero/
      homepage-hero.jpg
      about-hero.jpg
```

## Attribution

When using free stock photos, maintain attribution if required:
- Unsplash: No attribution required but appreciated
- Pexels: No attribution required
- Pixabay: No attribution required

## Next Steps

1. Download images from recommended sources
2. Process images for consistent look (desaturate, resize, optimize)
3. Organize into category folders
4. Upload to Shopify or CDN
5. Update CSV files with image URLs
6. Test grayscale hover effect

## Automated Image Processing

See `tools/catalog-generator/process-images.sh` for batch processing script.
