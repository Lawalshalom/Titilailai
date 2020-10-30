import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Gifts() {
  return (
    <div className="gifts text-center">
      <Header page="gifts" />
      <div className="row">
      <div className="gift-details col-lg-4 col-md-6 text-center d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-center">GIFTS</h1>
        <p>We covet your prayers towards the success of the day's event and our marriage. We would also be delighted if you honour us with your presence. If you wish to give a gift, please make it a monetary gift.</p>
        <p>You may do so with your card <a href="https://paylink.ng/timiadeoti" target="_blank" rel="noreferrer noopener">here</a></p>
        <p>or bank transfer to 0111349596 (GTB)</p>
      </div>
      </div>

      <svg preserveAspectRatio="xMidYMid meet" id="idhj6q0ssvgcontent" data-bbox="-67.5 125.05 135 149.95" xmlns="http://www.w3.org/2000/svg" viewBox="-67.5 125.05 135 149.95" role="img">
        <g>
          <path d="M61 157.7H49.9c3.8-3.7 5.9-8.5 5.9-12.4 0-6.7-5.4-14.6-20.6-14.6-10.9 0-23.5 8-32.5 17.3 2.7-6 8.2-13.4 13.2-18.5 1-1 1-2.7 0-3.7s-2.7-1-3.7 0c-4.7 4.7-10.6 12.3-13.9 19.3-3.3-7-9.3-14.6-13.9-19.3-1-1-2.7-1-3.7 0s-1 2.7 0 3.7c5 5.1 10.5 12.5 13.2 18.5-9-9.3-21.6-17.3-32.5-17.3-15.2 0-20.6 7.9-20.6 14.6 0 3.9 2.1 8.7 5.9 12.4H-61c-3.6 0-6.5 2.9-6.5 6.5v24.5c0 3.5 2.7 6.3 6.1 6.5v73.3c0 3.6 2.9 6.5 6.5 6.5H54.9c3.6 0 6.5-2.9 6.5-6.5v-73.3c3.4-.2 6.1-3 6.1-6.5v-24.5c0-3.6-2.9-6.5-6.5-6.5zm-6.5 24.5H2.6v-11.5h51.9v11.5zm-19.3-46.4c9.7 0 15.5 3.5 15.5 9.4 0 3.8-4 10.9-11.2 12.4H1.2c8.1-10.8 22.6-21.8 34-21.8zm-89.2 9.5c0-4.5 4.1-9.4 15.5-9.4 11.3 0 25.9 10.9 33.9 21.8h-38.2c-7.3-1.6-11.2-8.6-11.2-12.4zm-.5 25.4h51.9v11.5h-51.9v-11.5zm6.1 24.5h45.8V262h-45.8v-66.8zM48.4 262H2.6v-66.7h45.8V262z"></path>
        </g>
      </svg>
      <Footer/>
    </div>
  )
}
