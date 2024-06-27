import React from 'react'

function Footer() {
  return (
    <div>
        <div class="container-fluid pb-1 mt-3" id='Footer' style={{backgroundColor:'#f1eeff'}}>
          <div class="row justify-content-center">
            <div class="col-12 col-md-6"> 
              <div class="card border-0 mt-4 py-3" style={{borderRadius:'25px'}}>
                <div class="card-body text-center p-3">
                  <h5>Say hello at</h5>
                  <h2 style={{color:'#7755ff'}}>patilyash1914@gmail.com</h2>
                </div>
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-center mt-4'>
              <ul className='d-flex' style={{ listStyle: 'none', fontSize:'18px', fontWeight:'600' }}>
                  <li className='me-5'><a href="" style={{ textDecoration: 'none', color: 'black' }}>Home</a></li>
                  <li className='me-5'><a href="#AboutMe" style={{ textDecoration: 'none', color: 'black' }}>About Me</a></li>
                  <li className='me-5'><a href="#Skill" style={{ textDecoration: 'none', color: 'black' }}>Skill</a></li>
                  <li className='me-5'><a href="#Certification" style={{ textDecoration: 'none', color: 'black' }}>Certification</a></li>
                  <li className='me-5'><a href="#Projects" style={{ textDecoration: 'none', color: 'black' }}>Projects</a></li>
              </ul>
          </div>

          <div className='d-flex justify-content-center mt-4'>
              <ul className='d-flex' style={{ listStyle: 'none'}}>
                  <a href="#" style={{ color: 'inherit' }} className="text-decoration-none me-3"><i className="fab fa-facebook h4"></i></a>
                  <a href="#" style={{ color: 'inherit' }} className="text-decoration-none me-3"><i className="fab fa-twitter h4"></i></a>
                  <a href="#" style={{ color: 'inherit' }} className="text-decoration-none me-3"><i className="fab fa-instagram h4"></i></a>
                  <a href="#" style={{ color: 'inherit' }} className="text-decoration-none me-3"><i className="fab fa-github h4"></i></a>
              </ul>
          </div>    

          <p className='text-center mt-2'>&copy; Copyright 2023 Portfolio - Yash Sachin Patil</p>
        </div>
    </div>
  )
}

export default Footer