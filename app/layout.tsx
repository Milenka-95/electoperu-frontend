import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ElectoPerú - Sistema de Información Electoral",
  description: "Sistema de información electoral para ciudadanos peruanos",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
