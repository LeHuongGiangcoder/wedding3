"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Stagger the headline words
    gsap.from(".hero-word", {
      y: 80,
      opacity: 0,
      duration: 1.4,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.6,
    });

    // Fade in hero images with stagger
    gsap.from(".hero-img", {
      opacity: 0,
      y: 30,
      duration: 1.2,
      stagger: 0.2,
      ease: "power2.out",
      delay: 1.0,
    });

    // Date line
    gsap.from(".hero-date", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out",
      delay: 2.0,
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative w-full min-h-screen bg-[#F5F5DC] pt-28 pb-16 px-6 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start min-h-[85vh]">
        
        {/* Left: Typography */}
        <div className="md:col-span-5 flex flex-col justify-center md:pt-12 lg:pt-20">
          <div className="overflow-hidden">
            <h1 className="font-heading text-[#3E2723] leading-[0.9] tracking-tight">
              <span className="hero-word block text-[clamp(3.5rem,8vw,8rem)]">Making</span>
              <span className="hero-word block text-[clamp(3.5rem,8vw,8rem)]">Time</span>
              <span className="hero-word block text-[clamp(3.5rem,8vw,8rem)]">Stand</span>
              <span className="hero-word block text-[clamp(3.5rem,8vw,8rem)] italic">Still</span>
            </h1>
          </div>

          <p className="hero-date font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-[#3E2723]/60 mt-10 md:mt-14">
            October 24, 2026 &mdash; Paris
          </p>
        </div>

        {/* Right: Editorial photo grid — 2x2 */}
        <div className="md:col-span-7 grid grid-cols-2 gap-4 md:gap-5 h-full">
          {/* Top left - tall */}
          <div className="hero-img relative w-full overflow-hidden row-span-1" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/assets/10.jpg"
              alt="Anthony & Eli"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
          {/* Top right */}
          <div className="hero-img relative w-full overflow-hidden row-span-1" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/assets/4.jpg"
              alt="Anthony & Eli"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
          {/* Bottom left */}
          <div className="hero-img relative w-full overflow-hidden row-span-1" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/assets/6.jpg"
              alt="Anthony & Eli"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          {/* Bottom right */}
          <div className="hero-img relative w-full overflow-hidden row-span-1" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/assets/9.jpg"
              alt="Anthony & Eli"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
