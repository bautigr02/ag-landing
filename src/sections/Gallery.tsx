"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useState, useEffect } from "react";

const images = [
  {
    src: "/galeria/imgFrenteInox.jpeg",
    alt: "Frente de parrilla en acero inoxidable instalado",
  },
  {
    src: "/galeria/imgFrenteChapaNegra.jpeg",
    alt: "Frente de parrilla en chapa negra",
  },
  {
    src: "/galeria/imgDetalleFrenteInox.jpeg",
    alt: "Detalle de frente de parrilla en inox y terminación prolija",
  },
  {
    src: "/galeria/IMG_6993.jpeg",
    alt: "Trabajo de parrilla instalado",
  },
  {
    src: "/galeria/IMG_6994.jpeg",
    alt: "Antes de aplicar el frente de parrilla",
  },
  {
    src: "/galeria/IMG_6995.jpeg",
    alt: "Frente de parrilla a medida aplicado",
  },
];

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  // Navegación con teclado (ESC para cerrar, flechas para navegar)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setSelectedIndex((prev) => {
          if (prev === null) return null;
          return prev === 0 ? images.length - 1 : prev - 1;
        });
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setSelectedIndex((prev) => {
          if (prev === null) return null;
          return prev === images.length - 1 ? 0 : prev + 1;
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  const goToPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
  };

  const goToNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
  };

  return (
    <SectionWrapper id="trabajos" theme="light">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
            Trabajos y frentes de parrilla
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Algunas fotos de trabajos reales. Para ver más trabajos, podés ver la galería completa en nuestro <a href="https://www.instagram.com/agdivisiongastronomia/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Instagram</a>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, delay: index * 0.03, ease: "easeOut" }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* Modal/Lightbox */}
      <AnimatePresence mode="wait">
        {selectedImage && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedIndex(null)}
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

            {/* Botón anterior */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 backdrop-blur-sm p-3 text-white hover:bg-white/20 transition-colors md:left-6"
                aria-label="Imagen anterior"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}

            {/* Botón siguiente */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 backdrop-blur-sm p-3 text-white hover:bg-white/20 transition-colors md:right-6"
                aria-label="Imagen siguiente"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}

            {/* Contenedor de imagen con padding para los botones */}
            <div className="flex items-center justify-center w-full h-full px-12 md:px-20 py-4">
              <motion.div
                key={selectedIndex}
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
                  <p className="text-white text-lg mb-1">{selectedImage.alt}</p>
                  {images.length > 1 && (
                    <p className="text-white/60 text-sm">
                      {selectedIndex + 1} / {images.length}
                    </p>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
