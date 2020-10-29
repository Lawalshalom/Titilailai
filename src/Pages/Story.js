import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Story() {
    return (
        <>
        <div className="story container">
            <Header page="story" />
            <div className="page-title text-center">
                <h1>OUR </h1>
                <h1 className="title-story"><span>Story</span></h1>
            </div>

            <div className="accounts row d-flex flex-column flex-lg-row justify-contents-center">
                <div className="tinu col-12 col-lg-4">
                    <p>​"In our case, God’s time is the best and when God isn’t ready, no man can force him to be.
                        Timi and I attended the same secondary school, he was my senior, I didn’t as much as see him beyond “the head boy”, “Senior Timilehin Adeoti”. Well, that wasn’t God’s time yet.
                        <br/>I joined Access Bank in 2018 and about a year later, I had a customer issue that required putting a call through to his team(I didn’t know he was in access bank), he picked the call and was of great help, he didn’t only solve that issue, he helped solve the other issues I had. I thanked him and moved on without evening looking at his name twice on teams( it still wasn’t God’s time yet).
                        <br/>About a week later, This man chatted me up on teams and I refused to reply his “Hello, good morning “ because I wasn’t interested . I ended up replying in a very rude way and then he asked if I schooled in Ibadan.
                        The rest they say is history.
                        <br/>We started off as friends and we made the relationship official September 1st, 2019, we said Yes to starting a future together March 1st, 2020 and now we’re getting married. The journey has been amazing,
                        <br/>I’ve never been more in love and truly when God says Yes, No one can say No."
                    </p>
                    <h3>--- Tinu</h3>
                </div>

                <div className="picture-carousel col-12 col-lg-4">
                    <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel"  data-aos="zoom-in">
                        <div className="carousel-inner">

                          <div className="carousel-item">
                            <img className="d-block w-100" src="images/24.webp" alt="Prefirst slide"/>
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src="images/story/1.webp" alt="First slide"/>
                          </div>
                          <div className="carousel-item active">
                            <img className="d-block w-100" src="images/story/2.webp" alt="Second slide"/>
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src="images/story/3.webp" alt="Third slide"/>
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src="images/story/4.webp" alt="Fourth slide"/>
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src="images/story/5.webp" alt="Fifth slide"/>
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src="images/story/6.webp" alt="Sixth slide"/>
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src="images/17.webp" alt="Seventh slide"/>
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src="images/12.webp" alt="Eighth slide"/>
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src="images/5.webp" alt="Ninth slide"/>
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src="images/16.webp" alt="Tenth slide"/>
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src="images/31.webp" alt="Eleventh slide"/>
                          </div>
                        </div>
                    </div>
                </div>

                <div className="timi col-12 col-lg-4">
                    <p>"Twas a usually busy day in the office with my desk phone ringing non stop.
                        Each call coming with it’s own issues. I was very exhausted and it wasn’t even lunchtime yet.
                        <br/>Then "the call" came in. The phone rang twice. I decided to put aside the way I was feeling to answer the phone and be nice. Thank God I did.
                        <br/>I attended to the charming voice on the other end of the phone and even went the extra mile(I always do). One thing led to another and man was checking her out on Instagram <span role="img" aria-label="laughing">😂</span>. Then boom, I recognized the face as one that I had probably seen before.
                        “Oh yeah,OBMS!(my secondary school in Ibadan).”, it finally clicked. “Reach out to her”, I thought....”but you were a strict senior in school o, will she answer you laidis”...”No harm in trying jare”.
                        I reached out to her days later and it was the beginning of a formidable friendship. The way we synced on issues, core values aligning.
                        <br/>Even in disagreements, values still staying the same. Hmmm, God really ordered my steps to this one!"
                    </p>
                    <h3>--- Timi</h3>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
