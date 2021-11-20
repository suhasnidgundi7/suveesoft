import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const Home = () => {

    return (
        <>
            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero" className="d-flex align-items-center">

                <div className="container-fluid" data-aos="fade-up">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>Power Your Brand With Us</h1>
                            <h2>This is your all-in-one platform for online success.</h2>
                            <div><a href="#about" className="btn-get-started scrollto">Learn More</a></div>
                        </div>
                        <div className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="150">
                            <LazyLoadImage src="assets/img/hero-img.png" className="img-fluid animated" alt="Information Technology" effect='blur' width="100%" height="100%" />
                        </div>
                    </div>
                </div>

            </section>
            {/* <!-- End Hero --> */}
        </>
    )
}
