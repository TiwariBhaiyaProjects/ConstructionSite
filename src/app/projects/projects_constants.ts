export const projectsCategories = [
  { id: "all", label: "All Projects" },
  { id: "Residential", label: "Residential" },
  { id: "Commercial", label: "Commercial" },
  { id: "Township", label: "Township" },
];

// Company information
export const companyInfo = {
  name: "Rajnandini Construction",
  established: "2013",
  phone: "+91 9971889395, +91 9122443841",
  whatsapp: "+91 9122443841",
  email: "info@rncgroups.com, raj.kishor@rncgroups.com",
  address: "Reg. Office: At+ P.O. Jamalpur, P.S: Athmalgola, Dist: Patna, Bihar, Pin- 803211",
  branchAddress: "411, Hem Plaza, Fraser Road, Patna-800001",
  proprietor: "Raj Kishor",
  serviceArea: "Bihar & Jharkhand",
  gstin: "10CXHPK1182P1ZC",
  msme: "Govt Contractor License: 59/2026, 170620260225",
  iso: "ISO 9001:2015 Certified",
  workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
  description: "Rajnandini Construction was formed in 2013 with the objective of establishing a sustainable and continually improving construction company for predictable and quality constructions.",
};

// Key statistics
export const stats = [
  { value: "11+", label: "Completed Projects", icon: "building" },
  { value: "11+", label: "Years Experience", icon: "schedule" },
  { value: "100+", label: "Machines & Tools", icon: "construction" },
  { value: "1100+ Cr", label: "Project Value", icon: "verified" },
];

// Navigation links
export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About & Contact", path: "/about" },
  { name: "Current Projects", path: "/projects" },
  { name: "Completed Projects", path: "/completed-projects" },
  { name: "Machinery", path: "/machinery" },
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
    title: "Improvement and Up-gradation to Four Lane NH-227A",
    category: "infrastructure",
    value: "Rs. 717 Cr",
    location: "Bihar",
    status: "Ongoing",
    year: "Current",
    plotSize: "Highway",
    floors: "Road work",
    timeline: "Ongoing",
    budgetRange: "Government project",
    progress: 50,
    description: "Four Lane with Paved Shoulder configuration from Existing Km. 0+000 to Km. 39+500 of NH-227A in the state of Bihar on Hybrid Annuity Mode.",
    image: "/images/modi-waving.jpeg",
    highlights: ["NHAI", "717 Cr Value", "Road Work"],
  },
  {
    id: 2,
    title: "Four/Six Laning of Auta - Simaria (Ganga Bridge)",
    category: "infrastructure",
    value: "Rs. 202 Cr",
    location: "Bihar",
    status: "Ongoing",
    year: "Current",
    plotSize: "Bridge/Highway",
    floors: "Road work",
    timeline: "Ongoing",
    budgetRange: "Government project",
    progress: 60,
    description: "Ganga Bridge with Approach Road section of NH-31 from Km 197.900 to Km 206.050 Total Design Length 8.150km on Hybrid Annuity Mode.",
    image: "/images/modi-nitish.jpeg",
    highlights: ["Ganga Bridge", "202 Cr Value", "Road Work"],
  },
  {
    id: 3,
    title: "Four Lane Purina Saharsha Road Project",
    category: "infrastructure",
    value: "Rs. 120 Cr",
    location: "Bihar",
    status: "Ongoing",
    year: "Current",
    plotSize: "Highway",
    floors: "Road work",
    timeline: "Ongoing",
    budgetRange: "Government project",
    progress: 75,
    description: "Four Lane Purina Saharsha Road Project for Rajkeshri project pvt ltd.",
    image: "/images/site-highway.jpeg",
    highlights: ["120 Cr Value", "Road Work"],
  },
  {
    id: 4,
    title: "PHED Khagaria (Bihar) Water Supply",
    category: "infrastructure",
    value: "Rs. 120 Cr",
    location: "Khagaria, Bihar",
    status: "Completed",
    year: "2020",
    plotSize: "Network project",
    floors: "Public utility",
    timeline: "Completed",
    budgetRange: "Government project",
    progress: 100,
    description: "Rural and Urban water supply project with pipeline and distribution work.",
    image: "/images/night-highway.jpeg",
    highlights: ["Water supply", "Public project", "Pipeline work"],
  },
  {
    id: 5,
    title: "Construction of Sub Divisional Control Room SKMCH",
    category: "commercial",
    value: "Rs. 25 Cr",
    location: "Muzaffarpur, Bihar",
    status: "Completed",
    year: "2024",
    plotSize: "Commercial",
    floors: "Building",
    timeline: "Completed",
    budgetRange: "Government project",
    progress: 100,
    description: "Construction of Sub Divisional Control Room SKMCH in Muzaffarpur.",
    image: "/images/aerial-roundabout.jpeg",
    highlights: ["Completed", "25 Cr Value"],
  },
  {
    id: 6,
    title: "Erosion protection Work from Salehpur Tundaspur",
    category: "infrastructure",
    value: "Rs. 18.5 Cr",
    location: "Gopalganj, Bihar",
    status: "Completed",
    year: "2021",
    plotSize: "River bank",
    floors: "Civil Work",
    timeline: "Completed",
    budgetRange: "Government project",
    progress: 100,
    description: "Erosion protection Work from Salehpur Tundaspur chharki Km.0.0 Km. 5.0 Water Resources department.",
    image: "/images/modi-bridge-walk.jpeg",
    highlights: ["Completed", "Water Resources"],
  },
];

