import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { processSteps } from "@/data/companyData";

export default function AboutProcess() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Construction Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            From first call to handover
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <Card key={step.step} className="bg-card">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-secondary mb-3">
                  {step.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-primary p-8 md:p-10 text-primary-foreground flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Want to join as engineer, contractor or vendor?
            </h3>
            <p className="text-primary-foreground/80">
              Send your profile and work area. Our team will review suitable
              openings and partnership needs.
            </p>
          </div>
          <Button size="lg" variant="secondary" asChild>
            <a href="#contact">Join / Partner With Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
