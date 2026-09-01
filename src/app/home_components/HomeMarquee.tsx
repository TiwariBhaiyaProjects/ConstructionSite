"use client";
// RESPONSIBILITY: Renders the auto-scrolling partner/client logo marquee strip.

import { marqueeTexts } from "@/app/home_components/home_constants";

export default function HomeMarquee() {
  return (
    <div className="bg-brand-primary py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {marqueeTexts.map((text, i) => (
          <span key={text + i} className="mx-8 text-brand-dark font-semibold">{text}</span>
        ))}
      </div>
    </div>
  );
}
