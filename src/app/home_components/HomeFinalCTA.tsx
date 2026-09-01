"use client";

import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin, MessageCircle } from "lucide-react";
import HomeEstimateForm from "@/app/home_components/HomeEstimateForm";
import { companyInfo } from "@/app/home_components/home_constants";

export default function HomeFinalCTA() {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hello! I'm interested in getting a free construction estimate for my dream project. Please share the details."
  )}`;

  return (
    <section className="py-24 bg-gradient-to-br from-brand-dark to-brand-dark-accent text-white">
      <div className="container-custom max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Dream Project?</h2>
            <p className="text-xl text-white/80 mb-8">Get a free consultation and detailed estimate today. Our experts are ready to assist you.</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-primary" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-brand-primary transition">{companyInfo.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-primary" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-brand-primary transition">{companyInfo.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-primary" />
                <span>{companyInfo.address}</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all group">
                <Youtube className="w-5 h-5 group-hover:scale-110 transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all group">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition" />
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Get Free Estimate</h3>
            <HomeEstimateForm source="Home Final CTA" buttonText="Submit Request →" />
            <p className="text-xs text-center text-white/60 mt-4">We'll respond within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
