"use client";
import { useState } from "react";

const faqs = [
  {
    q: "¿Cuánto tiempo tarda en estar listo mi topper?",
    a: "El tiempo estándar es de 2 a 3 días hábiles desde que apruebas el diseño y cancelas el 50%. Si necesitas tu topper urgente, no dudes en escribirnos; con gusto revisaremos si podemos ayudarte a disminuir el tiempo.",
  },
  {
    q: "¿En qué materiales están disponibles?",
    a: "Nuestros productos son fabricados en plástico mediante impresión 3D de alta calidad utilizando filamento PLA, un material ligero que da acabados únicos y elegantes.",
  },
  {
    q: "¿Hacen envíos a todo Costa Rica?",
    a: "¡Sí! Enviamos a todo el territorio nacional por Correos de Costa Rica. También puedes recoger en nuestro taller ubicado en San José, Moravia.",
  },
  {
    q: "¿Puedo ver cómo quedará el diseño antes de que lo fabriquen?",
    a: "Por supuesto. Siempre te enviamos una vista previa digital del diseño para tu aprobación antes de empezar la producción. Sin tu OK, no fabricamos.",
  },
  {
    q: "¿Cuál es el tamaño estándar de un topper?",
    a: "El tamaño más popular es de 15 cm de ancho × 20 cm de alto × 2 mm de grosor; sin embargo, podemos fabricarlo según tus necesidades. Normalmente recomendamos que el topper tenga una medida aproximada de ¾ partes del diámetro del queque, para que luzca proporcionado y elegante.",
  },
  {
    q: "¿Cómo se coloca el topper en la torta?",
    a: "Para los toppers que se colocan en la parte superior del queque, todos incluyen palito para insertarlos fácilmente sobre el pastel. ¡Son muy sencillos de colocar! En el caso de los toppers frontales, estos se adhieren directamente al queque utilizando el lustre o cobertura decorativa.",
  },
  {
    q: "¿Cuánto cuesta un cake topper personalizado?",
    a: "Los precios varían según el diseño, colores y tamaño. Los toppers básicos arrancan desde ₡1,800 colones. Sin embargo, el promedio ronda los ₡2,500 colones. Escríbenos y con gusto te damos el monto exacto según tu idea.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #fff5f7, #fdf8f5)" }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-dusty font-sans mb-4">Resolvemos tus dudas</p>
          <h2 className="font-bold text-4xl md:text-5xl text-[#3d2a2a] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Preguntas <span className="text-gradient italic">frecuentes</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${open === i ? "border-blush-200 shadow-md" : "border-blush-100 shadow-sm"}`}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left flex items-center justify-between px-6 py-5 group">
                <span className="font-sans font-medium text-[#3d2a2a] text-base pr-4">{faq.q}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 text-sm ${open === i ? "bg-blush-500 text-white rotate-180" : "bg-blush-50 text-blush-500"}`}>↓</span>
              </button>
              <div className={`transition-all duration-400 ease-in-out ${open === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                <p className="px-6 pb-5 text-base text-[#3d2a2a]/65 leading-relaxed" style={{ fontFamily: "var(--font-cormorant)" }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center p-8 bg-white rounded-3xl border border-blush-100 shadow-sm">
          <p className="font-bold text-xl text-[#3d2a2a] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>¿Tienes otra pregunta?</p>
          <p className="text-[#3d2a2a]/60 font-sans text-sm mb-5">Estamos disponibles de lunes a sábado, 8 am – 6 pm.</p>
          <a href="https://wa.me/50687621817?text=Hola!%20Tengo%20una%20consulta." target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-sans font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300 shadow-md">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escribirnos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
