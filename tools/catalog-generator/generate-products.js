#!/usr/bin/env node

/**
 * Product Catalog Generator
 * Generates CSV files for importing products into Shopify
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { categories, getCategoryHierarchy } from './categories.js';
import { productTemplates, getRandomPrice, getRandomInventory } from './product-templates.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Generate SKU for a product
 */
function generateSKU(vendor, productIndex) {
  const vendorCode = vendor
    .split(' ')[0]
    .substring(0, 3)
    .toUpperCase();

  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `${vendorCode}-${randomNum}-${String(productIndex).padStart(3, '0')}`;
}

/**
 * Generate barcode (UPC)
 */
function generateBarcode() {
  let barcode = '';
  for (let i = 0; i < 12; i++) {
    barcode += Math.floor(Math.random() * 10);
  }
  return barcode;
}

/**
 * Convert product template to CSV rows
 */
function productToCSVRows(product, category, subcategory, index) {
  const price = getRandomPrice(product.priceRange);
  const inventory = getRandomInventory(product.inventory);
  const sku = generateSKU(product.vendor, index);
  const barcode = generateBarcode();

  // Calculate compare at price (10-20% higher for some products)
  const hasComparePrice = Math.random() > 0.7;
  const compareAtPrice = hasComparePrice ? Math.floor(price * 1.15) : '';

  // Weight varies by product type
  const weight = Math.floor(5 + Math.random() * 95); // 5-100 lbs

  // Collections: main category + subcategory
  const hierarchy = getCategoryHierarchy(subcategory);
  const collections = hierarchy ? `${category}, ${subcategory}` : category;

  return {
    Handle: product.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    Title: product.title,
    'Body (HTML)': `<p>${product.description}</p>`,
    Vendor: product.vendor,
    Type: product.type,
    Tags: product.tags.join(', '),
    Published: 'TRUE',
    'Option1 Name': 'Title',
    'Option1 Value': 'Default Title',
    'Variant SKU': sku,
    'Variant Grams': weight * 453.592, // Convert lbs to grams
    'Variant Inventory Tracker': 'shopify',
    'Variant Inventory Qty': inventory,
    'Variant Inventory Policy': 'deny',
    'Variant Fulfillment Service': 'manual',
    'Variant Price': price,
    'Variant Compare At Price': compareAtPrice,
    'Variant Requires Shipping': 'TRUE',
    'Variant Taxable': 'TRUE',
    'Variant Barcode': barcode,
    'Image Src': '', // To be filled with actual images
    'Image Position': 1,
    'Image Alt Text': product.title,
    'Gift Card': 'FALSE',
    'SEO Title': `${product.title} | Machinist Industrial Supply`,
    'SEO Description': product.description.substring(0, 160),
    'Google Shopping / Google Product Category': '',
    'Google Shopping / Gender': '',
    'Google Shopping / Age Group': '',
    'Google Shopping / MPN': sku,
    'Google Shopping / AdWords Grouping': product.type,
    'Google Shopping / AdWords Labels': '',
    'Google Shopping / Condition': 'new',
    'Google Shopping / Custom Product': 'FALSE',
    'Google Shopping / Custom Label 0': collections.split(', ')[0],
    'Google Shopping / Custom Label 1': collections.split(', ')[1] || '',
    'Google Shopping / Custom Label 2': '',
    'Google Shopping / Custom Label 3': '',
    'Google Shopping / Custom Label 4': '',
    'Variant Image': '',
    'Variant Weight Unit': 'lb',
    'Variant Tax Code': '',
    'Cost per item': Math.floor(price * 0.6), // 40% margin
    'Status': 'active',
    'Collection': collections
  };
}

/**
 * Generate all products
 */
function generateAllProducts() {
  const allProducts = [];
  let productIndex = 1;

  // Iterate through each subcategory
  for (const categoryKey in categories) {
    const category = categories[categoryKey];

    category.subcategories.forEach(subcategory => {
      const templates = productTemplates[subcategory.handle];

      if (templates && templates.length > 0) {
        templates.forEach(template => {
          const product = productToCSVRows(
            template,
            category.handle,
            subcategory.handle,
            productIndex++
          );
          allProducts.push(product);
        });
      }
    });
  }

  console.log(`Generated ${allProducts.length} products`);
  return allProducts;
}

