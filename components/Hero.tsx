"use client";

const WA_LINK = "https://wa.me/50687621817?text=Hola!%20Me%20interesa%20un%20cake%20topper%20personalizado.";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blush-50 via-cream to-champagne" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #f4476e 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #c9956c 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(#b5838d 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p className="inline-flex items-center gap-2 text-xs tracking-[0.35em] uppercase text-dusty font-sans mb-5 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-blush-100">
          <span className="w-1.5 h-1.5 rounded-full bg-blush-500 inline-block" />
          Diseños únicos y personalizados
          <span className="w-1.5 h-1.5 rounded-full bg-blush-500 inline-block" />
        </p>

        {/* Main title */}
        <h1 className="font-bold leading-[1.1] mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
          <span className="text-[#3d2a2a] text-4xl md:text-6xl">Cake Toppers</span>
          <br />
          <span className="text-gradient italic text-5xl md:text-7xl">Personalizados</span>
          <br />
          <span className="text-[#3d2a2a] text-3xl md:text-5xl">en Costa Rica</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-[#3d2a2a]/65 mb-8 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-cormorant)" }}>
          El toque especial que hace memorable tu boda, cumpleaños,
          baby shower, primera comunión y más. Hechos con amor en Costa Rica. 🌺
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-sans font-semibold text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pedir por WhatsApp
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
          <a href="#galeria"
            className="font-sans font-medium text-base text-dusty border border-dusty/40 px-8 py-4 rounded-2xl hover:bg-blush-50 hover:border-dusty transition-all duration-300">
            Ver diseños ↓
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-10">
          {[["1000+","Toppers fabricados"],["100%","Personalizados"],["2-3 días","Tiempo de fabricación"]].map(([num, label]) => (
            <div key={num} className="text-center">
              <p className="text-3xl font-bold text-gradient" style={{ fontFamily: "var(--font-playfair)" }}>{num}</p>
              <p className="text-sm text-[#3d2a2a]/50 font-sans mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z" fill="#fdf8f5" fillOpacity="0.8" />
        </svg>
      </div>
    </section>
  );
}
