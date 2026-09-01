// RESPONSIBILITY: Server Component. Assembles and renders all Projects page section components in order.
import ProjectsHero from "@/app/projects/projects_components/ProjectsHero";
import ProjectsList from "@/app/projects/projects_components/ProjectsList";
import ProjectsLive from "@/app/projects/projects_components/ProjectsLive";

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsList />
      <ProjectsLive />
    </main>
  );
}
