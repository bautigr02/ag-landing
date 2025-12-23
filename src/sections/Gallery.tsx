"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";

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
    alt: "Detalle de trabajo metalúrgico",
  },
  {
    src: "/galeria/IMG_6995.jpeg",
    alt: "Frente de parrilla a medida",
  },
];

export function Gallery() {
  return (
    <SectionWrapper id="trabajos" theme="light">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
            Trabajos y frentes de parrilla
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Algunas fotos de trabajos reales. Podés seguir cargando imágenes en{" "}
            <span className="font-mono text-sm">/public/galeria</span> y
            actualizar esta grilla cuando quieras.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100"
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
    </SectionWrapper>
  );
}
