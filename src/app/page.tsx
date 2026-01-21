import { StickyNavbar } from "@/components/StickyNavbar";
import { Hero } from "@/sections/Hero";
import { Featured } from "@/sections/Featured";
import { Services } from "@/sections/Services";
import { Gallery } from "@/sections/Gallery";
import { FAQ } from "@/sections/FAQ";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <StickyNavbar />
      <main>
        <Hero />
        <Featured />
        <Gallery />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
