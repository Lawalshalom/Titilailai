import React from 'react';
import Header from "../Components/Login/Header";
import Calendar from "../Components/UgCalendar/BirthdayCalendar";
import Footer from "../Components/Homepage/Footer";


export default class UgCalendar extends React.Component {
  render(){
    return (
        <>
          <Header toggleClass={this.props.toggleClass}/>
          <Calendar birthdayData={this.props.birthdayData} />
          <Footer />
        </>
    );
  };
};