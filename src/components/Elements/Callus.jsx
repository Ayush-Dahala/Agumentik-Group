import React from 'react';
import { NavLink } from 'react-router-dom';

var bnr1 = require('./../../images/background/bg-1.jpg');

class Callus extends React.Component {
    render() {
        return (
            <>
                <div className="container section-full mobile-page-padding p-tb80 overlay-wraper bg-cover bg-center" style={{backgroundImage:"url(" + bnr1.default + ")"}}>
                    <div className="row overlay-main bg-primary opacity-07" style={{display:'flex' ,textAlign:'center'}}/>
                               <div className="col-lg-4 col-md-6 col-sm-6 " style={{ background:'#FFFFFF',padding:'30px',marginBottom:30,marginRight:30,height:500}}>
                                <p style={{fontSize:28,fontWeight:500}}>Contact <b>Agumentik</b></p>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.there are many Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde variations of passages of Ipsum available,</p>
                                <h3>(+291)-456-789-1234</h3>
                                <NavLink to="/contactus" className="site-button-secondry btn-effect bg-dark">Contact Us</NavLink>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6" style={{background:'#FFFFFF',padding:'30px',marginBottom:30,marginRight:30,height:500}}>
                                        <h1>720 x 960</h1>
                                </div >
                                <div className="col-lg-4 col-md-6 col-sm-6" style={{background:'#FFFFFF',padding:'30px',marginBottom:30,height:500}}>
                                <p style={{fontSize:28,fontWeight:500}}>Let's work  <b>Together</b></p>
                                <p>It is a long established fact that a reader will be distracted by the readable content of Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing .</p>
                                <h3>(+291)-456-789-1234</h3>
                                <div style={{display:'flex', flexDirection:'column'}}>
                                <NavLink to="/contactus" className="site-button-secondry btn-effect bg-dark" style={{marginBottom:10}}>Contact Us</NavLink>
                                <NavLink to="/contactus" className="site-button-secondry btn-effect bg-dark" style={{marginBottom:10}}>Help</NavLink>
                                <NavLink to="/contactus" className="site-button-secondry btn-effect bg-dark">Webinar</NavLink>
                                </div>

                                </div>
=                        
                  
                </div>
            </>
        );
    }
};

export default Callus;