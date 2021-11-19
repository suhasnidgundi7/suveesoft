import React from 'react'

const Footer = () => {
    return (
        <>
        
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>SUVEESOFT</h3>
                                <p>
                                    Pune, Maharashtra 411024 <br /><br />
                                    <strong>Email :</strong><a href="mailto:suhasnidgundi@suveesoft.in" style={{ color: '#fff' }}>&ensp; suhasnidgundi@suveesoft.in</a><br></br>
                                </p>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#hero">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#services">Services</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#portfolio">Portfolio</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#team">Team</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#services">Web Design</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#services">Web Development</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#services">Product Management</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#services">Marketing</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#services">App Development</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Our Newsletter</h4>
                                <form>
                                    <input type="email" required /><input type="submit" value="Subscribe"/>
                                </form>
                            </div>
                            
                        </div>

                        <div className="container">

                            <div className="copyright-wrap d-md-flex py-4">
                                <div className="me-md-auto text-center text-md-start">
                                <div className="copyright">
                                    &copy; Copyright <strong><span>Suveesoft</span></strong>. All Rights Reserved
                                </div>                                
                                </div>
                                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                                <a href="https://twitter.com/SuhasNidgundi" className="twitter"><i className="bx bxl-twitter"></i></a>
                                <a href="https://www.facebook.com/suhas.nidgundi.7" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="https://www.instagram.com/suhasnidgundi/" className="instagram"><i className="bx bxl-github"></i></a>                                
                                </div>
                            </div>

                            </div>
                    </div>
                </div>
            </footer>            

        </>
    )
}

export default Footer
