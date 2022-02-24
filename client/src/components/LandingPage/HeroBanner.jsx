import React, {useState} from "react";

function HeroBanner(props) {

  const [hidden]= useState(false)
  const [alignLogo, setAlignLogo]= useState(false)
  const [outlineLogo2, setOutlineLogo2]= useState(true)

  const [buttonText, setButtonText]= useState("outline2")


  const LogoOptions = e =>{

      console.log(e.target.innerText)

      if(e.target.innerText === "align"){
        setAlignLogo(true);
        setOutlineLogo2(false);

        return setButtonText("outline2")

      }


      if(e.target.innerText === "outline2"){
        setAlignLogo(false);
        setOutlineLogo2(true);

        return setButtonText("align")

      }
  }

  


  return (
    <div className="Hero-Container">
      <h1 style={{display : hidden ? "grid" : "none"}} >align</h1>

      <header>

        <div style={{display: alignLogo ? "grid":"none"}} onClick={LogoOptions}>
        <svg xmlns="http://www.w3.org/2000/svg" width="139" height="64" viewBox="0 0 139 64"><g transform="translate(-130 -417)"><circle cx="5" cy="5" r="5" transform="translate(135 471)" fill="#136dc0"/><circle cx="5" cy="5" r="5" transform="translate(164 471)" fill="#136dc0"/><circle cx="5" cy="5" r="5" transform="translate(190 471)" fill="#136dc0"/><circle cx="5" cy="5" r="5" transform="translate(220 471)" fill="#136dc0"/><text transform="translate(130 456)" fontSize="41" fontFamily="Cambria" letterSpacing="0.344em"><tspan x="0" y="0">a</tspan></text><text transform="translate(246 456)" fontSize="41" fontFamily="Cambria" letterSpacing="0.344em"><tspan x="0" y="0">n</tspan></text><circle cx="5" cy="5" r="5" transform="translate(253 471)" fill="#136dc0"/><text transform="translate(164 456)" fontSize="41" fontFamily="Cambria" letterSpacing="0.344em"><tspan x="0" y="0">l</tspan></text><text transform="translate(189 456)" fontSize="41" fontFamily="Cambria" letterSpacing="0.344em"><tspan x="0" y="0">i</tspan></text><text transform="translate(215 456)" fontSize="41" fontFamily="Cambria" letterSpacing="0.344em"><tspan x="0" y="0">g</tspan></text></g></svg>
        </div>

        
        <div style={{display: outlineLogo2 ? "grid":"none"}} onClick={LogoOptions}>
        <svg xmlns="http://www.w3.org/2000/svg" width="215" height="48" viewBox="0 0 115 48"><g transform="translate(-175 -605)"><text transform="translate(175 640)" font-size="41" font-family="MS-UIGothic, MS UI Gothic"><tspan x="0" y="0">outline</tspan></text><rect width="59" height="7" rx="3.5" transform="translate(233 646)" fill="#136dc0"/><circle cx="3.5" cy="3.5" r="3.5" transform="translate(182 646)" fill="#136dc0"/><circle cx="3.5" cy="3.5" r="3.5" transform="translate(202 646)" fill="#136dc0"/><circle cx="3.5" cy="3.5" r="3.5" transform="translate(220 646)" fill="#136dc0"/></g></svg>
        </div>


      </header>

      <aside>
        <p >get your business a</p>
        <p >mobile website</p>
      </aside>

      <main>
      {/* <p>swipe to see more &#62; &#62;</p> */}

        <header>
          <picture> 

            <img  src="/assets/showCase/website1.png" alt="" />
            <footer>
            <button onClick={LogoOptions}>{buttonText}</button>
            </footer>


          </picture>

            <picture>
            <img  src="/assets/showCase/website2.png" alt="" />
            <footer>
            <button onClick={LogoOptions}> <a href="https://icy-flower-0ac939810.1.azurestaticapps.net/"> view and purchase </a></button>
            </footer>

            </picture>

            <picture>
            <img  src="/assets/showCase/website3.png" alt="" />
            <footer>
            <button onClick={LogoOptions}> <a href="https://www.jrprolandscaping.com/"> view </a></button>
            </footer>
            </picture>
            
            <picture>
            <img  src="/assets/showCase/website4.png" alt="" />
            <footer>
            <button onClick={LogoOptions}><a href="https://www.ibupholstery.com/"> view </a></button>
            </footer>
            </picture>

            <picture>
            <img  src="/assets/showCase/GarageSallyWebsite.png" alt="" />
            <footer>
            <button onClick={LogoOptions}><a href="https://garagesallyapp.com/"> view </a></button>
            </footer>
            </picture>

            <picture>
            <img  src="/assets/showCase/LeeWebsite.png" alt="" />
            <footer>
            <button onClick={LogoOptions}><a href="https://calendly.com/cardona-luis/15min">Make an Appointment</a></button>
            </footer>
            </picture>

            <picture>
            <img  src="/assets/showCase/PizzaWebsite.png" alt="" />
            <footer>
            <button onClick={LogoOptions}><a href="https://calendly.com/cardona-luis/15min">Make an Appointment</a></button>
            </footer>
            </picture>
            </header>
      </main>

      {/* <iframe src="https://www.deltabarandgrill.com/" frameborder="0"></iframe> */}
    

    </div>
  )
}


export default HeroBanner


