import React from 'react';
import Header from "../Components/About/Header";
import Mission from "../Components/About/Mission";
import Contact from "../Components/Homepage/Contact";
import Footer from "../Components/Homepage/Footer";
import Popup from "../Components/Give/Popup";
import "../App.css";

export default class About extends React.Component {
    render(){
    return (
        <>
        <Header toggleClass={this.props.toggleClass}/>
        <Popup />
        <Mission />
        <Contact />
        <Footer />
        </>
    )
}
}