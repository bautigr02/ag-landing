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
            src="/frentes/imgFrenteChapa19.jpg"
            alt="Frente de parrilla instalado por AG División Gastronomía"
            fill
            priority
            className="object-cover object-center md:object-[center_right]"
          />
        </div>
        {/* Degradado comprimido: opaco hasta ~40%, luego transparente rápidamente */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 via-[40%] to-transparent" />
      </div>

      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-0">
          <motion.div
          style={{ opacity, scale, y }}
          className="relative z-10 mx-auto max-w-7xl px-6 w-full"
          >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.05, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Contenedor de burbujas */}
              <div className="flex flex-col gap-2">
                {/* Burbuja de estado (solo cuando está abierto) con botón de ubicación */}
                <div className="flex items-center gap-2 flex-wrap">
                  {isOpenNow && (
                    <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-xs font-medium text-green-700 w-fit">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      Abierto ahora
                    </div>
                  )}
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
              Metalúrgica especializada en la fabricación y colocación de frentes de parrilla
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
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#20ba5a] active:scale-95"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                    fill="currentColor"
                  />
                </svg>
                Pedir presupuesto por WhatsApp
              </a>
              <a
                href="#trabajos"
                  className="inline-flex items-center justify-center rounded-full border-2 border-gray-900 px-8 py-4 text-base font-semibold text-gray-900 transition-all hover:bg-gray-900 hover:text-white active:scale-95"
              >
                + Ver trabajos
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
