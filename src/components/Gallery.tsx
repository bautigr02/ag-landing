import Image from "next/image";

const images = [
  {
    src: "/galeria/imgFrenteChapa1.jpeg",
    alt: "Frente de chapa 1",
  },
  {
    src: "/galeria/imgFrenteChapa2.jpeg",
    alt: "Frente de chapa 2",
  },
  {
    src: "/galeria/imgFrenteInox1.jpeg",
    alt: "Frente de inox 1",
  },
  {
    src: "/galeria/imgFrenteInox2.jpg",
    alt: "Frente de inox 2",
  },
  {
    src: "/galeria/imgFrenteChapa3.jpg",
    alt: "Frente de chapa 3",
  },
  {
    src: "/galeria/imgFrenteChapa4.jpg",
    alt: "Frente de chapa 4",
  },
  {
    src: "/galeria/imgFrenteInox3.jpeg",
    alt: "Frente de inox 3",
  },
  {
    src: "/galeria/imgFrenteChapa5.jpeg",
    alt: "Frente de chapa 5",
  },
  {
    src: "/galeria/imgFrenteInox4.jpg",
    alt: "Frente de inox 4"
  }
];

export function Gallery() {
  return (
    <section
      id="trabajos"
      className="border-b border-slate-200 bg-slate-100 py-10 sm:py-12"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-balance text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              Trabajos y frentes de parrilla
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-700">
              Fotos de frentes, detalles y parrillas terminadas.
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {images.map((image) => (
            <figure
              key={image.src}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-2 pb-2 pt-6 text-[10px] text-zinc-100">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


