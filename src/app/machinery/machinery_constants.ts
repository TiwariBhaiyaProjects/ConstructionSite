export const machineryCategories = [
  { id: "all", label: "All Equipment" },
  { id: "excavator", label: "Excavators" },
  { id: "jcb", label: "JCBs" },
  { id: "tipper", label: "Tippers" },
  { id: "roller", label: "Rollers" },
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
  { value: "16+", label: "Total Projects", icon: "building" },
  { value: "13+", label: "Years Experience", icon: "schedule" },
  { value: "90+", label: "Heavy Machineries", icon: "construction" },
  { value: "1400+ Cr", label: "Project Value", icon: "verified" },
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
    id: "road-highways",
    title: "Roads & Highways",
    subtitle: "Four/Six lane construction and widening",
    description: "Expertise in greenfield projects, highway widening, paved shoulders, and extensive road network development under government tenders.",
    category: "Infrastructure",
    features: ["Greenfield projects", "Highway widening", "Paved shoulders", "Bitumen and concrete roads", "Precast installation", "Safety planning"],
    stats: [{ value: "719Cr", label: "Max Value" }, { value: "NHAI", label: "Client" }, { value: "Turnkey", label: "Delivery" }],
    image: "/images/hero-bridge.jpeg",
    gallery: ["/images/night-highway.jpeg", "/images/site-highway.jpeg", "/images/aerial-roundabout.jpeg"]
  },
  {
    id: "bridges-structures",
    title: "Bridges & Structures",
    subtitle: "Major bridges, ROBs, and Viaducts",
    description: "Construction of major river bridges, Railway Over Bridges (ROB), Road Under Bridges (RUB), and viaducts using advanced precast pushing methods.",
    category: "Infrastructure",
    features: ["Major river bridges", "Railway Over Bridges (ROB)", "Road Under Bridges (RUB)", "Viaduct construction", "Precast pushing installation", "Heavy structural engineering"],
    stats: [{ value: "76m", label: "Span Length" }, { value: "Major", label: "Structures" }, { value: "Expert", label: "Execution" }],
    image: "/images/modi-bridge-walk.jpeg",
    gallery: ["/images/ribbon-cutting.jpeg", "/images/hero-bridge.jpeg", "/images/night-highway.jpeg"]
  },
  {
    id: "water-supply",
    title: "Water Supply Projects",
    subtitle: "Rural and urban water supply infrastructure",
    description: "Large scale water supply projects for PHED, including elevated storage tanks, treatment plants, and distribution pipelines.",
    category: "Civil Work",
    features: ["Elevated water tanks", "Pipeline distribution networks", "Water treatment plants", "Pump house construction", "Rural water supply", "Urban water supply"],
    stats: [{ value: "120Cr", label: "Project Value" }, { value: "PHED", label: "Client" }, { value: "Tested", label: "Quality" }],
    image: "/images/site-highway.jpeg",
    gallery: ["/images/aerial-roundabout.jpeg", "/images/modi-bridge-walk.jpeg", "/images/ribbon-cutting.jpeg"]
  },
  {
    id: "irrigation-canal",
    title: "Irrigation & Canal",
    subtitle: "Erosion protection and canal divisions",
    description: "Execution of erosion protection works, pond renovation, and extensive canal works for water resource departments.",
    category: "Civil Work",
    features: ["Erosion protection", "Canal excavation and lining", "Pond renovation", "Embankment strengthening", "Water resource management", "Flood protection works"],
    stats: [{ value: "18.5Cr", label: "Protection" }, { value: "Govt", label: "Client" }, { value: "Proven", label: "Record" }],
    image: "/images/hero-bridge.jpeg",
    gallery: ["/images/night-highway.jpeg", "/images/site-highway.jpeg", "/images/aerial-roundabout.jpeg"]
  },
  {
    id: "building-construction",
    title: "Building Construction",
    subtitle: "Commercial and institutional buildings",
    description: "Construction of control rooms, office buildings, and institutional structures with complete MEP and finishing works.",
    category: "Commercial",
    features: ["Sub-divisional control rooms", "Executive offices", "Institutional buildings", "Complete structural work", "MEP execution", "Finishing and handover"],
    stats: [{ value: "25Cr", label: "Building" }, { value: "Turnkey", label: "Delivery" }, { value: "On Time", label: "Completion" }],
    image: "/images/modi-bridge-walk.jpeg",
    gallery: ["/images/ribbon-cutting.jpeg", "/images/hero-bridge.jpeg", "/images/night-highway.jpeg"]
  }
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
    title: "Improvement and Up-gradation to Four Lane of NH-227A",
    category: "infrastructure",
    value: "Rs. 719 Cr",
    location: "Mehrauna Ghat to Siwan (Bihar)",
    status: "Ongoing",
    year: "Current",
    plotSize: "40.842 Km",
    floors: "Road Work",
    timeline: "Ongoing",
    budgetRange: "Government Project",
    progress: 45,
    description: "Paved Shoulder configuration from Existing Km. 0+000 to Km. 39+500 of NH-227A.",
    image: "/images/site-highway.jpeg",
    highlights: ["MORTH", "719 Cr Value", "Four Lane Highway"],
  },
  {
    id: 2,
    title: "New Construction of Four/Six Lane Road Project",
    category: "infrastructure",
    value: "Rs. 348.4 Cr",
    location: "Aunta-Simariya",
    status: "Ongoing",
    year: "Current",
    plotSize: "8.150 Km",
    floors: "Road Work",
    timeline: "Ongoing",
    budgetRange: "Government Project",
    progress: 70,
    description: "Four/Six laning of Aunta-Simaria (Ganga Bridge with approach road) section of NH-31.",
    image: "/images/aerial-roundabout.jpeg",
    highlights: ["Ganga Bridge", "348.4 Cr Value", "NH-31"],
  },
  {
    id: 3,
    title: "PHED Khagaria (Bihar) Water Supply",
    category: "infrastructure",
    value: "Rs. 120 Cr",
    location: "Khagaria, Bihar",
    status: "Completed",
    year: "2020",
    plotSize: "District-wide",
    floors: "Water Supply",
    timeline: "Completed",
    budgetRange: "Government Project",
    progress: 100,
    description: "Rural and Urban water supply project.",
    image: "/images/modi-bridge-walk.jpeg",
    highlights: ["PHED", "Water Supply", "120 Cr"],
  },
  {
    id: 4,
    title: "Construction of Four Lane Purnia-Saharsa Road Project",
    category: "infrastructure",
    value: "Rs. 120 Cr",
    location: "Purnia-Saharsa",
    status: "Completed",
    year: "2025",
    plotSize: "Highway",
    floors: "Road Work",
    timeline: "Completed",
    budgetRange: "Government Project",
    progress: 100,
    description: "Major highway widening and paving project.",
    image: "/images/ribbon-cutting.jpeg",
    highlights: ["Completed", "120 Cr Value", "Four Lane"],
  },
  {
    id: 5,
    title: "Construction of Sub Divisional Control Room SKMCH",
    category: "commercial",
    value: "Rs. 25 Cr",
    location: "Muzaffarpur",
    status: "Completed",
    year: "2024",
    plotSize: "Commercial",
    floors: "Building",
    timeline: "Completed",
    budgetRange: "Government Project",
    progress: 100,
    description: "Construction of Sub Divisional Control Room SKMCH.",
    image: "/images/hero-bridge.jpeg",
    highlights: ["Completed", "25 Cr Value", "SKMCH"],
  },
  {
    id: 6,
    title: "Erosion protection Work from Salehpur Tundaspur",
    category: "infrastructure",
    value: "Rs. 18.5 Cr",
    location: "Gopalganj",
    status: "Completed",
    year: "2021",
    plotSize: "5.0 Km",
    floors: "Civil Work",
    timeline: "Completed",
    budgetRange: "Government Project",
    progress: 100,
    description: "Erosion protection Work from Salehpur Tundaspurchharki Km. 0.0 to Km. 5.0.",
    image: "/images/night-highway.jpeg",
    highlights: ["Completed", "Erosion Protection", "18.5 Cr"],
  }
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
  { title: "Aunta-Simriya Six Lane Project", type: "Project Gallery", image: "/images/site-highway.jpeg" },
  { title: "Gaya Dobhi Project", type: "Road Work", image: "/images/aerial-roundabout.jpeg" },
  { title: "Tata Hitachi Excavator", type: "Machinery", image: "/images/modi-bridge-walk.jpeg" },
  { title: "PHED Khagaria Water Supply", type: "Public Utility", image: "/images/ribbon-cutting.jpeg" },
  { title: "PHED Patna (Mokama) Water Supply", type: "Public Utility", image: "/images/hero-bridge.jpeg" },
  { title: "Salehpur Tundaspur Erosion Protection", type: "Civil Work", image: "/images/night-highway.jpeg" },
  { title: "Speedcrafts Mixing Plant", type: "Plant", image: "/images/site-highway.jpeg" },
  { title: "Macons Concrete Plant", type: "Plant", image: "/images/aerial-roundabout.jpeg" },
  { title: "Minor Irrigation Division Gaya", type: "Performance Certificate", image: "/images/modi-bridge-walk.jpeg" },
  { title: "Irrigation Division Pakur", type: "Performance Certificate", image: "/images/ribbon-cutting.jpeg" }
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
  { id: 1, name: "Dumper / Truck", category: "transport", specs: "Qty: 35", status: "Available", image: "/images/hero-bridge.jpeg", description: "Heavy-duty dumpers and trucks for material transport." },
  { id: 2, name: "Excavators", category: "excavator", specs: "Qty: 9", status: "On Site", image: "/images/night-highway.jpeg", description: "High-capacity excavators including Tata Hitachi models for large-scale earthwork." },
  { id: 3, name: "Transit Mixer / Miller", category: "concrete", specs: "Qty: 10", status: "Available", image: "/images/site-highway.jpeg", description: "Transit mixers for transporting ready-mix concrete to sites." },
  { id: 4, name: "Ready Mix Concrete Plants", category: "concrete", specs: "30m³ & 60m³ (Qty: 3)", status: "Available", image: "/images/aerial-roundabout.jpeg", description: "High-capacity concrete mixing plants for large infrastructure projects." },
  { id: 5, name: "Backhoe Loader", category: "jcb", specs: "Qty: 6", status: "On Site", image: "/images/modi-bridge-walk.jpeg", description: "Versatile backhoe loaders for excavation and loading operations." },
  { id: 6, name: "Motor Grader", category: "road", specs: "Qty: 4", status: "Available", image: "/images/ribbon-cutting.jpeg", description: "Motor graders for road leveling and grading operations." },
  { id: 7, name: "Hydra Crane", category: "crane", specs: "Qty: 5", status: "On Site", image: "/images/hero-bridge.jpeg", description: "Mobile hydra cranes for material handling and lifting." },
  { id: 8, name: "Steel Cutting & Bending Machine", category: "tools", specs: "Qty: 12", status: "Available", image: "/images/night-highway.jpeg", description: "Heavy-duty machines for reinforcement preparation." }
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
  "Rajnandini Construction was formed in 2013 with the objective of establishing a sustainable and continually improving construction company which is able to provide predictable and quality constructions to our clients, while concurrently fostering lasting relationships with professionals, local councils, government bodies, trade contractors, and suppliers.",
  "As building contractors and developers, Rajnandini Construction is well equipped to undertake the most technical constructions and to direct and manage the works from design to handover. Whether you require the construction only or a full design and construct package, we can manage the process and deliver you the finished product. We undertake the majority of our works up to the Rs. 719 Cr range."
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

