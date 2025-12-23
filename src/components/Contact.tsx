const WHATSAPP_NUMBER_DISPLAY = "+54 9 3329 473469";
const WHATSAPP_LINK = `https://wa.me/5493329473469?text=${encodeURIComponent(
  "Hola, quiero coordinar un presupuesto para frente de parrilla y colocación."
)}`;

const PHONE_LINK = "tel:+5493329473469";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-10 sm:py-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/galeria/imgFrenteChapaNegra.jpeg')] bg-cover bg-center opacity-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-50/92 via-slate-50/96 to-slate-50" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4">
            <h2 className="text-balance text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              Contacto y zona de cobertura
            </h2>
            <p className="text-sm text-slate-700">
              Escribinos por WhatsApp o llamanos para coordinar una visita o
              presupuesto a distancia.
            </p>

            <div className="mt-3 grid gap-3 text-sm text-slate-800 sm:grid-cols-2">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Dirección del taller
                </div>
                <div className="mt-1">
                  Salta 1551, San Pedro, Buenos Aires, Argentina
                </div>
                <a
                  href="https://maps.google.com/?q=Salta+1551+San+Pedro+Buenos+Aires+Argentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex text-xs text-brand hover:underline"
                >
                  Ver en Google Maps
                </a>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Zona de colocación
                </div>
                <div className="mt-1 text-xs text-slate-200">
                  San Pedro y alrededores, CABA, Rosario y zona. Consultanos por
                  otras ciudades.
                </div>
              </div>
            </div>

            <div className="mt-3 grid gap-3 text-sm text-slate-800 sm:grid-cols-2">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Horarios
                </div>
                <div className="mt-1 text-xs text-slate-700">
                  Lunes a viernes: 7:30 a 12:00 y 14:30 a 19:00
                  <br />
                  Sábados: 7:30 a 12:00
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  WhatsApp / Teléfono
                </div>
                <div className="mt-1 text-xs text-slate-700">
                  {WHATSAPP_NUMBER_DISPLAY}
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3 text-sm sm:flex-row">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-whatsapp/40 hover:bg-whatsapp/90"
              >
                Escribir por WhatsApp
              </a>
              <a
                href={PHONE_LINK}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-600 hover:text-slate-900"
              >
                Llamar ahora
              </a>
            </div>
          </div>

          <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-700">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Mapa de referencia
            </div>
            <p className="text-[11px] text-slate-700">
              Podés insertar acá un mapa embebido de Google Maps más adelante.
              Por ahora dejamos un contenedor listo para que reemplaces este
              bloque por el iframe del mapa.
            </p>
            <div className="mt-2 flex h-40 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-[11px] text-slate-500">
              Espacio reservado para mapa de Google Maps
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


