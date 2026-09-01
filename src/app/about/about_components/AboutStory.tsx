import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import { companyInfo, aboutUsText } from "@/app/about/about_components/about_constants";

export default function AboutStory() {
  return (
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
            <Image
              src="/images/hero-bridge.jpeg"
              alt="Construction planning"
              width={800}
              height={600}
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
  );
}
