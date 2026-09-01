"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className="absolute bottom-8 right-8 rounded-full bg-brand-primary text-zinc-950 hover:bg-white hover:text-zinc-950 hover:scale-110 shadow-lg transition-all duration-300 z-50"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
}
