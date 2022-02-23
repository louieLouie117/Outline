import React, {useState} from "react";

function HeroBanner(props) {

  const [hidden]= useState(false)
  const [alignLogo, setAlignLogo]= useState(true)
  const [outlineLogo, setOutlineLogo]= useState(false)
  const [buttonText, setButtonText]= useState("outline")


  const LogoOptions = e =>{

      console.log(e.target.innerText)

      if(e.target.innerText === "align"){
        setAlignLogo(true);
        setOutlineLogo(false);
        return setButtonText("outline")

      }

      if(e.target.innerText === "outline"){
        setAlignLogo(false);
        setOutlineLogo(true);
        return setButtonText("align")

      }
  }
  


  return (
    <div className="Hero-Container">
      <h1 style={{display : hidden ? "grid" : "none"}} >align</h1>

      <header>
        <button onClick={LogoOptions}>{buttonText}</button>

        <div style={{display: alignLogo ? "grid":"none"}} onClick={LogoOptions}>
        <svg xmlns="http://www.w3.org/2000/svg" width="139" height="64" viewBox="0 0 139 64"><g transform="translate(-130 -417)"><circle cx="5" cy="5" r="5" transform="translate(135 471)" fill="#136dc0"/><circle cx="5" cy="5" r="5" transform="translate(164 471)" fill="#136dc0"/><circle cx="5" cy="5" r="5" transform="translate(190 471)" fill="#136dc0"/><circle cx="5" cy="5" r="5" transform="translate(220 471)" fill="#136dc0"/><text transform="translate(130 456)" fontSize="41" fontFamily="Cambria" letterSpacing="0.344em"><tspan x="0" y="0">a</tspan></text><text transform="translate(246 456)" fontSize="41" fontFamily="Cambria" letterSpacing="0.344em"><tspan x="0" y="0">n</tspan></text><circle cx="5" cy="5" r="5" transform="translate(253 471)" fill="#136dc0"/><text transform="translate(164 456)" fontSize="41" fontFamily="Cambria" letterSpacing="0.344em"><tspan x="0" y="0">l</tspan></text><text transform="translate(189 456)" fontSize="41" fontFamily="Cambria" letterSpacing="0.344em"><tspan x="0" y="0">i</tspan></text><text transform="translate(215 456)" fontSize="41" fontFamily="Cambria" letterSpacing="0.344em"><tspan x="0" y="0">g</tspan></text></g></svg>
        </div>

        <div  style={{display: outlineLogo ? "grid":"none"}} >
        <svg xmlns="http://www.w3.org/2000/svg" width="265" height="47" viewBox="0 0 165 47"><g transform="translate(-122 -274)"><text transform="translate(172 312)" fontSize="41" fontFamily="MS-UIGothic, MS UI Gothic"><tspan x="0" y="0">outline</tspan></text><rect width="48" height="47" rx="6" transform="translate(122 274)" fill="#136dc0"/><g transform="translate(-2.917 -2.718)"><line x2="24.015" transform="translate(136.917 294.567)" fill="none" stroke="#fff" strokeWidth="1.5"/><line x2="24.015" transform="translate(136.917 300.218)" fill="none" stroke="#fff" strokeWidth="1.5"/><line x2="24.015" transform="translate(136.917 305.868)" fill="none" stroke="#fff" strokeWidth="1.5"/><line x2="24.015" transform="translate(136.917 311.519)" fill="none" stroke="#fff" strokeWidth="1.5"/><path d="M0,0H11.3" transform="translate(136.917 288.917)" fill="none" stroke="#fff" strokeWidth="1.5"/></g></g></svg>

        </div>

      </header>

      <aside>
        <p >get your business a</p>
        <p >mobile website</p>
      </aside>

      <main>
        <picture> 
            <img  src="/assets/showCase/website1.png" alt="" />
      {/* <iframe src="https://www.deltabarandgrill.com/" frameborder="0"></iframe> */}

            <img  src="/assets/showCase/website2.png" alt="" />
            <img  src="/assets/showCase/website3.png" alt="" />
            <img  src="/assets/showCase/website4.png" alt="" />
        </picture>
        <p>swipe to see more &#62; &#62;</p>
      </main>

    

    </div>
  )
}


export default HeroBanner