/**
 * Convert products array to CSV string
 */
function arrayToCSV(products) {
  if (products.length === 0) return '';

  // Get headers from first product
  const headers = Object.keys(products[0]);

  // Create CSV rows
  const rows = products.map(product => {
    return headers.map(header => {
      const value = product[header] || '';
      // Escape quotes and wrap in quotes if contains comma, newline, or quote
      const stringValue = String(value);
      if (stringValue.includes(',') || stringValue.includes('\n') || stringValue.includes('"')) {
        return `"${stringValue.replace(/"/g, '""')}"`;
      }
      return stringValue;
    }).join(',');
  });

  // Combine headers and rows
  return [headers.join(','), ...rows].join('\n');
}

/**
 * Generate collections CSV
 */
function generateCollections() {
  const collections = [];

  for (const categoryKey in categories) {
    const category = categories[categoryKey];

    // Main category collection
    collections.push({
      Handle: category.handle,
      Title: category.name,
      'Body HTML': `<p>${category.description}</p>`,
      'Published': 'TRUE',
      'Published Scope': 'web',
      'Template Suffix': '',
      'Sort Order': 'best-selling',
      'Image Src': '',
      'Image Alt Text': category.name,
      'SEO Title': `${category.name} | Machinist Industrial Supply`,
      'SEO Description': category.description
    });

    // Subcategory collections
    category.subcategories.forEach(subcategory => {
      collections.push({
        Handle: subcategory.handle,
        Title: subcategory.name,
        'Body HTML': `<p>${subcategory.description}</p>`,
        'Published': 'TRUE',
        'Published Scope': 'web',
        'Template Suffix': '',
        'Sort Order': 'best-selling',
        'Image Src': '',
        'Image Alt Text': subcategory.name,
        'SEO Title': `${subcategory.name} | ${category.name} | Machinist Industrial Supply`,
        'SEO Description': subcategory.description
      });
    });
  }

  console.log(`Generated ${collections.length} collections`);
  return collections;
}

/**
 * Main execution
 */
function main() {
  const outputDir = path.join(__dirname, 'output');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('Generating product catalog...\n');

  // Generate products
  const products = generateAllProducts();
  const productsCSV = arrayToCSV(products);
  const productsFile = path.join(outputDir, 'products.csv');
  fs.writeFileSync(productsFile, productsCSV);
  console.log(`✓ Products CSV saved to: ${productsFile}`);

  // Generate collections
  const collections = generateCollections();
  const collectionsCSV = arrayToCSV(collections);
  const collectionsFile = path.join(outputDir, 'collections.csv');
  fs.writeFileSync(collectionsFile, collectionsCSV);
  console.log(`✓ Collections CSV saved to: ${collectionsFile}`);

  // Generate summary report
  const summary = {
    totalProducts: products.length,
    totalCollections: collections.length,
    categories: Object.keys(categories).length,
    productsByCategory: {}
  };

  for (const categoryKey in categories) {
    const category = categories[categoryKey];
    let count = 0;

    category.subcategories.forEach(sub => {
      const templates = productTemplates[sub.handle];
      if (templates) count += templates.length;
    });

    summary.productsByCategory[category.name] = count;
  }

  const summaryFile = path.join(outputDir, 'summary.json');
  fs.writeFileSync(summaryFile, JSON.stringify(summary, null, 2));
  console.log(`✓ Summary saved to: ${summaryFile}`);

  console.log('\n📊 Summary:');
  console.log(`   Total Products: ${summary.totalProducts}`);
  console.log(`   Total Collections: ${summary.totalCollections}`);
  console.log('\n   Products by Category:');
  for (const [category, count] of Object.entries(summary.productsByCategory)) {
    console.log(`   - ${category}: ${count} products`);
  }

  console.log('\n✅ Catalog generation complete!');
  console.log('\nNext steps:');
  console.log('1. Review the generated CSV files in tools/catalog-generator/output/');
  console.log('2. Import products.csv into Shopify (Settings > Products > Import)');
  console.log('3. Import collections.csv into Shopify (Settings > Collections > Import)');
  console.log('4. Add product images using the image management system');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generateAllProducts, generateCollections, arrayToCSV };
