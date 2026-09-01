// RESPONSIBILITY: Renders a full-page skeleton loader while page data is being fetched. No state or API calls.
export default function Loading() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      {/* Hero Skeleton */}
      <div className="h-[60vh] bg-muted/60 w-full" />

      {/* Stats Row Skeleton */}
      <div className="container-custom py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={`sk-0-${i}`} className="h-24 rounded-2xl bg-muted/60" />
        ))}
      </div>

      {/* Section Title Skeleton */}
      <div className="container-custom pb-16">
        <div className="h-6 w-40 bg-muted/60 rounded-full mx-auto mb-4" />
        <div className="h-10 w-80 bg-muted/60 rounded-lg mx-auto mb-12" />

        {/* Cards Grid Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={`sk-1-${i}`} className="rounded-2xl overflow-hidden border border-border/40">
              <div className="h-52 bg-muted/70" />
              <div className="p-6 space-y-3">
                <div className="h-5 w-3/4 bg-muted/60 rounded" />
                <div className="h-4 w-1/2 bg-muted/40 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
