import React from 'react';
import Header from "../Components/About/Header";
import Mission from "../Components/About/Mission";
import Contact from "../Components/Homepage/Contact";
import Footer from "../Components/Homepage/Footer";
import "../App.css";

export default class About extends React.Component {
    constructor(props){
        super(props);
      }
    render(){
    return (
        <>
        <Header toggleClass={this.props.toggleClass}/>
        <Mission />
        <Contact />
        <Footer />
        </>
    )
}
}