"use client";
// RESPONSIBILITY: Renders the featured machinery image card grid showcasing top heavy equipment.

import Image from "next/image";
import { machinery } from "@/app/machinery/machinery_constants";
import { ArrowRight } from "lucide-react";

export default function FeaturedMachinery() {
  return (
    <section className="py-24 bg-background border-b border-border/40">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider">
            Premium Assets
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4">Featured Machinery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our state-of-the-art heavy equipment fleet empowers us to deliver massive infrastructure projects with speed and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {machinery.map((item) => (
            <div 
              key={item.id}
              className="group relative bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-brand-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-muted/30">
                <Image 
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-md border ${
                    item.status === 'Available' 
                      ? 'bg-green-500/20 text-green-400 border-green-500/30'
                      : 'bg-brand-primary/20 text-brand-primary border-brand-primary/30'
                  }`}>
                    {item.status}
                  </span>
                </div>

                {/* Specs Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/10">
                    {item.specs}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-brand-primary text-xs font-bold uppercase tracking-wider mb-2">
                  {item.category}
                </p>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.name}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
