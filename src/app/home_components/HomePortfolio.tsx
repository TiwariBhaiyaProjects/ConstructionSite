"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "./home_constants";

export default function HomePortfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = activeFilter === "All" ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-24 bg-white">
      <div className="container-custom max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider border-b-2 border-brand-primary pb-2">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mt-6 mb-4">Our Signature Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our finest work that speaks quality and excellence</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "Residential", "Commercial", "Township"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-brand-primary text-brand-dark shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border border-white/20 shadow-xl rounded-[2rem] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 bg-white/70 backdrop-blur-lg">
                <div className="relative h-72 overflow-hidden rounded-t-[2rem]">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    {project.status}
                  </div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-white text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-white/90 text-sm flex items-center gap-1.5 font-medium"><MapPin className="w-4 h-4 text-brand-primary" /> {project.location}</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-sm">
                    <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">Plot Size</span> <span className="font-bold text-brand-dark">{project.plotSize}</span></div>
                    <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">Floors</span> <span className="font-bold text-brand-dark">{project.floors}</span></div>
                    <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">Project Value</span> <span className="font-black text-brand-primary text-lg">{project.value}</span></div>
                    <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">Year</span> <span className="font-bold text-brand-dark">{project.year}</span></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects" className="inline-flex items-center px-8 py-6 rounded-full border-2 border-brand-dark text-brand-dark font-bold hover:bg-brand-dark hover:text-white transition-colors">
            View Complete Portfolio <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
