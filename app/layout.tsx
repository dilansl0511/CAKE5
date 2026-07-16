import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://caketoppercostarica.com"),
  title: "Cake Toppers Personalizados en Costa Rica | CakeTopper Costa Rica",
  description:
    "Cake toppers personalizados para bodas, cumpleaños, baby shower, graduaciones, arreglos florales, recuerdos y más en Costa Rica. Diseños únicos y resistentes, fabricados en plástico. ¡Pedidos por WhatsApp!",
  keywords: [
    "cake topper costa rica",
    "cake toppers costa rica",
    "cake topper personalizado",
    "topper personalizado costa rica",
    "topper para queque costa rica",
    "cake topper boda",
    "cake topper cumpleaños",
    "topper baby shower",
    "topper graduación",
    "arreglos florales con topper",
  ],
  authors: [{ name: "CakeTopper Costa Rica" }],
  alternates: {
    canonical: "https://caketoppercostarica.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Cake Toppers Personalizados en Costa Rica",
    description:
      "Cake toppers personalizados para bodas, cumpleaños, baby shower, graduaciones, arreglos florales, recuerdos y más en Costa Rica. Diseños únicos y resistentes, fabricados en plástico. ¡Pedidos por WhatsApp!",
    url: "https://caketoppercostarica.com",
    siteName: "CakeTopper Costa Rica",
    locale: "es_CR",
    type: "website",
    images: [
      {
        url: "https://caketoppercostarica.com/boda-matrimonio-main.png",
        width: 1190,
        height: 1322,
        alt: "Cake topper personalizado para boda en Costa Rica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cake Toppers Personalizados en Costa Rica",
    description:
      "Cake toppers personalizados para bodas, cumpleaños, baby shower, graduaciones, arreglos florales, recuerdos y más en Costa Rica. Diseños únicos y resistentes, fabricados en plástico. ¡Pedidos por WhatsApp!",
    images: ["https://caketoppercostarica.com/boda-matrimonio-main.png"],
  },
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
