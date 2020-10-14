/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Footer from './Footer';

const About = () => {
    return (
        <>
    <div className="single-page">
    <header className="site-header">
        <div className="nav-bar">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                        <div className="site-branding d-flex align-items-center">
                            <a className="d-block" href="/" rel="home"><img className="d-block" src="images/logo.png" alt="logo"/></a>
                        </div>

                        <nav className="site-navigation d-flex justify-content-end align-items-center">
                            <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center">
                                <li><a href="/">Home</a></li>
                                <li className="current-menu-item"><a href="/about">About us</a></li>
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

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>About us</h1>

                    <div className="breadcrumbs">
                        <ul className="d-flex flex-wrap align-items-center p-0 m-0">
                            <li><a href="/">Home</a></li>
                            <li>About Us</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <img className="header-img" src="images/about-bg.png" alt=""/>
    </header>

    <div className="med-history">
        <div className="container">
            <div className="row align-items-end">
                <div className="col-12 col-lg-6">
                    <h2>What is MedRec?</h2>
                    <p>MedRec is a digital solution to the health record system. It seeks to replace the traditional paper health records system by providing an easy way to save, sort, retrieve, and visualize record data in a simple yet secured interface. <br/> MedRec is constantly maintained by a group of health-tech enthusaists who are committed to improving it's quality and improving user experience.</p>
                    <p>It all starts with registering your hospital. Once your healthcare center is registered with us, you as a healthcare provider can sign up as a user under your hospital to start saving up health records of patients you see in your hospital.
                      <br/> You can then sort through, search and see all your saved records whenever required. Moreso, with appropriate authorization, you could look up records of other patients saved under your hospital and even in the country!
                      <br/> What more? You can save up your record even while offline and it gets uploaded automatically when you have internet access! See your patients data statistics with our data visualizations and lots more!
                    </p>

                </div>

                <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                    <img className="responsive" src="images/medrec/img8.jpeg" alt=""/>
                </div>
            </div>
        </div>
    </div>

    <div className="med-history">
        <div className="container">
            <div className="row align-items-end">
                <div className="col-12 col-lg-6">
                    <h2>Why use MedRec?</h2>
                    <p>
                        <ul>
                            <li><strong>Easy, Fast, Reliable:</strong> Your patients don't have to wait the whole day for their case notes before seeing you anymore. With one click, all their saved records come up in seconds, no matter how far into the past!</li>
                            <li><strong>Statistics, data analysis and Visualizations:</strong> With MedRec, computing health statistics has not been easier. With appropriate access, you can know how many people under 5 years old have malaria in Nigeria, Lagos state or any location at all!</li>
                            <li><strong>Emergency</strong></li>
                            <li><strong></strong></li>
                            <li><strong>Vertical integration across levels of healthcare provision:</strong> MedRec seeks to solve the disjoint between primary, secondary and tertiary healthcare providers, making health records of patients available from wherever they've been managed prior to index presentation.</li>
                        </ul>
                    </p>

                </div>

                <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                    <img className="responsive" src="images/medrec/img5.jpeg" alt=""/>
                </div>
            </div>
        </div>
    </div>

    <div className="faq-stuff" id="faq">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>FAQs</h2>
                </div>

                <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                    <div className="accordion-wrap type-accordion">
                        <h3 className="entry-title d-flex justify-content-between align-items-center">How safe is this? Can I see my medical records on social media tomorrow?<span className="arrow-r"></span></h3>

                        <div className="entry-content">
                            <p>MedRec is built with security as one of the top priorities. Our authentication/authorization system blocks out any user from accessing your records without your consent: a security token. Your patients likewise, cannot access these records unless you authorize.</p>
                        </div>

                        <h3 className="entry-title d-flex justify-content-between align-items-center">What type of patient records can be saved on MedRec?<span className="arrow-r"></span></h3>

                        <div className="entry-content">
                            <p>All types, records can include very minute details you'd like to save up for future references, including history, examination findings, investigation results, diagnosis, follow-up visits or referral. Pictures of investigations can be saved up as well.</p>
                        </div>

                        <h3 className="entry-title d-flex justify-content-between align-items-center">Is there a limit to the amount of records I can save up?<span className="arrow-r"></span></h3>

                        <div className="entry-content">
                            <p>It's basically 2 divided by 0. As long as your hospital is suscribed to MedRec, you have unlimited storage space. Our system is highly scalable and can expand to meet any demand, however large.</p>
                        </div>

                        <h3 className="entry-title d-flex justify-content-between align-items-center">What if the system crashes? Do I lose all my records?<span className="arrow-r"></span></h3>

                        <div className="entry-content">
                            <p>MedRec is designed to be fault-tolerant. Your records are backed-up in up to 3 independent storage facilities in different locations. If (when) our system fails, we can alwaays retrieve your records!</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="professional-box">
                                <h2 className="d-flex align-items-center">Professional</h2>

                                <img src="images/cardiogram-2.png" alt=""/>

                                <p>Keep your hospital clean of papers; keep your records digitally.</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="quality-box">
                                <h2 className="d-flex align-items-center">Quality</h2>

                                <img src="images/hospital.png" alt=""/>

                                <p>Experience quality client-focused service by MedRec team to take you through any tecnicalities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="medical-team">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center">Meet The MedRec Team</h2>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <div className="medical-team-wrap">
                        <img src="images/medrec/team6.png" alt=""/>

                        <h4>Femi Lawal</h4>
                        <h5>Team Lead</h5>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                    <div className="medical-team-wrap">
                        <img src="images/medrec/team3.jpeg" alt=""/>

                        <h4>Wachukwu Emmanuel</h4>
                        <h5>Lead, Cloud team</h5>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                    <div className="medical-team-wrap">
                        <img src="images/team-3.jpg" alt=""/>

                        <h4>Hoosain Said Adam</h4>
                        <h5>Backend team</h5>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                    <div className="medical-team-wrap">
                        <img src="images/medrec/team5.jpeg" alt=""/>

                        <h4>Chiamaka Umeh</h4>
                        <h5>Frontend team</h5>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                    <div className="medical-team-wrap">
                        <img src="images/team-3.jpg" alt=""/>

                        <h4>Hussein AbdulQohar</h4>
                        <h5>Frontend team</h5>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                    <div className="medical-team-wrap">
                        <img src="images/medrec/team1.jpeg" alt=""/>

                        <h4>Onuka Kalu</h4>
                        <h5>Frontend team</h5>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                    <div className="medical-team-wrap">
                        <img src="images/team-3.jpg" alt=""/>

                        <h4>Smog Olufolahan</h4>
                        <h5>Frontend team</h5>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                    <div className="medical-team-wrap">
                        <img src="images/medrec/team4.jpeg" alt=""/>

                        <h4>Nwosu Uche</h4>
                        <h5>Backend team</h5>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                    <div className="medical-team-wrap">
                        <img src="images/team-3.jpg" alt=""/>

                        <h4>Salako Ayomide</h4>
                        <h5>Cloud team</h5>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                    <div className="medical-team-wrap">
                        <img src="images/medrec/team2.jpeg" alt=""/>

                        <h4>Okeke Chinua</h4>
                        <h5>Cloud team</h5>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div className="subscribe-banner">
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
export default About;