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
    $(".about-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        900: {
          items: 1
        }
      }
    });
    });

    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1
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
            <img src="assets/img/testimonials/adebayo-kolade.jpeg" className="testimonial-img" alt=""/>
            <h3>Dr. Adebayo Kolade</h3>
            <h4>Ibadan, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              When I joined SCM on Thursday Jan 18 (or 25, not sure) 1990, I did not even know I was joining a fellowship. I was a rather smallish boy from downtown who arrived late to resume. There was no money, so I did not...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <a href="https://www.scmui.org/2018/11/02/my-scmui-story-by-adebayo-kolade-part-1/"><i className="icofont-arrow-right"></i> Read More</a>
          </div>
        </div>

        <div className="testimonial-wrap">
          <div className="testimonial-item">
            <img src="assets/img/testimonials/adedimeji-aderonke.jpeg" className="testimonial-img" alt=""/>
            <h3>Adedimeji Aderonke</h3>
            <h4>Tusla, US</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              While at GCI/QSI, the spiritu santus nature of some of my female Christian classmates used to put me off. They were never smiling, so I did not want anything to do with them. In June, just before my UI  admission...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <a href="https://www.scmui.org/2018/11/10/my-scmui-story-by-aderonke-adedimeji/"><i className="icofont-arrow-right"></i> Read More</a>
          </div>
        </div>

        <div className="testimonial-wrap">
          <div className="testimonial-item">
            <img src="assets/img/testimonials/lanipekun-lawal.jpeg" className="testimonial-img" alt=""/>
            <h3>Pastor Lanipekun Lawal</h3>
            <h4>Lagos, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              I used to be known and addresed as Lawal Lanipekun-Reeves until I got married an my wife and I took the decision to drop all our non-African names and now my names are Adojutelegan Majiya Lanipekun-Lawal. My first encounter...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <a href="https://www.scmui.org/2018/10/29/my-scmui-story-by-pastor-lanipekun-lawal/"><i className="icofont-arrow-right"></i> Read More</a>
          </div>
        </div>

        <div className="testimonial-wrap">
          <div className="testimonial-item">
            <img src="assets/img/testimonials/Oridupa.jpeg" className="testimonial-img" alt=""/>
            <h3>Dr. Yinka Oridupa</h3>
            <h4>Ibadan, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              I was admitted to UI in 1997 to study Vet Medicine, so I had in mind to study hard and enjoy myself being my first time away from home. I come from a solid bible-believing background under the tutelage of an IVCU alumnus and...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <a href="https://www.scmui.org/2018/11/10/my-scmui-story-by-dr-yinka-oridupa-nee-tomori/"><i className="icofont-arrow-right"></i> Read More</a>
          </div>
        </div>

        <div className="testimonial-wrap">
          <div className="testimonial-item">
            <img src="assets/img/testimonials/kuforiji.jpeg" className="testimonial-img" alt=""/>
            <h3>Dr. Kuforiji Gbenga</h3>
            <h4>Lagos, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              I gained admission to UI to study Veterinary Medicine in the year 1990. I came from a church background which encouraged me to join a Bible believing fellowship as soon as I got to school. I stayed in independence hall room A1 in my...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <a href="https://www.scmui.org/2018/11/10/my-scmui-story-by-dr-kuforiji-gbenga/"><i className="icofont-arrow-right"></i> Read More</a>
          </div>
        </div>
      </div>
      <div className="see-more">
          <button className="btn btn-primary"><Link to="/stories">See More<i className="icofont-arrow-right"></i></Link></button>
        </div>
    </div>
  </section>
        </div>
    )
}
}