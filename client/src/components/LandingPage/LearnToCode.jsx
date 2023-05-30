import React, { useState } from "react";


function LearnToCode(props) {

  const [PopUpSection, setPopUpSection] = useState(true);

  const [BeginnerArticleContainer, setBeginnerArticleContainer] = useState(true);
  const [IntermediateArticleContainer, setIntermediateArticleContainer] = useState(true);
  const [AdvanceArticleContainer, setAdvanceArticleContainer] = useState(true);

  const [Article1, setArticle1] = useState();
  const [Article2, setArticle2] = useState();
  const [Article3, setArticle3] = useState();





  const ArticlesHandler = (e) => {

    if (e.target.innerText === "What is HTML?" || e.target.id === "HtmlBTN") {
      setPopUpSection(false)
      setBeginnerArticleContainer(false)
      setIntermediateArticleContainer(true)
      setAdvanceArticleContainer(true)
      setArticle1(false)
      setArticle2(true)
      setArticle3(true)
    }

    if (e.target.innerText === "What is CSS?" || e.target.id === "CssBTN") {
      setPopUpSection(false)
      setBeginnerArticleContainer(false)
      setIntermediateArticleContainer(true)
      setAdvanceArticleContainer(true)
      setArticle1(true)
      setArticle2(false)
      setArticle3(true)
    }



    if (e.target.innerText === "What is JavaScript?" || e.target.id === "JavaScriptBTN") {
      setPopUpSection(false)
      setBeginnerArticleContainer(false)
      setIntermediateArticleContainer(true)
      setAdvanceArticleContainer(true)
      setArticle1(true)
      setArticle2(true)
      setArticle3(false)
    }


    if (e.target.innerText === "What is React.js?" || e.target.id === "ReactBTN") {
      setPopUpSection(false)
      setBeginnerArticleContainer(true)
      setIntermediateArticleContainer(false)
      setAdvanceArticleContainer(true)
      setArticle1(false)
      setArticle2(true)
      setArticle3(true)
    }

    if (e.target.innerText === "What is Vue.js?" || e.target.id === "VueBTN") {
      setPopUpSection(false)
      setBeginnerArticleContainer(true)
      setIntermediateArticleContainer(false)
      setAdvanceArticleContainer(true)
      setArticle1(true)
      setArticle2(false)
      setArticle3(true)
    }


    if (e.target.innerText === "What is Angular.js?" || e.target.id === "AngularBTN") {
      setPopUpSection(false)
      setBeginnerArticleContainer(true)
      setIntermediateArticleContainer(false)
      setAdvanceArticleContainer(true)
      setArticle1(true)
      setArticle2(true)
      setArticle3(false)
    }


    if (e.target.innerText === "C Sharp Mentorship" || e.target.id === "CSharpBTN") {
      setPopUpSection(false)
      setBeginnerArticleContainer(true)
      setIntermediateArticleContainer(true)
      setAdvanceArticleContainer(false)
      setArticle1(false)
      setArticle2(true)
      setArticle3(true)
    }


    if (e.target.innerText === "MERN Mentorship" || e.target.id === "MernBTN") {
      setPopUpSection(false)
      setBeginnerArticleContainer(true)
      setIntermediateArticleContainer(true)
      setAdvanceArticleContainer(false)
      setArticle1(true)
      setArticle2(false)
      setArticle3(true)
    }

    if (e.target.innerText === "Python Mentorship" || e.target.id === "PythonBTN") {
      setPopUpSection(false)
      setBeginnerArticleContainer(true)
      setIntermediateArticleContainer(true)
      setAdvanceArticleContainer(false)
      setArticle1(true)
      setArticle2(true)
      setArticle3(false)
    }




  }


  const PopUpHandler = (e) => {
    setPopUpSection(false)
    setBeginnerArticleContainer(false)



    if (e.target.innerText === "X") {
      setPopUpSection(true)

      return
    }



  }




  return (
    <div className='OutlineLayout-Container' >
      <header>
      </header>

      <main>

        <header>
       
          <p>Are you looking for a mentor to help you start or grow in website development? Then you have come to the right place. </p>

        </header>

        <div>  {/* need to name this div */}
        {/* <h2>Mentorship Outline</h2> */}

          <section>
            <header>
              <div className="DotIcon"></div>
              <h3>Beginner</h3>

            </header>
            <div className="GaryLineSVG"></div>

            <main>
              <p>If you are new to coding/programming start with HTML, CSS, and JavaScript.</p>
              <button id="HtmlBTN" onClick={ArticlesHandler}> Learn more</button>

              <ul className='LearnTabs'>
                  <div className="VerticalGaryLineSVG"></div>

                  <li>
                    <img src="/assets/icons/htmlIcon.png" alt="" />
                    <h4>HTML</h4>
                  </li>

                <li>
                  <img src="/assets/icons/cssIcon.png" alt="" />
                  <h4>CSS</h4>
                  <button id="CssBTN" onClick={ArticlesHandler}></button>
                </li>

                <li>
                  <img src="/assets/icons/jsIcon.png" alt="" />
                  <h4>JavaScript</h4>
                  <button id="JavaScriptBTN" onClick={ArticlesHandler}></button>
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
              <p>The next level is JavaScript frameworks that are designed for fast application development. There are three most popular you can pick one.</p>
              <button id="ReactBTN" onClick={ArticlesHandler}>Lean more.</button>
        
              <ul className='LearnTabs'>
              <div className="VerticalGaryLineSVG"></div>

                <li>
                  <img src="/assets/icons/reactIcon.png" alt="" />
                  <h4>React.js</h4>

                </li>

                <li>
                  <img src="/assets/icons/vueIcon.png" alt="" />
                  <h4>Vue.js</h4>

                </li>

                <li>
                  <img src="/assets/icons/angularIcon.png" alt="" />
                  <h4>Angular.js</h4>

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
              <p>Once you get to the Advance level you will be able to code full stack web apps. In this level a person will be able to develop both client and server software. I mentor three different full-stack.</p>
              <button id="CSharpBTN" onClick={ArticlesHandler}>Learn more.</button>

              <ul className='LearnTabs'>

              <div className="VerticalGaryLineSVG"></div>

              {/* <div className="HorizontalGaryLineSVG"></div> */}

                <li>
                  <img src="/assets/icons/cSharpIcon.png" alt="" />
                  <h4>C Sharp Stack</h4>

                </li>

                <li>
                  <img src="/assets/icons/jsIcon.png" alt="" />
                  <h4>MERN Stack</h4>
                  <button id="MernBTN" onClick={ArticlesHandler}></button>

                </li>



                <li>
                  <img src="/assets/icons/pythonIcon.png" alt="" />
                  <h4>Python Stack</h4>
                  <button id="PythonBTN" onClick={ArticlesHandler}></button>

                </li>

              </ul>
            </main>
          </section>


          <aside className="PopSection" style={{ display: PopUpSection ? "none" : "grid" }}>
            <button onClick={PopUpHandler}>X</button>


            <div className="PopupLayout-Container" style={{ display: BeginnerArticleContainer ? "none" : "grid" }}>

              <div className="ArticleState-Container">
                <main style={{ height: Article1 ? "20px" : "auto" }}>

                  <header>
                    <img src={`/assets/icons/htmlIcon.png`} alt="" />
                    <img src={`/assets/icons/cssIcon.png`} alt="" />
                    <img src={`/assets/icons/jsIcon.png`} alt="" />

                    <h1 onClick={ArticlesHandler}>Beginner Mentorship</h1>
                  </header>
                  <section className="SectionLayout-Container AdvanceMentorship">
                    {/* <section>
                      <p>HTML is the standard markup language for creating Web pages.</p>   
                      <p>CSS describes how HTML elements are to be displayed.</p>
                      <p>JavaScript can update and change both HTML and CSS.</p>
                    </section> */}
                    <ul>
                      <header>
                        <h2>Introduction</h2>
                        <div className="DotIcon"></div>
                      </header>
                      <div className="GaryLineSVG"></div>
                      <div className="SectionList">
                      <li>Environment set up</li>
                        <li>Intro to Website Design</li>
                        <li>Intro to HTML</li>
                        <li>Intro to CSS</li>
                        <li>Intro to Javascript</li>
                      </div>
                    </ul>

                    <ul>
                      <header>
                        <h2>Setup Project</h2>
                        <div className="DotIcon"></div>
                      </header>
                      <div className="GaryLineSVG"></div>
                      <div className="SectionList" >
                      <li>Working with all files.</li>
                      <li>Setting up Github</li>
                      <li>Saving work to Github</li>
                      </div>
                    </ul>

                    <ul>
                      <header>
                        <h2>Deployment</h2>
                        <div className="DotIcon"></div>
                      </header>
                      <div className="GaryLineSVG"></div>
                      <div className="SectionList" >
                        <li>Getting a domain</li>
                        <li>Deploying Website from Github</li>
                        <li>Setting up domain DNS</li>
                        <li>Updating website.</li>
                        <li>Version Control.</li>
                      </div>
                    </ul>



                    <footer>
                    <p>The basics. Learn the fundamentals of MERN by developing application. The cost for 4 weeks is $500.00</p>

                      <div className="PopFooter-Container">
                        <img src="/assets/icons/calendarIcon.png" alt="" />
                        <a href="https://calendly.com/cardona-luis/15min">
                          <button>View Enrolment Cost</button>
                        </a>
                      </div>
                    </footer>

                  </section>

                 
                  <footer>
                    <div className="PopFooter-Container">
                      <img src="/assets/icons/calendarIcon.png" alt="" />
                    </div>
                  </footer>
                </main>

                {/* <main style={{ height: Article2 ? "20px" : "auto" }}>

                  <header>
                    <img src={`/assets/icons/cssIcon.png`} alt="" />
                    <h1 onClick={ArticlesHandler}>What is CSS?</h1>
                  </header>

                  <section>
                    <p>CSS stands for Cascading Style Sheets </p>
                    <p>CSS describes how HTML elements are to be displayed.</p>
                    <a href="https://www.w3schools.com/whatis/whatis_css.asp"> Learn more</a>
                   
                  </section>
             
                </main>

                <main style={{ height: Article3 ? "20px" : "auto" }}>

                  <header>
                    <img src={`/assets/icons/jsIcon.png`} alt="" />
                    <h1 onClick={ArticlesHandler}>What is JavaScript?</h1>
                  </header>

                  <section>
                    <p>JavaScript can update and change both HTML and CSS.</p>
                    <a href="https://www.w3schools.com/whatis/whatis_js.asp">Learn more</a>
                   
                  </section>
               
                </main> */}

            

              </div>

            </div>



            <div className="PopupLayout-Container" style={{ display: IntermediateArticleContainer ? "none" : "grid" }}>
              <div className="ArticleState-Container">
                <main style={{ height: Article1 ? "20px" : "auto" }}>

                  <header>
                    <img src={`/assets/icons/htmlIcon.png`} alt="" />
                    <h1 onClick={ArticlesHandler}>What is React.js?</h1>
                  </header>

                  <section>
                    <p>React is a JavaScript library created by Facebook</p>
                    <p>React is a User Interface (UI) library.</p>
                    {/* <a href="https://www.w3schools.com/whatis/whatis_react.asp">Learn more</a> */}
                  </section>

                  <section className="SectionLayout-Container AdvanceMentorship">
                    {/* <section>
                      <p>HTML is the standard markup language for creating Web pages.</p>   
                      <p>CSS describes how HTML elements are to be displayed.</p>
                      <p>JavaScript can update and change both HTML and CSS.</p>
                    </section> */}
                    <ul>
                      <header>
                        <h2>Introduction</h2>
                        <div className="DotIcon"></div>
                      </header>
                      <div className="GaryLineSVG"></div>
                      <div className="SectionList">
                      <li>Environment set up</li>
                        <li>Intro to Website Design</li>
                        <li>Intro to React.js</li>
                      </div>
                    </ul>

                    <ul>
                      <header>
                        <h2>Setup Project</h2>
                        <div className="DotIcon"></div>
                      </header>
                      <div className="GaryLineSVG"></div>
                      <div className="SectionList" >
                      <li>Working with all files.</li>
                      <li>Setting up Github</li>
                      <li>Saving work to Github</li>
                      </div>
                    </ul>

                    <ul>
                      <header>
                        <h2>Deployment</h2>
                        <div className="DotIcon"></div>
                      </header>
                      <div className="GaryLineSVG"></div>
                      <div className="SectionList" >
                        <li>Getting a domain</li>
                        <li>Deploying Website from Github</li>
                        <li>Setting up domain DNS</li>
                        <li>Updating website.</li>
                        <li>Version Control.</li>
                      </div>
                    </ul>



                    <footer>
                    <p>The basics. Learn the fundamentals of MERN by developing application. The cost for 4 weeks is $500.00</p>

                      <div className="PopFooter-Container">
                        <img src="/assets/icons/calendarIcon.png" alt="" />
                        <a href="https://calendly.com/cardona-luis/15min">
                          <button>View Enrolment Cost</button>
                        </a>
                      </div>
                    </footer>

                  </section>
                  <footer>
                    <div className="PopFooter-Container">
                      <img src="/assets/icons/calendarIcon.png" alt="" />
                   
                    </div>
                  </footer>
                </main>

                <main style={{ height: Article2 ? "20px" : "auto" }}>

                  <header>
                    <img src={`/assets/icons/cssIcon.png`} alt="" />
                    <h1 onClick={ArticlesHandler}>What is Vue.js?</h1>
                  </header>

                  <section>
                    <p>Vue.js lets you extend HTML with HTML attributes called directives</p>
                    <p>Vue.js directives offers functionality to HTML applications</p>
                    <p>Vue.js provides built-in directives and user defined directives</p>
                    <a href="https://www.w3schools.com/whatis/whatis_vue.asp">Learn more</a>
                  </section>
            

                  
              
                </main>

                <main style={{ height: Article3 ? "20px" : "auto" }}>

                  <header>
                    <img src={`/assets/icons/jsIcon.png`} alt="" />
                    <h1 onClick={ArticlesHandler}>What is Angular.js?</h1>
                  </header>

                  <section>
                  <p>AngularJS lets you extend HTML with HTML attributes called directives</p>
                    <p>AngularJS directives offers functionality to HTML applications</p>
                    <p>AngularJS provides built-in directives and user defined directives</p>
                    <a href="https://www.w3schools.com/whatis/whatis_angularjs.asp">Learn more</a>
                  </section>
              
                </main>

            

              </div>


            </div>

            <div className="PopupLayout-Container" style={{ display: AdvanceArticleContainer ? "none" : "grid" }}>
              <div className="ArticleState-Container">

                <main style={{ height: Article1 ? "20px" : "auto" }}>
                  <header>
                    <img src={`/assets/icons/cSharpIcon.png`} alt="" />
                    <h1 onClick={ArticlesHandler}>C Sharp Mentorship</h1>
                  </header>
                  <section className="SectionLayout-Container AdvanceMentorship">
                    
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
                      <div className="SectionList">
                        <li>CSharp week 4</li>
                        <li>React useState</li>
                        <li>Save code to Github</li>
                        <li>Deployment App</li>
                      </div>
                    </ul>

                    <p>Learn the fundamentals of C Sharp by developing application. The cost for 4 weeks is $500.00</p>


                    <footer>
                      <div className="PopFooter-Container">
                        <img src="/assets/icons/calendarIcon.png" alt="" />
                        <a href="https://calendly.com/cardona-luis/15min">
                          <button>View Enrolment Cost</button>
                        </a>
                      </div>
                    </footer>
                  </section>
                </main>

                <main style={{ height: Article2 ? "20px" : "auto" }}>
                  <header>
                    <img src={`/assets/icons/jsIcon.png`} alt="" />
                    <h1 onClick={ArticlesHandler}>MERN Mentorship</h1>
                  </header>
                  <section className="SectionLayout-Container AdvanceMentorship">
                    
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
                      <div className="SectionList">
                        <li>MERN Week 4</li>
                        <li>React useState</li>
                        <li>Save code to Github</li>
                        <li>Deployment App</li>
                      </div>
                    </ul>

                    <p>Learn the fundamentals of MERN by developing application. The cost for 4 weeks is $500.00</p>

                    <footer>
                      <div className="PopFooter-Container">
                        <img src="/assets/icons/calendarIcon.png" alt="" />
                        <a href="https://calendly.com/cardona-luis/15min">
                          <button>View Enrolment Cost</button>
                        </a>
                      </div>
                    </footer>

                  </section>
                </main>

                <main style={{ height: Article3 ? "20px" : "auto" }}>
                  <header>
                    <img src={`/assets/icons/pythonIcon.png`} alt="" />
                    <h1 onClick={ArticlesHandler}>Python Mentorship</h1>
                  </header>
                  <section className="SectionLayout-Container AdvanceMentorship">
                    
                  

                    <p>Python course has ended. Please check back on other time. </p>



                    
                  </section>

                  
                </main>

            

              </div>

            </div>


          </aside>

        </div>

      </main>




    </div>
  )
}


export default LearnToCode
