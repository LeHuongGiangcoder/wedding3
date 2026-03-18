"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Stagger the headline words up
    gsap.from(".hero-word", {
      y: 100,
      opacity: 0,
      duration: 1.6,
      stagger: 0.12,
      ease: "power3.out",
      delay: 0.5,
    });

    // Fade in hero images with stagger
    gsap.from(".hero-img", {
      opacity: 0,
      y: 40,
      duration: 1.4,
      stagger: 0.25,
      ease: "power2.out",
      delay: 0.9,
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
      className="relative w-full bg-[#F5F5DC] pt-28 md:pt-32 pb-8 md:pb-16 px-6 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-5 items-start">

        {/* ── Left: Typography with text masking ── */}
        <div className="md:col-span-5 flex flex-col justify-start md:pt-4 lg:pt-8 order-2 md:order-1">
          
          <h1 className="font-heading leading-[0.88] tracking-tight">
            {/* "Making" — solid dark text */}
            <span className="hero-word block text-[clamp(3.5rem,8.5vw,8.5rem)] text-[#3E2723]">
              Making
            </span>
            {/* "Time" — masked with a couple photo showing through the letters */}
            <span
              className="hero-word block text-[clamp(3.5rem,8.5vw,8.5rem)]"
              style={{
                backgroundImage: "url(/assets/10.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center 30%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Time
            </span>
            {/* "Stand" — solid dark text */}
            <span className="hero-word block text-[clamp(3.5rem,8.5vw,8.5rem)] text-[#3E2723]">
              Stand
            </span>
            {/* "Still" — masked with another photo, italic */}
            <span
              className="hero-word block text-[clamp(3.5rem,8.5vw,8.5rem)] italic"
              style={{
                backgroundImage: "url(/assets/6.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Still
            </span>
          </h1>

          <p className="hero-date font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-[#3E2723]/50 mt-10 md:mt-14">
            October 24, 2026 &mdash; Paris
          </p>
        </div>

        {/* ── Right: Two large editorial photos ── */}
        <div className="md:col-span-7 grid grid-cols-2 gap-4 md:gap-5 order-1 md:order-2">
          {/* Left photo — taller, bleeds higher */}
          <div className="hero-img relative w-full overflow-hidden" style={{ aspectRatio: "3/4.2" }}>
            <Image
              src="/assets/14.jpg"
              alt="Anthony & Eli"
              fill
              sizes="(max-width: 768px) 50vw, 35vw"
              className="object-cover"
              priority
            />
          </div>
          {/* Right photo — slightly shorter, offset down */}
          <div className="hero-img relative w-full overflow-hidden md:mt-16" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/assets/9.jpg"
              alt="Anthony & Eli"
              fill
              sizes="(max-width: 768px) 50vw, 35vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
