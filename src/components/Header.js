import React, {useEffect} from 'react';
import {BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import SiteLogo from '../assets/images/site-logo.svg';
import MenuIcon from '../assets/images/icons/menu.svg';

const Header = () => {

    useEffect(() => {
        window.addEventListener('scroll', () => {
            isSticky();
            scrollspy();
        });
        return () => {
            window.addEventListener('scroll', () => {
                isSticky();
                scrollspy();
            });
        };
    });

    const isSticky = (e) => {
        const header = document.querySelector('.site-header');
        const scrollTop = window.scrollY;
        scrollTop >= 10 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };

    const scrollspy = () => {
        let sTop = window.scrollY;
        let scrollBlock = document.querySelectorAll('.scrollspy-block');
        for(let j = 0; j < scrollBlock.length; j++) {
            let id = scrollBlock[j].getAttribute('id'),
            offset = scrollBlock[j].offsetTop - 10,
            height = scrollBlock[j].offsetHeight;
            if (sTop >= offset && sTop < offset + height) {
                let navLinks = document.querySelectorAll(".mainmenu-nav .nav-link");
                for(var k = 0; k < navLinks.length; k++) {
                    navLinks[k].classList.remove('current');
                }
                let cur_link = document.querySelector('.mainmenu-nav .primary-menu li a[data-id = '+id+']');
                cur_link.classList.add('current');
            }

        }
    }

    const handleClickScroll = (e) => {
        document.querySelector('.popup-mobile-menu').classList.remove('menu-open');
        document.querySelector('html').classList.remove('menu-open');
        let navLinks = document.querySelectorAll(".mainmenu-nav .nav-link");
        for(var i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('current');
        }
        e.target.classList.add('current');
        const element = document.getElementById(e.target.getAttribute('data-id'));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const menuOpen = () => {
        document.querySelector('.popup-mobile-menu').classList.toggle('menu-open');
        document.querySelector('html').classList.toggle('menu-open');
    }

    return (
        <>
        <Router>
           <header className="rn-header site-header haeder-default black-logo-version header--fixed header--sticky">
                <div className="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
                    <div className="col-lg-3 col-7">
                        <div className="header-left">
                            <div className="logo">
                                <Link to="/">
                                    <img src={SiteLogo} alt="Alpesh Baraiya" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-5">
                        <div className="header-center">
                            <nav id="sideNav" className="mainmenu-nav navbar-example2 d-none d-xl-block onepagenav">
                                <ul className="primary-menu nav nav-pills">
                                    <li className="nav-item"><NavLink className="nav-link" to="/" data-id="home" onClick={(e) => handleClickScroll(e)}>Home</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/" data-id="features" onClick={(e) => handleClickScroll(e)}>Features</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/" data-id="portfolio" onClick={(e) => handleClickScroll(e)}>Portfolio</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/" data-id="resume" onClick={(e) => handleClickScroll(e)}>Resume</NavLink></li>
                                </ul>
                            </nav>
                            <div className="header-right">
                                <div className="hamberger-menu d-block d-xl-none">
                                    <i id="menuBtn" className="feather-menu humberger-menu" onClick={menuOpen}>
                                        <img src={MenuIcon} alt="menu" />
                                    </i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
            <div className="popup-mobile-menu">
                <div className="inner">
                    <div className="menu-top">
                        <div className="menu-header">
                            <a className="logo" href="index.html">
                                <img src={SiteLogo} alt="Alpesh Baraiya" />
                            </a>
                            <div className="close-button" onClick={menuOpen}>
                                <button className="close-menu-activation close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <ul className="primary-menu nav nav-pills onepagenav">
                        <li className="nav-item"><NavLink className="nav-link" to="/" data-id="home" onClick={(e) => handleClickScroll(e)}>Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/" data-id="features" onClick={(e) => handleClickScroll(e)}>Features</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/" data-id="portfolio" onClick={(e) => handleClickScroll(e)}>Portfolio</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/" data-id="resume" onClick={(e) => handleClickScroll(e)}>Resume</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Router>
        </>
    );
};

export default Header;