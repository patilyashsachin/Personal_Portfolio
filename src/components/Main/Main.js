import React from 'react'
import Navbar from '../Navbar/Navbar.js';
import Hero from '../Hero/Hero.js'
import AboutMe from '../AboutMe/AboutMe.js';
import Certification from '../Certification.js/Certification.js';
import ProjectHome from '../Project/ProjectHome.js';
import Footer from '../Footer/Footer.js'
import Skills from '../Skill/Skills.js';

function Main() {
  return (
    <div>
        <div className='sticky-top'>
            <Navbar/>
        </div>
        <div>
            <Hero/>
        </div>
        <div>
            <AboutMe/>
        </div>
        <div>
            <Skills/>
        </div>
        <div>
            <Certification/>
        </div>
        <div>
            <ProjectHome/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Main