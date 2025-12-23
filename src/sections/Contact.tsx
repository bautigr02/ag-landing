"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";

const WHATSAPP_NUMBER_DISPLAY = "+54 9 3329 473469";
const WHATSAPP_LINK = `https://wa.me/5493329473469?text=${encodeURIComponent(
  "Hola, quiero coordinar un presupuesto para frente de parrilla y colocación."
)}`;
const PHONE_LINK = "tel:+5493329473469";

export function Contact() {
  return (
    <SectionWrapper id="contacto" theme="dark">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6">
            Contacto y zona de cobertura
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
            Escribinos por WhatsApp o llamanos para coordinar una visita o
            presupuesto a distancia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 space-y-6"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                Dirección del taller
              </div>
              <div className="text-lg text-white">
                Salta 1551, San Pedro, Buenos Aires, Argentina
              </div>
              <a
                href="https://maps.google.com/?q=Salta+1551+San+Pedro+Buenos+Aires+Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-sm text-[#25d366] hover:underline"
              >
                Ver en Google Maps →
              </a>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                Zona de colocación
              </div>
              <div className="text-lg text-white/90">
                San Pedro y alrededores, CABA, Rosario y zona. Consultanos por
                otras ciudades.
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                Horarios
              </div>
              <div className="text-lg text-white/90">
                Lunes a viernes: 7:30 a 12:00 y 14:30 a 19:00
                <br />
                Sábados: 7:30 a 12:00
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                WhatsApp / Teléfono
              </div>
              <div className="text-lg text-white">{WHATSAPP_NUMBER_DISPLAY}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#25d366] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#20ba5a] active:scale-95"
              >
                Escribir por WhatsApp
              </a>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white hover:text-black active:scale-95"
              >
                Llamar ahora
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-4">
              Mapa de referencia
            </div>
            <p className="text-sm text-white/70 mb-4">
              Podés insertar acá un mapa embebido de Google Maps más adelante.
              Por ahora dejamos un contenedor listo para que reemplaces este
              bloque por el iframe del mapa.
            </p>
            <div className="flex h-64 items-center justify-center rounded-2xl border-2 border-dashed border-white/20 bg-white/5 text-sm text-white/50">
              Espacio reservado para mapa de Google Maps
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
