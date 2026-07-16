import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoCategoryPage from "@/components/SeoCategoryPage";
import { seoPages, seoPagesBySlug } from "@/lib/seoPages";

export function generateStaticParams() {
  return seoPages.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = seoPagesBySlug[params.slug];
  if (!page) return {};
  const url = `https://caketoppercostarica.com/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: { title: page.title, description: page.description, url, type: "website", locale: "es_CR", images: [{ url: page.images[0], alt: page.title }] },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: [page.images[0]] }
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const page = seoPagesBySlug[params.slug];
  if (!page) notFound();
  return <SeoCategoryPage page={page} />;
}
