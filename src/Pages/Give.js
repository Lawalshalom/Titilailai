import React from 'react';
import Header from "../Components/Give/Header";
import Details from "../Components/Give/Details";
import Contact from "../Components/Homepage/Contact";
import Footer from "../Components/Homepage/Footer";
import Popup from '../Components/Give/Popup';


export default class Home extends React.Component {
  render(){
    return (
        <>
          <Header toggleClass={this.props.toggleClass}/>
          <Popup />
          <Details />
          <Contact />
          <Footer />
        </>
    )
}
}