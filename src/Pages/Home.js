/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <header className="site-header">
        <div className="nav-bar">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                        <div className="site-branding d-flex align-items-center">
                           <a data-aos="fade-down" className="d-block" href="/" rel="home"><img className="d-block" src="https://res.cloudinary.com/lawfirm1000/image/upload/v1602714213/WebRec/logo_nrpb6t.png" alt="logo" /></a>
                        </div>

                        <nav className="site-navigation d-flex justify-content-end align-items-center">
                            <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center">
                                <li className="current-menu-item"><a href="/">Home</a></li>
                                <li><a href="/about">About us</a></li>
                                <li><a href="/login">Sign Up/In</a></li>
                                <li><a href="/contact">Contact</a></li>

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

        <div className="swiper-container hero-slider">
            <div className="swiper-wrapper">
                <div className="swiper-slide hero-content-wrap" style={{backgroundImage: "url('images/Face.jpg')"}}>
                    <div className="hero-content-overlay position-absolute w-100 h-100">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                                    <header className="entry-header">
                                        <h1 data-aos="fade-right">Digital  <br/>Health Records</h1>
                                    </header>

                                    <div className="entry-content mt-4">
                                        <p data-aos="fade-up">All your medical records in one place. Saving, retrieving, sorting and searching through health records has not been easier!</p>
                                    </div>

                                    <footer className="entry-footer d-flex flex-wrap align-items-center mt-4">
                                        <a data-aos="fade-up" href="#about" className="button gradient-bg">Read More</a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

        </div>
    </header>

    <div className="med-history" id="about">
        <div className="container">
            <div className="row align-items-end">
                <div className="col-12 col-lg-6">
                    <h2 data-aos="fade-up">What is MedRec?</h2>

                    <p data-aos="fade-up">MedRec is a digital solution to the health record system. It seeks to replace the traditional paper health records system by providing an easy way to save, sort, retrieve, and visualize record data in a simple yet secured interface. <br/> MedRec is constantly maintained by a group of health-tech enthusaists who are committed to improving it's quality and improving user experience.</p>

                    <a data-aos="fade-up" className="d-inline-block button gradient-bg" href="/about">Read More</a>
                </div>

                <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                    <img data-aos="fade-left" className="responsive" src="https://res.cloudinary.com/lawfirm1000/image/upload/v1602714209/WebRec/img7_z6n5da.jpg" alt=""/>
                </div>
            </div>
        </div>
    </div>


    <div className="med-history" id="about">
        <div className="container">
            <div className="row align-items-end">
                <div className="col-12 col-lg-6">
                    <h2 data-aos="fade-up">How Does It Work?</h2>

                    <p data-aos="fade-up">It all starts with registering your hospital. Once your healthcare center is registered with us, you as a healthcare provider can sign up as a user under your hospital to start saving up health records of patients you see in your hospital.
                      <br/> You can then sort through, search and see all your saved records whenever required. Moreso, with appropriate authorization, you could look up records of other patients saved under your hospital and even in the country!
                      <br/> What more? You can save up your record even while offline and it gets uploaded automatically when you have internet access! See your patients data statistics with our data visualizations and lots more!
                    </p>

                    <a data-aos="fade-up" className="d-inline-block button gradient-bg" href="/login">Sign Up</a>
                </div>

                <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                    <img data-aos="fade-right" className="responsive" src="https://res.cloudinary.com/lawfirm1000/image/upload/v1602714211/WebRec/img4_r5c21h.jpg" alt=""/>
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
    <Footer />
    </>
  )
}
export default Home;