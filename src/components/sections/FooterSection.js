import { Link } from 'react-router-dom'

export default function FooterSection() {

  let year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="footer__top__logo">
                <Link to="/"><img src={process.env.PUBLIC_URL + "/logoBare.png"} alt="" height="45px"></img></Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="footer__top__social">
                <a href="https://www.linkedin.com/company/barenet-solutions/"><i className="fa fa-linkedin"></i></a>
                {/* <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="footer__option">
          <div className="row">
            <div className="col-lg-6 col-md-7 col-sm-7">
              <div className="footer__option__item">
                <h5>About us</h5>
                <p>Barenet Solutions specializes in providing advanced and tailored solutions in the
                  realm of open networking and software-defined networking.</p>
                <Link to="/about" className="read__more">Read more <span className="arrow_right"></span></Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4">
              <div className="footer__option__item">
                <h5>Information</h5>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/projects">Projects</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="footer__option__item">
                <h5>Newsletter</h5>
                <p>Subscribe to Barenet Solutions' newsletter</p>
                <form action="#">
                  <input type="text" placeholder="Email"></input>
                  <button type="submit"><i className="fa fa-send"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <div className="row">
            <div className="col-lg-12 text-center">
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              <p className="footer__copyright__text">Copyright &copy; {year} Barenet Solutions. All rights reserved.
              </p>
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
