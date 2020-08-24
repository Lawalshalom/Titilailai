import React, { Component } from 'react';
import Header from "../Components/Stories/Header";
import Testimonyitems from "../Components/Testimony/Testimonyitems";
import Footer from "../Components/Homepage/Footer";
import Popup from '../Components/Give/Popup';

export default class Testimonies extends Component {
    render() {
        return (
            <>
    <Header toggleClass={this.props.toggleClass}/>
    <Popup />
    <Testimonyitems />
    <Footer />
            </>
        )
    }
}
