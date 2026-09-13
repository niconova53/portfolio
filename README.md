# 👨‍💻 Portfolio — Nicolas Novacovich

Portfolio personal de **Nicolas Novacovich**, Desarrollador Frontend Senior especializado en Vue.js & TypeScript. Sitio estático con estética *retro terminal / pixel-art*: hero con stats, secciones de Sobre Mí, Experiencia, Proyectos Destacados y un formulario de contacto funcional.

🔗 **Demo en vivo:** https://niconova53.github.io/portfolio/

---

## 👤 Autor y contacto

- **LinkedIn:** [Nicolas Novacovich](https://www.linkedin.com/in/nicolas-novacovich-002211173/)
- **GitHub:** [niconova53](https://github.com/niconova53)
- **Email:** niconova53@gmail.com

El formulario de contacto **Conectemos** envía los mensajes directo a niconova53@gmail.com (vía FormSubmit, sin backend).

---

## 🎯 Objetivo

Presentar mi perfil profesional y los proyectos que construí como autodidacta, con un diseño que refleja cómo trabajo: **código limpio, TypeScript estricto y desarrollo asistido por IA**.

Destaca 3 proyectos reales con su demo y repo:

| Proyecto | Demo | Repo |
|----------|------|------|
| 🎬 [La Peli](https://niconova53.github.io/la-peli/) — App de cine con TMDB | [Demo](https://niconova53.github.io/la-peli/) | [Repo](https://github.com/niconova53/la-peli) |
| 🧱 [React Tetris](https://niconova53.github.io/react-tetris/) — Juego con SRS | [Demo](https://niconova53.github.io/react-tetris/) | [Repo](https://github.com/niconova53/react-tetris) |
| ⏰ [Daily Time](https://alegra-daily-time.web.app/) — App diaria con Firebase | [Demo](https://alegra-daily-time.web.app/) | [Repo](https://github.com/niconova53/daily-time) |

---

## 🛠️ Tecnologías

| Capa | Stack |
|------|-------|
| UI | React 19 + TypeScript (strict) |
| Bundler | Vite 8 |
| Animaciones | Framer Motion |
| Iconos | Lucide React |
| Estilos | CSS custom (retro terminal / pixel-art), `base: './'` |
| Formulario | FormSubmit (AJAX endpoint, sin backend) |
| Tests | Vitest + Testing Library (6 tests) |
| Lint | ESLint 9 (typescript-eslint) |
| Deploy | GitHub Actions → GitHub Pages |

---

## ✨ Características

- **Hero** con badge, título, tagline, botones (Ver proyectos / Contactar) y stats animadas.
- **Navbar** fijo con menú sandwich responsive en móvil.
- **Cursor glow** efecto de brillo que sigue al mouse.
- **Secciones** Sobre Mí, Experiencia (timeline), Proyectos Destacados (cards con imagen, tech tags, links Código/Demo) y Conectemos.
- **Formulario de contacto** — envío AJAX a FormSubmit con:
  - estado de envío (`Enviando...` / `¡Mensaje Enviado!`),
  - detección de error real (FormSubmit devuelve `success` como string),
  - fallback a `mailto:` si falla la red.
- **Footer** con links sociales (GitHub, LinkedIn) — sin Twitter.
- **Responsive** hasta 968px (grids a 1 columna, menú hamburguesa).

---

## 🚀 Empezar

```bash
npm install --legacy-peer-deps
npm run dev        # http://localhost:5173
npm run build      # tsc + vite build → dist/
npm run preview    # sirve el build (LAN: --host 0.0.0.0)
npm test           # vitest run (6 tests)
npm run lint       # eslint src
```

---

## 📁 Estructura

```
src/
├── components/    # Navbar, Hero, About, Experience, Projects, Contact, Footer, CursorGlow
│   └── __tests__/ # Navbar.test.tsx, CursorGlow.test.tsx
├── data/          # portfolioData.ts (perfil, experiencia, proyectos, skills)
├── styles/        # portfolio.css (tema retro terminal)
├── test/          # setup.tsx (jest-dom)
├── App.tsx
└── main.tsx
public/projects/   # capturas de las 3 demos reales
```

---

## 🚀 Deploy

Cada push a `main` dispara el workflow `.github/workflows/deploy.yml` (build + deploy a GitHub Pages):
`https://niconova53.github.io/portfolio/`

---

Hecho por [Nicolas Novacovich](https://www.linkedin.com/in/nicolas-novacovich-002211173/) — Desarrollador Frontend Senior.