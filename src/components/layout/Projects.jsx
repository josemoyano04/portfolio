import '../../styles/Projects.css'
import { ProjectCard } from "../cards/ProjectCard"
import { PROJECTS } from "../../data/projects"

export function Projects() {
  return (
    <section id='projects' className="projects-section">
      <h2>Proyectos</h2>
      {PROJECTS.map((project) => (
        <ProjectCard 
          key={project.title}
          title={project.title}
          description={project.description}
          image={project.image}
          tags={project.tags}
          github={project.github}
          preview={project.preview}
          preview_link={project.preview_link}
        />
      ))}
    </section>
  );
}
