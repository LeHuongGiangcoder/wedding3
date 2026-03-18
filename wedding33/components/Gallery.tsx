"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/*
  Gallery layout inspired by Daniele & Marilia editorial style:
  - Row of 3 equal-width images
  - Row of 2 asymmetric images (wide + narrow or vice-versa)
  - Row of 2 equal images offset with whitespace
  - Single centered image
  All images breathe freely with generous white space. No hover effects.
*/

const rows = [
  // Row 1: Three equal columns
  {
    type: "three" as const,
    images: [
      { src: "/assets/1.jpg", alt: "Moment" },
      { src: "/assets/2.jpg", alt: "Moment" },
      { src: "/assets/3.jpg", alt: "Moment" },
    ],
  },
  // Row 2: Two images — one large left, one smaller right offset down
  {
    type: "two-asymmetric" as const,
    images: [
      { src: "/assets/5.jpg", alt: "Moment" },
      { src: "/assets/7.jpg", alt: "Moment" },
    ],
  },
  // Row 3: Two equal images centered with margins
  {
    type: "two-centered" as const,
    images: [
      { src: "/assets/13.jpg", alt: "Moment" },
      { src: "/assets/4.jpg", alt: "Moment" },
    ],
  },
  // Row 4: Three columns again with different images
  {
    type: "three" as const,
    images: [
      { src: "/assets/15.jpg", alt: "Moment" },
      { src: "/assets/12.jpg", alt: "Moment" },
      { src: "/assets/8.jpg", alt: "Moment" },
    ],
  },
];

export default function Gallery() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".gal-img").forEach((el) => {
      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
        },
      });
    });
  }, { scope: container });

  return (
    <section
      id="gallery"
      ref={container}
      className="relative w-full py-28 md:py-40 px-6 md:px-12 lg:px-16 bg-[#F5F5DC]"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* Section heading */}
        <div className="mb-20 md:mb-28">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#3E2723]/50 mb-4">
            A glimpse into
          </p>
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-[#3E2723] leading-[0.95]">
            Cherished<br />
            <span className="italic font-light">Moments</span>
          </h2>
        </div>

        {/* Gallery rows */}
        <div className="flex flex-col gap-6 md:gap-8">

          {/* Row 1: Three equal columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {rows[0].images.map((img, i) => (
              <div key={i} className="gal-img relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
            ))}
          </div>

          {/* Row 2: Two asymmetric — large left (7col), smaller right (5col) with top offset */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            <div className="md:col-span-7 gal-img relative w-full overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <Image src={rows[1].images[0].src} alt={rows[1].images[0].alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 58vw" />
            </div>
            <div className="md:col-span-5 md:mt-20 gal-img relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image src={rows[1].images[1].src} alt={rows[1].images[1].alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 42vw" />
            </div>
          </div>

          {/* Row 3: Two centered images with horizontal padding */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 md:px-16 lg:px-28">
            {rows[2].images.map((img, i) => (
              <div key={i} className="gal-img relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 40vw" />
              </div>
            ))}
          </div>

          {/* Row 4: Three equal columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {rows[3].images.map((img, i) => (
              <div key={i} className="gal-img relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
