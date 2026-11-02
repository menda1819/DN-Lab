export interface ProductItem {
  id: string;
  name: string;
  category: 'photo-prints' | 'enlargements' | 'photo-frames' | 'print-frame-combos' | 'custom-stickers' | 'other-printing';
  categoryLabel: string;
  description: string;
  sizes: string[];
  priceLKR: number | null; // null triggers "Contact us for pricing"
  priceDisplay?: string;   // Optional custom override
  priceNote: string;
  image: string;
  badge?: string;
  popular?: boolean;
}

export const productCategories = [
  { id: 'all', label: 'All Products' },
  { id: 'photo-prints', label: 'Photo Prints' },
  { id: 'enlargements', label: 'Enlargements' },
  { id: 'photo-frames', label: 'Photo Frames' },
  { id: 'print-frame-combos', label: 'Print & Frame Combos' },
  { id: 'custom-stickers', label: 'Custom Stickers' },
  { id: 'other-printing', label: 'Other Printing' },
] as const;

export const productsData: ProductItem[] = [
  // 1. Photo Prints
  {
    id: "photo-print-4r",
    name: "Standard 4R Photo Prints",
    category: "photo-prints",
    categoryLabel: "Photo Prints",
    description: "Classic 4x6 inch photographic prints on high-grade archival photo paper. Perfect for family albums, scrapbooks, and memorable moments.",
    sizes: ["4R (4 × 6 inches)"],
    priceLKR: null, // Display "Contact us for pricing"
    priceNote: "Available in Glossy or Matte finish. Bulk album discounts on request.",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=700&q=80",
    badge: "Most Popular",
    popular: true
  },
  {
    id: "photo-print-5r-6r",
    name: "5R & 6R Medium Prints",
    category: "photo-prints",
    categoryLabel: "Photo Prints",
    description: "Ideal medium format photo prints for desk frames, bedside tables, and tabletop displays with vivid color accuracy.",
    sizes: ["5R (5 × 7 inches)", "6R (6 × 8 inches)"],
    priceLKR: null,
    priceNote: "Contact us for current size pricing and quantity rates.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "photo-print-8r",
    name: "8R & 8R+ Studio Prints",
    category: "photo-prints",
    categoryLabel: "Photo Prints",
    description: "Premium large desk/wall prints. Exceptional dynamic range for professional portraiture, graduation, and baby photos.",
    sizes: ["8R (8 × 10 inches)", "8R+ (8 × 12 inches / A4-equivalent)"],
    priceLKR: null,
    priceNote: "Color-corrected for true skin tones. Contact us for pricing.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80",
    popular: true
  },
  {
    id: "passport-id-photos",
    name: "Passport & Official Visa Photos",
    category: "photo-prints",
    categoryLabel: "Photo Prints",
    description: "Compliant identification photos formatted to exact international embassy specifications (Sri Lanka, Schengen, UK, US, Canada, etc.).",
    sizes: ["2 × 2 inches (US/India)", "35 × 45 mm (Schengen/UK)", "Sri Lankan NIC/Passport size"],
    priceLKR: null,
    priceNote: "Fast turnaround service with digital copy option. Contact us for package pricing.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
    badge: "Quick Turnaround",
    popular: true
  },

  // 2. Photo Enlargements
  {
    id: "enlargement-10r-12x18",
    name: "Medium Wall Enlargements",
    category: "enlargements",
    categoryLabel: "Enlargements",
    description: "High-definition enlargements tailored for bedroom and corridor feature walls. Retains micro-details and color richness.",
    sizes: ["10R (10 × 12 inches)", "12 × 18 inches"],
    priceLKR: null,
    priceNote: "Printed on heavy archival photo stock. Contact us for pricing.",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "enlargement-large-format",
    name: "Large Statement Wall Enlargements",
    category: "enlargements",
    categoryLabel: "Enlargements",
    description: "Grand format photographic enlargements for living room centerpieces, wedding photography, and corporate reception displays.",
    sizes: ["16 × 24 inches", "20 × 30 inches", "24 × 36 inches", "Custom Wall Dimensions"],
    priceLKR: null,
    priceNote: "Custom cropping and aspect ratio matching. Contact us for sizing quotes.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=700&q=80",
    badge: "Statement Wall Art"
  },

  // 3. Photo Frames
  {
    id: "frame-classic-wood",
    name: "Classic Timber Moulding Frames",
    category: "photo-frames",
    categoryLabel: "Photo Frames",
    description: "Elegantly finished wooden mouldings in rich teak, mahogany, walnut, and natural timber tones. Hand-assembled with clear front glass.",
    sizes: ["4R to 8R (Tabletop)", "10R to 24×36 in (Wall Mount)"],
    priceLKR: null,
    priceNote: "Includes protective glass and mounting hardware. Contact us for frame pricing.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80",
    popular: true
  },
  {
    id: "frame-modern-minimalist",
    name: "Modern Minimalist Profile Frames",
    category: "photo-frames",
    categoryLabel: "Photo Frames",
    description: "Clean, contemporary slim border frames available in matte black, crisp white, and brushed metal finishes.",
    sizes: ["6 × 8 inches", "8 × 12 inches", "12 × 18 inches", "Custom Profiles"],
    priceLKR: null,
    priceNote: "Perfect for minimalist decor and modern home interiors. Contact us for pricing.",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "frame-certificate-doc",
    name: "Certificate & Award Frames",
    category: "photo-frames",
    categoryLabel: "Photo Frames",
    description: "Distinguished presentation frames designed specifically for educational degrees, diplomas, professional licenses, and certificates.",
    sizes: ["A4 (8.27 × 11.69 in)", "A3 (11.69 × 16.53 in)", "Standard 8.5 × 11 in"],
    priceLKR: null,
    priceNote: "Available with optional gold foil border or mount border. Contact us for pricing.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=700&q=80",
  },

  // 4. Print & Frame Combos
  {
    id: "combo-tabletop-gift",
    name: "Tabletop Print & Frame Gift Combo",
    category: "print-frame-combos",
    categoryLabel: "Print & Frame Combos",
    description: "Complete package including photo printing, color enhancement, and custom tabletop standing frame. Ready to gift or place on a desk.",
    sizes: ["5R (5 × 7 in)", "6R (6 × 8 in)", "8R (8 × 10 in)"],
    priceLKR: null,
    priceNote: "Includes print + frame + tabletop strut. Contact us for package pricing.",
    image: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=700&q=80",
    badge: "Popular Gift"
  },
  {
    id: "combo-wall-package",
    name: "Archival Wall Print & Frame Package",
    category: "print-frame-combos",
    categoryLabel: "Print & Frame Combos",
    description: "Turnkey wall portrait package with laminated photographic print, premium moulding, and heavy-duty pre-installed wall hangers.",
    sizes: ["8 × 12 inches", "12 × 18 inches", "16 × 24 inches"],
    priceLKR: null,
    priceNote: "Complete ready-to-hang solution. Contact us for package rates.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=80",
    popular: true
  },

  // 5. Custom Stickers
  {
    id: "stickers-glossy-labels",
    name: "Glossy Product & Packaging Labels",
    category: "custom-stickers",
    categoryLabel: "Custom Stickers",
    description: "Vibrant full-color self-adhesive labels for small business packaging, honey jars, cosmetic bottles, boxes, and pouches.",
    sizes: ["A4 Sheet Layouts", "A3 Sheet Layouts", "Custom Circular / Rectangular cuts"],
    priceLKR: null,
    priceNote: "Printed in high resolution with sharp text. Contact us with your artwork for pricing.",
    image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=700&q=80",
    badge: "For Local Businesses"
  },
  {
    id: "stickers-matte-diecut",
    name: "Custom Die-Cut & Logo Stickers",
    category: "custom-stickers",
    categoryLabel: "Custom Stickers",
    description: "Precision-cut custom stickers for brand promotions, laptop stickers, automotive decals, and events.",
    sizes: ["2-inch to 5-inch individual stickers", "Custom Contours"],
    priceLKR: null,
    priceNote: "High-tack adhesive backing. Contact us for pricing based on quantity.",
    image: "https://images.unsplash.com/photo-1589384267710-7a170981ca78?auto=format&fit=crop&w=700&q=80",
  },

  // 6. Other Printing Products
  {
    id: "digital-colour-documents",
    name: "Full-Colour Digital Document Prints",
    category: "other-printing",
    categoryLabel: "Other Printing",
    description: "High-clarity laser color prints for reports, presentations, brochures, certificates, and student projects.",
    sizes: ["A4 (210 × 297 mm)", "A3 (297 × 420 mm)"],
    priceLKR: null,
    priceNote: "Choice of 80gsm standard paper or 120-250gsm premium smooth stock. Contact us for pricing.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "flyers-leaflets",
    name: "Promotional Flyers & Notice Leaflets",
    category: "other-printing",
    categoryLabel: "Other Printing",
    description: "Crisp marketing leaflets and informational notices printed with fast turnaround for local businesses and events.",
    sizes: ["A5 (148 × 210 mm)", "A4 (210 × 297 mm)", "DL Slips"],
    priceLKR: null,
    priceNote: "Single or double-sided. Contact us for bulk print rates.",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=700&q=80",
  }
];
