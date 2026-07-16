import type { Metadata } from "next";
import SeoCategoryPage from "@/components/SeoCategoryPage";
import { seoPagesBySlug } from "@/lib/seoPages";

const page = seoPagesBySlug["topper-cumpleanos"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  keywords: page.keywords,
  alternates: { canonical: "https://caketoppercostarica.com/topper-cumpleanos" },
  openGraph: {
    title: page.title,
    description: page.description,
    url: "https://caketoppercostarica.com/topper-cumpleanos",
    type: "website",
    locale: "es_CR",
    images: [{ url: page.images[0], alt: page.title }],
  },
};

export default function Page() {
  return <SeoCategoryPage page={page} />;
}
