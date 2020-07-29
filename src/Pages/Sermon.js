import React, { Component } from 'react';
import Header from "../Components/Sermon/Header";
import Messages from "../Components/Sermon/Messages";
import Footer from "../Components/Homepage/Footer";

export default class Sermon extends Component {
    constructor(props){
        super(props);
      }
    render() {
        return (
            <>
              <Header toggleClass={this.props.toggleClass}/>
              <Messages />
              <Footer />
            </>
        )
    }
}
