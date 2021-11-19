import React, { useState } from 'react'

const Header = () => {

    const [navbar, setNavbar] = useState('navbar')
    const [toggle, setToggle] = useState('list')

    const ShowNavbar = () => {
        if (navbar === 'navbar' & toggle === 'list') {            
            setNavbar('navbar-mobile')
            setToggle('x')
        } else {
            setNavbar('navbar')
            setToggle('list')
        }
    }

    return (
        <>
            {/* <!-- ======= Header ======= --> */}
            <header id="header" className="fixed-top justify-content-center" style={{background: 'linear-gradient(45deg, rgba(86, 58, 250, 0.9) 0%, rgba(116, 15, 214, 0.9) 100%)'}}>
                <div className="container d-flex align-items-center justify-content-between">
                    <h1 className="logo" style={{fontWeight: '400', color: '#fff'}}>SUVEESOFT</h1>
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    {/* <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

                    <nav id="navbar" className={`${navbar}`}>
                        <ul>
                            <li onClick={() => {setNavbar('navbar'); setToggle('list')}}><a className="nav-link scrollto" href="#hero">Home</a></li>
                            <li onClick={() => {setNavbar('navbar'); setToggle('list')}}><a className="nav-link scrollto" href="#about">About</a></li>
                            <li onClick={() => {setNavbar('navbar'); setToggle('list')}}><a className="nav-link scrollto" href="#services">Services</a></li>
                            <li onClick={() => {setNavbar('navbar'); setToggle('list')}}><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                            <li onClick={() => {setNavbar('navbar'); setToggle('list')}}><a className="nav-link scrollto" href="#team">Team</a></li>
                            <li onClick={() => {setNavbar('navbar'); setToggle('list')}}><a className="nav-link getstarted scrollto" href="#contact">Contact Us</a></li>
                        </ul>                        
                        <i className={`bi bi-${toggle} mobile-nav-toggle`} onClick={() => ShowNavbar()}></i>
                    </nav>
                    {/* <!-- .navbar --> */}

                </div>
            </header>
            {/* <!-- End Header --> */}
        </>
    )
}

export default Header
