import chooseBg from "../../assests/img/choose-bg.jpg"
import { CHOOSEUS } from "../../assests/data/chooseus"
import { Link } from "react-router-dom";

function ChooseUsItem({ title, desc, classname }) {
    const className = `team__item ${classname}`;

    return (
        <div className={className}>
            <div className="testimonial__item services__item">
                <div className="testimonial__text choose__text testimonial__author__text">
                    <h4 className="choose_heading">{title}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}


export default function ChooseUsSection() {

    const data = CHOOSEUS.map((d) => {
        return (
          <div key={"choose" + d.id} className="col-lg-3 col-md-6 col-sm-6 p-0" >
            <ChooseUsItem title={d.title} desc={d.desc} classname={d.classname} />
          </div>
        );
      });


    return (
        <section className="team spad set-bg" style={{ backgroundImage: `url(${chooseBg})` }}>
            {/* <div className="overlay"></div> */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title team__title">
                            <span>Reasons to Trust</span>
                            <h2>Why Choose Us</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {data}

                    <div className="col-lg-12 p-0">
                        <div className="team__btn">
                            <Link to="/contact" className="primary-btn">Get In Touch</Link>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}
