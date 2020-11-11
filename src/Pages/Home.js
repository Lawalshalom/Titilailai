import React from 'react';
import Header from "../Components/Header";

const Home = () => {
    return (
        <div>
            <Header page="home"/>

            <div className="home d-flex flex-column justify-content-center align-items-center">
                <h3 className="mt-5" data-aos="fade-left">WEDDING BELLS</h3>
                <h1 data-aos="fade-up">Tinuke & Timilehin</h1>
                <h3 data-aos="fade-right">19. 12. 2020</h3>

                <div className="home-logo">
                    <a className="scrollto" href="/#story"><img src="icons/Group3.png" alt="design icon"/></a>
                </div>
            </div>

        <div className="pagerest">
            <div className="journey">
                <div className="top-logo text-center mt-2">
                    <img src="icons/Group4.png" alt="top-logo"/>
                </div>
                <img className="flower-1" src="icons/flowers21.png" alt="flowers" />
                <div className="container" id="story">
                    <div className="d-flex flex-column-reverse flex-md-row  align-items-center justify-content-center w-100 story-cont">
                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center" data-aos="fade-right">
                            <div className="text-cont">
                                <p className="text-primary mt-5 mt-md-0 love-text">LOVE IN IT'S BEST FORM</p>
                                <h3>Our journey to forever</h3>
                                <p>​"In our case, God’s time is the best and when God isn’t ready, no man can force him to be. Timi and I attended the same secondary school, he was my senior, I didn’t as much as see him beyond “the head boy”, “Senior Timilehin Adeoti”. </p>
                                <a href="/story" className="btn btn-primary">About us</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6"  data-aos="fade-left">
                            <img className="w-100" src="icons/pic-1.png" alt="prewedding" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="church" id="church">
                <img className="flower-2" src="icons/flowers22.png" alt="flowers" />
                <div className="container">
                    <div className="d-flex flex-column flex-md-row  align-items-center justify-content-center w-100 story-cont">
                        <div className="col-12 col-md-6"  data-aos="fade-right" data-aos-delay="100">
                            <img className="w-100" src="icons/pic-2.png" alt="prewedding" />
                        </div>

                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                            <div className="text-cont ml-md-5 pl-md-5"  data-aos="fade-left" data-aos-delay="100">
                                <p className="text-primary mt-5 mt-md-0 love-text">LOVE IN IT'S BEST FORM</p>
                                <h3>Celebrating with God first</h3>
                                <p className="text-primary mt-4">VENUE</p>
                                <p>New Covenant Church, Ring Road Centre, Kole Drive, Joyce B, Ibadan.</p>
                                <p className="text-primary">DATE</p>
                                <p>19. 12. 2020</p>
                                <p className="text-primary">TIME</p>
                                <p>10AM</p>
                                <a target="_blank" rel="noopener noreferrer"href="https://goo.gl/maps/1EdLQ2S6ArVAQZyj7" className="btn btn-primary">Get Directions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-logo text-center m-5" id="reception">
                <img src="icons/Group16.png" alt="top-logo"/>
            </div>

            <div className="container"  data-aos="fade-up">
                <div className="reception d-flex flex-column align-items-center justify-content-center">
                    <p className="text-primary mt-5 mt-md-0 love-text">LOVE IN IT'S BEST FORM</p>
                    <h3 className="text-center">We've prepared amazing meals for you</h3>
                    <p className="text-primary mt-4">VENUE</p>
                    <p className="text-center">Williamson Multipurpose Hall & Grounds,<br/>Oluyole Estate, Ibadan.</p>
                    <p className="text-primary">DATE</p>
                    <p>19. 12. 2020</p>
                    <p className="text-primary">TIME</p>
                    <p>1PM</p>
                    <a target="_blank" rel="noopener noreferrer"href="https://goo.gl/maps/2aFKhuxNuknS9xeA8" className="btn btn-primary">Get Directions</a>
                </div>
            </div>

            <div className="top-logo text-center m-5">
                <img src="icons/Group16.png" alt="top-logo"/>
            </div>

            <div className="gifts container d-flex justify-content-between" id="gifts"  data-aos="zoom-out">
                <img className="flower" src="icons/flowers2.png" alt="flower"/>
                <div className="d-flex flex-column align-items-center">
                    <h3 className="text-center">Did you come bearing gifts?</h3>
                    <p className="text-center">We covet your prayers towards the success of the day's event and our marriage. We would also be delighted if you honour us with your presence. If you wish to give a gift, please make it a monetary gift. You may do so with your card
                        <a href="https://paylink.ng/timiadeoti" target="_blank" rel="noreferrer noopener"> here</a>
                    </p>

                    <div className="d-flex mt-2">
                        <div className="underline"></div>
                        <p>OR</p>
                        <div className="underline"></div>
                    </div>
                    <p className="text-center mt-3">Via bank transfer to <strong>0111349596 (GTB)</strong></p>
                </div>
                <img className="flower" src="icons/flowers23.png" alt="flower"/>
            </div>

            <div className="gallery" data-aos="zoom-in" data-aos-delay="150">
                <img className="w-100" src="icons/Gallery.png" alt="photos"/>
            </div>

            <div className="thanks container" data-aos="flip-up" data-aos-delay="300">
                <img className="w-100" src="icons/thanks.png" alt="thanks"/>
            </div>
        </div>
        <a href="#header" target="_top" className="back-to-top"><i className="fa fa-arrow-up"></i></a>
    </div>
    )
}
export default Home;