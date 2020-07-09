import React from 'react';
import { Link } from "react-router-dom";

export default class Gallery extends React.Component {
  render(){
    return (
    <div>
          <section id="portfolio" className="portfolio">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>Photo Gallery</h2>
        <p>Pictures of past and present SCMers!</p>
      </div>

      <div className="row" data-aos="fade-up" data-aos-delay="200">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-undergrads">Undergrads</li>
            <li data-filter=".filter-snrfriend">Senior friends</li>
            <li data-filter=".filter-events">Events</li>
          </ul>
        </div>
      </div>

      <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="400">

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830222/seye-choir_vxzhv5.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Seye Maj'</h4>
              <p>Senior friends</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830222/seye-choir_vxzhv5.jpg" data-gall="portfolioGallery" className="venobox" title="open image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830223/isaac-choir_qe8oto.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Havilla 2018</h4>
              <p>Events</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830223/isaac-choir_qe8oto.png" data-gall="portfolioGallery" className="venobox" title="open image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830272/prof-saba_ntqx3g.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Prof. & Rev. Mrs Saba</h4>
              <p>Senior Friends</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830272/prof-saba_ntqx3g.jpg" data-gall="portfolioGallery" className="venobox" title="open image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-undergrads filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164412/hallelujah-1_lqozmp.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>Havilla '19</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164412/hallelujah-1_lqozmp.jpg" data-gall="portfolioGallery" className="venobox" title="open image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830232/immanuel_thfkzw.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Immanuel Akerele</h4>
              <p>Senior friend</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830232/immanuel_thfkzw.png" data-gall="portfolioGallery" className="venobox" title="open image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-undergrads filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209730/evangeltainment-new_ghccba.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>Evangeltainment</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209730/evangeltainment-new_ghccba.png" data-gall="portfolioGallery" className="venobox" title="open image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170988/finalists-3_t3u2op.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>Finalists Thanksgiving '20</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170988/finalists-3_t3u2op.png" data-gall="portfolioGallery" className="venobox" title="open image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830228/oga-daniel_mops3r.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>2016 Tenure!</h4>
              <p>Senior friends</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830228/oga-daniel_mops3r.jpg" data-gall="portfolioGallery" className="venobox" title="open image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-undergrads">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830243/cross-worship1_sqy9pa.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Worship</h4>
              <p>Undergrads</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830243/cross-worship1_sqy9pa.png" data-gall="portfolioGallery" className="venobox" title="open image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>
      </div>
        <div className="see-more">
        <Link to="/gallery" target="_top"><button className="btn btn-primary">View More<i className="icofont-arrow-right"></i></button></Link>
        </div>
    </div>
  </section>
    </div>
    )
}
}