# DN Digital Colour Lab (Pvt) Ltd — Official Showcase Website

A modern, responsive, production-quality business showcase website for **DN Digital Colour Lab (Pvt) Ltd**, located at 437/B2 Galle Road, Panadura 12500, Sri Lanka.

## Tech Stack

- **React 18** + **Vite 6**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)
- Fully static, view-only architecture (no backend, no database, zero server dependencies).

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Output files are written to `/dist` and ready to deploy on any static hosting provider (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

---

## Project Structure

```
├── public/
│   └── favicon.svg                  # Favicon
├── src/
│   ├── assets/
│   │   └── logo/
│   │       └── dn-logo.svg          # Temporary vector branding logo
│   ├── components/
│   │   ├── Logo.tsx                 # Logo component (with fallback & sizing)
│   │   ├── Navbar.tsx               # Sticky navbar with live Open/Closed status
│   │   ├── Hero.tsx                 # High-impact photography hero
│   │   ├── About.tsx                # Verified business overview & highlights
│   │   ├── Services.tsx             # 6 confirmed services with details modal
│   │   ├── Products.tsx             # Product catalogue with filter & search
│   │   ├── Gallery.tsx              # Photography & framing showcase with lightbox
│   │   ├── WhyChooseUs.tsx          # 4.1★ reviews & value propositions
│   │   ├── Contact.tsx              # Google Maps embed & WhatsApp direct links
│   │   ├── Footer.tsx               # Footer with links, hours & copyright
│   │   └── FloatingActions.tsx      # Floating WhatsApp & Call speed dial
│   ├── data/
│   │   ├── business.ts              # Business info, hours calculation, WhatsApp helper
│   │   ├── services.ts              # 6 verified service definitions
│   │   ├── products.ts              # Catalogue items, sizes, prices, notes
│   │   └── gallery.ts               # Gallery photos and categories
│   ├── styles/
│   │   └── globals.css              # CSS variables design system
│   ├── App.tsx                      # Root page composition
│   └── main.tsx                     # Entry point
```

---

## How to Update Business Assets

### 1. Replacing with the Official Business Logo
- Drop your high-resolution logo image into `src/assets/logo/` or `public/`.
- Update [`src/components/Logo.tsx`](file:///Users/menda/Documents/DN Lab/DN-Lab/src/components/Logo.tsx) to point to the new image, or replace the SVG paths.

### 2. Adjusting Brand Colours
Open [`src/styles/globals.css`](file:///Users/menda/Documents/DN Lab/DN-Lab/src/styles/globals.css) and update the CSS variables:
```css
:root {
  --color-primary: #0284c7;       /* Primary brand colour */
  --color-primary-dark: #075985;  /* Dark variant */
  --color-secondary: #f59e0b;     /* Accent/warm colour */
  --color-accent: #0ea5e9;        /* Highlight colour */
}
```

### 3. Adding Confirmed Prices and Products
Open [`src/data/products.ts`](file:///Users/menda/Documents/DN Lab/DN-Lab/src/data/products.ts). Change `priceLKR: null` to a number (e.g. `priceLKR: 1200`) once the business confirms official pricing. The UI will immediately switch from *"Contact us for pricing"* to displaying the formatted LKR price.

### 4. Updating Gallery Photos
Add or replace URLs in [`src/data/gallery.ts`](file:///Users/menda/Documents/DN Lab/DN-Lab/src/data/gallery.ts).
