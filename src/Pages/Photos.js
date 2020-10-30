import React from 'react';
import "jquery";
import "owl.carousel";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Photos() {
    return (
        <div className="photos">
            <Header page="photos" />
            <div className="gallery">

                <div id="carousel-example" className="carousel slide row" data-pause="true" data-ride="false">
                    <div className="carousel-inner col-sm-12 col-md-10 col-lg-6">

                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/1.webp" alt="Prefirst slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/2.webp" alt="First slide"/>
                        </div>
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="images/3.webp" alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/4.webp" alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/5.webp" alt="Fourth slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/6.webp" alt="Fifth slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/7.webp" alt="Sixth slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/8.webp" alt="Seventh slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/9.webp" alt="Eighth slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/10.webp" alt="Ninth slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/11.webp" alt="Tenth slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/12.webp" alt="Eleventh slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/13.webp" alt="Twelve slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/14.webp" alt="Eleventh slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/15.webp" alt="Eleventh slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/17.webp" alt="Eleventh slide"/>
                        </div>

                    </div>
                </div>

                <a className="carousel-control-prev" href="#carousel-example" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel-example" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

            </div>
            <Footer />
        </div>
    )
}
