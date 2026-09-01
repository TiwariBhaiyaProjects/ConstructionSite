"use client";
// RESPONSIBILITY: Renders the collapsible mobile navigation menu with slide-down animation.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_URLS } from "@/lib/app_urls";
import { companyInfo } from "@/components/layout/layout_constants";
import { Phone, Mail, Clock, Calculator, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MobileNav({ navLinks, isOpen, setIsOpen }: { navLinks: any[], isOpen: boolean, setIsOpen: (b: boolean) => void }) {
  const pathname = usePathname();

  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hello! I'm interested in construction services. Please share details."
  )}`;

  return (
    <div
      className={`xl:hidden bg-gradient-to-b from-zinc-950 to-zinc-900 border-t border-brand-primary/20 overflow-hidden transition-all duration-500 ${
        isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
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
  );
}
