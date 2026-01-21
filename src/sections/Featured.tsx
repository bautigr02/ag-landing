"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useState, useEffect } from "react";

const featuredImages = [
  {
    src: "/destacados/imgFrenteInox1.jpeg",
    alt: "Frente de parrilla en acero inoxidable destacado",
  },
  {
    src: "/destacados/imgFrenteInox3.jpeg",
    alt: "Frente de parrilla en acero inoxidable - trabajo destacado",
  },
  {
    src: "/destacados/imgFrenteInox5.jpeg",
    alt: "Frente de parrilla en acero inoxidable - detalle destacado",
  },
  {
    src: "/destacados/imgFrenteChapa6.jpg",
    alt: "Frente de parrilla en chapa negra destacado",
  },
  {
    src: "/destacados/imgFrenteChapa7.jpg",
    alt: "Frente de parrilla en chapa - trabajo destacado",
  },
  {
    src: "/destacados/imgFrenteChapa12.jpeg",
    alt: "Frente de parrilla en chapa - trabajo destacado",
  }
];

export function Featured() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Detectar si es mobile
  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calcular índices visibles (1 en mobile, 2 en desktop)
  const getVisibleIndices = () => {
    const indices: number[] = [];
    const imagesPerView = isMobile ? 1 : 2;
    const maxSlides = Math.ceil(featuredImages.length / imagesPerView);
    const currentGroup = Math.floor(currentIndex / imagesPerView);
    const startIdx = (currentGroup * imagesPerView) % featuredImages.length;
    
    for (let i = 0; i < imagesPerView; i++) {
      const idx = (startIdx + i) % featuredImages.length;
      indices.push(idx);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  // Auto-play carousel - avanza de a grupos según el tamaño de pantalla
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      const imagesPerView = isMobile ? 1 : 2;
      const maxGroups = Math.ceil(featuredImages.length / imagesPerView);
      const currentGroup = Math.floor(currentIndex / imagesPerView);
      const nextGroup = (currentGroup + 1) % maxGroups;
      setCurrentIndex(nextGroup * imagesPerView);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, isMobile]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    const imagesPerView = isMobile ? 1 : 2;
    const maxGroups = Math.ceil(featuredImages.length / imagesPerView);
    const currentGroup = Math.floor(currentIndex / imagesPerView);
    const prevGroup = currentGroup === 0 ? maxGroups - 1 : currentGroup - 1;
    setCurrentIndex(prevGroup * imagesPerView);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    const imagesPerView = isMobile ? 1 : 2;
    const maxGroups = Math.ceil(featuredImages.length / imagesPerView);
    const currentGroup = Math.floor(currentIndex / imagesPerView);
    const nextGroup = (currentGroup + 1) % maxGroups;
    setCurrentIndex(nextGroup * imagesPerView);
  };

  // Funciones para manejar swipe/touch
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Navegación con teclado
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        // Si hay un modal abierto, manejar navegación dentro del modal
        if (e.key === "Escape") {
          setSelectedImageIndex(null);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          setSelectedImageIndex((prev) =>
            prev === null ? null : prev === 0 ? featuredImages.length - 1 : prev - 1
          );
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          setSelectedImageIndex((prev) =>
            prev === null ? null : (prev + 1) % featuredImages.length
          );
        }
      } else {
        // Navegación del carrusel
        if (e.key === "ArrowLeft") {
          setIsAutoPlaying(false);
          const imagesPerView = isMobile ? 1 : 2;
          const maxGroups = Math.ceil(featuredImages.length / imagesPerView);
          const currentGroup = Math.floor(currentIndex / imagesPerView);
          const prevGroup = currentGroup === 0 ? maxGroups - 1 : currentGroup - 1;
          setCurrentIndex(prevGroup * imagesPerView);
        } else if (e.key === "ArrowRight") {
          setIsAutoPlaying(false);
          const imagesPerView = isMobile ? 1 : 2;
          const maxGroups = Math.ceil(featuredImages.length / imagesPerView);
          const currentGroup = Math.floor(currentIndex / imagesPerView);
          const nextGroup = (currentGroup + 1) % maxGroups;
          setCurrentIndex(nextGroup * imagesPerView);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, currentIndex, isMobile]);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "unset";
      }
    };
  }, [selectedImageIndex]);

  const goToPreviousImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      selectedImageIndex === 0 ? featuredImages.length - 1 : selectedImageIndex - 1
    );
  };

  const goToNextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % featuredImages.length);
  };

  const selectedImage = selectedImageIndex !== null ? featuredImages[selectedImageIndex] : null;

  return (
    <SectionWrapper id="destacados" theme="light">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
            Trabajos destacados
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Algunos de nuestros mejores trabajos en frentes de parrilla a medida
          </p>
        </motion.div>

        {/* Carrusel */}
        <div className="relative w-full">
          <div 
            className="relative overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 justify-items-center"
              >
                {visibleIndices.map((imgIndex, idx) => (
                  <motion.div
                    key={`${currentIndex}-${imgIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="relative h-[400px] md:h-[600px] overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedImageIndex(imgIndex)}
                  >
                    <Image
                      src={featuredImages[imgIndex].src}
                      alt={featuredImages[imgIndex].alt}
                      fill
                      className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                      priority={imgIndex < 3}
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
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Botón anterior */}
            {featuredImages.length > (isMobile ? 1 : 2) && (
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 backdrop-blur-sm p-3 text-gray-900 hover:bg-white transition-all hover:scale-110 active:scale-95 shadow-lg"
                aria-label="Imagenes anteriores"
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
            {featuredImages.length > (isMobile ? 1 : 2) && (
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 backdrop-blur-sm p-3 text-gray-900 hover:bg-white transition-all hover:scale-110 active:scale-95 shadow-lg"
                aria-label="Imagenes siguientes"
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
          </div>

          {/* Indicadores de posición */}
          <div className="mt-6 flex justify-center items-center gap-2">
            {Array.from({ length: Math.ceil(featuredImages.length / (isMobile ? 1 : 2)) }).map((_, groupIndex) => {
              const imagesPerView = isMobile ? 1 : 2;
              const groupStart = groupIndex * imagesPerView;
              const isActive = Math.floor(currentIndex / imagesPerView) === groupIndex;
              return (
                <button
                  key={groupIndex}
                  onClick={() => setCurrentIndex(groupStart)}
                  className={`h-2 rounded-full transition-all ${
                    isActive
                      ? "w-8 bg-gray-900"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir al grupo ${groupIndex + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* Modal/Lightbox */}
        <AnimatePresence mode="wait">
          {selectedImage && selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedImageIndex(null)}
            >
              {/* Botón cerrar */}
              <button
                onClick={() => setSelectedImageIndex(null)}
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
              {featuredImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPreviousImage();
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
              {featuredImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNextImage();
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

              {/* Contenedor de imagen con padding adecuado */}
              <div className="flex items-center justify-center w-full h-full px-12 md:px-20 py-4">
                <motion.div
                  key={selectedImageIndex}
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
                    {featuredImages.length > 1 && (
                      <p className="text-white/60 text-sm">
                        {selectedImageIndex + 1} / {featuredImages.length}
                      </p>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}

