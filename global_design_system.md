# 🏗️ RAJNANDINI CONSTRUCTION — GLOBAL DESIGN SYSTEM
> **Prepend this block to EVERY module you give to an AI agent.**
> This ensures visual consistency across all pages of the construction website.
> Stack: Vite · React 18 · TypeScript · Tailwind CSS · shadcn/ui · framer-motion

---

## 1. COLOR PALETTE

*Note: The system primarily uses a high-contrast Dark/Gold theme for premium branding. Light mode values are considered for future-proofing.*

### Core Brand Colors (Hardcoded Tokens)
| Token | Hex Code (Dark Mode) | Usage |
|---|---|---|
| `--brand-primary` | `#E8B923` (Gold/Yellow) | Primary buttons, highlighted text, icons, active borders, progress bars |
| `--brand-primary-hover`| `#D4A017` (Dark Gold) | Hover state for primary gold buttons (`hover:bg-[#D4A017]`) |
| `--brand-dark` | `#0A1428` (Deep Navy) | Main section backgrounds, footer, dark buttons, primary text on light bgs |
| `--brand-dark-accent`| `#1a2a4a` (Lighter Navy) | Used in background gradients with Deep Navy to create depth |
| `--bg-light` | `#F8F6F0` (Off-White) | Light alternate section backgrounds |
| `--bg-white-glass` | `rgba(255,255,255,0.1)` | Glassmorphism cards, forms, and navbar backgrounds |

### Social Media Colors
| Platform | Hex Code | Usage |
|---|---|---|
| Facebook | `#1877F2` | Facebook icon / button background |
| Instagram | `#E4405F` | Instagram icon / button background |
| YouTube | `#FF0000` | YouTube icon / button background |
| WhatsApp | `#25D366` | WhatsApp icon / floating action button |
| LinkedIn | `#0A66C2` | LinkedIn icon / button background |

### Base CSS Theme Variables (shadcn/ui `index.css`)
| Role | Light Mode HSL | Dark Mode HSL |
|---|---|---|
| `--background` | `210 20% 98%` | `222 47% 5%` |
| `--foreground` | `222 47% 11%` | `210 40% 98%` |
| `--primary` | `220 60% 10%` | `221 83% 55%` |
| `--secondary` | `46 82% 52%` | `30 100% 50%` |
| `--destructive` | `0 84% 60%` | `0 63% 31%` |
| `--border` / `--input`| `214 32% 91%` | `217 33% 18%` |

### Border Radius Scale
| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `calc(0.5rem - 4px)`| Small elements |
| `--radius-md` | `calc(0.5rem - 2px)`| Standard buttons, inputs |
| `--radius-lg` | `0.5rem` | Cards, standard containers |
| `--radius-xl` | `1rem` | Feature cards, hero image containers |
| `--radius-full`| `9999px` | Buttons with `rounded-full`, status badges, avatars |

---

## 2. TYPOGRAPHY

- **Font Families:** `Inter` (Display/Headings) and `Public Sans` (Body).
- **Base font-size:** `16px` (Browser default, configured via Tailwind utility classes)

| Role | Size | Weight | Color | Usage |
|---|---|---|---|---|
| Hero Headline (H1) | 5xl to 8xl | 800 ExtraBold | White / `#E8B923` | Main landing page hero text |
| Section Title (H2) | 4xl to 5xl | 700 Bold | `#0A1428` or White | Titles for sections like "Our Projects" |
| Section Subtitle | text-sm | 600 SemiBold | `#E8B923` | UPPERCASE tracking-wider above H2s |
| Card Title (H3) | 2xl | 700 Bold | `#0A1428` or White | Titles inside project/service cards |
| Body Text | base / lg | 400 Normal | Gray-600 or White/80 | Paragraphs, descriptions |
| Button Text | sm / base | 700 Bold | `#0A1428` or White | Inside primary/secondary buttons |
| Meta Data | text-xs | 600 SemiBold | Gray-400 | UPPERCASE tracking-wider (e.g. Plot Size) |

