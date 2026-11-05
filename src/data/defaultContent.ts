import { WebsiteContent } from '../types/content';
import { productsData } from './products';
import { servicesData } from './services';
import { galleryData } from './gallery';
import { businessInfo } from './business';

export const defaultWebsiteContent: WebsiteContent = {
  business: {
    name: businessInfo.name,
    legalName: businessInfo.legalName,
    tagline: businessInfo.tagline,
    phone: businessInfo.contact.phone,
    phoneDisplay: businessInfo.contact.phoneDisplay,
    whatsapp: businessInfo.contact.whatsapp,
    whatsappDisplay: businessInfo.contact.whatsappDisplay,
    email: "dndcolour@gmail.com",
    street: businessInfo.address.street,
    city: businessInfo.address.city,
    formattedAddress: businessInfo.address.formatted,
    openingHours: "Monday – Saturday: 8:30 AM – 6:00 PM",
    sundayHours: "Sunday: Closed",
    ratingScore: businessInfo.rating.score,
    reviewCount: businessInfo.rating.reviewCount
  },
  hero: {
    category: "Quality Digital Photo Printing & Offset Lab",
    headlinePrefix: "Bringing Your",
    headlineHighlight: "Memories",
    headlineSuffix: "to Life",
    description: "Your trusted destination for quality digital photo printing, framing, and professional printing services in Panadura. Crafted on industrial Xerox presses with true-to-life color calibration.",
    badges: [
      "Official Xerox Digital Lab Equipment",
      "4.1 ★ (75 Reviews)",
      "Fast Turnaround in Panadura"
    ],
    backgroundImage: "/images/wedding-prints-showcase.jpg",
    bannerImage: "/images/hero-banner.jpg",
    bannerTitle: "State-of-the-Art Production",
    bannerSubtitle: "Equipped with production Xerox color presses for commercial print accuracy and fast execution.",
    inquiryLabel: "Immediate Studio Inquiries",
    inquiryPhone: "+94 77 731 2167"
  },
  about: {
    tagline: "About DN Digital Colour Lab",
    title: "Trusted Digital Photo Printing & Offset Lab in Panadura",
    description: "Situated centrally at 437/B2, Galle Road, Panadura, DN Digital Colour Lab (Pvt) Ltd delivers industrial color grading, photo enlargement, custom framed memorabilia, and multi-format commercial printing for families, studios, and businesses across the Western Province.",
    backgroundImage: "/images/xerox-production-press.jpg",
    cards: [
      {
        title: "High-Precision Digital Photo Printing",
        description: "True-to-detail archival photo reproduction using genuine photographic stock with accurate skin-tone grading and deep black contrast.",
        badge: "Archival Media",
        image: "/images/wedding-prints-showcase.jpg",
        icon: "photo_camera"
      },
      {
        title: "Xerox Digital Production Color Press",
        description: "Equipped with professional Xerox industrial printing presses ensuring exceptional consistency on flyers, stickers, and cards.",
        badge: "Production Hardware",
        image: "/images/xerox-production-press.jpg",
        icon: "print"
      },
      {
        title: "Premium Framing & Mounting",
        description: "Hand-finished teak and synthetic profile mouldings with clear glass fronting, tailored for home galleries and presentations.",
        badge: "Hand-Finished",
        image: "/images/lab-operator-press.jpg",
        icon: "photo_frame"
      },
      {
        title: "Custom Output & Binding",
        description: "From individual family portraits to bulk commercial offset runs, wire-bound books, and contour-cut product labels.",
        badge: "Commercial Offset",
        image: "/images/dn-lab-team.jpg",
        icon: "inventory_2"
      }
    ]
  },
  whyUs: {
    tagline: "Our Standards",
    title: "Why Photographers & Families Choose DN Digital",
    description: "Real craftsmanship, calibrated digital offset hardware, and localized dependability right along Galle Road.",
    backgroundImage: "/images/wedding-prints-showcase.jpg",
    cards: [
      {
        title: "High-Fidelity Color & Clarity",
        description: "Vibrant CMYK and RGB reproduction across archival photo media, preserving the exact dynamic range and skin tones of your original captures.",
        icon: "palette"
      },
      {
        title: "Convenient Galle Road Location",
        description: "Centrally situated at 437/B2 Galle Road in Panadura, providing effortless roadside access, parking convenience, and swift walk-in pickups.",
        icon: "pin_drop"
      },
      {
        title: "Integrated Print & Framing",
        description: "End-to-end service from RAW digital file to ready-to-hang finished wall frames under one roof, eliminating separate framing workshop trips.",
        icon: "photo_frame"
      },
      {
        title: "Quick Turnaround Available",
        description: "Prompt digital processing for urgent photo printing, passport requirements, and priority studio jobs without sacrificing final finish quality.",
        icon: "schedule"
      },
      {
        title: "Versatile Printing Solutions",
        description: "Seamless handling for single family photo keepsakes, bespoke studio portrait albums, custom contour-cut sticker runs, and commercial marketing collaterals.",
        icon: "auto_awesome_motion"
      }
    ],
    teamImage: "/images/dn-lab-team.jpg",
    teamTag: "In-House Specialists",
    teamSubtitle: "The People Behind Your Prints",
    teamTitle: "12+ Dedicated Technicians, Designers & Framing Artisans",
    teamDescription: "From RAW camera file color calibration and custom sizing to precision digital press operation and hand-finished glass framing, our Panadura team handles every order with authentic local pride.",
    teamBadges: [
      "10+ Years Experience",
      "Direct Studio Access",
      "99.4% Satisfaction"
    ]
  },
  services: {
    tagline: "Our Capabilities",
    title: "Comprehensive Printing & Finishing Services",
    description: "From pocket-sized family prints to large-format commercial offset collaterals, crafted with precision in Panadura.",
    items: servicesData
  },
  products: {
    tagline: "Price & Size Guide",
    title: "Product Catalogue & Price Guide",
    description: "Straightforward pricing on everyday favourites. For custom dimensions, contact our Galle Road counter.",
    bannerImage: "/images/offset-services-flyer.jpg",
    items: [
      {
        ...productsData[0],
        priceLKR: 65,
        priceNote: "Per standard 4R print. Volume discounts on bulk album runs."
      },
      {
        ...productsData[1],
        priceLKR: 150,
        priceNote: "Per 5R / 6R tabletop print on archival media."
      },
      {
        ...productsData[2],
        priceLKR: 380,
        priceNote: "Archival portrait grade on high-gamut photo stock."
      },
      {
        ...productsData[3],
        priceLKR: 750,
        priceNote: "Set of compliant embassy photos with digital copy."
      },
      {
        ...productsData[4],
        priceLKR: 950,
        priceNote: "10R / 12x18 wall enlargement on heavy paper."
      },
      {
        ...productsData[5],
        priceLKR: null,
        priceNote: "Contact for sizing & wall space dimensions."
      },
      {
        ...productsData[6],
        priceLKR: 2400,
        priceNote: "Hand-finished teak/synthetic moulding with glass."
      },
      {
        ...productsData[7],
        priceLKR: 1850,
        priceNote: "Sleek black/white modern slim profile."
      },
      {
        ...productsData[8],
        priceLKR: 1950,
        priceNote: "Includes protective glass and certificate mount."
      },
      {
        ...productsData[9],
        priceLKR: 1650,
        priceNote: "Complete tabletop print + standing frame package."
      },
      {
        ...productsData[10],
        priceLKR: 4100,
        priceNote: "Archival wall print + handcrafted frame ready to hang."
      },
      {
        ...productsData[11],
        priceLKR: 750,
        priceNote: "A4 sheet full-colour self-adhesive glossy labels."
      },
      {
        ...productsData[12],
        priceLKR: 1200,
        priceNote: "Contour die-cut precision sticker batch."
      },
      {
        ...productsData[13],
        priceLKR: 45,
        priceNote: "Per A4 full-colour laser document print."
      },
      {
        ...productsData[14],
        priceLKR: null,
        priceNote: "Bulk rates on single/double-sided offset flyer runs."
      }
    ]
  },
  gallery: {
    tagline: "Portfolio",
    title: "Our Work & Print Showcase",
    description: "A sample of recent digital prints, framed memories, enlargements, and custom stickers produced at our Panadura lab.",
    items: galleryData
  },
  lastUpdated: new Date().toISOString()
};
