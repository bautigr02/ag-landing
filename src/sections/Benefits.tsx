"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";

const benefits = [
  "Frentes y parrillas totalmente a medida, según tu espacio.",
  "Terminaciones prolijas, niveladas y listas para usar.",
  "Materiales resistentes al calor y al uso intenso.",
  "Asesoramiento sobre medidas, terminaciones y uso.",
  "Plazos claros de fabricación y coordinación de colocación.",
  "Seguimiento postventa para que todo quede como corresponde.",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
        staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export function Benefits() {
  return (
    <SectionWrapper id="beneficios" theme="dark">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
            Somos metalúrgica: fabricamos, probamos y colocamos nosotros mismos.
            Priorizamos medidas correctas y terminaciones prolijas.
          </p>
        </motion.div>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="mt-1 h-2 w-2 rounded-full bg-[#25d366] flex-shrink-0" />
              <span className="text-lg text-white/90">{benefit}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </SectionWrapper>
  );
}
