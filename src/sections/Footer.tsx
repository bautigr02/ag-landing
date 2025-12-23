"use client";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-2 text-sm font-semibold text-gray-900">
              AG División Gastronomía
            </div>
            <div className="text-sm text-gray-600">
              Salta 1551, San Pedro, Buenos Aires
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <div>WhatsApp: +54 9 3329 473469</div>
            <div>
              Horarios: Lun a Vie 7:30–12:00 y 14:30–19:00 · Sáb 7:30–12:00
            </div>
          </div>
          <div className="text-xs text-gray-500 sm:text-right">
            © {year} AG División Gastronomía. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}

