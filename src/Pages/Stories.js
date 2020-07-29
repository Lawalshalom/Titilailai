import React, { Component } from 'react';
import Header from "../Components/Stories/Header";
import Posts from "../Components/Stories/Posts";
import Footer from "../Components/Homepage/Footer";

export default class Stories extends Component {
    constructor(props){
        super(props);
      }
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
