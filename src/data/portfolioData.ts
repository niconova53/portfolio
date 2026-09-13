export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number; icon?: string }[];
}

export const portfolioData = {
  personal: {
    name: "Nicolas Novacovich",
    title: "Desarrollador Frontend Senior | Especialista en Vue.js & TypeScript",
    tagline: "Desarrollador Frontend con trayectoria iniciada en 2018, especializado en la creación de interfaces precisas y escalables utilizando Vue 3, TypeScript y arquitecturas modernas. Enfocado en la legibilidad del código y el desarrollo eficiente asistido por IA.",
    location: "Glew, Buenos Aires, Argentina",
    email: "niconova53@gmail.com",
    github: "https://github.com/niconova53",
    linkedin: "https://linkedin.com/in/nicolas-novacovich-002211173",
    about: "Desarrollador Frontend con trayectoria iniciada en 2018, especializado en la creación de interfaces precisas y escalables utilizando Vue 3, TypeScript y arquitecturas modernas. Enfocado en la legibilidad del código y el desarrollo eficiente asistido por IA, con experiencia en migraciones críticas, microfrontends y creación de librerías de componentes UI."
  },
  stats: [
    { label: "Años de Experiencia", value: "6+" },
    { label: "Proyectos Completados", value: "15+" },
    { label: "Tecnologías Dominadas", value: "15+" },
    { label: "Años con Vue.js", value: "5+" }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Desarrollador Frontend (Refuerzo Técnico)",
      company: "Edmachina",
      period: "Febrero 2026 – Abril 2026",
      location: "Remoto",
      description: "Desarrollo y mantenimiento de módulos bajo arquitectura Module Federation (Vite/Runtime) como refuerzo técnico.",
      achievements: [
        "Desarrollo y mantenimiento de módulos bajo arquitectura Module Federation (Vite/Runtime).",
        "Corrección de bugs críticos e implementación de funcionalidades en componentes compartidos.",
        "Desarrollo acelerado mediante el uso de Agentes de IA, GitHub Copilot y OpenCode.",
        "Aplicación de Vue.js 3.5, Pinia, UnoCSS y TypeScript (JSX).",
        "Gestión de entornos y despliegues locales con Nginx y Docker."
      ],
      technologies: ["Vue.js 3.5", "Pinia", "UnoCSS", "TypeScript", "JSX", "Module Federation", "Vite", "Docker", "Nginx", "GitHub Copilot", "OpenCode"]
    },
    {
      id: "exp-2",
      role: "Desarrollador Frontend",
      company: "Alegramed",
      period: "Septiembre 2021 – Enero 2026",
      location: "Remoto / Híbrido",
      description: "Migración técnica completa de Vue.js 2 a Vue.js 3, implementación de TypeScript y desarrollo de librería de componentes UI.",
      achievements: [
        "Migración técnica completa de Vue.js 2 a Vue.js 3.",
        "Implementación de TypeScript en el stack tecnológico para reducir errores en tiempo de ejecución y mejorar la documentación del código.",
        "Desarrollo de una librería de componentes UI utilizando Storybook.",
        "Despliegue y gestión de aplicaciones utilizando la plataforma Azure y Capacitor para desarrollo híbrido.",
        "Colaboración estrecha con equipos de diseño y backend en metodologías ágiles."
      ],
      technologies: ["Vue.js 2/3", "TypeScript", "Storybook", "Azure", "Capacitor", "Pinia", "Vue Router", "Docker"]
    },
    {
      id: "exp-3",
      role: "Desarrollador FullStack",
      company: "Movistar",
      period: "Julio 2021 – Septiembre 2021",
      location: "Buenos Aires, Argentina",
      description: "Desarrollo de soluciones bajo arquitectura de microservicios utilizando Next.js y Node.js con orquestación en OpenShift.",
      achievements: [
        "Desarrollo de soluciones utilizando Next.js y Node.js bajo arquitectura de microservicios.",
        "Orquestación de contenedores con OpenShift y control de versiones/CI-CD con GitLab.",
        "Colaboración estrecha con diseñadores mediante Zeplin para asegurar fidelidad visual.",
        "Implementación de interfaces responsivas y accesibles."
      ],
      technologies: ["Next.js", "Node.js", "OpenShift", "GitLab", "Microservicios", "Zeplin", "TypeScript", "Docker"]
    },
    {
      id: "exp-4",
      role: "Desarrollador Frontend",
      company: "Daptee",
      period: "Mayo 2021 – Julio 2021",
      location: "Buenos Aires, Argentina",
      description: "Desarrollo de interfaces dinámicas con Vue.js 2 y Bootstrap bajo metodologías ágiles.",
      achievements: [
        "Desarrollo de interfaces dinámicas utilizando Vue.js 2 y Bootstrap.",
        "Gestión de tareas y flujo de trabajo bajo metodologías ágiles utilizando Trello.",
        "Implementación de componentes reutilizables y optimización de rendimiento."
      ],
      technologies: ["Vue.js 2", "Bootstrap", "JavaScript", "HTML5/CSS3", "Trello", "Git"]
    }
  ] as ExperienceItem[],
  projects: [
    {
      id: "proj-1",
      title: "La Peli",
      category: "App de Cine",
      description: "Catálogo de películas con reseñas en español (traducción automática), búsqueda y filtros por género. Rediseño Cinema Noir generado con Stitch.",
      image: "projects/la-peli.png",
      technologies: ["React", "TypeScript", "Tailwind", "TMDB API", "GitHub Pages"],
      liveUrl: "https://niconova53.github.io/la-peli/",
      githubUrl: "https://github.com/niconova53/la-peli",
      featured: true
    },
    {
      id: "proj-2",
      title: "React Tetris",
      category: "Juego",
      description: "Tetris con gravedad, lock delay de 500 ms, hold, preview de la siguiente pieza y Super Rotation System con wall-kicks. Estética Sugar Rush creada con Stitch.",
      image: "projects/react-tetris.png",
      technologies: ["React", "TypeScript", "Vite", "GitHub Pages"],
      liveUrl: "https://niconova53.github.io/react-tetris/",
      githubUrl: "https://github.com/niconova53/react-tetris",
      featured: true
    },
    {
      id: "proj-3",
      title: "Daily Time",
      category: "App Diaria",
      description: "App del día a día en tiempo real con Firebase Realtime Database, tema Deep Slate oscuro y búsqueda de GIFs con Giphy.",
      image: "projects/daily-time.png",
      technologies: ["Vue 3", "TypeScript", "Vite", "Firebase", "Giphy"],
      liveUrl: "https://alegra-daily-time.web.app/",
      githubUrl: "https://github.com/niconova53/daily-time",
      featured: true
    }
  ] as ProjectItem[],
  skills: [
    {
      name: "Frontend & Frameworks",
      skills: [
        { name: "Vue.js (2 & 3)", level: 95 },
        { name: "TypeScript / JavaScript (ES6+)", level: 95 },
        { name: "Vue 3 Composition API / Pinia", level: 90 },
        { name: "Next.js / Node.js", level: 85 },
        { name: "UnoCSS / CSS3 / HTML5", level: 90 },
        { name: "Module Federation / Microfrontends", level: 85 },
        { name: "Storybook / Component Libraries", level: 85 }
      ]
    },
    {
      name: "Herramientas, Cloud & DevOps",
      skills: [
        { name: "Docker / Nginx", level: 85 },
        { name: "Azure / OpenShift", level: 80 },
        { name: "GitHub Copilot / OpenCode / AI Agents", level: 90 },
        { name: "GitLab / GitHub / CI-CD", level: 85 },
        { name: "Capacitor / Híbrido", level: 80 },
        { name: "Zeplin / UI-UX Detail", level: 85 },
        { name: "Metodologías Ágiles / Trello", level: 90 }
      ]
    },
    {
      name: "Lenguajes & Fundamentos",
      skills: [
        { name: "TypeScript", level: 95 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "Java", level: 70 },
        { name: "HTML5 / CSS3", level: 95 }
      ]
    }
  ] as SkillCategory[]
};