/**
 * Category Structure for Industrial Product Catalog
 * Defines product categories, subcategories, and taxonomy
 */

export const categories = {
  manufacturing: {
    name: "Manufacturing Equipment",
    handle: "manufacturing-equipment",
    description: "Industrial manufacturing machinery and equipment for production facilities",
    subcategories: [
      {
        name: "CNC Machines",
        handle: "cnc-machines",
        description: "Computer numerical control machines for precision manufacturing"
      },
      {
        name: "Lathes & Mills",
        handle: "lathes-mills",
        description: "Metalworking lathes and milling machines"
      },
      {
        name: "Presses & Stamping",
        handle: "presses-stamping",
        description: "Hydraulic and mechanical presses for metal forming"
      },
      {
        name: "Welding Equipment",
        handle: "welding-equipment",
        description: "Industrial welding machines and accessories"
      },
      {
        name: "Assembly Systems",
        handle: "assembly-systems",
        description: "Automated assembly line equipment and robotics"
      }
    ]
  },

  industrial_equipment: {
    name: "Industrial Equipment",
    handle: "industrial-equipment",
    description: "Heavy-duty equipment for industrial operations and facilities",
    subcategories: [
      {
        name: "Generators & Power",
        handle: "generators-power",
        description: "Industrial generators and power distribution equipment"
      },
      {
        name: "Air Compressors",
        handle: "air-compressors",
        description: "Industrial air compressors and pneumatic systems"
      },
      {
        name: "Material Handling",
        handle: "material-handling",
        description: "Forklifts, conveyors, and material transport equipment"
      },
      {
        name: "HVAC Systems",
        handle: "hvac-systems",
        description: "Industrial heating, ventilation, and air conditioning"
      },
      {
        name: "Pumps & Hydraulics",
        handle: "pumps-hydraulics",
        description: "Industrial pumps and hydraulic systems"
      }
    ]
  },

  tools: {
    name: "Professional Tools",
    handle: "professional-tools",
    description: "High-quality professional tools for industrial applications",
    subcategories: [
      {
        name: "Power Tools",
        handle: "power-tools",
        description: "Professional-grade electric and pneumatic power tools"
      },
      {
        name: "Hand Tools",
        handle: "hand-tools",
        description: "Precision hand tools and manual equipment"
      },
      {
        name: "Measuring Equipment",
        handle: "measuring-equipment",
        description: "Precision measuring and calibration instruments"
      },
      {
        name: "Cutting Tools",
        handle: "cutting-tools",
        description: "Industrial cutting tools, bits, and blades"
      },
      {
        name: "Tool Storage",
        handle: "tool-storage",
        description: "Professional tool chests, cabinets, and organization"
      }
    ]
  },

  safety: {
    name: "Safety Equipment",
    handle: "safety-equipment",
    description: "Industrial safety equipment and personal protective gear",
    subcategories: [
      {
        name: "PPE",
        handle: "personal-protective-equipment",
        description: "Personal protective equipment for workplace safety"
      },
      {
        name: "Fall Protection",
        handle: "fall-protection",
        description: "Harnesses, lanyards, and fall arrest systems"
      },
      {
        name: "Respiratory Protection",
        handle: "respiratory-protection",
        description: "Respirators, masks, and breathing apparatus"
      },
      {
        name: "Safety Barriers",
        handle: "safety-barriers",
        description: "Guards, barriers, and protective enclosures"
      },
      {
        name: "Emergency Equipment",
        handle: "emergency-equipment",
        description: "First aid, eyewash stations, and emergency response"
      }
    ]
  }
};

/**
 * Get all category handles (flat list)
 */
export function getAllCategoryHandles() {
  const handles = [];

  for (const categoryKey in categories) {
    const category = categories[categoryKey];
    handles.push(category.handle);

    category.subcategories.forEach(sub => {
      handles.push(sub.handle);
    });
  }

  return handles;
}

/**
 * Get category hierarchy for a specific handle
 */
export function getCategoryHierarchy(handle) {
  for (const categoryKey in categories) {
    const category = categories[categoryKey];

    if (category.handle === handle) {
      return {
        main: category.name,
        sub: null
      };
    }

    const subcategory = category.subcategories.find(sub => sub.handle === handle);
    if (subcategory) {
      return {
        main: category.name,
        sub: subcategory.name
      };
    }
  }

  return null;
}

export default categories;
