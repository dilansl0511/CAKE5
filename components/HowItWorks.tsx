"use client";

const steps = [
  {
    number: "01",
    emoji: "💬",
    title: "Escríbenos",
    description:
      "Contáctanos por WhatsApp con los detalles de tu evento: nombre, fecha, colores y estilo que deseas.",
    color: "from-blush-100 to-blush-200",
  },
  {
    number: "02",
    emoji: "🎨",
    title: "Diseño personalizado",
    description:
      "Nuestras diseñadoras crean tu topper único. Te enviamos una vista previa digital para tu aprobación.",
    color: "from-champagne to-[#f0d4b8]",
  },
  {
    number: "03",
    emoji: "✂️",
    title: "Producción",
    description:
      "Cortamos y terminamos tu topper con materiales de alta calidad: acrílico brillante, madera o dorado.",
    color: "from-[#f7e0e3] to-blush-100",
  },
  {
    number: "04",
    emoji: "🚚",
    title: "Entrega",
    description:
      "Te lo enviamos a domicilio en todo Costa Rica o recógelo en nuestro taller. ¡Listo para tu gran día!",
    color: "from-[#e8f4e8] to-[#d4ecd4]",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fff5f7 0%, #fdf8f5 50%, #fff0e8 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
        style={{ background: "radial-gradient(circle, #f4476e, transparent)" }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-dusty font-sans mb-4">
            Proceso
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-[#3d2a2a] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            ¿Cómo{" "}
            <span className="text-gradient italic">funciona?</span>
          </h2>
          <p
            className="font-body text-lg text-[#3d2a2a]/60 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Simple, rápido y completamente personalizado.
            Tu topper soñado en solo 4 pasos.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%_-_12px)] w-6 h-0.5 bg-gradient-to-r from-blush-200 to-transparent z-10" />
              )}

              <div
                className={`bg-gradient-to-br ${step.color} p-6 rounded-3xl border border-white/60 shadow-sm hover:shadow-lg transition-all duration-400 hover:-translate-y-1 h-full`}
              >
                {/* Number */}
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="text-5xl font-display font-bold text-[#3d2a2a]/10 leading-none"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {step.number}
                  </span>
                  <span className="text-3xl">{step.emoji}</span>
                </div>

                {/* Content */}
                <h3
                  className="font-display font-bold text-xl text-[#3d2a2a] mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-body text-base text-[#3d2a2a]/65 leading-relaxed"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Time badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-md border border-blush-100">
            <span className="text-2xl">⏱️</span>
            <div>
              <p className="text-sm font-sans font-semibold text-[#3d2a2a]">
                Tiempo de entrega
              </p>
              <p className="text-xs text-[#3d2a2a]/60 font-sans">
                Pedidos express en 48 horas · Estándar 5–7 días hábiles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
