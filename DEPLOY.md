# 🚀 Cómo publicar la landing de AG División Gastronomía

## Opciones de publicación

### 1. **Vercel (Recomendado - Gratis y fácil)**

Vercel es la plataforma creada por los mismos que hacen Next.js, así que funciona perfecto:

1. **Crear cuenta en Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Registrate con GitHub, GitLab o email

2. **Conectar el proyecto:**
   - Si tenés el código en GitHub/GitLab:
     - En Vercel, click en "Add New Project"
     - Seleccioná tu repositorio
     - Vercel detecta Next.js automáticamente
     - Click en "Deploy"
   
   - Si NO tenés el código en Git:
     - Instalá la CLI de Vercel: `npm i -g vercel`
     - En la carpeta del proyecto, ejecutá: `vercel`
     - Seguí las instrucciones (login, confirmar configuración)
     - Listo, te da una URL tipo `ag-landing.vercel.app`

3. **Configuración automática:**
   - Vercel detecta Next.js y configura todo automáticamente
   - Cada vez que hagas `git push`, se actualiza automáticamente

### 2. **Netlify (Alternativa gratuita)**

1. **Crear cuenta en Netlify:**
   - Ve a [netlify.com](https://netlify.com)
   - Registrate con GitHub o email

2. **Publicar:**
   - Si tenés Git: conectá el repositorio (igual que Vercel)
   - Si NO tenés Git:
     - Arrastrá la carpeta `ag-landing` a [app.netlify.com/drop](https://app.netlify.com/drop)
     - O usá la CLI: `npm i -g netlify-cli` y luego `netlify deploy`

3. **Configuración:**
   - Build command: `npm run build`
   - Publish directory: `.next`

### 3. **GitHub Pages (Gratis, pero requiere más pasos)**

1. **Configurar Next.js para export estático:**
   ```bash
   # En next.config.ts, agregar:
   output: 'export'
   ```

2. **Build y deploy:**
   ```bash
   npm run build
   # Esto genera una carpeta 'out'
   # Subir el contenido de 'out' a GitHub Pages
   ```

### 4. **Servidor propio (VPS, Hosting compartido, etc.)**

1. **Build del proyecto:**
   ```bash
   npm run build
   npm start
   ```

2. **O usar PM2 para mantenerlo corriendo:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "ag-landing" -- start
   ```

## 📝 Checklist antes de publicar

- [ ] Verificar que todas las imágenes estén en `/public/galeria/`
- [ ] Revisar que los datos de contacto estén correctos (WhatsApp, dirección, horarios)
- [ ] Probar en mobile y desktop
- [ ] Verificar que los links de WhatsApp funcionen
- [ ] Revisar el SEO (título, descripción en `layout.tsx`)

## 🔧 Variables de entorno (si las necesitás después)

Si en el futuro necesitás agregar variables de entorno (ej: API keys), en Vercel/Netlify las configurás desde el dashboard.

## 📱 Dominio personalizado

Tanto Vercel como Netlify te permiten conectar un dominio propio:
- Vercel: Settings → Domains → Add Domain
- Netlify: Domain settings → Add custom domain

## ⚡ Performance

La landing ya está optimizada:
- Imágenes con Next.js Image (optimización automática)
- Código minificado en producción
- Lazy loading de componentes
- Transiciones suaves y rápidas (0.3s)

## 🆘 Problemas comunes

**Error al hacer build:**
- Verificar que todas las dependencias estén instaladas: `npm install`
- Verificar que no haya errores de TypeScript: `npm run build`

**Las imágenes no se ven:**
- Verificar que estén en `/public/galeria/`
- Verificar las rutas en los componentes (deben empezar con `/galeria/...`)

**El navbar tapa contenido:**
- Ya está corregido con `pt-20` en mobile

---

**Recomendación:** Usá Vercel, es la opción más simple y está hecha específicamente para Next.js.

