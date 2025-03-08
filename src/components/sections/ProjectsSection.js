import { PROJECTS } from "../../assests/data/projects"
import { Link } from "react-router-dom";

function ProjectItem({ id, title, url, desc }) {
    const shortDesc = desc.length > 200 ? `${desc.substring(0, 200)}...` : desc;

    return (
        <div className="blog__item">
            <h4>{title}</h4>
            <ul>
                <li><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></li>
            </ul>
            <p>{shortDesc}</p>
            <Link to={`/projects/${id}`}>Read more <span className="arrow_right"></span></Link>
        </div>
    )
}

export default function ProjectsSection() {
    const projects = PROJECTS.map((project) => {
        return (
            <div key={"project" + project.id}  className="col-lg-4 col-md-6 col-sm-6" >
                <ProjectItem id={project.id} title={project.title} desc={project.desc} url={project.url} />
            </div>
        );
    });


    return (

        <section className="blog spad">
            <div className="container">
                <div className="row projects__section">
                    {projects}
                </div>
            </div>
        </section>

    )
}
