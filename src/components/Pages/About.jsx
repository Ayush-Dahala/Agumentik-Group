import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import About4 from './../Elements/About4';
import Specialization4 from './../Elements/Specialization4';
import Team3 from './../Elements/Team3';
import AboutSummary from './../Elements/AboutSummary';
import About3 from '../Elements/About3';
import BlogSidebar from '../Elements/BlogSidebar'
import ClientsLogo from '../Elements/ClientsLogo'

var bnrimg = require('./../../images/banner/1.jpg');

class About extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                    <About4 />
                    <About3 />
                    <Specialization4 />
                    <Team3 />
                    <ClientsLogo/>
                    <AboutSummary />

                </div>

                <Footer />

            </>
        );
    };
};

export default About;