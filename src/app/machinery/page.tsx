import MachineryHero from "./machinery_components/MachineryHero";
import MachineryList from "./machinery_components/MachineryList";
import MachineryCTA from "./machinery_components/MachineryCTA";

export default function MachineryPage() {
  return (
    <main>
      <MachineryHero />
      <MachineryList />
      <MachineryCTA />
    </main>
  );
}
