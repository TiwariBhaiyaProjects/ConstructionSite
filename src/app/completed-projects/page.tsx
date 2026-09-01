import CompletedProjectsHero from "./completed_projects_components/CompletedProjectsHero";
import CompletedProjectsList from "./completed_projects_components/CompletedProjectsList";

export default function CompletedProjectsPage() {
  return (
    <main>
      <CompletedProjectsHero />
      <CompletedProjectsList />
    </main>
  );
}