---

## 3. APP SHELL LAYOUT

Every public page uses this layout wrapper (`<Layout>` component).

```
┌──────────────────────────────────────────────────────────────────┐
│  TOP BAR (Hidden on mobile)                                      │
│  [Trusted Since 2013] [📞 Phone] [✉️ Email] [📍 Location]  · [Socials]
├──────────────────────────────────────────────────────────────────┤
│  NAVBAR (Sticky, Glassmorphism: bg-zinc-950/90 backdrop-blur-xl) │
│  [🏢 Logo]       [Home] [About] [Projects] [Machinery]       [CTA]│
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  MAIN CONTENT AREA                                               │
│  - Hero Sections (pt-28 to account for fixed navbar)             │
│  - Standard Sections (py-24 padding)                             │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  FOOTER (bg-zinc-950 with top border border-[#E8B923])           │
│  [Brand Info]    [Quick Links]    [Contact Info]   [Working Hrs] │
└──────────────────────────────────────────────────────────────────┘
```

### Main Nav Items (in order)
- Home
- About Us
- Projects
- Completed Projects
- Machinery
- Contact Us

---

## 4. STATUS BADGE RULES (Universal — Apply to ALL pages)

> **CRITICAL ARCHITECTURE RULE:** The status-to-color mapping MUST live in a single constants file (e.g., `src/data/companyData.ts` or a dedicated config), never as inline if/else or switch-case statements inside individual components.

Badges are used primarily on Project Cards to indicate the phase of construction.
Style: `px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider`.

| Status Value | Text Color | Background | Border |
|---|---|---|---|
| **Completed** | `text-white` | `bg-green-500` | None |
| **Ongoing** / **Upcoming** | `text-[#0A1428]` | `bg-[#E8B923]` | None |
| **Outlined** (Filters) | `text-[#0A1428]` | `bg-transparent` | `border border-gray-200` |

---

## 5. REUSABLE COMPONENT PATTERNS

### 5a. Project Card
- **Image Container:** Height ~288px (`h-72`), `rounded-t-[2rem]`, overflow hidden.
- **Image Hover:** `group-hover:scale-110 transition-transform duration-700`.
- **Overlay:** `bg-gradient-to-t from-black/80 via-transparent to-transparent`.
- **Status Badge:** Absolute positioned Top-Right.
- **Content Area:** `p-8` padding, white or glass background.
- **Meta Grid:** 2-column grid (`grid-cols-2`) for stats like Plot Size, Floors, Value.

### 5b. Service / Feature Card
- **Icon:** Large (`w-12 h-12`), usually colored `#E8B923`.
- **Hover Effect:** `hover:-translate-y-2 transition-transform duration-300`.
- **Background:** Solid `#F8F6F0` (light) or Glass `bg-white/5` (dark).

### 5c. Form Layout (Estimate Form)
- **Container:** Heavily relies on Glassmorphism. `bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/20`.
- **Simple form** (≤4 fields): single column.
- **Complex form** (>4 fields): two-column grid inside the card.
- **Each field:** Label above (14px, bold) → Input below.
- **Required fields:** Label has red asterisk `*`.
- **Input styling:** Uses standard `shadcn/ui` inputs but styled to fit the dark theme (white text, transparent/dark backgrounds).
- **Form footer:** Buttons right-aligned or full-width Primary Gold button with hover effects.

### 5d. Modal / Dialog
- **Overlay:** `backdrop: rgba(0,0,0,0.6)`, centered, `z-40`.
- **Modal card:** `background: var(--background)`, border-radius: `var(--radius-xl)`, padding: 28px, max-width: 480px.
- **Structure:** Title (18px bold) + Description text + Content area + Footer buttons.

### 5e. Timeline (for Process or History)
- Vertical line on left (2px, `--brand-primary`).
- Each entry: colored dot on line + step number/date (bold, `--brand-primary`) + content card to the right.

