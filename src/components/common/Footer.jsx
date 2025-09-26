import { portfolioData } from '../../data/portfolioData'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 {portfolioData.name}. Todos los derechos reservados.</p>
        <div className="social-links">
          {portfolioData.social.map((link, index) => (
            <a key={index} href={link.url} className="social-link">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer