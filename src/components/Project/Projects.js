import React from 'react'
import Navbar  from '../Navbar/Navbar';

function Projects() {
  return (
    <div>
        <div className='sticky-top'>
            <Navbar/>
        </div>
       <div className="container">
        <p className='text-center fs-1 fw-bolder' id='league-spartan-font'>Projects</p>
        <div className='mt-4'>
            <div className="row border border-dark border-2 p-3" style={{borderRadius: '0px 20px 0px 20px'}}>
                <div className="col-5">
                <div style={{ overflow: 'auto', position: 'relative', height: 'auto', maxHeight: '300px', borderRadius: '0px 20px 0px 20px', border: '1px solid #ced4da' }}>
                          <img src={`${process.env.PUBLIC_URL}/images/CWH.png`} alt="" className='img-fluid' style={{ width: '100%' }} />
                      </div>
                </div>
                <div className="col-7">
                    <h3>Learning Platform</h3>
                    <h5>Developed a comprehensive learning platform using MERN Stack.</h5>
                    <h5>Implemented user authentication to enhance the user experience, providing secure access to course materials.</h5>
                    {/* <a href="https://patilyashsachin.github.io/CodingMania/" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn text-light fw-bold px-4" style={{ backgroundColor: '#7755ff' }}>
                        Visit
                        </button>
                    </a> */}
                </div>
            </div>
        </div>

        <div className='mt-5'>
            <div className="row border border-dark border-2 p-3" style={{borderRadius: '0px 20px 0px 20px'}}>
                <div className="col-5">
                <div style={{ overflow: 'auto', position: 'relative', height: 'auto', maxHeight: '300px', borderRadius: '0px 20px 0px 20px', border: '1px solid #ced4da' }}>
                          <img src={`${process.env.PUBLIC_URL}/images/Complaint.png`} alt="" className='img-fluid' style={{ width: '100%' }} />
                      </div>
                </div>
                <div className="col-7">
                    <h3>Grievance Portal</h3>
                    <h5>Implemented a PHP-based grievance submission and tracking system.</h5>
                    <h5>Designed a user-friendly interface with HTML and CSS.Designed a responsive and user-friendly interface with HTML and CSS.</h5>
                    <h5>Implemented status update notifications for grievance tracking.</h5>
                    {/* <button type="button" class="btn text-light fw-bold px-4" style={{backgroundColor:'#7755ff'}}>Visit</button> */}
                </div>
            </div>
        </div>

        <div className='my-5'>
            <div className="row border border-dark border-2 p-3" style={{borderRadius: '0px 20px 0px 20px'}}>
                <div className="col-5">
                <div style={{ overflow: 'auto', position: 'relative', height: 'auto', maxHeight: '300px', borderRadius: '0px 20px 0px 20px', border: '1px solid #ced4da' }}>
                          <img src={`${process.env.PUBLIC_URL}/images/Portfolio.png`} alt="" className='img-fluid' style={{ width: '100%' }} />
                      </div>
                </div>
                <div className="col-7">
                    <h3>Personal Portfolio</h3>
                    <h5>Developed a responsive portfolio using React, HTML, CSS, JS, ghpages, EmailJS.</h5>
                    <h5>Implemented advanced coding techniques to develop an interactive
                    and user-friendly portfolio.</h5>
                    {/* <button type="button" class="btn text-light fw-bold px-4" style={{backgroundColor:'#7755ff'}}>Visit</button> */}
                </div>
            </div>
        </div>

        <div className='my-5'>
  <div className="row border border-dark border-2 p-3" style={{ borderRadius: '0px 20px 0px 20px' }}>
    <div className="col-5">
      <div
        style={{
          position: 'relative',
          height: 'auto',
          maxHeight: '300px',
          borderRadius: '0px 20px 0px 20px',
          border: '1px solid #ced4da',
          overflow: 'hidden' // Ensure no overflow
        }}
      >
        <video
          src={`${process.env.PUBLIC_URL}/images/Video.mp4`} // Adjust the path and filename
          alt=""
          className='img-fluid'
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'cover' // Cover the container while maintaining aspect ratio
          }}
          controls
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div className="col-7">
      <h3>Chrome Extension for Eye Relaxation</h3>
      <h5>
        Developed EyeRelax, a Chrome Extension that provides regular reminders and eye exercises.
      </h5>
      <h5>HTML, CSS, JS, Chrome Extensions API.</h5>
      {/* <button type="button" class="btn text-light fw-bold px-4" style={{backgroundColor:'#7755ff'}}>Visit</button> */}
    </div>
  </div>
</div>



       </div>
    </div>
  )
}

export default Projects;