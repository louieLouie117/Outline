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
                  <img src="/assets/icons/htmlIcon.png" alt="" />
                  <h4>HTML</h4>
                  <button id="HtmlBTN" onClick={ArticlesHandler}></button>
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
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, molestiae illum amet reiciendis atque earum, similique eos quo explicabo possimus esse culpa nulla placeat aliquid nobis. Neque, incidunt! Ipsum, dicta.</p>
              <ul className='LearnTabs'>
                <li>
                  <img src="/assets/icons/reactIcon.png" alt="" />
                  <h4>React.js</h4>
                  <button id="ReactBTN" onClick={ArticlesHandler}></button>

                </li>

                <li>
                  <img src="/assets/icons/vueIcon.png" alt="" />
                  <h4>Vue.js</h4>
                  <button id="VueBTN" onClick={ArticlesHandler}></button>

                </li>

                <li>
                  <img src="/assets/icons/angularIcon.png" alt="" />
                  <h4>Angular.js</h4>
                  <button id="AngularBTN" onClick={ArticlesHandler}></button>

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
                  <img src="/assets/icons/cSharpIcon.png" alt="" />
                  <h4>C Sharp Stack</h4>
                  <button id="CSharpBTN" onClick={ArticlesHandler}></button>

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
                <main style={{ height: Article1 ? "20px" : "500px" }}>

                  <header>
                    <img src={`/assets/icons/htmlIcon.png`} alt="" />
                    <h1 onClick={ArticlesHandler}>What is HTML?</h1>
                  </header>

                  <section>
                    <p>P1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
                    <p>P2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>

                    <p>P3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
                  </section>
                  <footer>
                    <div className="PopFooter-Container">
                      <img src="/assets/icons/calendarIcon.png" alt="" />
                      <a href="https://calendly.com/cardona-luis/15min">
                        <button>Schedule Meet up</button>
                      </a>
                    </div>
                  </footer>
                </main>

                <main style={{ height: Article2 ? "20px" : "500px" }}>

                  <header>
                    <img src={`/assets/icons/cssIcon.png`} alt="" />
                    <h1 onClick={ArticlesHandler}>What is CSS?</h1>
                  </header>

                  <section>
                    <p>P1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
                    <p>P2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>

                    <p>P3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
                  </section>
                  <footer>
                    <div className="PopFooter-Container">
                      <img src="/assets/icons/calendarIcon.png" alt="" />
                      <a href="https://calendly.com/cardona-luis/15min">
                        <button>Schedule Meet up</button>
                      </a>
                    </div>
                  </footer>
                </main>

                <main style={{ height: Article3 ? "20px" : "500px" }}>

                  <header>
                    <img src={`/assets/icons/jsIcon.png`} alt="" />
                    <h1 onClick={ArticlesHandler}>What is JavaScript?</h1>
                  </header>

                  <section>
                    <p>P1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
                    <p>P2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>

                    <p>P3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
                  </section>
                  <footer>
                    <div className="PopFooter-Container">
                      <img src="/assets/icons/calendarIcon.png" alt="" />
                      <a href="https://calendly.com/cardona-luis/15min">
                        <button>Schedule Meet up</button>
                      </a>
                    </div>
                  </footer>
                </main>

              </div>

            </div>



            <div className="PopupLayout-Container" style={{ display: IntermediateArticleContainer ? "none" : "grid" }}>
              <div className="ArticleState-Container">
                <main style={{ height: Article1 ? "20px" : "500px" }}>

                  <header>
                    <img src={`/assets/icons/htmlIcon.png`} alt="" />
                    <h1 onClick={ArticlesHandler}>What is React.js?</h1>
                  </header>

                  <section>
                    <p>P1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
                    <p>P2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>

                    <p>P3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
                  </section>
                  <footer>
                    <div className="PopFooter-Container">
                      <img src="/assets/icons/calendarIcon.png" alt="" />
                      <a href="https://calendly.com/cardona-luis/15min">
                        <button>Schedule Meet up</button>
                      </a>
                    </div>
                  </footer>
                </main>

                <main style={{ height: Article2 ? "20px" : "500px" }}>

                  <header>
                    <img src={`/assets/icons/cssIcon.png`} alt="" />
                    <h1 onClick={ArticlesHandler}>What is Vue.js?</h1>
                  </header>

                  <section>
                    <p>P1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
                    <p>P2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>

                    <p>P3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
                  </section>
                  <footer>
                    <div className="PopFooter-Container">
                      <img src="/assets/icons/calendarIcon.png" alt="" />
                      <a href="https://calendly.com/cardona-luis/15min">
                        <button>Schedule Meet up</button>
                      </a>
                    </div>
                  </footer>
                </main>

                <main style={{ height: Article3 ? "20px" : "500px" }}>

                  <header>
                    <img src={`/assets/icons/jsIcon.png`} alt="" />
                    <h1 onClick={ArticlesHandler}>What is Angular.js?</h1>
                  </header>

                  <section>
                    <p>P1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
                    <p>P2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>

                    <p>P3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit eius neque iste deleniti corrupti quaerat sed at reprehenderit ex, assumenda deserunt cum minima provident illum quod, rerum quis aperiam.</p>
                  </section>
                  <footer>
                    <div className="PopFooter-Container">
                      <img src="/assets/icons/calendarIcon.png" alt="" />
                      <a href="https://calendly.com/cardona-luis/15min">
                        <button>Schedule Meet up</button>
                      </a>
                    </div>
                  </footer>
                </main>

              </div>


            </div>

            <div className="PopupLayout-Container" style={{ display: AdvanceArticleContainer ? "none" : "grid" }}>
              <div className="ArticleState-Container">

                <main style={{ height: Article1 ? "20px" : "500px" }}>
                  <header>
                    <img src={`/assets/icons/cSharpIcon.png`} alt="" />
                    <h1 onClick={ArticlesHandler}>C Sharp Mentorship</h1>
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
                      <div className="SectionList">
                        <li>CSharp week 4</li>
                        <li>React useState</li>
                        <li>Save code to Github</li>
                        <li>Deployment App</li>
                      </div>
                    </ul>

                    <p>Learn the fundamentals of C Sharp by careting application. The cost for 4 weeks is $500.00</p>


                    <footer>
                      <div className="PopFooter-Container">
                        <img src="/assets/icons/calendarIcon.png" alt="" />
                        <a href="https://calendly.com/cardona-luis/15min">
                          <button>Schedule Meet up</button>
                        </a>
                      </div>
                    </footer>
                  </section>
                </main>

                <main style={{ height: Article2 ? "20px" : "500px" }}>
                  <header>
                    <img src={`/assets/icons/jsIcon.png`} alt="" />
                    <h1 onClick={ArticlesHandler}>MERN Mentorship</h1>
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
                      <div className="SectionList">
                        <li>MERN Week 4</li>
                        <li>React useState</li>
                        <li>Save code to Github</li>
                        <li>Deployment App</li>
                      </div>
                    </ul>

                    <p>Learn the fundamentals of MERN by careting application. The cost for 4 weeks is $500.00</p>

                    <footer>
                      <div className="PopFooter-Container">
                        <img src="/assets/icons/calendarIcon.png" alt="" />
                        <a href="https://calendly.com/cardona-luis/15min">
                          <button>Schedule Meet up</button>
                        </a>
                      </div>
                    </footer>

                  </section>
                </main>

                <main style={{ height: Article3 ? "20px" : "500px" }}>
                  <header>
                    <img src={`/assets/icons/pythonIcon.png`} alt="" />
                    <h1 onClick={ArticlesHandler}>Python Mentorship</h1>
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
                      <div className="SectionList">
                        <li>Python Week 4</li>
                        <li>React useState</li>
                        <li>Save code to Github</li>
                        <li>Deployment App</li>
                      </div>
                    </ul>

                    <p>Learn the fundamentals of Python by careting application. The cost for 4 weeks is $500.00</p>



                    <footer>
                      <div className="PopFooter-Container">
                        <img src="/assets/icons/calendarIcon.png" alt="" />
                        <a href="https://calendly.com/cardona-luis/15min">
                          <button>Schedule Meet up</button>
                        </a>
                      </div>
                    </footer>
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
