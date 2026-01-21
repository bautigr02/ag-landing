"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useState, useEffect } from "react";

type TabType = "frentes" | "ambientes" | "otros";

const galleryImages = {
  frentes: [
    { src: "/frentes/imgFrenteChapa1.jpeg", alt: "Frente de parrilla en chapa negra" },
    { src: "/frentes/imgFrenteChapa2.jpeg", alt: "Frente de parrilla en chapa negra" },
    { src: "/frentes/imgFrenteChapa3.jpg", alt: "Frente de parrilla en chapa negra" },
    { src: "/frentes/imgFrenteChapa4.jpg", alt: "Frente de parrilla en chapa negra" },
    { src: "/frentes/imgFrenteChapa5.jpeg", alt: "Frente de parrilla en chapa negra" },
    { src: "/frentes/imgFrenteChapa6.jpg", alt: "Frente de parrilla en chapa negra" },
    { src: "/frentes/imgFrenteChapa7.jpg", alt: "Frente de parrilla en chapa negra" },
    { src: "/frentes/imgFrenteChapa8.jpeg", alt: "Frente de parrilla en chapa negra" },
    { src: "/frentes/imgFrenteChapa9.jpeg", alt: "Frente de parrilla en chapa negra" },
    { src: "/frentes/imgFrenteChapa10.jpeg", alt: "Frente de parrilla en chapa negra" },
    { src: "/frentes/imgFrenteChapa11.jpeg", alt: "Frente de parrilla en chapa negra" },
    { src: "/frentes/imgFrenteChapa12.jpeg", alt: "Frente de parrilla en chapa negra" },
    { src: "/frentes/imgFrenteChapa13.jpeg", alt: "Frente de parrilla en chapa negra" },
    { src: "/frentes/imgFrenteChapa14.jpeg", alt: "Frente de parrilla en chapa negra" },
    { src: "/frentes/imgFrenteChapa15.jpeg", alt: "Frente de parrilla en chapa negra" },
    { src: "/frentes/imgFrenteChapa16.jpg", alt: "Frente de parrilla en chapa negra" },
    { src: "/frentes/imgFrenteChapa17.jpg", alt: "Frente de parrilla en chapa negra" },
    { src: "/frentes/imgFrenteChapa18.jpg", alt: "Frente de parrilla en chapa negra" },
    { src: "/frentes/imgFrenteChapa19.jpg", alt: "Frente de parrilla en chapa negra" },
    { src: "/frentes/imgFrenteInox1.jpeg", alt: "Frente de parrilla en acero inoxidable" },
    { src: "/frentes/imgFrenteInox2.jpg", alt: "Frente de parrilla en acero inoxidable" },
    { src: "/frentes/imgFrenteInox3.jpeg", alt: "Frente de parrilla en acero inoxidable" },
    { src: "/frentes/imgFrenteInox4.jpg", alt: "Frente de parrilla en acero inoxidable" },
    { src: "/frentes/imgFrenteInox5.jpeg", alt: "Frente de parrilla en acero inoxidable" },
    { src: "/frentes/imgFrenteInox6.jpeg", alt: "Frente de parrilla en acero inoxidable" },
    { src: "/frentes/imgFrenteAntes.jpg", alt: "Antes de aplicar el frente de parrilla" },
    { src: "/frentes/imgFrenteAntes1.jpeg", alt: "Antes de aplicar el frente de parrilla" },
    { src: "/frentes/imgFrenteDespues1.jpeg", alt: "Después de aplicar el frente de parrilla" },
  ],
  ambientes: [
    { src: "/ambientes/imgBajoMesada.jpg", alt: "Ambiente con bajo mesada" },
    { src: "/ambientes/imgChimeneaFrente.jpg", alt: "Frente de chimenea" },
    { src: "/ambientes/imgFrenteAntes.jpg", alt: "Ambiente antes" },
    { src: "/ambientes/imgFrenteAntes1.jpeg", alt: "Ambiente antes" },
    { src: "/ambientes/imgFrenteDespues1.jpeg", alt: "Ambiente después" },
  ],
  otros: [
    { src: "/otros/imgFogonero.jpg", alt: "Fogonero" },
    { src: "/otros/imgPTrasladable.jpg", alt: "Parrilla trasladable" },
    { src: "/otros/imgPTrasladable2.jpg", alt: "Parrilla trasladable" },
  ],
};

const tabs: { id: TabType; label: string }[] = [
  { id: "frentes", label: "Frentes de Parrilla" },
  { id: "ambientes", label: "Ambientes" },
  { id: "otros", label: "Otros" },
];

export function Gallery() {
  const [activeTab, setActiveTab] = useState<TabType>("frentes");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const currentImages = galleryImages[activeTab];
  const MAX_INITIAL_IMAGES = 7;
  const displayedImages = showAll ? currentImages : currentImages.slice(0, MAX_INITIAL_IMAGES);
  const hasMoreImages = currentImages.length > MAX_INITIAL_IMAGES;

  // Reset selectedIndex y showAll cuando cambia el tab
  useEffect(() => {
    setSelectedIndex(null);
    setShowAll(false);
  }, [activeTab]);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "unset";
      }
    };
  }, [selectedIndex]);

  const selectedImage = selectedIndex !== null ? currentImages[selectedIndex] : null;

  const goToPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? currentImages.length - 1 : selectedIndex - 1);
  };

  const goToNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === currentImages.length - 1 ? 0 : selectedIndex + 1);
  };

  // Navegación con teclado (ESC para cerrar, flechas para navegar)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, currentImages.length]);

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
            Galería de trabajos
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Algunas fotos de trabajos reales. Para ver más trabajos, podés ver la galería completa en nuestro <a href="https://www.instagram.com/agdivisiongastronomia/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Instagram</a>
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-base font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid de imágenes */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${showAll}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            {displayedImages.map((image, index) => (
              <motion.figure
                key={`${activeTab}-${image.src}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
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
            
            {/* Botón "Ver más" si hay más imágenes y no se están mostrando todas */}
            {!showAll && hasMoreImages && displayedImages.length === MAX_INITIAL_IMAGES && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: MAX_INITIAL_IMAGES * 0.03, ease: "easeOut" }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 cursor-pointer hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center"
                onClick={() => setShowAll(true)}
              >
                <div className="text-center p-4 md:p-8 w-full h-full flex flex-col items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto mb-2 md:mb-4 text-gray-600 group-hover:text-gray-900 transition-colors flex-shrink-0"
                  >
                    <path
                      d="M12 5v14m7-7H5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-base md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Ver más</p>
                  <p className="text-xs md:text-sm text-gray-600 px-2">
                    {currentImages.length - MAX_INITIAL_IMAGES} más
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
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
            {currentImages.length > 1 && (
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
            {currentImages.length > 1 && (
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
                  {currentImages.length > 1 && (
                    <p className="text-white/60 text-sm">
                      {selectedIndex + 1} / {currentImages.length}
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
