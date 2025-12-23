"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";

const WHATSAPP_NUMBER = "+5493329473469";
const whatsappHref = `https://wa.me/5493329473469?text=${encodeURIComponent(
  "Hola, quiero pedir un presupuesto para frentes de parrilla a medida."
)}`;

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    // Inicializar tema light para el hero
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-section-theme", "light");
    }
  }, []);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/galeria/IMG_6992.jpeg"
          alt="Frente de parrilla instalado por AG División Gastronomía"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/30 to-white/20" />
        <div className="absolute inset-0 bg-white/15 lg:bg-white/25" />
      </div>

      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        <motion.div
          style={{ opacity, scale, y }}
          className="relative z-10 mx-auto max-w-7xl px-6 w-full"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium text-gray-700">
                <span className="h-2 w-2 rounded-full bg-[#25d366]" />
                Metalúrgica especializada en parrillas y frentes a medida
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                Frentes de parrilla{" "}
                <span className="block text-gray-600">a medida</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed">
                Fabricación metalúrgica propia + colocación en obra. Trabajos
                prolijos, nivelados y listos para usar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#25d366] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#20ba5a] active:scale-95"
                >
                  Pedir presupuesto por WhatsApp
                </a>
                <a
                  href="#trabajos"
                  className="inline-flex items-center justify-center rounded-full border-2 border-gray-900 px-8 py-4 text-base font-semibold text-gray-900 transition-all hover:bg-gray-900 hover:text-white active:scale-95"
                >
                  Ver trabajos
                </a>
              </div>

              <div className="pt-4 text-sm text-gray-500 space-y-1">
                <div>
                  <span className="font-semibold text-gray-700">Zona:</span> San
                  Pedro y zona, CABA, Rosario y alrededores
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    Tel/WhatsApp:
                  </span>{" "}
                  {WHATSAPP_NUMBER}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Spacer para permitir scroll */}
      <div className="h-screen" />
    </div>
  );
}
