import { Link } from "react-router-dom";
import { FileText, HelpCircle, Home, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/data/companyData";

const FAQ = () => {
  return (
    <Layout>
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="absolute inset-0 bg-[url('/images/ribbon-cutting.jpeg')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-primary-foreground/80 mb-6 text-sm">
            <Link to="/" className="hover:text-primary-foreground flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <span>/</span>
            <span className="text-primary-foreground">FAQ</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl">
            Common questions about house construction cost, G+2 timelines,
            material scope, payment stages and estimate process.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Client Help
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-5">
                Clear answers before construction starts
              </h2>
              <p className="text-muted-foreground mb-6">
                A transparent FAQ page improves trust and also helps search
                engines understand your services.
              </p>
              <div className="rounded-2xl bg-muted p-6">
                <HelpCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Still confused?</h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Share plot size, floors, city and budget. The team will guide
                  you on package and next steps.
                </p>
                <Button asChild>
                  <Link to="/calculator">Get Free Estimate</Link>
                </Button>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-card">
              <CardContent className="p-6 md:p-8">
                <ShieldCheck className="w-10 h-10 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-3">Privacy Policy</h2>
                <p className="text-muted-foreground mb-4">
                  Enquiry details such as name, mobile number, city, plot size
                  and project requirement are used only to contact the client and
                  prepare project discussion or estimate.
                </p>
                <p className="text-sm text-muted-foreground">
                  Before launch, add your final legal privacy policy and cookie
                  policy as separate pages if required by your hosting or ad
                  platforms.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-6 md:p-8">
                <FileText className="w-10 h-10 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-3">Terms & Conditions</h2>
                <p className="text-muted-foreground mb-4">
                  Website estimates are indicative. Final quotation, scope,
                  material brands, payment stages, timeline and warranty terms
                  should be confirmed in a written agreement before work starts.
                </p>
                <p className="text-sm text-muted-foreground">
                  Rates may change based on site condition, transport, material
                  market, structure design, finishing choice and approvals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
