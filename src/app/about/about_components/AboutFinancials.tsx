import { Card, CardContent } from "@/components/ui/card";
import { financialTurnover, collaborativeExperience } from "@/data/companyData";

export default function AboutFinancials() {
  return (
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
  );
}
