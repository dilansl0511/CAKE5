import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cake Toppers Personalizados en Costa Rica | CakeTopper CR",
  description:
    "Cake toppers personalizados para bodas, cumpleaños, baby shower, graduaciones, arreglos florales, recuerdos y más en Costa Rica. Diseños únicos y resistentes, fabricados en plástico. ¡Pedidos por WhatsApp!",
  keywords: [
    "cake topper costa rica",
    "toppers para torta",
    "cake topper personalizado",
    "decoración de tortas",
    "cake topper boda",
    "cake topper cumpleaños",
    "toppers personalizados costa rica",
    "topper para queque costa rica",
  ],
  authors: [{ name: "CakeTopper Costa Rica" }],
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
        url: "/Boda_o_Matrimonio_3_main.png",
        width: 1200,
        height: 1200,
        alt: "Cake topper personalizado de boda en Costa Rica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cake Toppers Personalizados en Costa Rica",
    description:
      "Cake toppers personalizados para bodas, cumpleaños, baby shower, graduaciones, arreglos florales, recuerdos y más en Costa Rica. Diseños únicos y resistentes, fabricados en plástico. ¡Pedidos por WhatsApp!",
    images: ["/Boda_o_Matrimonio_3_main.png"],
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
