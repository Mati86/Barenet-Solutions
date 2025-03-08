export default function ContactSection() {
  return (
    <section className="contact spad" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="contact__form">
                <h3>Contact Information</h3>
              </div>
              <div className="contact__widget__item">
                <div className="contact__widget__item__icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="contact__widget__item__text">
                  <h4>Hotline</h4>
                  <p>+1 (405) 564-1054</p>
                </div>
              </div>
              <div className="contact__widget__item">
                <div className="contact__widget__item__icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="contact__widget__item__text">
                  <h4>Email</h4>
                  <p>info@barenetsolutions.com</p>
                </div>
              </div>
              <div className="contact__widget__item">
                <div className="contact__widget__item__icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="contact__widget__item__text">
                  <h4>Address</h4>
                  <p>Stillwater, Oklahoma, USA</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contact__form">
                <h3>Reach out</h3>
                <form action="https://formspree.io/f/mknlgedb" method="POST">
                  <input type="text" name="name" placeholder="Name" required></input>
                  <input type="email" name="email" placeholder="Email" required></input>
                  <input type="text" name="subject" placeholder="Subject" required></input>
                  <textarea name="message" placeholder="Message"></textarea>
                  <button type="submit" className="site-btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
