"use client";

import { marqueeTexts } from "./home_constants";

export default function HomeMarquee() {
  return (
    <div className="bg-brand-primary py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {marqueeTexts.map((text, i) => (
          <span key={i} className="mx-8 text-brand-dark font-semibold">{text}</span>
        ))}
      </div>
    </div>
  );
}
