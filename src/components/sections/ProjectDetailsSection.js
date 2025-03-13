import { PROJECTS } from '../../assests/data/projects';
import SectionHeading from '../cssItems/SectionHeading'
import CallToImg from '../../assests/img/proj-call-to.jpg'
import { Link } from 'react-router-dom';

export default function ProjectDetailsSection({ id }) {
  const project = PROJECTS.find(project => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const { title, desc, url, shortTitle, img } = project;


  return (
    <>
      <SectionHeading title={title} prevPage="Projects" prevUrl="/projects" currPage={shortTitle} />
      <div className="blog-details spad">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <img src={img} className='mb-5' alt=""></img>
            <div className="col-lg-8">
              <div className="blog__details__content">
                <div className="blog__details__text">
                  <p>{desc}</p>
                  {url &&
                  <ul >
                    <li>See Project In Action: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></li>
                  </ul>
                  
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="callto spad set-bg" style={{ backgroundImage: `url(${CallToImg})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="callto__text">
                <h2>Liked the Project? Let's Connect & Share Thoughts</h2>
                <p>Unleash the Power of Open Networking</p>
                <Link to="/contact" id='projectCall'>Start a Conversation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <CallToAction/> */}
    </>
  )
}
