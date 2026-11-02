export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  popularSizes?: string[];
  turnaroundNote?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "digital-photo-printing",
    title: "Digital Photo Printing",
    shortDescription: "High-definition digital photo prints with rich color depth, archival photo papers, and crisp contrast.",
    fullDescription: "Transform your digital memories into tangible photo prints that last. We use genuine photographic papers in glossy, matte, and luster finishes to deliver vibrant, accurate skin tones, deep blacks, and true-to-life colors. From everyday snapshots and smartphone albums to studio portraits and urgent ID/passport photographs, every print is calibrated for maximum visual clarity.",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80",
    features: [
      "Premium glossy, luster, and matte finish photo papers",
      "Accurate color calibration and natural skin tone reproduction",
      "Standard sizes from 4R (4x6) up to 8R+ (8x12)",
      "Passport, visa, and ID photos with fast turnaround",
      "Archival inks resistant to fading"
    ],
    popularSizes: ["4R (4×6 in)", "5R (5×7 in)", "6R (6×8 in)", "8R (8×10 in)", "8R+ (8×12 in)"],
    turnaroundNote: "Quick turnaround available for standard print sizes"
  },
  {
    id: "photo-enlargement",
    title: "Photo Enlargement",
    shortDescription: "Breathtaking large-format enlargements for cherished family portraits, weddings, landscapes, and exhibitions.",
    fullDescription: "Make your favorite images take center stage on your walls. Our high-resolution enlargement service scales your photos while preserving fine details and textures. Ideal for living room wall art, wedding portraits, graduation milestones, and commercial display prints, crafted on heavy-weight photographic stock.",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    features: [
      "Large-format printing with exceptional resolution",
      "Heavyweight photographic papers and fine art options",
      "Custom cropping and aspect ratio adjustment",
      "Ideal for weddings, family portraits, and landscapes",
      "Protective surface coatings available"
    ],
    popularSizes: ["10R (10×12 in)", "12×18 in", "16×24 in", "20×30 in", "24×36 in"],
    turnaroundNote: "Inquire for custom dimensions & wall space requirements"
  },
  {
    id: "photo-framing",
    title: "Photo Framing",
    shortDescription: "Custom handcrafted frames in wooden, synthetic, and minimalist modern profiles to preserve and showcase photos.",
    fullDescription: "Protect and elevate your prints with precision framing. We offer an extensive selection of frame mouldings ranging from classic carved woods and ornate golds to sleek modern black, white, and natural timber finishes. Paired with clear protective glass or non-reflective options, our frames are built to protect your memories from dust and moisture.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    features: [
      "Wide selection of mouldings: classic wood, synthetic, minimalist metallic",
      "Acid-free mount boards and matting options",
      "Clear protective glass and lightweight acrylic fronting",
      "Sturdy backing with secure wall hanging hardware",
      "Custom dimensions to fit any artwork or photo"
    ],
    popularSizes: ["Tabletop mini frames", "Standard wall frames", "Multi-aperture collage frames", "Custom bespoke dimensions"],
    turnaroundNote: "Expert craftsmanship on every piece"
  },
  {
    id: "print-and-frame-services",
    title: "Print & Frame Services",
    shortDescription: "Complete all-in-one print and frame packages, delivered ready-to-hang for homes, offices, and gifts.",
    fullDescription: "Save time with our integrated print and frame packages. Provide your digital photo, and we will take care of color calibration, photo printing on premium stock, and custom framing with your choice of moulding and protective glass. Delivered fully assembled with hanging wire and hooks, ready to mount immediately.",
    image: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=800&q=80",
    features: [
      "Seamless all-in-one solution: printing + mounting + framing",
      "Ready to hang with pre-installed hardware",
      "Perfect for graduation gifts, wedding portraits, and family memorials",
      "Optional lamination for moisture and UV resistance",
      "Cost-effective package pricing"
    ],
    popularSizes: ["8×12 in with frame", "12×18 in with frame", "16×24 in statement package", "Bespoke package"],
    turnaroundNote: "Complete solution ready to take home"
  },
  {
    id: "custom-sticker-printing",
    title: "Custom Sticker Printing",
    shortDescription: "Durable custom stickers and product labels for branding, events, packaging, and personal projects.",
    fullDescription: "Promote your business or personalize your belongings with custom stickers. We print crisp, high-resolution stickers on glossy paper, waterproof matte vinyl, and transparent substrates. Whether you need circular bottle labels, logo stickers for packaging, or promotional decals, we offer flexible sheet and die-cut options.",
    image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=800&q=80",
    features: [
      "Glossy, matte, and clear transparent vinyl sticker materials",
      "Water-resistant and smudge-proof printing",
      "Custom shapes: circle, square, rectangle, and contour cut",
      "Sheet printing or individual die-cut pieces",
      "Ideal for product packaging, food containers, bottles, and events"
    ],
    popularSizes: ["A4 / A3 sticker sheets", "2-inch round labels", "3-inch logo stickers", "Custom dimensions"],
    turnaroundNote: "Flexible quantities for small businesses and events"
  },
  {
    id: "digital-printing",
    title: "Digital Printing",
    shortDescription: "Sharp digital color printing for documents, certificates, promotional flyers, brochures, and cards.",
    fullDescription: "Fast, dependable digital printing services in Panadura. Powered by digital production printers, we deliver sharp text, vibrant color graphics, and consistent reproduction across a variety of paper weights and finishes. Ideal for students, professionals, and local businesses needing quick, reliable prints.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    features: [
      "High-speed full-color and black-and-white digital printing",
      "Paper stocks from 80gsm bond to 300gsm heavy art card",
      "Certificates, brochures, leaflets, and promotional flyers",
      "Single and double-sided printing with clean alignment",
      "Lamination and finishing options available"
    ],
    popularSizes: ["A4 (210×297 mm)", "A3 (297×420 mm)", "Standard Card Sizes", "Custom Document Cuts"],
    turnaroundNote: "Quick turnaround for urgent document and promotional jobs"
  }
];

