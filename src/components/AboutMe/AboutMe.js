
import React from 'react'

function AboutMe() {
  return (
    <div>
        <div className="container-fluid" id='AboutMe' style={{backgroundColor:'#0a0715'}}>
            <div className="container py-5">
                    <div className="mt-3 px-5">
                        <h1 className='text-warning'>About Me</h1>
                        <p className='text-light fw-light fs-5 mt-3'>Hello! I'm Yash, a recent Bachelor of Engineering graduate in Information Technology, with a strong passion for web development and hands-on experience in fullstack development using the MERN stack (MongoDB, Express.js, React, Node.js).
                        In addition to my web development skills, I have a solid foundation in Java programming, which has strengthened my problem-solving abilities and understanding of core programming concepts. Through academic projects and personal work, I've built and deployed complete web applications, continuously exploring new tools and best practices.
                        I’m driven by curiosity, eager to keep learning, and motivated to contribute to impactful tech solutions. <br />
                        </p>
                        <a href={`${process.env.PUBLIC_URL}/Yash_Patil_Resume.pdf`} target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn btn-warning fw-bold me-4 mt-3 py-2">Resume</button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default AboutMe