import React from 'react';
import { Link } from 'react-router-dom';
import "jquery";

export default class About extends React.Component {
  render() {
    return (
        <>
            <section id="about" className="about">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <h2>We live for Him!</h2>
      </div>

      <div className="row content">
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
          <p className="p1">Student Christian Movement is the Local expression of the World Student Christian Federation (W.S.C.F) based in Geneva, Switzerland. It’s a student/youth-based ecumenical interdenominational, non-racial, missionary organization, with a desk at UNESCO.
          <br/>SCM is an interdenominational gathering of dynamic students that are Christians and share a common passion of reaching the world urgently with the Gospel.
          </p>
          <p>We therefore also associate ourselves with the acronym:
          </p>
          <ul>
            <li><i className="ri-check-double-line"></i><strong> S: </strong> Saints</li>
            <li><i className="ri-check-double-line"></i><strong> C: </strong> Called to be</li>
            <li><i className="ri-check-double-line"></i><strong> M: </strong> Millitants!</li>
          </ul>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
          <p  className="p2">Student Christian Movement of Nigeria is a movement of young persons working together to change the world through the Word of God and the power of the Holy Spirit.<br/> Our passion is reaching the unsaved youth urgently with the message of the Gospel of our Lord Jesus Christ.
           <br/>We have been saddled with the responsibility of reaching out with the Bible in one hand and newspaper in the other, influencing the world with the Word.</p>
          <Link to="/about" target="_top" className="btn-learn-more">Learn More</Link>
            </div>
            </div>
            </div>
        </section>

     </>
    )
}
}