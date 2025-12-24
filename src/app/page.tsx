import { StickyNavbar } from "@/components/StickyNavbar";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Process } from "@/sections/Process";
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
        <Gallery />
        <Services />
        <FAQ />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
