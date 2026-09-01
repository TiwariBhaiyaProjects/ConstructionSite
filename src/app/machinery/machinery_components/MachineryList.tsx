"use client";

import { completeFleet } from "../machinery_constants";
import { Badge } from "@/components/ui/badge";

export default function MachineryList() {
  return (
    <section className="py-24 bg-background">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Complete Fleet Directory
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Our Massive Equipment Roster
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive list of our 90+ heavy machinery, transport vehicles, and construction equipment available on-site and in-house.
          </p>
        </div>

        <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
          <div className="overflow-x-auto max-h-[800px]">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b sticky top-0 z-10 backdrop-blur-md">
                <tr>
                  <th className="px-6 py-4 font-semibold whitespace-nowrap">Sr No</th>
                  <th className="px-6 py-4 font-semibold whitespace-nowrap">Category</th>
                  <th className="px-6 py-4 font-semibold whitespace-nowrap">Machine Details (Make / Model / Code)</th>
                  <th className="px-6 py-4 font-semibold text-center whitespace-nowrap">Owner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {completeFleet.map((item, index) => (
                  <tr 
                    key={item.id} 
                    className="hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium">{item.id}</td>
                    <td className="px-6 py-4 font-bold text-foreground whitespace-nowrap">{item.category}</td>
                    <td className="px-6 py-4 text-muted-foreground">{item.details}</td>
                    <td className="px-6 py-4 text-center">
                      <Badge variant={item.owner === 'Self' ? 'default' : 'secondary'}>
                        {item.owner}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
