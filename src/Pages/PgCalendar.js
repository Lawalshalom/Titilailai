import React from 'react';
import Header from "../Components/Login/Header";
import BirthdayCalendar from "../Components/PgCalendar/Calendar";
import Footer from "../Components/Homepage/Footer";


export default class PgCalendar extends React.Component {
  render(){
    return (
        <>
          <Header toggleClass={this.props.toggleClass}/>
          <BirthdayCalendar birthdayData={this.props.birthdayData} />
          <Footer />
        </>
    );
  };
};