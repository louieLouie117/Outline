import React from 'react'
import { useState } from 'react'
import StylesAboutMe from '../models/StylesAboutMe.css'


function AboutMe(props) {
    <StylesAboutMe></StylesAboutMe>

    

    const [timeLabel, setTimeLabel] = useState("Hello");


    window.onload = function() {
    
        const current = new Date();
        const time = current.getHours();
        console.log(time);
    
        if(time >= 0 && time <= 3){
          console.log("Hello Night Owl")
          setTimeLabel("Hello Night Owl");
          return;
        }
    
        if(time >= 4 && time <= 6){
          console.log("Hello Early Bird")
          setTimeLabel("Hello Early Bird");
          return;
        }
    
        if(time >= 7  &&time <= 11){
          console.log("Good Morning")
          setTimeLabel("Good Morning");
          return;
    
        }
    
        if(time >= 12  && time <= 17){
          console.log("Good Afternoon")
          setTimeLabel("Good Afternoon");
          return;
    
        }
      
        if(time >= 18 && time <= 23){
          console.log("Good Evening")
          setTimeLabel("Good Evening");
          return;
    
        }
    
    }
        
    
    

  return (
    <div className="myHeader-container">
          <header>
            {/* <img src="/img/portfolioImg.png" alt=""/> */}

               



                    <div className="name-container">

                    <header>
                    <h2>{timeLabel},</h2>
                    <h3>my name is </h3>
                    <h1>Luis Cardona</h1>
                  <p>Garage Sally Founder</p>

            
                
                  </header>
                  
  
                  <img id="PortfolioImg" src="/assets/PortfolioPhoto350.png" alt="" />
                  </div>
                  <footer>
                  <h2>I help individuals grow exponentially in website development.</h2>

                  </footer>

                  <footer className="ContactMeFooter">

<div className='Contact-Container' >

  <h2>Connect with me</h2>
  
      <main>
      <a href="tel:931-401-7238">
        <img src="/assets/icons/IconPhone.png" alt="" />
      <button>Call</button>

      </a>

      <a href="sms:931-401-7238">
        <img src="/assets/icons/IconText.png" alt="" />
      <button>Text</button>
      </a>


      <a href="mailTo:LCwebsitesolutions@outlook.com?subject=Website&body= Hello Luis Cardona">
        <img src="/assets/icons/IconEmail.png" alt="" />
        <button>Email</button>
      </a>
      <a href="https://www.instagram.com/garagesally.founder/">
        <img src="/assets/icons/IconInsta.png" alt="" />
      <button>DM</button>
      </a>

      </main>

      


</div>  

</footer>

                 

                

                                  
             

                


         </header>
                  
                 

      
        <div className="mySkills-container">
     
            

              {/* <ul>
          
                <li><p>Problem-solving</p></li>
                <li><p>Critical Thinking</p></li>
                <li><p>Creative Thinker</p></li>

                <li><p>Communication</p></li>
                <li><p>Attention to detail</p></li>
                <li><p>People skills</p></li>

                <li><p>Public Speaking</p></li>
                <li><p>Self-motivated</p></li>
                <li><p>Charismatic</p></li>

                <li><p>Leadership</p></li>
                <li><p>Time Management</p></li>
                <li><p>Teamwork</p></li>

                <li><p>Intuition</p></li>
                <li><p>Optimistic</p></li>
                <li><p>Patient</p></li>

      


          


          </ul> */}
         
      </div>
     
        
    </div>

  )
}


export default AboutMe
