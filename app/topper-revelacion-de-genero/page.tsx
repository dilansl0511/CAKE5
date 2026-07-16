import type { Metadata } from "next";
import SeoCategoryPage from "@/components/SeoCategoryPage";
import { seoPagesBySlug } from "@/lib/seoPages";

const page = seoPagesBySlug["topper-revelacion-de-genero"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  keywords: page.keywords,
  alternates: { canonical: "https://caketoppercostarica.com/topper-revelacion-de-genero" },
  openGraph: {
    title: page.title,
    description: page.description,
    url: "https://caketoppercostarica.com/topper-revelacion-de-genero",
    type: "website",
    locale: "es_CR",
    images: [{ url: page.images[0], alt: page.title }],
  },
};

export default function Page() {
  return <SeoCategoryPage page={page} />;
}