### 5f. Section Header
- **Pre-title:** `<span className="text-[#E8B923] font-semibold text-sm uppercase tracking-wider border-b-2 border-[#E8B923] pb-2">Category</span>`
- **Title:** `<h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">Main Title</h2>`
- **Subtitle:** Muted text description below the title, max-width constrained.

---

## 6. FEEDBACK & STATE PATTERNS

### Toast Notifications
- The project utilizes both `Toaster` (shadcn) and `Sonner` for notifications.
- **Position:** Bottom-right corner (default) or top-center for critical alerts.
- **Auto-dismiss:** Ensure all non-critical toasts auto-dismiss after 4 seconds with slide-out animation.

### Loading State
- Show skeleton loaders (using `Skeleton` component) that match the exact layout of the page content.
- Cards: show shimmer blocks the size of the card.

### Empty State
- Centered in the content area.
- Simple Lucide icon (related to the entity — e.g., `FolderX` for missing projects).
- Heading: "No [items] found" (16px, muted text).
- Subtext: "Please try adjusting your filters."

### Form Validation
- Validate on submit + on blur.
- Error: red border on input (`border-color: --destructive`) + error message below (12px, `--destructive`).

### Confirmation Dialogs (REQUIRED FOR these actions)
Always show a modal before executing destructive actions (e.g., deleting a file, resetting a form).

---

## 7. BUTTON HIERARCHY RULES

| Type | Style | Usage |
|---|---|---|
| **Primary Gold** | `bg-[#E8B923] text-[#0A1428] hover:bg-[#D4A017]` | Main CTAs (Get Quote, Submit) |
| **Primary Dark** | `bg-[#0A1428] text-white hover:bg-zinc-800` | Secondary heavy actions |
| **Glass / Outline** | `bg-white/10 backdrop-blur-md border border-white/50 text-white` | Hero secondary buttons |
| **Dark Outline** | `border-2 border-[#0A1428] text-[#0A1428] hover:bg-[#0A1428] hover:text-white` | "View All" buttons on light backgrounds |

*All buttons typically use `rounded-full`, `font-bold`, and `transition-all duration-300 hover:scale-105`.*

### Button Placement Rules
- **Hero CTA:** Left-aligned or centered based on text alignment.
- **Form submit:** Full-width at the bottom of the form or right-aligned.
- **Destructive:** Always paired with "Cancel" ghost button to its LEFT.

---

## 8. RESPONSIVE BEHAVIOR

| Breakpoint | Behavior |
|---|---|
| **Desktop (≥1024px, `lg`, `xl`)** | Full Navbar layout. Complex grids display in 3-4 columns. Hero images sit side-by-side with text content. Forms display in multi-column layouts. |
| **Tablet (768px–1023px, `md`)** | Grids collapse to 2 columns. Typography scales down slightly (e.g., H1 goes from 6xl to 5xl). |
| **Mobile (<768px, `sm`, `xs`)** | Navbar collapses to Hamburger menu (`Menu` icon) opening a full-screen or slide-out drawer. All grids (Services, Projects) collapse to 1 column. Hero sections stack vertically (Image above or below text). High padding (`py-24`) reduces to `py-12` or `py-16` to save screen real estate. Forms become single-column.

---

## 9. ICONS

> **CRITICAL RULE:** Emojis used throughout this document (📊, ✅, 🔴, 🎓, etc.) are strictly shorthand for human readability in this documentation. Actual implementation MUST use the corresponding **Lucide icon component**, NEVER a raw emoji character in JSX.

Use **Lucide Icons** (`lucide-react`) exclusively. No SVGs unless absolutely necessary (like the brand logo).
Key Icons used:
- 🏗️ Construction: `HardHat`, `Construction`, `Building2`, `Ruler`, `Truck`
- 📞 Contact: `Phone`, `Mail`, `MapPin`, `MessageCircle` (WhatsApp)
- 📊 Stats: `Award`, `ShieldCheck`, `Star`, `TrendingUp`
- ➡️ Arrows: `ArrowRight`, `ChevronRight`, `MoveRight`

