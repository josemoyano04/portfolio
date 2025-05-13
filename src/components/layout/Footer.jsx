import "../../styles/Footer.css"

export function Footer(props) {
  return (
    <footer {...props} className="footer">
      <div className="footer-content">
        <p>
          {new Date().getFullYear()} - Desarrollado por José Moyano.
        </p>
        <nav className="footer-links">
          <a href="#about">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact-me">Contacto</a>
        </nav>
      </div>
    </footer>
  );
}
