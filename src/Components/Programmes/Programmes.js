import React, { Component } from 'react'

import "jquery";
import "owl.carousel";

export default class Programmes extends Component {
  componentDidMount(){
            /* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
!(function($) {
  // Testimonials carousel (uses the Owl Carousel library)
    $(document).ready(function() {
    $(".havilla-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      animateOut: "rollOut",
      animateIn: "zoomInDown",
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

    $(".evang-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      animateOut: "fadeOutDownBig",
      animateIn: "tada",
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

    $(".retreat-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      animateIn: "flipInY",
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

    $(".converge-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      animateOut: "fadeOutDownBig",
      animateIn: "swing",
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
            <section id="services" className="services">
                <div className="container">

                    <div className="section-title" data-aos="fade-up">
                      <h2 style={{paddingTop: "2rem"}}>Weekly Services</h2>
                      <p>Our regular weekly meetings include:</p>
                    </div>

                    <div className="row">
                      <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                          <div className="icon"><i className="bx bxs-happy-alt bx-tada"></i></div>
                          <h4 className="title">Sunday Service</h4>
                          <p className="description">Sunday Worship Service holds by 7:00PM - 9:00PM at Chapel Sanctuary, Chapel of the Resurrection, University of Ibadan
                          </p>
                      </div>
                      </div>

                      <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                          <div className="icon"><i className="bx bxs-bible bx-burst"></i></div>
                          <h4 className="title">Thursday, Bible Study</h4>
                          <p className="description"> Bible study on Thursdays holds by 7:00PM - 9:00PM at Chapel Sanctuary, Chapel of the Resurrection, University of Ibadan
                          </p>
                          </div>
                        </div>

                      <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                          <div className="icon"><i className="bx bxs-bell-ring bx-tada"></i></div>
                          <h4 className="title">Friday, Prayer Meeting</h4>
                          <p className="description"> Prayer Meeting holds on Fridays by 6:00PM - 8:00PM at Chapel Tarmac, Chapel of the Resurrection, University of Ibadan
                          </p>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                          <div className="icon"><i class="icofont-users-social"></i></div>
                          <h4 className="title">Friday, School Visitation</h4>
                          <p className="description"> School Visitation holds on Fridays from 11:00AM to 1:00PM from Chapel tarmac to various secondary schools in Ibadan.
                          </p>
                        </div>
                      </div>
                    </div>

                  <div className="section-title" data-aos="fade-up">
                      <h2>Monthly Meeting</h2>
                  </div>

                  <div className="row">
                      <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                          <div className="icon"><i className="bx bxs-happy-alt bx-tada"></i></div>
                          <h4 className="title">12 Hours Prayer Meeting</h4>
                          <p className="description">Our 12-hour prayer meeting holds first Friday of every month from 6:00PM to 6:00AM on Chapel Tarmac
                          </p>
                      </div>
                      </div>
                      </div>

                  <div className="section-title" data-aos="fade-up">
                      <h2 data-aos="fade-up" data-aos-delay="200">Annual Programmes</h2>
                  </div>
                  <div className="havilla">
                  <h2 data-aos="fade-right" data-aos-delay="200"><li>Havilla</li></h2>
                  <div className="owl-carousel havilla-carousel" data-aos="fade-up" data-aos-delay="200">
                  <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170969/havilla-1_quevf0.png" alt=""/>
                  <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170976/havilla-2_hgaath.png" alt=""/>
                  <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164412/hallelujah-1_lqozmp.jpg" alt=""/>
                  <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164421/havilla-2_j0ghrr.png" alt=""/>
                  <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830159/havilla-3_lrxftz.jpg" alt=""/>
                  <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164412/hallelujah-1_lqozmp.jpg" alt=""/>
                  <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830223/isaac-choir_qe8oto.png" alt=""/>
                  </div>
                  <p data-aos="fade-up" data-aos-delay="200">Havilla is the freshers welcome programme of SCM UI.
                    <br/>It ends the yearly freshers outreach programme where hundreds of new intakes are reached out to with the Gospel and enjoined to join the fellowship.
                    <br/>Always a time of refreshing and excitement, it's a programme to look forward to every year.
                  </p>
                  </div>

                  <div className="evang">
                    <h2 data-aos="fade-right" data-aos-delay="200"><li>Evangeltainment</li></h2>
                    <div className="owl-carousel evang-carousel" data-aos="fade-up" data-aos-delay="200">
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209735/evangeltainment-new-4_hjfhuj.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170929/evangeltainment-2_mrfdce.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170922/evangeltainment-1_y7mg5v.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170946/evangeltainment-5_ifdlkr.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209730/evangeltainment-new_ghccba.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209730/evangeltainment-new-1_xv67bw.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594210647/evangeltainment-new-5_kxgpwm.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170963/evangeltainment-7_vgsuym.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594210647/evangeltainment-new-6_gapm7x.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594210648/evangeltainment-new-7_arbnlj.png" alt=""/>
                    </div>
                    <p data-aos="fade-up" data-aos-delay="200">Evangeltainment, the drama night of SCM UI is notably the biggest stage play on campus, with an average attendance of over a thousand students.
                      <br/>Replete with excellence and professional delivery, SCMers reach out with the Gospel in stageplays perfectly scripted to reveal Jesus and proclaim redemption.
                      <br/>Evangeltainment ultimately evangelizes with entertainment, the audience left awestricken with seamlessly acted powerful plays.
                    </p>
                  </div>

                  <div className="retreat">
                    <h2 data-aos="fade-right" data-aos-delay="200"><li>House Retreat</li></h2>
                    <div className="owl-carousel retreat-carousel" data-aos="fade-up" data-aos-delay="200">
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594171011/house-retreat-5_xb0rwd.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594171002/house-retreat-2_q2uwxd.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209741/house-retreat-new-1_x5batn.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594171002/house-retreat-3_iruscn.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594171004/house-retreat-4_tajkfz.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594171010/house-retreat-1_g0kctg.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209740/house-retreat-new-2_fsllxu.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209735/house-retreat-new_lwpxsl.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209740/house-retreat-new-3_vsbipg.png" alt=""/>
                    </div>
                    <p data-aos="fade-up" data-aos-delay="200">House Retreat provides an extensive time of intense prayers, in-depth Bible studies and bonding.
                      <br/>Always a span of days spent away from campus, full attention is paid to spiritual exercises and growth.
                      <br/>The retreat builds SCMers, with much time to fellowship with one another and of course, Biblically, dine!

                    </p>
                  </div>

                  <div className="converge">
                    <h2 data-aos="fade-right" data-aos-delay="200"><li>Converge</li></h2>
                    <div className="owl-carousel converge-carousel" data-aos="fade-up" data-aos-delay="200">
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594171024/converge-3_lme9k7.jpg" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209720/converge-new-2_sm0x1o.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594204742/converge-1_hgnqva.jpg" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594210648/converge-baba-aboaba_w7kt8t.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209718/converge-new-1_sfcuwk.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170942/converge-5_cpgcf5.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594204904/converge-4_cg7aff.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209719/converge-new_nio4kl.png" alt=""/>
                      <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209722/converge-new-4_lejim4.png" alt=""/>
                    </div>
                    <p data-aos="fade-up" data-aos-delay="200">Converge is a brand of SCM UI. It is a public lecture that provides intellectual discussions on the socio-economic and political issues in the country.
                      <br/>Birthed from a standpoint of SCM being an integral part of the society, it seeks to empower youths to proffer solutions to the challenges in Nigeria.
                      <br/>Converge is an expression of social and political consciousness of SCM UI.
                    </p>
                  </div>

                </div>
            </section>
        )
    }
}
