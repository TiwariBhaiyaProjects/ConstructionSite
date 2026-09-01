"use client";
// RESPONSIBILITY: Renders the machinery page bottom call-to-action section.

import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/app/machinery/machinery_constants";
import { APP_URLS } from "@/lib/app_urls";
import Link from "next/link";

export default function MachineryCTA() {
  return (
    <section className="py-16 bg-muted">
      <div className="container-custom max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-brand-dark to-brand-dark-accent rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Need Equipment for Your Project?
            </h2>
            <p className="text-white/80">
              We offer equipment rental services for construction projects
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-brand-primary hover:bg-brand-primary-hover text-brand-dark font-bold rounded-full" asChild>
              <Link href={APP_URLS.CONTACT}>
                Inquire Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="rounded-full border-white text-white hover:bg-white hover:text-brand-dark bg-transparent"
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
  );
}
