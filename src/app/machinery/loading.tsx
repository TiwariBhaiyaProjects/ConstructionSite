// RESPONSIBILITY: Skeleton loader for the Machinery page matching its image cards + table layout.
export default function MachineryLoading() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      <div className="h-72 bg-muted/60 w-full" />
      <div className="container-custom py-16">
        <div className="h-6 w-40 bg-muted/60 rounded-full mx-auto mb-4" />
        <div className="h-10 w-72 bg-muted/60 rounded-lg mx-auto mb-12" />
        {/* Featured cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[...Array(4)].map((_, i) => (
            <div key={`sk-0-${i}`} className="rounded-2xl overflow-hidden border border-border/40">
              <div className="aspect-[4/3] bg-muted/70" />
              <div className="p-4 space-y-2">
                <div className="h-4 w-3/4 bg-muted/60 rounded" />
                <div className="h-3 w-1/2 bg-muted/40 rounded" />
              </div>
            </div>
          ))}
        </div>
        {/* Table skeleton */}
        <div className="rounded-2xl border border-border/40 overflow-hidden">
          <div className="h-14 bg-muted/50 border-b border-border/40" />
          {[...Array(8)].map((_, i) => (
            <div key={`sk-1-${i}`} className="h-12 border-b border-border/20 px-6 flex items-center gap-6">
              <div className="h-3 w-8 bg-muted/40 rounded" />
              <div className="h-3 w-32 bg-muted/40 rounded" />
              <div className="h-3 flex-1 bg-muted/40 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
