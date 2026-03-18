import Hero from "../components/Hero";
import OurStory from "../components/OurStory";
import Gallery from "../components/Gallery";
import EventDetails from "../components/EventDetails";
import RSVP from "../components/RSVP";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] overflow-hidden">
      <Hero />
      <OurStory />
      <Gallery />
      <EventDetails />
      <RSVP />
    </main>
  );
}
