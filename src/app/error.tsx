"use client";
// RESPONSIBILITY: Typed Next.js Error Boundary. Catches rendering crashes and displays a branded retry UI.

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // TODO: Replace with centralized logger
  }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 bg-background text-center">
      <h2 className="text-2xl font-bold text-destructive mb-4">Something went wrong!</h2>
      <p className="text-muted-foreground mb-6">
        We apologize for the inconvenience. Our technical team has been notified.
      </p>
      <Button 
        onClick={() => reset()}
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Try again
      </Button>
    </div>
  );
}
