import emailjs from 'emailjs-com'
import React from 'react'

export const Contact = () => {

  function sendEmail(e) {
    
    var form = document.getElementById('ContactForm')

    e.preventDefault()
    
    emailjs.sendForm(
      'service_if5k0dh',
      'template_jl0xi69',
      e.target,
      'user_y0weAW0lGQItxeQe1BwpK',
      ).then(res => {
        alert("Your Form has Been Submitted SuccessFully")        
        form.reset()
    }).catch(err => alert("| ERROR | PLEASE TRY AGAIN | : ", err))
  }

  return (
    <>
      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className="contact section-bg">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Contact</h2>
            <p>We are available 24/7 by e-mail and phone. <br /> You can also ask a question about our services through our contact form that we regularly provide.</p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="info-box mb-4">
                <i className="bx bx-map"></i>
                <h3>Our Address</h3>
                <p>Pune, Maharashtra</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-envelope"></i>
                <h3>Email Us</h3>
                <p>info@suveesoft.in</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p>+91-8767087357</p>
              </div>
            </div>

          </div>

          <div className="row">
            {/* "border:0; width: 100%; height: 384px;" */}
            <div className="col-lg-6 ">
              <iframe className="mb-4 mb-lg-0"
                title="Suveesoft"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.92836616855!2d73.79292731109823!3d18.52476632577747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1637126810542!5m2!1sen!2sin"
                frameBorder="0" style={{ border: 0, width: '100%', height: 384, }} allowFullScreen></iframe>
            </div>

            <div className="col-lg-6">
              <form onSubmit={sendEmail} className="php-email-form" id="ContactForm">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>

          </div>

        </div>
      </section>
      {/* <!-- End Contact Section -->             */}
    </>
  )
}
