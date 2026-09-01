// RESPONSIBILITY: Server Component. Assembles and renders all Home page section components in order.
import HomeHeroSection from "@/app/home_components/HomeHeroSection";
import HomeMarquee from "@/app/home_components/HomeMarquee";
import HomeStats from "@/app/home_components/HomeStats";
import HomePortfolio from "@/app/home_components/HomePortfolio";
import HomeProcessMaterials from "@/app/home_components/HomeProcessMaterials";
import HomeLiveProjects from "@/app/home_components/HomeLiveProjects";
import HomeAwards from "@/app/home_components/HomeAwards";
import HomeFinalCTA from "@/app/home_components/HomeFinalCTA";

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
