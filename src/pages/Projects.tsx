import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, ArrowRight, ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import { projects } from "@/data/companyData";

const ITEMS_PER_PAGE = 6;

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-primary-foreground/80 mb-6 text-sm">
            <Link to="/" className="hover:text-primary-foreground flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <span>/</span>
            <span className="text-primary-foreground">Projects</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Projects Portfolio
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            Explore our completed and ongoing infrastructure projects across Bihar
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Filter Tabs */}
          <Tabs value={activeCategory} onValueChange={handleCategoryChange} className="mb-10">
            <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent justify-center">
              <TabsTrigger 
                value="all"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2 rounded-full border border-border"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger 
                value="road"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2 rounded-full border border-border"
              >
                Road Projects
              </TabsTrigger>
              <TabsTrigger 
                value="water"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2 rounded-full border border-border"
              >
                Water Supply
              </TabsTrigger>
              <TabsTrigger 
                value="building"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2 rounded-full border border-border"
              >
                Building Construction
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="overflow-hidden hover-lift group bg-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
                  
                  {/* Status Badge */}
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      project.status === "Completed" 
                        ? "bg-green-500" 
                        : "bg-secondary"
                    }`}
                  >
                    {project.status}
                  </Badge>

                  {/* Project Value */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-3xl font-bold text-background">{project.value}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="icon"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how we can bring your infrastructure vision to life
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
