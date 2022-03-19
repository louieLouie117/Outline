import React, { useState } from "react";


function LearnToCode(props) {

const [PopUpSection, setPopUpSection] = useState(true);
const [PopUpBTN, setPopUpBTN] = useState("BTN");

const [ArticleContainer, setArticleContainer] = useState(true);
const [Article, setArticle] = useState();



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
        <button id="HtmlDetails">Meet up details</button>
      </section>
      <footer>
              <div className="PopFooter-Container">
                <img  src="/assets/icons/calendarIcon.png" alt="" />
                <a href="https://calendly.com/cardona-luis/15min">
                  <button>Schedule Meet up</button>
                </a>
            </div>
          </footer>
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
         <button id="CssDetails" >Meet up details</button>
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
         <button id="JavaScriptDetails" >Meet up details</button>
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
         <button id="ReactDetails" >Mentorship details</button>
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
        <button id="VueDetails" >Meet up details</button>
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
        <button id="AngularDetails" >Meet up details</button>
      </section>
  </main>

   );


  }

  
  if(e.target.id === "CSharpBTN"){
    setPopUpBTN("Schedule Mentorship")
    setArticle(
      <main>
      <header>
        <img  src={`/assets/icons/cSharpIcon.png`} alt="" />
        <h1>C Sharp Mentorship</h1>
      </header>
      <section className="SectionLayout-Container AdvanceMentorship">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla velit nihil eos modi natus. Unde, officiis, impedit, inventore vel culpa facilis voluptatibus nemo sapiente voluptates sequi omnis voluptatem mollitia quibusdam?</p>
     
        <ul>
           <header>
             <h2 >Week 1</h2>
             <div className="DotIcon"></div>
           </header>
           <div className="GaryLineSVG"></div>
           <div className="SectionList">
             <li>CSharp Week 1</li>
             <li>React useState</li>
             <li>Save code to Github</li>
             <li>Deployment App</li>
           </div>
         </ul>
         
         <ul>
           <header>
             <h2 >Week 2</h2>
             <div className="DotIcon"></div>
           </header>
           <div className="GaryLineSVG"></div>
           <div className="SectionList" >
             <li>CSharp Week 2</li>
             <li>React useState</li>
             <li>Save code to Github</li>
             <li>Deployment App</li>
           </div>
         </ul>

         <ul>
           <header>
             <h2 >Week 3</h2>
             <div className="DotIcon"></div>
           </header>
           <div className="GaryLineSVG"></div>
           <div className="SectionList" >
             <li>CSharp week 3</li>
             <li>React useState</li>
             <li>Save code to Github</li>
             <li>Deployment App</li>
           </div>
         </ul>

         <ul>
         <header>
             <h2 >Week 4</h2>
             <div className="DotIcon"></div>
           </header>
           <div className="GaryLineSVG"></div>
           <div  className="SectionList">
             <li>CSharp week 4</li>
             <li>React useState</li>
             <li>Save code to Github</li>
             <li>Deployment App</li>
           </div>
         </ul>

         <p>Learn the fundamentals of C Sharp by careting application. The cost for 4 weeks is $500.00</p>


        <button id="CSharpBTN" onClick={PopUpHandler}>back to article</button>
      </section>
  </main>
    );


  }


  
  if(e.target.id === "MernBTN"){
    setPopUpBTN("Schedule Mentorship")
    setArticle(
      <main>
      <header>
        <img  src={`/assets/icons/jsIcon.png`} alt="" />
        <h1>MERN Mentorship</h1>
      </header>
      <section className="SectionLayout-Container AdvanceMentorship">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla velit nihil eos modi natus. Unde, officiis, impedit, inventore vel culpa facilis voluptatibus nemo sapiente voluptates sequi omnis voluptatem mollitia quibusdam?</p>
     
        <ul>
           <header>
             <h2 >Week 1</h2>
             <div className="DotIcon"></div>
           </header>
           <div className="GaryLineSVG"></div>
           <div className="SectionList">
             <li>MERN Week 1</li>
             <li>React useState</li>
             <li>Save code to Github</li>
             <li>Deployment App</li>
           </div>
         </ul>
         
         <ul>
           <header>
             <h2 >Week 2</h2>
             <div className="DotIcon"></div>
           </header>
           <div className="GaryLineSVG"></div>
           <div className="SectionList" >
             <li>MERN Week 2</li>
             <li>React useState</li>
             <li>Save code to Github</li>
             <li>Deployment App</li>
           </div>
         </ul>

         <ul>
           <header>
             <h2 >Week 3</h2>
             <div className="DotIcon"></div>
           </header>
           <div className="GaryLineSVG"></div>
           <div className="SectionList" >
             <li>MERN week 3</li>
             <li>React useState</li>
             <li>Save code to Github</li>
             <li>Deployment App</li>
           </div>
         </ul>

         <ul>
         <header>
             <h2 >Week 4</h2>
             <div className="DotIcon"></div>
           </header>
           <div className="GaryLineSVG"></div>
           <div  className="SectionList">
             <li>MERN Week 4</li>
             <li>React useState</li>
             <li>Save code to Github</li>
             <li>Deployment App</li>
           </div>
         </ul>

         <p>Learn the fundamentals of MERN by careting application. The cost for 4 weeks is $500.00</p>

        <button id="CSharpBTN" onClick={PopUpHandler}>back to article</button>
        
      </section>
  </main>
    );

  }


  if(e.target.id === "PythonBTN"){
    setPopUpBTN("Schedule Mentorship")
    setArticle(
      <main>
      <header>
        <img  src={`/assets/icons/pythonIcon.png`} alt="" />
        <h1>Python Mentorship</h1>
      </header>
      <section className="SectionLayout-Container AdvanceMentorship">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla velit nihil eos modi natus. Unde, officiis, impedit, inventore vel culpa facilis voluptatibus nemo sapiente voluptates sequi omnis voluptatem mollitia quibusdam?</p>
     
        <ul>
           <header>
             <h2 >Week 1</h2>
             <div className="DotIcon"></div>
           </header>
           <div className="GaryLineSVG"></div>
           <div className="SectionList">
             <li>Python Week 1</li>
             <li>React useState</li>
             <li>Save code to Github</li>
             <li>Deployment App</li>
           </div>
         </ul>
         
         <ul>
           <header>
             <h2 >Week 2</h2>
             <div className="DotIcon"></div>
           </header>
           <div className="GaryLineSVG"></div>
           <div className="SectionList" >
             <li>Python Week 2</li>
             <li>React useState</li>
             <li>Save code to Github</li>
             <li>Deployment App</li>
           </div>
         </ul>

         <ul>
           <header>
             <h2 >Week 3</h2>
             <div className="DotIcon"></div>
           </header>
           <div className="GaryLineSVG"></div>
           <div className="SectionList" >
             <li>Python week 3</li>
             <li>React useState</li>
             <li>Save code to Github</li>
             <li>Deployment App</li>
           </div>
         </ul>

         <ul>
         <header>
             <h2 >Week 4</h2>
             <div className="DotIcon"></div>
           </header>
           <div className="GaryLineSVG"></div>
           <div  className="SectionList">
             <li>Python Week 4</li>
             <li>React useState</li>
             <li>Save code to Github</li>
             <li>Deployment App</li>
           </div>
         </ul>

        <p>Learn the fundamentals of Python by careting application. The cost for 4 weeks is $500.00</p>


         
        <button id="CSharpBTN" onClick={PopUpHandler}>back to article</button>
      </section>
  </main>
    );

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


                  <div className="PopupLayout-Container" style={{display: ArticleContainer ? "none" : "grid" }}>{Article}</div>
                 
                 

                  <aside>

                  <ul className='LearnTabs'>

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
                    
                  </aside>
              
                 
          </aside>

        </div>

      </main>
     
             
    </div>
  )
}


export default LearnToCode