export const completeFleet = [
  {
    "id": 1,
    "category": "BACKHOE LOADER",
    "details": "1250-BR01GM /BR01GM-1250 / BR01GM-1250 497 BACKHOE LOADER-1250 JCB JCB-3DX",
    "owner": "Self"
  },
  {
    "id": 2,
    "category": "BOLERO CAMPER",
    "details": "4313-BR01GM /BR01GM-4313 / BR01GM-4313 524 CAMPER-4313",
    "owner": "Self"
  },
  {
    "id": 3,
    "category": "BOOM PLACER",
    "details": "6047-BR01GP /BR01GP-6047 / BR01GP-6047 516 BOOM-6047",
    "owner": "Self"
  },
  {
    "id": 4,
    "category": "DG SET",
    "details": "125KVA DG-SVE125-177 / / 546 SWE91018SVE125-177 SUPERNOVA ENGINEERS LTD SVE125",
    "owner": "Self"
  },
  {
    "id": 5,
    "category": "DG SET",
    "details": "180KVA DG-1803-3929 / / 533 1803-3929 Cummins",
    "owner": "Self"
  },
  {
    "id": 6,
    "category": "DG SET",
    "details": "660KVA DG-N17E218600 / / 570 N17E218600",
    "owner": "Self"
  },
  {
    "id": 7,
    "category": "DIESEL TANKER",
    "details": "2355-BR01GD /BR01GD-2355 / BR01GD-2355 520 DIESEL TANKER-2355",
    "owner": "Self"
  },
  {
    "id": 8,
    "category": "HYDRAULIC EXCAVATOR",
    "details": "JCB/NXT-210-64167 / / 553 PUNJD21AHT3664167 JCB JCB NXT JS -215 FM",
    "owner": "Self"
  },
  {
    "id": 9,
    "category": "HYDRAULIC EXCAVATOR",
    "details": "SANY-215C-1142D8 / / 552 SY021CF1142D8 Sany SY215C-9LC",
    "owner": "Self"
  },
  {
    "id": 10,
    "category": "HYDRAULIC EXCAVATOR TATA",
    "details": "HITACHI-086333 / / 554 THEDJLL2E00086333 Tata Hitachi Tata Hitachi Ex210 LC Prime",
    "owner": "Self"
  },
  {
    "id": 11,
    "category": "HYDROULIC MOBILE CRANE",
    "details": "8372-BR01GM /BR01GM-8372 / BR01GM-8372 493 ACE FARANA 15 TON-8372 Action Constu. Equipment Ltd. F150",
    "owner": "Self"
  },
  {
    "id": 12,
    "category": "INNOVA",
    "details": "1747-BR01PL /BR01PL-1747 / BR01PL-1747 528 INNOVA-1747",
    "owner": "Self"
  },
  {
    "id": 13,
    "category": "KERB MACHINE KERB",
    "details": "MACHINE-031090 / / 568 AIN16469TN3031090 Apollo KLM120",
    "owner": "Self"
  },
  {
    "id": 14,
    "category": "MINI TANDEM ROLLER",
    "details": "2012-HR11P /HR11P-2012 / HR11P-2012 502 MINI TANDEM-2012 Case",
    "owner": "Self"
  },
  {
    "id": 15,
    "category": "MOTOR GRADER GRADER",
    "details": "4180D-RNC / / 550 4180D-9G0457 LIUGONG 4180D",
    "owner": "Self"
  },
  {
    "id": 16,
    "category": "PLANT HM",
    "details": "001 / / 532 HM PLANT 160 TPH Marini",
    "owner": "Self"
  },
  {
    "id": 17,
    "category": "PLANT RMC",
    "details": "001 / / 530 RMC BATHING PLANT (60 M3/H) Schwing Stettter",
    "owner": "Self"
  },
  {
    "id": 18,
    "category": "PLANT WMM",
    "details": "001 / / 531 WMM PLANT 120 TPH Macons",
    "owner": "Self"
  },
  {
    "id": 19,
    "category": "SCORPIO",
    "details": "1747-BR21AH /BR21AH-1747 / BR21AH-1747 519 SCORPIO N-1747 Mahindra Ltd. SCORPIO N D MT 2WD Z6 7S",
    "owner": "Self"
  },
  {
    "id": 20,
    "category": "SENSOR PAVER VOGELE",
    "details": "PAVER-22448655 / / 567 14823589/22448655 Vogele Super-1800-3",
    "owner": "Self"
  },
  {
    "id": 21,
    "category": "TANDEM ROLLER TANDEM",
    "details": "ROLLER-201215 / / 563 H21805201215 HAMM",
    "owner": "Self"
  },
  {
    "id": 22,
    "category": "TIPPER",
    "details": "1750-UP38AT /UP38AT-1750 / UP38AT-1750 481 TIPPER 1750 Tata Motor Ltd.",
    "owner": "Self"
  },
  {
    "id": 23,
    "category": "TIPPER",
    "details": "1751-UP38AT /UP38AT-1751 / UP38AT-1751 482 TIPPER 1751 Tata Motor Ltd.",
    "owner": "Self"
  },
  {
    "id": 24,
    "category": "TIPPER",
    "details": "1752-UP38AT /UP38AT-1752 / UP38AT-1752 483 TIPPER 1752 Tata Motor Ltd.",
    "owner": "Self"
  },
  {
    "id": 25,
    "category": "TIPPER",
    "details": "1753-UP38AT /UP38AT-1753 / UP38AT-1753 484 TIPPER 1753 Tata Motor Ltd.",
    "owner": "Self"
  },
  {
    "id": 26,
    "category": "TIPPER",
    "details": "1754-UP38AT /UP38AT-1754 / UP38AT-1754 485 TIPPER 1754 Tata Motor Ltd.",
    "owner": "Self"
  },
  {
    "id": 27,
    "category": "TIPPER",
    "details": "1755-UP38AT /UP38AT-1755 / UP38AT-1755 486 TIPPER 1755 Tata Motor Ltd.",
    "owner": "Self"
  },
  {
    "id": 28,
    "category": "TIPPER",
    "details": "4720-BR01GF /BR01GF-4720 / BR01GF-4720 469 TIPPER 4720 Tata Motor Ltd.",
    "owner": "Self"
  },
  {
    "id": 29,
    "category": "TIPPER",
    "details": "6627-BR01GL /BR01GL-6627 / BR01GL-6627 59 TIPPER-6627 Bharat Benz BHARATBENZ 3528C 8X4 BSVI-5",
    "owner": "Self"
  },
  {
    "id": 30,
    "category": "TIPPER",
    "details": "6628-BR01GL /BR01GL-6628 / BR01GL-6628 467 TIPPER-6628 Bharat Benz BHARATBENZ 3528C 8X4 BSVI-5",
    "owner": "Self"
  },
  {
    "id": 31,
    "category": "TRACTOR WATER TANKER TRACTOR WATER",
    "details": "TANKER-861F2 / / 566 3100ELS131261861F2 SONALIKA SONALIKA Di 35",
    "owner": "Self"
  },
  {
    "id": 32,
    "category": "TRANSIT MIXTURE",
    "details": "0464-HR69E /HR69E-0464 / HR69E-0464 513 TM-0464",
    "owner": "Self"
  },
  {
    "id": 33,
    "category": "TRANSIT MIXTURE",
    "details": "2246-HR69E /HR69E-2246 / HR69E-2246 512 TM-2246",
    "owner": "Self"
  },
  {
    "id": 34,
    "category": "TRANSIT MIXTURE",
    "details": "3152-HR69E /HR69E-3152 / HR69E-3152 511 TM-3152",
    "owner": "Self"
  },
  {
    "id": 35,
    "category": "TRANSIT MIXTURE",
    "details": "6695-GJ16X /GJ16X-6695 / GJ16X-6695 508 TM-6695",
    "owner": "Self"
  },
  {
    "id": 36,
    "category": "TRANSIT MIXTURE",
    "details": "9262-JH12C /JH12C-9262 / JH12C-9262 509 TM-9262",
    "owner": "Self"
  },
  {
    "id": 37,
    "category": "TRANSIT MIXTURE",
    "details": "9274-PB65AS /PB65AS-9274 / PB65AS-9274 510 TM 9274",
    "owner": "Self"
  },
  {
    "id": 38,
    "category": "WHEEL LOADER",
    "details": "3827-HR11P /HR11P-3827 / HR11P-3827 503 WHEEL LOADER-3827 Liugong India Pvt. Ltd. CLG848H",
    "owner": "Self"
  },
  {
    "id": 39,
    "category": "YODHA PICKUP",
    "details": "0908-BR01GL /BR01GL-0908 / BR01GL-0908 527 BOLERO 0908",
    "owner": "Self"
  },
  {
    "id": 40,
    "category": "BACKHOE LOADER",
    "details": "0279-GJ09DA /GJ09DA-0279 / GJ09DA-0279 494 BACKHOE LOADER-0279 Escort Ltd Construction Escort Digmax II",
    "owner": "Hired"
  },
  {
    "id": 41,
    "category": "BACKHOE LOADER",
    "details": "0471-GJ09DA /GJ09DA-0471 / GJ09DA-0471 495 BACKHOE LOADER-0471 Monitou",
    "owner": "Hired"
  },
  {
    "id": 42,
    "category": "BACKHOE LOADER",
    "details": "0490-GJ09DA /GJ09DA-0490 / GJ09DA-0490 496 BACKHOE LOADER-0490 Monitou",
    "owner": "Hired"
  },
  {
    "id": 43,
    "category": "BITUMEN BROWSER",
    "details": "8483-BR28GA /BR28GA-8483 / BR28GA-8483 517 BITUMEN-8483",
    "owner": "Hired"
  },
  {
    "id": 44,
    "category": "BOLERO",
    "details": "0391-BR29PA /BR29PA-0391 / BR29PA-0391 522 BOLERO-0391",
    "owner": "Hired"
  },
  {
    "id": 45,
    "category": "BOLERO",
    "details": "1046-BR01PG /BR01PG-1046 / BR01PG-1046 523 BOLERO-1046",
    "owner": "Hired"
  },
  {
    "id": 46,
    "category": "BOLERO",
    "details": "1966-GJ02DM /GJ02DM-1966 / GJ02DM-1966 521 BOLERO-1966",
    "owner": "Hired"
  },
  {
    "id": 47,
    "category": "BOLERO CAMPER",
    "details": "3987-GJ09BB /GJ09BB-3987 / GJ09BB-3987 525 CAMPER-3987",
    "owner": "Hired"
  },
  {
    "id": 48,
    "category": "BOLERO CAMPER",
    "details": "7437-UP54BT /UP54BT-7437 / UP54BT-7437 526 CAMPER-7423",
    "owner": "Hired"
  },
  {
    "id": 49,
    "category": "DG SET",
    "details": "20KVA DG-26697 / / 537 P3P8AC26697 Mahindra P3P8AC26697",
    "owner": "Hired"
  },
  {
    "id": 50,
    "category": "DG SET",
    "details": "20KVA DG-27429 / / 541 P3S8AC27429 Mahindra P3S8AC27429",
    "owner": "Hired"
  },
  {
    "id": 51,
    "category": "DG SET",
    "details": "25KVA DG-0600077 / / 543 0600077 Kirloskar 600077",
    "owner": "Hired"
  },
  {
    "id": 52,
    "category": "DG SET",
    "details": "25KVA DG-49K275 / / 539 JC/WC/25/KRL/49K275 Kirloskar 49K275",
    "owner": "Hired"
  },
  {
    "id": 53,
    "category": "DG SET",
    "details": "25KVA DG-E/3605650 / / 538 E-3605650 Greaves E-3605650",
    "owner": "Hired"
  },
  {
    "id": 54,
    "category": "DG SET",
    "details": "25KVA DG-G25E4 / / 542 E-3032353/AEGPG25E4 Escort E-3032353/AEGPG25E4",
    "owner": "Hired"
  },
  {
    "id": 55,
    "category": "DG SET",
    "details": "30KVA DG-47.3001/0600169 / / 545 47.3001/0600169 Kirloskar 47.3001/0600169",
    "owner": "Hired"
  },
  {
    "id": 56,
    "category": "DG SET",
    "details": "30KVA DG-49K364 /30KVA- / 30KVA- 540 JC/WC/30/KRL/49K364 Kirloskar 49K364",
    "owner": "Hired"
  },
  {
    "id": 57,
    "category": "DG SET",
    "details": "58.5KVA DG-34K125 / / 536 JC/WC/58.5/TP/34K125 Kirloskar 34K125",
    "owner": "Hired"
  },
  {
    "id": 58,
    "category": "DG SET",
    "details": "62KVA DG-09900027 /62KVA DG- / 62KVA DG- 544 09900027 Kirloskar 9900027",
    "owner": "Hired"
  },
  {
    "id": 59,
    "category": "ERTIGA",
    "details": "2513-JH09BH /JH09BH-2513 / JH09BH-2513 121 ERTIGA 2513",
    "owner": "Hired"
  },
  {
    "id": 60,
    "category": "HYDRA",
    "details": "0134-GJ09DA /GJ09DA-0134 / GJ09DA-0134 487 HYDRA 0134 Escort Ltd Construction HYDRA 14",
    "owner": "Hired"
  },
  {
    "id": 61,
    "category": "HYDRA",
    "details": "0373-GJ09DA /GJ09DA-0373 / GJ09DA-0373 488 HYDRA-0373 Escort Ltd Construction HYDRA 14",
    "owner": "Hired"
  },
  {
    "id": 62,
    "category": "HYDRA",
    "details": "6545-BR01GJ /BR01GJ-6545 / BR01GJ-6545 571 HYDRA-6545 Escort",
    "owner": "Hired"
  },
  {
    "id": 63,
    "category": "HYDRAULIC EXCAVATOR EXCAVATOR",
    "details": "LIUGONG-00414 / / 558 LGI921DZELN900414 Liugong Liugong 921",
    "owner": "Hired"
  },
  {
    "id": 64,
    "category": "HYDRAULIC EXCAVATOR",
    "details": "HYUNDAI-210-0005241 / / 560 HYNDN633PE0005241 HYUNDAI HYUNDAI-210",
    "owner": "Hired"
  },
  {
    "id": 65,
    "category": "HYDRAULIC EXCAVATOR",
    "details": "SANY-210C-000755 / / 555 22SY210C000755 Sany SY210C-9",
    "owner": "Hired"
  },
  {
    "id": 66,
    "category": "HYDRAULIC EXCAVATOR TATA",
    "details": "HITACHI-000347 / / 559 THEDC0L0E00000347 Tata Hitachi Tata Hitachi Zaxis-220",
    "owner": "Hired"
  },
  {
    "id": 67,
    "category": "HYDRAULIC EXCAVATOR TATA",
    "details": "HITACHI-00068677 / / 556 THEDJLL0J00068677 Tata Hitachi Tata Hitachi Ex210 Super",
    "owner": "Hired"
  },
  {
    "id": 68,
    "category": "HYDRAULIC EXCAVATOR TATA",
    "details": "HITACHI-57644 / / 557 SP20-57644 Tata Hitachi Tata Hitachi Ex200 LC",
    "owner": "Hired"
  },
  {
    "id": 69,
    "category": "MINI TRUCK",
    "details": "1709-BR25GA /BR25GA-1709 / BR25GA-1709 518 MINI TRUCK-1709 Tata Motor Ltd. Tata LPt 1109",
    "owner": "Hired"
  },
  {
    "id": 70,
    "category": "SOIL COMPACTOR",
    "details": "0302-GJ09DA /GJ09DA-0302 / GJ09DA-0302 498 SOIL COMPACTOR-0302 WIRTGEN INDIA PVT LTD 311",
    "owner": "Hired"
  },
  {
    "id": 71,
    "category": "SOIL COMPACTOR",
    "details": "0597-GJ09DA /GJ09DA-0597 / GJ09DA-0597 499 SOIL COMPACTOR-0597 AMMAN APOLLO INDIA PVT LTD ARS110.2",
    "owner": "Hired"
  },
  {
    "id": 72,
    "category": "SOIL COMPACTOR DYNAPAC",
    "details": "ROLLER-0318 / / 562 10200154EJE005017*0318 DYNAPAC DYNAPAC CA255",
    "owner": "Hired"
  },
  {
    "id": 73,
    "category": "SOIL COMPACTOR LIUGONG",
    "details": "ROLLER-6C0163 / / 561 LGI611ZZJRN6C0163 Liugong",
    "owner": "Hired"
  },
  {
    "id": 74,
    "category": "TIPPER",
    "details": "7567-GJ09AU /GJ09AU-7567 / GJ09AU-7567 472 TIPPER 7567 Ashok Leyland UJ3525/52 T TIP",
    "owner": "Hired"
  },
  {
    "id": 75,
    "category": "TIPPER",
    "details": "7625-GJ09AU /GJ09AU-7625 / GJ09AU-7625 477 TIPPER-7625 Eicher Eicher pro 6035T L TB BSVI",
    "owner": "Hired"
  },
  {
    "id": 76,
    "category": "TIPPER",
    "details": "7651-GJ09AU /GJ09AU-7651 / GJ09AU-7651 475 TIPPER 7651 Eicher Eicher pro 6035T L TB BSVI",
    "owner": "Hired"
  },
  {
    "id": 77,
    "category": "TIPPER",
    "details": "7700-GJ09AU /GJ09AU-7700 / GJ09AU-7700 478 TIPPER-7700 Eicher",
    "owner": "Hired"
  },
  {
    "id": 78,
    "category": "TIPPER",
    "details": "7702-GJ09AU /GJ09AU-7702 / GJ09AU-7702 474 TIPPER-7702 Ashok Leyland UJ3525/52 T TIP",
    "owner": "Hired"
  },
  {
    "id": 79,
    "category": "TIPPER",
    "details": "7793-GJ09AU /GJ09AU-7793 / GJ09AU-7793 480 TIPPER-7793 Ashok Leyland",
    "owner": "Hired"
  },
  {
    "id": 80,
    "category": "TIPPER",
    "details": "7794-GJ09AU /GJ09AU-7794 / GJ09AU-7794 479 TIPPER-7794 Ashok Leyland",
    "owner": "Hired"
  },
  {
    "id": 81,
    "category": "TIPPER",
    "details": "7914-GJ09AU /GJ09AU-7914 / GJ09AU-7914 476 TIPPER-7914 Ashok Leyland UJ3525/52 T TIP",
    "owner": "Hired"
  },
  {
    "id": 82,
    "category": "TIPPER",
    "details": "8135-GJ09AU /GJ09AU-8135 / GJ09AU-8135 473 TIPPER 8135 Eicher Eicher pro 6035T L BB BSVI",
    "owner": "Hired"
  },
  {
    "id": 83,
    "category": "TIPPER",
    "details": "8313-GJ09AU /GJ09AU-8313 / GJ09AU-8313 470 TIPPER 8313 Eicher Eicher pro 6035T L BB BSVI",
    "owner": "Hired"
  },
  {
    "id": 84,
    "category": "TIPPER",
    "details": "GJ09AU 8306 /GJ09AU 8306 / GJ09AU 8306 471 TIPPER 8306 Eicher Eicher pro 6035T L BB BSVI",
    "owner": "Hired"
  },
  {
    "id": 85,
    "category": "TRACTOR WATER TANKER",
    "details": "4931-BR29GA /BR29GA-4931 / BR29GA-4931 506 WATER TANKER 4931 SONALIKA SONALIKA Di 35",
    "owner": "Hired"
  },
  {
    "id": 86,
    "category": "TRAILER",
    "details": "3289-NL01N /NL01N-3289 / NL01N-3289 491 TRAILER 3289",
    "owner": "Hired"
  },
  {
    "id": 87,
    "category": "TRAILER",
    "details": "8932-NL02Q /NL02Q-8932 / NL02Q-8932 490 TRAILER 8932",
    "owner": "Hired"
  },
  {
    "id": 88,
    "category": "TRAILER",
    "details": "9723-UP53BT /UP53BT-9723 / UP53BT-9723 492 TRAILER 9723",
    "owner": "Hired"
  },
  {
    "id": 89,
    "category": "TRANSIT MIXTURE",
    "details": "1075-HR38AG /HR38AG-1075 / HR38AG-1075 514 TM-1075",
    "owner": "Hired"
  },
  {
    "id": 90,
    "category": "TRANSIT MIXTURE",
    "details": "3859-HR38AE /HR38AE-3859 / HR38AE-3859 515 TM-3859",
    "owner": "Hired"
  },
  {
    "id": 91,
    "category": "WATER TANKER",
    "details": "0410-BR02AA /BR02AA-0410 / BR02AA-0410 505 TANKER 0410",
    "owner": "Hired"
  },
  {
    "id": 92,
    "category": "WATER TANKER",
    "details": "4010-UP53BT /UP53BT-4010 / UP53BT-4010 507 TANKER 4010",
    "owner": "Hired"
  },
  {
    "id": 93,
    "category": "WATER TANKER",
    "details": "7423-JH09G /JH09G-7423 / JH09G-7423 504 WATER TANKER 7423",
    "owner": "Hired"
  }
];
