"use client";
import { useState } from "react";

const WA_LINK = "https://wa.me/50684043838?text=Hola!%20Me%20interesa%20un%20cake%20topper%20personalizado.";

const categories = [
  {
    name: "Aniversario",
    emoji: "💑",
    mainImg: "/aniversario-main.png",
    gallery: ["/aniversario-01.png", "/aniversario-02.png", "/aniversario-03.png"],
  },
  {
    name: "Bautizo",
    emoji: "✝️",
    mainImg: "/bautizo-main.png",
    gallery: ["/bautizo-01.png"],
  },
  {
    name: "Boda & Matrimonio",
    emoji: "💍",
    mainImg: "/boda-matrimonio-main.png",
    gallery: ["/boda-matrimonio-01.png", "/boda-matrimonio-02.png", "/boda-matrimonio-03.png", "/boda-matrimonio-04.png", "/boda-matrimonio-05.png", "/boda-matrimonio-06.png", "/boda-matrimonio-07.png"],
  },
  {
    name: "Coloridos",
    emoji: "🌈",
    mainImg: "/coloridos-main.png",
    gallery: ["/coloridos-01.png", "/coloridos-02.png", "/coloridos-03.png", "/coloridos-04.png", "/coloridos-05.png", "/coloridos-06.png", "/coloridos-07.png", "/coloridos-08.png", "/coloridos-09.png", "/coloridos-10.png"],
  },
  {
    name: "Cumpleaños",
    emoji: "🎂",
    mainImg: "/cumpleanos-main.jpg",
    gallery: ["/cumpleanos-01.png", "/cumpleanos-02.png", "/cumpleanos-03.png", "/cumpleanos-04.png", "/cumpleanos-05.jpg", "/cumpleanos-06.png", "/cumpleanos-07.png", "/cumpleanos-08.png", "/cumpleanos-09.png"],
  },
  {
    name: "Fechas Especiales",
    emoji: "📅",
    mainImg: "/fechas-especiales-main.png",
    gallery: ["/fechas-especiales-01.png", "/fechas-especiales-02.png"],
  },
  {
    name: "Otros (centros de mesa, recuerdos, llaveros...)",
    emoji: "🎁",
    mainImg: "/otros-centros-de-mesa-recuerdos-llaveros-main.png",
    gallery: ["/otros-centros-de-mesa-recuerdos-llaveros-01.png", "/otros-centros-de-mesa-recuerdos-llaveros-02.png", "/otros-centros-de-mesa-recuerdos-llaveros-03.png", "/otros-centros-de-mesa-recuerdos-llaveros-04.png", "/otros-centros-de-mesa-recuerdos-llaveros-05.png", "/otros-centros-de-mesa-recuerdos-llaveros-06.png", "/otros-centros-de-mesa-recuerdos-llaveros-07.png", "/otros-centros-de-mesa-recuerdos-llaveros-08.png", "/otros-centros-de-mesa-recuerdos-llaveros-09.png"],
  },
  {
    name: "Personajes",
    emoji: "🦸",
    mainImg: "/personajes-main.png",
    gallery: ["/personajes-01.jpg", "/personajes-02.jpg", "/personajes-03.png", "/personajes-04.png", "/personajes-05.png"],
  },
  {
    name: "Personalizados con nombre",
    emoji: "✍️",
    mainImg: "/personalizados-con-nombre-main.png",
    gallery: ["/personalizados-con-nombre-01.jpg", "/personalizados-con-nombre-02.png", "/personalizados-con-nombre-03.png", "/personalizados-con-nombre-04.png", "/personalizados-con-nombre-05.jpg", "/personalizados-con-nombre-06.jpg", "/personalizados-con-nombre-07.png", "/personalizados-con-nombre-08.png", "/personalizados-con-nombre-09.png", "/personalizados-con-nombre-10.jpg", "/personalizados-con-nombre-11.png", "/personalizados-con-nombre-12.png", "/personalizados-con-nombre-13.png"],
  },
  {
    name: "Primera Comunión",
    emoji: "🕊️",
    mainImg: "/primera-comunion-main.png",
    gallery: ["/primera-comunion-01.png", "/primera-comunion-02.png", "/primera-comunion-03.png"],
  },
  {
    name: "Revelación de Género",
    emoji: "👶",
    mainImg: "/revelacion-de-genero-main.jpg",
    gallery: ["/revelacion-de-genero-01.png"],
  },
  {
    name: "Temáticos",
    emoji: "🎨",
    mainImg: "/tematicos-main.png",
    gallery: ["/tematicos-01.png", "/tematicos-02.png", "/tematicos-03.png", "/tematicos-04.png", "/tematicos-05.png", "/tematicos-06.png"],
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeImg, setActiveImg] = useState<string | null>(null);

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

        {/* 12-category grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {categories.map((cat, i) => (
            <div key={cat.name} className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white">
              {/* Main image */}
              <div className="aspect-[3/4] overflow-hidden relative" onClick={() => setActiveCategory(activeCategory === i ? null : i)}>
                <img
                  src={cat.mainImg}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
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
                {/* Hover label */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-sans font-semibold text-sm">{cat.name}</p>
                  <p className="text-white/70 text-xs font-sans">Ver más fotos</p>
                </div>
              </div>

              {/* Category name */}
              <div className="p-3 text-center">
                <p className="text-sm font-sans font-semibold text-[#3d2a2a]">{cat.name}</p>
              </div>

              {/* Expanded gallery overlay */}
              {activeCategory === i && cat.gallery.length > 0 && (
                <div className="absolute inset-0 bg-white z-10 p-3 overflow-y-auto rounded-2xl">
                  <button
                    onClick={() => setActiveCategory(null)}
                    className="absolute top-2 right-2 w-7 h-7 bg-blush-100 text-blush-500 rounded-full flex items-center justify-center text-lg font-bold hover:bg-blush-200 transition-colors z-20">
                    ×
                  </button>
                  <p className="text-xs font-sans font-semibold text-[#3d2a2a] mb-2 mt-1 text-center">{cat.name}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <img src={cat.mainImg} alt={cat.name}
                      className="rounded-xl w-full aspect-square object-cover cursor-pointer hover:opacity-90"
                      onClick={() => setActiveImg(cat.mainImg)} />
                    {cat.gallery.map((img) => (
                      <img key={img} src={img} alt={cat.name}
                        className="rounded-xl w-full aspect-square object-cover cursor-pointer hover:opacity-90"
                        onClick={() => setActiveImg(img)} />
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
          <img src={activeImg} alt="Topper"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
            onClick={e => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
