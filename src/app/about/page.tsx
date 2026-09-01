// RESPONSIBILITY: Server Component. Assembles and renders all About page section components in order.
import AboutHero from "@/app/about/about_components/AboutHero";
import AboutStory from "@/app/about/about_components/AboutStory";
import AboutMission from "@/app/about/about_components/AboutMission";
import AboutLicenses from "@/app/about/about_components/AboutLicenses";
import AboutFinancials from "@/app/about/about_components/AboutFinancials";
import AboutTeam from "@/app/about/about_components/AboutTeam";
import AboutProcess from "@/app/about/about_components/AboutProcess";
import AboutContact from "@/app/about/about_components/AboutContact";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutLicenses />
      <AboutFinancials />
      <AboutTeam />
      <AboutProcess />
      <AboutContact />
    </main>
  );
}
