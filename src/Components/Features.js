import React from 'react'

export const Features = () => {
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
                            <div className="icon-box mt-5" data-aos="fade-up" data-aos-delay="200">
                                <i className="bi bi-phone-fill"></i>
                                <h4>Android / IOS</h4>
                                <p>Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones</p>
                            </div>
                            <div className="icon-box mt-5" data-aos="fade-up" data-aos-delay="300">
                                <i className="bi bi-code-slash"></i>
                                <h4>PHP / Python / React JS</h4>
                                <p>Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.</p>
                            </div>
                            <div className="icon-box mt-5" data-aos="fade-up" data-aos-delay="400">
                                <i className="bi bi-window"></i>
                                <h4>Landing Page Development</h4>
                                <p>Landing pages always have two crystal-clear objectives: to promote a specific product or service and to influence as many visitors as possible to become leads.</p>
                            </div>
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
