import AboutHero from "./about_components/AboutHero";
import AboutStory from "./about_components/AboutStory";
import AboutMission from "./about_components/AboutMission";
import AboutLicenses from "./about_components/AboutLicenses";
import AboutFinancials from "./about_components/AboutFinancials";
import AboutTeam from "./about_components/AboutTeam";
import AboutProcess from "./about_components/AboutProcess";
import AboutContact from "./about_components/AboutContact";

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
