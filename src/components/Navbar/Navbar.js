import React from 'react';
import { Link } from 'react-scroll';
import '../../App.css';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fw-bold sticky-top bg-light">
        <div className="container">
          <h3 style={{ color: '#7755ff' }} className='fw-bold'>Yash's Portfolio</h3>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link 
                  className="nav-link active me-5" 
                  to="AboutMe" 
                  smooth={true} 
                  duration={100}
                  style={{ cursor: 'pointer' }}>
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link active me-5" 
                  to="Skill" 
                  smooth={true} 
                  duration={100}
                  style={{ cursor: 'pointer' }}>
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link active me-5" 
                  to="Certification" 
                  smooth={true} 
                  duration={100}
                  style={{ cursor: 'pointer' }}>
                  Certification
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link active me-5" 
                  to="Projects" 
                  smooth={true} 
                  duration={100}
                  style={{ cursor: 'pointer' }}>
                  Projects
                </Link>
              </li>
              <button type="button" className="btn btn-warning fw-bold">
                <a href='https://github.com/' target="_blank" id='new'>
                  Github
                </a>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
