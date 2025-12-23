import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AG División Gastronomía | Frentes de parrilla a medida + colocación",
  description:
    "Metalúrgica especializada en frentes de parrilla a medida, parrillas, parrigas y accesorios, con fabricación propia y colocación en San Pedro, CABA, Rosario y alrededores.",
  metadataBase: new URL("https://ag-division-gastronomia.example.com"),
  openGraph: {
    title: "Frentes de parrilla a medida + colocación | AG División Gastronomía",
    description:
      "Fabricación metalúrgica propia, terminaciones prolijas y colocación en San Pedro, CABA, Rosario y alrededores.",
    type: "website",
    locale: "es_AR",
    url: "https://ag-division-gastronomia.example.com",
    siteName: "AG División Gastronomía",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frente de parrilla metálico a medida instalado",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-section-theme="light">
      <body
        className={`${inter.variable} bg-white text-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

