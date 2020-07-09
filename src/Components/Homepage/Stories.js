import React from 'react';
import { Link } from "react-router-dom";
import "jquery";
import "owl.carousel";

export default class Stories extends React.Component {
  componentDidMount(){
            /* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
!(function($) {
  // Testimonials carousel (uses the Owl Carousel library)
    $(document).ready(function() {
    $(".testimonials-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      animateOut: "rollOut",
      animateIn: "rollIn",
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        900: {
          items: 2
        }
      }
    });
    });
  })(jQuery);

  }
  render() {
    return (
        <div>
            <section id="testimonials" className="testimonials section-bg">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>SCM STORIES</h2>
        <p>Testimonies from our senior friends!</p>
      </div>

      <div className="owl-carousel testimonials-carousel" data-aos="fade-up-right" data-aos-delay="100">

        <div className="testimonial-wrap">
          <div className="testimonial-item">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830269/adebayo-kolade_alhukh.jpg" className="testimonial-img" alt=""/>
            <h3>Dr. Adebayo Kolade</h3>
            <h4>Ibadan, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              When I joined SCM on Thursday Jan 18 (or 25, not sure) 1990, I did not even know I was joining a fellowship. I was a rather smallish boy from downtown who arrived late to resume. There was no money, so I did not...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#adebayo-kolade"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap">
          <div className="testimonial-item">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830274/adedimeji-aderonke_tx6v8n.jpg" className="testimonial-img" alt=""/>
            <h3>Adedimeji Aderonke</h3>
            <h4>Connecticut, US</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              While at GCI/QSI, the spiritu santus nature of some of my female Christian classmates used to put me off. They were never smiling, so I did not want anything to do with them. In June, just before my UI  admission...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#adedimeji-aderonke"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap">
          <div className="testimonial-item">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830269/lanipekun-lawal_wnqb7v.jpg" className="testimonial-img" alt=""/>
            <h3>Pastor Lanipekun Lawal</h3>
            <h4>Lagos, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              I used to be known and addresed as Lawal Lanipekun-Reeves until I got married an my wife and I took the decision to drop all our non-African names and now my names are Adojutelegan Majiya Lanipekun-Lawal. My first encounter...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#lanipekun-lawal"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap">
          <div className="testimonial-item">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830273/Oridupa_bnl5hb.jpg" className="testimonial-img" alt="Oridupa"/>
            <h3>Dr. Yinka Oridupa</h3>
            <h4>Ibadan, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              I was admitted to UI in 1997 to study Vet Medicine, so I had in mind to study hard and enjoy myself being my first time away from home. I come from a solid bible-believing background under the tutelage of an IVCU alumnus and...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#yinka-oridupa"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap">
          <div className="testimonial-item">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830269/kuforiji_sgv5be.jpg" className="testimonial-img" alt=""/>
            <h3>Dr. Kuforiji Gbenga</h3>
            <h4>Lagos, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              I gained admission to UI to study Veterinary Medicine in the year 1990. I came from a church background which encouraged me to join a Bible believing fellowship as soon as I got to school. I stayed in independence hall room A1 in my...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#gbenga-kuforiji"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>
      </div>
      <div className="see-more">
      <Link to="/stories" target="_top"><button className="btn btn-primary">See More<i className="icofont-arrow-right"></i></button></Link>
        </div>
    </div>
  </section>
        </div>
    )
}
}