import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactHome() {
  const form = useRef();
  const [emailStatus, setEmailStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fvo54zp', 'template_bhrjx8n', form.current, 'fm2AKiPr-uOmvpNqb')
      .then(
        () => {
          console.log('SUCCESS!');
          setEmailStatus('success');
          setTimeout(() => {
            window.location.reload();
          }, 1000); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          setEmailStatus('failure');
        },
      );
  };

  return (
    <div style={{ backgroundColor: '#0a0715'}} className='py-4'>
      <div className="container">
        <h1 className="text-center text-light fw-bold">Contact Me</h1>
        {emailStatus === 'success' && (
          <div className="alert alert-success" role="alert">
            Your message has been sent successfully!
          </div>
        )}
        {emailStatus === 'failure' && (
          <div className="alert alert-danger" role="alert">
            There was an error sending your message. Please try again.
          </div>
        )}
        <form ref={form} onSubmit={sendEmail}>
          <div className="row justify-content-center text-light">
            <div className="col-10 col-md-7">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" name="name" id="exampleFormControlInput1" placeholder="Full Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Your Email</label>
                <input type="email" className="form-control" name="email" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Subject</label>
                <input type="text" className="form-control" name="Subject" id="exampleFormControlInput1" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" placeholder='Enter your message...' name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" className="btn text-light fw-bold px-3" style={{ backgroundColor: '#7755ff' }}>Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactHome;
