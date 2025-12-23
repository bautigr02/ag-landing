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

export function Faq() {
  return (
    <section
      id="faq"
      className="border-b border-slate-200 bg-white py-10 sm:py-12"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-balance text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
          Preguntas frecuentes
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-700">
          Algunas dudas típicas sobre medidas, tiempos y colocación. Si tenés
          otra consulta, escribinos directo al WhatsApp.
        </p>

        <dl className="mt-6 space-y-4">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <dt className="text-sm font-semibold text-slate-900">{item.q}</dt>
              <dd className="mt-1.5 text-xs text-slate-700">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}


