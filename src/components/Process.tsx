const steps = [
  {
    title: "1. Contacto y medidas",
    text: "Nos mandás fotos y medidas aproximadas por WhatsApp o coordinamos una visita en obra en San Pedro y zona.",
  },
  {
    title: "2. Fabricación metalúrgica",
    text: "Fabricamos el frente, parrilla y accesorios en nuestro taller, con materiales pensados para alta temperatura.",
  },
  {
    title: "3. Coordinación de fecha",
    text: "Definimos día y horario de colocación. Si la obra está en CABA, Rosario u otra ciudad, coordinamos con tiempo.",
  },
  {
    title: "4. Colocación y ajuste final",
    text: "Instalamos, regulamos puertas y guías, probamos el funcionamiento y dejamos todo listo para usar.",
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="relative overflow-hidden border-b border-slate-200 bg-white py-10 sm:py-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/galeria/IMG_6994.jpeg')] bg-cover bg-center opacity-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/92 via-white/96 to-white" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-balance text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
          ¿Cómo es el proceso?
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-700">
          Te acompañamos desde las primeras medidas hasta la colocación final.
          Nos enfocamos en que el frente calce bien y funcione sin problemas.
        </p>

        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {steps.map((step) => (
            <li
              key={step.title}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-1.5 text-xs text-slate-700">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


