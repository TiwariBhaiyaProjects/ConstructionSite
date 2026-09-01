import { Award, ShieldCheck, Award as Trophy } from "lucide-react";
import { awards } from "./home_constants";

export default function HomeAwards() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "trophy": return <Trophy className="w-10 h-10 text-brand-primary" />;
      case "award": return <Award className="w-10 h-10 text-brand-primary" />;
      case "shield": return <ShieldCheck className="w-10 h-10 text-brand-primary" />;
      default: return <Trophy className="w-10 h-10 text-brand-primary" />;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-brand-dark">Recognized For Excellence</h3>
          <p className="text-gray-500">Awards & Certifications that speak our quality</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {awards.map((award, i) => (
            <div key={i} className="text-center">
              <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                {getIcon(award.icon)}
              </div>
              <p className="font-semibold text-sm">{award.name}</p>
              <p className="text-xs text-gray-500">{award.organization} • {award.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
