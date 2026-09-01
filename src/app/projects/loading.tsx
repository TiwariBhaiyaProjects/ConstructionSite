// RESPONSIBILITY: Skeleton loader for the Projects page matching its card grid layout.
export default function ProjectsLoading() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      <div className="h-72 bg-muted/60 w-full" />
      <div className="container-custom py-16">
        <div className="h-6 w-40 bg-muted/60 rounded-full mx-auto mb-4" />
        <div className="h-10 w-72 bg-muted/60 rounded-lg mx-auto mb-12" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={`sk-0-${i}`} className="rounded-2xl overflow-hidden border border-border/40">
              <div className="h-52 bg-muted/70" />
              <div className="p-6 space-y-3">
                <div className="h-5 w-3/4 bg-muted/60 rounded" />
                <div className="h-4 w-1/2 bg-muted/40 rounded" />
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="h-8 bg-muted/40 rounded" />
                  <div className="h-8 bg-muted/40 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
