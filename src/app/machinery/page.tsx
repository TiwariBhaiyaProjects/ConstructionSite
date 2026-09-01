// RESPONSIBILITY: Server Component. Assembles and renders all Machinery page section components in order.
import MachineryHero from "@/app/machinery/machinery_components/MachineryHero";
import FeaturedMachinery from "@/app/machinery/machinery_components/FeaturedMachinery";
import MachineryList from "@/app/machinery/machinery_components/MachineryList";
import MachineryCTA from "@/app/machinery/machinery_components/MachineryCTA";

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
