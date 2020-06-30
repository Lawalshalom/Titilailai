import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
          <nav className="nav-menu d-none d-lg-block">
            <ul>
                <li className="active"><Link to="/">Home</Link></li>
                <li className="drop-down"><a href="/about">Explore!</a>
                  <ul>
                    <li><Link to="/stories">SCM Stories</Link></li>
                    <li className="drop-down"><Link to="/about">Who We Are</Link>
                        <ul>
                          <li><Link to="/about">Our Vision</Link></li>
                          <li><Link to="/about#mission">Our Mission</Link></li>
                          <li><Link to="/team">Our Executive Team</Link></li>
                          <li><Link to="/about#history">Our History</Link></li>
                          <li><Link to="/belief">Our Beliefs</Link></li>
                        </ul>
                            </li>
                    <li><Link to="/sermon">Sermon</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/affiliations">Affiliations</Link></li>
                  </ul>
                </li>
                <li><Link to="/#services">Services</Link></li>
                <li><Link to="/Gallery">Gallery</Link></li>
                <li><Link to="/#team">Executives</Link></li>
                <li><Link to="/give">Give</Link></li>
                <li><Link to="#contact">Contact Us</Link></li>
                <li className="get-started"><Link to="/#contact">Get Started</Link></li>
            </ul>
        </nav>
     </>
    )
}
