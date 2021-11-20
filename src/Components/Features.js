import React from 'react'

export const Features = () => {

    const FeatureData = [
        {
            'data': 'Android / IOS',
            'icon': 'phone-fill',
            'description': 'Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones'
        },
        {
            'data': 'PHP / Python / React JS',
            'icon': 'code-slash',
            'description': 'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.'
        },
        {
            'data': 'Landing Page Development',
            'icon': 'window',
            'description': 'Landing pages always have two crystal-clear objectives: to promote a specific product or service and to influence as many visitors as possible to become leads.'
        },
    ]

    return (
        <>
            {/* <!-- ======= Features Section ======= --> */}
            <section id="features" className="features">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Features</h2>
                        {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                            in iste officiis commodi quidem hic quas.</p> */}
                    </div>

                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-lg-center">
                            {
                                FeatureData.map((item, i) => {
                                    return (
                                        <div className="icon-box mt-5" data-aos="fade-up" data-aos-delay="200" key={i}>
                                            <i className={`bi bi-${item.icon}`}></i>
                                            <h4>{item.data}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="image col-lg-6 order-1 order-lg-2 " data-aos="zoom-in" data-aos-delay="100">
                            <img src="assets/img/features.svg" alt="" className="img-fluid" />
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End Features Section --> */}
        </>
    )
}
