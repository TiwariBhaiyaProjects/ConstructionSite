"use client";
// RESPONSIBILITY: Renders the main sticky navigation bar with glassmorphism. Manages scroll state, mobile menu toggle, and scroll progress bar.

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { APP_URLS } from "@/lib/app_urls";
import { Menu, X, Home, Briefcase, Image as ImageIcon, Package, Users } from "lucide-react";
import TopBar from "@/components/layout/GlobalNavbar_components/TopBar";
import DesktopNav from "@/components/layout/GlobalNavbar_components/DesktopNav";
import MobileNav from "@/components/layout/GlobalNavbar_components/MobileNav";

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
  }, [pathname]);

  return (
    <>
      {/* ========== TOP BAR - PREMIUM WITH SOCIAL MEDIA ========== */}
      <TopBar isScrolled={isScrolled} />

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
            
            {/* Desktop Navigation Component */}
            <DesktopNav navLinks={mainNavLinks} moreNavLinks={moreNavLinks} />

            {/* ===== MOBILE MENU BUTTON ===== */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden relative w-12 h-12 rounded-xl text-white hover:bg-white/10 transition-all duration-300 group ml-auto"
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
        <MobileNav navLinks={navLinks} isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>

      {/* ===== PROGRESS BAR FOR SCROLL ===== */}
      <div 
        className="fixed top-0 left-0 z-[60] h-1 bg-gradient-to-r from-brand-primary to-brand-primary-hover transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
    </>
  );
}
