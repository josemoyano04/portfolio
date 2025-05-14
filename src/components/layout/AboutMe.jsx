import "../../styles/AboutMe.css"
import avatar from "../../assets/avatar.jpg"

export function AboutMe(props) {
    return (
        <article {...props}
            id="about"
            className="about-me-article">
            <h2>Sobre mí</h2>
            <section className="content">

                <img src={avatar} alt="Avatar de Jose" />
                <p>
                    ¡Hola!, soy José Moyano, programador y estudiante de Ingeniería Informática en la Universidad Nacional Arturo Jauretche.
                    <br />
                    Paso mis días entre líneas de código, ideas nuevas y el desafío constante de encontrar soluciones eficientes. Me gusta entender
                    cómo funcionan las cosas, desarmarlas mentalmente y buscar maneras de mejorarlas. Disfruto cada momento en el que aprendo algo nuevo,
                    porque sé que siempre hay espacio para crecer y perfeccionar lo que hago.
                    {/* <br />
                    Cuando no estoy metido en proyectos o explorando conceptos, me gusta compartir lo que sé, intercambiar ideas y colaborar
                    con otros. Creo que la mejor manera de avanzar es rodearse de gente con ganas de construir, aprender y crear algo que realmente marque
                    la diferencia.
                    <br />
                    Al final del día, más allá de la tecnología, lo que me mueve es la curiosidad, las ganas de resolver problemas y la satisfacción de ver
                    algo en lo que trabajé cobrar vida. */}
                </p>
            </section>

        </article>
    )

}