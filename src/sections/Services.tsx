"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";

const services = [
  {
    id: "frentes",
    title: "Frentes de parrilla a medida",
    description:
      "Diseño y fabricación a medida para que el frente quede alineado con tu muro y tus aberturas.",
    features: [
      "Medidas según obra o espacio existente",
      "Puertas, cajones y registros a pedido",
      "Opciones de terminación y pintura",
    ],
  },
  {
    id: "parrillas",
    title: "Parrillas completas",
    description:
      "Parrillas listas para usar, con sistema de elevación y parrillas reforzadas.",
    features: [
      "Parrilla en V o redonda",
      "Elevación a manija o rueda",
      "Canaletas y grasera",
    ],
  },
  {
    id: "parrigas",
    title: "Parrigas",
    description:
      "Parrigas robustas para gas o carbón, ideales para uso gastronómico o intensivo.",
    features: [
      "Estructuras robustas",
      "Medidas estándar o especiales",
      "Pensadas para uso continuo",
    ],
  },
  {
    id: "accesorios",
    title: "Accesorios para parrilla",
    description:
      "Todo lo que completa tu parrilla: puertas, cajones, braseros y más.",
    features: [
      "Puertas metálicas y de inspección",
      "Cajones y ceniceros",
      "Braseros, tapas y rejillas",
    ],
  },
  {
    id: "especiales",
    title: "Trabajos especiales",
    description:
      "Proyectos a medida para locales gastronómicos, quinchos y espacios específicos.",
    features: [
      "Diseños según plano o idea",
      "Adaptación a equipamiento existente",
      "Coordinación con otras obras",
    ],
  },
];

const whatsappHref = `https://wa.me/5493329473469?text=${encodeURIComponent(
  "Hola, quiero consultar por productos y servicios para parrillas."
)}`;

export function Services() {
  return (
    <SectionWrapper id="servicios" theme="light">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
            Productos y servicios
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Fabricamos y colocamos todo el frente de tu parrilla. Podés elegir
            solo fabricación o fabricación + colocación en obra.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col p-8 rounded-3xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              <ul className="space-y-2 mb-6">
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
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-900 px-6 py-3 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-900 hover:text-white active:scale-95"
              >
                Consultar
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
