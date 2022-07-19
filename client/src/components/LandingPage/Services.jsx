import React from 'react'
import Estimate from '../Estimate'
// import Subscription from '../Subscription'

function Services(props) {




  return (
    <div className='Service-Container'>
        <header>
        </header>

      <main>

        <aside className='ServiceFraise'>
            <p>Helping businesses with</p>
            <p>mobile websites and apps</p>
        </aside>

        <section>
          <Estimate></Estimate>
        </section>


          <header>
            <h1>My Process</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum consectetur distinctio neque provident? Accusantium saepe, fuga delectus explicabo inventore libero iste quod fugit assumenda aperiam quidem provident vitae sapiente!</p>


            <section>
              <header>
                <div className="DotIcon"></div>
                <h2>Phase 1: Design</h2>
              </header>

              <main>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum consectetur distinctio neque provident? Accusantium saepe, fuga delectus explicabo inventore libero iste quod fugit assumenda aperiam quidem provident vitae sapiente!</p>
              </main>
          
            </section>


            <section>
              <header>
                <div className="DotIcon"></div>
                <h2>Phase 2: Development</h2>
              </header>

              <main>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum consectetur distinctio neque provident? Accusantium saepe, fuga delectus explicabo inventore libero iste quod fugit assumenda aperiam quidem provident vitae sapiente!</p>
              </main>
          
            </section>


            <section>
              <header>
                <div className="DotIcon"></div>
                <h2>Phase 3: Deployment</h2>
              </header>

              <main>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum consectetur distinctio neque provident? Accusantium saepe, fuga delectus explicabo inventore libero iste quod fugit assumenda aperiam quidem provident vitae sapiente!</p>
              </main>
          
            </section>

        


          </header>

  


        {/* <Subscription></Subscription> */}

     
      </main>

    </div>
  )
}


export default Services
