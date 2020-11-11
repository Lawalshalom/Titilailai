import React from 'react';
import Header from "../Components/Header";

const Story = () => {
  return (
    <div>
      <Header page="story"/>

      <div className="about d-flex flex-column justify-content-center align-items-center">
        <h2  data-aos="fade-up-right">ABOUT US</h2>
        <h1  data-aos="fade-up-left">Our journey to forever</h1>
      </div>

      <div className="tinu">
                <div className="top-logo text-center mt-2">
                    <img src="icons/Group4.png" alt="top-logo"/>
                </div>
                <img className="flower-1" src="icons/flowers2.png" alt="flowers" />
                <div className="container">
                    <div className="d-flex flex-column flex-md-row  align-items-center justify-content-center w-100 story-cont">
                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center"  data-aos="fade-right" data-aos-delay="100">
                            <div className="text-cont">
                                <p className="text-primary mt-5 mt-md-0 love-text">LOVE IN IT'S BEST FORM</p>
                                <h3>Tinuke writes</h3>
                                <p>​​"In our case, God’s time is the best and when God isn’t ready, no man can force him to be. Timi and I attended the same secondary school, he was my senior, I didn’t as much as see him beyond “the head boy”, “Senior Timilehin Adeoti”. Well, that wasn’t God’s time yet.
                                  I joined Access Bank in 2018 and about a year later, I had a customer issue that required putting a call through to his team, (I didn’t know he was in Access bank), he picked the call and was of great help, he didn’t only solve that issue, he helped solve the other issues I had. I thanked him and moved on without even looking at his name twice on teams ( it still wasn’t God’s time yet).
                                  About a week later, This man chatted me up on teams and I refused to reply his “Hello, good morning“ because I wasn’t interested. I ended up replying in a very rude way and then he asked if I schooled in Ibadan. The rest they say is history.
                                  We started off as friends and we made the relationship official September 1st, 2019, we said Yes to starting a future together March 1st, 2020 and now we’re getting married. The journey has been amazing,
                                  I’ve never been more in love and truly when God says Yes, no one can say No
                                </p>
                                <p>Tinu <span role="img" aria-label="congrats emoji">🎉</span></p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6" data-aos="fade-left" data-aos-delay="100">
                            <img className="w-100" src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605125088/titilailai/pic-3_ntmrrp.png" alt="prewedding" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="timi">
                <img className="flower-2" src="icons/flowers25.png" alt="flowers" />
                <div className="container">
                    <div className="d-flex flex-column-reverse flex-md-row  align-items-center justify-content-center w-100 story-cont">
                        <div className="col-12 col-md-6" data-aos="fade-right" data-aos-delay="200">
                            <img className="w-100" src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605125088/titilailai/pic-4_ajsfyb.png" alt="prewedding" />
                        </div>

                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                            <div className="text-cont ml-md-5 pl-md-5" data-aos="fade-left" data-aos-delay="200">
                              <p className="mt-5 mt-md-0 love-text">LOVE IN IT'S BEST FORM</p>
                              <h3>Timilehin writes</h3>
                              <p>​"Twas a usually busy day in the office with my desk phone ringing non stop. Each call coming with it’s own issues. I was very exhausted and it wasn’t even lunchtime yet.
                                  Then "the call" came in. The phone rang twice. I decided to put aside the way I was feeling to answer the phone and be nice. Thank God I did.
                                  I attended to the charming voice on the other end of the phone and even went the extra mile(I always do). One thing led to another and man was checking her out on Instagram <span role="img" aria-label="laughing">😂</span>. Then boom, I recognized the face as one that I had probably seen before. “Oh yeah,OBMS!(my secondary school in Ibadan)”, it finally clicked. “Reach out to her”, I thought....”but you were a strict senior in school o, will she answer you laidis”...”No harm in trying jare”. I reached out to her days later and it was the beginning of a formidable friendship. The way we synced on issues, core values aligning.
                                  Even in disagreements, values still staying the same. Hmmm, God really ordered my steps to this one!"
                              </p>
                              <p className="text-primary">Timi <span role="img" aria-label="congrats emoji">🎉</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


      <div className="top-logo text-center mt-2">
          <img src="icons/Group4.png" alt="top-logo"/>
      </div>

      <div className="gallery" data-aos="fade-up" data-aos-delay="100">
                <img className="w-100" src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605125088/titilailai/Gallery_u2gkb5.png" alt="photos"/>
      </div>

      <div className="thanks container" data-aos="flip-up" data-aos-delay="100">
          <img className="w-100" src="icons/thanks.png" alt="thanks"/>
      </div>

      <a href="#header" target="_top" className="back-to-top"><i className="fa fa-arrow-up"></i></a>
    </div>
  )
}
export default Story;