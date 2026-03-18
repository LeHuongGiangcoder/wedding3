import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OurStory from "../components/OurStory";
import Gallery from "../components/Gallery";
import EventDetails from "../components/EventDetails";
import RSVP from "../components/RSVP";
import Ornament from "../components/Ornament";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5DC] overflow-hidden">
      <Navbar />
      <Hero />

      {/* Filigree divider: Hero → Story */}
      <div className="bg-[#F5F5DC] py-12 md:py-16">
        <Ornament variant="star" />
      </div>

      <OurStory />

      {/* Filigree divider: Story → Gallery */}
      <div className="bg-[#F5F5DC] py-12 md:py-16">
        <Ornament variant="diamond" />
      </div>

      <Gallery />

      {/* Filigree divider: Gallery → Details (transition from cream to dark) */}
      <div className="bg-[#F5F5DC] py-12 md:py-16">
        <Ornament variant="lines" />
      </div>

      <EventDetails />

      {/* Filigree divider: Details → RSVP (transition from dark to cream) */}
      <div className="bg-[#F5F5DC] py-12 md:py-16">
        <Ornament variant="star" />
      </div>

      <RSVP />

      {/* Footer ornament */}
      <div className="bg-[#F5F5DC] py-16 md:py-20 text-center">
        <Ornament variant="diamond" className="mb-8" />
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#3E2723]/30">
          Made with love &mdash; Anthony & Eli, 2026
        </p>
      </div>
    </main>
  );
}
