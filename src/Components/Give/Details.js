import React from 'react';
import "./Give.css";

export default function Details() {
    return (
        <>
    <section id="give" className="give">
        <div className="container">
            <div className="img" data-aos="fade-down">
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830259/give_n6p71i.jpg" alt="" />
            </div>
            <div className="text">
                <h1  data-aos="fade-right" data-aos-delay="100">Give Back</h1>
                <br/>
                <p  data-aos="fade-left" data-aos-delay="100"> We are a movement of God’s people that are given to the work of the Father. We have history and core values in reaching out to men with the gospel of Jesus without any discrimination. To make the work effective, we need your help and partnership financially and materially.</p>
                <p  data-aos="fade-left" data-aos-delay="100">To enable this to happen there are people and teams all across the nation pushing this common vision. All this requires time, investment and application of the gifts God has given to each of us.</p>
            </div>

        <div className="row">
            <div className="col-lg-6 bus-text">
            <div  data-aos="fade-right" data-aos-delay="100">
                <h2>Support Our Bus Project</h2>
                <p>We are fundraising for a new vehicle for the fellowship, your donations will be highly appreciated.</p>
            </div>
            </div>
            <div className="col-lg-6 bus-img"  data-aos="fade-left" data-aos-delay="300">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830266/hiace-bus-new_crg4pk.png" alt="" />
            </div>
        </div>


        <div className="row">
            <div className="col-lg-6 img-2"  data-aos="fade-up-right" data-aos-delay="400">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830260/give-section2_f7plca.jpg" alt="" />
            </div>
            <div className="col-lg-6 details text-center">
            <div  data-aos="zoom-in" data-aos-delay="500">
            <h3>Make a Difference</h3>
            <p>You can make your donations to the account below:</p>
            <br/>
            <p><strong>Polaris Bank</strong> <em>(formerly Skye Bank)</em> – <strong>4090746902</strong></p>
            </div>
            </div>
        </div>
        </div>
    </section>
    </>
    )
}
