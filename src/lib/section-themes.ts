/**
 * Configuración de temas por sección para el estilo Apple-like
 * Cada sección define su tema (light/dark) y colores específicos
 */

export type SectionTheme = "light" | "dark";

export interface SectionConfig {
  id: string;
  theme: SectionTheme;
  bgColor: string;
  textColor: string;
  accentColor?: string;
}

export const sectionThemes: Record<string, SectionConfig> = {
  hero: {
    id: "hero",
    theme: "light",
    bgColor: "#ffffff",
    textColor: "#1d1d1f",
  },
  beneficios: {
    id: "beneficios",
    theme: "dark",
    bgColor: "#000000",
    textColor: "#f5f5f7",
  },
  servicios: {
    id: "servicios",
    theme: "light",
    bgColor: "#f5f5f7",
    textColor: "#1d1d1f",
  },
  proceso: {
    id: "proceso",
    theme: "dark",
    bgColor: "#1d1d1f",
    textColor: "#f5f5f7",
  },
  trabajos: {
    id: "trabajos",
    theme: "light",
    bgColor: "#ffffff",
    textColor: "#1d1d1f",
  },
  testimonios: {
    id: "testimonios",
    theme: "dark",
    bgColor: "#000000",
    textColor: "#f5f5f7",
  },
  faq: {
    id: "faq",
    theme: "light",
    bgColor: "#f5f5f7",
    textColor: "#1d1d1f",
  },
  contacto: {
    id: "contacto",
    theme: "dark",
    bgColor: "#1d1d1f",
    textColor: "#f5f5f7",
  },
};

