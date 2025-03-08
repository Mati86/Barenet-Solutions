import { Link } from "react-router-dom"
import callToActionImg from "../../assests/img/calltos-bg.jpg"


export default function CallToActionSection() {
  return (
    <section className="callto  set-bg" style={{ backgroundImage: `url(${callToActionImg})` }}>
    <div className="container">
      <div className="callto__services " >
        <div className="row d-flex justify-content-center">
          <div className="col-lg-10 text-center">
            <div className="callto__text">
              <h2>Revolutionize your IT infrastructure with Barenet's expertise</h2>
              <p>Your path to scalable, agile, and future-ready networks. Contact us today to elevate your business to new heights.</p>
              <Link to="/contact">Let's Work Together</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
