# 🎂 CakeTopper Costa Rica — Landing Page

Landing page premium para **caketoppercostarica.com** construida con **Next.js 15 + Tailwind CSS**.

## 🚀 Deploy en Vercel (3 pasos)

### Opción A — Desde GitHub (recomendado)
1. Sube este folder a un repositorio en GitHub
2. Ve a [vercel.com](https://vercel.com) → **New Project** → importa tu repo
3. Vercel detecta Next.js automáticamente. Haz clic en **Deploy** ✅

### Opción B — Vercel CLI
```bash
npm i -g vercel
cd caketoppercostarica
vercel
```

---

## 💻 Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Abrir http://localhost:3000
```

---

## 📁 Estructura del proyecto

```
caketoppercostarica/
├── app/
│   ├── globals.css       # Estilos globales + fuentes
│   ├── layout.tsx        # SEO metadata + root layout
│   └── page.tsx          # Página principal
├── components/
│   ├── Navbar.tsx        # Navegación sticky
│   ├── Hero.tsx          # Hero principal con CTA
│   ├── Gallery.tsx       # Galería de toppers
│   ├── HowItWorks.tsx    # Sección "Cómo funciona"
│   ├── Categories.tsx    # Tipos de toppers
│   ├── FAQ.tsx           # Preguntas frecuentes
│   ├── Footer.tsx        # Footer con redes sociales
│   └── WhatsAppFloat.tsx # Botón flotante WhatsApp
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## ✏️ Personalización rápida

### Cambiar número de WhatsApp
Busca y reemplaza en todos los archivos:
```
50684043838 → tu número real (ej: 50699991234)
```

### Cambiar usuario de Instagram
Busca y reemplaza:
```
caketoppercostarica → tu_usuario_real
```

### Colores principales
En `tailwind.config.ts` están definidos los colores de marca:
- `blush` → tonos rosados
- `champagne` → crema dorado
- `dusty` → malva
- `mauve` → mauve suave

### Fuentes
Las fuentes (Playfair Display, Cormorant Garamond, Jost) se cargan desde Google Fonts en `globals.css`.

---

## 🎨 Secciones incluidas

| Sección | Descripción |
|---------|-------------|
| **Navbar** | Sticky, transparente → sólida al hacer scroll |
| **Hero** | Título principal, subtítulo, CTA WhatsApp, estadísticas |
| **Galería** | 6 cards con hover effects y etiquetas |
| **Cómo funciona** | 4 pasos animados |
| **Tipos de topper** | 5 categorías con cards interactivas |
| **FAQ** | Acordeón con 7 preguntas |
| **Footer** | Instagram, WhatsApp, navegación |
| **WhatsApp flotante** | Botón fijo con pulse animation |

---

Hecho con 💕 para Costa Rica 🌺
