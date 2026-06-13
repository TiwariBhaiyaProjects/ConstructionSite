import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  ChevronRight,
  ExternalLink,
  ArrowUp,
} from "lucide-react";
import { companyInfo, navLinks } from "@/data/companyData";
import { Button } from "@/components/ui/button";

const socialIconMap = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

const socialLinks = [
  { name: "Facebook", icon: "facebook", url: "https://facebook.com" },
  { name: "Instagram", icon: "instagram", url: "https://instagram.com" },
  { name: "YouTube", icon: "youtube", url: "https://youtube.com" },
  { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com" },
];

const quickLinks = navLinks.slice(0, 5);
const supportLinks = navLinks.slice(5);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-20 pb-10 relative overflow-hidden font-sans border-t-[4px] border-[#E8B923]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8B923]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* 1. Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img src="/images/rc_logo.png" alt="Rajnandini Construction" className="w-12 h-12 object-contain" />
              <div>
                <h2 className="text-xl font-extrabold text-white tracking-tight uppercase leading-none">Rajnandini</h2>
                <p className="text-[#E8B923] text-xs font-bold tracking-widest uppercase mt-1">Construction</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-400">
              {companyInfo.description}
            </p>
            <div className="pt-2">
              <p className="text-white font-semibold text-sm mb-3">Connect With Us</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const SocialIcon = socialIconMap[social.icon as keyof typeof socialIconMap] ?? ExternalLink;
                  
                  // Original brand colors natively
                  const getBrandColor = (iconName: string) => {
                    switch(iconName) {
                      case 'facebook': return 'bg-[#1877F2] text-white border-[#1877F2] hover:opacity-80';
                      case 'instagram': return 'bg-[#E4405F] text-white border-[#E4405F] hover:opacity-80';
                      case 'linkedin': return 'bg-[#0A66C2] text-white border-[#0A66C2] hover:opacity-80';
                      case 'youtube': return 'bg-[#FF0000] text-white border-[#FF0000] hover:opacity-80';
                      default: return 'bg-[#E8B923] text-zinc-900 border-[#E8B923] hover:opacity-80';
                    }
                  };

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className={`w-9 h-9 rounded-full transition-all duration-300 flex items-center justify-center hover:-translate-y-1 ${getBrandColor(social.icon)}`}
                    >
                      <SocialIcon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-[#E8B923] font-bold text-base uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-sm transition-colors hover:text-[#E8B923]"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-zinc-700 transition-transform group-hover:translate-x-1 group-hover:text-[#E8B923]" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="group flex items-center text-sm transition-colors hover:text-[#E8B923]">
                  <ChevronRight className="w-4 h-4 mr-2 text-zinc-700 transition-transform group-hover:translate-x-1 group-hover:text-[#E8B923]" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Support & More */}
          <div>
            <h3 className="text-[#E8B923] font-bold text-base uppercase tracking-wider mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-sm transition-colors hover:text-[#E8B923]"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-zinc-700 transition-transform group-hover:translate-x-1 group-hover:text-[#E8B923]" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/calculator" className="group flex items-center text-sm transition-colors hover:text-[#E8B923]">
                  <ChevronRight className="w-4 h-4 mr-2 text-zinc-700 transition-transform group-hover:translate-x-1 group-hover:text-[#E8B923]" />
                  Cost Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Contact Details */}
          <div>
            <h3 className="text-[#E8B923] font-bold text-base uppercase tracking-wider mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#E8B923] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">{companyInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#E8B923] mr-3 flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-sm hover:text-[#E8B923] transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#E8B923] mr-3 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-sm hover:text-[#E8B923] transition-colors">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
            
            <div className="mt-6 p-4 rounded-xl bg-zinc-900 border border-[#E8B923]/20">
              <p className="text-xs text-[#E8B923] mb-1 font-semibold uppercase tracking-wider">Working Hours</p>
              <p className="text-sm font-medium text-zinc-300">{companyInfo.workingHours}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-zinc-500">
            <Link to="/privacy-policy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="absolute bottom-8 right-8 rounded-full bg-[#E8B923] text-zinc-950 hover:bg-white hover:text-zinc-950 hover:scale-110 shadow-lg transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </footer>
  );
};

export default Footer;
