import React from 'react';
import { NavLink } from 'react-router-dom';

var img1 = require('./../../images/left-men.png');
var img2 = require('./../../images/background/bg-4.png');
var img3 = require('./../../images/background/bg-site.png');
var img4 = require('./../../images/mission.jpg');

class OurMission extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding mission-outer-section  p-t80 p-b30 bg-gray bg-no-repeat bg-right-center" style={{ backgroundImage: 'url(' + img1.default + '), url(' + img2.default + ')' }}>
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="mt-separator-outer separator-center">
                                    <div className="mt-separator">
                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Mission</h2>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left" style={{ backgroundImage: 'url(' + img3.default + ')' }}>
                                        <h3 className="m-t0"><span className="font-weight-100"> Agumentik</span><br /> What We Do</h3>
                                        <p>lorem Ipsum available, but the majority have suffered alteration in some form, by ious versi ons have evolved over the years, sometimes by accident</p>
                                        <ul className="list-angle-right anchor-line">
                                            <li><NavLink to="/about">Web Development</NavLink></li>
                                            <li><NavLink to="/about">HR Consultancy</NavLink></li>
                                            <li><NavLink to="/about">Game Production</NavLink></li>
                                            <li><NavLink to="/about">Implementation</NavLink></li>
                                            <li><NavLink to="/about">Lead Generation</NavLink></li>
                                        </ul>
                                        <div className="text-right">
                                            <NavLink to="/about" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="mission-mid bg-no-repeat bg-cover m-b30" style={{ backgroundImage: 'url(' + img4.default + ')' }} />
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="contact-home1-left bg-white p-a30 m-b0">
                                        <h3 className="text-dark m-t0"><span className="font-weight-100">Know more about <b>Agumentik</b></span></h3>
                                        <p>lorem Ipsum available, but the majority have suffered alteration in some form, by ious versi ons have evolved over the years</p>

                                            <div className="text-center p-t10">
                                                <button type="submit" className="site-button btn-effect " style={{width:220,marginBottom:19}}>
                                                    APPLY FOR PARTNERSHIP
                                                </button>
                                            </div>
                                            <div className="text-center p-t10">
                                                <button type="submit" className="site-button btn-effect " style={{width:220,marginBottom:19}}>
                                                    CAREER
                                                </button>
                                            </div>
                                            <div className="text-center p-t10">
                                                <button type="submit" className="site-button btn-effect " style={{width:220}}>
                                                    INVITE US
                                                </button>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
                        <strong>Mission</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default OurMission;