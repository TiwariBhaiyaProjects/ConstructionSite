"use client";

import { Building2, ClipboardCheck, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AboutMission() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero-bridge.jpeg')] bg-cover bg-center opacity-5 mix-blend-overlay" />
      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 h-full">
              <Building2 className="w-12 h-12 text-brand-primary mb-6 drop-shadow-md" />
              <h3 className="text-2xl font-extrabold text-white mb-4">Our Mission</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                Deliver practical, durable and budget-aligned construction
                solutions that help clients build their dream homes and offices with absolute confidence.
              </p>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Card className="bg-brand-primary border border-brand-primary shadow-[0_20px_50px_rgba(232,185,35,0.3)] p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 h-full">
              <ClipboardCheck className="w-12 h-12 text-brand-dark mb-6" />
              <h3 className="text-2xl font-extrabold text-brand-dark mb-4">Quality Standards</h3>
              <p className="text-brand-dark/90 leading-relaxed text-lg font-medium">
                Material transparency, site supervision, stage-wise inspection
                and clear handover checklists keep our work 100% accountable and structurally sound.
              </p>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 h-full">
              <Users className="w-12 h-12 text-brand-primary mb-6 drop-shadow-md" />
              <h3 className="text-2xl font-extrabold text-white mb-4">Team Approach</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                Proprietor-led coordination, senior site engineers, skilled workers
                and highly vetted vendor partners work seamlessly together on every single project.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
