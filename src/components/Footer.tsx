"use client";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black py-12 text-sm text-white/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-semibold text-white mb-1">
              AG División Gastronomía
            </div>
            <div>Salta 1551, San Pedro, Buenos Aires</div>
          </div>
          <div className="space-y-1 text-sm">
            <div>WhatsApp: +54 9 3329 473469</div>
            <div>
              Horarios: Lun a Vie 7:30–12:00 y 14:30–19:00 · Sáb 7:30–12:00
            </div>
          </div>
          <div className="text-xs text-white/50 md:text-right">
            © {year} AG División Gastronomía. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
