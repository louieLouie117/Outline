import React, { useState } from "react";


function LearnToCode(props) {

const [PopUpSection, setPopUpSection] = useState(true);
const [PopUpBTN, setPopUpBTN] = useState("BTN");

const [ArticleContainer, setArticleContainer] = useState(true);
const [Article, setArticle] = useState();

const [MentorshipContainer] = useState(true);
const [MentorshipDetails] = useState();







const PopUpHandler = (e)=>{
  setPopUpSection(false)
  setArticleContainer(false)

  if(e.target.innerText === "X" ){
      setPopUpSection(true)
    return
  }

  if(e.target.id === "HtmlBTN"){
  setPopUpBTN("Schedule Meet up")
   setArticle(
    <main>
      <header>
        <img  src={`/assets/icons/htmlIcon.png`} alt="" />
        <h1>What is HTML?</h1>
      </header>
      <section>
        <p>P1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
        <p>P2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>

        <p>P3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
        <p onClick={DetailsHandler}>Meet up details</p>
      </section>
  </main>
   );
  }


  
  if(e.target.id === "CssBTN"){
    setPopUpBTN("Schedule Meet up")
    setArticle(
     <main>
       <header>
         <img  src={`/assets/icons/cssIcon.png`} alt="" />
         <h1>What is CSS?</h1>
       </header>
       <section>
         <p>P1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
         <p>P2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
 
         <p>P3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
         <p onClick={DetailsHandler}>Meet up details</p>
       </section>
   </main>
    );

  }


  if(e.target.id === "JavaScriptBTN"){
    setPopUpBTN("Schedule Meet up")
    setArticle(
     <main>
       <header>
         <img  src={`/assets/icons/jsIcon.png`} alt="" />
         <h1>What is JavaScript?</h1>
       </header>
       <section>
         <p>P1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
         <p>P2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
 
         <p>P3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
         <p onClick={DetailsHandler}>Meet up details</p>
       </section>
   </main>
    );

  }

  if(e.target.id === "ReactBTN"){
    setPopUpBTN("Schedule Meet up")
    setArticle(
     <main>
       <header>
         <img  src={`/assets/icons/reactIcon.png`} alt="" />
         <h1>What is React.js?</h1>
       </header>
       <section>
         <p>P1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
         <p>P2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
 
         <p>P3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
         <p onClick={DetailsHandler}>Meet up details</p>
       </section>
   </main>
    );


  }


  
  if(e.target.id === "VueBTN"){
    setPopUpBTN("Schedule Meet up")
   setArticle(
    <main>
      <header>
        <img  src={`/assets/icons/vueIcon.png`} alt="" />
        <h1>What is Vue?</h1>
      </header>
      <section>
        <p>P1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
        <p>P2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>

        <p>P3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
        <p onClick={DetailsHandler}>Meet up details</p>
      </section>
  </main>
   );
    

  }


  if(e.target.id === "AngularBTN"){
    setPopUpBTN("Schedule Meet up")
   setArticle(
    <main>
      <header>
        <img  src={`/assets/icons/angularIcon.png`} alt="" />
        <h1>What is Angular?</h1>
      </header>
      <section>
        <p>P1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
        <p>P2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>

        <p>P3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
        <p onClick={DetailsHandler}>Meet up details</p>
      </section>
  </main>
   );


  }

  
  if(e.target.id === "CSharpBTN"){
    setPopUpBTN("Schedule Meet up")
    setArticle(
     <main>
       <header>
         <img  src={`/assets/icons/cSharpIcon.png`} alt="" />
         <h1>What is C Sharp Stack?</h1>
       </header>
       <section>
         <p>P1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
         <p>P2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
 
         <p>P3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
         <p onClick={DetailsHandler}>Meet up details</p>
       </section>
   </main>
    );


  }


  
  if(e.target.id === "MernBTN"){
    setPopUpBTN("Schedule Meet up")
    setArticle(
     <main>
       <header>
         <img  src={`/assets/icons/jsIcon.png`} alt="" />
         <h1>What is MERN Stack?</h1>
       </header>
       <section>
         <p>P1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
         <p>P2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
 
         <p>P3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
         <p onClick={DetailsHandler}>Meet up details</p>
       </section>
   </main>
    );

  }


  if(e.target.id === "PythonBTN"){
    setPopUpBTN("Schedule Meet up")
    setArticle(
     <main>
       <header>
         <img  src={`/assets/icons/pythonIcon.png`} alt="" />
         <h1>What is Python Stack?</h1>
       </header>
       <section>
         <p>P1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
         <p>P2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
 
         <p>P3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
         <p onClick={DetailsHandler}>Meet up details</p>
       </section>
   </main>
    );

  }
  
}



const DetailsHandler = (e) =>{
  if(e.target.innerText === "< back to article"){
 

  }
  if(e.target.innerText === "< back to articles"){
 

  }

  if(e.target.innerText === "Meet up details"){
  
  }

  if(e.target.innerText === "Mentorship details"){


  }
}



  return (
    <div className='OutlineLayout-Container' >
      <header>
        <p>Have you been wanting to learn to code?</p>       
      </header>

      <main>

        <header>
          <h2>Fundamentals Outline</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum consectetur distinctio neque provident? Accusantium saepe, fuga delectus explicabo inventore libero iste quod fugit assumenda aperiam quidem provident vitae sapiente!</p>
        </header>

      <div>  {/* need to name this div */}
        
        <section>
          <header>
          <div className="DotIcon"></div>
          <h3>Beginner</h3>

          </header>
          <div className="GaryLineSVG"></div>

          <main>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, molestiae illum amet reiciendis atque earum, similique eos quo explicabo possimus esse culpa nulla placeat aliquid nobis. Neque, incidunt! Ipsum, dicta.</p>
            <ul className='LearnTabs'>
              <li>
                <img  src="/assets/icons/htmlIcon.png" alt="" />
                <h4>HTML</h4>
                <button id="HtmlBTN" onClick={PopUpHandler}></button>
              </li>

              <li>
                <img  src="/assets/icons/cssIcon.png" alt="" />
                <h4>CSS</h4>
                <button id="CssBTN" onClick={PopUpHandler}></button>
              </li>

              <li>
                <img  src="/assets/icons/jsIcon.png" alt="" />
                <h4>JavaScript</h4>
                <button id="JavaScriptBTN" onClick={PopUpHandler}></button>
              </li>
              
             </ul>
        
          </main>
        </section>
        
        <section>
          <header>
          <div className="DotIcon"></div>
          <h3>Intermediate</h3>

          </header>
          <div className="GaryLineSVG"></div>

          <main>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, molestiae illum amet reiciendis atque earum, similique eos quo explicabo possimus esse culpa nulla placeat aliquid nobis. Neque, incidunt! Ipsum, dicta.</p>
            <ul className='LearnTabs'>
              <li>
                  <img  src="/assets/icons/reactIcon.png" alt="" />
                  <h4>React.js</h4>
                  <button id="ReactBTN" onClick={PopUpHandler}></button>
                
                </li>

                <li>
                  <img  src="/assets/icons/vueIcon.png" alt="" />
                  <h4>Vue.js</h4>
                <button id="VueBTN" onClick={PopUpHandler}></button>

                </li>

                <li>
                  <img  src="/assets/icons/angularIcon.png" alt="" />
                  <h4>Angular.js</h4>
                <button id="AngularBTN" onClick={PopUpHandler}></button>

                </li>
            </ul>

          </main>
        </section>

        <section>
          <header>
          <div className="DotIcon"></div>
          <h3>Advance</h3>

          </header>
          <div className="GaryLineSVG"></div>

          <main>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, molestiae illum amet reiciendis atque earum, similique eos quo explicabo possimus esse culpa nulla placeat aliquid nobis. Neque, incidunt! Ipsum, dicta.</p>
            <ul className='LearnTabs'>

               <li>
                  <img  src="/assets/icons/cSharpIcon.png" alt="" />
                  <h4>C Sharp Stack</h4>
                <button id="CSharpBTN" onClick={PopUpHandler}></button>

                </li>

              <li>
                 <img  src="/assets/icons/jsIcon.png" alt="" />
                  <h4>MERN Stack</h4>
                <button id="MernBTN" onClick={PopUpHandler}></button>

                </li>

              

                <li>
                  <img  src="/assets/icons/pythonIcon.png" alt="" />
                  <h4>Python Stack</h4>
                <button id="PythonBTN" onClick={PopUpHandler}></button>

            </li>
          
            </ul>
          </main>
        </section>


        <aside className="PopSection" style={{display: PopUpSection ? "none" : "grid" }}>
        <button onClick={PopUpHandler}>X</button>


                  <div className="Article-Container" style={{display: ArticleContainer ? "none" : "grid" }}>{Article}</div>
                  <div className="MentorshipDetails-Container" style={{display: MentorshipContainer ? "none" : "grid" }}>{MentorshipDetails}</div>

                  {/* <main>
                    <div className="AboutTechTool" style={{display: AboutTechSection ? "none" : "grid" }}>
                      <header>
                        <img  src={`/assets/icons/${IconImage}.png`} alt="" />
                        <h1>{PopUpTitle}</h1>
                      </header>
                      <section>
                      <p>{PopUpDescription}</p>
                      <p>{PopUpDescription}</p>
                      <p onClick={DetailsHandler}>{DetailsBTN}</p>
                      </section>
                    </div>

                    <div className="DetailsInformation" style={{display: DetailsInformation ? "none" : "grid" }}>
                    <header>
                    <img  src={`/assets/icons/${IconImage}.png`} alt="" />
                       
                        <h1>{DetailsTitle}</h1>
                      </header>
                      <section>
                      <p>{PopUpDescription}</p>
                      <p onClick={DetailsHandler}>{DetailsBTN}</p>

                    </section>
                      </div>
                  </main> */}
                  
                  <footer>
                    <div className="PopFooter-Container">
                    <img  src="/assets/icons/calendarIcon.png" alt="" />
                    <a href="https://calendly.com/cardona-luis/15min">
                    <button>{PopUpBTN}</button>
                    </a>
                    </div>
                  </footer>
              
                 
          </aside>

        </div>

      </main>
     

    </div>
  )
}


export default LearnToCode
