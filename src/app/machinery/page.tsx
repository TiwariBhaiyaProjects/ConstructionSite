import MachineryHero from "./machinery_components/MachineryHero";
import FeaturedMachinery from "./machinery_components/FeaturedMachinery";
import MachineryList from "./machinery_components/MachineryList";
import MachineryCTA from "./machinery_components/MachineryCTA";

export default function MachineryPage() {
  return (
    <main>
      <MachineryHero />
      <FeaturedMachinery />
      <MachineryList />
      <MachineryCTA />
    </main>
  );
}
