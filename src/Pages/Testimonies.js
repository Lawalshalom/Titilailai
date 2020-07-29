import React, { Component } from 'react';
import Header from "../Components/Stories/Header";
import Testimonyitems from "../Components/Testimony/Testimonyitems";
import Footer from "../Components/Homepage/Footer";

export default class Testimonies extends Component {
    render() {
        return (
            <>
    <Header toggleClass={this.props.toggleClass}/>
    <Testimonyitems />
    <Footer />
            </>
        )
    }
}
