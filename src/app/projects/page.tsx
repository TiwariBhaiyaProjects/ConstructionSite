import ProjectsHero from "./projects_components/ProjectsHero";
import ProjectsList from "./projects_components/ProjectsList";
import ProjectsLive from "./projects_components/ProjectsLive";

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsList />
      <ProjectsLive />
    </main>
  );
}
