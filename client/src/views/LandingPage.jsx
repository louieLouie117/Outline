import React from 'react'
import HeroBanner from '../components/LandingPage/HeroBanner'
import LearnToCode from '../components/LandingPage/LearnToCode'
import Services from '../components/LandingPage/Services'

function LandingPage(props) {
  return (
    <div className='LandingPage-Container'>

      <div>
        <HeroBanner></HeroBanner>
      </div>
      <div>
        <LearnToCode></LearnToCode>
      </div>
      <div>
        <Services></Services>
      </div>
        
    </div>
  )
}


export default LandingPage
