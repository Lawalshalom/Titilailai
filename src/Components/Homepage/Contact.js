import React from 'react';


export default class Contact extends React.Component {
  componentDidMount(){
      const form = document.querySelector(".php-email-form");
      form.onsubmit = sendData;

      function sendData(e){
        e.preventDefault();
        let confirmation = window.confirm("Are you sure you want to message us?")
        if (confirmation === true){
        let formData = new FormData(form);

        let Params = {
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message")
          }),
          method: "POST"
        }
        fetch("http://localhost:8080/formData", Params)
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.error(err);
        })

      }
    }
  }
  render(){
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
              <a href= "https://goo.gl/maps/qw7nJnK2gk88Kjp58"><i className="ri-map-pin-line"></i></a>
              <p>Office 2, Chapel Basement,<br/>Chapel Of The Resurrection, University of Ibadan, Ibadan</p>
            </div>

            <div>
            <a href ="mailto: scmuisec@gmail.com"><i className="ri-mail-send-line"></i></a>
              <p>scmuisec@gmail.com</p>
            </div>

            <div>
            <a href="tel:+2348139132063"><i className="ri-phone-line"></i></a>
              <p>+234 813 913 2063</p>
            </div>

          </div>
        </div>

        <div className="col-lg-5 col-md-12"  data-aos="fade-up-right" data-aos-delay="100">
          <form action="/form-message" method="post" className="php-email-form">
            <div className="form-group">
              <input type="text" name="name" className="form-control"
              id="name" placeholder="FirstName LastName" required minLength="3"
              maxLength="30" pattern="[a-zA-Z]{3,}\s[a-zA-Z]{3,}"/>
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
              required  />
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required minLength="8" maxLength="50"/>
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" required minLength="20" placeholder="Message"></textarea>
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
}