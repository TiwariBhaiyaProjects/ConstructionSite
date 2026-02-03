import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import { machinery, companyInfo } from "@/data/companyData";

const Machinery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Equipment" },
    { id: "excavator", label: "Excavators" },
    { id: "jcb", label: "JCBs" },
    { id: "tipper", label: "Tippers" },
    { id: "roller", label: "Rollers" },
  ];

  const filteredMachinery = activeCategory === "all"
    ? machinery
    : machinery.filter(m => m.category === activeCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-500";
      case "On Site":
        return "bg-primary";
      case "Maintenance":
        return "bg-secondary";
      default:
        return "bg-muted";
    }
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
            <span className="text-primary-foreground">Machinery</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Machinery Fleet
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            State-of-the-art equipment for efficient project execution
          </p>
        </div>
      </section>

      {/* Machinery Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Filter Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-10">
            <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent justify-center">
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat.id}
                  value={cat.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2 rounded-full border border-border"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Machinery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMachinery.map((item, index) => (
              <Card 
                key={item.id}
                className="overflow-hidden hover-lift group bg-card animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge 
                    className={`absolute top-3 right-3 ${getStatusColor(item.status)}`}
                  >
                    {item.status}
                  </Badge>
                </div>

                <CardContent className="p-5">
                  <h3 className="font-bold text-foreground mb-1 line-clamp-1">
                    {item.name}
                  </h3>
                  <div className="text-lg font-semibold text-primary mb-2">
                    {item.specs}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredMachinery.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No equipment found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                Need Equipment for Your Project?
              </h2>
              <p className="text-primary-foreground/80">
                We offer equipment rental services for construction projects
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Inquire Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a href={`tel:${companyInfo.phone}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Machinery;
