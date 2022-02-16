import React from 'react'
import HeroBanner from '../components/LandingPage/HeroBanner'
import LearnToCode from '../components/LandingPage/LearnToCode'
import Services from '../components/LandingPage/Services'

function LandingPage(props) {
  return (
    <div className='LandingPage-Container'>
        <HeroBanner></HeroBanner>
        <LearnToCode></LearnToCode>
        <Services></Services>
        
        
    </div>
  )
}


export default LandingPage
