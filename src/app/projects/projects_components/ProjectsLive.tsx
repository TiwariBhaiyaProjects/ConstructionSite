"use client";
// RESPONSIBILITY: Renders the currently active live projects section.

import { motion } from "framer-motion";
import { ArrowRight, Building2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { liveProjects } from "@/app/projects/projects_constants";
import { APP_URLS } from "@/lib/app_urls";
import Link from "next/link";

export default function ProjectsLive() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/aerial-roundabout.jpeg')] bg-cover bg-center opacity-5 mix-blend-overlay" />
      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-brand-primary font-bold text-sm uppercase tracking-widest border-b-2 border-brand-primary pb-1">
              Ongoing Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-6 mb-6 leading-tight">
              Live progress tracking
            </h2>
            <p className="text-white/80 mb-10 text-lg leading-relaxed">
              Stay updated with real-time site photos, weekly milestones, and comprehensive tracking for transparency you can trust.
            </p>
            <Button size="lg" asChild className="bg-brand-primary hover:bg-brand-primary-hover text-brand-dark font-bold rounded-full px-8 py-7 shadow-[0_8px_30px_rgba(232,185,35,0.4)] transition-all hover:scale-105">
              <Link href={APP_URLS.CONTACT} className="flex items-center gap-2">
                Estimate Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {liveProjects.slice(0, 4).map((project, index) => (
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} key={project.title}>
                <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 h-full rounded-3xl">
                  <CardContent className="p-6">
                    <Building2 className="w-10 h-10 text-brand-primary mb-4 drop-shadow-md" />
                    <h3 className="font-extrabold text-white text-lg mb-1">{project.title}</h3>
                    <p className="text-sm text-white/60 mb-5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-brand-primary" /> {project.location}
                    </p>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-white/80 font-semibold">{project.status}</span>
                        <span className="font-black text-brand-primary">
                          {project.progress}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-brand-dark/50 overflow-hidden mb-4 shadow-inner">
                        <div
                          className="h-full bg-brand-primary rounded-full"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
