import CompletedProjectsHero from "@/app/completed-projects/completed_projects_components/CompletedProjectsHero";
import CompletedProjectsList from "@/app/completed-projects/completed_projects_components/CompletedProjectsList";

export default function CompletedProjectsPage() {
  return (
    <main>
      <CompletedProjectsHero />
      <CompletedProjectsList />
    </main>
  );
}
