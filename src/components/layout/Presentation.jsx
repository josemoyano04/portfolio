import "../../styles/Presentation.css";
import { GitHubIcon } from "../icons/Github";
import { LinkedInIcon } from "../icons/Linkedin";
import { PcSmartphoneIcon } from "../icons/PcSmartphone";
import { Badge } from "../common/Bagde";

export function Presentation() {1
  return (
    <main className="presentation">
      <section className="presentation-text">
        <h1>Hola, soy Jose</h1>

        <h2>Desarrollador Backend</h2>

          <p>
            <img src="src/assets/avatar.jpg" alt="Imagen de Jose" className="avatar-for-small-screen"/>
            Apasionado por <strong>aprender</strong> y resolver problemas,{" "}
            <strong>enfocado</strong> en construir soluciones funcionales y
            efectivas. Siempre en busca de <strong>desafíos</strong> que impulsen
            mi crecimiento personal y profesional.
          </p>
        

        <nav className="links-section">
          <a href="#projects" className="link-button projects-link">
            <PcSmartphoneIcon />
            Proyectos
          </a>
          <a
            href="https://www.github.com/josemoyano04"
            target="_blank"
            className="link-button"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jose-moyano-266988296/"
            target="_blank"
            className="link-button"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </nav>
      </section>
 
      <section className="avatar">
          <img src="src/assets/avatar.jpg" alt="Imagen de Jose" />
          <Badge className="badge">Disponible para trabajar</Badge>
      </section>
    </main>
  );
}
