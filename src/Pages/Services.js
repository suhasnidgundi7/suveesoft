import React from 'react'
import { Features } from '../Components/Features'

export const Services = () => {
    return (
        <>
            {/* <!-- ======= Services Section ======= --> */}
            <section id="services" className="services section-bg" >
                <div className="container" data-aos="fade-up" >

                    <div className="section-title">
                        <h2>Services</h2>
                        {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box align-self-center">
                                <div className="icon"><i className="bi bi-eye-fill"></i></div>
                                <h3>Attractive Design</h3>
                                {/* <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p> */}
                            </div>
                        </div>                        
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box align-self-center">
                                <div className="icon"><i className="bi bi-eye-fill"></i></div>
                                <h3>Responsive</h3>
                                {/* <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p> */}
                            </div>
                        </div>                        
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box align-self-center">
                                <div className="icon"><i className="bi bi-eye-fill"></i></div>
                                <h3>SEO Optimization</h3>
                                {/* <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p> */}
                            </div>
                        </div>                        
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box align-self-center">
                                <div className="icon"><i className="bi bi-eye-fill"></i></div>
                                <h3>Faster</h3>
                                {/* <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p> */}
                            </div>
                        </div>                        
                    </div>

                </div>
            </section>
            {/* <!-- End Services Section --> */}

            <Features />
        </>
    )
}
