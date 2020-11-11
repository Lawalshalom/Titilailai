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
        <div className="header site-navigation d-flex justify-content-center align-items-center" id="header">

            <ul className="justify-content-end align-items-center">
                <div className="container d-flex flex-column nav-menu flex-md-row flex-lg-row justify-content-end">
                    <li><a href="/">#TÍTÍLÁÍLÁÍ</a></li>
                    <li><a href="/story">OUR STORY</a></li>
                    <li><a href="/#church">CHURCH WEDDING</a></li>
                    <li><a href="/#reception">RECEPTION</a></li>
                    <li><a href="/#gifts">GIFTS</a></li>
                </div>
            </ul>

            <div className="hamburger-menu d-md-none d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

            <div className="nav-logo">
                <div className="container d-flex">
                    <a href="/"><img src="icons/logo.png" alt="logo" /></a>
                </div>
            </div>
        </div>
    )
};
export default Header;
