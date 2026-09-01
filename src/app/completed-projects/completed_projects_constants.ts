export const completedProjectsCategories = [
  { id: "all", label: "All Projects" },
  { id: "Highways & Roads", label: "Highways & Roads" },
  { id: "Water Supply & Irrigation", label: "Water Supply & Irrigation" },
  { id: "Bridges & Civil Infra", label: "Bridges & Civil Infra" },
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
    image: "/icon.png",
    gallery: ["/icon.png", "/icon.png", "/icon.png"]
  },
  {
    id: "bridges-structures",
    title: "Bridges & Structures",
    subtitle: "Major bridges, ROBs, and Viaducts",
    description: "Construction of major river bridges, Railway Over Bridges (ROB), Road Under Bridges (RUB), and viaducts using advanced precast pushing methods.",
    category: "Infrastructure",
    features: ["Major river bridges", "Railway Over Bridges (ROB)", "Road Under Bridges (RUB)", "Viaduct construction", "Precast pushing installation", "Heavy structural engineering"],
    stats: [{ value: "76m", label: "Span Length" }, { value: "Major", label: "Structures" }, { value: "Expert", label: "Execution" }],
    image: "/icon.png",
    gallery: ["/icon.png", "/icon.png", "/icon.png"]
  },
  {
    id: "water-supply",
    title: "Water Supply Projects",
    subtitle: "Rural and urban water supply infrastructure",
    description: "Large scale water supply projects for PHED, including elevated storage tanks, treatment plants, and distribution pipelines.",
    category: "Civil Work",
    features: ["Elevated water tanks", "Pipeline distribution networks", "Water treatment plants", "Pump house construction", "Rural water supply", "Urban water supply"],
    stats: [{ value: "120Cr", label: "Project Value" }, { value: "PHED", label: "Client" }, { value: "Tested", label: "Quality" }],
    image: "/icon.png",
    gallery: ["/icon.png", "/icon.png", "/icon.png"]
  },
  {
    id: "irrigation-canal",
    title: "Irrigation & Canal",
    subtitle: "Erosion protection and canal divisions",
    description: "Execution of erosion protection works, pond renovation, and extensive canal works for water resource departments.",
    category: "Civil Work",
    features: ["Erosion protection", "Canal excavation and lining", "Pond renovation", "Embankment strengthening", "Water resource management", "Flood protection works"],
    stats: [{ value: "18.5Cr", label: "Protection" }, { value: "Govt", label: "Client" }, { value: "Proven", label: "Record" }],
    image: "/icon.png",
    gallery: ["/icon.png", "/icon.png", "/icon.png"]
  },
  {
    id: "building-construction",
    title: "Building Construction",
    subtitle: "Commercial and institutional buildings",
    description: "Construction of control rooms, office buildings, and institutional structures with complete MEP and finishing works.",
    category: "Commercial",
    features: ["Sub-divisional control rooms", "Executive offices", "Institutional buildings", "Complete structural work", "MEP execution", "Finishing and handover"],
    stats: [{ value: "25Cr", label: "Building" }, { value: "Turnkey", label: "Delivery" }, { value: "On Time", label: "Completion" }],
    image: "/icon.png",
    gallery: ["/icon.png", "/icon.png", "/icon.png"]
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
    category: "Highways & Roads",
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
    image: "/icon.png",
    highlights: ["MORTH", "719 Cr Value", "Four Lane Highway"],
  },
  {
    id: 2,
    title: "New Construction of Four/Six Lane Road Project",
    category: "Highways & Roads",
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
    image: "/icon.png",
    highlights: ["Ganga Bridge", "348.4 Cr Value", "NH-31"],
  },
  {
    id: 3,
    title: "PHED Khagaria (Bihar) Water Supply",
    category: "Water Supply & Irrigation",
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
    image: "/icon.png",
    highlights: ["PHED", "Water Supply", "120 Cr"],
  },
  {
    id: 4,
    title: "Construction of Four Lane Purnia-Saharsa Road Project",
    category: "Highways & Roads",
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
    image: "/icon.png",
    highlights: ["Completed", "120 Cr Value", "Four Lane"],
  },
  {
    id: 5,
    title: "Construction of Sub Divisional Control Room SKMCH",
    category: "Bridges & Civil Infra",
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
    image: "/icon.png",
    highlights: ["Completed", "25 Cr Value", "SKMCH"],
  },
  {
    id: 6,
    title: "Erosion protection Work from Salehpur Tundaspur",
    category: "Water Supply & Irrigation",
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
    image: "/icon.png",
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
  { title: "Aunta-Simriya Six Lane Project", type: "Project Gallery", image: "/icon.png" },
  { title: "Gaya Dobhi Project", type: "Road Work", image: "/icon.png" },
  { title: "Tata Hitachi Excavator", type: "Machinery", image: "/icon.png" },
  { title: "PHED Khagaria Water Supply", type: "Public Utility", image: "/icon.png" },
  { title: "PHED Patna (Mokama) Water Supply", type: "Public Utility", image: "/icon.png" },
  { title: "Salehpur Tundaspur Erosion Protection", type: "Civil Work", image: "/icon.png" },
  { title: "Speedcrafts Mixing Plant", type: "Plant", image: "/icon.png" },
  { title: "Macons Concrete Plant", type: "Plant", image: "/icon.png" },
  { title: "Minor Irrigation Division Gaya", type: "Performance Certificate", image: "/icon.png" },
  { title: "Irrigation Division Pakur", type: "Performance Certificate", image: "/icon.png" }
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
  { id: 1, name: "Dumper / Truck", category: "transport", specs: "Qty: 35", status: "Available", image: "/icon.png", description: "Heavy-duty dumpers and trucks for material transport." },
  { id: 2, name: "Excavators", category: "excavator", specs: "Qty: 9", status: "On Site", image: "/icon.png", description: "High-capacity excavators including Tata Hitachi models for large-scale earthwork." },
  { id: 3, name: "Transit Mixer / Miller", category: "concrete", specs: "Qty: 10", status: "Available", image: "/icon.png", description: "Transit mixers for transporting ready-mix concrete to sites." },
  { id: 4, name: "Ready Mix Concrete Plants", category: "concrete", specs: "30m³ & 60m³ (Qty: 3)", status: "Available", image: "/icon.png", description: "High-capacity concrete mixing plants for large infrastructure projects." },
  { id: 5, name: "Backhoe Loader", category: "jcb", specs: "Qty: 6", status: "On Site", image: "/icon.png", description: "Versatile backhoe loaders for excavation and loading operations." },
  { id: 6, name: "Motor Grader", category: "road", specs: "Qty: 4", status: "Available", image: "/icon.png", description: "Motor graders for road leveling and grading operations." },
  { id: 7, name: "Hydra Crane", category: "crane", specs: "Qty: 5", status: "On Site", image: "/icon.png", description: "Mobile hydra cranes for material handling and lifting." },
  { id: 8, name: "Steel Cutting & Bending Machine", category: "tools", specs: "Qty: 12", status: "Available", image: "/icon.png", description: "Heavy-duty machines for reinforcement preparation." }
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