export const liveProjects = [
  {
    id: 1,
    title: "Improvement and Up-gradation to Four Lane of NH-227A",
    client: "CDS INFRA (MORTH)",
    location: "Mehrauna Ghat to Siwan (Bihar)",
    value: "719 Cr",
    progress: 45,
    status: "Ongoing",
    description: "Paved Shoulder configuration from Existing Km. 0+000 to Km. 39+500. Total design length 40.842 Km."
  },
  {
    id: 2,
    title: "New Construction of Four/Six Lane Road Project (Greenfield)",
    client: "Govt of Bihar",
    location: "Aunta-Simariya Project",
    value: "348.4 Cr",
    progress: 70,
    status: "Ongoing",
    description: "Major greenfield road construction project."
  },
  {
    id: 3,
    title: "Construction of Six-Lane ROB of 76m Span",
    client: "Railway Authority",
    location: "Hathidah station",
    value: "Undisclosed",
    progress: 30,
    status: "Ongoing",
    description: "Road Over Bridge construction."
  },
  {
    id: 4,
    title: "Construction of LVUP, VUP, SVUP, Viaduct & IOCL Portal",
    client: "IOCL / Govt",
    location: "Bihar",
    value: "Undisclosed",
    progress: 60,
    status: "Ongoing",
    description: "Multiple viaducts and underpasses."
  },
  {
    id: 5,
    title: "Six Lane RUB at Rampur Dumra Railway Line",
    client: "Railway Authority",
    location: "Rampur Dumra",
    value: "Undisclosed",
    progress: 20,
    status: "Ongoing",
    description: "Road Under Bridge construction."
  },
  {
    id: 6,
    title: "Construction of Major Bridge in Choti Gandak River",
    client: "Govt",
    location: "Ram-Janki Marg NH227A",
    value: "Undisclosed",
    progress: 55,
    status: "Ongoing",
    description: "Major bridge construction."
  }
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
  { count: "9", label: "Excavators", icon: "precision_manufacturing" },
  { count: "10", label: "Transit Mixers", icon: "airport_shuttle" },
  { count: "6", label: "Backhoe Loaders", icon: "handyman" },
  { count: "4", label: "Motor Graders", icon: "settings" },
];

