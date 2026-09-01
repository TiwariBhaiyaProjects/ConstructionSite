"use client";
// RESPONSIBILITY: Module-scoped Error Boundary for the Machinery page. Catches rendering crashes and shows a branded retry UI.

import { Button } from "@/components/ui/button";

export default function MachineryError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 bg-background text-center">
      <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
        <span className="text-3xl font-black text-destructive">!</span>
      </div>
      <h2 className="text-2xl font-bold mb-3">Machinery Page Error</h2>
      <p className="text-muted-foreground mb-6 max-w-md">
        We could not load the Machinery page content. Our team has been notified.
      </p>
      <Button onClick={reset} className="bg-brand-primary text-brand-dark hover:bg-brand-primary-hover font-bold rounded-full px-8">
        Try Again
      </Button>
    </div>
  );
}
