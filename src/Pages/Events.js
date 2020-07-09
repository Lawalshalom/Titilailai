import React, { Component } from 'react';
import Header from "../Components/Programmes/Header";
import Programmes from "../Components/Programmes/Programmes";
import Footer from "../Components/Homepage/Footer";

export default class Events extends Component {
    render() {
        return (
            <>
              <Header />
              <Programmes />
              <Footer />
            </>
        )
    }
}
