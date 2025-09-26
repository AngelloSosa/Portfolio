import { useState, useEffect } from 'react'
import './App.css'
import emailjs from '@emailjs/browser'
// Import specific icons from react-icons
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
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

// Import images
import avatarImage from '/assets/avatar.png'
import alquilafacilLogo from '/assets/logos/alquilafacil-logo.png'
import ezgasLogo from '/assets/logos/ezgas-logo.png'
import sweetmanagerLogo from '/assets/logos/sweetmanager-logo.png'
import ecomoveLogo from '/assets/logos/ecomove-logo.png'
import safevisionLogo from '/assets/logos/safevision-logo.png'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  // Sample portfolio data
  const portfolioData = {
    name: "Angello Sosa",
    title: "Desarrollador Full Stack",
    bio: "Soy estudiante de 8vo ciclo de Ingenieria de Software en la Universidad Peruana de Ciencias Aplicadas. Me considero un pasionado por la tecnologia y el desarrollo Full Stack.",
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
        title: "AlquilaFacil",
        description: "Una solución moderna de alquiler de espacios para eventos, construida con Vue.js y .NET",
        image: alquilafacilLogo,
        tech: ["Vue", ".NET", "Tailwind"],
        link: "https://alquilaez.netlify.app"
      },
      {
        id: 2,
        title: "EzGas",
        description: "Aplicación en Python + Flask para localizar estaciones de servicio cercanas",
        image: ezgasLogo,
        tech: ["Python", "Flask"],
        link: "https://ezgas-5.onrender.com"
      },
      {
        id: 3,
        title: "SweetManager",
        description: "Aplicación en Vue.js + .NET que permite mejorar procesos de gestión administrativa a hoteles.",
        image: sweetmanagerLogo,
        tech: ["Vue.js", "PrimeVue",  ".NET"],
        link: "https://sweet-manager-web-application.vercel.app"
      },
      {
        id: 4,
        title: "EcoMove",
        description: "Aplicación web para la reserva de vehículos eléctricos compartidos en áreas urbanas.",
        image: ecomoveLogo,
        tech: ["Angular", "Spring", "Angular Material"],
        link: "https://ecogo-upc-wx64.github.io/ecomove-landing-page/"
      },
      {
        id: 5,
        title: "SafeVision",
        description: "Aplicación con reconocimiento visual para monitorear conductores y prevenir accidentes.",
        image: safevisionLogo,
        tech: ["Python", "OpenCV", "TensorFlow"],
        link: "#"
      }
    ]
  }

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv-angello-sosa.pdf'
    link.download = 'CV-Angello-Sosa.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // EmailJS configuration usando variables de entorno
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'angellososaa2205@gmail.com'
        }
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Inicializar EmailJS
  useEffect(() => {
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">{portfolioData.name}</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {[
              { id: 'home', label: 'Inicio' },
              { id: 'about', label: 'Sobre Mí' },
              { id: 'skills', label: 'Habilidades' },
              { id: 'projects', label: 'Proyectos' },
              { id: 'contact', label: 'Contacto' }
            ].map(item => (
              <button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hola, soy <span className="highlight">{portfolioData.name}</span>
            </h1>
            <h2 className="hero-subtitle">{portfolioData.title}</h2>
            <p className="hero-description">{portfolioData.bio}</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                Ver Mi Trabajo
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Contáctame
              </button>
              <button className="btn btn-secondary" onClick={downloadCV}>
                Descargar CV
              </button>
            </div>
          </div>
          <div className="hero-visual">
              <img src={avatarImage} alt="Avatar" className="avatar-image" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">Sobre Mí</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Soy un desarrollador creativo con pasión por construir soluciones digitales innovadoras. 
                Con varios años de experiencia en desarrollo web, disfruto convirtiendo problemas complejos 
                en soluciones simples, hermosas e intuitivas.
              </p>
              <p>
                Cuando no estoy programando, puedes encontrarme explorando nuevas tecnologías, 
                repasando cursos universitarios o disfrutando de una buena playlist de música.
              </p>
              <div className="about-quote">
                <p>Dato curioso: Ex Barista de Starbucks, así que sé un par de cosas sobre café.</p>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>2+</h3>
                <p>Años de Experiencia <br />en desarrollo web</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Años de Experiencia <br />programando</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Habilidades y Experiencia</h2>
          <div className="skills-carousel">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              spaceBetween={30}
              slidesPerView={3}
              effect="coverflow"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              navigation={true}
              pagination={{ 
                clickable: true,
                dynamicBullets: true 
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="skills-swiper"
            >
              {portfolioData.skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <SwiperSlide key={index}>
                    <div className="skill-card">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        <IconComponent />
                      </div>
                      <div className="skill-info">
                        <h3 className="skill-name">{skill.name}</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

{/* Projects Section */}
<section id="projects" className="projects">
  <div className="container">
    <h2 className="section-title">Proyectos Destacados</h2>
    <div className="projects-grid">
      {portfolioData.projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-image">
            <img src={project.image} alt={project.title} />
            <div className="project-overlay">
              {project.link && project.link !== "#" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Ver Proyecto
                </a>
              ) : (
                <span className="btn btn-primary disabled">
                  Ver Proyecto
                </span>
              )}
            </div>
          </div>
          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Trabajemos Juntos</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Ponte en contacto</h3>
              <p>Siempre estoy interesado en nuevas oportunidades y proyectos emocionantes.</p>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-icon">📧</span>
                  <span>angellososaa2205@gmail.com</span>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📱</span>
                  <span>+51 992 095 441</span>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📍</span>
                  <span>Lima, Perú</span>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              {submitStatus === 'success' && (
                <div className="form-status success">
                  ✅ ¡Mensaje enviado exitosamente! Te responderé pronto.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="form-status error">
                  ❌ Error al enviar el mensaje. Por favor, intenta de nuevo.
                </div>
              )}
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Tu Nombre" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Tu Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Tu Mensaje" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? '⏳ Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 {portfolioData.name}. Todos los derechos reservados.</p>
          <div className="social-links">
            <a href="https://github.com/AngelloSosa" className="social-link">GitHub</a>
            <a href="https://www.linkedin.com/in/angello-sosa/" className="social-link">LinkedIn</a>
            <a href="https://www.instagram.com/angello_sos/" className="social-link">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
