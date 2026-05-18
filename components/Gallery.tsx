"use client";

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=700&fit=crop",
    alt: "Cake topper de boda elegante",
    label: "Bodas",
    tag: "💍",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&h=700&fit=crop",
    alt: "Cake topper infantil colorido",
    label: "Infantil",
    tag: "🎉",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&h=700&fit=crop",
    alt: "Cake topper cumpleaños",
    label: "Cumpleaños",
    tag: "🎂",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=600&h=700&fit=crop",
    alt: "Decoración para baby shower",
    label: "Baby Shower",
    tag: "👶",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=600&h=700&fit=crop",
    alt: "Topper dorado de lujo",
    label: "Graduación",
    tag: "🎓",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=700&fit=crop",
    alt: "Topper personalizado especial",
    label: "Personalizado",
    tag: "✨",
  },
];

const WA_LINK =
  "https://wa.me/50687621817?text=Hola!%20Me%20interesa%20un%20cake%20topper%20personalizado.";

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-dusty font-sans mb-4">
            Nuestros diseños
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-[#3d2a2a] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Galería de{" "}
            <span className="text-gradient italic">Toppers</span>
          </h2>
          <p
            className="font-body text-lg text-[#3d2a2a]/60 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Cada topper es único, creado especialmente para ti.
            Acrílico, madera o mixto — tú decides el estilo.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
              style={{
                animationDelay: `${i * 100}ms`,
              }}
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3d2a2a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Tag badge */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                <span className="text-sm">{item.tag}</span>
                <span className="text-xs font-sans font-medium text-[#3d2a2a]">
                  {item.label}
                </span>
              </div>

              {/* Hover label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-white font-sans font-medium text-sm">
                  {item.alt}
                </p>
                <p className="text-white/70 text-xs font-sans mt-0.5">
                  Diseño personalizado
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-blush-200 text-dusty font-sans font-semibold px-8 py-4 rounded-2xl hover:bg-blush-50 hover:border-dusty transition-all duration-300 shadow-sm hover:shadow-md"
          >
            ¿No encuentras lo que buscas? Escríbenos 💬
          </a>
        </div>
      </div>
    </section>
  );
}
