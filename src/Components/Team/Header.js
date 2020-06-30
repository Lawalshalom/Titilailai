import React from 'react';
import Navbar from "./Navbar";
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
    <div className="custom-control custom-switch">
			<input type="checkbox"
			className="custom-control-input"
			id="customSwitches"
			onClick={this.toggleClass}/>
  			<label className="custom-control-label" for="customSwitches">Day/Night Mode</label>
		</div>
        <div className="container d-flex align-items-center">
            <div className="logo mr-auto">
                <h1 className="text-light"><Link to="/">
                <img src="assets/img/scm-header.png" alt="" className="img-fluid"/>
                <span>  SCM UI</span></Link></h1>
            </div>
        <Navbar />
        </div>
        <div className="progress-container">
       <div className="progress-bar" id="myBar"></div>
     </div>
    </header>

    </>
    )
}
}