import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowUp } from "lucide-react";
import { companyInfo, navLinks } from "@/data/companyData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">
                  RC
                </span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Rajnandini</h3>
                <p className="text-sm text-muted-foreground">Construction</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Building sustainable infrastructure across Bihar since 2014. 
              We are committed to quality, safety, and timely delivery.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{companyInfo.gstin}</p>
              <p>{companyInfo.msme}</p>
              <p className="text-secondary font-semibold">{companyInfo.iso}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link to="/services#road-construction" className="hover:text-secondary transition-colors">
                  Road Construction
                </Link>
              </li>
              <li>
                <Link to="/services#bridge-infrastructure" className="hover:text-secondary transition-colors">
                  Bridge Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services#water-pipelines" className="hover:text-secondary transition-colors">
                  Water Pipelines
                </Link>
              </li>
              <li>
                <Link to="/services#building-construction" className="hover:text-secondary transition-colors">
                  Building Construction
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a 
                  href={`tel:${companyInfo.phone}`}
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-muted-foreground/20">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Rajnandini Construction. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-secondary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
