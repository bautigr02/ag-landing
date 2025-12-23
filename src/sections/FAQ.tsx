"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useState } from "react";

const faqs = [
  {
    q: "¿Qué medidas necesitan para hacer el frente de parrilla?",
    a: "Podés mandarnos fotos y medidas aproximadas del hueco de la parrilla. Si estás en San Pedro y zona, podemos ir a medir. Para CABA, Rosario y otras ciudades coordinamos según el caso.",
  },
  {
    q: "¿Cuánto demoran en fabricar y colocar?",
    a: "Depende del tipo de trabajo, pero en general la fabricación lleva entre 7 y 20 días corridos. La colocación se coordina una vez que el frente está listo.",
  },
  {
    q: "¿En qué zonas trabajan para colocación?",
    a: "Hacemos colocaciones en San Pedro y alrededores, y también viajamos a CABA, Rosario y zonas cercanas coordinando fecha y condiciones.",
  },
  {
    q: "¿Qué incluye la colocación?",
    a: "Incluye la instalación del frente y/o parrilla, ajustes y nivelación, regulación de puertas y guías, y una prueba básica de funcionamiento.",
  },
  {
    q: "¿Con qué materiales trabajan?",
    a: "Trabajamos con perfiles y chapas metálicas pensadas para soportar altas temperaturas y uso frecuente. Elegimos espesores y terminaciones según el tipo de uso.",
  },
  {
    q: "¿Cómo se puede pagar?",
    a: "Podés consultar por efectivo, transferencia y otros medios electrónicos al momento de pedir el presupuesto. Señamos el trabajo para comenzar la fabricación.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq" theme="light">
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
            Preguntas frecuentes
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Algunas dudas típicas sobre medidas, tiempos y colocación. Si tenés
            otra consulta, escribinos directo al WhatsApp.
          </p>
        </motion.div>

        <dl className="space-y-4">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <dt>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-6 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 transition-all flex items-center justify-between gap-4 group"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {item.q}
                  </span>
                  <span
                    className={`text-2xl text-gray-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
              </dt>
              <motion.dd
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {item.a}
                </div>
              </motion.dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </SectionWrapper>
  );
}
