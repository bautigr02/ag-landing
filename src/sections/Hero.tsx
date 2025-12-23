"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const WHATSAPP_NUMBER = "+5493329473469";
const whatsappHref = `https://wa.me/5493329473469?text=${encodeURIComponent(
  "Hola, quiero pedir un presupuesto para frentes de parrilla a medida."
)}`;

// Función para determinar si está abierto
function isOpen(): boolean {
  if (typeof window === "undefined") return false;
  
  const now = new Date();
  const day = now.getDay(); // 0 = domingo, 1 = lunes, ..., 6 = sábado
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes; // Tiempo en minutos desde medianoche

  // Domingo: cerrado
  if (day === 0) return false;

  // Sábado: 7:30 - 12:00
  if (day === 6) {
    const openTime = 7 * 60 + 30; // 7:30
    const closeTime = 12 * 60; // 12:00
    return currentTime >= openTime && currentTime < closeTime;
  }

  // Lunes a viernes: 7:30-12:00 y 14:30-19:00
  const morningOpen = 7 * 60 + 30; // 7:30
  const morningClose = 12 * 60; // 12:00
  const afternoonOpen = 14 * 60 + 30; // 14:30
  const afternoonClose = 19 * 60; // 19:00

  return (
    (currentTime >= morningOpen && currentTime < morningClose) ||
    (currentTime >= afternoonOpen && currentTime < afternoonClose)
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpenNow, setIsOpenNow] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    // Inicializar tema light para el hero
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-section-theme", "light");
    }

    // Verificar estado de apertura
    setIsOpenNow(isOpen());

    // Actualizar cada minuto
    const interval = setInterval(() => {
      setIsOpenNow(isOpen());
    }, 60000); // Cada 60 segundos

    return () => clearInterval(interval);
  }, []);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Imagen de fondo - visible desde el medio hacia la derecha */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/galeria/IMG_6992.jpeg"
            alt="Frente de parrilla instalado por AG División Gastronomía"
            fill
            priority
            className="object-cover object-[center_right]"
          />
        </div>
        {/* Degradado comprimido: opaco hasta ~40%, luego transparente rápidamente */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 via-[40%] to-transparent" />
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
              {/* Contenedor de burbujas */}
              <div className="flex flex-col gap-2">
                {/* Burbuja de estado (Abierto/Cerrado) - ARRIBA con botón de ubicación */}
                <div className="flex items-center gap-2 flex-wrap">
                  <div
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium w-fit ${
                      isOpenNow
                        ? "border-green-200 bg-green-50 text-green-700"
                        : "border-orange-200 bg-orange-50 text-orange-700"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isOpenNow ? "bg-green-500" : "bg-orange-500"
                      }`}
                    />
                    {isOpenNow ? "Abierto ahora" : "Cerrado, dejanos un mensaje"}
                  </div>
                  <a
                    href="https://maps.google.com/?q=Salta+1551+San+Pedro+Buenos+Aires+Argentina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-[10px] font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
                    title="Ver ubicación en Google Maps"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-600"
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>Salta 1551, San Pedro</span>
                  </a>
                </div>

                {/* Burbuja de descripción - ABAJO */}
                <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium text-gray-700 w-fit">
                  <span className="h-2 w-2 rounded-full bg-[#25d366]" />
                  Metalúrgica especializada en parrillas y frentes a medida
                </div>
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
