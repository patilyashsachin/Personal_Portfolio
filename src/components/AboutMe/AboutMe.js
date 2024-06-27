import React from 'react'

function AboutMe() {
  return (
    <div>
        <div className="container-fluid" id='AboutMe' style={{backgroundColor:'#0a0715'}}>
            <div className="container py-5">
                    <div className="mt-3 px-5">
                        <h1 className='text-warning'>About Me</h1>
                        <p className='text-light fw-light fs-5'>Hello! My name is Yash, and I am currently pursuing a Bachelor of Engineering in Information Technology. I am passionate about web development and have developed skills in fullstack development, with a strong emphasis on frontend technologies. <br />
                        Over the course of my studies and personal projects, I have gained experience in programming language, i.e Java. <br />
                        In addition to my technical expertise, I am always eager to learn and stay updated with the latest industry trends. I enjoy working on challenging projects that push me to grow and expand my skill set. <br />
                        Feel free to explore my portfolio and get in touch if you'd like to collaborate or learn more about my work!
                        </p>
                        <a href={`${process.env.PUBLIC_URL}/CV.pdf`} download="CV.pdf"><button type="button" className="btn btn-warning fw-bold me-4 py-2">Download CV</button></a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AboutMe