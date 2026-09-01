// RESPONSIBILITY: Renders the full contact details and estimate form on the About page.
"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { companyInfo } from "@/app/about/about_components/about_constants";
import HomeEstimateForm from "@/app/home_components/HomeEstimateForm";

export default function AboutContact() {
  return (
    <section className="py-24 bg-white border-t border-gray-100" id="contact">
      <div className="container-custom max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-brand-dark">Contact Us & Get Free Estimate</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Ready to start your project? Reach out to us for a consultation or request a detailed BOQ estimate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-bg-light border-none shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-primary/20 text-brand-primary rounded-full flex items-center justify-center mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Mon-Sat, 8am to 7pm</p>
              <a href={`tel:${companyInfo.phone}`} className="text-brand-primary font-bold text-lg hover:underline">{companyInfo.phone}</a>
            </CardContent>
          </Card>

          <Card className="bg-bg-light border-none shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-primary/20 text-brand-primary rounded-full flex items-center justify-center mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Drop us a line anytime</p>
              <a href={`mailto:${companyInfo.email}`} className="text-brand-primary font-bold text-lg hover:underline">{companyInfo.email}</a>
            </CardContent>
          </Card>

          <Card className="bg-bg-light border-none shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-primary/20 text-brand-primary rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">Visit Office</h3>
              <p className="text-gray-600 mb-4 text-sm">{companyInfo.address}</p>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-brand-primary font-bold hover:underline">Get Directions</a>
            </CardContent>
          </Card>
        </div>

        {/* Free Estimate Form Box */}
        <div className="bg-brand-dark text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-brand-primary/30">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-brand-primary font-semibold text-xs uppercase tracking-widest">Instant BOQ Request</span>
              <h3 className="text-3xl font-extrabold mt-2 mb-3">Request A Free Construction Estimate</h3>
              <p className="text-white/70 text-sm">Fill in your requirements below. Our engineering team will prepare a detailed cost breakdown and contact you within 24 hours.</p>
            </div>
            <div className="bg-white text-gray-900 rounded-2xl p-6 md:p-8 shadow-inner">
              <HomeEstimateForm source="About Contact Section" buttonText="Submit Estimate Request →" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
