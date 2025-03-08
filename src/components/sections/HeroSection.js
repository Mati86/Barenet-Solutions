import heroBg from "../../assests/img/hero/4.jpg"

export default function HeroSection() {
  return (
    <section className="hero set-bg">
        <div className="hero__item set-bg" style={{ backgroundImage: `url(${heroBg})` }}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="hero__text">
                  <span>For Open Networking Solutions</span>
                  <h2>Barenet Solutions</h2>
                  <a href="#contact" className="primary-btn">Connect with us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
