// RESPONSIBILITY: Skeleton loader for the Completed Projects page matching its grid layout.
export default function CompletedProjectsLoading() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      <div className="h-72 bg-muted/60 w-full" />
      <div className="container-custom py-16">
        <div className="h-6 w-48 bg-muted/60 rounded-full mx-auto mb-4" />
        <div className="h-10 w-80 bg-muted/60 rounded-lg mx-auto mb-12" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-border/40">
              <div className="h-52 bg-muted/70" />
              <div className="p-6 space-y-3">
                <div className="h-5 w-3/4 bg-muted/60 rounded" />
                <div className="h-4 w-1/2 bg-muted/40 rounded" />
                <div className="h-4 w-2/3 bg-muted/40 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
