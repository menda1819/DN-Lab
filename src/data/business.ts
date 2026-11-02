export interface BusinessInfo {
  name: string;
  legalName: string;
  tagline: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    formatted: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappDisplay: string;
  };
  hours: {
    days: string;
    time: string;
    sunday: string;
  };
  rating: {
    score: number;
    reviewCount: number;
    platform: string;
  };
  categories: string[];
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
}

export const businessInfo: BusinessInfo = {
  name: "DN Digital Colour Lab",
  legalName: "DN Digital Colour Lab (Pvt) Ltd",
  tagline: "Your trusted destination for quality digital photo printing, framing and professional printing services in Panadura.",
  address: {
    street: "437/B2, Galle Road",
    city: "Panadura",
    postalCode: "12500",
    country: "Sri Lanka",
    formatted: "437/B2, Galle Road, Panadura 12500, Sri Lanka"
  },
  contact: {
    phone: "+94777312167",
    phoneDisplay: "+94 77 731 2167",
    whatsapp: "94777312167",
    whatsappDisplay: "077 731 2167"
  },
  hours: {
    days: "Monday – Saturday: 8:30 AM – 6:00 PM",
    time: "8:30 AM – 6:00 PM",
    sunday: "Sunday: Closed"
  },
  rating: {
    score: 4.1,
    reviewCount: 75,
    platform: "Google Reviews"
  },
  categories: [
    "Digital Photo Printing",
    "Photo Lab",
    "Digital Printing Services"
  ],
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=DN+Digital+Colour+Lab+437%2FB2+Galle+Road+Panadura+Sri+Lanka",
  // Google Maps embed URL centered on Galle Road, Panadura
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.3394593815343!2d79.9048827!3d6.7130283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae247a3e7b12271%3A0x628043b2e591410!2sGalle%20Rd%2C%20Panadura%2012500!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
};

/**
 * Helper to determine if the lab is currently open based on Sri Lanka Time (UTC+05:30)
 */
export function getStoreStatus(): { isOpen: boolean; statusText: string; nextScheduleText: string } {
  try {
    // Current time in Sri Lanka timezone
    const now = new Date();
    const lkTimeStr = now.toLocaleString("en-US", { timeZone: "Asia/Colombo" });
    const lkDate = new Date(lkTimeStr);

    const day = lkDate.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
    const hours = lkDate.getHours();
    const minutes = lkDate.getMinutes();
    const currentDecimalHour = hours + minutes / 60;

    // Monday (1) to Saturday (6): 8:30 AM (8.5) to 6:00 PM (18.0)
    if (day >= 1 && day <= 6) {
      if (currentDecimalHour >= 8.5 && currentDecimalHour < 18.0) {
        return {
          isOpen: true,
          statusText: "Open Now",
          nextScheduleText: "Closes at 6:00 PM today"
        };
      } else if (currentDecimalHour < 8.5) {
        return {
          isOpen: false,
          statusText: "Closed Now",
          nextScheduleText: "Opens today at 8:30 AM"
        };
      } else {
        const nextDayIsSunday = day === 6;
        return {
          isOpen: false,
          statusText: "Closed for the day",
          nextScheduleText: nextDayIsSunday ? "Opens Monday at 8:30 AM" : "Opens tomorrow at 8:30 AM"
        };
      }
    } else {
      // Sunday
      return {
        isOpen: false,
        statusText: "Closed on Sundays",
        nextScheduleText: "Opens Monday at 8:30 AM"
      };
    }
  } catch {
    return {
      isOpen: true,
      statusText: "Open Mon-Sat",
      nextScheduleText: "8:30 AM – 6:00 PM"
    };
  }
}

/**
 * Generate a pre-filled WhatsApp direct message URL
 */
export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = "Hello DN Digital Colour Lab, I visited your website and would like to inquire about your printing services.";
  const encoded = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${businessInfo.contact.whatsapp}?text=${encoded}`;
}
