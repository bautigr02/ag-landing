"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";

const WHATSAPP_NUMBER_DISPLAY = "+54 9 3329 473469";
const WHATSAPP_LINK = `https://wa.me/5493329473469?text=${encodeURIComponent(
  "Hola, quiero coordinar un presupuesto para frente de parrilla y colocación."
)}`;
const PHONE_LINK = "tel:+5493329473469";
const EMAIL = "agdivisiongastronomia@gmail.com";
const EMAIL_LINK = `mailto:${EMAIL}`;

export function Contact() {
  return (
    <SectionWrapper id="contacto" theme="dark">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
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

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
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

            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                Email
              </div>
              <a
                href={EMAIL_LINK}
                className="text-lg text-white hover:text-[#25d366] transition-colors"
              >
                {EMAIL}
              </a>
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

            {/* Redes sociales */}
            <div className="pt-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-3">
                Seguinos en
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/agdivisiongastronomia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/20 active:scale-95"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/645491218651583?ref=_xav_ig_profile_page_web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/20 active:scale-95"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@agdivgastro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/20 active:scale-95"
                  aria-label="TikTok"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
