export interface GalleryItem {
  id: string;
  title: string;
  category: 'prints' | 'frames' | 'enlargements' | 'stickers-digital';
  categoryLabel: string;
  image: string;
  aspect: 'square' | 'portrait' | 'landscape';
  description: string;
  tag: string;
}

export const galleryCategories = [
  { id: 'all', label: 'All Showcase' },
  { id: 'prints', label: 'Photo Prints' },
  { id: 'frames', label: 'Frames & Combos' },
  { id: 'enlargements', label: 'Enlargements' },
  { id: 'stickers-digital', label: 'Stickers & Digital' },
] as const;

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Vivid Color Photographic Prints",
    category: "prints",
    categoryLabel: "Photo Prints",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=900&q=80",
    aspect: "landscape",
    description: "High-definition glossy photographic prints featuring rich colour depth and natural tonality.",
    tag: "Studio Print"
  },
  {
    id: "gal-2",
    title: "Handcrafted Teak & Wood Moulding Frames",
    category: "frames",
    categoryLabel: "Frames & Combos",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80",
    aspect: "square",
    description: "Custom wood moulding framing finished with museum glass protection.",
    tag: "Custom Framing"
  },
  {
    id: "gal-3",
    title: "Large Format Wall Portrait Enlargement",
    category: "enlargements",
    categoryLabel: "Enlargements",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
    description: "Archival portrait enlargement produced on heavyweight photographic fine art paper.",
    tag: "Wall Enlargement"
  },
  {
    id: "gal-4",
    title: "Custom Cut Brand & Product Stickers",
    category: "stickers-digital",
    categoryLabel: "Stickers & Digital",
    image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=900&q=80",
    aspect: "square",
    description: "High-resolution self-adhesive vinyl stickers for commercial packaging and products.",
    tag: "Custom Stickers"
  },
  {
    id: "gal-5",
    title: "Ready-To-Hang Family Portrait Frame Package",
    category: "frames",
    categoryLabel: "Frames & Combos",
    image: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=900&q=80",
    aspect: "landscape",
    description: "Integrated print and framing combo with pre-installed wall-hanging hardware.",
    tag: "Print & Frame"
  },
  {
    id: "gal-6",
    title: "Monochrome & Fine Art Portraiture",
    category: "prints",
    categoryLabel: "Photo Prints",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
    description: "High-contrast black-and-white digital printing with smooth tonal gradients.",
    tag: "Monochrome Print"
  },
  {
    id: "gal-7",
    title: "Minimalist Gallery Wall Frame Collection",
    category: "frames",
    categoryLabel: "Frames & Combos",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=80",
    aspect: "landscape",
    description: "Sleek, minimalist dark moulding frames suited for contemporary home galleries.",
    tag: "Gallery Wall"
  },
  {
    id: "gal-8",
    title: "Full-Colour Digital Document & Certificate Output",
    category: "stickers-digital",
    categoryLabel: "Stickers & Digital",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
    aspect: "square",
    description: "Sharp digital color laser printing on heavyweight cardstock with high registration accuracy.",
    tag: "Digital Print"
  },
  {
    id: "gal-9",
    title: "Landscape Panoramic Enlargement",
    category: "enlargements",
    categoryLabel: "Enlargements",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
    aspect: "landscape",
    description: "Ultra-wide landscape photo enlargement capturing vibrant natural hues and fine textures.",
    tag: "Wide Format"
  }
];
