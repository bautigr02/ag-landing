"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  theme?: "light" | "dark";
  className?: string;
  disableAnimation?: boolean; // Nueva prop para desactivar animación
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeOut" },
};

export function SectionWrapper({
  children,
  id,
  theme = "light",
  className = "",
  disableAnimation = false,
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(true); // Cambiado a true para que sea visible por defecto

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Cambiar tema global cuando la sección entra al viewport
          if (typeof document !== "undefined") {
            document.documentElement.setAttribute("data-section-theme", theme);
          }
        }
      },
      {
        threshold: 0.1, // Reducido de 0.2 a 0.1 para mejor detección en mobile
        rootMargin: "-5% 0px -5% 0px", // Reducido de -10% a -5% para mejor detección en mobile
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [theme]);

  const bgClass = theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900";

  // Si disableAnimation es true, renderizar sin animación
  if (disableAnimation) {
    return (
      <section
        ref={sectionRef}
        id={id}
        className={`relative min-h-screen ${bgClass} ${className}`}
      >
        {children}
      </section>
    );
  }

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={`relative min-h-screen ${bgClass} ${className}`}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={fadeInUp}
      style={{ willChange: isInView ? "auto" : "transform, opacity" }} // Optimización para evitar reseteos
    >
      {children}
    </motion.section>
  );
}
