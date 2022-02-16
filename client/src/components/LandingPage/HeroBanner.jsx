import React, { useState, useEffect } from "react";

function HeroBanner(props) {

const [hidden, setHidden] = useState(true);
const [mainButton, setMainButton] = useState(true);



  return (
    <div className="Hero-Container">
      <header>
        <h1 style={{display: hidden ? "none" : "gird"}}>Outline</h1>
        <img  src="/assets/Logo.png" alt="" />
        <p >Helping businesses get a</p>
        <p >mobile website</p>
        </header>

        <main>
        <picture> 
            <img  src="/assets/showCase/Design1.png" alt="" />
        </picture>
        <p>swipe to see more &#62; &#62;</p>
        </main>

        <footer>
          <button style={{
            background: mainButton ? "#136DC0" : "black", 
            color: mainButton ? "white": "black",
            borderRadius: mainButton ? "10px 10px 0px 0px" : "10px 10px 0px 0px"}}>Learn to code</button>
          <button>Services</button>
        </footer>
    </div>
  )
}


export default HeroBanner
