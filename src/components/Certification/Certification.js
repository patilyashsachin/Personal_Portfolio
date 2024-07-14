import React from 'react';

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
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div className="carousel-inner" style={{ height: '70vh' }}>
            <div className="carousel-item active">
              <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                <img 
                  src={`${process.env.PUBLIC_URL}/images/UX.png`} 
                  className="d-block img-fluid" 
                  alt="UX Certification" 
                  style={{ borderRadius: '15px', height: '500px', maxWidth: '100%' }} 
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                <img 
                  src={`${process.env.PUBLIC_URL}/images/Udemy.png`} 
                  className="d-block img-fluid" 
                  alt="Udemy Certification" 
                  style={{ borderRadius: '15px', height: '500px', maxWidth: '100%' }} 
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/Internship.png`}
                  className="d-block img-fluid"
                  alt="Internship Certification"
                  style={{ borderRadius: '15px', height: '500px', maxWidth: '100%' }}
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/HackerRank-1.png`}
                  className="d-block img-fluid"
                  alt="HackerRank Certification"
                  style={{ borderRadius: '15px', height: '500px', maxWidth: '100%' }}
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/Java-1.png`}
                  className="d-block img-fluid"
                  alt="Java Certification"
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
  );
}

export default Certification;
