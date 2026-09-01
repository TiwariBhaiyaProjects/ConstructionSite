"use client";
// RESPONSIBILITY: Renders the full-viewport hero section with background image, headline, CTAs, and embedded estimate form card.

import Link from "next/link";
import { Calculator, ShieldCheck, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import HomeEstimateForm from "@/app/home_components/HomeEstimateForm";
import { motion } from "framer-motion";
import { companyInfo } from "@/app/home_components/home_constants";
import { landingImages } from "@/app/home_components/home_constants";
import Image from "next/image";

export default function HomeHeroSection() {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hello! I'm interested in getting a free construction estimate for my dream project. Please share the details."
  )}`;

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-28 md:pt-32 pb-16">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url("${landingImages.hero}")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-dark/85 to-brand-dark/70" />
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
              <ShieldCheck className="w-5 h-5 text-brand-primary" />
              <span className="text-white font-semibold tracking-wide">Trusted Construction Partner</span>
              <span className="w-1 h-1 bg-white/50 rounded-full"></span>
              <span className="text-white/80 text-sm">Since {companyInfo.established}</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6 drop-shadow-2xl">
              Build Your Dream
              <span className="text-brand-primary block mt-2 drop-shadow-lg">With Trust & Excellence</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8 leading-relaxed drop-shadow-md">
              Leading construction company in Bihar & Jharkhand with over 10 years of excellence executing major highways, dams, civil infrastructure, and heavy earthmoving projects.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" className="bg-brand-primary hover:bg-brand-primary-hover text-brand-dark px-8 py-7 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_8px_30px_rgba(232,185,35,0.4)]" asChild>
                <Link href="/about#contact"><Calculator className="mr-2 w-5 h-5" /> Free Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/50 !bg-white/10 backdrop-blur-md !text-white hover:!bg-white hover:!text-brand-dark px-8 py-7 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg" asChild>
                <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle className="mr-2 w-5 h-5" /> WhatsApp</a>
              </Button>
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
              <HomeEstimateForm source="Home hero" buttonText="Get Quote Now →" compact={false} />
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
  );
}
