"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    // Elegant fade in for names
    gsap.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.95, filter: "blur(4px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 2.5, ease: "power2.out", delay: 0.5 }
    );
    
    // Fade in for subtitle
    gsap.fromTo(
      subtextRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 1.8 }
    );
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image Setup (using one of the assets for Chiaroscuro feeling) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/10.jpg" // Using image 10 as an example dramatic image
          alt="Anthony & Eli"
          fill
          className="object-cover object-center opacity-40 mix-blend-luminosity"
          priority
        />
        {/* Gradient overlay for Chiaroscuro */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#110e0c] via-transparent to-[#110e0c] opacity-90" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 mix-blend-difference">
        <div ref={textRef} className="opacity-0">
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-white tracking-widest uppercase mb-4">
            Anthony
            <br />
            <span className="text-4xl md:text-6xl text-[#D4AF37] italic font-light my-2 block">&amp;</span>
            Eli
          </h1>
        </div>
        <p ref={subtextRef} className="font-sans text-white uppercase tracking-[0.3em] text-sm md:text-base opacity-0">
          Are Getting Married &bull; October 24, 2026
        </p>
      </div>
    </section>
  );
}
