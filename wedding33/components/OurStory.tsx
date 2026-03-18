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
    // Parallax effect on images
    gsap.utils.toArray(".story-img").forEach((img: any) => {
      gsap.to(img, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Fade up texts
    gsap.utils.toArray(".story-text").forEach((text: any) => {
      gsap.from(text, {
        y: 40,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
        },
      });
    });
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative w-full py-32 px-6 md:px-16 lg:px-32 bg-[var(--color-brand-cream)] text-black"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center max-w-7xl mx-auto">
        
        {/* Left Side: Text */}
        <div className="md:col-span-5 md:col-start-2 z-10">
          <h2 className="font-heading text-5xl md:text-7xl mb-8 story-text">
            Our <br/><span className="italic font-light">Journey</span>
          </h2>
          <p className="font-sans text-sm md:text-base leading-relaxed tracking-wider story-text">
            It began with a fleeting glance, an unexpected connection 
            that grew into a lifelong promise. We are thrilled to celebrate 
            this next chapter with our closest friends and family—the people 
            who have witnessed our love story unfold.
          </p>
        </div>

        {/* Right Side: Asymmetric Images */}
        <div className="md:col-span-6 relative h-[600px] md:h-[800px] w-full mt-12 md:mt-0">
          {/* Main Large Image */}
          <div className="absolute top-0 right-0 w-[80%] h-[70%] md:h-[80%] overflow-hidden">
            <div className="relative w-full h-full story-img scale-110 -top-[10%]">
              <Image 
                src="/assets/11.jpg" // Sample asset
                alt="Couple"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Smaller Overlapping Image */}
          <div className="absolute bottom-[5%] left-0 w-[55%] h-[40%] md:h-[45%] border-8 border-[var(--color-brand-cream)] overflow-hidden z-10 shadow-2xl">
            <div className="relative w-full h-full story-img scale-110 -top-[5%]">
              <Image 
                src="/assets/8.jpg" // Sample asset
                alt="Details"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
