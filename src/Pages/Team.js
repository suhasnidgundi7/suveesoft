import React from 'react'

export const Team = () => {
  return (
    <>
      {/* <!-- ======= Team Section ======= --> */}
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Our Leadership</h2>
          </div>

          <div className="row">

            <div className="col-lg-6">
              <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Anand Nidgundi</h4>
                  <span>Founder / CEO</span>
                  <p>I am an IT project expert with holistic knowledge of software
                    development and design. 
                  </p>
                  <div className="social">
                    <a href="https://github.com/anandnidgundi"><i className="bi bi-github"></i></a>
                    <a href="https://www.youtube.com/channel/UChzNa-Z6QuGSX07bcEIFLfg"><i className="bi bi-youtube"></i></a>
                    <a href="https://www.instagram.com/anidgundi/"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/anand-anand-nidgundi-10/"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
                <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Suhas Nidgundi</h4>
                  <span>IT Developer</span>
                  <p>My skills include PHP, Python, database design, JavaScript and MySQL.</p>
                  <div className="social">
                    <a href="https://twitter.com/SuhasNidgundi"><i className="bi bi-twitter"></i></a>
                    <a href="https://www.facebook.com/suhas.nidgundi.7"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/suhasnidgundi/"><i className="bi bi-instagram"></i></a>
                    <a href="https://github.com/suhasnidgundi7"><i className="bi bi-github"></i></a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* <!-- End Team Section --> */}
    </>
  )
}
