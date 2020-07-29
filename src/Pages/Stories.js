import React, { Component } from 'react';
import Header from "../Components/Stories/Header";
import Posts from "../Components/Stories/Posts";
import Footer from "../Components/Homepage/Footer";

export default class Stories extends Component {
    render() {
        return (
            <>
              <Header toggleClass={this.props.toggleClass}/>
              <Posts />
              <Footer />
            </>
        )
    }
}
