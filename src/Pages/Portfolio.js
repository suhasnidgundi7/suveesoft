import React from 'react'
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component'

export const Portfolio = () => {

    const PortfolioData = [
        {
            'ProjectName': 'Akkalkot Samarth News Media',
            'ProjectWebsite': 'https://akkalkotsamarth.in/',
            'ProjectImage': 'assets/img/portfolio/akkalkotsamarth_in.png',
            'ProjectAlt': 'News Media'
        },
        {
            'ProjectName': 'CTE SOCIETY COLLEGE OF EDUCATION ( B. Ed. )',
            'ProjectWebsite': 'https://ctesbed.in/',
            'ProjectImage': 'assets/img/portfolio/ctesbed_in.png',
            'ProjectAlt': 'Education Society'
        },
        {
            'ProjectName': 'HKDET Dental College Hospital and Research Institute',
            'ProjectWebsite': 'https://hkdetdentalcollege.in/',
            'ProjectImage': 'assets/img/portfolio/hkdetdentalcollege_in.png',
            'ProjectAlt': 'Hospital and Research Institute'
        },
        {
            'ProjectName': 'James Auto',
            'ProjectWebsite': 'https://jamesauto.in/',
            'ProjectImage': 'assets/img/portfolio/jamesauto_in.png',
            'ProjectAlt': 'Automobile'
        },
        {
            'ProjectName': 'Rajarajeshwari Ayurvedic Medical College and Hospital',
            'ProjectWebsite': 'https://rramc.org/',
            'ProjectImage': 'assets/img/portfolio/rramc_org.png',
            'ProjectAlt': 'Medical College and Hospital'
        },
        {
            'ProjectName': 'Bahubali Vidyapeeth - Bahubali Vidyapeeth',
            'ProjectWebsite': 'https://bahubali.org/',
            'ProjectImage': 'assets/img/portfolio/bahubali_org.png',
            'ProjectAlt': 'Vidyapeeth'
        },
    ]

    return (
        <>
            {/* <!-- ======= Portfolio Section ======= --> */}
            <section id="portfolio" className="portfolio">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>To enhancing the business growth of our customers with creative Design and Development to deliver market-defining high-quality solutions that create value and consistent competitive advantage for our clients around the world.</p>
                    </div>

                    <div className="row portfolio-container">

                        {
                            PortfolioData.map((item, i) => {
                                return (
                                    <div key={i}>
                                        <div className="col-lg-4 col-md-6 p-3 portfolio-item filter-card">
                                            <div className="portfolio-wrap">
                                                <LazyLoadComponent>
                                                    <LazyLoadImage src={item.ProjectImage} className="img-fluid" alt={item.ProjectAlt} width="100%" height="100%" />
                                                    <div className="portfolio-info">
                                                        <h4>{item.ProjectName}</h4>
                                                    </div>
                                                    <div className="portfolio-links">
                                                        <a href={item.ProjectWebsite} title="More Details"><i className="bx bx-link"></i></a>
                                                    </div>
                                                </LazyLoadComponent>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>

                </div>
            </section>
            {/* <!-- End Portfolio Section -->                */}

        </>
    )
}
