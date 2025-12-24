"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";

const steps = [
  {
    number: "01",
    title: "Contacto y medidas",
    text: "Nos mandás fotos y medidas por WhatsApp (te asesoramos) o coordinamos una visita en San Pedro y zona.",
  },
  {
    number: "02",
    title: "Fabricación metalúrgica",
    text: "Fabricamos el frente, parrilla y accesorios en nuestro taller, con materiales pensados para altas temperaturas.",
  },
  {
    number: "03",
    title: "Coordinación de fecha",
    text: "Definimos día y horario de colocación. Si la obra está en CABA, Rosario u otra ciudad, coordinamos con tiempo.",
  },
  {
    number: "04",
    title: "Colocación y ajuste final",
    text: "Instalamos, regulamos puertas y guías, probamos el funcionamiento y dejamos todo listo para usar.",
  },
];

export function Process() {
  return (
    <SectionWrapper id="proceso" theme="dark">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6">
            ¿Cómo es el proceso?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, delay: index * 0.03, ease: "easeOut" }}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl font-semibold text-white/20 flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-white/70 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
