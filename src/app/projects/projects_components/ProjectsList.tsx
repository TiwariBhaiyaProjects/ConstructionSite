"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Ruler, Layers, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "../projects_constants";
import { projectsCategories } from "../projects_constants";
import { APP_URLS } from "@/lib/app_urls";

export default function ProjectsList() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects
    .filter((project) => project.status !== "Completed")
    .filter((project) => activeCategory === "all" || project.category === activeCategory);

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom max-w-7xl mx-auto">
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-14">
          <TabsList className="flex flex-wrap h-auto gap-3 bg-transparent justify-center">
            {projectsCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-brand-primary data-[state=active]:text-brand-dark data-[state=active]:border-brand-primary px-6 py-2.5 rounded-full border border-gray-200 text-gray-600 font-bold transition-all shadow-sm hover:shadow-md"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] rounded-[2rem] transition-all duration-500 bg-white">
                <div className="relative h-64 overflow-hidden rounded-t-[2rem]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent opacity-90" />
                  <Badge
                    className={`absolute top-5 right-5 px-3 py-1 text-xs uppercase tracking-wider font-bold ${
                      project.status === "Completed" ? "bg-green-500 hover:bg-green-600 text-white" : "bg-brand-primary hover:bg-brand-primary-hover text-brand-dark"
                    }`}
                  >
                    {project.status}
                  </Badge>
                  <div className="absolute bottom-5 left-6 right-6">
                    <p className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-extrabold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-y-5 gap-x-4 text-sm mb-8">
                    <div>
                      <span className="text-gray-400 block text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1"><MapPin className="w-3 h-3 text-brand-primary" /> Location</span>
                      <span className="font-bold text-brand-dark">{project.location}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1"><Ruler className="w-3 h-3 text-brand-primary" /> Plot Size</span>
                      <span className="font-bold text-brand-dark">{project.plotSize}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1"><Layers className="w-3 h-3 text-brand-primary" /> Floors</span>
                      <span className="font-bold text-brand-dark">{project.floors}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1"><Calendar className="w-3 h-3 text-brand-primary" /> Timeline</span>
                      <span className="font-bold text-brand-dark">{project.timeline}</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-5 mb-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Progress</span>
                      <span className="text-sm font-black text-brand-primary">
                        {project.progress}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                      <div
                        className="h-full bg-brand-primary"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Budget Range</p>
                      <p className="font-black text-brand-dark text-lg">{project.value}</p>
                    </div>
                    <Button variant="outline" asChild className="rounded-full hover:bg-brand-dark hover:text-white border-brand-dark text-brand-dark">
                      <a href={APP_URLS.CONTACT} className="flex items-center gap-1">Enquire <ArrowRight className="w-4 h-4 ml-1" /></a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
