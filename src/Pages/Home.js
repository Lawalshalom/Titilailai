import React from 'react';
import Header from '../Components/Header';
import Footer from "../Components/Footer";

export default function Home() {
    return (
        <div className="home">
        <Header page="home" />
        <div className="cont d-flex flex-column justify-content-center">
            <div className="hero container d-flex flex-column justify-content-center">

                   <h1>TINUKE & <br/>
                        <span>TIMILEHIN</span></h1>
                    <h3>Are Getting Married!</h3>
                    <svg preserveAspectRatio="xMidYMid meet" id="idhityhjsvgcontent" data-bbox="-282.8 507.4 170.1 25.5" xmlns="http://www.w3.org/2000/svg" viewBox="-282.8 507.4 170.1 25.5" role="img">
                        <g>
                            <path d="M-112.7 532.9h-170.1v-25.5h170.1l-11.5 12.7 11.5 12.8z"></path>
                        </g>
                    </svg>
            </div>
           </div>
           <Footer />
        </div>
    )
}
