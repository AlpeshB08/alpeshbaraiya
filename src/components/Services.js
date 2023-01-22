import React from 'react';
import OptimizationLogo from "../assets/images/icons/optimization.svg"
import ResponsiveLogo from "../assets/images/icons/responsive.svg"
import SearchLogo from "../assets/images/icons/search.svg"
import IdeaLogo from "../assets/images/icons/idea.svg"
import TeamLogo from "../assets/images/icons/team.svg"
import BookLogo from "../assets/images/icons/book.svg"

const Services = () => {
    return (
        <>
           <div className="rn-service-area rn-section-gap section-separator scrollspy-block" id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-left wow fadeInUp" data-wow-duration="0.5s" data-wow-delay=".1s">
                                <span className="subtitle">Features</span>
                                <h2 className="title">What I Do</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row  ">

                        <div data-wow-duration="0.5s" data-wow-delay=".1s" className="wow fadeInUp col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt-30">
                            <div className="rn-service">
                                <div className="inner">
                                    <div className="icon">
                                        <img src={OptimizationLogo} alt="optimization" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Optimizing the user experience</h4>
                                        <p className="description">I make certain that I provide users with the best possible website experience through site optimization as a frontend developer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-wow-duration="0.5s" data-wow-delay=".3s" className="wow fadeInUp col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt-30">
                            <div className="rn-service">
                                <div className="inner">
                                    <div className="icon">
                                        <img src={ResponsiveLogo} alt="responsive" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Responsive web design (RWD)</h4>
                                        <p className="description">It is always my job to test the fluidity of the website so that it is rendered well on a variety of devices and browsers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-wow-duration="0.5s" data-wow-delay=".5s" className="wow fadeInUp col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt-30">
                            <div className="rn-service">
                                <div className="inner">
                                    <div className="icon">
                                        <img src={SearchLogo} alt="search" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Following SEO best practices</h4>
                                        <p className="description">SEO best practices are a set of tasks designed to help improve a website's search engine rankings.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-wow-duration="0.5s" data-wow-delay=".1s" className="wow fadeInUp col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt-30">
                            <div className="rn-service">
                                <div className="inner">
                                    <div className="icon">
                                        <img src={IdeaLogo} alt="idea" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Problem Solving</h4>
                                        <p className="description">I mostly worked on solving JS/jQuery issues, which used to be not only of my projects but mostly of other colleagues.                                        
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-wow-duration="0.5s" data-wow-delay=".3s" className="wow fadeInUp col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt-30">
                            <div className="rn-service">
                                <div className="inner">
                                    <div className="icon">
                                        <img src={TeamLogo} alt="team" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Team Work</h4>
                                        <p className="description">As a team player I always collaborated with other developer to ensure all elements of websites are consistent.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-wow-duration="0.5s" data-wow-delay=".5s" className="wow fadeInUp col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt-30">
                            <div className="rn-service">
                                <div className="inner">
                                    <div className="icon">
                                        <img src={BookLogo} alt="book" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Willingness to learn</h4>
                                        <p className="description">I have a strong willingness to learn and I grasp new concepts and ideas quickly.</p>
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

export default Services;