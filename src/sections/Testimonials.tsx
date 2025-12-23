"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";

const testimonials = [
  {
    name: "Juan, quincho en San Pedro",
    city: "San Pedro, Buenos Aires",
    text: "Quedó todo a medida, el frente cierra perfecto y la parrilla es muy cómoda para usar. Cumplieron con los tiempos.",
  },
  {
    name: "María, edificio en CABA",
    city: "Ciudad de Buenos Aires",
    text: "Necesitábamos frentes prolijos para un edificio, respetando medidas del consorcio. El trabajo quedó prolijo y bien terminado.",
  },
  {
    name: "Rubén, gastronómico",
    city: "Rosario, Santa Fe",
    text: "Hicieron la parrigas y los frentes del local. Buena respuesta y se adaptaron a lo que necesitábamos para trabajar todos los días.",
  },
];

export function Testimonials() {
  return (
    <SectionWrapper id="testimonios" theme="dark">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
            Testimonios de clientes reales. Podés reemplazar estos textos cuando
            quieras por opiniones de tus trabajos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
              className="flex flex-col p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <blockquote className="text-lg text-white/90 mb-6 flex-grow leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              <figcaption className="text-sm">
                <div className="font-semibold text-white mb-1">
                  {testimonial.name}
                </div>
                <div className="text-white/60">{testimonial.city}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
