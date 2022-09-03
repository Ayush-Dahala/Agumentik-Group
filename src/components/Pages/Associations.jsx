import React from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
import About3 from '../Elements/About3'
import About4 from '../Elements/About4'
import AboutSummary from '../Elements/AboutSummary'
import Faq from '../Elements/Faq'
import OurProject from '../Elements/OurProject'
import PostGallery from './PostGallery'

const Associations = () => {
  return (
    <>
      <Header/>
      <div className='page-content'>
        <About4/>
        <About3/>
        <Faq/>
        <About4/>
        <AboutSummary/>
        <OurProject/>
      </div>
      <Footer/>
    </>
  )
}

export default Associations
