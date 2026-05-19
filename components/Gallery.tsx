"use client";
import { useState } from "react";

const WA_LINK = "https://wa.me/50687621817?text=Hola!%20Me%20interesa%20un%20cake%20topper%20personalizado.";

const categories = [
  {
    name: "Aniversario",
    emoji: "💑",
    mainImg: "/Aniversario_1_main.jpeg",
    gallery: ["/Aniversario_2.png", "/Aniversario_3.jpeg"],
  },
  {
    name: "Bautizo",
    emoji: "✝️",
    mainImg: "/Bautizo_2_main.png",
    gallery: ["/Bautizo_1.png"],
  },
  {
    name: "Boda & Matrimonio",
    emoji: "💍",
    mainImg: "/Boda_o_Matrimonio_3_main.png",
    gallery: ["/Boda_o_Matrimonio_1.png", "/Boda_o_matrimonio_2.png", "/Boda_o_matrimonio_4.png"],
  },
  {
    name: "Cumpleaños",
    emoji: "🎂",
    mainImg: "/Feliz_Cumpleaños_5_main.jpeg",
    gallery: ["/Feliz_Cumpleaños_1.png", "/Feliz_Cumpleaños_2.png", "/Feliz_Cumpleaños_3.png", "/Feliz_Cumpleaños_4.jpeg", "/Feliz_Cumpleaños_6.png", "/Feliz_Cumpleaños_7.png"],
  },
  {
    name: "Personalizados con Nombre",
    emoji: "✍️",
    mainImg: "/Nombres_2_main.png",
    gallery: ["/Nombres_1.jpeg", "/Nombres_3.png"],
  },
  {
    name: "Primera Comunión",
    emoji: "🕊️",
    mainImg: "/Primera_Comunión_2_main.png",
    gallery: ["/Primera_comunión_1.png", "/Primera_comunión_3.jpeg", "/Primera_comunión_4.png"],
  },
  {
    name: "Revelación de Género",
    emoji: "👶",
    mainImg: "/Revelación_de_Género_1_main.jpeg",
    gallery: ["/Revelación_de_Género_2.png"],
  },
  {
    name: "Temáticos",
    emoji: "🎨",
    mainImg: "/Temáticos_1_main.png",
    gallery: ["/Temáticos_2.png", "/Temáticos_3.png", "/Temáticos_4.png"],
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeImg, setActiveImg] = useState<string | null>(null);

  const openLightbox = (img: string) => setActiveImg(img);
  const closeLightbox = () => setActiveImg(null);

  return (
    <section id="galeria" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-xs tracking-[0.35em] uppercase text-dusty font-sans mb-3">Nuestros diseños</p>
          <h2 className="font-bold text-4xl md:text-5xl text-[#3d2a2a] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Galería de <span className="text-gradient italic">Toppers</span>
          </h2>
          <p className="text-lg text-[#3d2a2a]/60 max-w-2xl mx-auto leading-relaxed mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>
            Cada topper es único, creado especialmente para ti. Tú decides el estilo, tamaño, colores, formas y más.
          </p>
          <p className="text-base text-[#3d2a2a]/60 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-cormorant)" }}>
            Si eres pastelero, panadero o repostero contáctanos — tenemos precios especiales por cantidad. Si tienes un negocio y te gustaría vender nuestros productos, te los ofrecemos a menor precio o en modalidad de consignación.
          </p>
          <p className="text-xs text-[#3d2a2a]/40 font-sans mt-3 italic">* Imágenes con fines ilustrativos</p>
        </div>

        {/* 8-card grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {categories.map((cat, i) => (
            <div key={cat.name} className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white">
              {/* Main image */}
              <div className="aspect-[3/4] overflow-hidden" onClick={() => setActiveCategory(activeCategory === i ? null : i)}>
                <img
                  src={cat.mainImg}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3d2a2a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <span className="text-sm">{cat.emoji}</span>
                </div>
                {/* Gallery count */}
                {cat.gallery.length > 0 && (
                  <div className="absolute top-3 right-3 bg-blush-500/90 text-white text-xs font-sans font-medium rounded-full px-2 py-0.5">
                    +{cat.gallery.length}
                  </div>
                )}
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-sans font-semibold text-sm">{cat.name}</p>
                  <p className="text-white/70 text-xs font-sans">Ver más fotos</p>
                </div>
              </div>

              {/* Category name always visible */}
              <div className="p-3 text-center">
                <p className="text-sm font-sans font-semibold text-[#3d2a2a]">{cat.name}</p>
              </div>

              {/* Expanded gallery */}
              {activeCategory === i && cat.gallery.length > 0 && (
                <div className="absolute inset-0 bg-white z-10 p-3 overflow-y-auto rounded-2xl">
                  <button onClick={() => setActiveCategory(null)}
                    className="absolute top-2 right-2 w-7 h-7 bg-blush-100 text-blush-500 rounded-full flex items-center justify-center text-lg font-bold hover:bg-blush-200 transition-colors z-20">
                    ×
                  </button>
                  <p className="text-xs font-sans font-semibold text-[#3d2a2a] mb-2 mt-1 text-center">{cat.name}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <img src={cat.mainImg} alt={cat.name} className="rounded-xl w-full aspect-square object-cover cursor-pointer hover:opacity-90" onClick={() => openLightbox(cat.mainImg)} />
                    {cat.gallery.map((img) => (
                      <img key={img} src={img} alt={cat.name} className="rounded-xl w-full aspect-square object-cover cursor-pointer hover:opacity-90" onClick={() => openLightbox(img)} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-blush-200 text-dusty font-sans font-semibold px-8 py-4 rounded-2xl hover:bg-blush-50 hover:border-dusty transition-all duration-300 shadow-sm hover:shadow-md">
            ¿No encuentras lo que buscas? Escríbenos 💬
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {activeImg && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white text-4xl font-light hover:opacity-70">×</button>
          <img src={activeImg} alt="Topper" className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
