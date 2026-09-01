import HomeHeroSection from "./home_components/HomeHeroSection";
import HomeMarquee from "./home_components/HomeMarquee";
import HomeStats from "./home_components/HomeStats";
import HomePortfolio from "./home_components/HomePortfolio";
import HomeProcessMaterials from "./home_components/HomeProcessMaterials";
import HomeLiveProjects from "./home_components/HomeLiveProjects";
import HomeAwards from "./home_components/HomeAwards";
import HomeFinalCTA from "./home_components/HomeFinalCTA";

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <HomeMarquee />
      <HomeStats />
      <HomePortfolio />
      <HomeProcessMaterials />
      <HomeLiveProjects />
      <HomeAwards />
      <HomeFinalCTA />
    </>
  );
}
