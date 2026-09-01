import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 bg-background">
      <Loader2 className="w-12 h-12 text-brand-primary animate-spin mb-4" />
      <p className="text-muted-foreground font-medium animate-pulse">Loading content...</p>
    </div>
  );
}
