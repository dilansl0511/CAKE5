"use client";

const steps = [
  {
    number: "01",
    emoji: "💬",
    title: "Escríbenos",
    description: "Contáctanos por WhatsApp con los detalles de tu pedido: tamaño del topper, color(es), diseño, temática, fecha en que lo necesitas, entre otros aspectos de interés.",
    color: "from-blush-100 to-blush-200",
  },
  {
    number: "02",
    emoji: "🎨",
    title: "Diseño personalizado",
    description: "Te enviamos una vista previa digital para aprobación con las características de tu solicitud. Si estás de acuerdo se te indica el precio final del producto para que canceles el 50% y comenzar con la fabricación.",
    color: "from-champagne to-[#f0d4b8]",
  },
  {
    number: "03",
    emoji: "✂️",
    title: "Producción",
    description: "Nuestros diseñadores crean tu topper único. Se fabrica en plástico, con materiales de alta calidad, en el tono y acabado seleccionado.",
    color: "from-[#f7e0e3] to-blush-100",
  },
  {
    number: "04",
    emoji: "🚚",
    title: "Entrega",
    description: "Te lo enviamos a domicilio en todo Costa Rica (previa cotización) o recógelo en nuestro taller. ¡Listo para tu gran día!",
    color: "from-[#e8f4e8] to-[#d4ecd4]",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #fff5f7 0%, #fdf8f5 50%, #fff0e8 100%)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-dusty font-sans mb-4">Proceso</p>
          <h2 className="font-bold text-4xl md:text-5xl text-[#3d2a2a] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            ¿Cómo <span className="text-gradient italic">funciona?</span>
          </h2>
          <p className="text-lg text-[#3d2a2a]/60 max-w-xl mx-auto" style={{ fontFamily: "var(--font-cormorant)" }}>
            Simple, rápido y completamente personalizado. Tu topper soñado en solo 4 pasos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className={`bg-gradient-to-br ${step.color} p-6 rounded-3xl border border-white/60 shadow-sm hover:shadow-lg transition-all duration-400 hover:-translate-y-1`}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl font-bold text-[#3d2a2a]/10 leading-none" style={{ fontFamily: "var(--font-playfair)" }}>{step.number}</span>
                <span className="text-3xl">{step.emoji}</span>
              </div>
              <h3 className="font-bold text-xl text-[#3d2a2a] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{step.title}</h3>
              <p className="text-base text-[#3d2a2a]/65 leading-relaxed" style={{ fontFamily: "var(--font-cormorant)" }}>{step.description}</p>
            </div>
          ))}
        </div>

        {/* Time badge */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-md border border-blush-100">
            <span className="text-2xl">⏱️</span>
            <div>
              <p className="text-sm font-sans font-semibold text-[#3d2a2a]">Tiempo de fabricación</p>
              <p className="text-xs text-[#3d2a2a]/60 font-sans max-w-sm">
                El tiempo estándar de elaboración es de 2 a 3 días hábiles, aunque puede variar según la demanda del momento. Si necesitas tu pedido en un plazo menor, no dudes en escribirnos; con gusto revisaremos si podemos ayudarte. Será un placer atenderte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
