import React from 'react';
import { Link } from 'react-router-dom';
import "jquery";

export default class About extends React.Component {
  componentDidMount(){
 /* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
!(function($) {
  //about text animations
$(document).ready(function() {
 ($.fn.text1 =() => {
  let content = 'Student Christian Movement of Nigeria is a movement of young persons working together to change the world through the Word of God and the power of the Holy Spirit. Our passion is reaching the unsaved youth urgently with the message of the Gospel of our Lord Jesus Christ.';
    let ele = '<span>' + content.split('').join('</span><span>') + '</span>';
    return $(ele).hide().appendTo('.about .content .p1').each(function (i) {
        $(this).delay(100 * i).css({
            display: 'inline',
            opacity: 0
        }).animate({
            opacity: 1
        }, 100);
    });
  }, 2000);
   $.fn.text2 =() =>{
    let content = 'SCM is an interdenominational gathering of dynamic students that are Christians and have been saddled with the responsibility of reaching out with the bible in one hand and newspaper in the other, influencing the world with the Word.';
    let ele = '<span>' + content.split('').join('</span><span>') + '</span>';
    return $(ele).hide().appendTo('.about .content .p2').each(function (i) {
        $(this).delay(100 * i).css({
            display: 'inline',
            opacity: 0
        }).animate({
            opacity: 1
        }, 100);
  })
};
  $(".about .content").delay(3000).text1().delay(5000).text2() ;
})
})(jQuery);

  }
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
          <p className="p1"></p>
          <p>We therefore also associate ourselves with the acronym:
          </p>
          <ul>
            <li><i className="ri-check-double-line"></i><strong> S: </strong> Saints</li>
            <li><i className="ri-check-double-line"></i><strong> C: </strong> Called to be</li>
            <li><i className="ri-check-double-line"></i><strong> M: </strong> Millitants!</li>
          </ul>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
          <p  className="p2"></p>
          <Link to="/about" className="btn-learn-more">Learn More</Link>
            </div>
            </div>
            </div>
        </section>

     </>
    )
}
}