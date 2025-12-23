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
    <section
      id="testimonios"
      className="relative overflow-hidden border-b border-slate-200 bg-slate-100 py-10 sm:py-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/galeria/IMG_6995.jpeg')] bg-cover bg-center opacity-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-100/92 via-slate-100/96 to-slate-100" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-balance text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
          Lo que dicen quienes ya instalaron con nosotros
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-700">
          Testimonios de clientes reales. Podés reemplazar estos textos cuando
          quieras por opiniones de tus trabajos.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-800"
            >
              <blockquote className="text-xs leading-relaxed text-slate-800">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-3 text-[11px] text-slate-600">
                <div className="font-semibold text-slate-900">{t.name}</div>
                <div>{t.city}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


