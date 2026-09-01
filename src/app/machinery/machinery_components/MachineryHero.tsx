"use client";
// RESPONSIBILITY: Renders the machinery page hero section.

import Link from "next/link";
import { Home } from "lucide-react";
import { APP_URLS } from "@/lib/app_urls";

export default function MachineryHero() {
  return (
    <section className="relative py-20 md:py-28 bg-brand-dark">
      <div className="absolute inset-0 bg-[url('/images/modi-waving.jpeg')] bg-cover bg-center opacity-20" />
      <div className="container-custom relative z-10 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-white/80 mb-6 text-sm">
          <Link href={APP_URLS.HOME} className="hover:text-white flex items-center gap-1">
            <Home className="w-4 h-4" />
            Home
          </Link>
          <span>/</span>
          <span className="text-white">Machinery</span>
        </nav>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Machinery Fleet
        </h1>
        <p className="text-xl text-white/80 max-w-2xl">
          State-of-the-art equipment for efficient project execution
        </p>
      </div>
    </section>
  );
}
