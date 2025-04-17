import "../../styles/ProjectCard.css";
import { GitHubIcon } from "../icons/Github.jsx"
import { PcSmartphoneIcon } from "../icons/PcSmartphone.jsx"


export function ProjectCard({ title, description, image, tags, github,  preview_link, preview = false}) {
    return (
        <article className="card">
            <img src={image}
                 alt={`Portada del proyecto ${title}`} 
            />

            <section className="text-section">
                <h3>{title}</h3>
                <ul className="tags">
                    {tags.map((tag, index) => (
                        <li key={index} className="tag">
                            {tag.icon}
                            {tag.name}
                        </li>
                    ))}
                </ul>
                <p>{description}</p>
                <nav className="links">
                        <a href={github} target="_blank"> 
                            <GitHubIcon />
                            Github
                        </a>
                        {
                            preview && preview_link &&(
                            <a href={preview_link} target="_blank">
                                <PcSmartphoneIcon />
                                Preview
                            </a>
                            )
                        }
                </nav>
            </section>
        </article>
    )
}
