import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 sm:h-11 sm:w-11">
            <Image
              src="/galeria/logosinfondo.png"
              alt="Logo AG Gastronomía"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-800">
              AG Gastronomía
            </span>
            <span className="text-[11px] text-slate-500 sm:text-xs">
              Frentes de parrilla a medida + colocación
            </span>
          </div>
        </div>
        <nav className="hidden gap-5 text-[11px] font-medium text-slate-700 sm:flex">
          <a href="#servicios" className="transition-colors hover:text-slate-900">
            Servicios
          </a>
          <a href="#proceso" className="transition-colors hover:text-slate-900">
            Proceso
          </a>
          <a href="#trabajos" className="transition-colors hover:text-slate-900">
            Trabajos
          </a>
          <a href="#faq" className="transition-colors hover:text-slate-900">
            Preguntas
          </a>
          <a href="#contacto" className="transition-colors hover:text-slate-900">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}


