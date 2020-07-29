import React from 'react';
import Header from "../Components/About/Header";
import Beliefs from "../Components/Beliefs/Beliefs";
import Footer from "../Components/Homepage/Footer";

export default class Belief extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
        <>
          <Header toggleClass={this.props.toggleClass}/>
          <Beliefs />
          <Footer />
        </>
    )
}
}