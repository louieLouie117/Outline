import React, { useState } from "react";


function LearnToCode(props) {

const [PopUpSection, setPopUpSection] = useState(true);
const [PopUpTitle, setPopUpTitle] = useState("Title");
const [PopUpDescription, setPopUpDescription] = useState("Description");
const [PopUpBTN, setPopUpBTN] = useState("BTN");
const [IconImage, setIconImage] = useState();




const PopUpHandler = (e)=>{
  setPopUpSection(false)

  if(e.target.innerText === "X" ){
      setPopUpSection(true)
    return
  }

  if(e.target.id === "HtmlBTN"){
    setPopUpTitle("What is HTML")
    setPopUpDescription("Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum consectetur distinctio neque provident? Accusantium saepe, fuga delectus explicabo inventore libero iste quod fugit assumenda aperiam quidem provident vitae sapiente!")
    setPopUpBTN("Schedule Meet Up")
    setIconImage("htmlIcon")
  }


  
  if(e.target.id === "CssBTN"){
    setPopUpTitle("What is CSS?")
    setPopUpDescription("Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum consectetur distinctio neque provident? Accusantium saepe, fuga delectus explicabo inventore libero iste quod fugit assumenda aperiam quidem provident vitae sapiente!")
    setPopUpBTN("Schedule Meet Up")
    setIconImage("cssIcon")

  }


  if(e.target.id === "JavaScriptBTN"){
    setPopUpTitle("What is JavaScript?")
    setPopUpDescription("Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum consectetur distinctio neque provident? Accusantium saepe, fuga delectus explicabo inventore libero iste quod fugit assumenda aperiam quidem provident vitae sapiente!")
    setPopUpBTN("Schedule Meet Up")
    setIconImage("jsIcon")

  }

  if(e.target.id === "ReactBTN"){
    setPopUpTitle("What is React.js?")
    setPopUpDescription("Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum consectetur distinctio neque provident? Accusantium saepe, fuga delectus explicabo inventore libero iste quod fugit assumenda aperiam quidem provident vitae sapiente!")
    setPopUpBTN("Schedule Meet Up")
    setIconImage("reactIcon")

  }


  
  if(e.target.id === "VueBTN"){
    setPopUpTitle("What is Vue.js?")
    setPopUpDescription("Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum consectetur distinctio neque provident? Accusantium saepe, fuga delectus explicabo inventore libero iste quod fugit assumenda aperiam quidem provident vitae sapiente!")
    setPopUpBTN("Schedule Meet Up")
    setIconImage("vueIcon")

  }


  if(e.target.id === "AngularBTN"){
    setPopUpTitle("What is Angular.js?")
    setPopUpDescription("Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum consectetur distinctio neque provident? Accusantium saepe, fuga delectus explicabo inventore libero iste quod fugit assumenda aperiam quidem provident vitae sapiente!")
    setPopUpBTN("Schedule Meet Up")
    setIconImage("angularIcon")

  }

  
  if(e.target.id === "CSharpBTN"){
    setPopUpTitle("What is C Sharp Stack?")
    setPopUpDescription("Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum consectetur distinctio neque provident? Accusantium saepe, fuga delectus explicabo inventore libero iste quod fugit assumenda aperiam quidem provident vitae sapiente!")
    setPopUpBTN("Schedule Mentorship")
    setIconImage("cSharpIcon")

  }


  
  if(e.target.id === "MernBTN"){
    setPopUpTitle("What is MERN?")
    setPopUpDescription("Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum consectetur distinctio neque provident? Accusantium saepe, fuga delectus explicabo inventore libero iste quod fugit assumenda aperiam quidem provident vitae sapiente!")
    setPopUpBTN("Schedule Mentorship")
    setIconImage("jsIcon")

  }


  if(e.target.id === "PythonBTN"){
    setPopUpTitle("What is Python?")
    setPopUpDescription("Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum consectetur distinctio neque provident? Accusantium saepe, fuga delectus explicabo inventore libero iste quod fugit assumenda aperiam quidem provident vitae sapiente!")
    setPopUpBTN("Schedule Mentorship")
    setIconImage("PythonIcon")

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


                  <main>
                    <header>
                      <img  src={`/assets/icons/${IconImage}.png`} alt="" />
                      <h1>{PopUpTitle}</h1>
                    </header>
                    <section>
                    <p>{PopUpDescription}</p>
                    </section>
                   
                  </main>
                  <footer>
                    <div className="PopFooter-Container">
                    <img  src="/assets/icons/calendarIcon.png" alt="" />
                    <button>{PopUpBTN}</button>
                    </div>
                  </footer>
                 
          </aside>

        </div>

      </main>


    </div>
  )
}


export default LearnToCode
