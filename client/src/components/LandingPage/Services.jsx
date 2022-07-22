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
            <p>Helping businesses </p>
            <p>with mobile websites </p>
        </aside>

      


        <p>My focus it to design and develop a pixel perfect mobile website that works on all screen.</p>


        <section>
          <Estimate></Estimate>
        </section>

          <header>
            <h1>My Process</h1>
            <section>
              <header>
                <div className="DotIcon"></div>
                <h2>Design your website.</h2>
              </header>
            </section>


            <section>
              <header>
                <div className="DotIcon"></div>
                <h2>Development your website.</h2> 
              </header>          
            </section>


            <section>
              <header>
                <div className="DotIcon"></div>
                <h2>Take your website online.</h2>
              </header>        
            </section>

        


          </header>

  


        {/* <Subscription></Subscription> */}

     
      </main>

    </div>
  )
}


export default Services
