import React from 'react';
import { Link } from "react-router-dom";

export default function Team() {
    return (
        <div>
        <section id="team" className="team">
    <div className="container">
      <div className="section-title excos-title">
        <h2>Executive Council 2020</h2>
        <p>Meet the current leadership of the house for the 2019/2020 academic session</p>
      </div>

      <div className="row">

        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member">
            <div className="member-img">
              <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830204/femi-lawal-1_q0bse0.png" className="img-fluid" alt=""/>
              <div className="social">
                <a href="https://twitter.com/"><i className="icofont-twitter"></i></a>
                <a href="https://facebook.com/"><i className="icofont-facebook"></i></a>
                <a href="https://instagram.com/"><i className="icofont-instagram"></i></a>
                <a href="https://linkedin.com/"><i className="icofont-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Femi Lawal</h4>
              <span>President</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member">
            <div className="member-img">
              <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594899346/debra-new_nyijpf.png" className="img-fluid" alt=""/>
              <div className="social">
                <a href="https://twitter.com/"><i className="icofont-twitter"></i></a>
                <a href="https://facebook.com/"><i className="icofont-facebook"></i></a>
                <a href="https://instagram.com/"><i className="icofont-instagram"></i></a>
                <a href="https://linkedin.com/"><i className="icofont-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Debra Adesina</h4>
              <span>Vice President</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member">
            <div className="member-img">
              <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830173/paul-ajibola-1_l6blwm.png" className="img-fluid" alt=""/>
              <div className="social">
                <a href="https://twitter.com/"><i className="icofont-twitter"></i></a>
                <a href="https://facebook.com/"><i className="icofont-facebook"></i></a>
                <a href="https://instagram.com/"><i className="icofont-instagram"></i></a>
                <a href="https://linkedin.com/"><i className="icofont-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Paul Ajibola</h4>
              <span>General Secretary</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member">
            <div className="member-img">
              <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594026104/prince-1-new_h2r6bz.png" className="img-fluid" alt=""/>
              <div className="social">
                <a href="https://twitter.com/"><i className="icofont-twitter"></i></a>
                <a href="https://facebook.com/"><i className="icofont-facebook"></i></a>
                <a href="https://instagram.com/"><i className="icofont-instagram"></i></a>
                <a href="https://linkedin.com/"><i className="icofont-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Prince Enobun</h4>
              <span>Financial Secretary</span>
            </div>
          </div>
        </div>
      </div>
        <div className="see-more">
        <Link to="/team" target="_top"><button className="btn btn-primary">See More<i className="icofont-arrow-right"></i></button></Link>
        </div>
    </div>
  </section>
        </div>
    )
}
