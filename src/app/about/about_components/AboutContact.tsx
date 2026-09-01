import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { companyInfo } from "@/data/companyData";

export default function AboutContact() {
  return (
    <section className="py-24 bg-white border-t border-gray-100" id="contact">
      <div className="container-custom max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-brand-dark">Contact Us</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Ready to start your project? Reach out to us for a consultation and free estimate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
              <a href="#" className="text-brand-primary font-bold hover:underline">Get Directions</a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
