"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-extrabold text-brand-primary">404</h1>
        <p className="mb-6 text-2xl font-bold text-brand-dark">Oops! Page not found</p>
        <Link 
          href="/" 
          className="inline-flex h-12 items-center justify-center rounded-full bg-brand-primary px-8 text-sm font-bold text-brand-dark shadow transition-colors hover:bg-brand-primary-hover"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
