import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  Clock,
  ExternalLink,
  Facebook,
  Home,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Truck,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import EstimateForm from "@/components/EstimateForm";
import Layout from "@/components/layout/Layout";
import { companyInfo, contactSubjects, socialLinks } from "@/data/companyData";
import { motion } from "framer-motion";

const socialIconMap = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

const Contact = () => {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(
    "Hi, I want to discuss a construction project."
  )}`;

  const contactCards = [
    {
      icon: MapPin,
      title: "Office Address",
      content: companyInfo.address,
      link: "#map",
    },
    {
      icon: Phone,
      title: "Call Now",
      content: companyInfo.phone,
      link: `tel:${companyInfo.phone}`,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: companyInfo.whatsapp,
      link: whatsappUrl,
    },
    {
      icon: Mail,
      title: "Email",
      content: companyInfo.email,
      link: `mailto:${companyInfo.email}`,
    },
  ];

  return (
    <Layout>
      <section className="relative py-24 md:py-32 bg-[#0A1428] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/modi-nitish.jpeg')] bg-cover bg-center opacity-30 mix-blend-overlay scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428] via-[#0A1428]/80 to-transparent" />
        
        <div className="container-custom relative z-10 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <nav className="flex items-center gap-2 text-white/60 mb-8 text-sm font-medium tracking-wide">
              <Link to="/" className="hover:text-[#E8B923] flex items-center gap-1 transition-colors">
                <Home className="w-4 h-4" />
                Home
              </Link>
              <span>/</span>
              <span className="text-[#E8B923]">Contact</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <Phone className="w-4 h-4 text-[#E8B923]" />
              <span className="text-white text-sm font-semibold tracking-widest uppercase">Reach Out</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-xl leading-tight">
              Get in <span className="text-[#E8B923]">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
              Share your project requirement. We will contact you for a site visit,
              package selection, accurate quotation, and the next steps.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1428] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bridge.jpeg')] bg-cover bg-center opacity-5 mix-blend-overlay" />
        <div className="container-custom max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <div className="mb-8">
                  <span className="text-[#E8B923] font-bold text-sm uppercase tracking-widest border-b-2 border-[#E8B923] pb-1">
                    Enquiry Form
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-6">
                    Tell us about your project
                  </h2>
                  <p className="text-white/70 mt-4 leading-relaxed">
                    This form is designed for construction leads: mobile number,
                    city, plot size, floors, budget and requirement message.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 relative z-10">
                  <EstimateForm source="Contact page" buttonText="Send Enquiry →" />
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-extrabold text-white mb-8">Contact Information</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {contactCards.map((card, index) => (
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} key={card.title}>
                    <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 h-full rounded-2xl group">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-[#E8B923]/20 rounded-xl flex items-center justify-center mb-5 border border-[#E8B923]/30 group-hover:scale-110 transition-transform">
                          <card.icon className="w-6 h-6 text-[#E8B923]" />
                        </div>
                        <h3 className="font-bold text-white mb-2">{card.title}</h3>
                        <a
                          href={card.link}
                          target={card.link.startsWith("http") ? "_blank" : undefined}
                          rel={card.link.startsWith("http") ? "noreferrer" : undefined}
                          className="text-sm text-white/70 hover:text-[#E8B923] transition-colors line-clamp-2"
                        >
                          {card.content}
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Card className="bg-[#E8B923] border border-[#E8B923] mb-8 rounded-2xl shadow-[0_10px_30px_rgba(232,185,35,0.2)]">
                <CardContent className="p-8">
                  <Clock className="w-10 h-10 text-[#0A1428] mb-5" />
                  <h3 className="text-xl font-extrabold text-[#0A1428] mb-2">Working Hours</h3>
                  <p className="text-[#0A1428]/80 font-semibold">{companyInfo.workingHours}</p>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="flex-1 bg-white hover:bg-gray-100 text-[#0A1428] font-bold rounded-xl h-14 shadow-xl hover:scale-105 transition-all">
                  <a href={`tel:${companyInfo.phone}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button asChild size="lg" className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl h-14 shadow-xl hover:scale-105 transition-all border-none">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-14">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="bg-gray-50 border border-gray-100 shadow-md hover:shadow-xl transition-all rounded-3xl h-full">
                <CardContent className="p-8">
                  <BriefcaseBusiness className="w-12 h-12 text-[#0A1428] mb-6" />
                  <h3 className="text-2xl font-extrabold text-[#0A1428] mb-4">Career / Join Us</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Engineers, supervisors, contractors and skilled workers can
                    contact us for suitable site work opportunities.
                  </p>
                  <Button asChild variant="outline" className="w-full rounded-full border-[#0A1428] text-[#0A1428] hover:bg-[#0A1428] hover:text-white transition-all h-12">
                    <a href={`mailto:${companyInfo.email}`}>Send Profile</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Card className="bg-gray-50 border border-gray-100 shadow-md hover:shadow-xl transition-all rounded-3xl h-full">
                <CardContent className="p-8">
                  <Truck className="w-12 h-12 text-[#E8B923] mb-6" />
                  <h3 className="text-2xl font-extrabold text-[#0A1428] mb-4">Vendor / Partner</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Cement, steel, electrical, plumbing, tiles, paint and
                    machinery vendors can share partnership details.
                  </p>
                  <Button asChild variant="outline" className="w-full rounded-full border-[#E8B923] text-[#0A1428] hover:bg-[#E8B923] hover:text-[#0A1428] transition-all h-12 bg-transparent">
                    <a href={whatsappUrl} target="_blank" rel="noreferrer">
                      Partner With Us
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Card className="bg-[#0A1428] text-white shadow-xl rounded-3xl h-full relative overflow-hidden border-none">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8B923]/20 blur-3xl rounded-full" />
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-extrabold mb-6">Common enquiry topics</h3>
                  <div className="flex flex-wrap gap-3">
                    {contactSubjects.slice(0, 8).map((subject) => (
                      <span
                        key={subject}
                        className="rounded-lg bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-semibold border border-white/10"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid lg:grid-cols-[1fr_320px] gap-8">
            <div id="map" className="rounded-3xl overflow-hidden h-[400px] shadow-2xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8947654321!2d85.3239!3d25.5941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM1JzM4LjgiTiA4NcKwMTknMjYuMCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rajnandini Construction Location"
              />
            </div>

            <Card className="bg-gray-50 border border-gray-100 shadow-xl rounded-3xl h-full">
              <CardContent className="p-8">
                <h3 className="text-xl font-extrabold text-[#0A1428] mb-6 border-b border-gray-200 pb-4">Social Media</h3>
                <div className="flex flex-col gap-4">
                  {socialLinks.map((social) => {
                    const SocialIcon =
                      socialIconMap[social.icon as keyof typeof socialIconMap] ??
                      ExternalLink;

                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 rounded-xl bg-white px-5 py-4 text-sm font-bold text-gray-700 transition-all shadow-sm hover:shadow-md hover:scale-105 border border-gray-100 hover:border-[#E8B923] hover:text-[#0A1428]"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#0A1428]/5 flex items-center justify-center">
                          <SocialIcon className="w-4 h-4 text-[#E8B923]" />
                        </div>
                        {social.name}
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
