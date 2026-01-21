import Image from "next/image";

const WHATSAPP_NUMBER = "+5493329473469";

const whatsappHref = `https://wa.me/5493329473469?text=${encodeURIComponent(
  "Hola, quiero pedir un presupuesto para frentes de parrilla a medida."
)}`;

export function Hero() {
  return (
    <section id="inicio" className="border-b border-slate-200 bg-slate-100">
      <div className="mx-auto max-w-5xl px-4 pb-10 pt-8 sm:px-6 sm:pt-12 lg:pb-14">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col lg:flex-row">
            {/* Columna de texto */}
            <div className="flex flex-1 flex-col justify-center gap-5 px-5 py-7 sm:px-7 lg:px-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-700">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-whatsapp" />
                Metalúrgica especializada en la fabricación y colocación de frentes de parrilla
              </div>
              <div className="space-y-4">
                <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem]">
                  Frentes de parrilla a medida{" "}
                  <span className="block text-base font-normal uppercase tracking-[0.15em] text-slate-500 sm:text-sm">
                    Fabricación metalúrgica + colocación en obra
                  </span>
                  <span className="block text-lg font-normal text-slate-600 sm:text-xl">
                    trabajos prolijos, nivelados y listos para usar
                  </span>
                </h1>
                <p className="max-w-xl text-pretty text-sm text-slate-700 sm:text-base">
                  Fabricamos y colocamos frentes de parrilla, parrillas y accesorios
                  en San Pedro, CABA, Rosario y alrededores. Medidas a pedido,
                  materiales resistentes y terminaciones prolijas.
                </p>
              </div>
              <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-zinc-950 shadow-sm shadow-whatsapp/40 transition hover:bg-whatsapp/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                >
                  Pedir presupuesto por WhatsApp
                </a>
                <a
                  href="#trabajos"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 hover:border-slate-600 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                >
                  Ver trabajos
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-[11px] text-slate-600">
                <div>
                  <span className="font-semibold text-slate-800">Zona:</span>{" "}
                  San Pedro y zona, CABA, Rosario y alrededores
                </div>
                <div>
                  <span className="font-semibold text-slate-800">Tel/WhatsApp:</span>{" "}
                  {WHATSAPP_NUMBER}
                </div>
              </div>
            </div>

            {/* Columna de imagen con degrade lateral */}
            <div className="relative min-h-[220px] flex-1 overflow-hidden lg:min-h-[320px]">
              <div className="absolute inset-0 bg-gradient-to-l from-white via-white/30 to-transparent" />
                      <Image
                        src="/galeria/imgFrenteInox1.jpeg"
                alt="Frente de parrilla instalado por AG División Gastronomía"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


