import React from 'react'
import Footer from './Footer'

const Contact = () => {
    return (
        <>
    <div className="single-page">
    <header className="site-header">
        <div className="nav-bar">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                        <div className="site-branding d-flex align-items-center">
                            <a data-aos="fade-up" className="d-block" href="/" rel="home"><img className="d-block" src="images/logo.png" alt="logo"/></a>
                        </div>

                        <nav className="site-navigation d-flex justify-content-end align-items-center">
                            <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center">
                            <li><a href="/">Home</a></li>
                                <li><a href="/about">About us</a></li>
                                <li><a href="/login">Sign Up/In</a></li>
                                <li className="current-menu-item"><a href="/contact">Contact</a></li>

                                <li className="call-btn button gradient-bg mt-3 mt-md-0">
                                    <a className="d-flex justify-content-center align-items-center" href="tel:=2348160983729"><img src="images/emergency-call.png" alt=""/> Call us!</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="hamburger-menu d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 data-aos="fade-left">Contact</h1>

                    <div data-aos="fade-down" data-aos-delay="200" className="breadcrumbs">
                        <ul className="d-flex flex-wrap align-items-center p-0 m-0">
                            <li><a href="/">Home</a></li>
                            <li>Contact</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <img data-aos="fade-left" className="header-img" src="https://res.cloudinary.com/lawfirm1000/image/upload/v1602714209/WebRec/contact-bg_ehfdg2.png" alt=""/>
    </header>


    <div className="contact-form">
        <div className="container">
            <div data-aos="fade-up" className="row">
                <div className="col-12">
                    <h2>Get in Touch</h2>
                </div>

                <div className="col-12  col-md-4">
                    <input type="text" placeholder="Name"/>
                </div>

                <div className="col-12 col-md-4">
                    <input type="email" placeholder="E-mail"/>
                </div>

                <div className="col-12 col-md-4">
                    <input type="text" placeholder="Subject"/>
                </div>

                <div className="col-12">
                    <textarea name="name" rows="12" cols="80" placeholder="Message"></textarea>
                </div>

                <div className="col-12">
                    <input type="submit" name="" value="Send Message" className="button gradient-bg"/>
                </div>
            </div>
        </div>
    </div>

    <div data-aos="fade-up" className="subscribe-banner">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-8 offset-lg-2">
                    <h2>Subscribe to our newsletter</h2>

                    <form>
                        <input type="email" placeholder="E-mail address"/>
                        <input className="button gradient-bg" type="submit" value="Subscribe"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    <Footer />
    </>
    )
}
export default Contact;