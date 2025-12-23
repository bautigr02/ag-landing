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

export function Products() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-10 sm:py-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/galeria/IMG_6993.jpeg')] bg-cover bg-center opacity-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-50/90 via-slate-50/95 to-slate-50" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-balance text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              Productos y servicios
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-700">
              Fabricamos y colocamos todo el frente de tu parrilla. Podés elegir
              solo fabricación o fabricación + colocación en obra.
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-100"
          >
            Consultar ahora por WhatsApp
          </a>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4"
            >
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-1 text-xs text-slate-700">
                  {service.description}
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-700">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-1 inline-block h-1 w-1 flex-none rounded-full bg-brand/70" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-zinc-100 px-3 py-2 text-xs font-semibold text-zinc-950 hover:bg-whatsapp hover:text-zinc-950"
                >
                  Consultar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


