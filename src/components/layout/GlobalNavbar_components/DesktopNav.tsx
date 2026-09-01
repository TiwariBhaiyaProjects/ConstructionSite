"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { APP_URLS } from "@/lib/app_urls";
import { companyInfo } from "../layout_constants";
import { ChevronDown, MessageCircle, Phone, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DesktopNav({ navLinks, moreNavLinks }: { navLinks: any[], moreNavLinks: any[] }) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hello! I'm interested in construction services. Please share details."
  )}`;

  return (
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
        {navLinks.map((link) => {
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
    </div>
  );
}
