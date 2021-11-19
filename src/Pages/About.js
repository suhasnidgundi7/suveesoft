import React from 'react'
import { Counts } from '../Components/Counts'

export const About = () => {
    return (
        <>
            {/* <!-- ======= About Section ======= --> */}
            <section id="about" className="about">
                <div className="container">

                    <div className="row">
                    <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="150">
                        <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                        <h3>Suveesoft combines passion and innovation to bring real value to customers’ business.</h3>
                        <p className="fst-italic">
                        We can provide you an exact cost to create a responsive web designing or a website development or an E-commerce Website once you have presented us with your details and business requirements. 
                        </p>
                        <ul>
                        <li><i className="bi bi-check-circle"></i> To design an effective quality layouts in responsive websites.</li>
                        <li><i className="bi bi-check-circle"></i> To design personalized website features.</li>
                        <li><i className="bi bi-check-circle"></i> To develop exclusive presentations or slide shows and social networking integration.</li>
                        </ul>                        
                    </div>
                    </div>

                </div>
            </section>
            {/* <!-- End About Section -->             */}

            <Counts/>

        </>
    )
}
