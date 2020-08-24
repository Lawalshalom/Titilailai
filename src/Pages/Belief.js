import React from 'react';
import Header from "../Components/About/Header";
import Beliefs from "../Components/Beliefs/Beliefs";
import Popup from "../Components/Give/Popup";
import Footer from "../Components/Homepage/Footer";

export default class Belief extends React.Component {
  render(){
    return (
        <>
          <Header toggleClass={this.props.toggleClass}/>
          <Popup />
          <Beliefs />
          <Footer />
        </>
    )
}
}