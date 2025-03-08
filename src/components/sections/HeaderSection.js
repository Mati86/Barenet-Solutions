import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';


export default function HeaderSection() {
  const [isSticky, setIsSticky] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility


  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Inside your component
  const location = useLocation();

  // Function to determine if a link is active
  const isActive = (path) => {
    setToggle(!toggle)
    console.log(toggle)
    return location.pathname === path;
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };


  return (
    <header className={`header ${isSticky ? ' sticky' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-10 col-8">
            <div className="header__logo">
              <Link to="/"><img src={process.env.PUBLIC_URL + '/logoBare.png'} alt="" height="45px"></img></Link>
            </div>
          </div>
          <div className={`hamburger ${toggle ? 'active' : ''}`} onClick={isActive}></div>
          <div className={`col-lg-9 toggle_nav ${toggle ? 'active' : ''}`}>
            <div className="header__nav__option">
              <nav className="header__nav__menu mobile-menu">
                <ul>
                  <li><NavLink to="/" isactive={() => isActive('/')} onClick={isActive}>Home</NavLink></li>
                  <li><NavLink to="/about" isactive={() => isActive('/about')} onClick={isActive}>About</NavLink></li>
                  <li><NavLink to="/services" isactive={() => isActive('/services')} onClick={isActive}>Services</NavLink></li>
                  {/* <li><NavLink to="/projects" isactive={() => isActive('/projects')} onClick={isActive}>Projects</NavLink></li> */}

                  <li><NavLink to="/projects" isactive={() => isActive('/projects')} onClick={isActive}>Projects</NavLink>
                    <ul class="dropdown">
                      <li><NavLink to="/projects/0" isactive={() => isActive('/projects/0')} onClick={isActive}>LYNX</NavLink></li>
                      <li><NavLink to="/projects/1" isactive={() => isActive('/projects/1')} onClick={isActive}>ONE</NavLink></li>
                    </ul>
                  </li>
                  <li><NavLink to="/contact" isactive={() => isActive('/contact')} onClick={isActive}>Contact</NavLink></li>
                </ul>
              </nav>
              <div className="header__nav__social">
                <a href="https://www.linkedin.com/company/barenet-solutions/"><i className="fa fa-linkedin"></i></a>
                {/* <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a> */}
              </div>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
  )
}
