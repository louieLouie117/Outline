import React, { useState } from "react";

import HeroBanner from '../components/LandingPage/HeroBanner'
import LearnToCode from '../components/LandingPage/LearnToCode'
import Services from '../components/LandingPage/Services'

function LandingPage(props) {


const [LearnButton, setLearnButton] = useState(true);
const [ServiceButton, setServiceButton] = useState(false);


const OptionsHandler = e =>{
    if(e.target.innerText === "Services"){
      setLearnButton(false);
      setServiceButton(true);

    }
    if(e.target.innerText === "Learn to code"){
      setLearnButton(true);
      setServiceButton(false);
    }


}
  return (
    <div className='LandingPage-Container'>

      <div>
        <HeroBanner></HeroBanner>
      </div>

      <nav>
          <button style={{
            background: LearnButton ? "#136DC0" : "none", 
            color: LearnButton ? "white": "black",
            borderRadius: LearnButton ? "10px 10px 0px 0px" : "10px 10px 0px 0px"}} onClick={OptionsHandler}>Learn to code</button>
          <button style={{
            background: ServiceButton ? "#136DC0" : "none", 
            color: ServiceButton ? "white": "black",
            borderRadius: ServiceButton ? "10px 10px 0px 0px" : "10px 10px 0px 0px"}} onClick={OptionsHandler}>Services</button>
      </nav>
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
