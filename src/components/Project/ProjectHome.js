import React from 'react'

function ProjectHome() {
  return (
    <div>
        <div className='container-fluid py-5' id="Portfolio">
              <h1 className='text-center fs-1 fw-bold' id='league-spartan-font'>Projects</h1>
              <div className='row mt-4 d-flex justify-content-between'>
                  <div className='col-12 col-md-4 mb-4 mb-md-0'>
                      <div style={{ overflow: 'auto', position: 'relative', height: 'auto', maxHeight: '300px', borderRadius: '0px 20px 0px 20px', border: '1px solid #ced4da' }}>
                          <img src="images/CWH.png" alt="" className='img-fluid' style={{ width: '100%' }} />
                      </div>
                  </div>
                  <div className='col-12 col-md-4 mb-4 mb-md-0'>
                      <div style={{ overflow: 'auto', position: 'relative', height: 'auto', maxHeight: '300px', borderRadius: '0px 20px 0px 20px', border: '1px solid #ced4da' }}>
                          <img src="images/complaint.png" alt="" className='img-fluid' style={{ width: '100%' }} />
                      </div>
                  </div>
                  <div className='col-12 col-md-4'>
                      <div style={{ overflow: 'auto', position: 'relative', height: 'auto', maxHeight: '300px', borderRadius: '0px 20px 0px 20px', border: '1px solid #ced4da' }}>
                          <img src="images/Portfolio.png" alt="" className='img-fluid' style={{ width: '100%' }} />
                      </div>
                  </div>
              </div>
        </div>

    </div>
  )
}

export default ProjectHome