import React, {useState} from "react";

function HeroBanner(props) {

  const [hidden]= useState(false)

  


  return (
    <div className="Hero-Container">
      <h1 style={{display : hidden ? "grid" : "none"}} >Outlinepage.com</h1>

      <header>

      <svg xmlns="http://www.w3.org/2000/svg" width="115" height="48" viewBox="0 0 115 48">
  <g id="Group_440" data-name="Group 440" transform="translate(-175 -605)">
    <text id="outline" transform="translate(175 640)" fontSize="41" fontFamily="MS-UIGothic, MS UI Gothic"><tspan x="0" y="0">outline</tspan></text>
    <g id="Rectangle_156" data-name="Rectangle 156" transform="translate(235 646)" fill="#136dc0" stroke="#fff" strokeWidth="0.5">
      <rect width="56" height="7" rx="3.5" stroke="none"/>
      <rect x="0.25" y="0.25" width="55.5" height="6.5" rx="3.25" fill="none"/>
    </g>
    <circle id="Ellipse_28" data-name="Ellipse 28" cx="3.5" cy="3.5" r="3.5" transform="translate(182 646)" fill="#136dc0"/>
    <circle id="Ellipse_28-2" data-name="Ellipse 28" cx="3.5" cy="3.5" r="3.5" transform="translate(202 646)" fill="#136dc0"/>
    <circle id="Ellipse_28-3" data-name="Ellipse 28" cx="3.5" cy="3.5" r="3.5" transform="translate(220 646)" fill="#136dc0"/>
  </g>
</svg>



      </header>

      <aside>
        <div>
          <p>Helping businesses with</p>
          <p>mobile websites and apps</p>
        </div>
      </aside>

      {/* <iframe src="https://www.deltabarandgrill.com/" frameborder="0"></iframe> */}
    

    </div>
  )
}


export default HeroBanner


