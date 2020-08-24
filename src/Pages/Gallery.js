import React from 'react';
import Header from "../Components/Gallery/Header";
import Pictures from "../Components/Gallery/Pictures";
import Footer from "../Components/Homepage/Footer";
import Popup from '../Components/Give/Popup';

export default class Gallery extends React.Component {
   render() {
    return (
        <>
        <Header toggleClass={this.props.toggleClass}/>
        <Popup />
        <Pictures />
        <Footer />
        </>
    )
}
}