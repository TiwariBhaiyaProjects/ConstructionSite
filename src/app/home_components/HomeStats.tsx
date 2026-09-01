"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/companyData";

export default function HomeStats() {
  return (
    <section className="py-20 bg-brand-dark">
      <div className="container-custom max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group hover:transform hover:-translate-y-2 transition-all duration-300 p-6 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 backdrop-blur-sm"
            >
              <div className="text-5xl font-extrabold text-brand-primary mb-3 group-hover:scale-110 transition-transform drop-shadow-[0_0_15px_rgba(232,185,35,0.4)]">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm font-bold uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
