import { Link } from "react-router-dom";
import { CheckCircle, Home, IndianRupee, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import EstimateForm from "@/components/EstimateForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { materials, packages } from "@/data/companyData";

const Packages = () => {
  return (
    <Layout>
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="absolute inset-0 bg-[url('/images/aerial-roundabout.jpeg')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-primary-foreground/80 mb-6 text-sm">
            <Link to="/" className="hover:text-primary-foreground flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <span>/</span>
            <span className="text-primary-foreground">Packages</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Construction Packages
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl">
            Clear package options help you compare budget, materials and finish
            quality before starting construction.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Choose a package for your home
            </h2>
            <p className="text-muted-foreground">
              Final cost depends on plot condition, structure design, city,
              transport, selected finishes and approval requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={pkg.id}
                className={`relative overflow-hidden bg-card ${
                  index === 1 ? "border-primary shadow-xl" : ""
                }`}
              >
                {index === 1 && (
                  <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <IndianRupee className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground mb-5">{pkg.bestFor}</p>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {pkg.displayPrice}
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    {pkg.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {pkg.inclusions.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full">
                    <Link to="/calculator">Calculate Estimate</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Material Transparency
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Materials we discuss before agreement
              </h2>
              <p className="text-muted-foreground mb-8">
                Construction clients worry most about hidden compromises. This
                section makes material brands, alternatives and quality checks
                visible from day one.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {materials.map((item) => (
                  <Card key={item.category} className="bg-card">
                    <CardContent className="p-5">
                      <ShieldCheck className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-bold mb-2">{item.category}</h3>
                      <p className="text-sm text-foreground mb-2">
                        {item.brands}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.note}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-card p-6 md:p-8 shadow-lg border">
              <h2 className="text-2xl font-bold mb-2">Get package-wise quote</h2>
              <p className="text-muted-foreground mb-6">
                Share your city, plot size, floors and budget. We will prepare a
                more practical estimate for your requirement.
              </p>
              <EstimateForm source="Packages page" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;
