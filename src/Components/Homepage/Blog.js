import React from 'react';

export default class Blog extends React.Component {
  render(){
    return (
        <div>
             <section id="blog-posts" className="blog-posts">
     <div className="text-center section-title">
       <h2 className=""><a href="https://scmuiblogcom.wordpress.com" rel="noopener noreferrer" target="_blank">SCM UI BLOG</a></h2>
     </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="card" style={{backgroundImage: 'url("https://res.cloudinary.com/lawfirm1000/image/upload/v1593830160/more-services-1_qcjsan.jpg")'}} data-aos="fade-up" data-aos-delay="100">
            <div className="card-body">
              <h5 className="card-title"><a href="https://scmuiblogcom.wordpress.com/2017/01/09/grace-2/"
                rel="noopener noreferrer" target="_blank">GRACE</a></h5>
              <p className="card-text">By Ann Icha <br/>
              When I clad myself in a cloak,<br/>
              and pour ointment over my face but I mask the death beneath <br/>I expect that you’ll accept me...</p>
              <div className="read-more">
                <a href="https://scmuiblogcom.wordpress.com/2017/01/09/grace-2/"
                rel="noopener noreferrer" target="_blank"><i className="icofont-arrow-right"></i> Read More</a></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
          <div className="card" style={{backgroundImage: 'url("https://res.cloudinary.com/lawfirm1000/image/upload/v1593830261/more-services-2_tvbshb.jpg")'}} data-aos="fade-up" data-aos-delay="200">
            <div className="card-body">
              <h5 className="card-title"><a href="https://scmuiblogcom.wordpress.com/2017/06/18/for-better-for-worse-episode-1/"
              rel="noopener noreferrer" target="_blank">For Better For Worse(1)</a></h5>
              <p className="card-text">Dupe felt a hand on her shoulder,gently shaking her.
‘Wake up, honey. Please.Modupe’’. <br/> From her sleep she could recognise the voice. It was Tomi. Her husband of twelve years. She stirred a bit and the shaking got a bit stronger...</p>
              <div className="read-more"><a href="https://scmuiblogcom.wordpress.com/2017/06/18/for-better-for-worse-episode-1/"
              rel="noopener noreferrer" target="_blank"><i className="icofont-arrow-right"></i> Read More</a></div>
            </div>
          </div>

        </div>
        <div className="col-md-6 d-flex align-items-stretch mt-4">
          <div className="card" style={{backgroundImage: 'url("https://res.cloudinary.com/lawfirm1000/image/upload/v1593830133/more-services-3_trvkfo.jpg")'}} data-aos="fade-up" data-aos-delay="100">
            <div className="card-body">
              <h5 className="card-title"><a href="https://scmuiblogcom.wordpress.com/2016/10/18/lotus-episode-premiere/"
              rel="noopener noreferrer" target="_blank">LOTUS (Episode Premiere)</a></h5>
              <p className="card-text">by Mojola Olaifa <br/> "You have to be kinder to this girl’’ Granny called out as Keziah walked out of the house, leaving the resounding echo of the deliberate bang of the door behind her...</p>
              <div className="read-more"><a href="https://scmuiblogcom.wordpress.com/2016/10/18/lotus-episode-premiere/"
              rel="noopener noreferrer" target="_blank"><i className="icofont-arrow-right"></i> Read More</a></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-stretch mt-4">
          <div className="card" style={{backgroundImage: "url('https://res.cloudinary.com/lawfirm1000/image/upload/v1593830161/more-services-4_tnuaxo.jpg')"}} data-aos="fade-up" data-aos-delay="200">
            <div className="card-body">
              <h5 className="card-title"><a href="https://scmuiblogcom.wordpress.com/2017/01/10/be-still/"
              rel="noopener noreferrer" target="_blank">Be Still</a></h5>
              <p className="card-text">Good afternoon. <br/> I'm going to be sharing some thoughts on Psalms 46:10...</p>
              <div className="read-more"><a href="https://scmuiblogcom.wordpress.com/2017/01/10/be-still/"
              rel="noopener noreferrer" target="_blank"><i className="icofont-arrow-right"></i> Read More</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="see-more" data-aos="fade" data-aos-delay="300">
      <a href="https://scmuiblogcom.wordpress.com"
          rel="noopener noreferrer" target="_blank">
        <button className="btn btn-primary">Read More<i className="icofont-arrow-right"></i></button></a>
        </div>
    </div>
  </section>
        </div>
    )
}
}