"use client";

const WA_LINK =
  "https://wa.me/50687621817?text=Hola!%20Me%20interesa%20un%20cake%20topper%20personalizado.";

const categories = [
  {
    emoji: "🎉",
    title: "Infantiles",
    subtitle: "Fiesta de cumpleaños",
    description:
      "Personajes animados, unicornios, dinosaurios, princesas y superhéroes. ¡Los niños los van a amar!",
    tags: ["Colores vibrantes", "Personajes", "Nombres custom"],
    bg: "bg-gradient-to-br from-yellow-50 to-orange-50",
    border: "border-orange-100",
    accent: "text-orange-400",
  },
  {
    emoji: "💍",
    title: "Bodas",
    subtitle: "El día más especial",
    description:
      "Iniciales, siluetas de parejas, frases románticas en dorado o plateado. Elegancia pura.",
    tags: ["Dorado", "Plata", "Minimalista"],
    bg: "bg-gradient-to-br from-blush-50 to-rose-50",
    border: "border-blush-100",
    accent: "text-blush-500",
  },
  {
    emoji: "🎓",
    title: "Graduación",
    subtitle: "Un logro que celebrar",
    description:
      "Birretes, nombres, año y universidad. El complemento perfecto para la torta de tu graduado.",
    tags: ["Año de graduación", "Universidad", "Nombres"],
    bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
    border: "border-blue-100",
    accent: "text-blue-400",
  },
  {
    emoji: "👶",
    title: "Baby Shower",
    subtitle: "Bienvenida al bebé",
    description:
      "Animalitos, nubes, estrellas y el nombre del bebé. Suave, dulce y lleno de ternura.",
    tags: ["Niño & niña", "Neutro", "Animalitos"],
    bg: "bg-gradient-to-br from-purple-50 to-pink-50",
    border: "border-purple-100",
    accent: "text-purple-400",
  },
  {
    emoji: "✨",
    title: "Personalizados",
    subtitle: "Tu idea, nuestra magia",
    description:
      "¿Tienes una idea única? Nosotros la hacemos realidad. Sin límites creativos.",
    tags: ["Diseño libre", "Cualquier ocasión", "100% custom"],
    bg: "bg-gradient-to-br from-champagne to-cream",
    border: "border-rose-100",
    accent: "text-dusty",
  },
];

export default function Categories() {
  return (
    <section id="tipos" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-dusty font-sans mb-4">
            Para cada ocasión
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-[#3d2a2a] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Tipos de{" "}
            <span className="text-gradient italic">Toppers</span>
          </h2>
          <p
            className="font-body text-lg text-[#3d2a2a]/60 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Desde bodas íntimas hasta fiestas infantiles llenas de color.
            Tenemos el topper perfecto para ti.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <a
              key={cat.title}
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative ${cat.bg} border ${cat.border} p-6 rounded-3xl hover:shadow-xl transition-all duration-400 hover:-translate-y-2 cursor-pointer ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Emoji */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {cat.emoji}
              </div>

              {/* Content */}
              <p className={`text-xs font-sans tracking-widest uppercase mb-1 ${cat.accent}`}>
                {cat.subtitle}
              </p>
              <h3
                className="font-display text-2xl font-bold text-[#3d2a2a] mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {cat.title}
              </h3>
              <p
                className="font-body text-base text-[#3d2a2a]/65 leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {cat.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-sans bg-white/70 text-[#3d2a2a]/60 px-3 py-1 rounded-full border border-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className={`absolute top-6 right-6 ${cat.accent} opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1`}>
                →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
