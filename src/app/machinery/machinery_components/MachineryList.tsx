"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { machinery } from "@/data/companyData";
import { machineryCategories } from "../machinery_constants";

export default function MachineryList() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredMachinery = activeCategory === "all"
    ? machinery
    : machinery.filter(m => m.category === activeCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-500 text-white";
      case "On Site":
        return "bg-brand-primary text-brand-dark";
      case "Maintenance":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container-custom max-w-7xl mx-auto">
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-10">
          <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent justify-center">
            {machineryCategories.map(cat => (
              <TabsTrigger 
                key={cat.id}
                value={cat.id}
                className="data-[state=active]:bg-brand-primary data-[state=active]:text-brand-dark px-6 py-2 rounded-full border border-border transition-all"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMachinery.map((item, index) => (
            <Card 
              key={item.id}
              className="overflow-hidden group bg-card border-border shadow-md hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge 
                  className={`absolute top-3 right-3 font-bold border-none ${getStatusColor(item.status)}`}
                >
                  {item.status}
                </Badge>
              </div>

              <CardContent className="p-5">
                <h3 className="font-bold text-foreground mb-1 line-clamp-1 text-lg">
                  {item.name}
                </h3>
                <div className="text-base font-bold text-brand-primary mb-2">
                  {item.specs}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMachinery.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No equipment found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
