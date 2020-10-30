import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Reception() {
    return (
        <div className="reception">
            <Header page="reception" />
            <div className="cont d-flex flex-column justify-content-center">
                <div className="hero container d-flex flex-column flex-md-row flex-lg-row align-items-center">
                    <div className="col-12 col-md-6 col-lg-6">
                        <h1 className="text-center">Wedding<br/>
                            <span>Reception</span>
                        </h1>
                        <div className="reception-details text-center">
                            <h3><strong>Venue:</strong><br/>
                                Williamson Multipurpose Hall & Grounds, Oluyole Estate, Ibadan.
                            </h3>
                            <h3><strong>Date: </strong>19/12/2020</h3>
                            <h3><strong>Time:</strong> 1pm</h3>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63310.73876087627!2d3.846151!3d7.362733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x180a37c340e15d8b!2sWilliamson%20Multipurpose%20Hall%20%26%20Ground!5e0!3m2!1sen!2sus!4v1604015810903!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{border:0}} title="reception venue map" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
           </div>
           <Footer />
        </div>
    )
}
