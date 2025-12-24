"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "trabajos", label: "Trabajos" },
  { id: "servicios", label: "Servicios" },
  { id: "faq", label: "FAQ" },
  { id: "contacto", label: "Contacto" },
];

const WHATSAPP_LINK = `https://wa.me/5493329473469?text=${encodeURIComponent(
  "Hola, quiero pedir un presupuesto para frentes de parrilla a medida."
)}`;

export function StickyNavbar() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar sección activa
      const scrollPosition = window.scrollY + 200;
      const sectionsArray = [...sections].reverse();
      for (const section of sectionsArray) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="relative h-16 w-16 scale-110">
              <Image
                src="/galeria/logosinfondo.png"
                alt="AG Gastronomía"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-base font-semibold text-white transition-colors">
              AG Gastronomía
            </span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-xs font-medium transition-colors ${
                  activeSection === section.id
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#25d366] px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-[#20ba5a] active:scale-95"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}

