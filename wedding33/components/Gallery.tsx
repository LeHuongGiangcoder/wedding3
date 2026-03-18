"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Gallery() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Elegant fade and slight scale up for gallery images as they enter view
    gsap.utils.toArray(".gallery-item").forEach((item: any) => {
      gsap.from(item, {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
      });
    });

    // Subtitle reveal
    gsap.from(".gallery-title", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
    });

  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative w-full py-32 px-6 md:px-16 lg:px-32 bg-[var(--color-brand-cream)] text-[var(--color-brand-dark)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <h2 className="font-heading text-5xl md:text-7xl mb-6 text-center gallery-title text-[#3E2723]">
          Cherished <br/><span className="italic font-light opacity-80">Moments</span>
        </h2>
        <div className="w-16 h-px bg-[#3E2723] mb-20 gallery-title"></div>

        {/* Masonry / Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center w-full">
          
          {/* Row 1 */}
          <div className="md:col-span-5 gallery-item relative h-[600px] w-full overflow-hidden shadow-2xl">
            <Image 
              src="/assets/1.jpg" 
              alt="Moment 1" 
              fill 
              className="object-cover transition-transform duration-1000 hover:scale-105" 
            />
          </div>
          <div className="md:col-span-6 md:col-start-7 gallery-item relative h-[450px] w-full overflow-hidden border-8 border-white shadow-xl mt-12 md:mt-24">
            <Image 
              src="/assets/2.jpg" 
              alt="Moment 2" 
              fill 
              className="object-cover transition-transform duration-1000 hover:scale-105" 
            />
          </div>

          {/* Row 2 */}
          <div className="md:col-span-7 gallery-item relative h-[500px] w-full overflow-hidden mt-12 md:mt-32">
             <Image 
              src="/assets/3.jpg" 
              alt="Moment 3" 
              fill 
              className="object-cover transition-transform duration-1000 hover:scale-105" 
            />
          </div>
          <div className="md:col-span-4 gallery-item relative h-[650px] w-full overflow-hidden shadow-2xl mt-12 md:mt-0">
             <Image 
              src="/assets/5.jpg" 
              alt="Moment 4" 
              fill 
              className="object-cover transition-transform duration-1000 hover:scale-105" 
            />
          </div>

          {/* Row 3 - Full spread with Chiaroscuro feeling */}
          <div className="md:col-span-10 md:col-start-2 gallery-item relative h-[600px] md:h-[800px] w-full overflow-hidden mt-20 md:mt-40 shadow-2xl">
            <Image 
              src="/assets/12.jpg" 
              alt="Moment 5" 
              fill 
              className="object-cover object-top transition-transform duration-1000 hover:scale-105 mix-blend-multiply opacity-90" 
            />
          </div>

        </div>

      </div>
    </section>
  );
}
