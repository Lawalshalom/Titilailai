import React from 'react';

export default function Pictures() {
    return (
        <>
      <section id="portfolio" className="portfolio">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
          <br/>
        <h2>Our Photo Gallery</h2>
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
            <img src="assets/img/portfolio/seye-choir.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Seye Maj'</h4>
              <p>Senior friends</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/seye-choir.jpg" data-gall="portfolioGallery" className="venobox" title="Seye Maj'"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/isaac-choir.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Havilla 2018</h4>
              <p>Events</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/isaac-choir.png" data-gall="portfolioGallery" className="venobox" title="Havilla 2018"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/prof-saba.jpeg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Prof. & Rev. Mrs Saba</h4>
              <p>Senior Friends</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/prof-saba.jpeg" data-gall="portfolioGallery" className="venobox" title="Prof Saba"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-undergrads">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/lawfem-worship.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>House Retreat 2019</h4>
              <p>Undergrads</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/lawfem-worship.jpg" data-gall="portfolioGallery" className="venobox" title="House retreat 2019"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/immanuel.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Immanuel Akerele</h4>
              <p>Senior friend</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/immanuel.png" data-gall="portfolioGallery" className="venobox" title="Immanuel Akerele"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/oga-chucks.jpeg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Odili Chucks</h4>
              <p>Senior Friend</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/oga-chucks.jpeg" data-gall="portfolioGallery" className="venobox" title="Odili Chucks"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/hallelujah-rejoice.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Hallelujah choir</h4>
              <p>Havilla 2018</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/hallelujah-rejoice.png" data-gall="portfolioGallery" className="venobox" title="Hallelujah choir"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/oga-daniel.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>2016 Tenure!</h4>
              <p>Senior friends</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/oga-daniel.jpg" data-gall="portfolioGallery" className="venobox" title="2016 tenure"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-undergrads">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/cross-worship1.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Worship</h4>
              <p>Undergrads</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/cross-worship1.png" data-gall="portfolioGallery" className="venobox" title="open image"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="assets/img/gallery/seye-choir.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Worship</h4>
              <p>Undergrads</p>
              <div className="portfolio-links">
                <a href="assets/img/gallery/seye-choir.jpg" data-gall="portfolioGallery" className="venobox" title="open image"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="assets/img/gallery/imma-dan.JPG" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Worship</h4>
              <p>Undergrads</p>
              <div className="portfolio-links">
                <a href="assets/img/gallery/imma-dan.JPG" data-gall="portfolioGallery" className="venobox" title="open image"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-undergrads">
          <div className="portfolio-wrap">
            <img src="assets/img/gallery/excos-rev-oyor.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Worship</h4>
              <p>Undergrads</p>
              <div className="portfolio-links">
                <a href="assets/img/gallery/excos-rev-oyor.jpg" data-gall="portfolioGallery" className="venobox" title="open image"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="assets/img/gallery/imma-temi.JPG" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Worship</h4>
              <p>Undergrads</p>
              <div className="portfolio-links">
                <a href="assets/img/gallery/imma-temi.JPG" data-gall="portfolioGallery" className="venobox" title="open image"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="assets/img/gallery/havilla-3.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Worship</h4>
              <p>Undergrads</p>
              <div className="portfolio-links">
                <a href="assets/img/gallery/havilla-3.jpg" data-gall="portfolioGallery" className="venobox" title="open image"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="assets/img/gallery/imma-ibk.JPG" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Worship</h4>
              <p>Undergrads</p>
              <div className="portfolio-links">
                <a href="assets/img/gallery/imma-ibk.JPG" data-gall="portfolioGallery" className="venobox" title="open image"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </section>
        </>
    )
}
