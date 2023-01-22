import React from 'react';
import Wymap from '../assets/images/portfolio/wymap.png'
import rheGlobal from '../assets/images/portfolio/rhe-global.png'
import TPC from '../assets/images/portfolio/tpc.png'
import Lucence from '../assets/images/portfolio/lucence.png'
import Scholastic from '../assets/images/portfolio/scholastic.png'
import mutahMarriage from '../assets/images/portfolio/mutah-marriage.png'

const Portfolio = () => {
    return (
        <>
           <div className="rn-portfolio-area rn-section-gap section-separator scrollspy-block" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="subtitle">Visit my portfolio</span>
                                <h2 className="title">My Portfolio</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div data-wow-duration="0.5s" data-wow-delay=".1s" className="wow fadeInUp col-lg-6 col-xl-4 col-md-6 col-12 mt-30">
                            <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#wymap-group">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <img src={Wymap} alt="Wymap" />
                                    </div>
                                    <div className="content">
                                        <div className="category-info">
                                            <div className="category-list">React, Material UI</div>
                                        </div>
                                        <h4 className="title">Website Designed in React for Wymap Group</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-wow-duration="0.5s" data-wow-delay=".3s" className="wow fadeInUp col-lg-6 col-xl-4 col-md-6 col-12 mt-30">
                            <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#rhe-global">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <img src={rheGlobal} alt="RHE Global" />
                                    </div>
                                    <div className="content">
                                        <div className="category-info">
                                            <div className="category-list">React, Next.js, HTML, CSS</div>
                                            
                                        </div>
                                        <h4 className="title">Website Designed in Next.js for RHE Global</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-wow-duration="0.5s" data-wow-delay=".1s" className="wow fadeInUp col-lg-6 col-xl-4 col-md-6 col-12 mt-30">
                            <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#tpc">
                                <div className="inner">
                                    <div className="thumbnail">
                                            <img src={TPC} alt="TPC" />
                                    </div>
                                    <div className="content">
                                        <div className="category-info">
                                            <div className="category-list">React, HTML, CSS
                                            </div>
                                        </div>
                                        <h4 className="title">Website Designed in React for GEC Bhavnagar</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-wow-duration="0.5s" data-wow-delay=".5s" className="wow fadeInUp col-lg-6 col-xl-4 col-md-6 col-12 mt-30">
                            <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#lucence">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <img src={Lucence} alt="Lucence" />
                                    </div>
                                    <div className="content">
                                        <div className="category-info">
                                            <div className="category-list">HTML, CSS, JavaScript, Gsap</div>
                                        </div>
                                        <h4 className="title">
                                            Website Designed in HTML/CSS/Javascript for Lucence Company
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-wow-duration="0.5s" data-wow-delay=".3s" className="wow fadeInUp col-lg-6 col-xl-4 col-md-6 col-12 mt-30">
                            <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#scholastic">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <img src={Scholastic} alt="Scholastic" />
                                    </div>
                                    <div className="content">
                                        <div className="category-info">
                                            <div className="category-list">HTML, CSS, jQuery</div>
                                        </div>
                                        <h4 className="title">
                                            Website Designed in HTML/CSS/jQuery for Scholastic Group
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-wow-duration="0.5s" data-wow-delay=".5s" className="wow fadeInUp col-lg-6 col-xl-4 col-md-6 col-12 mt-30">
                            <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#mutah-marriage">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <img src={mutahMarriage} alt="Mutah Marriage" />
                                    </div>
                                    <div className="content">
                                        <div className="category-info">
                                            <div className="category-list">
                                                React, Material UI
                                            </div>
                                        </div>
                                        <h4 className="title">
                                            Website Designed in React for Mutah Marriage
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            {/* Modal Part */}
            <div className="modal fade" id="wymap-group" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row align-items-center">

                                <div className="col-lg-6">
                                    <div className="portfolio-popup-thumbnail">
                                        <div className="image">
                                            <img className="w-100" src={Wymap} alt="Wymap" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="text-content">
                                        <h3>
                                            <span>React, Material UI </span> Website Designed in React for Wymap Group
                                        </h3>
                                        <p >Wymap Group is the leading Australian Airside Resource Company providing services to the airfreight, airport and airline industries. Wymap Group has been providing specialist services to some of the largest airlines, express and freight forwarders on a global scale.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="rhe-global" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row align-items-center">

                                <div className="col-lg-6">
                                    <div className="portfolio-popup-thumbnail">
                                        <div className="image">
                                            <img className="w-100" src={rheGlobal} alt="RHE Global" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="text-content">
                                        <h3>
                                            <span>React, Next.js, HTML, CSS </span> Website Designed in Next.js for RHE Global
                                        </h3>
                                        <p >RHE are a trusted business and innovation partner creating a nationwide knowledge management network for public protection in Australia. RHE provides products and services to the public and private sectors.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade"  id="tpc" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row align-items-center">

                                <div className="col-lg-6">
                                    <div className="portfolio-popup-thumbnail">
                                        <div className="image">
                                            <img className="w-100" src={TPC} alt="TPC" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="text-content">
                                        <h3>
                                            <span>React, HTML, CSS </span> Website Designed in React for GEC Bhavnagar
                                        </h3>
                                        <p >Training and Placement Cell website designed for Goverement Engineering College Bhavnagar to track the placement record and share placement news to the students of GEC bhavnagar.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="lucence" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row align-items-center">

                                <div className="col-lg-6">
                                    <div className="portfolio-popup-thumbnail">
                                        <div className="image">
                                            <img className="w-100" src={Lucence} alt="Lucence" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="text-content">
                                        <h3>
                                            <span>HTML, CSS, JavaScript, Gsap</span> Website Designed in HTML/CSS/Javascript for Lucence Company
                                        </h3>
                                        <p >Lucence is a precision oncology company with the vision of a world without avoidable cancer deaths. The company develops advanced liquid biopsy blood technology and tests.</p>
                                        <a rel="noreferrer" href="https://www.lucence.com/" target="_blank" className="rn-btn mt-30"> 
                                            <span>View Project</span> 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="scholastic" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row align-items-center">

                                <div className="col-lg-6">
                                    <div className="portfolio-popup-thumbnail">
                                        <div className="image">
                                            <img className="w-100" src={Scholastic} alt="Scholastic" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="text-content">
                                        <h3>
                                            <span>HTML, CSS, jQuery</span> Website Designed in HTML/CSS/jQuery for Scholastic Group
                                        </h3>
                                        <p >Scholastic Corporation is an American multinational publishing, education, and media company that publishes and distributes books, comics, and educational materials for schools, parents, and children.</p>
                                        <a rel='noreferrer' href="http://teacher.scholastic.com/education/pre-k-on-my-way/index.html" target="_blank" className="rn-btn mt-30"> 
                                            <span>View Project</span> 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="mutah-marriage" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row align-items-center">

                                <div className="col-lg-6">
                                    <div className="portfolio-popup-thumbnail">
                                        <div className="image">
                                            <img className="w-100" src={mutahMarriage} alt="mutahMarriage" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="text-content">
                                        <h3>
                                            <span>React, Material UI</span> Website Designed in React for Mutah Marriage
                                        </h3>
                                        <p >Mut’ah Marriage (meaning Pleasure Marriage) is a form of marriage contract between a man and a woman that is practiced in Islam, especially by Twelver Shia Muslims, in which the duration of the marriage and the dowry must be accurately specified and agreed upon in advance by both parties.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal Part */}
        </>
    );
};

export default Portfolio;