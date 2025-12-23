"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  theme?: "light" | "dark";
  className?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export function SectionWrapper({
  children,
  id,
  theme = "light",
  className = "",
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Cambiar tema global cuando la sección entra al viewport
          document.documentElement.setAttribute("data-section-theme", theme);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "-10% 0px -10% 0px",
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

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={`relative min-h-screen ${bgClass} ${className}`}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={fadeInUp}
    >
      {children}
    </motion.section>
  );
}
