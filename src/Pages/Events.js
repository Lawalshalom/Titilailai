import React, { Component } from 'react';
import Header from "../Components/Programmes/Header";
import Programmes from "../Components/Programmes/Programmes";
import Footer from "../Components/Homepage/Footer";
import Popup from '../Components/Give/Popup';

export default class Events extends Component {
    render() {
        return (
            <>
              <Header  toggleClass={this.props.toggleClass}/>
              <Popup />
              <Programmes />
              <Footer />
            </>
        )
    }
}
