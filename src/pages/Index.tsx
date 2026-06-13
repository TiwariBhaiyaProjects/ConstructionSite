import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Building2,
  Calculator,
  CheckCircle,
  Clock,
  Construction,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  TrendingUp,
  Youtube,
  Home,
  Briefcase,
  Users,
  FileText,
  HelpCircle,
  Image,
  Package,
  Calendar,
  Zap,
  ThumbsUp,
  Truck,
  HardHat,
  PenTool,
  Ruler,
  Droplets,
  Wifi,
  Sun,
  Wind,
  Smartphone,
  ChevronRight,
  Quote,
  Award as Trophy,
  HeartHandshake,
  Globe,
  Clock as TimeIcon,
  Sparkles,
  MoveRight,
  Play,
  ZoomIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import EstimateForm from "@/components/EstimateForm";
import Layout from "@/components/layout/Layout";
import { useState, useEffect, type SyntheticEvent } from "react";
import { motion } from "framer-motion";

// ============================================
// COMPLETE DATA - HIGH PROFILE CONSTRUCTION COMPANY
// ============================================

const companyInfo = {
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

const landingImages = {
  hero: "/images/modi-bridge-walk.jpeg",
  home: "/images/night-highway.jpeg",
  commercial: "/images/modi-waving.jpeg",
  interior: "/images/ribbon-cutting.jpeg",
  site: "/images/team-members.jpeg",
  planning: "/images/hero-bridge.jpeg",
  smart: "/images/site-highway.jpeg",
  avatar: "/images/modi-nitish.jpeg",
};

const stats = [
  { value: "250+", label: "Projects Completed", icon: "building" },
  { value: "10+", label: "Years Experience", icon: "clock" },
  { value: "99%", label: "Client Satisfaction", icon: "star" },
  { value: "150+", label: "Happy Families", icon: "users" },
  { value: "25+", label: "Expert Engineers", icon: "hardhat" },
  { value: "50+", label: "Awards Won", icon: "trophy" },
];

const services = [
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

const projects = [
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

const liveProjects = [
  { title: "Ranchi Luxury Duplex", location: "Kanka, Ranchi", progress: 75, week: "Week 24", update: "First floor slab completed. Plastering work in progress. Electrical conduit work started." },
  { title: "Hazaribagh Premium Villa", location: "Near City Center", progress: 45, week: "Week 16", update: "Ground floor walls completed. First floor shuttering work ongoing. Material delivery scheduled." },
  { title: "Jamshedpur Commercial Hub", location: "Bistupur", progress: 30, week: "Week 12", update: "Foundation completed. Ground floor column work in progress. Steel reinforcement ongoing." },
];

const processSteps = [
  { step: "01", title: "Consultation & Site Visit", description: "Free site assessment, requirement analysis, and initial budget discussion.", duration: "1-2 Days", icon: "users" },
  { step: "02", title: "Design & 3D Presentation", description: "Architectural planning, Vastu compliance, and 3D walkthrough of your dream home.", duration: "7-10 Days", icon: "pen" },
  { step: "03", title: "Detailed BOQ & Agreement", description: "Transparent cost breakup with material specifications and payment schedule.", duration: "3-5 Days", icon: "file" },
  { step: "04", title: "Material Procurement", description: "Premium quality materials from branded suppliers with GST invoices.", duration: "5-7 Days", icon: "truck" },
  { step: "05", title: "Construction Phase", description: "Quality execution with weekly progress reports and site photos.", duration: "3-12 Months", icon: "hardhat" },
  { step: "06", title: "Quality Check & Handover", description: "Third-party quality audit, snag list resolution, and final handover.", duration: "7-10 Days", icon: "check" },
];

const materials = [
  { category: "Cement", brands: "UltraTech, ACC, Birla Super", quality: "OPC 53 Grade", warranty: "7 Years" },
  { category: "Steel/TMT Bars", brands: "Tata Tiscon, JSW Neosteel, SAIL", quality: "Fe 550/600", warranty: "10 Years" },
  { category: "Bricks & Blocks", brands: "Fly Ash Bricks, AAC Blocks", quality: "Class A", warranty: "Lifetime" },
  { category: "Electrical", brands: "Havells, Polycab, Anchor, Legrand", quality: "Copper Wiring", warranty: "5 Years" },
  { category: "Plumbing", brands: "Supreme, Ashirvad, Prince, Jaquar", quality: "CPVC/UPVC", warranty: "10 Years" },
  { category: "Paints & Finishes", brands: "Asian Paints, Berger, Dulux", quality: "Premium Emulsion", warranty: "5 Years" },
  { category: "Tiles & Marble", brands: "Kajaria, Somany, Nitco, RAK", quality: "Vitrified/Marble", warranty: "10 Years" },
  { category: "Sanitary & Bathware", brands: "Jaquar, Hindware, Cera, Kohler", quality: "Premium", warranty: "5 Years" },
];

const testimonials = [
  { name: "Rahul Sharma", project: "Duplex Home, Ranchi", quote: "Best construction company in Jharkhand! Transparent pricing, timely delivery, and exceptional quality. They exceeded our expectations.", rating: 5, image: "/images/modi-bridge-walk.jpeg", date: "January 2024" },
  { name: "Priya Singh", project: "G+1 Villa, Hazaribagh", quote: "Very professional team. They completed our dream home 2 months before deadline. The 3D design was exactly as built.", rating: 5, image: "/images/night-highway.jpeg", date: "March 2024" },
  { name: "Amit Kumar", project: "Office Space, Jamshedpur", quote: "Excellent commercial construction. Great attention to detail and safety standards. Highly recommended!", rating: 5, image: "/images/modi-waving.jpeg", date: "December 2023" },
  { name: "Neha Gupta", project: "Penthouse, Dhanbad", quote: "The interior design team did magic with our space. Premium finishes and smart home integration is superb.", rating: 5, image: "/images/ribbon-cutting.jpeg", date: "February 2024" },
];

const packages = [
  { id: "basic", name: "Basic Package", price: "₹1,200/sqft", bestFor: "Budget-friendly homes", features: ["Standard finishes", "Basic electrical", "Cement flooring", "2 Years warranty"], color: "bg-gray-50" },
  { id: "standard", name: "Standard Package", price: "₹1,800/sqft", bestFor: "Most Popular - Modern homes", features: ["Premium finishes", "Modular kitchen", "Vitrified tiles", "5 Years warranty", "False ceiling", "3D design"], color: "bg-white", popular: true },
  { id: "premium", name: "Premium Package", price: "₹2,500/sqft", bestFor: "Luxury & Smart homes", features: ["Luxury finishes", "Smart home ready", "Italian marble", "10 Years warranty", "Home automation", "Landscaping"], color: "bg-gray-50" },
  { id: "luxury", name: "Luxury Package", price: "Custom", bestFor: "Ultra-premium villas", features: ["Designer finishes", "Fully automated", "Premium marble", "15 Years warranty", "Swimming pool", "Elevator"], color: "bg-gradient-to-r from-yellow-50 to-amber-50" },
];

const blogPosts = [
  { id: 1, title: "10 Tips for Building Your Dream Home", category: "Tips & Advice", excerpt: "Essential guide for first-time home builders. Learn about budgeting, materials, and timeline management.", image: "/images/team-members.jpeg", date: "Dec 15, 2024", readTime: "5 min" },
  { id: 2, title: "Understanding Construction Costs in 2024", category: "Pricing Guide", excerpt: "Complete breakdown of material and labor costs. Know where your money goes.", image: "/images/hero-bridge.jpeg", date: "Dec 10, 2024", readTime: "7 min" },
  { id: 3, title: "Vastu Tips for Modern Homes", category: "Vastu Shastra", excerpt: "Balance modern architecture with traditional Vastu principles for positive energy.", image: "/images/site-highway.jpeg", date: "Dec 5, 2024", readTime: "4 min" },
];

const faqs = [
  { q: "How long does it take to build a G+1 home?", a: "Typically 6-8 months including planning, approvals, and construction. Timeline depends on plot size and complexity." },
  { q: "Do you provide home loan assistance?", a: "Yes, we have tie-ups with leading banks for home loans. We provide all necessary documentation for loan approval." },
  { q: "What warranties do you offer?", a: "Structural warranty: 10 years, Material warranty: 5-10 years depending on product, Workmanship: 5 years." },
  { q: "Can I visit ongoing sites?", a: "Absolutely! We encourage clients to visit our live projects to see quality and workmanship firsthand." },
  { q: "Do you handle government approvals?", a: "Yes, we handle all municipal approvals, building permits, and compliance certificates." },
];

const awards = [
  { name: "Best Construction Company - Jharkhand 2024", organization: "Realty Excellence Awards", year: "2024", icon: "trophy" },
  { name: "Customer Choice Award", organization: "Housing.com", year: "2023", icon: "award" },
  { name: "Safety Excellence Award", organization: "National Safety Council", year: "2023", icon: "shield" },
];

const team = [
  { name: "Er. Rajnandini Singh", role: "Founder & Principal Architect", experience: "18+ Years", qualification: "B.Arch, M.Tech (IIT)", image: landingImages.avatar },
  { name: "Er. Amit Verma", role: "Chief Engineer", experience: "15+ Years", qualification: "B.Tech Civil, MBA", image: landingImages.avatar },
  { name: "Ar. Priya Sharma", role: "Senior Architect", experience: "12+ Years", qualification: "B.Arch, LEED Certified", image: landingImages.avatar },
];

const galleryCategories = [
  { name: "Exterior Designs", count: 24, image: landingImages.home },
  { name: "Interior Designs", count: 36, image: landingImages.interior },
  { name: "Kitchen & Wardrobes", count: 18, image: landingImages.smart },
  { name: "3D Visualizations", count: 42, image: landingImages.planning },
];

const heroImageUrl = landingImages.hero;
const fallbackImage = landingImages.site;

const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
  const image = event.currentTarget;
  image.onerror = null;
  image.src = fallbackImage;
};

// ============================================
// COMPONENT STARTS HERE
// ============================================

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hello! I'm interested in getting a free construction estimate for my dream project. Please share the details."
  )}`;

  const filteredProjects = activeFilter === "All" ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <Layout>
      {/* ========== 1. HERO BANNER - FULL SCREEN PREMIUM ========== */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-28 md:pt-32 pb-16">
        {/* Background Video/Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: `url("${heroImageUrl}"), url("${fallbackImage}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1428]/95 via-[#0A1428]/85 to-[#0A1428]/70" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E8B923' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <div className="container-custom relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex max-w-full flex-wrap items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full mb-8 shadow-lg shadow-black/20">
                <ShieldCheck className="w-5 h-5 text-[#E8B923]" />
                <span className="text-white font-semibold tracking-wide">Trusted Construction Partner</span>
                <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                <span className="text-white/80 text-sm">Since {companyInfo.established}</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6 drop-shadow-2xl">
                Build Your Dream
                <span className="text-[#E8B923] block mt-2 drop-shadow-lg">With Trust & Excellence</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8 leading-relaxed drop-shadow-md">
                Premium residential & commercial construction, renovation, and interior solutions across Jharkhand. 
                250+ projects delivered with 99% client satisfaction.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Button size="lg" className="bg-[#E8B923] hover:bg-[#D4A017] text-[#0A1428] px-8 py-7 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_8px_30px_rgba(232,185,35,0.4)]" asChild>
                  <Link to="/calculator"><Calculator className="mr-2 w-5 h-5" /> Free Estimate</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white/50 !bg-white/10 backdrop-blur-md !text-white hover:!bg-white hover:!text-[#0A1428] px-8 py-7 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle className="mr-2 w-5 h-5" /> WhatsApp</a>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={landingImages.avatar} onError={handleImageError} className="w-10 h-10 rounded-full border-2 border-[#0A1428] shadow-lg" alt={`Client ${i}`} />
                  ))}
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#E8B923] text-[#E8B923]" />)}
                  </div>
                  <span className="text-white font-medium text-sm">500+ Google Reviews</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Form Card - Glassmorphism */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/20 relative overflow-hidden"
            >
              {/* Glass Reflection */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              <div className="text-center mb-6 relative z-10">
                <h2 className="text-3xl font-extrabold text-white mb-2">Get Free Estimate</h2>
                <p className="text-white/80 text-sm">Share your project details, we'll prepare a detailed BOQ</p>
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 relative z-10 shadow-inner">
                <EstimateForm source="Home hero" buttonText="Get Quote Now →" compact={false} />
              </div>
              <p className="text-xs text-center text-white/60 mt-5 font-medium relative z-10">No spam. Response within 24 hours</p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ========== 2. MARQUEE TRUST BANNER ========== */}
      <div className="bg-[#E8B923] py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {["✓ 10+ Years Excellence", "✓ 250+ Projects Delivered", "✓ 99% Client Satisfaction", "✓ ISO 9001:2015 Certified", "✓ Lifetime Structural Warranty", "✓ 24/7 Client Support"].map((text, i) => (
            <span key={i} className="mx-8 text-[#0A1428] font-semibold">{text}</span>
          ))}
        </div>
      </div>

      {/* ========== 3. STATS COUNTER SECTION ========== */}
      <section className="py-20 bg-[#0A1428]">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group hover:transform hover:-translate-y-2 transition-all duration-300 p-6 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 backdrop-blur-sm"
              >
                <div className="text-5xl font-extrabold text-[#E8B923] mb-3 group-hover:scale-110 transition-transform drop-shadow-[0_0_15px_rgba(232,185,35,0.4)]">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 4. SERVICES SECTION - WITH ICONS & FEATURES ========== */}
      <section className="py-24 bg-[#F8F6F0]">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#E8B923] font-semibold text-sm uppercase tracking-wider border-b-2 border-[#E8B923] pb-2">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1428] mt-6 mb-4">Comprehensive Construction Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">From concept to completion, we handle everything with precision and care</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group border border-white/20 shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden bg-white/70 backdrop-blur-xl rounded-[2rem] transition-all duration-500 hover:-translate-y-3 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/10 pointer-events-none"></div>
                  <div className="relative h-64 overflow-hidden rounded-t-[2rem]">
                    <img src={service.image} onError={handleImageError} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-6 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                      {service.category}
                    </div>
                  </div>
                  <CardContent className="p-8 relative z-10">
                    <h3 className="text-2xl font-extrabold text-[#0A1428] mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="text-[11px] font-bold uppercase tracking-wider bg-[#0A1428]/5 text-[#0A1428] px-3 py-1.5 rounded-md border border-[#0A1428]/10">✓ {feature}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-6 border-t border-gray-200/50">
                      <span className="text-[#E8B923] font-black text-lg">{service.price}</span>
                      <Link to="/services" className="text-[#0A1428] font-bold hover:text-[#E8B923] transition-colors inline-flex items-center gap-1 uppercase tracking-wider text-sm group-hover:translate-x-1 duration-300">
                        Know More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-[#0A1428] hover:bg-[#1a2a4a] text-white rounded-full px-8 py-6 text-lg">
              <Link to="/services">View All Services <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========== 5. FEATURED PROJECTS WITH FILTER ========== */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E8B923] font-semibold text-sm uppercase tracking-wider border-b-2 border-[#E8B923] pb-2">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1428] mt-6 mb-4">Our Signature Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our finest work that speaks quality and excellence</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", "Residential", "Commercial", "Township"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#E8B923] text-[#0A1428] shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden border border-white/20 shadow-xl rounded-[2rem] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 bg-white/70 backdrop-blur-lg">
                  <div className="relative h-72 overflow-hidden rounded-t-[2rem]">
                    <img src={project.image} onError={handleImageError} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-[#0A1428]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                      {project.status}
                    </div>
                    <div className="absolute bottom-4 left-6 right-6">
                      <h3 className="text-white text-2xl font-bold mb-1">{project.title}</h3>
                      <p className="text-white/90 text-sm flex items-center gap-1.5 font-medium"><MapPin className="w-4 h-4 text-[#E8B923]" /> {project.location}</p>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-sm">
                      <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">Plot Size</span> <span className="font-bold text-[#0A1428]">{project.plotSize}</span></div>
                      <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">Floors</span> <span className="font-bold text-[#0A1428]">{project.floors}</span></div>
                      <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">Project Value</span> <span className="font-black text-[#E8B923] text-lg">{project.value}</span></div>
                      <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">Year</span> <span className="font-bold text-[#0A1428]">{project.year}</span></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-2 border-[#0A1428] text-[#0A1428] hover:bg-[#0A1428] hover:text-white rounded-full px-8 py-6">
              <Link to="/projects">View Complete Portfolio <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========== 6. GALLERY PREVIEW SECTION ========== */}
      <section className="py-24 bg-[#F8F6F0]">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E8B923] font-semibold text-sm uppercase tracking-wider border-b-2 border-[#E8B923] pb-2">Visual Gallery</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1428] mt-6 mb-4">See Our Work In Action</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real photos, 3D designs, and construction progress</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryCategories.map((cat, i) => (
              <Link key={i} to="/gallery" className="group relative overflow-hidden rounded-2xl shadow-xl">
                <img src={cat.image} onError={handleImageError} alt={cat.name} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:bg-black/50 transition-all" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{cat.name}</h3>
                  <p className="text-sm opacity-80">{cat.count} Photos</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <ZoomIn className="w-12 h-12 text-white bg-black/50 rounded-full p-2" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-[#E8B923] hover:bg-[#D4A017] text-[#0A1428] rounded-full px-8 py-6">
              <Link to="/gallery">View Full Gallery <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========== 7. WHY CHOOSE US + PROCESS + MATERIALS ========== */}
      <section className="py-24 bg-[#0A1428] text-white">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#E8B923] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Building Trust Since 2015</h2>
            <p className="text-white/70 max-w-2xl mx-auto">We combine expertise, quality materials, and transparent processes</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Process Section */}
            <div>
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-2"><Clock className="w-7 h-7 text-[#E8B923]" /> Our Process</h3>
              <div className="space-y-6">
                {processSteps.map((step, i) => (
                  <div key={i} className="flex gap-5 group hover:translate-x-2 transition-all duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-[#E8B923]/10 border border-[#E8B923]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E8B923] group-hover:text-[#0A1428] transition-all">
                      <span className="text-2xl font-bold text-[#E8B923] group-hover:text-[#0A1428]">{step.step}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{step.title}</h4>
                      <p className="text-white/60 text-sm mb-1">{step.description}</p>
                      <span className="text-[#E8B923] text-xs">{step.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials Section */}
            <div>
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-2"><Truck className="w-7 h-7 text-[#E8B923]" /> Premium Materials</h3>
              <div className="grid gap-4">
                {materials.slice(0, 6).map((m, i) => (
                  <div key={i} className="border border-white/20 rounded-xl p-5 hover:border-[#E8B923] transition-all hover:bg-white/5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-bold">{m.category}</h4>
                        <p className="text-[#E8B923] text-sm mt-1">{m.brands}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-white/50">{m.quality}</span>
                        <p className="text-sm text-white/70">{m.warranty} warranty</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link to="/materials" className="text-[#E8B923] hover:underline inline-flex items-center gap-1">View complete material list <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 8. LIVE PROJECT TRACKING ========== */}
      <section className="py-24 bg-[#F8F6F0]">
        <div className="container-custom max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E8B923] font-semibold text-sm uppercase tracking-wider">Live Updates</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1428] mt-4 mb-4">Track Your Project Progress</h2>
            <p className="text-gray-600">Real-time updates, weekly reports, and complete transparency</p>
          </div>

          <div className="space-y-6">
            {liveProjects.map((proj, i) => (
              <Card key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                <CardContent className="p-8">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#0A1428]">{proj.title}</h3>
                      <p className="text-gray-500 flex items-center gap-1"><MapPin className="w-4 h-4" /> {proj.location} • {proj.week}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-4xl font-bold text-[#E8B923]">{proj.progress}%</span>
                      <p className="text-sm text-gray-500">Complete</p>
                    </div>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full mb-4">
                    <div className="h-3 bg-[#E8B923] rounded-full transition-all duration-1000" style={{ width: `${proj.progress}%` }} />
                  </div>
                  <p className="text-gray-600 flex items-start gap-2"><span className="text-[#E8B923]">📋</span> {proj.update}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/tracking" className="text-[#0A1428] font-semibold hover:text-[#E8B923] inline-flex items-center gap-1">View all ongoing projects <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* ========== 9. PACKAGES / PRICING SECTION ========== */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E8B923] font-semibold text-sm uppercase tracking-wider">Pricing Plans</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1428] mt-4 mb-4">Choose Your Package</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Transparent pricing with no hidden costs. Pick what suits your budget</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <Card key={pkg.id} className={`relative overflow-hidden border-0 shadow-xl rounded-2xl transition-all duration-300 hover:-translate-y-2 ${pkg.popular ? 'ring-2 ring-[#E8B923] scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-[#E8B923] text-[#0A1428] px-4 py-1 text-sm font-bold rotate-45 translate-x-8 translate-y-2 w-32 text-center">
                    Popular
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-[#0A1428] mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-[#E8B923] mb-2">{pkg.price}</div>
                  <p className="text-sm text-gray-500 mb-6">{pkg.bestFor}</p>
                  <ul className="space-y-3 text-left mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-[#E8B923]" /> {feature}</li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full rounded-full ${pkg.popular ? 'bg-[#E8B923] text-[#0A1428] hover:bg-[#D4A017]' : 'bg-[#0A1428] text-white hover:bg-[#1a2a4a]'}`}>
                    <Link to="/calculator">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 10. CLIENT TESTIMONIALS WITH VIDEO ========== */}
      <section className="py-24 bg-[#F8F6F0]">
        <div className="container-custom max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E8B923] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1428] mt-4 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">Trusted by 250+ families across Jharkhand</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all">
                <div className="flex gap-4 mb-4">
                  <img src={t.image} onError={handleImageError} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-[#0A1428] text-lg">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.project}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(t.rating)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-[#E8B923] text-[#E8B923]" />)}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="w-8 h-8 text-[#E8B923]/20 absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic leading-relaxed pl-6">“{t.quote}”</p>
                </div>
                <p className="text-xs text-gray-400 mt-4">{t.date}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-2 border-[#0A1428] text-[#0A1428] hover:bg-[#0A1428] hover:text-white rounded-full">
              <Link to="/testimonials">Read More Reviews <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========== 11. AWARDS & CERTIFICATIONS ========== */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#0A1428]">Recognized For Excellence</h3>
            <p className="text-gray-500">Awards & Certifications that speak our quality</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {awards.map((award, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-[#E8B923]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Trophy className="w-10 h-10 text-[#E8B923]" />
                </div>
                <p className="font-semibold text-sm">{award.name}</p>
                <p className="text-xs text-gray-500">{award.organization} • {award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 12. BLOG / KNOWLEDGE SECTION ========== */}
      <section className="py-24 bg-[#F8F6F0]">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E8B923] font-semibold text-sm uppercase tracking-wider">Knowledge Hub</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1428] mt-4 mb-4">Construction Tips & Insights</h2>
            <p className="text-gray-600">Expert advice, latest trends, and helpful guides</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} to="/blog" className="group">
                <Card className="overflow-hidden border-0 shadow-xl rounded-2xl hover:shadow-2xl transition-all">
                  <div className="h-56 overflow-hidden">
                    <img src={post.image} onError={handleImageError} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[#E8B923] mb-2">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0A1428] mb-2 group-hover:text-[#E8B923] transition-colors">{post.title}</h3>
                    <p className="text-gray-600 text-sm">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-[#0A1428] hover:bg-[#1a2a4a] text-white rounded-full">
              <Link to="/blog">View All Articles <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========== 13. FAQ SECTION - ACCORDION STYLE ========== */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E8B923] font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1428] mt-4 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Got questions? We've got answers</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-semibold text-[#0A1428] text-lg">{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-[#E8B923] group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-gray-600 mt-4 pl-4 border-l-2 border-[#E8B923]">{faq.a}</p>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/faq" className="text-[#E8B923] hover:underline">View all FAQs →</Link>
          </div>
        </div>
      </section>

      {/* ========== 14. TEAM SECTION ========== */}
      <section className="py-24 bg-[#F8F6F0]">
        <div className="container-custom max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E8B923] font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1428] mt-4 mb-4">Meet Our Experts</h2>
            <p className="text-gray-600">Dedicated professionals behind your dream project</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <Card key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden text-center hover:-translate-y-2 transition-all">
                <img src={member.image} onError={handleImageError} alt={member.name} className="w-full h-64 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0A1428]">{member.name}</h3>
                  <p className="text-[#E8B923] text-sm mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.experience} experience</p>
                  <p className="text-gray-400 text-xs">{member.qualification}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 15. FINAL CTA WITH MAP AND CONTACT ========== */}
      <section className="py-24 bg-gradient-to-br from-[#0A1428] to-[#1a2a4a] text-white">
        <div className="container-custom max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Dream Project?</h2>
              <p className="text-xl text-white/80 mb-8">Get a free consultation and detailed estimate today. Our experts are ready to assist you.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#E8B923]" />
                  <a href={`tel:${companyInfo.phone}`} className="hover:text-[#E8B923] transition">{companyInfo.phone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#E8B923]" />
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-[#E8B923] transition">{companyInfo.email}</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#E8B923]" />
                  <span>{companyInfo.address}</span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E8B923] hover:text-[#0A1428] transition-all group">
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E8B923] hover:text-[#0A1428] transition-all group">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E8B923] hover:text-[#0A1428] transition-all group">
                  <Youtube className="w-5 h-5 group-hover:scale-110 transition" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E8B923] hover:text-[#0A1428] transition-all group">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition" />
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E8B923] hover:text-[#0A1428] transition-all group">
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition" />
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Get Free Estimate</h3>
              <EstimateForm source="Home Final CTA" buttonText="Submit Request →" />
              <p className="text-xs text-center text-white/60 mt-4">We'll respond within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 16. NEWSLETTER SUBSCRIPTION ========== */}
      <section className="py-12 bg-[#E8B923]">
        <div className="container-custom max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-[#0A1428] mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-[#0A1428]/70 mb-6">Get latest construction tips, offers, and project updates</p>
          <form className="flex flex-wrap gap-3 justify-center">
            <input type="email" placeholder="Enter your email" className="px-6 py-3 rounded-full w-80 focus:outline-none focus:ring-2 focus:ring-[#0A1428]" />
            <Button className="bg-[#0A1428] hover:bg-[#1a2a4a] text-white rounded-full px-8">Subscribe</Button>
          </form>
        </div>
      </section>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </Layout>
  );
};

export default Index;
