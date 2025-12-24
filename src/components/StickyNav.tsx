"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const WHATSAPP_LINK = `https://wa.me/5493329473469?text=${encodeURIComponent(
  "Hola, quiero pedir un presupuesto para frentes de parrilla a medida."
)}`;

const navItems = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

/**
 * Navegación sticky minimalista estilo Apple
 * Se encoge al hacer scroll y muestra indicador de sección activa
 */
export function StickyNav() {
  const { scrollY } = useScroll();
  const [activeSection, setActiveSection] = useState("");
  const navHeight = useTransform(scrollY, [0, 100], [80, 60]);
  const navOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      style={{ height: navHeight, opacity: navOpacity }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8">
            <Image
              src="/galeria/logosinfondo.png"
              alt="AG Gastronomía"
              fill
              sizes="32px"
              className="object-contain"
              priority
            />
          </div>
          <span className="text-sm font-medium text-gray-900">
            AG División Gastronomía
          </span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-xs font-medium transition-colors ${
                  isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#25d366] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#20ba5a]"
        >
          WhatsApp
        </a>
      </div>
    </motion.header>
  );
}

