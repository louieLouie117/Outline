import React from 'react'
import WorkProjectsStyles from '../models/WorkProjectsStyles.css'

function WorkProjects(props) {

  <WorkProjectsStyles></WorkProjectsStyles>
  return (
    <div className='WorkProject-Container'>

      <main>
        <h1>My Work</h1>


        <header>


        <picture>
            <h2>Application</h2>
            <img  src="/assets/showCase/GarageSallyWebsite.png" alt="" />
            <footer>
            <button ><a href="https://garagesallyapp.com/" > view </a></button>
            </footer>
        </picture>

          <picture> 
            <h2>Website</h2>
            <img  src="/assets/showCase/website1.png" alt="" />
            <footer>
            <button> <a href="https://www.deltabarandgrill.com/">view</a></button>
            </footer>
          </picture>

          

            <picture>
            <h2>Website</h2>
            <img  src="/assets/showCase/website2.png" alt="" />
            <footer>
            <button > <a href="https://icy-flower-0ac939810.1.azurestaticapps.net/" > view and purchase </a></button>
            </footer>

            </picture>

            <picture>
            <h2>Website</h2>
            <img  src="/assets/showCase/website3.png" alt="" />
            <footer>
            <button > <a href="https://www.jrprolandscaping.com/" > view </a></button>
            </footer>
            </picture>
            
            <picture>
            <h2>Website</h2>
            <img  src="/assets/showCase/website4.png" alt="" />
            <footer>
            <button ><a href="https://www.ibupholstery.com/" > view </a></button>
            </footer>
            </picture>

          

            <picture>
            <h2>Design</h2>
            <img  src="/assets/showCase/LeeWebsite.png" alt="" />
            <footer>
            <button ><a href="https://calendly.com/cardona-luis/15min" >Make an Appointment</a></button>
            </footer>
            </picture>

            <picture>
            <h2>Design</h2>
            <img  src="/assets/showCase/PizzaWebsite.png" alt="" />
            <footer>
            <button ><a href="https://calendly.com/cardona-luis/15min" >Make an Appointment</a></button>
            </footer>
            </picture>
            </header>


      </main>
      <p>swipe to see more &#62; &#62;</p>



    </div>
  )
}


export default WorkProjects
