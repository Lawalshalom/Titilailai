import React from 'react';
import { Link } from "react-router-dom";

export default class Services extends React.Component {
  render(){
    return (
        <div>
            <section id="services" className="services">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>Services</h2>
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
      </div>
      <div className="see-more" data-aos="fade" data-aos-delay="300">
        <Link to="/events" target="_top"><button className="btn btn-primary">See More<i className="icofont-arrow-right"></i></button></Link>
        </div>
    </div>
  </section>
        </div>
    )
}
}