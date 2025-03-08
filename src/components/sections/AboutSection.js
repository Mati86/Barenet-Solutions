import aboutImg1 from "../../assests/img/about/about-1.jpg"
import aboutImg2 from "../../assests/img/about/about-2.jpg"
import aboutImg3 from "../../assests/img/about/about-3.jpg"


export default function AboutSection() {
  return (
    <section className="about spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-none d-md-block">
          <div className="about__pic">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="about__pic__item about__pic__item--large set-bg"
                  style={{ backgroundImage: `url(${aboutImg1})` }}></div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="about__pic__item set-bg" style={{ backgroundImage: `url(${aboutImg2})` }}>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="about__pic__item set-bg" style={{ backgroundImage: `url(${aboutImg3})` }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about__text">
            <div className="section-title">
              <span>About Barenet Solutions</span>
              <h2>Who we are?</h2>
            </div>
            <div className="about__text__desc">
              <p>Barenet Solutions specializes in providing advanced and tailored solutions in the
                realm of open networking and software-defined networking. With a clear focus on
                leveraging open-source technologies and protocols, the company offers a wide range
                of services aimed at addressing various networking challenges and requirements. Our
                comprehensive offerings encompass professional services, cutting-edge research, and
                development activities, all geared towards creating flexible and scalable networks.
                We are more than just a service provider, we are your trusted partner in navigating the
                complexities of the open networking nebula. Our dedicated team of experts is committed
                to delivering tailored solutions that meet your unique business needs. We pride
                ourselves on our ability to understand your objectives and deliver exceptional results
                that drive your success.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
