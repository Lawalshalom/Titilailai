import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Church() {
    return (
        <div className="church">
            <Header page="church" />
            <div className="cont d-flex flex-column justify-content-center">
                <div className="hero container d-flex flex-column align-items-center">
                    <h1 className="text-center">Church<br/>
                        <span>Wedding</span></h1>

                    <div className="church-details text-center">
                        <h3><strong>Venue:</strong><br/>
                            New Covenant Church, Ring Road Centre, Kole Drive, Joyce B,
                            <span className="city"> Ibadan</span></h3>
                        <h3><strong>Date:</strong>19/12/2020</h3>
                        <h3><strong>Time:</strong> 10am</h3>
                    </div>
                </div>
           </div>
           <Footer />
        </div>
    )
}
