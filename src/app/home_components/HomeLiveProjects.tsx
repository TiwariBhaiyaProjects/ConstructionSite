"use client";

import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { liveProjects } from "../home_constants";

export default function HomeLiveProjects() {
  return (
    <section className="py-24 bg-bg-light">
      <div className="container-custom max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider">Live Updates</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mt-4 mb-4">Track Your Project Progress</h2>
          <p className="text-gray-600">Real-time updates, weekly reports, and complete transparency</p>
        </div>

        <div className="space-y-6">
          {liveProjects.map((proj, i) => (
            <Card key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
              <CardContent className="p-8">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark">{proj.title}</h3>
                    <p className="text-gray-500 flex items-center gap-1"><MapPin className="w-4 h-4" /> {proj.location} • {proj.week}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-bold text-brand-primary">{proj.progress}%</span>
                    <p className="text-sm text-gray-500">Complete</p>
                  </div>
                </div>
                <div className="h-3 bg-gray-200 rounded-full mb-4">
                  <div className="h-3 bg-brand-primary rounded-full transition-all duration-1000" style={{ width: `${proj.progress}%` }} />
                </div>
                <p className="text-gray-600 flex items-start gap-2"><span className="text-brand-primary">📋</span> {proj.update}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/projects" className="text-brand-dark font-semibold hover:text-brand-primary inline-flex items-center gap-1">
            View all ongoing projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
