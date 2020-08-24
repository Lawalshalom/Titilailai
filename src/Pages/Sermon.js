import React, { Component } from 'react';
import Header from "../Components/Sermon/Header";
import Messages from "../Components/Sermon/Messages";
import Footer from "../Components/Homepage/Footer";
import Popup from '../Components/Give/Popup';

export default class Sermon extends Component {
    render() {
        return (
            <>
              <Header toggleClass={this.props.toggleClass}/>
              <Popup />
              <Messages />
              <Footer />
            </>
        )
    }
}
