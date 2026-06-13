// Company information
export const companyInfo = {
  name: "Rajnandini Construction",
  established: "2015",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "info@rajnandiniconstruction.com",
  address: "Near Kanka Chowk, Ranchi, Jharkhand - 834001",
  serviceArea: "Jharkhand",
  gstin: "20AAQFR1234B1Z5",
  msme: "UDYAM-JH-12-0001234",
  iso: "ISO 9001:2015 Certified",
  workingHours: "Mon - Sat: 8:00 AM - 7:00 PM",
  description: "Rajnandini Construction is a trusted name in Jharkhand's construction industry with over 10 years of excellence in residential and commercial projects.",
};

// Key statistics
export const stats = [
  { value: "150+", label: "Projects Delivered", icon: "building" },
  { value: "11+", label: "Years Experience", icon: "schedule" },
  { value: "70+", label: "Machines & Tools", icon: "construction" },
  { value: "98%", label: "Client Satisfaction", icon: "verified" },
];

// Navigation links
export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Packages", path: "/packages" },
  { name: "Projects", path: "/projects" },
  { name: "Gallery", path: "/gallery" },
  { name: "Calculator", path: "/calculator" },
  { name: "FAQ", path: "/faq" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

// Core services for public construction website
export const services = [
  {
    id: "residential-construction",
    title: "Residential Construction",
    subtitle: "End-to-end home construction for families",
    description:
      "From site visit and planning to structure, finishing and handover, we manage complete home construction with quality checks at every stage.",
    category: "Home Construction",
    features: [
      "New home construction",
      "1BHK, 2BHK, 3BHK and duplex homes",
      "Foundation, RCC frame and masonry",
      "Electrical, plumbing and finishing",
      "Site supervision and quality checks",
      "Stage-wise payment planning",
    ],
    stats: [
      { value: "G+1", label: "Popular Plan" },
      { value: "90-180", label: "Days Typical" },
      { value: "QC", label: "Stage Checks" },
    ],
    image:
      "/images/hero-bridge.jpeg",
    gallery: [
      "/images/site-highway.jpeg",
      "/images/modi-nitish.jpeg",
      "/images/aerial-roundabout.jpeg",
    ],
  },
  {
    id: "commercial-construction",
    title: "Commercial Construction",
    subtitle: "Functional spaces for shops, offices and institutions",
    description:
      "We build practical commercial spaces with durable structure, efficient layouts and clear project timelines for business owners.",
    category: "Commercial",
    features: [
      "Shops and office buildings",
      "Showroom and warehouse structure",
      "Schools, clinics and small institutions",
      "Parking and utility planning",
      "Fire and safety coordination",
      "Vendor and material coordination",
    ],
    stats: [
      { value: "10+", label: "Complexes" },
      { value: "RCC", label: "Structure" },
      { value: "Turnkey", label: "Delivery" },
    ],
    image:
      "/images/modi-bridge-walk.jpeg",
    gallery: [
      "/images/night-highway.jpeg",
      "/images/modi-waving.jpeg",
      "/images/ribbon-cutting.jpeg",
    ],
  },
  {
    id: "g-plus-building",
    title: "G+1 / G+2 Building",
    subtitle: "Multi-floor construction with structural planning",
    description:
      "Structural design, column layout, staircase planning and floor-wise execution for G+1 and G+2 buildings.",
    category: "Multi-floor",
    features: [
      "G+1 and G+2 structure planning",
      "Column, beam and slab execution",
      "Staircase and terrace planning",
      "Future floor expansion guidance",
      "Soil and foundation coordination",
      "Engineer-led site checks",
    ],
    stats: [
      { value: "G+2", label: "Supported" },
      { value: "M25", label: "RCC Options" },
      { value: "BOQ", label: "Estimate" },
    ],
    image:
      "/images/team-members.jpeg",
    gallery: [
      "/images/hero-bridge.jpeg",
      "/images/site-highway.jpeg",
      "/images/modi-nitish.jpeg",
    ],
  },
  {
    id: "renovation",
    title: "Renovation",
    subtitle: "Upgrade old homes and commercial spaces",
    description:
      "We handle structural repairs, layout changes, waterproofing, flooring, paint and finishing upgrades for existing properties.",
    category: "Renovation",
    features: [
      "Old house renovation",
      "Kitchen and bathroom remodeling",
      "Waterproofing and seepage repair",
      "Flooring, tiles and paint",
      "Front elevation upgrade",
      "Before-after documentation",
    ],
    stats: [
      { value: "7-45", label: "Days Typical" },
      { value: "Low", label: "Downtime" },
      { value: "Repair", label: "Focused" },
    ],
    image:
      "/images/aerial-roundabout.jpeg",
    gallery: [
      "/images/modi-bridge-walk.jpeg",
      "/images/night-highway.jpeg",
      "/images/modi-waving.jpeg",
    ],
  },
  {
    id: "interior-work",
    title: "Interior Work",
    subtitle: "Practical interiors with clean finishing",
    description:
      "Interior planning, false ceiling, modular furniture coordination, lighting, paint and finish work for homes and offices.",
    category: "Interiors",
    features: [
      "False ceiling and lighting",
      "Modular kitchen coordination",
      "Wardrobe and storage planning",
      "Tile, paint and texture work",
      "Office interior execution",
      "Final snag correction",
    ],
    stats: [
      { value: "2D/3D", label: "Design" },
      { value: "Finish", label: "Focused" },
      { value: "Budget", label: "Aligned" },
    ],
    image:
      "/images/ribbon-cutting.jpeg",
    gallery: [
      "/images/team-members.jpeg",
      "/images/hero-bridge.jpeg",
      "/images/site-highway.jpeg",
    ],
  },
  {
    id: "civil-work",
    title: "Civil Work",
    subtitle: "Reliable civil execution for sites and utilities",
    description:
      "Civil work for foundations, boundary walls, drainage, roads, pavements, water lines and site development.",
    category: "Civil",
    features: [
      "Foundation and excavation",
      "Boundary wall construction",
      "Drainage and utility work",
      "Road and pavement work",
      "Water supply and pipeline work",
      "Site leveling and compaction",
    ],
    stats: [
      { value: "70+", label: "Machines" },
      { value: "Infra", label: "Ready" },
      { value: "Safety", label: "Checks" },
    ],
    image:
      "/images/modi-nitish.jpeg",
    gallery: [
      "/images/aerial-roundabout.jpeg",
      "/images/modi-bridge-walk.jpeg",
      "/images/night-highway.jpeg",
    ],
  },
  {
    id: "architecture-planning",
    title: "Architecture / Planning",
    subtitle: "Maps, layouts, estimates and execution planning",
    description:
      "We help clients convert plot requirements into practical layouts, estimate sheets, stage planning and execution-ready scope.",
    category: "Planning",
    features: [
      "House map and layout planning",
      "Front elevation concepts",
      "BOQ and estimate support",
      "Material selection guidance",
      "Timeline and payment schedule",
      "Approval coordination guidance",
    ],
    stats: [
      { value: "BOQ", label: "Ready" },
      { value: "3D", label: "Concepts" },
      { value: "Plan", label: "First" },
    ],
    image:
      "/images/modi-waving.jpeg",
    gallery: [
      "/images/ribbon-cutting.jpeg",
      "/images/team-members.jpeg",
      "/images/hero-bridge.jpeg",
    ],
  },
];

export const expertise = services.slice(0, 3);

// Pricing packages
export const packages = [
  {
    id: "basic",
    name: "Basic Package",
    price: 1650,
    displayPrice: "Rs. 1,650 / sq ft",
    bestFor: "Budget-friendly structure and essential finishing",
    description:
      "Good for rental homes and budget homes where durable structure is the main priority.",
    inclusions: [
      "RCC structure with standard grade materials",
      "Standard brick/block masonry",
      "Basic electrical and plumbing points",
      "Standard tiles up to selected range",
      "Interior and exterior paint",
      "Basic bathroom fixtures",
    ],
    materials: {
      cement: "ACC / Ambuja / equivalent",
      steel: "TMT Fe 500 standard brand",
      wiring: "ISI copper wiring",
      plumbing: "CPVC / UPVC standard pipes",
      flooring: "Ceramic tiles selected range",
      paint: "Asian Paints / Berger basic range",
    },
  },
  {
    id: "standard",
    name: "Standard Package",
    price: 1950,
    displayPrice: "Rs. 1,950 / sq ft",
    bestFor: "Most popular choice for family homes",
    description:
      "Balanced package for strong structure, better finishing and practical interior readiness.",
    inclusions: [
      "Engineer-supervised RCC structure",
      "Premium masonry and plaster finish",
      "Branded switches, wiring and MCB",
      "Better flooring and wall tiles",
      "Waterproofing for roof and wet areas",
      "Modular kitchen provision",
    ],
    materials: {
      cement: "UltraTech / ACC / Ambuja",
      steel: "Tata / JSW / Jindal equivalent",
      wiring: "Polycab / Havells copper wiring",
      plumbing: "Ashirvad / Supreme CPVC",
      flooring: "Vitrified tiles selected range",
      paint: "Asian Paints / Berger washable range",
    },
  },
  {
    id: "premium",
    name: "Premium Package",
    price: 2350,
    displayPrice: "Rs. 2,350 / sq ft",
    bestFor: "Premium homes, duplex and high-finish projects",
    description:
      "For clients who want better materials, modern elevation, premium fixtures and detailed finishing.",
    inclusions: [
      "Premium RCC and finishing supervision",
      "Modern front elevation execution",
      "Premium electrical and lighting provisions",
      "Premium tiles, fixtures and sanitaryware",
      "Advanced waterproofing and termite treatment",
      "Detailed handover checklist",
    ],
    materials: {
      cement: "UltraTech / ACC premium grade",
      steel: "Tata Tiscon / JSW / Jindal Panther",
      wiring: "Havells / Polycab premium wiring",
      plumbing: "Supreme / Astral / Ashirvad premium",
      flooring: "Premium vitrified / granite range",
      paint: "Asian Paints Royale / Berger premium",
    },
  },
];

export const materials = [
  {
    category: "Cement",
    brands: "UltraTech, ACC, Ambuja or approved equivalent",
    note: "Batch-wise quality and storage checks before use.",
  },
  {
    category: "Steel",
    brands: "Tata, JSW, Jindal or approved TMT Fe 500/550",
    note: "Diameter and binding checks during reinforcement work.",
  },
  {
    category: "Electrical",
    brands: "Havells, Polycab, Finolex and branded MCBs",
    note: "Copper wiring, load planning and point-wise checks.",
  },
  {
    category: "Plumbing",
    brands: "Supreme, Astral, Ashirvad CPVC/UPVC",
    note: "Pressure testing before wall closing.",
  },
  {
    category: "Paint",
    brands: "Asian Paints, Berger or equivalent",
    note: "Surface preparation, putty and final coat inspection.",
  },
  {
    category: "Tiles & Fixtures",
    brands: "Kajaria, Somany, Johnson and selected sanitary brands",
    note: "Client-approved design, shade and finish selection.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "Requirement, budget and timeline discussion.",
  },
  {
    step: "02",
    title: "Site Visit",
    description: "Plot measurement, road access and site condition check.",
  },
  {
    step: "03",
    title: "Design",
    description: "Layout, elevation concept and execution scope planning.",
  },
  {
    step: "04",
    title: "Estimate",
    description: "Package selection, BOQ and stage-wise payment plan.",
  },
  {
    step: "05",
    title: "Agreement",
    description: "Material scope, timeline and responsibilities are finalized.",
  },
  {
    step: "06",
    title: "Construction",
    description: "Engineer-supervised work with progress updates.",
  },
  {
    step: "07",
    title: "Handover",
    description: "Final inspection, snag closure and clean handover.",
  },
];

// Projects data
export const projects = [
  {
    id: 1,
    title: "Modern G+1 Family Home",
    category: "residential",
    value: "Rs. 38-45 Lakh",
    location: "Patna, Bihar",
    status: "Completed",
    year: "2025",
    plotSize: "1,200 sq ft",
    floors: "G+1",
    timeline: "5 months",
    budgetRange: "Rs. 1,900 - 2,100 / sq ft",
    progress: 100,
    description:
      "Turnkey residential construction with RCC frame, elevation, flooring, paint and handover checklist.",
    image:
      "/images/site-highway.jpeg",
    highlights: ["Turnkey handover", "Modern elevation", "Family layout"],
  },
  {
    id: 2,
    title: "Ranchi Duplex Residence",
    category: "residential",
    value: "Rs. 58-70 Lakh",
    location: "Ranchi, Jharkhand",
    status: "Ongoing",
    year: "2026",
    plotSize: "1,800 sq ft",
    floors: "Duplex",
    timeline: "7 months",
    budgetRange: "Rs. 2,100 - 2,350 / sq ft",
    progress: 70,
    description:
      "Duplex construction with double-height living, modern stair planning and premium finish package.",
    image:
      "/images/modi-nitish.jpeg",
    highlights: ["70% completed", "Premium package", "Weekly updates"],
  },
  {
    id: 3,
    title: "Commercial Retail Building",
    category: "commercial",
    value: "Rs. 82 Lakh",
    location: "Gaya, Bihar",
    status: "Completed",
    year: "2024",
    plotSize: "2,400 sq ft",
    floors: "G+2",
    timeline: "8 months",
    budgetRange: "Rs. 1,850 - 2,250 / sq ft",
    progress: 100,
    description:
      "Commercial building with shops on ground floor, office space above and parking planning.",
    image:
      "/images/aerial-roundabout.jpeg",
    highlights: ["Commercial layout", "Parking planned", "RCC frame"],
  },
  {
    id: 4,
    title: "Old Home Renovation",
    category: "renovation",
    value: "Rs. 12-18 Lakh",
    location: "Muzaffarpur, Bihar",
    status: "Completed",
    year: "2025",
    plotSize: "950 sq ft",
    floors: "Ground Floor",
    timeline: "45 days",
    budgetRange: "Scope based",
    progress: 100,
    description:
      "Layout repair, waterproofing, tiles, paint, kitchen and bathroom renovation.",
    image:
      "/images/modi-bridge-walk.jpeg",
    highlights: ["Before-after work", "Waterproofing", "Fast delivery"],
  },
  {
    id: 5,
    title: "PHED Khagaria Water Supply",
    category: "infrastructure",
    value: "Rs. 120 Cr",
    location: "Khagaria, Bihar",
    status: "Completed",
    year: "2020",
    plotSize: "Network project",
    floors: "Public utility",
    timeline: "Department schedule",
    budgetRange: "Government project",
    progress: 100,
    description:
      "Rural and urban water supply project with pipeline and distribution work.",
    image:
      "/images/night-highway.jpeg",
    highlights: ["Water supply", "Public project", "Pipeline work"],
  },
  {
    id: 6,
    title: "Four Lane Road Project",
    category: "infrastructure",
    value: "Rs. 120 Cr",
    location: "Bihar",
    status: "Ongoing",
    year: "2024",
    plotSize: "Highway corridor",
    floors: "Road work",
    timeline: "Department schedule",
    budgetRange: "Government project",
    progress: 62,
    description:
      "Road construction and widening project with machinery-backed execution.",
    image:
      "/images/modi-waving.jpeg",
    highlights: ["Ongoing", "Machinery fleet", "Road work"],
  },
];

export const liveProjects = [
  {
    title: "Ranchi Duplex Residence",
    location: "Ranchi, Jharkhand",
    progress: 70,
    update: "RCC and masonry complete. Plaster and MEP work in progress.",
    week: "Week 18",
  },
  {
    title: "Four Lane Road Project",
    location: "Bihar",
    progress: 62,
    update: "Earthwork, grading and compaction work active on site.",
    week: "June 2026",
  },
  {
    title: "Patna Interior Upgrade",
    location: "Patna, Bihar",
    progress: 45,
    update: "Electrical points, false ceiling frame and tile selection completed.",
    week: "Week 4",
  },
];

export const testimonials = [
  {
    name: "Amit Kumar",
    location: "Patna",
    project: "G+1 Home Construction",
    rating: 5,
    quote:
      "The team explained the estimate clearly, shared stage-wise updates and completed the home with good finishing.",
  },
  {
    name: "Priya Singh",
    location: "Ranchi",
    project: "Duplex Planning",
    rating: 5,
    quote:
      "Site visit, layout discussion and material options were handled professionally. The process felt transparent.",
  },
  {
    name: "Rakesh Sharma",
    location: "Gaya",
    project: "Commercial Building",
    rating: 5,
    quote:
      "Timeline, structure work and vendor coordination were managed well. We got regular progress updates.",
  },
];

export const galleryItems = [
  {
    title: "Modern Home Elevation",
    type: "3D Design",
    image:
      "/images/ribbon-cutting.jpeg",
  },
  {
    title: "Residential Construction Site",
    type: "Ongoing Site",
    image:
      "/images/team-members.jpeg",
  },
  {
    title: "Duplex Interior Concept",
    type: "Interior",
    image:
      "/images/hero-bridge.jpeg",
  },
  {
    title: "Commercial Building Exterior",
    type: "Completed Project",
    image:
      "/images/site-highway.jpeg",
  },
  {
    title: "Renovation Before/After",
    type: "Before/After",
    image:
      "/images/modi-nitish.jpeg",
  },
  {
    title: "Road Work Drone View",
    type: "Drone Shot",
    image:
      "/images/aerial-roundabout.jpeg",
  },
  {
    title: "Water Pipeline Work",
    type: "Civil Work",
    image:
      "/images/modi-bridge-walk.jpeg",
  },
  {
    title: "Kitchen Finish Work",
    type: "Interior",
    image:
      "/images/night-highway.jpeg",
  },
];

export const designCatalog = [
  {
    title: "Compact 1BHK Plan",
    type: "1BHK",
    size: "600-800 sq ft",
    bestFor: "Small family or rental unit",
    image:
      "/images/modi-waving.jpeg",
  },
  {
    title: "Family 2BHK Plan",
    type: "2BHK",
    size: "900-1,200 sq ft",
    bestFor: "Independent home",
    image:
      "/images/ribbon-cutting.jpeg",
  },
  {
    title: "Modern Duplex",
    type: "Duplex",
    size: "1,500-2,400 sq ft",
    bestFor: "Premium family residence",
    image:
      "/images/team-members.jpeg",
  },
  {
    title: "G+2 Rental Building",
    type: "G+2",
    size: "1,200-2,500 sq ft",
    bestFor: "Rental and mixed-use income",
    image:
      "/images/hero-bridge.jpeg",
  },
];

export const blogPosts = [
  {
    slug: "house-construction-cost-jharkhand",
    title: "House Construction Cost in Jharkhand",
    category: "Cost Guide",
    readTime: "5 min read",
    excerpt:
      "Understand rough per sq ft rates, package differences, material choices and hidden costs before starting construction.",
    image:
      "/images/site-highway.jpeg",
  },
  {
    slug: "g-plus-2-building-cost",
    title: "G+2 Building Cost: What Affects the Budget?",
    category: "Planning",
    readTime: "4 min read",
    excerpt:
      "Foundation type, steel quantity, floor height, finishing level and staircase design all affect final G+2 cost.",
    image:
      "/images/modi-nitish.jpeg",
  },
  {
    slug: "best-cement-for-home",
    title: "Best Cement for Home Construction",
    category: "Materials",
    readTime: "3 min read",
    excerpt:
      "OPC, PPC and PSC have different use cases. Learn what to discuss before final material selection.",
    image:
      "/images/aerial-roundabout.jpeg",
  },
  {
    slug: "house-map-ideas",
    title: "House Map Ideas for Small and Medium Plots",
    category: "Design",
    readTime: "4 min read",
    excerpt:
      "Simple layout ideas for 1BHK, 2BHK, duplex and rental floor planning with practical circulation.",
    image:
      "/images/modi-bridge-walk.jpeg",
  },
];

export const faqs = [
  {
    question: "1000 sq ft ghar ka construction cost kitna hota hai?",
    answer:
      "Package, floor count, soil condition and finishing level par cost depend karta hai. Roughly 1000 sq ft home Rs. 16.5 lakh se Rs. 23.5 lakh plus site-specific items tak ho sakta hai.",
  },
  {
    question: "G+2 construction kitne din me complete hota hai?",
    answer:
      "Normal G+2 building 6 se 10 months me complete ho sakti hai. Final timeline plot size, design complexity, approvals, weather and material availability par depend karega.",
  },
  {
    question: "Material client provide karega ya company?",
    answer:
      "Dono options available ho sakte hain. Turnkey package me material procurement company handle karti hai. Labour-only or supervision model me client material provide kar sakta hai.",
  },
  {
    question: "Payment stages kya honge?",
    answer:
      "Typical stages: booking/site setup, foundation, plinth, slab, brickwork, plaster, MEP, flooring, paint and handover. Exact payment schedule agreement me finalize hota hai.",
  },
  {
    question: "Free estimate kaise milega?",
    answer:
      "Calculator ya enquiry form me plot size, floors, city, budget and requirement submit karein. Team site details check karke rough estimate aur next steps share karegi.",
  },
  {
    question: "Kya renovation aur interior kaam bhi karte hain?",
    answer:
      "Haan, old house renovation, bathroom/kitchen remodeling, waterproofing, tile work, paint and interior finishing services available hain.",
  },
  {
    question: "Kya weekly project tracking milta hai?",
    answer:
      "Ongoing projects me progress photos, percentage update and next-stage plan share kiya ja sakta hai. Yeh agreement scope ke hisaab se define hota hai.",
  },
];

export const teamMembers = [
  {
    name: "Raj Kishor",
    role: "Proprietor",
    focus: "Project leadership and client coordination",
  },
  {
    name: "Site Engineers",
    role: "Execution Team",
    focus: "Site supervision, quality checks and daily planning",
  },
  {
    name: "Vendor Network",
    role: "Material Partners",
    focus: "Cement, steel, electrical, plumbing and finishing supply",
  },
];

export const vendorPartners = [
  "Cement and concrete suppliers",
  "Steel and reinforcement vendors",
  "Tiles and sanitaryware vendors",
  "Electrical and plumbing brands",
  "Paint and waterproofing partners",
  "Machinery and transport support",
];

// Machinery fleet
export const machineryStats = [
  { count: "35", label: "Dumpers/Trucks", icon: "local_shipping" },
  { count: "4", label: "Excavators", icon: "precision_manufacturing" },
  { count: "3", label: "Backhoe Loaders", icon: "handyman" },
  { count: "3", label: "Motor Graders", icon: "settings" },
  { count: "2", label: "Dozers", icon: "straighten" },
];

export const machineryList = [
  { name: "Dumper / Truck", count: 35 },
  { name: "Ready Mix Concrete Plants (30m3 & 60m3)", count: 2 },
  { name: "WMM/CTSB Plant", count: 1 },
  { name: "Hot mix plant 120 TPH", count: 1 },
  { name: "Motor Grader", count: 3 },
  { name: "Dozer", count: 2 },
  { name: "Excavators", count: 4 },
  { name: "Tractor With Trolley & Tanker", count: 3 },
  { name: "Transit Mixer/Miller", count: 4 },
  { name: "Water Tanker", count: 5 },
  { name: "Soil Compactor", count: 3 },
  { name: "Backhoe Loader", count: 3 },
  { name: "Hydra Crane", count: 2 },
  { name: "Diesel Tanker", count: 2 },
  { name: "DG 5 KVA", count: 8 },
  { name: "DG 30 KVA", count: 5 },
  { name: "DG 125 KVA", count: 4 },
  { name: "DG 200 KVA", count: 1 },
  { name: "Steel Cutting & Bending M/C", count: 5 },
  { name: "LMV (Bolero & Camper)", count: 5 },
];

export const machinery = [
  {
    id: 1,
    name: "JCB 3DX Super",
    category: "jcb",
    specs: "76 HP",
    status: "Available",
    image:
      "/images/night-highway.jpeg",
    description: "Versatile backhoe loader for excavation and loading operations",
  },
  {
    id: 2,
    name: "Tata Hitachi EX 200LC",
    category: "excavator",
    specs: "20 Ton",
    status: "On Site",
    image:
      "/images/modi-waving.jpeg",
    description: "Heavy-duty excavator for large-scale earthwork projects",
  },
  {
    id: 3,
    name: "Ashok Leyland 2518 Tipper",
    category: "tipper",
    specs: "25 Ton",
    status: "Available",
    image:
      "/images/ribbon-cutting.jpeg",
    description: "High-capacity tipper for material transportation",
  },
  {
    id: 4,
    name: "Hyva Dump Truck",
    category: "tipper",
    specs: "10 Wheeler",
    status: "On Site",
    image:
      "/images/team-members.jpeg",
    description: "Heavy-duty dump truck for bulk material hauling",
  },
  {
    id: 5,
    name: "Vibratory Soil Compactor",
    category: "roller",
    specs: "12 Ton",
    status: "Available",
    image:
      "/images/hero-bridge.jpeg",
    description: "Road roller for soil and asphalt compaction",
  },
  {
    id: 6,
    name: "Ready Mix Concrete Plant",
    category: "other",
    specs: "60 Cu.M/Hr",
    status: "Available",
    image:
      "/images/site-highway.jpeg",
    description: "High-capacity concrete mixing plant for large projects",
  },
  {
    id: 7,
    name: "Motor Grader CAT 120K",
    category: "other",
    specs: "125 HP",
    status: "Available",
    image:
      "/images/modi-nitish.jpeg",
    description: "Motor grader for road leveling and grading operations",
  },
  {
    id: 8,
    name: "Mobile Crane 25T",
    category: "crane",
    specs: "25 Ton",
    status: "On Site",
    image:
      "/images/aerial-roundabout.jpeg",
    description: "Mobile crane for heavy lifting operations",
  },
];

export const financialTurnover = [
  { year: "2018-2019", turnover: "45 CR" },
  { year: "2019-2020", turnover: "70 CR" },
  { year: "2021-2022", turnover: "120 CR" },
  { year: "2022-2023", turnover: "182 CR" },
  { year: "2023-2024", turnover: "220 CR" },
];

export const workExperience = [
  "Residential and commercial construction",
  "G+1 and G+2 building construction",
  "Renovation and interior finishing",
  "Road and civil infrastructure work",
  "Water supply and pipeline work",
  "Site development and machinery-backed execution",
];

// Contact form subjects
export const contactSubjects = [
  "Get Free Estimate",
  "Residential Construction",
  "Commercial Construction",
  "G+1 / G+2 Building",
  "Renovation",
  "Interior Work",
  "Civil Work",
  "Architecture / Planning",
  "Equipment Rental",
  "Career / Join Us",
  "Vendor / Partnership",
  "Other",
];

export const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/", icon: "facebook" },
  { name: "LinkedIn", url: "https://www.linkedin.com/", icon: "linkedin" },
  { name: "Instagram", url: "https://www.instagram.com/", icon: "instagram" },
  { name: "YouTube", url: "https://www.youtube.com/", icon: "youtube" },
];
