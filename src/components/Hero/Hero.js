import React from 'react'
import {Link} from 'react-router-dom'

function Hero() {
  return (
    <div>
      <div className="container text-center">
      <h1 className="fw-bolder" style={{ marginTop: '30px' }}>I'M&nbsp;<span className="rounded-pill d-inline-block" style={{ backgroundColor: '#7755ff', padding: '0.5em 1em', color: 'white' }}>Yash Sachin Patil</span></h1>
      <h2 className='mt-4 fw-bold fs-2' id='league-spartan-font'>Full Stack & Java Developer</h2>
      <div className='mt-4'>
        <Link to='/Contact'><button type="button" className="btn btn-warning fw-bold me-4 px-4">Contact Me</button></Link>
        <Link to='/Projects'><button type="button" className="btn btn-light fw-bold btn-outline-secondary px-4">Projects</button></Link>
      </div>
      <div className="container mb-5">
      <div className="row" style={{display:'flex'}}>
        <div className="col-12 col-lg-4 mt-4" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <h4 className='fw-bolder fs-3 rounded-pill p-3 me-5' style={{background: 'rgb(119,85,255)',
            background: 'linear-gradient(90deg, rgba(119,85,255,0.510329131652661) 42%, rgba(119,85,255,0.12377450980392157) 79%)'}}>BE in Information Technology</h4>
        </div>
        <div className="col-12 col-lg-4">
          <img src="https://banpuenfestival.com/wp-content/uploads/2021/09/5.jpg" alt="" className='mt-4' style={{height:'55vh', width:'100%'}}/>
        </div>
        <div className="col-12 col-lg-4 mt-4" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <h4 className='fw-bolder fs-3 rounded-pill p-3' style={{background: 'rgb(119,85,255)',
            background: 'linear-gradient(90deg, rgba(119,85,255,0.510329131652661) 42%, rgba(119,85,255,0.12377450980392157) 79%)'}}>Enthusiastic Developer</h4>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Hero