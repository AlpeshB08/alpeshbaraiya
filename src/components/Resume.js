import React from 'react';

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
                                    <a className="nav-link active" id="education-tab" data-bs-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="true">education</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="professional-tab" data-bs-toggle="tab" href="#professional" role="tab" aria-controls="professional" aria-selected="false">professional
                                        Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="experience-tab" data-bs-toggle="tab" href="#experience" role="tab" aria-controls="experience" aria-selected="false">experience</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="language-tab" data-bs-toggle="tab" href="#language" role="tab" aria-controls="language" aria-selected="false">Languages</a>
                                </li>
                            </ul>
                            <div className="rn-nav-content tab-content" id="myTabContents">
                                <div className="tab-pane show active fade single-tab-area" id="education" role="tabpanel" aria-labelledby="education-tab">
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
                                <div className="tab-pane fade " id="professional" role="tabpanel" aria-labelledby="professional-tab">
                                    <div className="personal-experience-inner mt-30">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 col-12">
                                                <div className="progress-wrapper">
                                                    <div className="content">
                                                        <span className="subtitle">Skill</span>
                                                        <h4 className="maintitle">Frontend</h4>
                                                        <div className="progress-charts">
                                                            <h6 className="heading heading-h6">HTML</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{width: "100%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">100%</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-charts">
                                                            <h6 className="heading heading-h6">CSS</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style={{width: "100%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">100%</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-charts">
                                                            <h6 className="heading heading-h6">JQUERY</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style={{width: "80%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">80%</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-charts">
                                                            <h6 className="heading heading-h6">JAVASCRIPT</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" style={{width: "70%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">70%</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-charts">
                                                            <h6 className="heading heading-h6">REACT</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay=".7s" role="progressbar" style={{width: "70%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">70%</span></div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-12 mt-lg-30">
                                                <div className="progress-wrapper">
                                                    <div className="content">
                                                        <span className="subtitle">Skill</span>
                                                        <h4 className="maintitle">Frontend</h4>
                                                        <div className="progress-charts">
                                                            <h6 className="heading heading-h6">Sass</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{width: "95%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">95%</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-charts">
                                                            <h6 className="heading heading-h6">Bootstrap</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{width: "95%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">95%</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-charts">
                                                            <h6 className="heading heading-h6">Shopify</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style={{width: "60%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">60%</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-charts">
                                                            <h6 className="heading heading-h6">GIT</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style={{width: "90%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">90%</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-charts">
                                                            <h6 className="heading heading-h6">Next.js</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" style={{width: "70%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">70%</span></div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="experience" role="tabpanel" aria-labelledby="experience-tab">
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
                                <div className="tab-pane fade" id="language" role="tabpanel" aria-labelledby="language-tab">
                                    <div className="personal-experience-inner mt-30">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="progress-wrapper">
                                                    <div className="content">
                                                        <h4 className="maintitle">Languages</h4>
                                                        <div className="progress-charts">
                                                            <h6 className="heading heading-h6">Gujrati</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{width: "100%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">100%</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-charts">
                                                            <h6 className="heading heading-h6">Hindi</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style={{width: "100%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">100%</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-charts">
                                                            <h6 className="heading heading-h6">English</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style={{width: "90%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">90%</span></div>
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
                </div>
            </div> 
        </>
    );
};

export default Resume;