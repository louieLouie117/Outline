import React from "react";

import HeroBanner from '../components/LandingPage/HeroBanner'
import LearnToCode from '../components/LandingPage/LearnToCode'
// import WorkProjects from "../components/WorkProjects";
import AboutMe from "../components/AboutMe";
import WorkExperience from "../components/WorkExperience";

function LandingPage(props) {








  return (
    <div className='LandingPage-Container'>

      <div>
        <HeroBanner></HeroBanner>
      </div>

      {/* <nav>
          <button style={{
            background: LearnButton ? "whitesmoke" : "#136DC0", 
            color: LearnButton ? "black": "white",
            borderRadius: LearnButton ? "10px 10px 0px 0px" : "10px 10px 0px 0px"}} onClick={OptionsHandler}>Learn to code</button>
          <button style={{
            background: ServiceButton ? "whitesmoke" : "#136DC0", 
            color: ServiceButton ? "black": "white",
            borderRadius: ServiceButton ? "10px 10px 0px 0px" : "10px 10px 0px 0px"}} onClick={OptionsHandler}>Services</button>
      </nav> */}
      <div >
        <LearnToCode  ></LearnToCode>
      </div>
   
      <AboutMe></AboutMe>
      <WorkExperience></WorkExperience>
      {/* <WorkProjects></WorkProjects> */}

      <footer>
    <a href="https://www.instagram.com/garagesally.founder/">Instagram</a>
    </footer>

    
        
    </div>
  )
}


export default LandingPage
