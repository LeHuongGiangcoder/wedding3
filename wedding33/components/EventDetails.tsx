"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Ornament from "./Ornament";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const dressCodeColors = [
  { name: "Ivory",     hex: "#FFFFF0" },
  { name: "Champagne", hex: "#F7E7CE" },
  { name: "Gold",      hex: "#D4AF37" },
  { name: "Bronze",    hex: "#CD7F32" },
  { name: "Chocolate", hex: "#3E2723" },
  { name: "Black",     hex: "#1A1A1A" },
];

export default function EventDetails() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".detail-block").forEach((el) => {
      gsap.from(el, {
        y: 45,
        opacity: 0,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
        },
      });
    });

    gsap.utils.toArray<HTMLElement>(".gold-line").forEach((el) => {
      gsap.from(el, {
        scaleX: 0,
        transformOrigin: "center center",
        duration: 1.6,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
        },
      });
    });

    gsap.from(".swatch", {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".swatch-row",
        start: "top 85%",
      },
    });
  }, { scope: container });

  return (
    <section
      id="details"
      ref={container}
      className="relative w-full py-32 md:py-44 px-6 md:px-12 lg:px-16 bg-[#110e0c] text-[#F5F5DC] overflow-hidden"
    >
      <div className="max-w-[700px] mx-auto text-center">

        {/* Section Title */}
        <div className="mb-20 md:mb-28 detail-block">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#D4AF37]/60 mb-5">
            Save the Date
          </p>
          <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl gold-foil leading-[0.9]">
            The Details
          </h2>
        </div>

        {/* ─── WHEN ─── */}
        <div className="detail-block mb-6">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] mb-6">
            When
          </p>

          <p className="font-heading text-7xl md:text-8xl text-[#F5F5DC] leading-none mb-1">
            4:00
          </p>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#F5F5DC]/40 mb-8">
            In the Afternoon
          </p>

          <p className="font-sans text-base md:text-lg font-light tracking-wide">
            Saturday
          </p>
          <p className="font-heading text-4xl md:text-5xl text-[#F5F5DC] my-2">
            October 24
          </p>
          <p className="font-sans text-base md:text-lg font-light tracking-[0.2em]">
            2026
          </p>
        </div>

        <Ornament variant="diamond" light className="my-16 md:my-20" />

        {/* ─── WHERE ─── */}
        <div className="detail-block mb-6">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] mb-6">
            Where
          </p>

          <p className="font-heading text-3xl md:text-4xl text-[#F5F5DC] mb-4 leading-snug">
            The Historical Manor
          </p>

          <p className="font-sans text-sm md:text-base font-light leading-relaxed tracking-wide mb-8">
            123 Renaissance Avenue<br />
            Paris, France
          </p>

          <a
            href="https://maps.google.com/?q=123+Renaissance+Avenue+Paris+France"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-sans text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] border border-[#D4AF37]/25 px-7 py-3 transition-all duration-400 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/50"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            View on Map
          </a>
        </div>

        <Ornament variant="star" light className="my-16 md:my-20" />

        {/* ─── DRESS CODE ─── */}
        <div className="detail-block">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] mb-6">
            Dress Code
          </p>

          <p className="font-heading text-3xl md:text-4xl text-[#F5F5DC] mb-4">
            Elegant Formal
          </p>

          <p className="font-sans text-sm font-light leading-relaxed tracking-wide mb-10 max-w-[320px] mx-auto">
            Earth tones and metallic accents are warmly encouraged
          </p>

          {/* Color palette swatches */}
          <div className="swatch-row flex items-center justify-center gap-4 mb-4">
            {dressCodeColors.map((color) => (
              <div key={color.name} className="swatch group relative flex flex-col items-center">
                <div
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-[#F5F5DC]/10 shadow-lg"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="absolute -bottom-7 font-sans text-[8px] tracking-widest uppercase text-[#F5F5DC]/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {color.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom ornament */}
        <Ornament variant="lines" light className="mt-24 md:mt-32" />

      </div>
    </section>
  );
}
