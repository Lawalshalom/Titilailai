import React, { Component } from "react";
import Header from "../Components/Confessions/Header";
import Confess from "../Components/Confessions/Confess";
import Footer from "../Components/Homepage/Footer";

export default class Affiliations extends Component {
    constructor(props){
        super(props);
    }
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
