import React from 'react';
import Header from "../Components/Team/Header";
import Excos from "../Components/Team/Excos";
import Footer from "../Components/Homepage/Footer";

export default
class Home extends React.Component {
 render() {
   return (
        <>
        <Header  toggleClass={this.props.toggleClass}/>
        <Excos />
        <Footer />
        </>
    )
}
}