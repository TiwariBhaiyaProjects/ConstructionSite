import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Calculator, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ChevronDown, 
  Award,
  Home,
  Building2,
  Briefcase,
  Image,
  Package,
  FileText,
  HelpCircle,
  Users,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Company Data
const companyInfo = {
  name: "Rajnandini Construction",
  phone: "+91 98765 43210",
  email: "info@rajnandiniconstruction.com",
  iso: "ISO 9001:2015 Certified",
  whatsapp: "+919876543210",
  address: "Ranchi, Jharkhand",
};

// Navigation Links with Icons
const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "About Us", path: "/about", icon: Users },
  { name: "Services", path: "/services", icon: Building2 },
  { name: "Projects", path: "/projects", icon: Briefcase },
  { name: "Gallery", path: "/gallery", icon: Image },
  { name: "Packages", path: "/packages", icon: Package },
  { name: "Blog", path: "/blog", icon: FileText },
  { name: "FAQ", path: "/faq", icon: HelpCircle },
  { name: "Contact", path: "/contact", icon: MessageCircle },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Visible main nav items (rest in dropdown)
  const visibleNames = ["Home", "About Us", "Services", "Projects", "Gallery", "Contact"];
  const mainNavLinks = navLinks.filter(link => visibleNames.includes(link.name));
  const moreNavLinks = navLinks.filter(link => !visibleNames.includes(link.name));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // WhatsApp URL
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hello! I'm interested in construction services. Please share details."
  )}`;

  return (
    <>
      {/* ========== TOP BAR - PREMIUM WITH SOCIAL MEDIA ========== */}
      <div className={`hidden lg:block transition-all duration-300 ${
        isScrolled ? "bg-zinc-950/95 backdrop-blur-md" : "bg-zinc-950"
      } text-white/80 border-b border-[#E8B923]/20`}>
        <div className="w-full px-4 lg:px-10 mx-auto">
          <div className="flex justify-between items-center h-10 text-xs">
            {/* Left Side - Contact Info */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#E8B923] rounded-full"></div>
                <span className="tracking-wide">Trusted Since 2015</span>
              </div>
              <a 
                href={`tel:${companyInfo.phone}`} 
                className="flex items-center gap-2 hover:text-[#E8B923] transition-all duration-300 group"
              >
                <Phone className="w-3 h-3 text-[#E8B923] group-hover:scale-110 transition-transform" />
                <span className="tracking-wide">{companyInfo.phone}</span>
              </a>
              <a 
                href={`mailto:${companyInfo.email}`} 
                className="flex items-center gap-2 hover:text-[#E8B923] transition-all duration-300 group"
              >
                <Mail className="w-3 h-3 text-[#E8B923] group-hover:scale-110 transition-transform" />
                <span className="tracking-wide">{companyInfo.email}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-[#E8B923]" />
                <span className="tracking-wide">Serving Bihar & Jharkhand</span>
              </div>
            </div>

            {/* Right Side - Certifications & Social */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3 h-3 text-[#E8B923]" />
                <span className="tracking-wide">{companyInfo.iso}</span>
              </div>
              <div className="w-px h-4 bg-white/20"></div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-wider text-white/50">FOLLOW US:</span>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#1877F2] hover:opacity-80 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#E4405F] hover:opacity-80 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#FF0000] hover:opacity-80 transition-all duration-300 hover:scale-110"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:opacity-80 transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== MAIN NAVBAR - GLASS MORPHISM DESIGN ========== */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-zinc-950/90 backdrop-blur-xl shadow-2xl shadow-black/50 border-b border-[#E8B923]/30"
            : "bg-gradient-to-r from-zinc-950 to-zinc-900 border-b border-[#E8B923]/20"
        }`}
      >
        <div className="w-full px-4 lg:px-10 mx-auto">
          <div className="flex items-center justify-between h-20 lg:h-24">
            
            {/* ===== LOGO WITH ANIMATION ===== */}
            <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
              <img src="/images/rc_logo.png" alt="Rajnandini Construction" className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(232,185,35,0.4)]" />
              <div className="hidden sm:block">
                <h1 className="font-extrabold text-base md:text-lg text-white tracking-tight uppercase leading-none">
                  Rajnandini
                </h1>
                <p className="text-[10px] md:text-[11px] text-[#E8B923] font-bold tracking-widest uppercase mt-0.5">
                  Construction
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-5">
              {/* Main Navigation Links */}
              {mainNavLinks.map((link) => {
                const isActive = location.pathname === link.path;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-xs font-extrabold uppercase tracking-widest transition-all duration-300 relative py-2 ${
                      isActive
                        ? "text-[#E8B923] after:content-[''] after:absolute after:-bottom-[25px] after:left-0 after:w-full after:h-[3px] after:bg-[#E8B923] after:shadow-[0_0_8px_rgba(232,185,35,0.8)]"
                        : "text-white/80 hover:text-[#E8B923]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 transition-all duration-300 ${isActive ? "text-[#E8B923]" : "group-hover:text-[#E8B923]"}`} />
                      <span className="text-sm font-semibold uppercase tracking-wider">
                        {link.name}
                      </span>
                    </div>
                  </Link>
                );
              })}

              {/* More Dropdown with Icons */}
              {moreNavLinks.length > 0 && (
                <div 
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("more")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button 
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 ${
                      activeDropdown === "more" ? "text-[#E8B923]" : "text-white/80 hover:text-white"
                    }`}
                  >
                    <span className="text-sm font-semibold uppercase tracking-wider">More</span>
                    <ChevronDown className={`w-4 h-4 transition-all duration-300 ${activeDropdown === "more" ? "rotate-180 text-[#E8B923]" : ""}`} />
                  </button>
                  
                  {/* Dropdown Menu - Premium Design */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 transition-all duration-300 origin-top ${
                    activeDropdown === "more" 
                      ? "opacity-100 visible scale-100" 
                      : "opacity-0 invisible scale-95"
                  }`}>
                    <div className="bg-zinc-950 border border-[#E8B923]/30 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-950 border-t border-l border-[#E8B923]/30 rotate-45"></div>
                      <div className="py-2">
                        {moreNavLinks.map((link) => {
                          const isActive = location.pathname === link.path;
                          const Icon = link.icon;
                          return (
                            <Link
                              key={link.path}
                              to={link.path}
                              className={`flex items-center gap-3 px-6 py-3.5 text-sm transition-all duration-300 ${
                                isActive 
                                  ? "bg-[#E8B923]/10 text-[#E8B923]" 
                                  : "text-white/70 hover:text-white hover:bg-white/5"
                              }`}
                            >
                              <Icon className={`w-4 h-4 ${isActive ? "text-[#E8B923]" : ""}`} />
                              <span className="font-medium">{link.name}</span>
                              {isActive && (
                                <div className="ml-auto w-1.5 h-1.5 bg-[#E8B923] rounded-full"></div>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ===== RIGHT SIDE BUTTONS ===== */}
            <div className="hidden xl:flex items-center gap-2 flex-shrink-0">
              {/* WhatsApp Floating Button Style */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden 2xl:flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/20 hover:border-[#E8B923] transition-all duration-300 hover:bg-white/5"
              >
                <MessageCircle className="w-4 h-4 text-[#E8B923] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-white/80 group-hover:text-white">WhatsApp</span>
              </a>

              {/* Call Button */}
              <Button 
                asChild 
                variant="outline"
                className="border-[#E8B923]/50 text-[#E8B923] hover:bg-[#E8B923] hover:text-[#0A1428] font-semibold px-4 py-4 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-1.5 text-xs">
                  <Phone className="w-3.5 h-3.5" />
                  Call Now
                </a>
              </Button>

              {/* Primary CTA - Get Quote */}
              <Button 
                asChild 
                className="relative overflow-hidden bg-gradient-to-r from-[#E8B923] to-[#D4A017] hover:from-[#D4A017] hover:to-[#E8B923] text-[#0A1428] font-bold px-5 py-4 rounded-xl shadow-lg shadow-[#E8B923]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <Link to="/calculator" className="flex items-center gap-1.5 text-xs">
                  <Calculator className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                  <span className="tracking-wide">FREE QUOTE</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                </Link>
              </Button>
            </div>

            {/* ===== MOBILE MENU BUTTON ===== */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden relative w-12 h-12 rounded-xl text-white hover:bg-white/10 transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 rounded-xl bg-[#E8B923]/0 group-hover:bg-[#E8B923]/10 transition-all"></div>
              {isOpen ? (
                <X className="w-6 h-6 relative z-10 mx-auto" />
              ) : (
                <Menu className="w-6 h-6 relative z-10 mx-auto" />
              )}
            </button>
          </div>
        </div>

        {/* ===== MOBILE MENU - SLIDE DOWN PREMIUM DESIGN ===== */}
        <div
          className={`xl:hidden bg-gradient-to-b from-zinc-950 to-zinc-900 border-t border-[#E8B923]/20 overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="w-full px-4 lg:px-10 py-6 space-y-2">
            {/* Mobile Navigation Links */}
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl text-base font-semibold transition-all duration-300 ${
                    isActive 
                      ? "bg-gradient-to-r from-[#E8B923]/20 to-transparent text-[#E8B923] border-l-4 border-[#E8B923]" 
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-[#E8B923]" : "text-white/50"}`} />
                  {link.name}
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-[#E8B923] rounded-full animate-pulse"></div>
                  )}
                </Link>
              );
            })}

            {/* Divider */}
            <div className="my-4 pt-2">
              <div className="h-px bg-gradient-to-r from-transparent via-[#E8B923]/30 to-transparent"></div>
            </div>

            {/* Contact Info in Mobile */}
            <div className="space-y-3 px-5">
              <a 
                href={`tel:${companyInfo.phone}`} 
                className="flex items-center gap-3 text-white/70 hover:text-[#E8B923] transition-colors py-2"
              >
                <Phone className="w-4 h-4 text-[#E8B923]" />
                <span>{companyInfo.phone}</span>
              </a>
              <a 
                href={`mailto:${companyInfo.email}`} 
                className="flex items-center gap-3 text-white/70 hover:text-[#E8B923] transition-colors py-2"
              >
                <Mail className="w-4 h-4 text-[#E8B923]" />
                <span>{companyInfo.email}</span>
              </a>
              <div className="flex items-center gap-3 text-white/70 py-2">
                <Clock className="w-4 h-4 text-[#E8B923]" />
                <span>Mon-Sat: 9AM - 7PM</span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-4">
              <div className="h-px bg-gradient-to-r from-transparent via-[#E8B923]/20 to-transparent"></div>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-3 px-5 pt-2">
              <Button 
                asChild 
                className="bg-gradient-to-r from-[#E8B923] to-[#D4A017] text-[#0A1428] font-bold py-6 rounded-xl w-full group"
              >
                <Link to="/calculator" className="flex items-center justify-center gap-2">
                  <Calculator className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  GET FREE QUOTE
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-[#E8B923]/50 text-[#E8B923] hover:bg-[#E8B923] hover:text-[#0A1428] py-6 rounded-xl w-full"
              >
                <a href={`tel:${companyInfo.phone}`} className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  CALL NOW
                </a>
              </Button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 rounded-xl border border-white/20 text-white/80 hover:text-white hover:border-[#E8B923] transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#E8B923]" />
                WhatsApp Us
              </a>
            </div>

            {/* Mobile Social Links */}
            <div className="flex justify-center gap-6 pt-6 mt-2 border-t border-white/10">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:opacity-80 transition-all hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#E4405F] hover:opacity-80 transition-all hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:opacity-80 transition-all hover:scale-110">
                <Youtube className="w-6 h-6" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:opacity-80 transition-all hover:scale-110">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ===== PROGRESS BAR FOR SCROLL ===== */}
      <div 
        className="fixed top-0 left-0 z-[60] h-1 bg-gradient-to-r from-[#E8B923] to-[#D4A017] transition-all duration-300"
        style={{ width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
      />
    </>
  );
};

export default Navbar;