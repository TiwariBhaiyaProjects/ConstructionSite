"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { APP_URLS } from "@/lib/app_urls";
import { companyInfo } from "./layout_constants";
import { 
  Calculator, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ChevronDown, 
  Home,
  Briefcase,
  Image as ImageIcon,
  Package,
  Users,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Clock,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Navigation Links with Icons
const navLinks = [
  { name: "Home", path: APP_URLS.HOME, icon: Home },
  { name: "About Us", path: APP_URLS.ABOUT, icon: Users },
  { name: "Current Projects", path: APP_URLS.PROJECTS, icon: Briefcase },
  { name: "Completed", path: APP_URLS.COMPLETED_PROJECTS, icon: ImageIcon },
  { name: "Machinery", path: APP_URLS.MACHINERY, icon: Package },
];

export default function GlobalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const mainNavLinks = navLinks;
  const moreNavLinks: typeof navLinks = [];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      if (documentHeight > windowHeight) {
        setScrollProgress((scrollTop / (documentHeight - windowHeight)) * 100);
      } else {
        setScrollProgress(0);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // WhatsApp URL
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hello! I'm interested in construction services. Please share details."
  )}`;

  return (
    <>
      {/* ========== TOP BAR - PREMIUM WITH SOCIAL MEDIA ========== */}
      <div className={`hidden lg:block transition-all duration-300 ${
        isScrolled ? "bg-zinc-950/95 backdrop-blur-md" : "bg-zinc-950"
      } text-white/80 border-b border-brand-primary/20`}>
        <div className="w-full px-4 lg:px-10 mx-auto">
          <div className="flex justify-between items-center h-10 text-xs">
            {/* Left Side - Contact Info */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-brand-primary rounded-full"></div>
                <span className="tracking-wide">Trusted Since 2013</span>
              </div>
              <a 
                href={`tel:${companyInfo.phone}`} 
                className="flex items-center gap-2 hover:text-brand-primary transition-all duration-300 group"
              >
                <Phone className="w-3 h-3 text-brand-primary group-hover:scale-110 transition-transform" />
                <span className="tracking-wide">{companyInfo.phone}</span>
              </a>
              <a 
                href={`mailto:${companyInfo.email}`} 
                className="flex items-center gap-2 hover:text-brand-primary transition-all duration-300 group"
              >
                <Mail className="w-3 h-3 text-brand-primary group-hover:scale-110 transition-transform" />
                <span className="tracking-wide">{companyInfo.email}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-brand-primary" />
                <span className="tracking-wide">Serving Bihar & Jharkhand</span>
              </div>
            </div>

            {/* Right Side - Certifications & Social */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3 h-3 text-brand-primary" />
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
            ? "bg-zinc-950/90 backdrop-blur-xl shadow-2xl shadow-black/50 border-b border-brand-primary/30"
            : "bg-gradient-to-r from-zinc-950 to-zinc-900 border-b border-brand-primary/20"
        }`}
      >
        <div className="w-full px-4 lg:px-10 mx-auto">
          <div className="flex items-center justify-between h-20 lg:h-24">
            
            {/* ===== LOGO WITH ANIMATION ===== */}
            <Link href={APP_URLS.HOME} className="flex items-center gap-2 group flex-shrink-0">
              <Image 
                src="/images/rc_logo.png" 
                alt="Rajnandini Construction" 
                width={80} 
                height={80}
                className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(232,185,35,0.4)]" 
              />
              <div className="hidden sm:block">
                <h1 className="font-extrabold text-base md:text-lg text-white tracking-tight uppercase leading-none">
                  Rajnandini
                </h1>
                <p className="text-[10px] md:text-[11px] text-brand-primary font-bold tracking-widest uppercase mt-0.5">
                  Construction
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-5">
              {/* Main Navigation Links */}
              {mainNavLinks.map((link) => {
                const isActive = pathname === link.path;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`text-xs font-extrabold uppercase tracking-widest transition-all duration-300 relative py-2 ${
                      isActive
                        ? "text-brand-primary after:content-[''] after:absolute after:-bottom-[25px] after:left-0 after:w-full after:h-[3px] after:bg-brand-primary after:shadow-[0_0_8px_rgba(232,185,35,0.8)]"
                        : "text-white/80 hover:text-brand-primary"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 transition-all duration-300 ${isActive ? "text-brand-primary" : "group-hover:text-brand-primary"}`} />
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
                      activeDropdown === "more" ? "text-brand-primary" : "text-white/80 hover:text-white"
                    }`}
                  >
                    <span className="text-sm font-semibold uppercase tracking-wider">More</span>
                    <ChevronDown className={`w-4 h-4 transition-all duration-300 ${activeDropdown === "more" ? "rotate-180 text-brand-primary" : ""}`} />
                  </button>
                  
                  {/* Dropdown Menu - Premium Design */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 transition-all duration-300 origin-top ${
                    activeDropdown === "more" 
                      ? "opacity-100 visible scale-100" 
                      : "opacity-0 invisible scale-95"
                  }`}>
                    <div className="bg-zinc-950 border border-brand-primary/30 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-950 border-t border-l border-brand-primary/30 rotate-45"></div>
                      <div className="py-2">
                        {moreNavLinks.map((link) => {
                          const isActive = pathname === link.path;
                          const Icon = link.icon;
                          return (
                            <Link
                              key={link.path}
                              href={link.path}
                              className={`flex items-center gap-3 px-6 py-3.5 text-sm transition-all duration-300 ${
                                isActive 
                                  ? "bg-brand-primary/10 text-brand-primary" 
                                  : "text-white/70 hover:text-white hover:bg-white/5"
                              }`}
                            >
                              <Icon className={`w-4 h-4 ${isActive ? "text-brand-primary" : ""}`} />
                              <span className="font-medium">{link.name}</span>
                              {isActive && (
                                <div className="ml-auto w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
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
                className="group hidden 2xl:flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/20 hover:border-brand-primary transition-all duration-300 hover:bg-white/5"
              >
                <MessageCircle className="w-4 h-4 text-brand-primary group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-white/80 group-hover:text-white">WhatsApp</span>
              </a>

              {/* Call Button */}
              <Button 
                asChild 
                variant="outline"
                className="border-brand-primary/50 text-brand-primary hover:bg-brand-primary hover:text-brand-dark font-semibold px-4 py-4 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-1.5 text-xs">
                  <Phone className="w-3.5 h-3.5" />
                  Call Now
                </a>
              </Button>

              {/* Primary CTA - Get Quote */}
              <Button 
                asChild 
                className="relative overflow-hidden bg-gradient-to-r from-brand-primary to-brand-primary-hover hover:from-brand-primary-hover hover:to-brand-primary text-brand-dark font-bold px-5 py-4 rounded-xl shadow-lg shadow-brand-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <Link href={APP_URLS.CONTACT} className="flex items-center gap-1.5 text-xs">
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
              <div className="absolute inset-0 rounded-xl bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-all"></div>
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
          className={`xl:hidden bg-gradient-to-b from-zinc-950 to-zinc-900 border-t border-brand-primary/20 overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="w-full px-4 lg:px-10 py-6 space-y-2">
            {/* Mobile Navigation Links */}
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl text-base font-semibold transition-all duration-300 ${
                    isActive 
                      ? "bg-gradient-to-r from-brand-primary/20 to-transparent text-brand-primary border-l-4 border-brand-primary" 
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-brand-primary" : "text-white/50"}`} />
                  {link.name}
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
                  )}
                </Link>
              );
            })}

            {/* Divider */}
            <div className="my-4 pt-2">
              <div className="h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>
            </div>

            {/* Contact Info in Mobile */}
            <div className="space-y-3 px-5">
              <a 
                href={`tel:${companyInfo.phone}`} 
                className="flex items-center gap-3 text-white/70 hover:text-brand-primary transition-colors py-2"
              >
                <Phone className="w-4 h-4 text-brand-primary" />
                <span>{companyInfo.phone}</span>
              </a>
              <a 
                href={`mailto:${companyInfo.email}`} 
                className="flex items-center gap-3 text-white/70 hover:text-brand-primary transition-colors py-2"
              >
                <Mail className="w-4 h-4 text-brand-primary" />
                <span>{companyInfo.email}</span>
              </a>
              <div className="flex items-center gap-3 text-white/70 py-2">
                <Clock className="w-4 h-4 text-brand-primary" />
                <span>Mon-Sat: 9AM - 7PM</span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-4">
              <div className="h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"></div>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-3 px-5 pt-2">
              <Button 
                asChild 
                className="bg-gradient-to-r from-brand-primary to-brand-primary-hover text-brand-dark font-bold py-6 rounded-xl w-full group"
              >
                <Link href={APP_URLS.CONTACT} onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2">
                  <Calculator className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  GET FREE QUOTE
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-brand-primary/50 text-brand-primary hover:bg-brand-primary hover:text-brand-dark py-6 rounded-xl w-full"
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
                className="flex items-center justify-center gap-2 py-4 rounded-xl border border-white/20 text-white/80 hover:text-white hover:border-brand-primary transition-all"
              >
                <MessageCircle className="w-4 h-4 text-brand-primary" />
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
        className="fixed top-0 left-0 z-[60] h-1 bg-gradient-to-r from-brand-primary to-brand-primary-hover transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
    </>
  );
}
