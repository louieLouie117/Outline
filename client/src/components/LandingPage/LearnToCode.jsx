import React from 'react'



function LearnToCode(props) {
  return (
    <div className='LearnToCode-Container' >
      <header>
        <p>Have you been wanting to learn to code?</p>       
      </header>

      <main>

        <header>
          <h2>Fundamentals Outline</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum consectetur distinctio neque provident? Accusantium saepe, fuga delectus explicabo inventore libero iste quod fugit assumenda aperiam quidem provident vitae sapiente!</p>
        </header>

      <div>
        
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
              </li>

              <li>
                <img  src="/assets/icons/cssIcon.png" alt="" />
                <h4>CSS</h4>
              </li>

              <li>
                <img  src="/assets/icons/jsIcon.png" alt="" />
                <h4>JavaScript</h4>
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
                  <h4>React</h4>
                </li>

                <li>
                  <img  src="/assets/icons/vueIcon.png" alt="" />
                  <h4>Vue</h4>
                </li>

                <li>
                  <img  src="/assets/icons/angularIcon.png" alt="" />
                  <h4>Angular</h4>
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
                  <h4>C Sharp</h4>
                </li>

              <li>
                 <img  src="/assets/icons/jsIcon.png" alt="" />
                  <h4>MERN</h4>
                </li>

              

                <li>
                  <img  src="/assets/icons/pythonIcon.png" alt="" />
                  <h4>Python</h4>
            </li>
          
            </ul>
          </main>
        </section>

        </div>

      </main>


    </div>
  )
}


export default LearnToCode
