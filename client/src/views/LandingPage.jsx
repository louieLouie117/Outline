import React, { useState } from "react";

import HeroBanner from '../components/LandingPage/HeroBanner'
import LearnToCode from '../components/LandingPage/LearnToCode'
import Services from '../components/LandingPage/Services'
import WorkProjects from "../components/WorkProjects";

function LandingPage(props) {


const [ContentLearnToCode, setContentLearnToCode] = useState(false);
const [ContentServices, setContentServices] = useState(true);


const [LearnButton, setLearnButton] = useState(true);
const [ServiceButton, setServiceButton] = useState(false);


const OptionsHandler = e =>{
    if(e.target.innerText === "Learn to code"){
      setLearnButton(false);
      setServiceButton(true);
      setContentLearnToCode(false);
      setContentServices(true);
      

    }
    if(e.target.innerText === "Services"){
      setLearnButton(true);
      setServiceButton(false);
      setContentLearnToCode(true);
      setContentServices(false);
    }


}



  return (
    <div className='LandingPage-Container'>

      <div>
        <HeroBanner></HeroBanner>
      </div>

      <nav>
          <button style={{
            background: LearnButton ? "whitesmoke" : "#136DC0", 
            color: LearnButton ? "black": "white",
            borderRadius: LearnButton ? "10px 10px 0px 0px" : "10px 10px 0px 0px"}} onClick={OptionsHandler}>Learn to code</button>
          <button style={{
            background: ServiceButton ? "whitesmoke" : "#136DC0", 
            color: ServiceButton ? "black": "white",
            borderRadius: ServiceButton ? "10px 10px 0px 0px" : "10px 10px 0px 0px"}} onClick={OptionsHandler}>Services</button>
      </nav>
      <div style={{display: ContentLearnToCode ? "grid" : "none"}}>
        <LearnToCode  ></LearnToCode>
      </div>
      <div style={{display: ContentServices ? "grid" : "none"}}>
        <Services></Services>
      </div>
      <WorkProjects></WorkProjects>

    
        
    </div>
  )
}


export default LandingPage
