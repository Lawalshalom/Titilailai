import React from 'react';
import Header from "../Components/Login/Header";
import Admin from "../Components/Login/Admin";
import Footer from "../Components/Homepage/Footer";


export default class Login extends React.Component {
  render(){
    return (
        <>
          <Header toggleClass={this.props.toggleClass}/>
          <Admin setBirthdayData={this.props.setBirthdayData} />
          <Footer />
        </>
    );
  };
};