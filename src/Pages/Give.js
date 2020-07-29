import React from 'react';
import Header from "../Components/Give/Header";
import Details from "../Components/Give/Details";
import Contact from "../Components/Homepage/Contact";
import Footer from "../Components/Homepage/Footer";


export default class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
        <>
          <Header toggleClass={this.props.toggleClass}/>
          <Details />
          <Contact />
          <Footer />
        </>
    )
}
}