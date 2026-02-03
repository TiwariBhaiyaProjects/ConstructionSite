import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { services, companyInfo } from "@/data/companyData";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-primary-foreground/80 mb-6 text-sm">
            <Link to="/" className="hover:text-primary-foreground flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <span>/</span>
            <span className="text-primary-foreground">Services</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Services & Expertise
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            Comprehensive infrastructure solutions backed by a decade of experience
          </p>
        </div>
      </section>

      <div className="flex">
        {/* Side Navigation - Desktop */}
        <aside className="hidden lg:block w-64 shrink-0 border-r border-border bg-card sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="p-6 space-y-2">
            <h3 className="font-semibold text-foreground mb-4">Quick Navigation</h3>
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="block px-4 py-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                {service.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {services.map((service, index) => (
            <section 
              key={service.id} 
              id={service.id}
              className={`section-padding ${index % 2 === 0 ? "bg-background" : "bg-muted"}`}
            >
              <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                      {service.title}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                      {service.subtitle}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {service.stats.map((stat, i) => (
                        <div key={i} className="text-center p-4 bg-card rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-primary">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-foreground">
                          <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild>
                      <Link to="/contact">
                        Discuss Your Project
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                      />
                    </div>

                    {/* Gallery */}
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      {service.gallery.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${service.title} gallery ${i + 1}`}
                          className="rounded-lg object-cover aspect-square hover:opacity-80 transition-opacity cursor-pointer"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <a href={`tel:${companyInfo.phone}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default Services;
