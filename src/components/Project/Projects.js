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
                    <h3>Hello</h3>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. In adipisci sapiente explicabo? Quisquam ut, omnis nesciunt id possimus eius natus ullam eum facere delectus voluptas autem ducimus! Sapiente, quasi corrupti!</h5>
                    <a href="https://patilyashsachin.github.io/CodingMania/" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn text-light fw-bold px-4" style={{ backgroundColor: '#7755ff' }}>
                        Visit
                        </button>
                    </a>
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
                    <h3>Hello</h3>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, odio? Saepe, nostrum, esse nulla aliquam repellendus numquam reprehenderit molestias optio iusto suscipit veniam illum quibusdam unde natus. Laboriosam officiis delectus similique natus explicabo consectetur illo aliquid inventore temporibus sint deserunt consequuntur modi a sunt minima, odio, quidem molestias facere enim.</h5>
                    <button type="button" class="btn text-light fw-bold px-4" style={{backgroundColor:'#7755ff'}}>Visit</button>
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
                    <h3>Hello</h3>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illum veritatis ipsam delectus libero dolores obcaecati corrupti harum similique consequuntur qui, ducimus sit atque reiciendis maxime sequi ab, iure est eos quasi cumque? Fugit sed iste labore necessitatibus laudantium veritatis! Voluptates laborum incidunt nobis porro facere aperiam, perferendis quod molestias dolor ratione qui eveniet suscipit ducimus nisi molestiae facilis inventore!</h5>
                    <button type="button" class="btn text-light fw-bold px-4" style={{backgroundColor:'#7755ff'}}>Visit</button>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Projects;