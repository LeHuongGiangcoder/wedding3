"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function OurStory() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".story-fade").forEach((el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
        },
      });
    });
  }, { scope: container });

  return (
    <section
      id="story"
      ref={container}
      className="relative w-full py-28 md:py-40 px-6 md:px-12 lg:px-16 bg-[#F5F5DC]"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20 md:mb-32">
          <div className="md:col-span-5 story-fade">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#3E2723]/50 mb-4">
              How it all began
            </p>
            <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-[#3E2723] leading-[0.95]">
              Our<br />
              <span className="italic font-light">Story</span>
            </h2>
          </div>

          <div className="md:col-span-5 md:col-start-8 flex flex-col justify-end story-fade">
            <p className="font-sans text-sm md:text-base leading-[1.9] tracking-wide text-[#3E2723]/80">
              Some love stories begin with grand gestures. Ours started 
              with a quiet conversation that neither of us wanted to end. 
              What followed was a series of ordinary moments made extraordinary 
              simply because we were together — late-night walks that turned 
              into early mornings, shared silences that spoke volumes, and 
              a growing certainty that this was something rare.
            </p>
          </div>
        </div>

        {/* Editorial image + text layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Large image left */}
          <div className="md:col-span-7 story-fade relative w-full overflow-hidden" style={{ aspectRatio: "4/5" }}>
            <Image
              src="/assets/11.jpg"
              alt="Anthony & Eli"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 58vw"
            />
          </div>

          {/* Right column: smaller image + pull quote */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="story-fade relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/assets/8.jpg"
                alt="Detail"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 42vw"
              />
            </div>
            <blockquote className="story-fade font-heading text-2xl md:text-3xl italic text-[#3E2723]/70 leading-snug pl-6 border-l-2 border-[#D4AF37]/40">
              &ldquo;We knew, somewhere between the laughter and the silence, 
              that this was forever.&rdquo;
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
}
