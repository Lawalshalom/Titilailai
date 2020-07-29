import React from 'react';
import Header from "../Components/Gallery/Header";
import Pictures from "../Components/Gallery/Pictures";
import Footer from "../Components/Homepage/Footer";

export default class Gallery extends React.Component {
    constructor(props){
      super(props);
    }
   render() {
    return (
        <>
        <Header toggleClass={this.props.toggleClass}/>
        <Pictures />
        <Footer />
        </>
    )
}
}