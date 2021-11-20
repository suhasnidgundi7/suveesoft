import React from 'react'
import { Features } from '../Components/Features'

export const Services = () => {

    const ServiceData = [
        {
            "data": 'Attractive Design',
            'logo': 'eye-fill',
            'description': '',
        },
        {
            "data": 'Responsive',
            'logo': 'laptop-fill',
            'description': '',
        },
        {
            "data": 'SEO Optimization',
            'logo': 'bar-chart-fill',
            'description': '',
        },
        {
            "data": 'Faster',
            'logo': 'hdd-stack-fill',
            'description': '',
        },
    ]

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
                        {
                            ServiceData.map((item, i) => {
                                return (
                                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch justify-content-center" data-aos="zoom-in" data-aos-delay="100" key={i}>
                                        <div className="icon-box align-self-center text-center">
                                            <div className="icon"><i className={`bi bi-${item.logo}`}></i></div>
                                            <h4>{item.data}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </section>
            {/* <!-- End Services Section --> */}

            <Features />

        </>
    )
}
