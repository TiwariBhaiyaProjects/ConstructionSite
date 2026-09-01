# Rajnandini Construction - Global Design System

This document outlines the complete design system used across the website, including color codes, typography, shadows, and base styling variables. The project uses a mix of Tailwind CSS theme variables (defined in `index.css` and `tailwind.config.ts`) and specific hardcoded hex/rgba colors for the brand identity.

---

## 🎨 Brand Identity Colors (Hardcoded)

These colors are frequently used throughout the components and pages (like `Index.tsx`, `Navbar.tsx`, etc.) using Tailwind's arbitrary value syntax (e.g., `bg-[#E8B923]`, `text-[#0A1428]`).

| Color Preview | Hex Code | Usage |
| :--- | :--- | :--- |
| 🟡 | **`#E8B923`** (Gold/Yellow) | **Primary Brand Accent.** Used for primary buttons, highlighted text, icons, active borders, and progress bars. |
| 🟤 | **`#D4A017`** (Dark Gold) | **Hover State.** Used primarily for the hover state of the `#E8B923` buttons (e.g., `hover:bg-[#D4A017]`). |
| 🌑 | **`#0A1428`** (Deep Navy/Dark Blue) | **Primary Dark.** Used for main section backgrounds (like Footer, Hero overlay), dark buttons, and primary heading text on light backgrounds. |
| 🌃 | **`#1a2a4a`** (Lighter Navy) | **Gradient Accent.** Used in background gradients alongside `#0A1428` to create depth (e.g., `from-[#0A1428] to-[#1a2a4a]`). |
| ⚪ | **`#F8F6F0`** (Off-White) | **Section Background.** Used for light alternate section backgrounds (like the "Track Your Project Progress" section). |

---

## 📱 Social Media & Brand Colors

Used specifically for the social media icons in the Top Bar and Footer, and their respective glows.

| Platform | Hex Code | Usage |
| :--- | :--- | :--- |
| Facebook | **`#1877F2`** | Facebook icon color |
| Instagram | **`#E4405F`** | Instagram icon color |
| YouTube | **`#FF0000`** | YouTube icon color |
| WhatsApp | **`#25D366`** | WhatsApp icon color |
| LinkedIn | **`#0A66C2`** | LinkedIn icon color (used in Footer) |

---

## ✒️ Typography

The project utilizes two primary Google Fonts, mapped to Tailwind's font families in `tailwind.config.ts`.

* **Primary Font (`font-sans`):** `"Inter", "Public Sans", "sans-serif"`
* **Display/Heading Font (`font-display`):** `"Inter", "sans-serif"`

*Note: In `index.css`, the body font is explicitly set to `'Inter', 'Public Sans', sans-serif`.*

---

## 🌟 Shadows & Glows

The UI relies heavily on custom rgba-based shadows to create depth and a "glassmorphism" or glowing effect, particularly around the brand's gold accent.

### Gold Glows (Derived from `#E8B923` / rgb 232, 185, 35)
* **Soft Gold Glow:** `shadow-[0_8px_30px_rgba(232,185,35,0.4)]` (Used on primary buttons)
* **Intense Gold Glow:** `shadow-[0_20px_50px_rgba(232,185,35,0.3)]` (Used on highlighted feature cards)
* **Gold Text/Icon Drop-Shadow:** `drop-shadow-[0_0_15px_rgba(232,185,35,0.4)]` (Used on logos, stats counters, and active nav links)
* **Gold Underline Glow:** `after:shadow-[0_0_8px_rgba(232,185,35,0.8)]` (Used on active Navbar links)

### Dark / Glassmorphism Shadows
* **Standard Soft Shadow:** `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`
* **Deep Hover Shadow:** `shadow-[0_20px_50px_rgba(0,0,0,0.12)]` (Used on project cards on hover)
* **Glass Panel Shadow:** `shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]` (Used on the Hero Estimate Form)

### WhatsApp Green Glow (Derived from `#25D366` / rgb 37, 211, 102)
* **Standard Glow:** `shadow-[0_4px_14px_0_rgba(37,211,102,0.39)]`
* **Hover Glow:** `shadow-[0_6px_20px_rgba(37,211,102,0.23)]`

---

## 📐 Base CSS Theme Variables (shadcn/ui setup)

These are defined in `src/index.css` using HSL values. They power the standard `shadcn/ui` components (like Cards, Dialogs, generic Buttons).

### Light Mode
* **Background:** `hsl(210, 20%, 98%)` (Very Light Gray)
* **Foreground:** `hsl(222, 47%, 11%)` (Dark Gray/Black text)
* **Primary:** `hsl(220, 60%, 10%)` (Dark Navy - similar to `#0A1428`)
* **Secondary / Accent:** `hsl(46, 82%, 52%)` (Yellow - similar to `#E8B923`)
* **Muted:** `hsl(210, 40%, 96%)`
* **Destructive:** `hsl(0, 84%, 60%)` (Red for errors)
* **Border / Input:** `hsl(214, 32%, 91%)`
* **Radius (Border Radius):** `0.5rem` (Used as the base for `--radius`, `md: calc(--radius - 2px)`, etc.)

### Dark Mode
* **Background:** `hsl(222, 47%, 5%)` (Almost Black)
* **Foreground:** `hsl(210, 40%, 98%)` (White text)
* **Primary:** `hsl(221, 83%, 55%)` (Bright Blue)
* **Secondary / Accent:** `hsl(30, 100%, 50%)` (Orange)
* **Muted:** `hsl(217, 33%, 18%)`
* **Destructive:** `hsl(0, 63%, 31%)` (Dark Red)
* **Border / Input:** `hsl(217, 33%, 18%)`

---

## 🔧 Miscellaneous / Boilerplate Colors

These are default colors remaining from the Vite/React boilerplate setup in `src/App.css`.

| Hex Code | Usage |
| :--- | :--- |
| **`#646cffaa`** | Default Vite logo drop-shadow color |
| **`#61dafbaa`** | Default React logo drop-shadow color |
| **`#888`** | Default text color fallback |

> **Tip for Future Development:** If you want to change the main brand colors across the entire site easily, you could replace the hardcoded hex values (like `#E8B923`) and specific `rgba` shadows in the `.tsx` files with Tailwind theme colors (like `bg-primary` or `bg-brand-yellow`) and define them centrally in `tailwind.config.ts`.
