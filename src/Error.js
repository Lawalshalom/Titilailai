import React from 'react';
import Header from "./Components/Homepage/Header";
import Contact from "./Components/Homepage/Contact";
import Footer from "./Components/Homepage/Footer";

export default class Error extends React.Component {
    constructor(props){
      super(props);
    }
   render() {
    return (
    <section id="error">
        <Header toggleClass={this.props.toggleClass}/>
        <div className="container">
            <h3 className="text-center"><strong>This page cannot be found. Try again, believer.</strong></h3>
            <p className="text-center">Not finding what you are looking for? Contact us!</p>
        </div>
        <Contact />
        <Footer />
    </section>
    )
}
}