---

## 10. THEMING & DARK/LIGHT MODE

This design system intrinsically supports both Dark and Light modes using CSS variables. 
When building modules or components, **ALWAYS follow these rules** to ensure seamless theme switching:

1. **Never use hardcoded Tailwind colors** for backgrounds or text (e.g., `bg-white`, `bg-gray-900`, `text-black`, `text-white`) unless explicitly required for a specific UI element (like a primary gold button where text is always dark).
2. **The One Canonical Pattern for CSS Variables:** Define the variable in `index.css` → map it as a named token in `tailwind.config.ts` → use the Tailwind class name in JSX (e.g., `bg-background`, `text-primary`).
3. **Theme Provider:** Ensure the app is wrapped in a `ThemeProvider` (if implementing toggle) that toggles a `.dark` class on the `<html>` or `<body>` tag.
4. **CSS Setup:** In `index.css`, define the light mode variables inside `:root { ... }` and the dark mode variables inside `.dark { ... }`.
5. **Gradients & Shadows:** Note that shadows like `shadow-black/50` will need to switch to `shadow-gray-200/50` or similar when implementing Light Mode.

---

## 11. PREMIUM UI & MICRO-INTERACTIONS (The WOW Factor)

To ensure the application feels like a world-class, premium site, **every developer and AI agent MUST adhere to these interaction details:**

1. **Universal Micro-Animations:** No interactive element should change state instantly. 
   - Apply `transition-all duration-300 ease-in-out` universally to buttons, cards, list items.
   - **Hover effects:** Cards should elevate (`hover:-translate-y-2 hover:shadow-lg`), and buttons should scale (`hover:scale-105`).
   - **Active states:** Buttons should scale down slightly when clicked (`active:scale-95`).

2. **Framer Motion (Page Load Animations):**
   - **Fade Up:** `<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>`
   - **Staggered Children:** Lists and grids should use delay multipliers (`delay: index * 0.1`).

3. **Glassmorphism & Depth (Z-Axis Elevation):**
   - **Sticky Headers:** Must not be solid flat colors. Use translucent backgrounds with blur (e.g., `bg-zinc-950/90 backdrop-blur-xl`).
   - **Modals, Tooltips, & Panels:** Must use deep, soft shadows.
   - **Inner Reflection:** `<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>`

4. **Custom Shadows (The "WOW" Factor):**
   - **Soft Gold Glow:** `shadow-[0_8px_30px_rgba(232,185,35,0.4)]`
   - **Intense Gold Glow:** `shadow-[0_20px_50px_rgba(232,185,35,0.3)]`
   - **Gold Text/Icon Drop-Shadow:** `drop-shadow-[0_0_15px_rgba(232,185,35,0.4)]`
   - **Dark Glass Shadow:** `shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]`

5. **Custom Premium Scrollbars:**
   - Default browser scrollbars destroy the premium aesthetic.
   - Implement custom thin scrollbars globally via CSS: `::-webkit-scrollbar { width: 8px; }`, with a rounded thumb (`bg-[#E8B923]`) and a transparent/dark track.

6. **Strict Z-Index Layering Scale:**
   Never use random `z-50` or `z-999` classes. Strictly follow this scale to prevent UI collision:
   - `z-10` to `z-30`: Positioned background elements, decorative gradients.
   - `z-40`: Modal Overlays (`Dialog`, `Sheet`).
   - `z-50`: Main Sticky Navbar (`sticky top-0 z-50`).
   - `z-[60]`: Scroll Progress Bar (fixed top).
   - `z-[100]`: Toast Notifications (`Toaster`).

---

## 12. ENTERPRISE UX SAFEGUARDS & ACCESSIBILITY

To guarantee stability, safety, and compliance, these rules are mandatory:

