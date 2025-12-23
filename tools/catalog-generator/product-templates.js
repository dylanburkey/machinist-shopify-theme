/**
 * Product Templates for Industrial Catalog
 * Defines product data templates for each category
 */

export const productTemplates = {
  // MANUFACTURING EQUIPMENT
  "cnc-machines": [
    {
      title: "ProMach CNC Vertical Machining Center VMC-850",
      vendor: "ProMach Industrial",
      type: "CNC Machine",
      tags: ["manufacturing", "cnc", "precision", "vertical-mill"],
      priceRange: [45000, 85000],
      inventory: [1, 3],
      description: "High-precision 3-axis vertical machining center with 850mm x 500mm x 500mm work envelope. Features servo motors, automatic tool changer (24 tools), and advanced CNC control system. Ideal for precision manufacturing and prototyping."
    },
    {
      title: "TechMill 5-Axis CNC Machining Center",
      vendor: "TechMill Systems",
      type: "CNC Machine",
      tags: ["manufacturing", "cnc", "5-axis", "advanced"],
      priceRange: [125000, 185000],
      inventory: [1, 2],
      description: "Advanced 5-axis simultaneous machining center for complex geometries. 1000mm work envelope, high-speed spindle (12,000 RPM), and integrated pallet changer. Perfect for aerospace and medical component manufacturing."
    },
    {
      title: "CompactCNC Desktop Milling Machine",
      vendor: "ProMach Industrial",
      type: "CNC Machine",
      tags: ["manufacturing", "cnc", "compact", "desktop"],
      priceRange: [8500, 12000],
      inventory: [5, 15],
      description: "Compact desktop CNC mill for small workshops and training facilities. 300mm x 200mm work area, easy-to-use control panel, and excellent repeatability for precision work."
    }
  ],

  "lathes-mills": [
    {
      title: "PrecisionTurn Engine Lathe 16x40",
      vendor: "PrecisionTurn Manufacturing",
      type: "Lathe",
      tags: ["manufacturing", "lathe", "metalworking"],
      priceRange: [18000, 28000],
      inventory: [2, 5],
      description: "Heavy-duty engine lathe with 16-inch swing over bed and 40-inch between centers. Variable speed control, precision ground bed ways, and hardened spindle. Ideal for general metalworking shops."
    },
    {
      title: "Bridgeport-Style Vertical Milling Machine",
      vendor: "ProMach Industrial",
      type: "Mill",
      tags: ["manufacturing", "mill", "vertical", "manual"],
      priceRange: [12000, 18000],
      inventory: [3, 8],
      description: "Classic Bridgeport-style knee mill with variable speed head, power feed on X-axis, and rigid construction. 9x42 table, R8 spindle taper. The workshop workhorse."
    }
  ],

  "presses-stamping": [
    {
      title: "HydroForce 100-Ton Hydraulic Press",
      vendor: "HydroForce Equipment",
      type: "Hydraulic Press",
      tags: ["manufacturing", "press", "hydraulic", "heavy-duty"],
      priceRange: [35000, 55000],
      inventory: [1, 3],
      description: "100-ton capacity hydraulic press with 36-inch bed width. Programmable controls, adjustable stroke length, and safety light curtains. For stamping, forming, and assembly operations."
    },
    {
      title: "CompactPress 25-Ton Benchtop Press",
      vendor: "HydroForce Equipment",
      type: "Hydraulic Press",
      tags: ["manufacturing", "press", "benchtop", "compact"],
      priceRange: [8500, 12500],
      inventory: [4, 10],
      description: "Benchtop 25-ton hydraulic press for smaller stamping and forming operations. Manual or foot pedal operation, 18-inch bed width, and portable design."
    },
    {
      title: "StampMaster 200-Ton Mechanical Press",
      vendor: "StampMaster Equipment",
      type: "Mechanical Press",
      tags: ["manufacturing", "press", "mechanical", "stamping"],
      priceRange: [65000, 95000],
      inventory: [1, 2],
      description: "High-speed mechanical stamping press with 200-ton capacity. 60-stroke-per-minute capability, precision die alignment, and full automation ready."
    }
  ],

  "assembly-systems": [
    {
      title: "RoboAssist Collaborative Robot Arm",
      vendor: "RoboAssist Systems",
      type: "Robotic Arm",
      tags: ["manufacturing", "automation", "robot", "collaborative"],
      priceRange: [28000, 45000],
      inventory: [2, 5],
      description: "6-axis collaborative robot arm with 10kg payload capacity. Safe for human interaction, easy programming, and adaptable end effectors. Perfect for assembly automation."
    },
    {
      title: "AssemblyLine Modular Workstation System",
      vendor: "IndustriFlow Systems",
      type: "Assembly Station",
      tags: ["manufacturing", "assembly", "workstation", "modular"],
      priceRange: [4500, 7500],
      inventory: [5, 12],
      description: "Modular assembly workstation with adjustable height, integrated power strips, and tool organization. Expandable system for custom production lines."
    }
  ],

  "welding-equipment": [
    {
      title: "ArcPro MIG Welder 250 Amp",
      vendor: "ArcPro Welding Systems",
      type: "Welding Machine",
      tags: ["manufacturing", "welding", "mig", "professional"],
      priceRange: [2500, 3500],
      inventory: [10, 25],
      description: "Professional MIG welder with 250-amp output. Handles steel, stainless, and aluminum. Wire feed speed control, thermal overload protection, and smooth arc performance."
    },
    {
      title: "IndustriWeld TIG 300AC/DC Welder",
      vendor: "IndustriWeld Corporation",
      type: "Welding Machine",
      tags: ["manufacturing", "welding", "tig", "ac-dc"],
      priceRange: [4200, 6500],
      inventory: [5, 12],
      description: "Advanced TIG welder with AC/DC capability for aluminum and steel. High-frequency start, pulse capability, and remote amperage control. Professional-grade precision welding."
    }
  ],

  // INDUSTRIAL EQUIPMENT
  "generators-power": [
    {
      title: "PowerGen 50kW Diesel Generator",
      vendor: "PowerGen Industries",
      type: "Generator",
      tags: ["industrial", "generator", "diesel", "backup-power"],
      priceRange: [28000, 42000],
      inventory: [2, 5],
      description: "50kW three-phase diesel generator for industrial backup power. Automatic transfer switch ready, sound-attenuated enclosure, and 72-hour runtime at 50% load. Built for reliability."
    },
    {
      title: "IndustriPower 250kW Natural Gas Generator",
      vendor: "IndustriPower Systems",
      type: "Generator",
      tags: ["industrial", "generator", "natural-gas", "continuous"],
      priceRange: [95000, 135000],
      inventory: [1, 2],
      description: "Industrial natural gas generator for continuous or standby power. 250kW output, low emissions, automatic start/stop, and remote monitoring capability."
    },
    {
      title: "PortaGen 10kW Portable Generator",
      vendor: "PowerGen Industries",
      type: "Generator",
      tags: ["industrial", "generator", "portable", "gasoline"],
      priceRange: [3500, 5200],
      inventory: [6, 12],
      description: "Portable 10kW gasoline generator for job sites and emergency backup. Electric start, wheel kit, and heavy-duty frame. Runs 10 hours at 50% load on a single tank."
    }
  ],

  "air-compressors": [
    {
      title: "CompressAir 25HP Rotary Screw Compressor",
      vendor: "CompressAir Industrial",
      type: "Air Compressor",
      tags: ["industrial", "compressor", "rotary-screw", "oil-lubricated"],
      priceRange: [18000, 25000],
      inventory: [3, 8],
      description: "25HP rotary screw air compressor delivering 100 CFM at 125 PSI. Energy-efficient, low maintenance, and quiet operation. Includes integrated air dryer and filtration."
    },
    {
      title: "PortaPro 5HP Portable Air Compressor",
      vendor: "CompressAir Industrial",
      type: "Air Compressor",
      tags: ["industrial", "compressor", "portable", "wheeled"],
      priceRange: [2200, 3500],
      inventory: [8, 15],
      description: "Portable 5HP air compressor on wheels. 20 CFM at 90 PSI, 60-gallon tank, and built for job site mobility. Electric motor with thermal overload protection."
    },
    {
      title: "SilentAir 50HP Oil-Free Compressor",
      vendor: "SilentAir Systems",
      type: "Air Compressor",
      tags: ["industrial", "compressor", "oil-free", "quiet"],
      priceRange: [32000, 45000],
      inventory: [2, 5],
      description: "50HP oil-free rotary screw compressor for clean air applications. 200 CFM output, sound-insulated enclosure (65 dB), and premium filtration. Perfect for food production and laboratories."
    }
  ],

  "hvac-systems": [
    {
      title: "IndustriClimate 10-Ton Rooftop Unit",
      vendor: "IndustriClimate Systems",
      type: "HVAC Unit",
      tags: ["industrial", "hvac", "cooling", "rooftop"],
      priceRange: [18000, 28000],
      inventory: [2, 4],
      description: "10-ton commercial rooftop HVAC unit with economizer. High-efficiency compressors, weatherproof housing, and smart controls. Designed for industrial facility climate control."
    },
    {
      title: "HeatMaster Industrial Space Heater 400,000 BTU",
      vendor: "HeatMaster Industrial",
      type: "Space Heater",
      tags: ["industrial", "hvac", "heating", "propane"],
      priceRange: [2800, 4200],
      inventory: [6, 12],
      description: "Portable propane-fired space heater with 400,000 BTU output. Thermostat control, safety shutoff, and wheels for mobility. Heats up to 10,000 sq ft."
    }
  ],

  "pumps-hydraulics": [
    {
      title: "FlowMaster Centrifugal Pump 100 GPM",
      vendor: "FlowMaster Pumping Systems",
      type: "Centrifugal Pump",
      tags: ["industrial", "pump", "water", "centrifugal"],
      priceRange: [4500, 6500],
      inventory: [4, 10],
      description: "Industrial centrifugal pump with 100 GPM flow rate. Cast iron construction, 5HP motor, and self-priming capability. For water transfer and circulation."
    },
    {
      title: "HydroFlow Hydraulic Power Unit 10HP",
      vendor: "HydroFlow Systems",
      type: "Hydraulic Power Unit",
      tags: ["industrial", "hydraulic", "power-unit", "pump"],
      priceRange: [8500, 12000],
      inventory: [3, 7],
      description: "10HP hydraulic power unit with 15-gallon reservoir. Variable pressure control, filtration system, and heavy-duty construction for industrial machinery."
    }
  ],

  "material-handling": [
    {
      title: "ForkliftPro 5000lb Capacity Electric Forklift",
      vendor: "ForkliftPro Equipment",
      type: "Forklift",
      tags: ["industrial", "forklift", "electric", "material-handling"],
      priceRange: [32000, 45000],
      inventory: [2, 4],
      description: "5000lb capacity electric forklift with 189-inch lift height. Side-shift forks, cushion tires, and 8-hour battery capacity. Zero emissions for indoor use."
    },
    {
      title: "ConveyMaster Belt Conveyor System 20ft",
      vendor: "ConveyMaster Systems",
      type: "Conveyor",
      tags: ["industrial", "conveyor", "belt", "automation"],
      priceRange: [8500, 12000],
      inventory: [3, 7],
      description: "20-foot belt conveyor with variable speed drive. 24-inch belt width, adjustable height, and modular design. Expandable system for warehouse and manufacturing."
    },
    {
      title: "LiftMaster 4-Wheel Hand Pallet Jack 5,500lb",
      vendor: "LiftMaster Equipment",
      type: "Pallet Jack",
      tags: ["industrial", "material-handling", "pallet-jack", "manual"],
      priceRange: [450, 750],
      inventory: [15, 30],
      description: "Heavy-duty manual pallet jack with 5,500lb capacity. 48-inch fork length, polyurethane wheels, and easy-pump handle. Essential for warehouse operations."
    },
    {
      title: "CraneWorks 2-Ton Overhead Crane System",
      vendor: "CraneWorks Industrial",
      type: "Overhead Crane",
      tags: ["industrial", "crane", "overhead", "material-handling"],
      priceRange: [28000, 42000],
      inventory: [1, 3],
      description: "2-ton capacity overhead bridge crane system with 20-foot span. Electric hoist, variable speed controls, and pendant operation. Complete installation package available."
    }
  ],

  // PROFESSIONAL TOOLS
  "power-tools": [
    {
      title: "MaxiDrill Pro 1/2\" Hammer Drill",
      vendor: "MaxiTools Professional",
      type: "Power Drill",
      tags: ["tools", "power-tools", "drill", "corded"],
      priceRange: [180, 280],
      inventory: [15, 40],
      description: "Professional 8.5-amp corded hammer drill. Variable speed, hammer/drill mode selector, and all-metal chuck. Handles concrete, steel, and wood applications."
    },
    {
      title: "TorqueMaster 1\" Impact Wrench",
      vendor: "TorqueMaster Tools",
      type: "Impact Wrench",
      tags: ["tools", "power-tools", "impact", "pneumatic"],
      priceRange: [320, 480],
      inventory: [10, 25],
      description: "Heavy-duty 1-inch pneumatic impact wrench delivering 1,500 ft-lbs torque. Twin hammer mechanism, lightweight composite housing, and industrial-grade reliability."
    },
    {
      title: "CutPro 7-1/4\" Circular Saw",
      vendor: "CutPro Industrial",
      type: "Circular Saw",
      tags: ["tools", "power-tools", "saw", "portable"],
      priceRange: [145, 210],
      inventory: [20, 45],
      description: "Professional circular saw with 15-amp motor and 5,800 RPM. Electric brake, bevel capacity to 56°, and magnesium shoe for durability. Precision cutting power."
    }
  ],

  "hand-tools": [
    {
      title: "ProGrip 215-Piece Mechanics Tool Set",
      vendor: "ProGrip Tools",
      type: "Tool Set",
      tags: ["tools", "hand-tools", "set", "mechanics"],
      priceRange: [420, 650],
      inventory: [12, 30],
      description: "Comprehensive 215-piece mechanics tool set with SAE and metric sockets, wrenches, ratchets, and accessories. Chrome vanadium steel, lifetime warranty, and organized case."
    },
    {
      title: "PrecisionFit Torque Wrench 1/2\" Drive",
      vendor: "PrecisionFit Tools",
      type: "Torque Wrench",
      tags: ["tools", "hand-tools", "torque", "precision"],
      priceRange: [85, 140],
      inventory: [15, 35],
      description: "Click-type torque wrench with 10-150 ft-lbs range. Accuracy ±3%, calibrated to ISO 6789 standards, and dual-direction capability. Includes storage case."
    }
  ],

  "measuring-equipment": [
    {
      title: "DigiMeasure Digital Caliper 6\"",
      vendor: "DigiMeasure Precision",
      type: "Caliper",
      tags: ["tools", "measuring", "digital", "precision"],
      priceRange: [65, 95],
      inventory: [25, 60],
      description: "Professional 6-inch digital caliper with 0.0005\" resolution. Hardened stainless steel, IP54 water resistance, and instant inch/metric conversion. Includes fitted case."
    },
    {
      title: "LaserLevel Pro Self-Leveling Rotary Laser",
      vendor: "LaserLevel Systems",
      type: "Laser Level",
      tags: ["tools", "measuring", "laser", "level"],
      priceRange: [580, 850],
      inventory: [8, 18],
      description: "Self-leveling rotary laser with 1000ft working radius. Dual-slope capability, remote control, and weatherproof housing. Essential for construction layout."
    }
  ],

  // SAFETY EQUIPMENT
  "personal-protective-equipment": [
    {
      title: "SafetyFirst Full-Face Shield with Hard Hat",
      vendor: "SafetyFirst Equipment",
      type: "Face Shield",
      tags: ["safety", "ppe", "face-protection", "hard-hat"],
      priceRange: [45, 70],
      inventory: [50, 120],
      description: "Integrated face shield and hard hat system. ANSI Z87.1 compliant polycarbonate shield, ratchet suspension, and vented hard hat. Maximum protection for grinding and welding prep."
    },
    {
      title: "GuardPro Cut-Resistant Gloves Level 5",
      vendor: "GuardPro Safety",
      type: "Safety Gloves",
      tags: ["safety", "ppe", "gloves", "cut-resistant"],
      priceRange: [12, 22],
      inventory: [100, 250],
      description: "ANSI Level 5 cut-resistant gloves with nitrile coating. Excellent dexterity, touchscreen compatible, and machine washable. Protection meets EN 388:2016 standards."
    },
    {
      title: "SafetyPro Steel Toe Work Boots",
      vendor: "SafetyPro Footwear",
      type: "Safety Boots",
      tags: ["safety", "ppe", "footwear", "steel-toe"],
      priceRange: [95, 145],
      inventory: [40, 100],
      description: "ASTM F2413-11 rated steel toe work boots. Oil-resistant outsole, electrical hazard protection, and waterproof leather construction. Industrial-grade comfort and safety."
    },
    {
      title: "VisionGuard Safety Glasses Anti-Fog",
      vendor: "VisionGuard Protection",
      type: "Safety Glasses",
      tags: ["safety", "ppe", "eyewear", "anti-fog"],
      priceRange: [18, 32],
      inventory: [80, 180],
      description: "ANSI Z87.1+ rated safety glasses with anti-fog coating. Polycarbonate lenses, adjustable temples, and wraparound protection. Available in clear, tinted, and indoor/outdoor lens options."
    }
  ],

  "fall-protection": [
    {
      title: "SkyGuard Full-Body Safety Harness",
      vendor: "SkyGuard Safety Systems",
      type: "Safety Harness",
      tags: ["safety", "fall-protection", "harness", "full-body"],
      priceRange: [125, 195],
      inventory: [30, 70],
      description: "ANSI Z359.11 compliant full-body harness with quick-connect buckles. Padded shoulder straps, back and front D-rings, and tool belt compatibility. Universal sizing."
    },
    {
      title: "LifeLine 6ft Shock-Absorbing Lanyard",
      vendor: "LifeLine Fall Protection",
      type: "Safety Lanyard",
      tags: ["safety", "fall-protection", "lanyard", "shock-absorbing"],
      priceRange: [85, 125],
      inventory: [40, 90],
      description: "6-foot shock-absorbing lanyard with snap hooks. Tears at 3,600 lbs force, reduces fall arrest forces to safe levels, and meets OSHA requirements."
    }
  ],

  "respiratory-protection": [
    {
      title: "RespirAir P100 Half-Face Respirator",
      vendor: "RespirAir Protection",
      type: "Respirator",
      tags: ["safety", "respiratory", "half-face", "p100"],
      priceRange: [45, 75],
      inventory: [35, 80],
      description: "NIOSH-approved P100 half-face respirator. Twin filter design, silicone face seal, and adjustable head straps. Protection against particulates, dust, and fumes."
    },
    {
      title: "BreatheSafe Full-Face Respirator System",
      vendor: "BreatheSafe Systems",
      type: "Respirator",
      tags: ["safety", "respiratory", "full-face", "cartridge"],
      priceRange: [185, 275],
      inventory: [15, 35],
      description: "Full-face respirator with dual cartridge system. Polycarbonate lens, silicone face piece, and speech diaphragm. NIOSH approved for organic vapors and particulates."
    }
  ],

  "safety-barriers": [
    {
      title: "GuardRail Modular Safety Barrier System",
      vendor: "GuardRail Safety",
      type: "Safety Barrier",
      tags: ["safety", "barrier", "modular", "machine-guarding"],
      priceRange: [850, 1450],
      inventory: [8, 15],
      description: "Modular safety barrier system for machine guarding. Powder-coated steel posts, polycarbonate panels, and quick-connect assembly. Meets OSHA 1910.212 requirements."
    }
  ],

  "emergency-equipment": [
    {
      title: "EmergencyPro First Aid Station Wall Cabinet",
      vendor: "EmergencyPro Medical",
      type: "First Aid Kit",
      tags: ["safety", "emergency", "first-aid", "industrial"],
      priceRange: [125, 195],
      inventory: [20, 45],
      description: "Industrial first aid station with wall cabinet. 150-piece kit ANSI Z308.1-2015 compliant. Includes trauma supplies, eye wash, and burn treatment."
    },
    {
      title: "EyeFlush Emergency Eyewash Station Portable",
      vendor: "EyeFlush Safety",
      type: "Eyewash Station",
      tags: ["safety", "emergency", "eyewash", "portable"],
      priceRange: [185, 295],
      inventory: [12, 25],
      description: "Portable emergency eyewash station with twin 16-oz bottles. ANSI Z358.1 compliant, wall-mountable, and includes mirror for self-aid. Weekly testing card included."
    }
  ],

  "cutting-tools": [
    {
      title: "EndMill Pro Carbide End Mill Set 20-Piece",
      vendor: "EndMill Pro Tools",
      type: "End Mills",
      tags: ["tools", "cutting-tools", "end-mills", "carbide"],
      priceRange: [185, 295],
      inventory: [12, 25],
      description: "Professional carbide end mill set with 2 and 4-flute mills. Sizes 1/8\" to 3/4\", TiAlN coated for extended tool life. Organized storage case included."
    },
    {
      title: "DrillMaster Cobalt Drill Bit Set 135-Piece",
      vendor: "DrillMaster Industrial",
      type: "Drill Bits",
      tags: ["tools", "cutting-tools", "drill-bits", "cobalt"],
      priceRange: [95, 145],
      inventory: [20, 40],
      description: "135-piece cobalt drill bit set for drilling hardened steel. HSS-Co5 material, 135° split point, and fractional sizing 1/16\" to 1/2\". Metal index case."
    },
    {
      title: "BandBlade Industrial Bandsaw Blades 14\" 3-Pack",
      vendor: "BandBlade Corporation",
      type: "Saw Blades",
      tags: ["tools", "cutting-tools", "bandsaw", "blades"],
      priceRange: [65, 95],
      inventory: [30, 60],
      description: "14-inch bi-metal bandsaw blades for metal cutting. Available in 14, 18, and 24 TPI. Long-lasting high-speed steel teeth on flexible backing."
    }
  ],

  "tool-storage": [
    {
      title: "ToolVault 72\" Rolling Tool Cabinet",
      vendor: "ToolVault Professional",
      type: "Tool Cabinet",
      tags: ["tools", "storage", "cabinet", "rolling"],
      priceRange: [2800, 4200],
      inventory: [4, 10],
      description: "Professional 72-inch rolling tool cabinet with 18 drawers. Heavy-duty ball-bearing slides, power outlet strip, and 10,000lb load capacity. Powder-coated steel construction."
    },
    {
      title: "ProChest 26\" Portable Tool Chest",
      vendor: "ProChest Tools",
      type: "Tool Chest",
      tags: ["tools", "storage", "chest", "portable"],
      priceRange: [185, 285],
      inventory: [15, 30],
      description: "26-inch portable tool chest with 5 drawers and top compartment. Gas strut lid support, rubberized drawer liners, and side handle. Perfect for mobile technicians."
    },
    {
      title: "WorkBench Pro Heavy-Duty Workbench 72\"",
      vendor: "WorkBench Systems",
      type: "Workbench",
      tags: ["tools", "storage", "workbench", "heavy-duty"],
      priceRange: [850, 1250],
      inventory: [5, 12],
      description: "72-inch heavy-duty workbench with maple butcher block top. 2,000lb capacity, pegboard back panel, and lower shelf. Adjustable feet for leveling."
    }
  ]
};

/**
 * Get random price within range
 */
export function getRandomPrice(priceRange) {
  const [min, max] = priceRange;
  return Math.floor(min + Math.random() * (max - min));
}

/**
 * Get random inventory within range
 */
export function getRandomInventory(inventoryRange) {
  const [min, max] = inventoryRange;
  return Math.floor(min + Math.random() * (max - min + 1));
}

export default productTemplates;
