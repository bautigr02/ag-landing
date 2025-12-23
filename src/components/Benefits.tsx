const benefits = [
  "Frentes y parrillas totalmente a medida, según tu espacio.",
  "Terminaciones prolijas, niveladas y listas para usar.",
  "Materiales resistentes al calor y al uso intenso.",
  "Asesoramiento sobre medidas, terminaciones y uso.",
  "Plazos claros de fabricación y coordinación de colocación.",
  "Seguimiento postventa para que todo quede como corresponde.",
];

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-10 sm:py-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/galeria/imgFrenteInox.jpeg')] bg-cover bg-center opacity-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-50/90 via-slate-50/95 to-slate-50" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-balance text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
          ¿Por qué hacer tu frente de parrilla con AG División Gastronomía?
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-700">
          Somos metalúrgica: fabricamos, probamos y colocamos nosotros mismos.
          Priorizamos medidas correctas y terminaciones prolijas, sin chamuyo.
        </p>
        <ul className="mt-5 grid gap-3 text-sm text-slate-800 sm:grid-cols-2">
          {benefits.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white p-3"
            >
              <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