export const machineryList = [
  { name: "Dumper / Truck", count: 35 },
  { name: "Ready Mix Concrete Plans(30m³ & 60m³)", count: 3 },
  { name: "WMM / CTSB Plant", count: 2 },
  { name: "Hotmix plant 120TPH", count: 2 },
  { name: "Motor Grader", count: 4 },
  { name: "Dozer", count: 2 },
  { name: "Excavators", count: 9 },
  { name: "Tractor With Trolley & Tanker", count: 8 },
  { name: "Transit Mixer / Miller", count: 10 },
  { name: "Water Tanker", count: 4 },
  { name: "Soil Compactor", count: 4 },
  { name: "Backhoe Loader", count: 6 },
  { name: "Hydra Crane", count: 5 },
  { name: "Diesel Tanker", count: 3 },
  { name: "DG 30KVA", count: 8 },
  { name: "DG 63KVA", count: 5 },
  { name: "DG 125KVA", count: 4 },
  { name: "DG 250KVA", count: 4 },
  { name: "Steel Cutting & Bending Machine", count: 12 },
  { name: "LMV (Bolero & Camper)", count: 11 },
];

export const machinery = [
  {
    id: 2,
    name: "Excavators",
    category: "excavator",
    specs: "Qty: 4",
    status: "On Site",
    image: "/images/Excavators (Heavy-Duty).png",
    description: "Heavy-duty excavators for large-scale earthwork and digging operations.",
  },
  {
    id: 3,
    name: "Motor Grader",
    category: "other",
    specs: "Qty: 3",
    status: "Available",
    image: "/images/Motor_Grader.png",
    description: "Motor graders for road leveling and grading operations.",
  },
  {
    id: 4,
    name: "Dozer",
    category: "other",
    specs: "Qty: 2",
    status: "On Site",
    image: "/images/Dozer.png",
    description: "Dozers for heavy earthmoving and pushing operations.",
  },
  {
    id: 5,
    name: "Backhoe Loader",
    category: "jcb",
    specs: "Qty: 3",
    status: "Available",
    image: "/images/Backhoe_Loader.png",
    description: "Versatile backhoe loaders for excavation and loading operations.",
  },
  {
    id: 6,
    name: "Ready Mix Concrete Plants",
    category: "other",
    specs: "30m3 & 60m3 (Qty: 2)",
    status: "Available",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800",
    description: "High-capacity concrete mixing plants for large projects.",
  },

  {
    id: 8,
    name: "Transit Mixer / Miller",
    category: "other",
    specs: "Qty: 4",
    status: "On Site",
    image: "/images/Transit_Mixer_Miller.png",
    description: "Transit mixers for transporting ready-mix concrete to sites.",
  },
  {
    id: 9,
    name: "Soil Compactor",
    category: "roller",
    specs: "Qty: 3",
    status: "Available",
    image: "/images/Soil_Compactor.png",
    description: "Heavy-duty compactors for soil and road foundation preparation.",
  },
  {
    id: 10,
    name: "Hydra Crane",
    category: "crane",
    specs: "Qty: 2",
    status: "On Site",
    image: "/images/Hydra_Crane.png",
    description: "Mobile hydra cranes for material handling and lifting.",
  }
];

export const financialTurnover = [
  { year: "2023-2024", turnover: "71.3 CR", icon: "trending_up" },
  { year: "2024-2025", turnover: "75.5 CR", icon: "trending_up" },
  { year: "2025-2026", turnover: "364.0 CR", icon: "trending_up" },
];

