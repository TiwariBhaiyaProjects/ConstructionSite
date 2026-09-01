"use client";

import Link from "next/link";
import { Clock, Truck, ArrowRight } from "lucide-react";
import { processSteps, materials } from "../home_constants";

export default function HomeProcessMaterials() {
  return (
    <section className="py-24 bg-brand-dark text-white">
      <div className="container-custom max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Building Trust Since 2013</h2>
          <p className="text-white/70 max-w-2xl mx-auto">We combine expertise, quality materials, and transparent processes</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Process Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-2"><Clock className="w-7 h-7 text-brand-primary" /> Our Process</h3>
            <div className="space-y-6">
              {processSteps.map((step, i) => (
                <div key={i} className="flex gap-5 group hover:translate-x-2 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary group-hover:text-brand-dark transition-all">
                    <span className="text-2xl font-bold text-brand-primary group-hover:text-brand-dark">{step.step}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{step.title}</h4>
                    <p className="text-white/60 text-sm mb-1">{step.description}</p>
                    <span className="text-brand-primary text-xs">{step.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Materials Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-2"><Truck className="w-7 h-7 text-brand-primary" /> Premium Materials</h3>
            <div className="grid gap-4">
              {materials.slice(0, 6).map((m, i) => (
                <div key={i} className="border border-white/20 rounded-xl p-5 hover:border-brand-primary transition-all hover:bg-white/5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold">{m.category}</h4>
                      <p className="text-brand-primary text-sm mt-1">{m.brands}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-white/50">{m.quality}</span>
                      <p className="text-sm text-white/70">{m.warranty} warranty</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/about" className="text-brand-primary hover:underline inline-flex items-center gap-1">
                View complete material list <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
