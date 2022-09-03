import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';

var bgimage = require('./../../images/background/bg-site.png');

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.currentstate = {logo: require('./../../images/logo-dark.png').default};
    }
    
    updateFooterLogo = (updatedlogo) => {this.currentstate.logo = updatedlogo.default;}

    render() {
        
        return (
            <>
                <footer className="site-footer footer-large  footer-dark	footer-wide">
                    <div className="container call-to-action-wrap bg-no-repeat bg-center" style={{ backgroundImage: 'url('+bgimage.default+')' }}>
                        <div className="p-a30 bg-primary ">
                            <div className="row">
                                <div className="col-md-8 col-sm-8">
                                    <div className="call-to-action-left text-black">
                                        <h4 className="text-uppercase m-b10 m-t0">Subscribe to our newsletter!</h4>
                                        <span>Never Miss Anything From Construx By Signing Up To Our Newsletter.</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="call-to-action-right">
                                        <div className="widget_newsletter">
                                            <div className="newsletter-bx">
                                                <form role="search" action="./">
                                                    <div className="input-group">
                                                        <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
                                                        <span className="input-group-btn">
                                                            <button type="submit" className="site-button"><i className="fa fa-paper-plane-o" /></button>
                                                        </span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                            <NavLink to={"./"}><img src={this.currentstate.logo} alt="" /></NavLink>
                                        </div>
                                        <p className="max-w400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt velit doloribus corrupti delectus? Veniam quo consequatur, debitis nemo quas quibusdam commodi similique maiores. Labore officia deleniti quam! Quidem, error ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <ul className="social-icons  mt-social-links">
                                            <li><NavLink to={"#"} className="fa fa-google" /></li>
                                            <li><NavLink to={"#"} className="fa fa-rss" /></li>
                                            <li><NavLink to={"#"} className="fa fa-facebook" /></li>
                                            <li><NavLink to={"#"} className="fa fa-twitter" /></li>
                                            <li><NavLink to={"#"} className="fa fa-linkedin" /></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* RESENT POST */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">
                                        <h4 className="widget-title">CONTACT US</h4>
                                        <ul className="widget_address">
                                            <li>XYZ@gmail.com</li>
                                            <li>(+298) 012-3456-789</li>
                                            <li>(+298) 146-6543-480</li>
                                        </ul>
                                    </div>
                                    <div className="widget widget_address_outer">
                                        <h4 className="widget-title">IMPORTANT LINKS</h4>
                                        <ul className="widget_address">
                                            <li>Support</li>
                                            <li>Apply for Partnership</li>
                                            <li>Invite Us</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h4 className="widget-title">Useful links</h4>
                                        <ul>
                                            <li><NavLink to={"/about"}>Career</NavLink></li>
                                            <li><NavLink to={"/project-grid"}>Webinar</NavLink></li>
                                            <li><NavLink to={"/blog-grid"}>CSR</NavLink></li>
                                            <li><NavLink to={"/contactus"}>Verify Certificate</NavLink></li>
                                            <li><NavLink to={"/contactus"}>Verify Employee</NavLink></li>
                                            <li><NavLink to={"/contactus"}>Terms & Conditions</NavLink></li>
                                            <li><NavLink to={"/contactus"}>Privacy Policies</NavLink></li>


                                        </ul>
                                    </div>
                                </div>
                                {/* TAGS */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_services inline-links">
                                        <h4 className="widget-title">OUR COMPANIES</h4>
                                        <ul>
                                            <li><NavLink to={"/about"}>Agumentik Software</NavLink></li>
                                            <li><NavLink to={"/project-grid"}>Agumentik Consultancy</NavLink></li>
                                            <li><NavLink to={"/blog-grid"}>Agumentik Educamp</NavLink></li>
                                            <li><NavLink to={"/contactus"}>Agumentik Projects</NavLink></li>
                                            </ul>
                                    </div>
                                </div>
                                {/* NEWSLETTER */}
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="mt-footer-bot-center">
                                    <span className="copyrights-text">2022 © Agumentik group | Developed by Agumentik Software Private Limited
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <Switcher updateFooterLogo={this.updateFooterLogo.bind(this)}/>

            </>
        );
    };
};

export default Footer;