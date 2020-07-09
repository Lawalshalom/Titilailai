import React from 'react';

export default class Pictures extends React.Component {
  render(){
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
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830222/seye-choir_vxzhv5.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Seye Maj'</h4>
              <p>Senior friends</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830222/seye-choir_vxzhv5.jpg" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
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
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830223/isaac-choir_qe8oto.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830225/prof-saba_njveez.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Prof. & Rev. Mrs Saba</h4>
              <p>Senior Friends</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830225/prof-saba_njveez.jpg" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594171009/house-4_dl19lo.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>2016</h4>
              <p>Senior friends</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594171009/house-4_dl19lo.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209720/converge-new-2_sm0x1o.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Converge '16</h4>
              <p>Senior friend</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209720/converge-new-2_sm0x1o.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
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
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830232/immanuel_thfkzw.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594204904/converge-4_cg7aff.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Timi Adeoti</h4>
              <p>Senior Friend</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594204904/converge-4_cg7aff.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209730/evangeltainment-new_ghccba.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Chronicles</h4>
              <p>Evangeltainment</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209730/evangeltainment-new_ghccba.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830228/oga-chucks_rvmxcf.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Odili Chucks</h4>
              <p>Senior Friend</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830228/oga-chucks_rvmxcf.jpg" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830251/hallelujah-rejoice_e5dmme.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Hallelujah choir</h4>
              <p>Havilla 2018</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830251/hallelujah-rejoice_e5dmme.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
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
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830228/oga-daniel_mops3r.jpg" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594171001/house-5_vgzmx6.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Tunji Ajayi</h4>
              <p>Senior Friend</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594171001/house-5_vgzmx6.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
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
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830243/cross-worship1_sqy9pa.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830156/seye-choir_hztefh.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Worship</h4>
              <p>Senior Friends</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830156/seye-choir_hztefh.jpg" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830190/imma-dan_vtw02a.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Service, 2017</h4>
              <p>Senior Friends</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830190/imma-dan_vtw02a.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-undergrads filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593832751/excos-rev-oyor_evvuq5.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>Excos Visit to Rev. Oyor</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593832751/excos-rev-oyor_evvuq5.jpg" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830155/imma-temi_nheex8.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Service</h4>
              <p>Senior Friends</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830155/imma-temi_nheex8.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830159/havilla-3_lrxftz.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>Havilla '18</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830159/havilla-3_lrxftz.jpg" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830145/imma-ibk_ik4sox.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Service, 2016</h4>
              <p>Senior Friends</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830145/imma-ibk_ik4sox.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-undergrads">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830232/lawfem-worship_furqnm.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>House Retreat 2019</h4>
              <p>Undergrads</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830232/lawfem-worship_furqnm.jpg" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170988/finalists-3_t3u2op.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Finalist Thanksgiving '20</h4>
              <p>Senior Friends</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170988/finalists-3_t3u2op.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170981/finalists-2_wm9eut.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Finalists Thanksgiving '20</h4>
              <p>Senior Friends</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170981/finalists-2_wm9eut.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170986/finalists-1_lls2yf.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Finalists Thanksgiving '20</h4>
              <p>Senior Friends</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170986/finalists-1_lls2yf.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170992/house-3_lwcado.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Worship, 2016</h4>
              <p>Senior Friends</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170992/house-3_lwcado.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170981/house-2_rhksez.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Daniel Olaniyan</h4>
              <p>President, 2015-2017</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170981/house-2_rhksez.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170976/havilla-2_hgaath.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Havilla '18</h4>
              <p>President & Vice President</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170976/havilla-2_hgaath.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170944/daddy-kolade_zshhmu.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Dr. Bayo Kolade</h4>
              <p>Senior Friend</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170944/daddy-kolade_zshhmu.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165442/oyor-wedding-1_ppllzy.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>SCMers</h4>
              <p>Godswill Oyor's Wedding</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165442/oyor-wedding-1_ppllzy.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-undergrads">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165446/poly-outreach-2_tv4zco.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>SCMers</h4>
              <p>Outreach to PolyIbadan</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165446/poly-outreach-2_tv4zco.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-undergrads">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165435/poly-outreach-1_cfquya.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Vigorous Brothers</h4>
              <p>Outreach to PolyIbadan</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165435/poly-outreach-1_cfquya.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-undergrads">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165445/snr-friend-excos_ktjzke.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Service</h4>
              <p>Senior Friend's Visit</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165445/snr-friend-excos_ktjzke.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165441/sekou-fifi_soa3es.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>SCMers</h4>
              <p>With Pastor Sekou</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165441/sekou-fifi_soa3es.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165427/mama-aboaba-2_xyigzj.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>Mama Aboaba Burial</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165427/mama-aboaba-2_xyigzj.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165420/mama-aboaba-1_wttsci.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>Mama Aboaba Burial</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165420/mama-aboaba-1_wttsci.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-undergrads">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165427/niyi-with-house_l6ur0h.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Service</h4>
              <p>Apostle Niyi with Sisters</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165427/niyi-with-house_l6ur0h.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-undergrads">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165414/niyi-with-brothers_eouoau.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Service</h4>
              <p>Apostle Niyi with brothers</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165414/niyi-with-brothers_eouoau.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165415/fifi-birthday_jvai7g.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>President Fifunmi's Birthday, 2019</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165415/fifi-birthday_jvai7g.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165414/excos-aboaba_hejhiu.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>Excos Visit to Prof. Aboaba 2019</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165414/excos-aboaba_hejhiu.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-undergrads">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165403/bsu-night_uigire.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Service</h4>
              <p>Bible Study Unit 2018</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165403/bsu-night_uigire.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165403/atic-group_iwrxm1.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>ATIC 2019, Benin</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165403/atic-group_iwrxm1.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165401/dona-bbp_rsaliv.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>BBP Graduation</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165401/dona-bbp_rsaliv.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165397/excos-retreat_vtad4b.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>Excos Retreat 2018</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165397/excos-retreat_vtad4b.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164422/ibk-moses_uzjgek.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Ibk Moses</h4>
              <p>Senior Friend</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164422/ibk-moses_uzjgek.jpg" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164417/wedding-scm_ilagg3.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>SCM Wedding</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164417/wedding-scm_ilagg3.jpg" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164412/award-sector_yytzug.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>Sectoral Award Night 2019</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164412/award-sector_yytzug.jpg" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events filter undergrads">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164413/havilla-1_g79zdp.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>Havilla 2018</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164413/havilla-1_g79zdp.jpg" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events filter-undergrads">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164412/hallelujah-1_lqozmp.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>Havilla 2019</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164412/hallelujah-1_lqozmp.jpg" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593974769/IMG_6412_ffkocm.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Service</h4>
              <p>Winner Ijebor Osalumese</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1593974769/IMG_6412_ffkocm.jpg" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-undergrads filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164425/house-retreat-1_ubwpvk.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>House Retreat 2018</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164425/house-retreat-1_ubwpvk.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events filter-undergrads">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164425/Screenshot_20190707-153540_dmdzcc.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>Excos with Mrs. Awoshika</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164425/Screenshot_20190707-153540_dmdzcc.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-snrfriend filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594210648/converge-baba-aboaba_w7kt8t.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>SCM UI Patron</h4>
              <p>Prof. Fola Aboaba</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594210648/converge-baba-aboaba_w7kt8t.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164421/havilla-2_j0ghrr.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>Havilla '18</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594164421/havilla-2_j0ghrr.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-undergrads">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165420/fifi-grp_spv0qo.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Service</h4>
              <p>SCMers, 2019</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165420/fifi-grp_spv0qo.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events filter-snrfriend">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165441/oyor-wedding-2_sgpvhy.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>Godswill Oyor's Wedding</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594165441/oyor-wedding-2_sgpvhy.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170963/evangeltainment-7_vgsuym.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>Evangeltainment 2017</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594170963/evangeltainment-7_vgsuym.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events filter-undergrads">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594171010/house-retreat-1_g0kctg.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>House Retreat 18</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594171010/house-retreat-1_g0kctg.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209719/converge-new_nio4kl.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>Converge '16</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209719/converge-new_nio4kl.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209722/converge-new-4_lejim4.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>Converge '18</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209722/converge-new-4_lejim4.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209730/evangeltainment-new-1_xv67bw.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>Evangeltainment</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594209730/evangeltainment-new-1_xv67bw.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-events">
          <div className="portfolio-wrap">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1594210647/evangeltainment-new-6_gapm7x.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Events</h4>
              <p>Evangeltainment</p>
              <div className="portfolio-links">
                <a href="https://res.cloudinary.com/lawfirm1000/image/upload/v1594210647/evangeltainment-new-6_gapm7x.png" data-gall="portfolioGallery" className="venobox" title="view image"><i className="bx bx-plus"></i></a>
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
}