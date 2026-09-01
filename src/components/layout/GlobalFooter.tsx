import Link from "next/link";
import Image from "next/image";
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
} from "lucide-react";
import { companyInfo, navLinks } from "./layout_constants";
import ScrollToTopButton from "./ScrollToTopButton";
import { APP_URLS } from "@/lib/app_urls";

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

const quickLinks = navLinks;

export default function GlobalFooter() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-20 pb-10 relative overflow-hidden font-sans border-t-[4px] border-brand-primary">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          {/* 1. Brand & About */}
          <div className="space-y-6">
            <Link href={APP_URLS.HOME} className="inline-flex items-center gap-3 group">
              <Image 
                src="/images/rc_logo.png" 
                alt="Rajnandini Construction" 
                width={80} 
                height={80}
                className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_15px_rgba(232,185,35,0.4)]" 
              />
              <div>
                <h2 className="text-xl font-extrabold text-white tracking-tight uppercase leading-none">Rajnandini</h2>
                <p className="text-brand-primary text-xs font-bold tracking-widest uppercase mt-1">Construction</p>
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
                      default: return 'bg-brand-primary text-zinc-900 border-brand-primary hover:opacity-80';
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

          <div className="lg:pl-8">
            <h3 className="text-brand-primary font-bold text-base uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="group flex items-center text-sm transition-colors hover:text-brand-primary"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-zinc-700 transition-transform group-hover:translate-x-1 group-hover:text-brand-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Details */}
          <div>
            <h3 className="text-brand-primary font-bold text-base uppercase tracking-wider mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">{companyInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-sm hover:text-brand-primary transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-sm hover:text-brand-primary transition-colors">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
            
            <div className="mt-6 p-4 rounded-xl bg-zinc-900 border border-brand-primary/20">
              <p className="text-xs text-brand-primary mb-1 font-semibold uppercase tracking-wider">Working Hours</p>
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
            <Link href={APP_URLS.PRIVACY_POLICY} className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href={APP_URLS.TERMS_OF_SERVICE} className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </footer>
  );
}
