// RESPONSIBILITY: Shared zero-business-logic skeleton UI primitive from shadcn/ui. No API calls. No module-specific logic.
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

export { Skeleton };
