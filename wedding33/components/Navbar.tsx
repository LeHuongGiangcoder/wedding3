"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 0.3 }
    );
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 opacity-0 ${
        scrolled
          ? "bg-[#F5F5DC]/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 md:px-12 py-5">
        {/* Couple name mark */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-heading text-base md:text-lg tracking-[0.15em] uppercase text-[#3E2723]"
        >
          Anthony & Eli
        </button>

        {/* Section links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: "Our Story", id: "story" },
            { label: "Gallery", id: "gallery" },
            { label: "Details", id: "details" },
            { label: "RSVP", id: "rsvp" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-sans text-xs tracking-[0.2em] uppercase text-[#3E2723]/70 hover:text-[#3E2723] transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile menu icon */}
        <button className="md:hidden flex flex-col gap-[5px]">
          <span className="block w-5 h-px bg-[#3E2723]" />
          <span className="block w-5 h-px bg-[#3E2723]" />
        </button>
      </div>
    </nav>
  );
}
