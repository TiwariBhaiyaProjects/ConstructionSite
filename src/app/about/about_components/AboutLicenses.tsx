import { BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { contractorLicenses } from "@/app/about/about_components/about_constants";

export default function AboutLicenses() {
  return (
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
            <Card key={license.licenseNumber} className="bg-card">
              <CardContent className="p-6">
                <BadgeCheck className="w-9 h-9 text-secondary mb-4" />
                <h3 className="font-bold mb-2">{license.authority}</h3>
                <p className="text-sm font-semibold text-primary mb-1">
                  License No: {license.licenseNumber}
                </p>
                <p className="text-sm text-muted-foreground">
                  PAN Name: {license.panName} | PAN No: {license.panNumber}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
