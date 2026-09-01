"use client";

import { Phone, Mail, MapPin, ShieldCheck, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { companyInfo } from "@/components/layout/layout_constants";

export default function TopBar({ isScrolled }: { isScrolled: boolean }) {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hello! I'm interested in construction services. Please share details."
  )}`;

  return (
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
  );
}
