import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Home,
  Layers,
  MapPin,
  Ruler,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import { projects } from "@/data/companyData";
import { motion } from "framer-motion";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "Residential", label: "Residential" },
  { id: "Commercial", label: "Commercial" },
  { id: "Township", label: "Township" },
];

const CompletedProjects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects
    .filter((project) => project.status === "Completed")
    .filter((project) => activeCategory === "all" || project.category === activeCategory);

  return (
    <Layout>
      <section className="relative py-24 md:py-32 bg-[#0A1428] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bridge.jpeg')] bg-cover bg-center opacity-30 mix-blend-overlay scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428] via-[#0A1428]/80 to-transparent" />
        
        <div className="container-custom relative z-10 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <nav className="flex items-center gap-2 text-white/60 mb-8 text-sm font-medium tracking-wide">
              <Link to="/" className="hover:text-[#E8B923] flex items-center gap-1 transition-colors">
                <Home className="w-4 h-4" />
                Home
              </Link>
              <span>/</span>
              <span className="text-[#E8B923]">Completed Projects</span>
            </nav>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <Layers className="w-4 h-4 text-[#E8B923]" />
              <span className="text-white text-sm font-semibold tracking-widest uppercase">Our Masterpieces</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-xl leading-tight">
              Completed <span className="text-[#E8B923]">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
              A showcase of our successfully delivered infrastructure and real estate works.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container-custom max-w-7xl mx-auto">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-14">
            <TabsList className="flex flex-wrap h-auto gap-3 bg-transparent justify-center">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-[#E8B923] data-[state=active]:text-[#0A1428] data-[state=active]:border-[#E8B923] px-6 py-2.5 rounded-full border border-gray-200 text-gray-600 font-bold transition-all shadow-sm hover:shadow-md"
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
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428]/90 via-[#0A1428]/30 to-transparent opacity-90" />
                    <Badge
                      className={`absolute top-5 right-5 px-3 py-1 text-xs uppercase tracking-wider font-bold bg-green-500 hover:bg-green-600 text-white`}
                    >
                      {project.status}
                    </Badge>
                    <div className="absolute bottom-5 left-6 right-6">
                      <p className="text-[#E8B923] text-xs font-bold uppercase tracking-widest mb-2">
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
                        <span className="text-gray-400 block text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1"><MapPin className="w-3 h-3 text-[#E8B923]" /> Location</span>
                        <span className="font-bold text-[#0A1428]">{project.location}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1"><Ruler className="w-3 h-3 text-[#E8B923]" /> Plot Size</span>
                        <span className="font-bold text-[#0A1428]">{project.plotSize}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1"><Layers className="w-3 h-3 text-[#E8B923]" /> Floors</span>
                        <span className="font-bold text-[#0A1428]">{project.floors}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1"><Calendar className="w-3 h-3 text-[#E8B923]" /> Year</span>
                        <span className="font-bold text-[#0A1428]">{project.year}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Budget Range</p>
                        <p className="font-black text-[#0A1428] text-lg">{project.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompletedProjects;
