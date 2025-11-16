import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ElectoPeru - Sistema Electoral 2026",
  description: "Sistema de información electoral para los procesos electorales del 2026 en Perú",
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
