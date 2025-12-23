/**
 * Section Content Generator
 * Provides realistic content for all theme sections
 */

export const sectionContent = {
  // Hero/Banner Sections
  hero: {
    homepage: {
      heading: "PRECISION INDUSTRIAL EQUIPMENT",
      subheading: "Professional-Grade Tools & Machinery for Modern Manufacturing",
      buttonText: "SHOP NOW",
      buttonLink: "/collections/all",
      description: "Premium industrial equipment, professional tools, and safety gear for demanding applications. Built for precision, engineered for reliability."
    },
    manufacturing: {
      heading: "MANUFACTURING EXCELLENCE",
      subheading: "CNC Machines, Lathes, and Production Equipment",
      buttonText: "EXPLORE EQUIPMENT",
      buttonLink: "/collections/manufacturing-equipment",
      description: "Advanced manufacturing equipment for precision metalworking, fabrication, and production operations."
    },
    tools: {
      heading: "PROFESSIONAL TOOL SYSTEMS",
      subheading: "Power Tools, Hand Tools, and Precision Instruments",
      buttonText: "BROWSE TOOLS",
      buttonLink: "/collections/professional-tools",
      description: "Industrial-grade tools engineered for professional tradesmen and manufacturing facilities."
    },
    safety: {
      heading: "SAFETY FIRST, ALWAYS",
      subheading: "Personal Protective Equipment and Safety Systems",
      buttonText: "SHOP SAFETY",
      buttonLink: "/collections/safety-equipment",
      description: "Comprehensive safety equipment to protect your workforce and maintain OSHA compliance."
    }
  },

  // Feature Sections
  features: {
    manufacturing: [
      {
        title: "PRECISION ENGINEERING",
        description: "±0.0001\" tolerance on critical dimensions. Advanced CNC controls for repeatable accuracy.",
        icon: "precision"
      },
      {
        title: "INDUSTRIAL DURABILITY",
        description: "Hardened components and robust construction for 24/7 production environments.",
        icon: "durability"
      },
      {
        title: "RAPID TOOLING",
        description: "Quick-change tool systems minimize downtime and maximize productivity.",
        icon: "speed"
      },
      {
        title: "COMPREHENSIVE SUPPORT",
        description: "Technical support, training, and spare parts available nationwide.",
        icon: "support"
      }
    ],
    tools: [
      {
        title: "PROFESSIONAL GRADE",
        description: "Designed for daily professional use with extended duty cycles and durability.",
        icon: "professional"
      },
      {
        title: "LIFETIME WARRANTY",
        description: "Backed by comprehensive warranties on tools and accessories.",
        icon: "warranty"
      },
      {
        title: "ERGONOMIC DESIGN",
        description: "Reduced fatigue and improved control for all-day operation.",
        icon: "ergonomic"
      },
      {
        title: "PARTS AVAILABILITY",
        description: "Replacement parts and service kits readily available.",
        icon: "parts"
      }
    ],
    safety: [
      {
        title: "OSHA COMPLIANT",
        description: "All safety equipment meets or exceeds OSHA and ANSI standards.",
        icon: "compliance"
      },
      {
        title: "CERTIFIED PROTECTION",
        description: "Third-party tested and certified for maximum safety assurance.",
        icon: "certified"
      },
      {
        title: "COMFORT & FIT",
        description: "Designed for all-day wear without compromising protection.",
        icon: "comfort"
      },
      {
        title: "TRAINING RESOURCES",
        description: "Safety training materials and compliance documentation included.",
        icon: "training"
      }
    ]
  },

  // About/Company Information
  about: {
    heading: "INDUSTRIAL SUPPLY EXCELLENCE SINCE 1985",
    subheading: "Serving Manufacturing, Construction, and Industrial Operations Nationwide",
    story: `For over 35 years, Machinist Industrial Supply has been the trusted source for professional-grade equipment, tools, and safety gear. We understand the demands of modern manufacturing and industrial operations because we've been there ourselves.

Our team combines decades of hands-on manufacturing experience with deep technical knowledge. We don't just sell equipment—we partner with our customers to find the right solutions for their specific applications.

From CNC machining centers to the smallest precision measuring tools, every product in our catalog is selected based on three criteria: performance, reliability, and value. We stand behind everything we sell with comprehensive technical support and warranty coverage.

Whether you're outfitting a new facility or maintaining existing operations, Machinist Industrial Supply delivers the equipment you need, when you need it.`,

    values: [
      {
        title: "TECHNICAL EXPERTISE",
        description: "Our team includes certified machinists, safety professionals, and equipment specialists."
      },
      {
        title: "QUALITY ASSURANCE",
        description: "Every product meets strict quality standards before it reaches your facility."
      },
      {
        title: "CUSTOMER COMMITMENT",
        description: "Responsive support, flexible financing, and nationwide delivery."
      },
      {
        title: "SAFETY CULTURE",
        description: "Promoting workplace safety through proper equipment and training."
      }
    ],

    stats: [
      {
        value: "35+",
        label: "YEARS IN BUSINESS"
      },
      {
        value: "10,000+",
        label: "PRODUCTS IN STOCK"
      },
      {
        value: "50",
        label: "STATES SERVED"
      },
      {
        value: "24/7",
        label: "TECHNICAL SUPPORT"
      }
    ]
  },

  // Collection Descriptions
  collections: {
    "manufacturing-equipment": {
      title: "Manufacturing Equipment",
      description: "Advanced manufacturing machinery for precision metalworking, fabrication, and production operations. From CNC machining centers to manual mills and lathes, our manufacturing equipment delivers the accuracy and reliability your operations demand.",
      features: [
        "Precision-ground machine ways",
        "Heavy-duty construction for 24/7 operation",
        "Advanced control systems",
        "Comprehensive service support"
      ]
    },
    "cnc-machines": {
      title: "CNC Machines",
      description: "Computer Numerical Control machines for automated precision manufacturing. Vertical machining centers, horizontal mills, and multi-axis systems with advanced tooling and control capabilities.",
      features: [
        "High-speed spindles (up to 15,000 RPM)",
        "Automatic tool changers",
        "Advanced CNC programming",
        "Industry 4.0 connectivity"
      ]
    },
    "industrial-equipment": {
      title: "Industrial Equipment",
      description: "Heavy-duty equipment for industrial operations including generators, air compressors, material handling systems, and HVAC equipment. Built for demanding environments and continuous operation.",
      features: [
        "Industrial-grade reliability",
        "Energy-efficient operation",
        "Remote monitoring capability",
        "Nationwide service network"
      ]
    },
    "professional-tools": {
      title: "Professional Tools",
      description: "High-quality professional tools for industrial applications. Power tools, hand tools, measuring equipment, and tool storage systems designed for daily professional use.",
      features: [
        "Professional-grade durability",
        "Ergonomic design for extended use",
        "Comprehensive warranties",
        "Parts and service support"
      ]
    },
    "safety-equipment": {
      title: "Safety Equipment",
      description: "Comprehensive safety equipment and personal protective gear for industrial workplace protection. OSHA-compliant equipment with certifications and testing documentation.",
      features: [
        "ANSI/OSHA compliant",
        "Third-party certified",
        "Comfort-engineered for all-day wear",
        "Training materials included"
      ]
    }
  },

  // FAQ Content
  faq: [
    {
      category: "Orders & Shipping",
      questions: [
        {
          question: "What is your typical delivery timeframe?",
          answer: "In-stock items typically ship within 1-2 business days via LTL freight or expedited carrier depending on size and weight. Large equipment may require 2-4 weeks for delivery and installation coordination. We provide tracking information and delivery scheduling for all orders."
        },
        {
          question: "Do you offer installation services?",
          answer: "Yes, we provide complete installation, rigging, and commissioning services for all major equipment purchases. Our certified technicians handle delivery, leveling, electrical hookup, and operator training. Contact us for installation quotes."
        },
        {
          question: "What are your payment terms for businesses?",
          answer: "We offer NET 30 payment terms for qualified businesses with approved credit. Equipment financing and leasing options are also available through our partner lenders with competitive rates and flexible terms."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "Do you provide technical support?",
          answer: "Yes, our technical support team is available 24/7 for equipment troubleshooting, parts identification, and operational questions. Support includes phone, email, and video consultation at no additional charge for equipment purchased from us."
        },
        {
          question: "What warranty coverage do you offer?",
          answer: "Warranty coverage varies by manufacturer and product type. Most equipment includes 1-3 year parts and labor warranties. Professional tools typically include lifetime warranties on hand tools and 3-year coverage on power tools. Extended warranty options are available."
        },
        {
          question: "Do you service equipment purchased elsewhere?",
          answer: "Yes, our service technicians can service most major brands of industrial equipment regardless of where it was purchased. Service rates and parts availability vary by manufacturer. Contact our service department for quotes."
        }
      ]
    },
    {
      category: "Products & Selection",
      questions: [
        {
          question: "How do I choose the right CNC machine?",
          answer: "CNC selection depends on your workpiece size, material types, production volume, and precision requirements. Our technical sales team can help you evaluate options based on your specific applications. We offer in-person consultations and can arrange equipment demonstrations."
        },
        {
          question: "Are your safety products OSHA compliant?",
          answer: "Yes, all safety equipment meets or exceeds current OSHA regulations and ANSI standards. Products include certification documentation and test reports. We can help you develop a compliance program for your facility."
        },
        {
          question: "Do you stock replacement parts?",
          answer: "We maintain extensive parts inventory for all equipment we sell, plus common wear items and consumables for major brands. Same-day shipping available on most in-stock parts. We can also source hard-to-find parts for older equipment."
        }
      ]
    }
  ],

  // Testimonials
  testimonials: [
    {
      quote: "The CNC machining center from Machinist Supply has transformed our production capabilities. Their technical team helped us select the right machine and provided excellent installation and training support.",
      author: "Michael Rodriguez",
      company: "Precision Manufacturing Inc.",
      role: "Production Manager"
    },
    {
      quote: "We've been purchasing tools and safety equipment from Machinist Supply for over 10 years. Their product knowledge and customer service are unmatched in the industry.",
      author: "Jennifer Chen",
      company: "Thompson Industrial Fabrication",
      role: "Purchasing Director"
    },
    {
      quote: "When our main air compressor failed, Machinist Supply had a replacement delivered and installed within 48 hours. That's the kind of service that keeps operations running.",
      author: "David Patterson",
      company: "Metro Machine Shop",
      role: "Owner"
    }
  ],

  // Newsletter/Email Signup
  newsletter: {
    heading: "STAY INFORMED",
    subheading: "Technical Updates, New Products, and Exclusive Offers",
    description: "Subscribe to receive product announcements, technical articles, safety bulletins, and exclusive promotional offers for professional customers.",
    placeholder: "Enter your email address",
    buttonText: "SUBSCRIBE",
    privacyNote: "We respect your privacy. Unsubscribe anytime. No spam, ever."
  },

  // Trust Badges
  trustBadges: [
    {
      title: "FREE SHIPPING",
      description: "On orders over $500",
      icon: "shipping"
    },
    {
      title: "SECURE PAYMENT",
      description: "SSL encrypted checkout",
      icon: "security"
    },
    {
      title: "EXPERT SUPPORT",
      description: "24/7 technical assistance",
      icon: "support"
    },
    {
      title: "SATISFACTION GUARANTEED",
      description: "30-day return policy",
      icon: "guarantee"
    }
  ]
};

export default sectionContent;
