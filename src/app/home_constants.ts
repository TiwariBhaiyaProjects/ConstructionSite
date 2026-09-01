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
    id: 1,
    title: "Residential Construction",
    category: "Homes & Villas",
    description: "G+1, G+2, Duplex, Villas & Luxury Homes with modern elevations, Vastu compliance, and premium finishes.",
    features: ["Vastu Compliant", "Modern Elevations", "Premium Finishes", "Smart Home Ready"],
    image: landingImages.home,
    price: "₹1500/sqft onwards",
  },
  {
    id: 2,
    title: "Commercial Construction",
    category: "Business Spaces",
    description: "Offices, Showrooms, Hotels, Hospitals & Institutional Buildings with superior quality and timely delivery.",
    features: ["Earthquake Resistant", "Fire Safety", "High Ceilings", "Parking Design"],
    image: landingImages.commercial,
    price: "₹1800/sqft onwards",
  },
  {
    id: 3,
    title: "Renovation & Interior",
    category: "Makeover",
    description: "Complete home/office makeover with premium modular kitchens, wardrobes, false ceilings, and modern lighting.",
    features: ["Modular Kitchen", "False Ceiling", "Lighting Design", "Woodwork"],
    image: landingImages.interior,
    price: "₹800/sqft onwards",
  },
  {
    id: 4,
    title: "Civil Contracting",
    category: "Infrastructure",
    description: "End-to-end civil works including excavation, foundation, column-beam, slab, plastering, and finishing.",
    features: ["Quality Materials", "Timely Execution", "Labor Management", "Safety First"],
    image: landingImages.site,
    price: "Custom Quote",
  },
  {
    id: 5,
    title: "Land Survey & Planning",
    category: "Consulting",
    description: "Professional land surveying, soil testing, site analysis, and architectural planning with 3D visualizations.",
    features: ["Soil Testing", "3D Visualization", "Government Approvals", "Structural Design"],
    image: landingImages.planning,
    price: "₹50,000 onwards",
  },
  {
    id: 6,
    title: "Smart Home Integration",
    category: "Technology",
    description: "Home automation, security systems, CCTV, biometric locks, and energy-efficient lighting solutions.",
    features: ["CCTV Setup", "Smart Lighting", "Biometric Locks", "Energy Efficient"],
    image: landingImages.smart,
    price: "₹1.5L onwards",
  },
];

export const projects = [
  {
    id: 1,
    title: "Luxury Duplex Residence",
    location: "Ranchi, Jharkhand",
    plotSize: "2400 sq ft",
    floors: "G+1",
    value: "₹1.2 Cr",
    status: "Completed",
    year: "2024",
    image: landingImages.home,
    category: "Residential",
  },
  {
    id: 2,
    title: "Modern G+2 Villa",
    location: "Hazaribagh",
    plotSize: "1800 sq ft",
    floors: "G+2",
    value: "₹2.8 Cr",
    status: "Completed",
    year: "2023",
    image: "/images/aerial-roundabout.jpeg",
    category: "Residential",
  },
  {
    id: 3,
    title: "Premium Commercial Complex",
    location: "Jamshedpur",
    plotSize: "4500 sq ft",
    floors: "G+3",
    value: "₹4.5 Cr",
    status: "Ongoing",
    year: "2024",
    image: landingImages.commercial,
    category: "Commercial",
  },
  {
    id: 4,
    title: "Eco-friendly Township",
    location: "Bokaro",
    plotSize: "2 Acres",
    floors: "G+2",
    value: "₹8.5 Cr",
    status: "Upcoming",
    year: "2025",
    image: landingImages.site,
    category: "Township",
  },
  {
    id: 5,
    title: "Corporate Office Tower",
    location: "Ranchi",
    plotSize: "8000 sq ft",
    floors: "G+5",
    value: "₹12 Cr",
    status: "Completed",
    year: "2024",
    image: landingImages.planning,
    category: "Commercial",
  },
  {
    id: 6,
    title: "Luxury Penthouse",
    location: "Dhanbad",
    plotSize: "3500 sq ft",
    floors: "19th Floor",
    value: "₹3.2 Cr",
    status: "Completed",
    year: "2024",
    image: landingImages.interior,
    category: "Residential",
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
