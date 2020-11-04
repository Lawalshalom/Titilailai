import React, { useEffect } from 'react';

const Header = (props) => {
    useEffect(() => {
        const li = document.querySelectorAll('a');
        li.forEach(item => {
            if(item.classList.contains('active')){
            item.classList.remove('active');
            }
            return item;
        });
        switch (props.page) {
            case 'home':
                li[0].classList.add('active');
                break;
            case 'story':
                li[1].classList.add('active');
                break;
            case 'church':
                li[2].classList.add('active');
                break;
            case 'reception':
                li[3].classList.add('active');
                break;
            case 'gifts':
                li[4].classList.add('active');
                break;
            case 'photos':
                li[5].classList.add('active');
                break;
            default:
                break;
        }
    })

    useEffect(() => {
        const hamburger = document.querySelector('.hamburger-menu');
        const siteNav = document.querySelector('.site-navigation');
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            siteNav.classList.toggle('show');
        });

    })
    return (
        <div className="header site-navigation d-flex justify-content-center align-items-center">

            <ul className="d-flex flex-column flex-md-row flex-lg-row justify-content-center align-items-center">
                <li><a href="/">#TÍTÍLÁÍLÁÍ WEDDING</a></li>
                <li><a href="/story">OUR STORY</a></li>
                <li><a href="/church">CHURCH WEDDING</a></li>
                <li><a href="/reception">RECEPTION</a></li>
                <li><a href="/gifts">GIFTS</a></li>
                <li><a href="/photos">PHOTOS</a></li>
            </ul>

            <div className="hamburger-menu d-md-none d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

            <div className="nav-logo">
                <div className="container d-flex">
                    <img src="logo-1.png" alt="logo" />
                </div>
            </div>
        </div>
    )
};
export default Header;
