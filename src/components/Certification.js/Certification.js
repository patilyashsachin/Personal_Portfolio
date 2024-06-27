import React from 'react'

function Certification() {
  return (
    <div>
        <div className="container-fluid text-light" id='Certification' style={{ backgroundColor: '#0a0715', height: '85vh' }}>
          <p className="fw-bold text-center pt-3 fs-1" id='league-spartan-font'>Certification</p>
          <div id="carouselExampleCaptions" className="carousel slide mt-4" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner" style={{ height: '70vh' }}>
              <div className="carousel-item active">
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                <img 
                  src="images/UX.png" 
                  className="d-block img-fluid" 
                  alt="UX Certification" 
                  style={{ borderRadius: '15px', height: '500px', maxWidth: '100%' }} 
                />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                <img 
                  src="images/College.png" 
                  className="d-block img-fluid" 
                  alt="UX Certification" 
                  style={{ borderRadius: '15px', height: '500px', maxWidth: '100%' }} 
                />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                  <img
                    src="images/Internship.png"
                    className="d-block img-fluid"
                    alt="Slide 3"
                    style={{ borderRadius: '15px', height: '500px', maxWidth: '100%' }}
                  />
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Certification