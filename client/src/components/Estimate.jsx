import React from 'react'
import OnlineEstimateStyles from '../models/OnlineEstimateStyles.css'

function Estimate(props) {
    <OnlineEstimateStyles></OnlineEstimateStyles>

    const OnlineEstimateHandler = (e) =>{
        alert("Estimate button was click")
    }



  return (
    <div className='OnlineEstimate-Container'>
        <h1>Online Estimate</h1>
            <select name="" id="">
                <option value=""onSelect={OnlineEstimateHandler} >Select Services</option>
                <option value=""onSelect={OnlineEstimateHandler} >Website</option>
                <option value=""onSelect={OnlineEstimateHandler} >Application</option>

            </select>
    </div>
  )
}

Estimate.propTypes = {}

export default Estimate
