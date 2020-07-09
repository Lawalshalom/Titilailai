import React, { Component } from 'react';
import "./posts.css";
import { Link } from "react-router-dom";

export default class Posts extends Component {
    render() {
        return (
            <section id="posts" className="posts">
            <div className="container">
                <div className="blog-img post-title" data-aos="fade-right"
                style={{background: "url('https://res.cloudinary.com/lawfirm1000/image/upload/v1593830280/newspaper-new_rbqvqy.png') bottom / cover no-repeat"}}>
                <div data-aos="fade-down">
                <h1 className="text-center">SCM Stories</h1>
                <p>Testimonies from our senior friends!</p>
                </div>
            </div>
            <br/>
          <div className="testimonials row">
            <div className="testimonial-wrap col-lg-6 col-md-6">
          <div className="testimonial-item" data-aos="fade-right" data-aos-delay="200">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830269/adebayo-kolade_alhukh.jpg" className="testimonial-img" alt=""/>
            <h3>Dr. Adebayo Kolade</h3>
            <h4>Ibadan, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              When I joined SCM on Thursday Jan 18 (or 25, not sure) 1990, I did not even know I was joining a fellowship. I was a rather smallish boy from downtown who arrived late to resume. There was no money, so I did not...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#adebayo-kolade" target="_top"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap col-lg-6 col-md-6">
          <div className="testimonial-item" data-aos="fade-left" data-aos-delay="200">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830274/adedimeji-aderonke_tx6v8n.jpg" className="testimonial-img" alt=""/>
            <h3>Adedimeji Aderonke</h3>
            <h4>Connecticut, US</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              While at GCI/QSI, the spiritu santus nature of some of my female Christian classmates used to put me off. They were never smiling, so I did not want anything to do with them. In June, just before my UI  admission...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#adedimeji-aderonke" target="_top"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap col-lg-6 col-md-6">
          <div className="testimonial-item" data-aos="fade-right" data-aos-delay="200">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830269/lanipekun-lawal_wnqb7v.jpg" className="testimonial-img" alt=""/>
            <h3>Pastor Lanipekun Lawal</h3>
            <h4>Lagos, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              I used to be known and addresed as Lawal Lanipekun-Reeves until I got married an my wife and I took the decision to drop all our non-African names and now my names are Adojutelegan Majiya Lanipekun-Lawal. My first encounter...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#lanipekun-lawal" target="_top"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap col-lg-6 col-md-6">
          <div className="testimonial-item" data-aos="fade-left" data-aos-delay="200">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830273/Oridupa_bnl5hb.jpg" className="testimonial-img" alt=""/>
            <h3>Dr. Yinka Oridupa</h3>
            <h4>Ibadan, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              I was admitted to UI in 1997 to study Vet Medicine, so I had in mind to study hard and enjoy myself being my first time away from home. I come from a solid bible-believing background under the tutelage of an IVCU alumnus and...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#yinka-oridupa" target="_top"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap col-lg-6 col-md-6">
          <div className="testimonial-item" data-aos="fade-right" data-aos-delay="200">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830269/kuforiji_sgv5be.jpg" className="testimonial-img" alt=""/>
            <h3>Dr. Kuforiji Gbenga</h3>
            <h4>Lagos, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              I gained admission to UI to study Veterinary Medicine in the year 1990. I came from a church background which encouraged me to join a Bible believing fellowship as soon as I got to school. I stayed in independence hall room A1 in my...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#kuforiji-gbenga" target="_top"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap col-lg-6 col-md-6">
          <div className="testimonial-item" data-aos="fade-left" data-aos-delay="200">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830266/ipinmoye_l6tmmy.jpg" className="testimonial-img" alt=""/>
            <h3>Omolayo Ipinmoye</h3>
            <h4>Lagos, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Good day beloved,  the story of my Christian journey is incomplete  without SCM UI where the seed of my salvation was watered, nourished and ever since has been growing. My encounter with the fellowship started around this time 29 yrs ago when...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#omolayo-ipinmoye" target="_top"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap col-lg-6 col-md-6">
          <div className="testimonial-item" data-aos="fade-right" data-aos-delay="200">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830279/Dave-Fadugba_spg03o.jpg" className="testimonial-img" alt=""/>
            <h3>Ven Dave Fadugba</h3>
            <h4>Ogun, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              I was introduced to SCM during my HSC days at Ilesa Grammar School, Ilesa but I wasn’t really serious with it then. When I got to UI in 1985, there was a vigorous evangelism going on then. I had read in one of the novels (Pacesetters series) about...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#dave-fadugba" target="_top"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap col-lg-6 col-md-6">
          <div className="testimonial-item" data-aos="fade-left" data-aos-delay="200">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830272/prof-saba_ntqx3g.jpg" className="testimonial-img" alt=""/>
            <h3>Prof A. B. Saba</h3>
            <h4>Ibadan, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              I had shared a part of this story at the outset of this platform.I started my Christianity as a member of FCS (Fellowship of Christian Students) in my secondary school.In my first few weeks in UI I joined IVCU in 1985.It was my first fellowship...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#prof-saba" target="_top"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap col-lg-6 col-md-6">
          <div className="testimonial-item" data-aos="fade-right" data-aos-delay="200">
            <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1593830273/osunberu_fyeavp.jpg" className="testimonial-img" alt=""/>
            <h3>Dr. Kemi Osunberu</h3>
            <h4>Ibadan, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              I am Oluwakemi Osunberu (nee Ero-Phillips). Course Vet. Med. Hall: IdiaSubgroup: Evangelism/Follow-upDuration of Stay: 1989/1990 to 1997 (Courtesy: ASUU Strikes)I joined SCM in January 1990 as a Christian from Secondary School. I attended the fellowship...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#kemi-osunberu" target="_top"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap col-lg-6 col-md-6">
          <div className="testimonial-item" data-aos="fade-left" data-aos-delay="200">
            <h3>Doyin Obasa</h3>
            <h4>Lagos, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              My SCM Journey ran concurrently from Secondary School to SCM UI.I started fellowshipping with SCM UI in 1988 with my senior sister Fadekemi Oyewusi and was handed over to sis. Busola, Sis. Bibi and bro. Dele Odeniyi when she finished UI.I witnessed...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#doyin-obasa" target="_top"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap col-lg-6 col-md-6">
          <div className="testimonial-item" data-aos="fade-right" data-aos-delay="200">
            <h3>Temidayo Ogunleye Ajakaiye</h3>
            <h4>Lagos, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              My SCM journey started in my final year at a “girls” secondary school when a young man who had a sibling in my class came from OAU to do his teaching practice. I had always thought that this classmate of mine, Dupe had something special about her but...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#temidayo-ogunleye" target="_top"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap col-lg-6 col-md-6">
          <div className="testimonial-item" data-aos="fade-left" data-aos-delay="200">
            <h3>Pastor Kolapo Taiwo Oluseye</h3>
            <h4>Lagos, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              We (myself, Brother Tenu Adeosun and Brother Okikiolu Babatunde) gained admission to UI from Government College Ibadan after our Upper 6, but we all came as Prelim Student. Before now, the 3 of us got born again while in GCI, and started the GCI/QSI Christian...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#kolapo-taiwo" target="_top"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap col-lg-6 col-md-6">
          <div className="testimonial-item" data-aos="fade-right" data-aos-delay="200">
            <h3>Wura Lasaki Olugbenga</h3>
            <h4>Ibadan, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              I was born in a Muslim home but was caught up in an  encounter while in secondary school.  Couldn’t attend any fellowship then outside school hours because either my Dad or Mom would be  waiting to pick me home immediately after school hours.  During my A’Level...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#wura-lasaki" target="_top"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap col-lg-6 col-md-6">
          <div className="testimonial-item" data-aos="fade-left" data-aos-delay="200">
            <h3>Bro Collins Ejikeme</h3>
            <h4>Lagos, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              My story is more like a testimony.  I had issue with my admission letter. I did not get it at home and I had to travel 6 hours from ONITSHA to ibadan. I did not know anybody and I came alone. I only had a letter from my secondary school chemistry teacher to stay with...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#collins-ejikeme" target="_top"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap col-lg-6 col-md-6">
          <div className="testimonial-item" data-aos="fade-right" data-aos-delay="200">
            <h3>Rev. Jaye Fadayomi</h3>
            <h4>Lagos, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Around the time Bro Lekan Oyewande was to be made the Bible Study Secretary he invited me to his fellowship for that evening.I did not go. I was a member of a fellowship that belonged to a church which I joined from home. This was in 1991.Bro Lekan and I were in the...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#jaye-fadayomi" target="_top"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap col-lg-6 col-md-6">
          <div className="testimonial-item" data-aos="fade-left" data-aos-delay="200">
            <h3>Sis Temitope Ayeni Fagade</h3>
            <h4>Ibadan, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Contrary to the experience many others told about their salvation experience, I had “gradually warmed up” to the Gospel before giving my life on the 13th May, 1993. I received my first invitation to attend a fellowship on campus (SCM), during my second year. I had been...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#temitope-ayeni" target="_top"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap col-lg-6 col-md-6">
          <div className="testimonial-item" data-aos="fade-right" data-aos-delay="200">
            <h3>Bro Jabeez</h3>
            <h4>Lagos, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              I entered UI specifically January 15, 1990 for medicine and surgery. Then, I was not clear yet which fellowship to join. But an interdenominational fellowship would be a good one. We had something like that in GCI (Govt College, Ibadan) where I had my A levels. There was a...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#jabeez" target="_top"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap col-lg-6 col-md-6">
          <div className="testimonial-item" data-aos="fade-left" data-aos-delay="200">
            <h3>David Obasa</h3>
            <h4>Lagos, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Let me tell mine. When I got to UI 1993/94 Set (I came as a Christian), I naturally joined the student fellowship of my (then) church which was pastored by my cousin.I was there for a whole semester (plus the period of strike). I was forcing myself to stay there more out of denominational...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#david-obasa" target="_top"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap col-lg-6 col-md-6">
          <div className="testimonial-item" data-aos="fade-right" data-aos-delay="200">
            <h3>Paul Gurgur</h3>
            <h4>Lagos, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Mine may not be as spectacular as a few as I have been privileged to read, sovour and relish with some deep sense of nostalgia on this platform, but I’d start from somewhere. I’d like to deeply express my profound appreciation to our ever amiable Sister Ronke and Bro Bisi (who actually contacted...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#paul-gurgur" target="_top"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        <div className="testimonial-wrap col-lg-6 col-md-6">
          <div className="testimonial-item" data-aos="fade-left" data-aos-delay="200">
            <h3>Bro Victor Oladimeji</h3>
            <h4>Lagos, Nigeria</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              The story of my life as a Christian and SCMer actually began in university of Ibadan in 1987. Not really sure of the date now. I remembered when I wrote my jamb I became very apprehensive of the result because I was not able to complete the maths exam. I became troubled not sure if I would spend more...
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <Link to="/testimonies#victor-oladimeji" target="_top"><i className="icofont-arrow-right"></i> Read More</Link>
          </div>
        </div>

        </div>
      </div>
    </section>
        )
    }
}
