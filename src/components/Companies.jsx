import React from 'react'
import Footer from './Common/Footer'
import Header from './Common/Header'
import About4 from './Elements/About4'
import AboutSummary from './Elements/AboutSummary'
import Callus from './Elements/Callus'
import ClientsLogo from './Elements/ClientsLogo'
import OurServices from './Elements/OurServices'
import OurValue from './Elements/OurValue'

const Companies = () => {
  return (
    <div>
      <Header/>
      <div className="page-content">
      <About4/>
      <OurValue/>
      <Callus/>
      <OurServices/>
      <ClientsLogo/>
      <AboutSummary/>
      </div>
      <Footer/>
    </div>
  )
}

export default Companies
