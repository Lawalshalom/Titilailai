import React from 'react';
import "jquery";
import "owl.carousel";


export default class Mission extends React.Component {
  componentDidMount(){
    /* eslint-disable no-restricted-globals */
    /* eslint-disable no-unused-expressions */
    /* eslint-disable no-undef */
    /* eslint-disable eqeqeq */
    !(function($) {
      // Testimonials carousel (uses the Owl Carousel library)
        $(document).ready(function() {
        $(".about-carousel").owlCarousel({
          autoplay: true,
          dots: true,
          loop: true,
          animateOut: 'bounceOutLeft',
          animateIn: 'bounceInRight',
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

   //about text animations
   $(document).ready(function() {
    ($.fn.text1 =() => {
     let content = 'We envision a Christ-centered, motivated generation of students and leaders, biblically discipled, excelling in integrity and oneness';
       let ele = '<span>' + content.split('').join('</span><span>') + '</span>';
       return $(ele).hide().appendTo('.about .p1').each(function (i) {
           $(this).delay(50 * i).css({
               display: 'inline',
               opacity: 0
           }).animate({
               opacity: 1
           }, 100);
       });
     }, 2000);
      $.fn.text2 =() =>{
       let content = 'We disciple students and equip leaders for missions and societal transformation.';
       let ele = '<span>' + content.split('').join('</span><span>') + '</span>';
       return $(ele).hide().appendTo('.about .p2').each(function (i) {
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
  render(){
    return (
        <section id="mission" className="mission">
        <div className="owl-carousel about-carousel">

            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830243/finalists2_cgr6bo.jpg" className="testimonial-img" alt=""/>
               </div>
            </div>

            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830250/fikemi-choir_nhmpqp.png" className="testimonial-img" alt=""/>
               </div>
            </div>

            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830255/elijah-raised_bmjzb2.png" className="testimonial-img" alt=""/>
               </div>
            </div>

            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830241/jummy-fifi_udqvj6.jpg" className="testimonial-img" alt=""/>
               </div>
            </div>
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830262/adeolu-fikun_aw5jbg.png" className="testimonial-img" alt=""/>
               </div>
            </div>
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830269/bbp-grads_t00izo.png" className="testimonial-img" alt=""/>
               </div>
            </div>
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830264/seye-imma_ltjgg2.png" className="testimonial-img" alt=""/>
               </div>
            </div>
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830239/hand-raised_eqpbvw.jpg" className="testimonial-img" alt=""/>
               </div>
            </div>


            </div>
        <div className="container">
      <section>
            <div className="row about">
                <div className="col-lg-6">
                    <h1 data-aos="fade-down" data-aos-delay="100">Our Vision</h1>
                    <p className="p1" data-aos="fade-right" data-aos-delay="100"></p>
                </div>
                <div className="col-lg-6">
                    <h1 data-aos="fade-right" data-aos-delay="100">Our Mission</h1>
                    <p className="p2" data-aos="fade-left" data-aos-delay="100"></p>
                </div>
             </div>
             <div className="row">
             <div className="col-lg-6">
                 <h1 data-aos="fade-up-right" data-aos-delay="100">Our Core Values</h1>
                 <ul>
                <li data-aos="fade-up-right" data-aos-delay="100">Oneness</li>
                <li data-aos="fade-up-left" data-aos-delay="100">Christ centeredness</li>
                <li data-aos="fade-up-right" data-aos-delay="200">Integrity and exemplary life</li>
                <li data-aos="fade-up-left" data-aos-delay="200">Excellence</li>
                <li data-aos="fade-up-right" data-aos-delay="200">Biblical discipleship</li>
                <li data-aos="fade-up-left" data-aos-delay="300">Visionary servant leadership</li>
                <li data-aos="fade-up-right" data-aos-delay="300">Continuous learning</li>
                </ul>
             </div>
            <div className="col-lg-6">
                <h1 data-aos="fade-down" data-aos-delay="300">SCM Anthem</h1>
                <p data-aos="fade-up-right" data-aos-delay="300">Oh Lord bless our movement SCM,<br/>
                   Oh may she arise and prosper now,<br/>
                   Oh Lord now we beseech thee, hear us,<br/>
                   Oh Lord, we beseech thee, good Lord, we beseech thee.<br/>
                   Spirit of God (6x)<br/>
                   Come to us now, and bless us.<br/>
                   Come now and bless us. <br/>
                   Good Lord, we beseech thee.
                </p>
            </div>
            </div>
            </section>
            <div id="history" className="history" data-aos="zoom-in" data-aos-delay="300">
                <h1>A brief History</h1>
                <p>The Student Christian Movement (SCM) is the Local expression of the World Student Christian Federation (W.S.C.F) based in Geneva, Switzerland, it’s a student/youth-based ecumenical interdenominational, non-racial, missionary organization, with a desk at UNESCO.</p>
                <p>In the 77 years of her existence in Nigeria, the Movement has been a resource base for church and the society in the training of students in Schools, building up godly model men and women, spearheading coordination of joint campus fellowships, mission work, leadership training Programs, fight against all unrighteous vices in the society etc. We are the handmaid of the church.</p>
                <p>The SCM Nigeria was founded in <strong>1940 by Dr. Francis Akanu Ibiam and Chief Theophilus O. Ejiwumi.</strong> The SCM is a local expression of the World Student Christian Federation (W.S.C.F) based in Geneva, Switzerland- a student/youth based ecumenical interdenominational, <strong>non-racial,</strong> Missionary organization, with a desk at UNESCO. Beside the SCM, there are other national movements affiliated to WSCF in over a Hundred and six countries. The Student Christian Movement is a Faith-Based Organization (FBO). Our mandate is to the students and youth.</p>
                <p>In our society. We carry out spiritual, moral ethics and social skills development with academic tutoring that promotes the spiritual, physical, educational and life skills necessary to prepare and empower youth for leadership in their communities, church and society.</p>
                <p>SCM Nigeria very actively act as the handmaid of the Nigerian Church. We are associate members of the Christian Council of Nigeria-one of the foremost blocs of the Christian Association of Nigeria.</p>
                <p>The name STUDENT CHRISTIAN MOVEMENT defines the life and purpose of the Movement in these ways as explained below:</p>
                <ul>
                    <li data-aos="fade-up-right" data-aos-delay="300"><strong>STUDENT:</strong> SCM draws her members from students in institutions of learning and in most national context also means students of the Bible (Youths and Adults).</li>
                    <li data-aos="fade-up-left" data-aos-delay="300"><strong>CHRISTIAN:</strong> Members of the SCM are bible believing disciples of Christ who, by their lives and conducts, are called Christians.</li>
                    <li data-aos="fade-up-right" data-aos-delay="300"><strong>MOVEMENT:</strong> The SCM emphasis is sound and holistic growth of all her members – spirit, soul and body. As an organization, we are dynamic and progressive in our effort to fulfil our God-given vision. SCM informs her students on the realities of political situations both local and global, seeks new possibilities in the area of education, constantly striving for the renewal of the church, the eradication of social vices/crime in our campuses and society at large, moving with the hope and vision for a world of peace and justice as was in the life of Jesus Christ.</li>
                </ul>
            </div>
            <div className="container" data-aos="fade-right" data-aos-delay="300">
                <h2>Identity Statement</h2>
                <p>The primary aim of SCM is to call out her constituencies (Students, Youths and Senior Friends) to, through Biblical discipleship, live out the life of Christ wherever they may be in the world; to bring them into Christian fellowship with one another. <br/> In mutual service; to scripturally strive for peace and justice.</p>
            </div>
            <div className="container">
              <div className="col-lg-6">
                <h1 data-aos="fade-up" data-aos-delay="300">SCM UI Family Song</h1>
                <audio data-aos="fade" data-aos-delay="300"controls src="https://res.cloudinary.com/lawfirm1000/video/upload/v1593974593/Family-song_SCMUI_dhkyrk.mp3"
                preload="auto">Your browser does not support the<code>audio</code></audio>
                <p data-aos="fade-up-right" data-aos-delay="300">
                  If you're looking for a family of God
                  <br/>Here you are, Student Christian Movement
                  <br/>If you're looking for a family to belong
                  <br/>SCM is the place to be
                  <br/>Where the sons are vigorous
                  <br/>And the daughters of graceful beauty
                  <br/>The abode of His presence
                  <br/>SCM, that's where we are
                  <br/>We are the apple of His eyes
                  <br/>And we are vdestined to shine
                  <br/>We are <strong>S - Saints</strong>
                  <br/><strong>C - Called to be</strong>
                  <br/><strong>M - Millitants</strong>
                  <br/><strong>SCM!</strong>
                </p>
              </div>
            </div>
        </div>
        </section>
    )
}
}