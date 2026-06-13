import { useState } from "react";
import { Link } from "react-router-dom";
import { Camera, Home, PlayCircle, Ruler } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { designCatalog, galleryItems } from "@/data/companyData";

const Gallery = () => {
  const [activeType, setActiveType] = useState("All");
  const types = ["All", ...Array.from(new Set(galleryItems.map((item) => item.type)))];

  const filteredItems =
    activeType === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.type === activeType);

  return (
    <Layout>
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="absolute inset-0 bg-[url('/images/ribbon-cutting.jpeg')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-primary-foreground/80 mb-6 text-sm">
            <Link to="/" className="hover:text-primary-foreground flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <span>/</span>
            <span className="text-primary-foreground">Gallery</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Design Gallery & Site Photos
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl">
            Explore construction photos, completed work, before-after
            renovation ideas, drone-style project views and house design concepts.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Gallery
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Visual proof builds trust
              </h2>
            </div>
            <Tabs value={activeType} onValueChange={setActiveType}>
              <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent justify-start lg:justify-end">
                {types.map((type) => (
                  <TabsTrigger
                    key={type}
                    value={type}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full border border-border"
                  >
                    {type}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Dialog key={item.title}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden group bg-card cursor-pointer">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-secondary">
                        {item.type}
                      </Badge>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-bold text-background">{item.title}</h3>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-[90vw] p-0 overflow-hidden border-none bg-transparent shadow-none">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-contain max-h-[85vh] rounded-md"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              House Design Catalog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Popular house ideas
            </h2>
            <p className="text-muted-foreground">
              Use these concepts as a starting point. Final plans should be
              adjusted after site measurement, vastu preference, parking needs
              and budget discussion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designCatalog.map((design) => (
              <Dialog key={design.title}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden bg-card cursor-pointer group">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={design.image}
                        alt={design.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-5">
                      <Badge variant="outline" className="mb-3">
                        {design.type}
                      </Badge>
                      <h3 className="text-lg font-bold mb-2">{design.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Ruler className="w-4 h-4" />
                        {design.size}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {design.bestFor}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-[90vw] p-0 overflow-hidden border-none bg-transparent shadow-none">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-auto object-contain max-h-[85vh] rounded-md"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="bg-card">
              <CardContent className="p-6">
                <Camera className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Progress Photos</h3>
                <p className="text-muted-foreground">
                  Ongoing projects can include weekly photo updates for clients.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-6">
                <PlayCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Videos & Drone Shots</h3>
                <p className="text-muted-foreground">
                  Add real site videos and drone views here after final project
                  media is collected.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Need a design idea?</h3>
                <p className="text-primary-foreground/80 mb-5">
                  Share plot size and requirements to get plan suggestions.
                </p>
                <Button variant="secondary" asChild>
                  <Link to="/contact">Discuss Design</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
