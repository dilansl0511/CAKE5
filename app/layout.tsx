import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cake Toppers Personalizados en Costa Rica | CakeTopper CR",
  description:
    "Cake toppers personalizados para bodas, cumpleaños, baby shower y graduaciones en Costa Rica. Diseños únicos en acrílico y madera. ¡Pedidos por WhatsApp!",
  keywords: [
    "cake topper costa rica",
    "toppers para torta",
    "cake topper personalizado",
    "decoración de tortas",
    "cake topper boda",
    "cake topper cumpleaños",
    "toppers acrílico costa rica",
  ],
  authors: [{ name: "CakeTopper Costa Rica" }],
  openGraph: {
    title: "Cake Toppers Personalizados en Costa Rica",
    description:
      "Diseños únicos y elegantes para hacer tu celebración inolvidable. Bodas, cumpleaños, baby shower y más.",
    url: "https://caketoppercostarica.com",
    siteName: "CakeTopper Costa Rica",
    locale: "es_CR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cake Toppers Personalizados en Costa Rica",
    description:
      "Diseños únicos para bodas, cumpleaños, baby shower y más. Pedidos por WhatsApp.",
  },
  metadataBase: new URL("https://caketoppercostarica.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
