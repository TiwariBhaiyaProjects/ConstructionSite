"use client";
// RESPONSIBILITY: Renders the completed projects page hero.

import Link from "next/link";
import { Home, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { APP_URLS } from "@/lib/app_urls";

export default function CompletedProjectsHero() {
  return (
    <section className="relative py-24 md:py-32 bg-brand-dark overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero-bridge.jpeg')] bg-cover bg-center opacity-30 mix-blend-overlay scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
      
      <div className="container-custom relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <nav className="flex items-center gap-2 text-white/60 mb-8 text-sm font-medium tracking-wide">
            <Link href={APP_URLS.HOME} className="hover:text-brand-primary flex items-center gap-1 transition-colors">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <span>/</span>
            <span className="text-brand-primary">Completed Projects</span>
          </nav>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <Layers className="w-4 h-4 text-brand-primary" />
            <span className="text-white text-sm font-semibold tracking-widest uppercase">Our Masterpieces</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-xl leading-tight">
            Completed <span className="text-brand-primary">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
            A showcase of our successfully delivered infrastructure and real estate works.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
