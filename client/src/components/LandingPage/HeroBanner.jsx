import React from "react";

function HeroBanner(props) {

  return (
    <div className="Hero-Container">
      <header>
        {/* <img  src="/assets/Logo.png" alt="" /> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47" viewBox="0 0 48 47"><g transform="translate(-128 -31)"><g transform="translate(12 -202)"><rect width="48" height="47" rx="6" transform="translate(116 233)" fill="#136dc0"/></g><g transform="translate(139.795 37.489)"><path d="M22.285,12.706h8.061a.439.439,0,0,0,.443-.443h0a2.622,2.622,0,0,0-.948-2.029L23.082,4.6a2.845,2.845,0,0,0-1.825-.656h0A.654.654,0,0,0,20.6,4.6v6.422A1.682,1.682,0,0,0,22.285,12.706Z" transform="translate(-5.281 -3.936)" fill="#fff"/><path d="M20.989,10.65V3.938H10A2.693,2.693,0,0,0,7.313,6.622V34.815A2.693,2.693,0,0,0,10,37.5H30.135a2.693,2.693,0,0,0,2.685-2.685V14.426H24.765A3.781,3.781,0,0,1,20.989,10.65Z" transform="translate(-7.313 -3.938)" fill="#fff"/></g><line x2="20.287" transform="translate(142.917 50.69)" fill="none" stroke="#136dc0" stroke-width="1"/><line x2="20.287" transform="translate(142.917 55.463)" fill="none" stroke="#136dc0" stroke-width="1"/><line x2="20.287" transform="translate(142.917 60.237)" fill="none" stroke="#136dc0" stroke-width="1"/><line x2="20.287" transform="translate(142.917 65.01)" fill="none" stroke="#136dc0" stroke-width="1"/><line x2="9.547" transform="translate(142.917 45.917)" fill="none" stroke="#136dc0" stroke-width="1"/></g></svg>
        <h1>Outline</h1>
      </header>

      <aside>
        <p >Outline your business with a</p>
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
