import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const Team = () => {

  const TeamData = [
    {
      'name': 'Anand Nidgundi',
      'designation': 'Founder / CEO',
      'image': 'assets/img/team/team-1.jpg',
      'description' : 'I am an IT project expert with holistic knowledge of software development and design.',
      'social': [
        {
          'url': 'https://github.com/anandnidgundi',
          'icon': 'github'
        },
        {
          'url': 'https://www.youtube.com/channel/UChzNa-Z6QuGSX07bcEIFLfg',
          'icon': 'youtube'
        },
        {
          'url': 'https://www.instagram.com/anidgundi/',
          'icon': 'instagram'
        },
        {
          'url': 'https://www.linkedin.com/in/anand-anand-nidgundi-10/',
          'icon': 'linkedin'
        },
      ]
    },

    {
      'name': 'Suhas Nidgundi',
      'designation': 'IT Developer',
      'image': 'assets/img/team/team-4.jpg',
      'description' : 'My skills include PHP, Python, database design, JavaScript and MySQL.',
      'social': [
        {
          'url': 'https://twitter.com/SuhasNidgundi',
          'icon': 'twitter'
        },
        {
          'url': 'https://www.facebook.com/suhas.nidgundi.7',
          'icon': 'facebook'
        },
        {
          'url': 'https://www.instagram.com/suhasnidgundi/',
          'icon': 'instagram'
        },
        {
          'url': 'https://github.com/suhasnidgundi7',
          'icon': 'github'
        },
      ]
    },
  ]

  return (
    <>
      {/* <!-- ======= Team Section ======= --> */}
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Our Leadership</h2>
          </div>

          <div className="row">

            {
              TeamData.map((item, i) => {
                return (
                  <div className="col-lg-6" key={i}>
                    <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                      <div className="pic"><LazyLoadImage src={item.image} className="img-fluid" alt={item.designation} effect='blur' width='100%' height='100%' /></div>
                      <div className="member-info">
                        <h4>{item.name}</h4>
                        <span>{item.designation}</span>
                        <p>
                          {item.description}
                        </p>
                        <div className="social">
                          {
                            item.social && item.social.map((social, i) => {
                              return (
                                <div key={i}>
                                  <a href={social.url}><i className={`bi bi-${social.icon}`}></i></a>
                                </div>
                              )
                            })
                          }                          
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }


          </div>

        </div>
      </section>
      {/* <!-- End Team Section --> */}
    </>
  )
}
