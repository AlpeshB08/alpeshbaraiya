import React from 'react';
// import { TypeAnimation } from 'react-type-animation';
import Typed from "react-typed"
import BannerImage from '../assets/images/banner-image.png'
import HTMLLogo from '../assets/images/icons/html.png'
import CSSLogo from '../assets/images/icons/css.png'
import JsLogo from '../assets/images/icons/js.png'
import ReactLogo from '../assets/images/icons/react.png'
import LinkedinLogo from '../assets/images/icons/linkedin.svg'
import GithubLogo from '../assets/images/icons/github.svg'
import CodePenLogo from '../assets/images/icons/codepen.svg'
import CodeSandBoxLogo from '../assets/images/icons/codesandbox.svg'

const Banner = () => {
    return (
        <>
            <div id="home" className="rn-slider-area scrollspy-block">
                <div className="slide slider-style-1">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="order-2 order-lg-1 col-lg-7  mt-lg-30">
                                <div className="content">
                                    <div className="inner">
                                        <span className="subtitle">Welcome to my world</span>
                                        <h1 className="title">Hi, I'm <span>Alpesh Baraiya</span><br />
                                            <span className="header-caption" id="page-top">
                                                <span className="cd-headline clip is-full-width">
                                                    <span>a </span>
                                                    <span className="cd-words-wrapper">
                                                        <Typed
                                                            strings={[
                                                                    "Frontend Developer.",
                                                                    "Professional Coder.",
                                                                    "Team Player.",
                                                                ]}
                                                            typeSpeed={20}
                                                            backSpeed={20}
                                                            loop
                                                            />
                                                    </span>
                                                </span>
                                            </span>
                                        </h1>

                                        <div>
                                            <p className="description">As a front-end developer I build the front-end portion of websites and web applications—that is, the part that users actually see and interact with. I creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app.</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                                            <div className="social-share-inner-left">
                                                <span className="title">find with me</span>
                                                <ul className="social-share d-flex liststyle">
                                                    <li className="linkedin"><a  rel="noreferrer" title="LinkedIn" href="https://www.linkedin.com/in/alpesh-baraiya-24b462114/" target="_blank">
                                                        <img src={LinkedinLogo} alt="linkedin" /></a>
                                                    </li>
                                                    <li className="github"><a  rel="noreferrer" title="Github" href="https://github.com/AlpeshB08" target="_blank">
                                                        <img src={GithubLogo} alt="Github"/></a>
                                                    </li>
                                                    <li className="codepen">
                                                        <a  rel="noreferrer" title="CodePen" href="https://codepen.io/ab_baraiya" target="_blank">
                                                        <img src={CodePenLogo} alt="CodePen"/></a>
                                                    </li>
                                                    <li className="codesandbox">
                                                        <a  rel="noreferrer" title="CodeSandbox" href="https://codesandbox.io/u/AlpeshB08" target="_blank">
                                                        <img src={CodeSandBoxLogo} alt="CodeSandbox"/></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt-sm-30">
                                            <div className="skill-share-inner">
                                                <span className="title">best skill on</span>
                                                <ul className="skill-share d-flex liststyle">
                                                    <li title="HTML"><span><img src={HTMLLogo} alt="HTML" /></span></li>
                                                    <li title="CSS"><span><img src={CSSLogo} alt="CSS" /></span></li>
                                                    <li title="JS"><span><img src={JsLogo} alt="JS" /></span></li>
                                                    <li title="React"><span><img src={ReactLogo} alt="React" /></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 order-lg-2 col-lg-5">
                                <div className="thumbnail">
                                    <div className="inner">
                                        <img src={BannerImage} alt="Alpesh Baraiya" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default Banner;