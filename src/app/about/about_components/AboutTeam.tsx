// RESPONSIBILITY: Renders the leadership team, work experience history, and vendor partners.
import { HardHat, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers, workExperience, vendorPartners } from "@/app/about/about_components/about_constants";

export default function AboutTeam() {
  return (
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
                <div key={item.id} className="flex flex-col items-start gap-1 p-3 border rounded bg-card">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <span className="text-muted-foreground text-xs">{item.description} | Value: {item.value} | Year: {item.completionYear}</span>
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
  );
}
