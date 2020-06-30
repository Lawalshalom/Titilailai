import React from 'react'

export default function Contact() {
    return (
    <>
      <section id="contact" className="contact">
    <div className="container">

      <div className="section-title"  data-aos="fade-up-left">
        <h2>Contact Us</h2>
      </div>

      <div className="row">

        <div className="col-lg-4 col-md-6"  data-aos="fade-up-left" data-aos-delay="100">
          <div className="contact-about">
            <h3>SCM UI</h3>
            <p>Connect with us on all our social media pages!</p>
            <div className="social-links">
              <a href="https://twitter.com/scmui" className="twitter"><i className="icofont-twitter"></i></a>
              <a href="https://facebook.com/scmui" className="facebook"><i className="icofont-facebook"></i></a>
              <a href="https://instagram.com/scmunibadan" className="instagram"><i className="icofont-instagram"></i></a>
              <a href="https://wa.me/2348131644353" className="whatsapp"><i className="icofont-whatsapp"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-4 mt-md-0"  data-aos="zoom-in" data-aos-delay="100">
          <div className="info">
            <div>
              <i className="ri-map-pin-line"></i>
              <p>Office 2, Chapel Basement,<br/>Chapel Of The Resurrection, University of Ibadan, Ibadan</p>
            </div>

            <div>
              <i className="ri-mail-send-line"></i>
              <p>scmuisec@gmail.com</p>
            </div>

            <div>
              <i className="ri-phone-line"></i>
              <p>+234 813 913 2063</p>
            </div>

          </div>
        </div>

        <div className="col-lg-5 col-md-12"  data-aos="fade-up-right" data-aos-delay="100">
          <form action="forms/contact.php" method="post" className="php-email-form">
            <div className="form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
              <div className="validate"></div>
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>
      </div>
    </div>
  </section>
</>
    )
}
