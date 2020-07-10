import React from 'react';
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.toggleClass= this.toggleClass.bind(this);
    }
      toggleClass() {
          const control = document.querySelector(".custom-control-input");
          const element = document.body;
          control.checked ? element.classList.add("darkTheme") : element.classList.remove("darkTheme");
          this.setState((prevState) => ({
              active: !prevState.active
            }));
        }
    render(){
    return (
    <>
    <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
            <div className="logo mr-auto">
                <h1 className="text-light"><Link to="/" target="_top">
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830204/scm-header_dxauov.png" alt="header" className="img-fluid"/>
                <span>  SCM UI</span></Link></h1>
            </div>

            <nav className="nav-menu d-none d-md-block d-lg-block">
            <ul>
            <li ><Link to="/" target="_top">Home</Link></li>
                <li className="drop-down"><Link to="/about" target="_top">Explore!</Link>
                  <ul>
                    <li className="drop-down"><Link to="/about" target="_top">Who We Are</Link>
                        <ul>
                          <li><Link to="/about" target="_top">Our Vision</Link></li>
                          <li><Link to="/about#history">Our History</Link></li>
                          <li><Link to="/belief" target="_top">Our Beliefs</Link></li>
                          <li><Link to="/confessions" target="_top">Our Confessions</Link></li>
                          <li><Link to="/team" target="_top">Our Executive Team</Link></li>
                        </ul>
                            </li>
                    <li><Link to="/stories" target="_top">SCM Stories</Link></li>
                    <li><Link to="/sermon" target="_top">Sermon</Link></li>
                    <li className="active"><Link to="/events" target="_top">Events</Link></li>
                    </ul>
                </li>
                <li className="active"><Link to="/events">Services</Link></li>
                <li><Link to="/Gallery" target="_top">Gallery</Link></li>
                <li><Link to="/team" target="_top">Executives</Link></li>
                <li><Link to="/give" target="_top">Give</Link></li>
                <li><Link to="/#contact">Contact Us</Link></li>
                <li>
                  <div className="custom-control custom-switch">
			              <input type="checkbox"
			              className="custom-control-input"
			              id="customSwitches"
			              onClick={this.toggleClass}/>
                    <label className="custom-control-label" for="customSwitches">Day/Night</label>
		              </div>
                </li>
                <li className="get-started"><Link to="/#contact">Join Us!</Link></li>
            </ul>
        </nav>

        </div>
        <div className="progress-container">
       <div className="progress-bar" id="myBar"></div>
     </div>
    </header>

    </>
    )
}
}