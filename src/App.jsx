import "./styles/App.css"
import { Navbar } from "./components/layout/Navbar"
import { Presentation } from "./components/layout/Presentation"
import { Projects } from "./components/layout/Projects"
import { Skills } from "./components/layout/Skills"
import { AboutMe } from "./components/layout/AboutMe"
import { Footer } from "./components/layout/Footer"
import { ContactMe } from "./components/layout/ContactMe"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Presentation />
      <Projects />
      <Skills />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
