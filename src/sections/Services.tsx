"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useState, useEffect } from "react";

const services = [
  {
    id: "frentes",
    title: "Fabricacion de Frentes",
    description:
      "Diseño y fabricación a medida que renueva tu espacio.",
    features: [
      "Medidas según obra o espacio existente",
      "Terminaciones y pinturas a elección",
      "Parrillas en chapa enlozada o acero inoxidable",
      "Materiales de calidad y resistentes al calor y al uso intensivo",
    ],
    image: {
      src: "/frentes/imgFrenteInox1.jpeg",
      alt: "Frente de parrilla en acero inoxidable instalado",
    },
  },
  {
    id: "parrillas",
    title: "Instalación Completa",
    description:
      "Instalación completa de frente y parrilla, con sistema de elevación y parrillas reforzadas",
    features: [
      "Guías de elevación de puerta seguro y funcional",
      "Sistema de elevación de parrilla",
      "Cajones y guías de puerta reforzados",
      "Bajoparrilla, espacio para horno, bacha y más"
    ],
    image: {
      src: "/frentes/imgFrenteChapa12.jpeg",
      alt: "Parrilla completa con sistema de elevación",
    },
  },
  {
    id: "especiales",
    title: "Trabajos especiales",
    description:
      "Proyectos a medida para casas, locales o espacios específicos",
    features: [
      "Chimeneas, horno pizzero, mesadas y bachas para completar el espacio",
      "Estufas a leña propias y linea Lepen",
      "Fogoneros, Estacas y Parrillas trasladables",
      "Diseños según plano, instalaciones existentes o ideas",
    ],
    image: {
      src: "/ambientes/imgChimeneaFrente.jpg",
      alt: "Trabajo especial a medida",
    },
  },
];

const whatsappHref = `https://wa.me/5493329473469?text=${encodeURIComponent(
  "Hola, quiero consultar por productos y servicios para parrillas."
)}`;

export function Services() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "unset";
      }
    };
  }, [selectedImage]);

  // Cerrar con ESC
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImage !== null) {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedImage]);

  return (
    <SectionWrapper id="servicios" theme="light" disableAnimation={true}>
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
            Productos y servicios
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Fabricamos y colocamos todo el frente de tu parrilla. Pero no solo hacemos eso...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08, 
                ease: [0.22, 1, 0.36, 1], // Cubic bezier más suave
                type: "tween"
              }}
              className="flex flex-col p-8 rounded-3xl border border-gray-200 bg-white hover:shadow-xl group h-full"
            >
              {/* Imagen clickeable */}
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 mb-6 cursor-pointer flex-shrink-0"
                onClick={() => setSelectedImage(service.image)}
              >
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="rounded-full bg-white/90 backdrop-blur-sm p-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-900"
                    >
                      <path
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex-shrink-0">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-shrink-0">{service.description}</p>
              <ul className="space-y-2 mb-6 flex-grow">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-gray-700">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-900 px-6 py-3 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-900 hover:text-white active:scale-95 mt-auto flex-shrink-0"
              >
                Consultar
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal/Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/10 backdrop-blur-sm p-3 text-white hover:bg-white/20 transition-colors"
              aria-label="Cerrar"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Contenedor de imagen con padding adecuado */}
            <div className="flex items-center justify-center w-full h-full px-12 md:px-20 py-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative flex flex-col items-center justify-center max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Contenedor de imagen que se adapta al tamaño */}
                <div className="relative w-full h-full flex items-center justify-center max-h-[calc(100vh-200px)]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={1920}
                    height={1080}
                    className="object-contain max-w-full max-h-full rounded-lg"
                    priority
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '100%',
                      maxHeight: 'calc(100vh - 200px)',
                    }}
                  />
                </div>
                {/* Información debajo de la imagen */}
                <div className="mt-4 text-center max-w-4xl">
                  <p className="text-white text-lg">
                    {selectedImage.alt}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}

