Landing de una sola página para **AG División Gastronomía**, metalúrgica especializada en frentes de parrilla a medida, parrillas, parrigas y accesorios, con foco en conversión a WhatsApp y llamadas desde mobile.

## Instalación y ejecución

1. Cloná o abrí este proyecto en tu máquina.
2. En una terminal, parate en la carpeta del proyecto:

```bash
cd ag-landing
```

3. Instalá dependencias (solo la primera vez):

```bash
npm install
```

4. Levantá el servidor de desarrollo:

```bash
npm run dev
```

5. Abrí `http://localhost:3000` en tu navegador.

## Estructura principal

- `src/app/page.tsx`: página única (landing) con todas las secciones.
- `src/app/layout.tsx`: layout general, `<head>`, metadata SEO y tipografías.
- `src/app/globals.css`: estilos globales y tema (gris/negro metal + verde WhatsApp).
- `src/components/*`: componentes por sección (Hero, Beneficios, Servicios, Proceso, Galería, Testimonios, FAQ, Contacto, Footer, botón flotante de WhatsApp).
- `public/galeria/*`: imágenes placeholder de trabajos (podés reemplazarlas por fotos reales).
- `public/og-image.jpg`: imagen placeholder para OpenGraph (compartir en redes).

## Cómo reemplazar fotos

- Guardá tus fotos en:

```text
public/galeria/
```

- Usá estos nombres sugeridos para que la galería funcione sin tocar código:
  - `trabajo-1.svg` (o `.jpg/.png`)
  - `trabajo-2.svg`
  - `trabajo-3.svg`
  - `trabajo-4.svg`
  - `trabajo-5.svg`
  - `trabajo-6.svg`

Si usás JPG/PNG, solo cambiá las extensiones en el componente `Gallery`.

## Dónde editar textos

Los textos principales están en:

- `src/components/Hero.tsx`: H1, subtítulo y CTA principal a WhatsApp.
- `src/components/Benefits.tsx`: listado de beneficios.
- `src/components/Products.tsx`: cards de productos/servicios.
- `src/components/Process.tsx`: pasos del proceso.
- `src/components/Testimonials.tsx`: testimonios placeholder.
- `src/components/Faq.tsx`: preguntas frecuentes.
- `src/components/Contact.tsx`: dirección, horarios, zona de cobertura, WhatsApp y botón “Llamar”.
- `src/components/Footer.tsx`: datos de negocio y año ©.

Los links de WhatsApp ya están configurados con el número:

```text
+54 9 3329 473469
```

Si cambiás el número, buscá `wa.me/5493329473469` en el código y actualizalo.

## Navegación y anchors

La navegación usa anchors para moverse dentro de la misma página:

- `#servicios`
- `#proceso`
- `#trabajos`
- `#faq`
- `#contacto`

Podés ajustar los IDs directamente en cada `<section>` si querés cambiar los nombres.

## Botón flotante de WhatsApp

El botón flotante de WhatsApp:

- Está implementado en `src/components/FloatingWhatsApp.tsx`.
- Se muestra solo en mobile (`md:hidden`).
- Abre una conversación directa con un mensaje prellenado.

Si querés cambiar el texto inicial del mensaje, editá la constante del `encodeURIComponent` en ese componente.
