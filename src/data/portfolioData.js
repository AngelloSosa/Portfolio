import { 
  SiReact, 
  SiJavascript, 
  SiNodedotjs, 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiVuedotjs, 
  SiAngular, 
  SiSpring, 
  SiDotnet, 
  SiMysql, 
  SiGit,
  SiFigma 
} from 'react-icons/si'

export const portfolioData = {
  name: "Angello Sosa",
  title: "Desarrollador Full Stack",
  bio: "Estudiante de Ingenieria de Software en la Universidad Peruana de Ciencias Aplicadas (UPC). Apasionado por la tecnologia y el desarrollo full stack.",
  
  skills: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "Spring", icon: SiSpring, color: "#6DB33F" },
    { name: ".NET", icon: SiDotnet, color: "#512BD4" },
    { name: "SQL", icon: SiMysql, color: "#4479A1" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "UI/UX Design", icon: SiFigma, color: "#F24E1E" }
  ],

  projects: [
    {
      id: 1,
      title: "Plataforma de E-Commerce",
      description: "Una solución moderna de comercio electrónico construida con React y Node.js",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "App de Gestión de Tareas",
      description: "Gestión colaborativa de tareas con actualizaciones en tiempo real",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      tech: ["React", "Firebase", "Material-UI"],
      link: "#"
    },
    {
      id: 3,
      title: "Dashboard del Clima",
      description: "Hermosa aplicación del clima con gráficos interactivos",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      tech: ["Vue.js", "Chart.js", "Integración API"],
      link: "#"
    }
  ],

  navigation: [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre Mí' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' }
  ],

  contact: {
    email: "tu.email@ejemplo.com",
    phone: "+51 (999) 123-456",
    location: "Lima, Perú"
  },

  social: [
    { name: "GitHub", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Twitter", url: "#" }
  ]
}