1. **Data Overflow Strategy (Truncation + Tooltips):**
   - **The Rule:** Any dynamic text inside a constrained container MUST use Tailwind's `truncate` class. Whenever text is truncated, you MUST wrap it in a Tooltip component so the user can hover to read the full value.

2. **Irreversible Action Safeguards ("Type-to-Confirm"):**
   - **The Rule:** For highly destructive actions (if any), the modal MUST require the user to manually type a confirmation phrase before the Danger button is enabled.

3. **Accessibility (WCAG Focus Rings):**
   - **The Rule:** Never rely on default outlines. All interactive elements (Inputs, Buttons, Links) MUST explicitly define a `focus-visible` state that matches the design system.
   - **Snippet:** `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8B923] focus-visible:ring-offset-2`

---

## 13. PRINT & EXPORT STYLES
Users may print project pages or machinery specs.
- **`@media print` rules:** Must hide the navbar, footer, action buttons, and toast notifications.
- **Print typography:** Ensure black text on a pure white background (no dark themes in print mode).

## 14. GLOBAL KEYBOARD SHORTCUT MAP
Respect these shortcuts universally:
- `Esc`: Close any open modal, drawer, or dropdown.
- `Enter`: Submit the active form when focused on an input.

## 15. NOTIFICATION & ALERT BANNER PATTERNS
Unlike toasts (which auto-dismiss), alert banners are persistent inline messages.
- **Placement:** Sits immediately below the top navbar, pushing page content down.
- **Usage:** "Website is under maintenance" or specific promotional offers.

## 16. TOOLTIP DESIGN SPECIFICATION
- **Background:** `var(--background)` with `1px solid var(--border)`.
- **Typography:** `12px`, `var(--foreground)`.
- **Layout:** `max-width: 240px`, word-wrap enabled.
- **Animation/Delay:** 300ms show delay, 100ms hide delay (prevents flicker on mouse-over).
- **Z-index:** `z-[100]`.

## 17. FORM FIELD DISABLED & READ-ONLY STATES
- **Disabled:** `opacity-50 cursor-not-allowed`, background transparent/dark (no change), no focus ring.
- **Read-only:** Full opacity, `cursor: default`, subtle border dashed instead of solid, no focus ring.
- **Filled/Success:** `border-color: border-green-500` with a small checkmark icon inside the input.

## 18. NUMBER FORMATTING RULES
- **Currency:** Always format using the Indian Numbering System: `₹1,23,456` (never `₹123456`).
- **Large Numbers:** Abbreviate: `₹1.2 Cr`, `₹50 L`.
- **Measurements:** Standardize to `sq ft` or `sqft` (e.g., `₹1500/sqft`, `2400 sq ft`).
- **Floors:** Format as `G+1`, `G+2`, etc.
- **Implementation:** Centralize formatting logic in a utility file (e.g., `src/lib/utils.ts`).

## 19. LOADING BUTTON STATE
- **Behavior:** When a button triggers an async action, it must transition to a loading state.
- **Visuals:** The button retains its width, the text is replaced (or shifted) by a small spinner icon (e.g., `Loader2` from lucide-react with `animate-spin`), and `disabled={true}` is applied.

## 20. GLOBAL LOADING, EMPTY, & ERROR STATES
- **Top Routing Progress:** Implement a top progress bar (`nprogress` or similar) to indicate background navigation. Color: `#E8B923`.
- **Skeleton Loading:** All major data-fetching pages MUST implement a Skeleton UI. Never use a generic spinner for full-page loading; always use structural skeletons mimicking the layout.
- **Error Boundaries (`ErrorBoundary`):** Modules should implement error boundaries that catch rendering crashes. The UI should display a non-technical error summary with a primary "Try Again" button.
- **Not Found States (`NotFound.tsx`):** 404 pages must be beautifully branded, offering a clear "Back to Home" button instead of a generic browser error.

---

*END OF GLOBAL DESIGN SYSTEM — Paste this block before every module you give to an AI agent.*
