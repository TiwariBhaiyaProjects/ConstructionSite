import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import EstimateForm from "@/components/EstimateForm";
import Layout from "@/components/layout/Layout";
import { services, companyInfo } from "@/data/companyData";
import { motion } from "framer-motion";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation for HashRouter
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash.includes('#/services#')) {
        const serviceId = hash.split('#/services#')[1];
        const element = document.getElementById(serviceId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      } else if (location.hash) {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    };

    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, [location]);

  return (
    <Layout>
      {/* Hero Section - Ultra Premium */}
      <section className="relative py-24 md:py-32 bg-[#0A1428] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/aerial-roundabout.jpeg')] bg-cover bg-center opacity-30 mix-blend-overlay scale-105" />
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
              <span className="text-[#E8B923]">Services</span>
            </nav>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <CheckCircle className="w-4 h-4 text-[#E8B923]" />
              <span className="text-white text-sm font-semibold tracking-widest uppercase">Expert Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-xl leading-tight">
              Our <span className="text-[#E8B923]">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
              Comprehensive infrastructure solutions backed by over a decade of engineering excellence in Bihar & Jharkhand.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="flex">
        {/* Side Navigation - Desktop */}
        <aside className="hidden lg:block w-64 shrink-0 border-r border-border bg-card sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="p-6 space-y-2">
            <h3 className="font-semibold text-foreground mb-4">Quick Navigation</h3>
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services#${service.id}`}
                className="block px-4 py-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                {service.title}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {services.map((service, index) => (
            <motion.section 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              key={service.id} 
              id={service.id}
              className={`section-padding ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            >
              <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <span className="text-[#E8B923] font-black text-sm uppercase tracking-widest bg-[#0A1428]/5 px-3 py-1.5 rounded-full border border-[#0A1428]/10 mb-4 inline-block">
                      {service.title}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0A1428] mt-4 mb-6 leading-tight">
                      {service.subtitle}
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      {service.description}
                    </p>

                    {/* Stats - Glass Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                      {service.stats.map((stat, i) => (
                        <div key={i} className="text-center p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 transition-transform">
                          <div className="text-2xl font-black text-[#E8B923]">{stat.value}</div>
                          <div className="text-sm font-bold text-[#0A1428] uppercase tracking-wider mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-700 bg-gray-50/80 px-4 py-2.5 rounded-xl border border-gray-100">
                          <CheckCircle className="w-5 h-5 text-[#E8B923] flex-shrink-0" />
                          <span className="text-sm font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild size="lg" className="bg-[#0A1428] hover:bg-[#1a2a4a] text-white rounded-full px-8 py-6 font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_10px_20px_rgba(10,20,40,0.2)]">
                      <Link to="/contact">
                        Discuss Your Project
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </div>

                  {/* Image - Premium Style */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute bottom-6 left-6 z-20">
                        <div className="bg-[#E8B923] text-[#0A1428] font-bold px-4 py-2 rounded-full text-sm inline-block shadow-lg">
                          Premium {service.title}
                        </div>
                      </div>
                    </div>

                    {/* Hover Gallery */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      {service.gallery.map((img, i) => (
                        <div key={i} className="overflow-hidden rounded-xl shadow-md border border-gray-100 group">
                          <img
                            src={img}
                            alt={`${service.title} gallery ${i + 1}`}
                            className="w-full object-cover aspect-square group-hover:scale-110 group-hover:brightness-110 transition-all duration-500 cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}

          {/* CTA Section */}
          <section className="section-padding bg-primary">
            <div className="container-custom text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Contact our sales team to discuss your project requirements
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild className="hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
                  <Link to="/calculator">Get Free Estimate</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  <a href={`tel:${companyInfo.phone}`} className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>

      <section className="py-24 bg-[#0A1428] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/modi-nitish.jpeg')] bg-cover bg-center opacity-5 mix-blend-overlay" />
        <div className="container-custom max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start"
          >
            <div>
              <span className="text-[#E8B923] font-bold text-sm uppercase tracking-widest border-b-2 border-[#E8B923] pb-1">
                Service Enquiry
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-6 mb-6 leading-tight">
                Not sure which service you need?
              </h2>
              <p className="text-white/80 mb-10 text-lg leading-relaxed">
                Share your city, plot size, floors and budget. We will suggest
                the right construction service, package and next step.
              </p>
              <Button size="lg" variant="outline" asChild className="border-2 border-white/50 !bg-white/10 backdrop-blur-md !text-white hover:!bg-white hover:!text-[#0A1428] px-8 py-7 rounded-full text-lg transition-all duration-300">
                <a href={`tel:${companyInfo.phone}`}>
                  <Phone className="w-5 h-5 mr-3" />
                  Call for Guidance
                </a>
              </Button>
            </div>
            
            {/* Glassmorphic Form Card */}
            <div className="rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <div className="bg-white rounded-2xl p-6 relative z-10">
                <EstimateForm source="Services page" buttonText="Get Free Quote →" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
