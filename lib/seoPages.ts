export type SeoPage = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  intro: string;
  details: string[];
  images: string[];
  keywords: string[];
  faq: { question: string; answer: string }[];
};

export const seoPages: SeoPage[] = [
  {
    slug: "topper-para-queques",
    title: "Topper para Queques y Cake Topper en Costa Rica",
    shortTitle: "Topper para queques",
    eyebrow: "Cake topper · topper cake · topper para queque",
    description: "Topper para queques y cake toppers personalizados en Costa Rica. Diseños para cumpleaños, bodas y celebraciones, elaborados a la medida.",
    intro: "Creamos toppers para queques personalizados para que el diseño, el nombre y los colores combinen con tu celebración.",
    details: ["Diseños personalizados según tu temática", "Opciones para colocar arriba o al frente del queque", "Producción en plástico resistente", "Entrega en Costa Rica y retiro en Moravia"],
    images: ["/cumpleanos-main.jpg", "/personalizados-con-nombre-main.png", "/boda-matrimonio-main.png", "/tematicos-main.png", "/coloridos-main.png", "/aniversario-main.png"],
    keywords: ["topper para queques", "topper cake", "cake topper", "topper queque", "toppers para queques costa rica"],
    faq: [
      { question: "¿Hacen topper para cualquier tamaño de queque?", answer: "Sí. Se adapta el tamaño del topper a las medidas y al estilo del queque." },
      { question: "¿Puedo enviar una idea o fotografía de referencia?", answer: "Sí. Puedes enviarla por WhatsApp para preparar una propuesta personalizada." },
      { question: "¿Cuánto tarda la elaboración?", answer: "Normalmente entre 2 y 3 días hábiles después de aprobar el diseño y realizar el adelanto." }
    ]
  },
  {
    slug: "cake-topper-personalizado",
    title: "Cake Toppers Personalizados en Costa Rica",
    shortTitle: "Cake topper personalizado",
    eyebrow: "Diseños hechos especialmente para ti",
    description: "Cake toppers personalizados en Costa Rica con nombres, edades, frases y temáticas para todo tipo de celebración.",
    intro: "Convertimos tu idea en un cake topper personalizado, combinando nombres, números, frases y elementos de la temática que elijas.",
    details: ["Diseño previo para aprobación", "Colores planos y acabados definidos", "Opciones con nombre, edad o frase", "Más de 1.000 diseños realizados desde 2017"],
    images: ["/personalizados-con-nombre-main.png", "/personalizados-con-nombre-01.jpg", "/personalizados-con-nombre-02.png", "/personalizados-con-nombre-04.png", "/personalizados-con-nombre-07.png", "/personalizados-con-nombre-11.png"],
    keywords: ["cake toppers personalizados", "cake topper personalizado", "topper personalizado costa rica", "caketopper"],
    faq: [
      { question: "¿El diseño puede llevar nombre y edad?", answer: "Sí. Se puede personalizar con nombre, edad, fecha, frase o varios elementos." },
      { question: "¿Cuántos colores puede llevar?", answer: "El diseño se ajusta según la propuesta y la combinación escogida; normalmente trabajamos composiciones claras y fáciles de apreciar." },
      { question: "¿Antes de imprimir me enseñan el diseño?", answer: "Sí. El diseño se envía para aprobación antes de fabricarlo." }
    ]
  },
  {
    slug: "topper-cumpleanos",
    title: "Topper de Cumpleaños Personalizado en Costa Rica",
    shortTitle: "Cumpleaños",
    eyebrow: "Nombres, edades y celebraciones",
    description: "Topper de cumpleaños personalizado en Costa Rica para niños y adultos, con nombre, edad, colores y temática elegida.",
    intro: "Diseñamos toppers de cumpleaños para niños y adultos, desde estilos elegantes hasta opciones coloridas y temáticas.",
    details: ["Nombre y edad personalizados", "Diseños infantiles y para adultos", "Opciones superiores y frontales", "Combinación con la decoración del pastel"],
    images: ["/cumpleanos-main.jpg", "/cumpleanos-01.png", "/cumpleanos-02.png", "/cumpleanos-04.png", "/cumpleanos-07.png", "/cumpleanos-09.png"],
    keywords: ["topper cumpleaños", "cake topper cumpleaños", "topper feliz cumpleaños", "topper infantil"],
    faq: [
      { question: "¿Pueden usar la misma temática de la fiesta?", answer: "Sí. Se pueden adaptar colores, personajes, nombre y edad a la decoración." },
      { question: "¿Hacen toppers para adultos?", answer: "Sí. Trabajamos estilos elegantes, divertidos, deportivos y personalizados para cualquier edad." }
    ]
  },
  {
    slug: "topper-bodas",
    title: "Cake Topper para Bodas y Matrimonios en Costa Rica",
    shortTitle: "Bodas",
    eyebrow: "Detalles para un día especial",
    description: "Cake topper para bodas y matrimonios en Costa Rica con nombres, iniciales, fechas, siluetas y frases personalizadas.",
    intro: "Creamos cake toppers para bodas con nombres, iniciales, fechas y estilos que combinan con la decoración del matrimonio.",
    details: ["Nombres, iniciales o fecha", "Estilos elegantes y minimalistas", "Opciones doradas, plateadas o de otros colores", "Diseño previo para aprobación"],
    images: ["/boda-matrimonio-main.png", "/boda-matrimonio-01.png", "/boda-matrimonio-02.png", "/boda-matrimonio-04.png", "/boda-matrimonio-06.png", "/boda-matrimonio-07.png"],
    keywords: ["cake topper boda", "topper matrimonio", "topper para bodas costa rica", "topper novios"],
    faq: [
      { question: "¿Puede llevar los nombres de los novios?", answer: "Sí. También puede incluir iniciales, apellido, fecha o una frase corta." },
      { question: "¿Se puede hacer en dorado o plateado?", answer: "Sí. Hay distintas opciones de color para combinar con el estilo de la boda." }
    ]
  },
  {
    slug: "topper-bautizo",
    title: "Topper para Bautizo Personalizado en Costa Rica",
    shortTitle: "Bautizo",
    eyebrow: "Un recuerdo para una ocasión especial",
    description: "Topper para bautizo personalizado en Costa Rica con nombre, fecha, cruces, palomas y elementos delicados.",
    intro: "Diseñamos toppers para bautizo con composiciones delicadas, nombre, fecha y símbolos acordes con la celebración.",
    details: ["Nombre y fecha personalizados", "Símbolos religiosos y elementos delicados", "Colores adaptados a la decoración", "Diseños superiores o frontales"],
    images: ["/bautizo-main.png", "/bautizo-01.png", "/Bautizo_1.png", "/Bautizo_2_main.png"],
    keywords: ["topper bautizo", "cake topper bautizo", "topper bautizo costa rica"],
    faq: [{ question: "¿Puede llevar el nombre y la fecha?", answer: "Sí. Se personaliza con los datos y elementos que prefieras." }]
  },
  {
    slug: "topper-primera-comunion",
    title: "Topper para Primera Comunión en Costa Rica",
    shortTitle: "Primera Comunión",
    eyebrow: "Diseños personalizados y delicados",
    description: "Topper para Primera Comunión en Costa Rica con nombre, fecha y símbolos religiosos personalizados.",
    intro: "Preparamos toppers para Primera Comunión con nombre, fecha y elementos religiosos en un estilo limpio y especial.",
    details: ["Personalización con nombre y fecha", "Cáliz, cruz, hostia y otros símbolos", "Colores a juego con el pastel", "Diseño revisado antes de fabricar"],
    images: ["/primera-comunion-main.png", "/primera-comunion-01.png", "/primera-comunion-02.png", "/primera-comunion-03.png"],
    keywords: ["topper primera comunion", "cake topper primera comunión", "topper comunion costa rica"],
    faq: [{ question: "¿Puedo escoger los símbolos y colores?", answer: "Sí. La propuesta se adapta al estilo del pastel y a tus preferencias." }]
  },
  {
    slug: "topper-aniversario",
    title: "Topper de Aniversario Personalizado en Costa Rica",
    shortTitle: "Aniversario",
    eyebrow: "Celebra años, historias y momentos",
    description: "Topper de aniversario personalizado en Costa Rica con nombres, años, fechas y frases para parejas, familias y empresas.",
    intro: "Celebra un aniversario con un topper personalizado que puede incluir nombres, cantidad de años, fecha o una frase especial.",
    details: ["Nombres, años y fechas", "Diseños románticos o conmemorativos", "Opciones para aniversarios de pareja o empresa", "Colores personalizados"],
    images: ["/aniversario-main.png", "/aniversario-01.png", "/aniversario-02.png", "/aniversario-03.png", "/Aniversario_1_main.jpeg", "/Aniversario_2.png"],
    keywords: ["topper aniversario", "cake topper aniversario", "topper bodas de oro"],
    faq: [{ question: "¿Se puede indicar la cantidad de años?", answer: "Sí. El número de años puede ser el elemento principal del diseño." }]
  },
  {
    slug: "topper-revelacion-de-genero",
    title: "Topper para Revelación de Género en Costa Rica",
    shortTitle: "Revelación de género",
    eyebrow: "Una sorpresa llena de emoción",
    description: "Topper para revelación de género en Costa Rica con diseños personalizados para niño, niña o temática neutra.",
    intro: "Creamos toppers para revelación de género con diseños tiernos, frases, preguntas y colores que acompañan el momento de la sorpresa.",
    details: ["Opciones rosadas, azules o neutras", "Frases y nombres personalizados", "Diseños para queque o mesa", "Propuesta previa para aprobación"],
    images: ["/revelacion-de-genero-main.jpg", "/revelacion-de-genero-01.png", "/Revelacion_1_main.jpeg", "/Revelacion_2.png"],
    keywords: ["topper revelacion de genero", "cake topper gender reveal", "topper niño o niña"],
    faq: [{ question: "¿Puede ser un diseño neutral?", answer: "Sí. Se puede trabajar con colores y elementos neutros para mantener la sorpresa." }]
  },
  {
    slug: "topper-tematicos",
    title: "Toppers Temáticos Personalizados en Costa Rica",
    shortTitle: "Temáticos",
    eyebrow: "Personajes, deportes, hobbies y más",
    description: "Toppers temáticos personalizados en Costa Rica para fiestas infantiles, deportes, profesiones, hobbies y celebraciones especiales.",
    intro: "Adaptamos personajes, deportes, profesiones, pasatiempos y otras ideas para crear un topper temático hecho a tu gusto.",
    details: ["Temáticas infantiles y para adultos", "Deportes, profesiones y pasatiempos", "Nombre, edad y frase opcionales", "Colores coordinados con el pastel"],
    images: ["/tematicos-main.png", "/tematicos-01.png", "/tematicos-02.png", "/tematicos-03.png", "/tematicos-05.png", "/tematicos-06.png"],
    keywords: ["topper tematico", "cake topper personajes", "topper personalizado temática"],
    faq: [{ question: "¿Pueden hacer una temática que no aparece en la galería?", answer: "Sí. La galería es una muestra; puedes enviar tu idea por WhatsApp." }]
  }
];

export const seoPagesBySlug = Object.fromEntries(seoPages.map((page) => [page.slug, page]));