export const workExperience = [
  {
    id: 1,
    title: "Patna Dobhi Road Project Sec-1",
    client: "NHAI / Govt",
    completionYear: "2016",
    value: "15 Cr",
    description: "Road construction project section 1."
  },
  {
    id: 2,
    title: "PHED Khagaria (Bihar) (Rural & Urban Water supply)",
    client: "PHED Bihar",
    completionYear: "2020",
    value: "120 Cr",
    description: "Extensive rural and urban water supply infrastructure."
  },
  {
    id: 3,
    title: "Erosion protection Work from Salehpur Tundaspurchharki",
    client: "Water Resource Department, Gopalganj(Bihar)",
    completionYear: "2021",
    value: "18.5 Cr",
    description: "Km.0.0 to Km.5.0 Water Resource department."
  },
  {
    id: 4,
    title: "Executive engineer Son Nahar Division Arrah",
    client: "Govt of Bihar",
    completionYear: "2023",
    value: "11.28 Cr",
    description: "Irrigation and canal division works."
  },
  {
    id: 5,
    title: "Office of The Executive Engineer MWRS Division Gaya",
    client: "MWRS Division Gaya",
    completionYear: "2023",
    value: "11.28 Cr",
    description: "Various structural and civil works."
  },
  {
    id: 6,
    title: "Renovation of Marho pond Mokama",
    client: "Local Administration",
    completionYear: "2019",
    value: "3 Cr",
    description: "Pond renovation and beautification."
  },
  {
    id: 7,
    title: "Construction of Sub Divisional Control Room SKMCH",
    client: "SKMCH (Muzaffarpur)",
    completionYear: "2024",
    value: "25 Cr",
    description: "Advanced sub divisional control room construction."
  },
  {
    id: 8,
    title: "Office of The Executive Engineer MWRS Division Gaya (2025)",
    client: "MWRS Division Gaya",
    completionYear: "2025",
    value: "8.35 Cr",
    description: "Civil structural works."
  },
  {
    id: 9,
    title: "Construction of Four Lane Purnia-Saharsa Road Project",
    client: "NHAI / Govt",
    completionYear: "2025",
    value: "120 Cr",
    description: "Major highway widening and paving."
  },
  {
    id: 10,
    title: "Four/Six laning of Aunta-Simaria (Ganga Bridge)",
    client: "NHAI",
    completionYear: "2025",
    value: "348.4 Cr",
    description: "Section of NH-31 from KM 197+900 to 206+050. Total Design Length 8.150Km."
  }
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

export const aboutUsText = [
  "Rajnandini Construction Was Formed in 2013 With The Objective of Establishing a Sustainable and Continually Improving Construction Company Which is Able to Provide Predictable and Quality Constructions to Our Clients While Concurrently Fostering Lasting Relationships with Professionals, Local Councils, Government Bodies, Trade Contractors and Suppliers.",
  "As Building Contractors and Developers, Rajnandini Construction Is Well Equipped to Undertake the Most Technical Constructions and to Direct and Manage the Works from Design to Handover. Whether You Require the Construction Only or You Require a Full Design and Construct Package, We Can Manage the Process and Deliver You the Finished Product. We Undertake the Majority of Our Works Up to Rs.200cr Range.",
];

export const collaborativeExperience = [
  {
    year: "Since 2016",
    value: "15 Cr",
    client: "IL&FS Infrastructure Pvt.Ltd",
    description: "Through Collaboration, Mutual Respect and Trust We Delivered All Projects on or Ahead of Schedule with Virtually Zero Cost Overruns."
  },
  {
    year: "2019-20",
    value: "12 Cr",
    client: "PHED Department, Government of Bihar",
    description: "We Have Done Work of Water Supply."
  },
  {
    year: "Current",
    value: "719 Cr",
    client: "MORTH",
    description: "Project Improvement and Up-gradation to Four Lane with Paved Shoulder configuration from Existing Km. 0+000 to Km. 39+500 of NH-227A (near Mehrauna Ghat to Siwan)."
  }
];

export const contractorLicenses = [
  {
    authority: "Water Resource Department, Bihar",
    licenseNumber: "59/2026",
    panName: "Raj Kishor",
    panNumber: "CXHPK1182P"
  },
  {
    authority: "Public Health Engineering Department, Bihar",
    licenseNumber: "170620260225",
    panName: "Raj Kishor",
    panNumber: "CXHPK1182P"
  },
  {
    authority: "RWD",
    licenseNumber: "PT/CLR/2026/00251",
    panName: "Raj Kishor",
    panNumber: "CXHPK1182P"
  }
];
