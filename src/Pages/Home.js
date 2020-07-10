/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import "../App.css";
import Header from "../Components/Homepage/Header";
import About from "../Components/Homepage/About";
import Partners from "../Components/Homepage/Partners";
import Counts from "../Components/Homepage/Counts";
import Services from "../Components/Homepage/Services";
import Blog from "../Components/Homepage/Blog";
import Stories from "../Components/Homepage/Stories";
import Gallery from "../Components/Homepage/Gallery";
import Team from "../Components/Homepage/Team";
import Contact from "../Components/Homepage/Contact";
import Footer from "../Components/Homepage/Footer";

 class Home extends React.Component {
  render() {
    return (
  <Fragment>
      <Header />
      <section id="hero" className="d-flex align-items-center">
        <div className="container container-md" data-aos="zoom-out-down" data-aos-delay="100">
          <div className="animated order-2 order-lg-1 d-flex flex-column justify-content-center hero-img"
            style={{backgroundImage: 'url("https://res.cloudinary.com/lawfirm1000/image/upload/v1593830205/chris-edited_t6x81f.png")'}}>
            <h1 data-aos="fade-up"><span>SCM UI</span><br/>the abode of His presence!</h1>
            <div data-aos="fade-up" offset="0" data-aos-delay="800">
              <a href="#contact" className="btn-get-started scrollto">Join Us!</a>
            </div>
          </div>
        </div>
      </section>

    <main id="main">
      <About />
      <Partners />
      <Counts />
      <Services />
      <Blog />
      <Stories />
      <Gallery />
      <Team />
      <Contact />
    </main>
    <Footer />
  </Fragment>
    )
  }
}

export default Home;