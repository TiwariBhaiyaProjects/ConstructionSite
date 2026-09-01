// RESPONSIBILITY: Skeleton loader for the About page matching its layout (hero + story + team).
export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      <div className="h-72 bg-muted/60 w-full" />
      <div className="container-custom py-16 grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="h-6 w-32 bg-muted/60 rounded-full" />
          <div className="h-10 w-72 bg-muted/60 rounded-lg" />
          <div className="h-4 w-full bg-muted/40 rounded" />
          <div className="h-4 w-5/6 bg-muted/40 rounded" />
          <div className="h-4 w-4/6 bg-muted/40 rounded" />
        </div>
        <div className="h-64 bg-muted/60 rounded-2xl" />
      </div>
      <div className="container-custom pb-16 grid md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-40 bg-muted/60 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
