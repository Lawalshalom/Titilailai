import React, { Component } from "react";
import Header from "../Components/Confessions/Header";
import Confess from "../Components/Confessions/Confess";
import Footer from "../Components/Homepage/Footer";

export default class Confession extends Component {
    render() {
        return (
            <>
              <Header toggleClass={this.props.toggleClass}/>
              <Confess />
              <Footer />
            </>
        )
    }
}
