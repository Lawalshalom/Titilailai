import React from 'react';
import emailjs from 'emailjs-com';

export default class Contact extends React.Component {

  constructor(){
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  }
  componentDidMount(){
const errorDiv = document.querySelector(".error-message");
const loadingDiv = document.querySelector(".loading");
const sentDiv = document.querySelector(".sent-message");
const formDiv = document.querySelectorAll(".form-group");

      this.sendData = e =>{
        e.preventDefault();
        loadingDiv.style.display = "block";
        const service_id = "default_service";
        const template_id = "template_CySYzf3e";
        const user_id = "user_MKOtFQkpTCql1DaoDPido";
        emailjs.send(service_id, template_id, this.state, user_id)
        .then((res) => {
          loadingDiv.style.display = "none";
          sentDiv.style.display = "block";
          errorDiv.style.display = "none";
          formDiv.forEach(div => div.style.display = "none");
          console.log("message sent:", res.status, res.text)
        },
        (err) => {
          loadingDiv.style.display = "none";
          sentDiv.style.display = "none";
          errorDiv.style.display = "block";
          console.log(err);
        });
      }
    }
  render(){
    this.nameData = e => {
      this.setState({
        name: e.target.value
      })
    }
    this.emailData = e => {
      this.setState({
        email: e.target.value
      })
    }
    this.subjectData = e => {
      this.setState({
        subject: e.target.value
      })
    }
    this.messageData = e => {
      this.setState({
        message: e.target.value
      })
    }
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
          <form className="php-email-form" onSubmit={this.sendData}>
            <div className="form-group">
              <input type="text" name="name" className="form-control"
              id="name" placeholder="FirstName LastName" required minLength="3"
              maxLength="30" pattern="[a-zA-Z]{3,}\s[a-zA-Z]{3,}" value={this.state.name} onChange={this.nameData}/>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
              required onChange={this.emailData} value={this.state.email}/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"
              required minLength="8" maxLength="50" value={this.state.subject} onChange={this.subjectData}/>
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" required minLength="20" placeholder="Message"
              onChange={this.messageData} value={this.state.message}></textarea>
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center form-group"><button type="submit">Send Message</button></div>
          </form>
        </div>
      </div>
    </div>
  </section>
</>
    )
}
}