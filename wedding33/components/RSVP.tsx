"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function RSVP() {
  const container = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useGSAP(() => {
    gsap.from(".rsvp-reveal", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
    });
  }, { scope: container });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section 
      ref={container} 
      className="relative w-full py-32 px-6 md:px-16 lg:px-32 bg-[var(--color-brand-cream)] text-black"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-5xl md:text-7xl mb-6 rsvp-reveal">
          RSVP
        </h2>
        <p className="font-sans text-sm md:text-base tracking-[0.1em] mb-16 rsvp-reveal uppercase opacity-80">
          Kindly respond by September 1st, 2026
        </p>

        {submitted ? (
          <div className="py-20 rsvp-reveal">
            <h3 className="font-heading text-4xl mb-4 gold-foil">Thank You!</h3>
            <p className="font-sans tracking-wide">
              We look forward to celebrating with you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-10 text-left rsvp-reveal">
            
            <div className="relative group">
              <input 
                type="text" 
                id="name" 
                required
                className="w-full bg-transparent border-b border-black/30 py-3 px-1 font-sans focus:outline-none focus:border-black transition-colors peer placeholder-transparent"
                placeholder="Name"
              />
              <label 
                htmlFor="name" 
                className="absolute left-1 -top-5 text-xs font-sans tracking-widest uppercase opacity-70 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:opacity-50 peer-focus:-top-5 peer-focus:text-xs peer-focus:opacity-100"
              >
                Guest Name(s)
              </label>
            </div>

            <div className="relative group">
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-transparent border-b border-black/30 py-3 px-1 font-sans focus:outline-none focus:border-black transition-colors peer placeholder-transparent"
                placeholder="Email"
              />
              <label 
                htmlFor="email" 
                className="absolute left-1 -top-5 text-xs font-sans tracking-widest uppercase opacity-70 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:opacity-50 peer-focus:-top-5 peer-focus:text-xs peer-focus:opacity-100"
              >
                Email Address
              </label>
            </div>

            <div className="relative group">
              <select 
                id="attending" 
                required
                className="w-full bg-transparent border-b border-black/30 py-3 px-1 font-sans focus:outline-none focus:border-black transition-colors appearance-none"
              >
                <option value="" disabled selected hidden>Will you be attending?</option>
                <option value="yes">Joyfully Accept</option>
                <option value="no">Regretfully Decline</option>
              </select>
            </div>

            <div className="relative group">
              <input 
                type="text" 
                id="dietary" 
                className="w-full bg-transparent border-b border-black/30 py-3 px-1 font-sans focus:outline-none focus:border-black transition-colors peer placeholder-transparent"
                placeholder="Dietary Restrictions"
              />
              <label 
                htmlFor="dietary" 
                className="absolute left-1 -top-5 text-xs font-sans tracking-widest uppercase opacity-70 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:opacity-50 peer-focus:-top-5 peer-focus:text-xs peer-focus:opacity-100"
              >
                Dietary Restrictions
              </label>
            </div>

            <button 
              type="submit" 
              className="mt-8 relative overflow-hidden group border border-black px-12 py-4 rounded-none w-full md:w-auto self-center uppercase font-sans tracking-[0.2em] text-sm hover:text-white transition-colors duration-500"
            >
              <span className="relative z-10">Send Response</span>
              <div className="absolute inset-0 bg-[#3E2723] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-0"></div>
            </button>

          </form>
        )}
      </div>
    </section>
  );
}
