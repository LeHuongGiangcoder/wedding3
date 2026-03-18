"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function EventDetails() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".reveal-text", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      },
    });
    
    gsap.from(".line-divider", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      },
    });
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative w-full py-40 px-6 md:px-20 lg:px-40 bg-[#110e0c] text-[var(--color-brand-cream)] text-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="font-heading text-6xl md:text-8xl mb-6 gold-foil reveal-text">
          The Details
        </h2>
        
        <div className="h-px w-24 bg-[#D4AF37] my-12 line-divider opacity-50"></div>
        
        <div className="reveal-text mb-16">
          <p className="font-sans uppercase tracking-[0.25em] text-sm mb-4 text-[#D4AF37]">
            When
          </p>
          <p className="font-sans text-xl md:text-2xl font-light">
            Saturday, October 24th, 2026
            <br />
            Four o'clock in the afternoon
          </p>
        </div>

        <div className="reveal-text mb-16">
          <p className="font-sans uppercase tracking-[0.25em] text-sm mb-4 text-[#D4AF37]">
            Where
          </p>
          <p className="font-sans text-xl md:text-2xl font-light">
            The Historical Manor
            <br />
            123 Renaissance Avenue, Paris
          </p>
        </div>

        <div className="reveal-text">
          <p className="font-sans uppercase tracking-[0.25em] text-sm mb-4 text-[#D4AF37]">
            Dress Code
          </p>
          <p className="font-sans text-xl md:text-2xl font-light">
            Elegant Formal Attire
            <br />
            <span className="text-sm tracking-wider opacity-70 mt-2 block">
              (Earth tones and metallic accents welcomed)
            </span>
          </p>
        </div>
        
      </div>
    </section>
  );
}
