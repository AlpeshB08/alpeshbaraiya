import React from 'react';
import HTMLLogo from '../assets/images/icons/html.png'
import CSSLogo from '../assets/images/icons/css.png'
import JsLogo from '../assets/images/icons/js.png'
import ReactLogo from '../assets/images/icons/react.png'
import NextLogo from '../assets/images/icons/nextjs.svg'
import SassLogo from '../assets/images/icons/sass.png'
import BootstrapLogo from '../assets/images/icons/bootstrap.png'
import jQueryLogo from '../assets/images/icons/jquery.png'
import ShopifyLogo from '../assets/images/icons/shopify.png'
import GitLogo from '../assets/images/icons/git.png'
import LocationIcon from '../assets/images/icons/location.svg'
import EmailIcon from '../assets/images/icons/email.svg'
import PhoneIcon from '../assets/images/icons/phone.svg'

const Resume = () => {
    return (
        <>
           <div className="rn-resume-area rn-section-gap section-separator scrollspy-block" id="resume">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="subtitle">3+ Years of Experience</span>
                                <h2 className="title">My Resume</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-30">
                        <div className="col-lg-12">
                            <ul className="rn-nav-list nav nav-tabs" id="myTabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="experience-tab" data-bs-toggle="tab" href="#experience" role="tab" aria-controls="experience" aria-selected="false">experience</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="professional-tab" data-bs-toggle="tab" href="#professional" role="tab" aria-controls="professional" aria-selected="false">professional
                                        Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="education-tab" data-bs-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="true">education</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">contacts</a>
                                </li>
                            </ul>
                            <div className="rn-nav-content tab-content" id="myTabContents">
                                <div className="tab-pane show active fade" id="experience" role="tabpanel" aria-labelledby="experience-tab">
                                    <div className="personal-experience-inner mt-30">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 col-12">
                                                <div className="content">
                                                    <span className="subtitle">2019 - 2021</span>
                                                    <h4 className="maintitle">Job Experience</h4>
                                                    <div className="experience-list">
                                                        <div className="resume-single-list">
                                                            <div className="inner">
                                                                <div className="heading">
                                                                    <div className="title">
                                                                        <h4>TatvaSoft</h4>
                                                                        <span>Software Engineer</span>
                                                                    </div>
                                                                </div>
                                                                <p className="description">Following is an overview of my role and responsibilities.</p>
                                                                <ul>
                                                                    <li>Specialized in website design, determining the structure and design of web pages with reusable code that enhances site performance.</li>
                                                                    <li>Worked in team of 30+ frond-end developers harmoniously, also collaborated with backend developers and testers to ensure all elements of websites are consistent</li>
                                                                    <li>Ensured the technology implemented promoted efficiency, speed, and smooth functionality</li>
                                                                    <li>Worked to create tools that enhanced user interaction in any browser</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-12 mt-lg-30">
                                                <div className="content">
                                                    <span className="subtitle">2021 - Till Date</span>
                                                    <h4 className="maintitle">Job Experience</h4>
                                                    <div className="experience-list">
                                                        <div className="resume-single-list">
                                                            <div className="inner">
                                                                <div className="heading">
                                                                    <div className="title">
                                                                        <h4>ZealousWeb Technologies Pvt. Ltd.</h4>
                                                                        <span>Frontend Developer</span>
                                                                    </div>
                                                                </div>
                                                                <p className="description">Following is an overview of my role and responsibilities.</p>
                                                                <ul>
                                                                    <li>Implemented UI/UX design given in figma, photoshop, sketch using front-end techs, also ensured cross browser compatibility of websites.</li>
                                                                    <li>Mostly worked on solving JS/jQuery issues, which used to be not only of my projects but mostly of other colleagues</li>
                                                                    <li>Made high level contributions to a team leading site optimizations.</li>
                                                                    <li>Work to solve complex challenges with the utilization of modern web application development processes and standard methodologies</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade " id="professional" role="tabpanel" aria-labelledby="professional-tab">
                                    <div className="personal-experience-inner mt-30">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="progress-wrapper">
                                                    <div className="content">
                                                        <span className="subtitle">Skill</span>
                                                        <h4 className="maintitle">Frontend</h4>
                                                        <ul className="skill-share d-flex liststyle">
                                                            <li title="HTML"><span><img src={HTMLLogo} alt="HTML" /></span></li>
                                                            <li title="CSS"><span><img src={CSSLogo} alt="CSS" /></span></li>
                                                            <li title="JavaScript"><span><img src={JsLogo} alt="JavaScript" /></span></li>
                                                            <li title="jQuery"><span><img src={jQueryLogo} alt="jQuery" /></span></li>
                                                            <li title="React"><span><img src={ReactLogo} alt="React" /></span></li>
                                                            <li title="Next.js"><span><img src={NextLogo} alt="Next.js" /></span></li>
                                                            <li title="Sass"><span><img src={SassLogo} alt="Sass" /></span></li>
                                                            <li title="Bootstrap"><span><img src={BootstrapLogo} alt="Bootstrap" /></span></li>
                                                            <li title="Shopify"><span><img src={ShopifyLogo} alt="Shopify" /></span></li>
                                                            <li title="GIT"><span><img src={GitLogo} alt="GIT" /></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade single-tab-area" id="education" role="tabpanel" aria-labelledby="education-tab">
                                    <div className="personal-experience-inner mt-30">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 col-12">
                                                <div className="content">
                                                    <span className="subtitle">2013 - 2015</span>
                                                    <h4 className="maintitle">Educational Qualifications</h4>
                                                    <div className="experience-list">
                                                        <div className="resume-single-list">
                                                            <div className="inner">
                                                                <div className="heading">
                                                                    <div className="title">
                                                                        <h4>SSC</h4>
                                                                        <span>Gujarat Secondary Education Board ( 2013 )</span>
                                                                    </div>
                                                                    <div className="date-of-time">
                                                                        <span>68.83%</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="resume-single-list">
                                                            <div className="inner">
                                                                <div className="heading">
                                                                    <div className="title">
                                                                        <h4> HSC </h4>
                                                                        <span>Gujarat Secondary and Higher Secondary Education Board ( 2015 )</span>
                                                                    </div>
                                                                    <div className="date-of-time">
                                                                        <span>66.61%</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-12  mt-lg-30">
                                                <div className="content">
                                                    <span className="subtitle">2015 - 2019</span>
                                                    <h4 className="maintitle">Educational Qualifications</h4>
                                                    <div className="experience-list">
                                                        <div className="resume-single-list">
                                                            <div className="inner">
                                                                <div className="heading">
                                                                    <div className="title">
                                                                        <h4>Computer Engineering (BE)</h4>
                                                                        <span>Gujarat Technological University (2015 - 2019)</span>
                                                                    </div>
                                                                    <div className="date-of-time">
                                                                        <span>7.25(CGPA)</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <div className="personal-experience-inner mt-30">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="progress-wrapper">
                                                    <div className="content">
                                                    <span className="subtitle">Connect</span>
                                                        <h4 className="maintitle">Contact Details</h4>
                                                        <ul className='liststyle contact-details'>
                                                            <li>
                                                                <img src={PhoneIcon} alt="Phone" />
                                                                <a href="tel:+917016911854">7016911854</a>
                                                            </li>
                                                            <li>
                                                                <img src={EmailIcon} alt="Email" />
                                                                <a href="mailto:alpesh.baraiya08@gmail.com">alpesh.baraiya08@gmail.com</a>
                                                            </li>
                                                            <li>
                                                                <img src={LocationIcon} alt="Location" />
                                                                <span>Ahmedabad</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default Resume;