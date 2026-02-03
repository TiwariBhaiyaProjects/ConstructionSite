import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Clock, Construction, CheckCircle, Truck, Cog, Wrench, Ruler, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { stats, expertise, machineryStats, companyInfo } from "@/data/companyData";

const iconMap: Record<string, React.ReactNode> = {
  trending_up: <TrendingUp className="w-8 h-8" />,
  schedule: <Clock className="w-8 h-8" />,
  construction: <Construction className="w-8 h-8" />,
  verified: <CheckCircle className="w-8 h-8" />,
  local_shipping: <Truck className="w-6 h-6" />,
  precision_manufacturing: <Cog className="w-6 h-6" />,
  handyman: <Wrench className="w-6 h-6" />,
  settings: <Settings className="w-6 h-6" />,
  straighten: <Ruler className="w-6 h-6" />,
};

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold mb-6 animate-fade-in">
              {companyInfo.iso} Certified Company
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Building Sustainable{" "}
              <span className="text-secondary">Infrastructure</span>
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Rajnandini Construction - Trusted partners in road construction, water supply systems, 
              and building development across Bihar since 2014.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link to="/projects">
                  View Our Projects
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-background text-background hover:bg-background hover:text-foreground">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-8 -mt-1">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center text-primary-foreground animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-2">
                  {iconMap[stat.icon]}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm md:text-base text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                A Decade of Building Excellence
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Rajnandini Construction, under the visionary leadership of <strong className="text-foreground">Shri Raj Kishor</strong>, 
                has been at the forefront of infrastructure development in Bihar since 2014. 
                Our commitment to quality, safety, and timely delivery has earned us the trust of 
                government agencies and private clients alike.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">220Cr+</div>
                  <div className="text-sm text-muted-foreground">Project Value</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {companyInfo.gstin}
                </span>
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  {companyInfo.iso}
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
                alt="Construction site"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">Since</div>
                <div className="text-4xl font-bold text-secondary">2014</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What We Do Best
            </h2>
            <p className="text-muted-foreground">
              Specialized in infrastructure development with a focus on quality and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover-lift group cursor-pointer bg-card"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery Stats */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Fleet</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-2 mb-4">
              Modern Machinery Fleet
            </h2>
            <p className="text-primary-foreground/80">
              Equipped with state-of-the-art machinery for efficient project execution
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {machineryStats.map((item, index) => (
              <div 
                key={index}
                className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 text-center hover:bg-primary-foreground/20 transition-colors"
              >
                <div className="flex justify-center mb-3 text-secondary">
                  {iconMap[item.icon]}
                </div>
                <div className="text-3xl font-bold text-primary-foreground mb-1">{item.count}</div>
                <div className="text-sm text-primary-foreground/80">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/machinery">
                View Full Fleet
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your infrastructure vision to life with 
              our expertise and modern equipment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a href={`tel:${companyInfo.phone}`}>Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
