import Image from "next/image";
import Link from "next/link";
import type { SeoPage } from "@/lib/seoPages";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const PHONE = "50684043838";

export default function SeoCategoryPage({ page }: { page: SeoPage }) {
  const message = encodeURIComponent(`Hola. Vi la página de ${page.shortTitle} y me interesa cotizar un diseño personalizado.`);
  const wa = `https://wa.me/${PHONE}?text=${message}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    provider: { "@type": "LocalBusiness", name: "CakeTopper Costa Rica", areaServed: "Costa Rica" },
    areaServed: { "@type": "Country", name: "Costa Rica" },
    description: page.description,
    url: `https://caketoppercostarica.com/${page.slug}`
  };

  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="pt-36 pb-20 bg-gradient-to-br from-cream via-blush-50 to-champagne">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-dusty hover:underline mb-7">← Volver al inicio</Link>
            <p className="text-xs tracking-[0.3em] uppercase text-dusty mb-4">{page.eyebrow}</p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#3d2a2a] leading-tight mb-6" style={{ fontFamily: "var(--font-playfair)" }}>{page.title}</h1>
            <p className="text-xl text-[#3d2a2a]/70 leading-relaxed mb-8" style={{ fontFamily: "var(--font-cormorant)" }}>{page.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center rounded-full bg-gradient-to-r from-blush-500 to-dusty text-white px-7 py-4 font-medium shadow-lg hover:scale-105 transition-transform">Cotizar por WhatsApp</a>
              <a href="#galeria-categoria" className="inline-flex justify-center items-center rounded-full border border-dusty/30 bg-white/70 px-7 py-4 text-[#3d2a2a] hover:bg-white transition-colors">Ver ejemplos</a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-white">
            <Image src={page.images[0]} alt={`${page.shortTitle} personalizado elaborado por CakeTopper Costa Rica`} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-dusty mb-3">Personalización</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d2a2a] mb-5" style={{ fontFamily: "var(--font-playfair)" }}>Un diseño hecho para tu celebración</h2>
            <p className="text-lg text-[#3d2a2a]/65 leading-relaxed" style={{ fontFamily: "var(--font-cormorant)" }}>Puedes compartir la idea, temática, colores y texto que deseas. Preparamos la propuesta y la enviamos para aprobación antes de fabricar el topper.</p>
          </div>
          <ul className="grid gap-4">
            {page.details.map((item) => <li key={item} className="flex gap-3 p-4 rounded-2xl bg-cream border border-blush-100"><span className="text-dusty">✓</span><span className="text-[#3d2a2a]/75">{item}</span></li>)}
          </ul>
        </div>
      </section>

      <section id="galeria-categoria" className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-dusty mb-3">Trabajos realizados</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#3d2a2a]" style={{ fontFamily: "var(--font-playfair)" }}>Ejemplos de {page.shortTitle.toLowerCase()}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {page.images.map((src, i) => <div key={src} className="relative aspect-square overflow-hidden rounded-3xl bg-white shadow-sm"><Image src={src} alt={`${page.shortTitle} personalizado, ejemplo ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" /></div>)}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3d2a2a] mb-10" style={{ fontFamily: "var(--font-playfair)" }}>Preguntas frecuentes</h2>
          <div className="space-y-4">
            {page.faq.map((item) => <details key={item.question} className="group rounded-2xl border border-blush-100 bg-cream p-5"><summary className="cursor-pointer font-semibold text-[#3d2a2a]">{item.question}</summary><p className="pt-3 text-[#3d2a2a]/65 leading-relaxed">{item.answer}</p></details>)}
          </div>
          <div className="mt-12 text-center rounded-[2rem] bg-[#3d2a2a] text-white p-9">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>¿Tienes una idea diferente?</h2>
            <p className="text-white/70 mb-7">Envíanos tu referencia y las medidas aproximadas del queque.</p>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-white text-[#3d2a2a] px-7 py-4 font-medium hover:scale-105 transition-transform">Solicitar cotización</a>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
