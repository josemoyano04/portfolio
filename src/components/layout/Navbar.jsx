import '../../styles/Navbar.css'
import { JmDevIcon } from "../icons/JmDev.jsx"

export function Navbar() {
  return (
    <>
      <nav className="navbar">


        <JmDevIcon className="logo" />

        <div className="navbar-menu">
          <a href="#projects">Proyectos</a>
          <a href="#skills">Habilidades</a>
          <a href="#about">Sobre mi</a>
          <a href="#contact-me">Contáctame</a>
        </div>

      </nav>
      <div className='separator' />
    </>
  )
}