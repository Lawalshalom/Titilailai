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
    })(jQuery);
  }
  render(){
    return (
        <section id="mission" className="mission">
        <div className="owl-carousel about-carousel">

            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="assets/img/about/elijah-raised.jpg" className="testimonial-img" alt=""/>
               </div>
            </div>

            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="assets/img/about/finalists2.jpeg" className="testimonial-img" alt=""/>
               </div>
            </div>
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="assets/img/about/fikemi-choir.png" className="testimonial-img" alt=""/>
               </div>
            </div>
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="assets/img/about/jummy-fifi.jpeg" className="testimonial-img" alt=""/>
               </div>
            </div>
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="assets/img/about/adeolu-fikun.jpg" className="testimonial-img" alt=""/>
               </div>
            </div>
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="assets/img/about/bbp-grads.jpg" className="testimonial-img" alt=""/>
               </div>
            </div>
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="assets/img/about/seye-imma.JPG" className="testimonial-img" alt=""/>
               </div>
            </div>
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="assets/img/about/hand-raised.jpeg" className="testimonial-img" alt=""/>
               </div>
            </div>


            </div>

        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h1>Our Vision</h1>
                    <p>
                    We envision a Christ-centered, motivated generation of students and leaders, biblically discipled, excelling in integrity and oneness.
                    </p>
                </div>
                <div className="col-lg-6">
                    <h1>Our Mission</h1>
                    <p>
                    We disciple students and equip leaders for missions and societal transformation.
                    </p>
                </div>
             </div>
             <div className="row">
             <div className="col-lg-6">
                 <h1>Our Core Values</h1>
                 <ul>
                <li>Oneness</li>
                <li>Christ centeredness</li>
                <li>Integrity and exemplary life</li>
                <li>Excellence</li>
                <li>Biblical discipleship</li>
                <li>Visionary servant leadership</li>
                <li>Continuous learning</li>
                </ul>
             </div>
            <div className="col-lg-6">
                <h1>SCM Anthem</h1>
                <p>Oh Lord bless our movement SCM,<br/>
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
            <div id="history" className="history">
                <h1>A brief History</h1>
                <p>The Student Christian Movement (SCM) is the Local expression of the World Student Christian Federation (W.S.C.F) based in Geneva, Switzerland, it’s a student/youth-based ecumenical interdenominational, non-racial, missionary organization, with a desk at UNESCO.</p>
                <p>In the 77 years of her existence in Nigeria, the Movement has been a resource base for church and the society in the training of students in Schools, building up godly model men and women, spearheading coordination of joint campus fellowships, mission work, leadership training Programs, fight against all unrighteous vices in the society etc. We are the handmaid of the church.</p>
                <p>The SCM Nigeria was founded in <strong>1940 by Dr. Francis Akanu Ibiam and Chief Theophilus O. Ejiwumi.</strong> The SCM is a local expression of the World Student Christian Federation (W.S.C.F) based in Geneva, Switzerland- a student/youth based ecumenical interdenominational, <strong>non-racial,</strong> Missionary organization, with a desk at UNESCO. Beside the SCM, there are other national movements affiliated to WSCF in over a Hundred and six countries. The Student Christian Movement is a Faith-Based Organization (FBO). Our mandate is to the students and youth.</p>
                <p>In our society. We carry out spiritual, moral ethics and social skills development with academic tutoring that promotes the spiritual, physical, educational and life skills necessary to prepare and empower youth for leadership in their communities, church and society.</p>
                <p>SCM Nigeria very actively act as the handmaid of the Nigerian Church. We are associate members of the Christian Council of Nigeria-one of the foremost blocs of the Christian Association of Nigeria.</p>
                <p>The name STUDENT CHRISTIAN MOVEMENT defines the life and purpose of the Movement in these ways as explained below:</p>
                <ul>
                    <li><strong>STUDENT:</strong> SCM draws her members from students in institutions of learning and in most national context also means students of the Bible (Youths and Adults).</li>
                    <li><strong>CHRISTIAN:</strong> Members of the SCM are bible believing disciples of Christ who, by their lives and conducts, are called Christians.</li>
                    <li><strong>MOVEMENT:</strong> The SCM emphasis is sound and holistic growth of all her members – spirit, soul and body. As an organization, we are dynamic and progressive in our effort to fulfil our God-given vision. SCM informs her students on the realities of political situations both local and global, seeks new possibilities in the area of education, constantly striving for the renewal of the church, the eradication of social vices/crime in our campuses and society at large, moving with the hope and vision for a world of peace and justice as was in the life of Jesus Christ.</li>
                </ul>
            </div>
            <div className="container">
                <h2>Identity Statement</h2>
                <p>The primary aim of SCM is to call out her constituencies (Students, Youths and Senior Friends) to, through Biblical discipleship, live out the life of Christ wherever they may be in the world; to bring them into Christian fellowship with one another. <br/> In mutual service; to scripturally strive for peace and justice.</p>
            </div>
        </div>
        </section>
    )
}
}