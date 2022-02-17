import React, { useState } from "react";

function HeroBanner(props) {

const [hidden] = useState(true);
const [mainButton] = useState(true);



  return (
    <div className="Hero-Container">
      <header>
        <h1 style={{display: hidden ? "none" : "gird"}}>Outline</h1>
        <img  src="/assets/Logo.png" alt="" />
      </header>

      <aside>
        <p >Outline your business with a</p>
        <p >mobile website</p>
      </aside>

      <main>
        <picture> 
            <img  src="/assets/showCase/website1.png" alt="" />
      <iframe src="https://www.deltabarandgrill.com/" frameborder="0"></iframe>

            <img  src="/assets/showCase/website2.png" alt="" />
            <img  src="/assets/showCase/website3.png" alt="" />
            <img  src="/assets/showCase/website4.png" alt="" />
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
