import "../../styles/skills.css";
import TAGS, { TAG_TYPES } from "../../data/tags"

const SKILLS = Object.values(TAGS)
let langAndFramework = []
let tools = []
let general = []
let other = []

SKILLS.forEach((skill) => {
  switch (skill.type) {
    case TAG_TYPES.framework:
    case TAG_TYPES.language:
      langAndFramework.push(skill); break
    case TAG_TYPES.tool:
      tools.push(skill); break
    case TAG_TYPES.general:
      general.push(skill); break
    case TAG_TYPES.other:
      other.push(skill); break
  }
})


export function Skills() {
  return (
    <aside id="skills" className="skills">
      <h2>Habilidades</h2>

      <ul className="skills-list">
        <section className="skill-for-type-section">
          <h3>Lenguajes y Frameworks</h3>
          <div className="skills-group">
            {
              langAndFramework.map((skill) => (
                <li key={skill.name}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </li>
              ))
            }
          </div>
        </section>
        <section className="skill-for-type-section">
          <h3>Herramientas</h3>
          <div className="skills-group">
            {
              tools.map((skill) => (
                <li key={skill.name}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </li>
              )
              )
            }
          </div>
        </section>

        <section className="skill-for-type-section">
          <h3>Conocimientos y aplicaciones generales</h3>
          <div className="skills-group">
            {
              general.map((skill) => (
                <li key={skill.name}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </li>
              )
              )
            }
          </div>
        </section>
      </ul>

    </aside>
  )
}