import React from 'react';
import { Link } from "react-router-dom";
import "jquery";

export default class Footer extends React.Component {
  render(){
    return (
<>
  <footer id="footer">
    <div className="container">
        <div className="row d-flex align-items-center">
        <div className="col-lg-6 text-lg-left text-center">
        <div className="copyright">
          &copy; Copyright 2020 | <strong> SCMUI</strong>. All Rights Reserved
            </div>
          </div>
           <div className="col-lg-6">
           <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
          <Link to="/" target="_top" className="scrollto">Home</Link>
          <Link to="/about" target="_top" className="scrollto">About</Link>
          <Link to="/sermon" target="_top">Sermon</Link>
          <a href="https://scmuiblogcom.wordpress.com">Blog</a>
        </nav>
       </div>
      </div>
    </div>
   </footer>
   <a href="#header" target="_top" className="back-to-top"><i className="icofont-simple-up"></i></a>
</>
    )
}
}