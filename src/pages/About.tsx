import { Link } from "react-router-dom";
import {
  Award,
  BadgeCheck,
  Building2,
  CheckCircle,
  ClipboardCheck,
  HardHat,
  Home,
  ShieldCheck,
  Users,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  companyInfo,
  processSteps,
  teamMembers,
  vendorPartners,
  workExperience,
  aboutUsText,
  collaborativeExperience,
  contractorLicenses,
  financialTurnover,
} from "@/data/companyData";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Layout>
      <section className="relative py-24 md:py-32 bg-[#0A1428] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bridge.jpeg')] bg-cover bg-center opacity-30 mix-blend-overlay scale-105" />
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
              <span className="text-[#E8B923]">About Us</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <ShieldCheck className="w-4 h-4 text-[#E8B923]" />
              <span className="text-white text-sm font-semibold tracking-widest uppercase">Trusted since {companyInfo.established}</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-xl leading-tight">
              About <span className="text-[#E8B923]">Rajnandini</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
              A trusted construction partner focused on transparent estimates,
              quality materials, engineer-led execution and timely handover across Bihar & Jharkhand.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Company Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Building trust since {companyInfo.established}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                {aboutUsText[0]}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {aboutUsText[1]}
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {[
                  ["11+", "Years Experience"],
                  ["150+", "Projects Delivered"],
                  ["70+", "Machines & Tools"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-lg bg-muted p-4">
                    <div className="text-2xl font-bold text-primary">{value}</div>
                    <div className="text-sm text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/hero-bridge.jpeg"
                alt="Construction planning"
                className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 left-6 right-6 rounded-xl bg-card p-5 shadow-xl border">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-10 h-10 text-secondary" />
                  <div>
                    <p className="font-semibold">Quality-first execution</p>
                    <p className="text-sm text-muted-foreground">
                      Stage checks for structure, MEP and finishing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1428] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bridge.jpeg')] bg-cover bg-center opacity-5 mix-blend-overlay" />
        <div className="container-custom max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 h-full">
                <Building2 className="w-12 h-12 text-[#E8B923] mb-6 drop-shadow-md" />
                <h3 className="text-2xl font-extrabold text-white mb-4">Our Mission</h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  Deliver practical, durable and budget-aligned construction
                  solutions that help clients build their dream homes and offices with absolute confidence.
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Card className="bg-[#E8B923] border border-[#E8B923] shadow-[0_20px_50px_rgba(232,185,35,0.3)] p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 h-full">
                <ClipboardCheck className="w-12 h-12 text-[#0A1428] mb-6" />
                <h3 className="text-2xl font-extrabold text-[#0A1428] mb-4">Quality Standards</h3>
                <p className="text-[#0A1428]/90 leading-relaxed text-lg font-medium">
                  Material transparency, site supervision, stage-wise inspection
                  and clear handover checklists keep our work 100% accountable and structurally sound.
                </p>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
              <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 h-full">
                <Users className="w-12 h-12 text-[#E8B923] mb-6 drop-shadow-md" />
                <h3 className="text-2xl font-extrabold text-white mb-4">Team Approach</h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  Proprietor-led coordination, senior site engineers, skilled workers
                  and highly vetted vendor partners work seamlessly together on every single project.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Licenses & Certifications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Registered & Verified
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contractorLicenses.map((license) => (
              <Card key={license.name} className="bg-card">
                <CardContent className="p-6">
                  <BadgeCheck className="w-9 h-9 text-secondary mb-4" />
                  <h3 className="font-bold mb-2">{license.name}</h3>
                  <p className="text-sm font-semibold text-primary mb-1">
                    {license.type}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {license.authority}
                  </p>
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
                Financial Strength
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Steady Financial Turnover
              </h2>
              <div className="overflow-x-auto rounded-lg border bg-card">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Financial Year</th>
                      <th className="px-6 py-4 font-semibold text-right">Turnover</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {financialTurnover.map((item) => (
                      <tr key={item.year} className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 font-medium">{item.year}</td>
                        <td className="px-6 py-4 text-right font-bold text-primary">{item.turnover}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Partnerships
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Collaborative Experience
              </h2>
              <div className="space-y-4">
                {collaborativeExperience.map((exp) => (
                  <Card key={exp.year} className="bg-card">
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground text-xs font-bold rounded-full">
                          {exp.year}
                        </span>
                        <span className="font-bold text-primary">{exp.value}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-1">{exp.client}</h3>
                      <p className="text-sm text-muted-foreground">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Team & Work Areas
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                People and capabilities behind the work
              </h2>
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <Card key={member.name} className="bg-card">
                    <CardContent className="p-5 flex gap-4">
                      <HardHat className="w-8 h-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-bold">{member.name}</h3>
                        <p className="text-sm text-secondary font-medium">
                          {member.role}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {member.focus}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Experience Areas</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {workExperience.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">Partner / Vendor Network</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {vendorPartners.map((item) => (
                  <div key={item} className="rounded-lg bg-card p-4 border">
                    <p className="text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <Link to="/contact">Join / Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
