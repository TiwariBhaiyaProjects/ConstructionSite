

# Rajnandini Construction Website - Implementation Plan

## Overview
I'll convert your 5 HTML pages into a modern, fully responsive React + TypeScript application with all data hardcoded exactly as in your HTML files. The website will maintain the same beautiful design and professional look.

---

## 🏠 Pages to Implement

### 1. **Homepage**
- Sticky navigation with logo ("RC" branding)
- Hero section with construction background, tagline "Building Sustainable Infrastructure", and CTA buttons
- Key stats bar: 220Cr+ Turnover, 10+ Years, 50+ Machines, 100% Success
- About section with proprietor info (Raj Kishor) and company credentials
- Core expertise cards (Road Projects, Water Supply, Building Construction)
- Machinery stats section (35 Dumpers, 4 Excavators, etc.)
- Full footer with contact info, quick links, and social icons

### 2. **Projects Portfolio**
- Hero heading with breadcrumb navigation
- Category filter tabs (All, Road Projects, Water Supply, Building Construction)
- Interactive project cards with hover effects showing:
  - NH-31 Highway Expansion (₹450 CR)
  - City Water Supply Network (₹120 CR)
  - Govt. Housing Complex (₹85 CR)
  - State Highway 12 (₹320 CR)
  - And more projects...
- Pagination component

### 3. **Services & Expertise**
- Side navigation for easy scrolling
- Service sections with hero images:
  - **Road Construction** - 500+ km paved, 20+ Highways, ISO 9001
  - **Bridge Infrastructure** - 5km Flyover, River Projects
  - **Water Pipelines** - 200km pipeline, treatment plants
  - **Building Construction** - Residential & commercial projects
- Project galleries for each service
- "Contact Sales" CTA

### 4. **Machinery & Fleet Showcase**
- Filter tabs (All Equipment, Excavators, JCBs, Tippers, Rollers)
- Equipment cards with status badges (Available/On Site/Maintenance):
  - JCB 3DX Super (76 HP)
  - Tata Hitachi EX 200LC (20 Ton)
  - Ashok Leyland 2518 Tipper
  - Hyva Dump Truck (10 Wheeler)
  - Vibratory Soil Compactor
  - Ajax Fiori Mixer
- CTA banner for equipment rental inquiries

### 5. **Contact Us**
- Two-column layout with contact form and info
- Form fields: First Name, Last Name, Email, Subject dropdown, Message
- Contact cards (Address, Phone, Email) with hover effects
- Map section with location pin
- Social media links

---

## 🎨 Design Features

- **Color Scheme**: Blue primary (#1152d4 / #1e40af) with secondary orange accents
- **Typography**: Clean, professional fonts (Inter/Public Sans)
- **Dark Mode Ready**: CSS variables for future dark mode toggle
- **Responsive Design**: Mobile-first with tablet and desktop breakpoints
- **Animations**: Smooth hover effects, transitions, and card interactions
- **Icons**: Material Symbols/Icons for consistent iconography

---

## 🛠️ Technical Implementation

- **React Router**: For seamless page navigation
- **Reusable Components**: Navbar, Footer, ServiceCard, ProjectCard, MachineryCard, ContactInfo
- **TypeScript**: Fully typed data structures and components
- **Tailwind CSS**: Consistent styling matching your HTML designs
- **All Data Hardcoded**: Company info, projects, services, machinery - exactly as in your files

---

## 📱 Mobile Experience
- Hamburger menu for navigation
- Stacked layouts on smaller screens
- Touch-friendly cards and buttons
- Optimized images and layouts

