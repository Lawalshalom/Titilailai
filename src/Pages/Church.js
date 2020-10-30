import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Church() {
    return (
        <div className="church">
            <Header page="church" />
            <div className="cont d-flex flex-column justify-content-center">
                <div className="hero container d-flex flex-column flex-md-row flex-lg-row align-items-center">
                <div className="col-12 col-md-6 col-lg-6 d-flex flex-column align-items-center">
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
                <div className="church-map col-12 col-md-6 col-lg-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.8916549267115!2d3.861466050285119!3d7.3660399946586095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d2c4c64cea1%3A0x60972181788e0b99!2sNew%20Covenant%20Church!5e0!3m2!1sen!2sng!4v1604040246224!5m2!1sen!2sng" width="600" height="450" frameBorder="0" style={{border:0}} title="church map" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>

                </div>
                </div>

           </div>
           <Footer />
        </div>
    )
}
