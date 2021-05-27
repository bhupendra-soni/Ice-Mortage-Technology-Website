import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer id="footer" className="new">
                <div className="container pb80">
                    <div className="row links-wrap">
                        <div className="footer__ctas col-lg-4">
                            <div className="footer__ctas--mobile col-lg-8 col-md-12">
                                <a href="/" title="EllieMae">
                                    <span className="brand brand-elliemae brand-white">
                                        <i style={{ background: 'url(/images/logos/footer-ice-mt.svg)' }}></i>
                                    </span></a>
                                <a href="/request-demo" className="btn btn-default" style={{backgroundColor: '#f37f0f', color:'white'}} onclick="window.dataLayer.push({'event':'trackEvent','eventCategory':'cta', 'eventAction':'footer - request free demo', 'eventLabel':'/request-demo','nonInteraction': false});">Request free demo</a>
                                <br />
                                <br />
                                <a href="/contact-sales" className="btn btn-sapphire" onclick="window.dataLayer.push({'event':'trackEvent','eventCategory':'cta', 'eventAction':'footer - contact sales', 'eventLabel':'/contact-sales','nonInteraction': false});">Contact sales</a>
                            </div>
                        </div>

                        <div className="xs-hide col-lg-3 col-md-4 col-sm-5">
                            <p className="h6 text-white text-uppercase frutiger-bold">Solutions:</p>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/digital-lending-platform" className="text-white">ICE Mortgage Technology Platform</a>
                                </li>
                                <li>
                                    <a href="/encompass/encompass-overview" className="text-white">Encompass by ICE Mortgage Technology</a>
                                </li>
                                <li>
                                    <a href="/solutions/consumer-engagement" className="text-white">Consumer Engagement solutions</a>
                                </li>
                                <li><a href="/solutions" className="text-white">All Solutions</a></li>
                            </ul>
                        </div>

                        <div className="xs-hide col-lg-3 col-md-4 col-sm-5">
                            <p className="h6 text-white text-uppercase frutiger-bold">Recommended Links:</p>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/resources/uniform-residential-loan-application" className="text-white">URLA</a>
                                </li>
                                <li>
                                    <a href="/encompass/encompass-lo-connect" className="text-white">Encompass LO Connect</a>
                                </li>
                                <li>
                                    <a href="/millennial-tracker" className="text-white">Millennial Tracker</a>
                                </li>
                                <li>
                                    <a href="/encompass/encompass-investor-connect" className="text-white">Encompass Investor Connect</a>
                                </li>
                                <li>
                                    <a href="/encompass/heloc" className="text-white">HELOC Lending</a>
                                </li>
                                <li>
                                    <a href="/education/education-calendar" className="text-white">Education Calendar</a>
                                </li>
                                <li>
                                    <a href="/marketplace" className="text-white">Marketplace</a>
                                </li>
                            </ul>
                        </div>

                        <div className="xs-hide col-lg-2 col-md-3 col-sm-5">
                            <p className="h6 text-white text-uppercase frutiger-bold">About Us:</p>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/about/company-overview/overview" className="text-white">Why ICE Mortgage Technology</a>
                                </li>
                                <li>
                                    <a href="https://ir.theice.com/home/default.aspx" className="text-white" target="blank">Investor Relations</a>
                                </li>
                                <li>
                                    <a href="/about/careers" className="text-white">Careers</a>
                                </li>
                                <li>
                                    <a href="/about/blog" className="text-white">Blog</a>
                                </li>
                                <li>
                                    <a href="https://experience.elliemae.com" target="_blank" className="text-white">Experience 2022</a>
                                </li>
                                <li>
                                    <a href="/resources/collateral-library" className="text-white">Resources</a>
                                </li>
                                <li>
                                    <a href="/about/contact-us" className="text-white">Contact Us</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    {/* <!-- end: row links-wrap visible-lg-block -->  */}

                    <div className="row footer-logo fs14">
                    <hr />
                        <div className="col-sm-8 col-xs-12 px-lg-0 text-sm-center text-left mb-sm-20">
                            
                            <span className="text-gray">
                                © 2021 <span className="nowrap">ICE Mortgage Technology, Inc.</span>
                                <span className="nowrap">All Rights Reserved.</span>
                            </span>
                            {/* <br className="visible-xs" />  */}
                            <span className="nowrap">
                                <a href="/privacy-policy" className="text-light-gray">Privacy Policy</a>
                                <span className="text-sapphire">|</span>
                                <a href="/terms-of-use" className="text-light-gray">Terms of Use</a>
                            </span>
                        </div>

                        <div className="col-sm-4 col-xs-12 px-lg-0 text-sm-center text-right">
                            <div className="social mb-xs-40">
                                <a className="mx4" href="https://www.facebook.com/ICEMortgageTech" target="_blank" onclick="window.dataLayer.push({'event':'trackEvent','eventCategory':'external links', 'eventAction':'click', 'eventLabel':'https://www.facebook.com/icemortgagetech','nonInteraction': false});">
                                    <img src="https://www.icemortgagetechnology.com/images/footer/icon-fb.svg" className="social-img" alt="Facebook" /></a>
                                    <a className="mx4" href="https://twitter.com/ICEMortgageTech" target="_blank" onclick="window.dataLayer.push({'event':'trackEvent','eventCategory':'external links', 'eventAction':'click', 'eventLabel':'https://twitter.com/icemortgagetech','nonInteraction': false});">
                                        <img src="https://www.icemortgagetechnology.com/images/footer/icon-twitter.svg" className="social-img" alt="Twitter" /></a>
                                        <a className="mx4" href="https://www.linkedin.com/company/icemortgagetechnology/" target="_blank" onclick="window.dataLayer.push({'event':'trackEvent','eventCategory':'external links', 'eventAction':'click', 'eventLabel':'https://www.linkedin.com/company/icemortgagetechnology','nonInteraction': false});">
                                            <img src="https://www.icemortgagetechnology.com/images/footer/icon-linked-in.svg" className="social-img" alt="LinkedIn" /></a>
                                            <a className="mx4" href="https://www.youtube.com/elliemaeinc" target="_blank" onclick="window.dataLayer.push({'event':'trackEvent','eventCategory':'external links', 'eventAction':'click', 'eventLabel':'https://www.youtube.com/elliemaeinc','nonInteraction': false});">
                                                <img src="https://www.icemortgagetechnology.com/images/footer/icon-youtube.svg" className="social-img" alt="YouTube" /></a> 
                                                </div> 
                                                </div>
                                                </div>
                                                </div>
                                                </footer>
                        </div>
    );
};

export default Footer;
