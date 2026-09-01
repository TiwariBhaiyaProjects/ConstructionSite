// Home Page Constants & Data

export const landingImages = {
  hero: "/images/modi-bridge-walk.jpeg",
  home: "/images/night-highway.jpeg",
  commercial: "/images/modi-waving.jpeg",
  interior: "/images/ribbon-cutting.jpeg",
  site: "/images/team-members.jpeg",
  planning: "/images/hero-bridge.jpeg",
  smart: "/images/site-highway.jpeg",
  avatar: "/images/modi-nitish.jpeg",
};

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
    image: "/icon.png",
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
    image: "/icon.png",
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
    image: "/icon.png",
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
    image: "/icon.png",
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
    image: "/icon.png",
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

export const processSteps = [
  { step: "01", title: "Consultation & Site Visit", description: "Free site assessment, requirement analysis, and initial budget discussion.", duration: "1-2 Days", icon: "users" },
  { step: "02", title: "Design & 3D Presentation", description: "Architectural planning, Vastu compliance, and 3D walkthrough of your dream home.", duration: "7-10 Days", icon: "pen" },
  { step: "03", title: "Detailed BOQ & Agreement", description: "Transparent cost breakup with material specifications and payment schedule.", duration: "3-5 Days", icon: "file" },
  { step: "04", title: "Material Procurement", description: "Premium quality materials from branded suppliers with GST invoices.", duration: "5-7 Days", icon: "truck" },
  { step: "05", title: "Construction Phase", description: "Quality execution with weekly progress reports and site photos.", duration: "3-12 Months", icon: "hardhat" },
  { step: "06", title: "Quality Check & Handover", description: "Third-party quality audit, snag list resolution, and final handover.", duration: "7-10 Days", icon: "check" },
];

export const materials = [
  { category: "Cement", brands: "UltraTech, ACC, Birla Super", quality: "OPC 53 Grade", warranty: "7 Years" },
  { category: "Steel/TMT Bars", brands: "Tata Tiscon, JSW Neosteel, SAIL", quality: "Fe 550/600", warranty: "10 Years" },
  { category: "Bricks & Blocks", brands: "Fly Ash Bricks, AAC Blocks", quality: "Class A", warranty: "Lifetime" },
  { category: "Electrical", brands: "Havells, Polycab, Anchor, Legrand", quality: "Copper Wiring", warranty: "5 Years" },
  { category: "Plumbing", brands: "Supreme, Ashirvad, Prince, Jaquar", quality: "CPVC/UPVC", warranty: "10 Years" },
  { category: "Paints & Finishes", brands: "Asian Paints, Berger, Dulux", quality: "Premium Emulsion", warranty: "5 Years" },
  { category: "Tiles & Marble", brands: "Kajaria, Somany, Nitco, RAK", quality: "Vitrified/Marble", warranty: "10 Years" },
  { category: "Sanitary & Bathware", brands: "Jaquar, Hindware, Cera, Kohler", quality: "Premium", warranty: "5 Years" },
];

export const awards = [
  { name: "Best Construction Company - Jharkhand 2024", organization: "Realty Excellence Awards", year: "2024", icon: "trophy" },
  { name: "Customer Choice Award", organization: "Housing.com", year: "2023", icon: "award" },
  { name: "Safety Excellence Award", organization: "National Safety Council", year: "2023", icon: "shield" },
];

export const marqueeTexts = [
  "✓ Over a Decade of Excellence", 
  "✓ 11+ Major Projects Delivered", 
  "✓ Trusted Infrastructure Partner", 
  "✓ 100+ Heavy Machines", 
  "✓ Government Approved Contractor", 
  "✓ Timely Execution"
];
