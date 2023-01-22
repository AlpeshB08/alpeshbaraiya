import React from 'react';
import SiteLogo from '../assets/images/site-logo.svg'
import UpArrow from '../assets/images/icons/up-arrow.svg'

const Footer = () => {
    const scrollTop = () => {
        document.querySelector('body').scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <>
           <div className="rn-footer-area rn-section-gap section-separator">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-area text-center">

                                <div className="logo">
                                    <a href="index.html">
                                        <img src={SiteLogo} alt="logo" />
                                    </a>
                                </div>

                                <p className="description mt-30">© 2023. All rights reserved by Alpesh Baraiya</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="backto-top" onClick={scrollTop}>
                <div>
                    <img src={UpArrow} alt="Up Arrow" />
                </div>
            </div>
        </>
    );
};

export default Footer;