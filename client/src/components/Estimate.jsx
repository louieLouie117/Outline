
import React from 'react'
import OnlineEstimateStyles from '../models/OnlineEstimateStyles.css'

function Estimate(props) {
    <OnlineEstimateStyles></OnlineEstimateStyles>

    const OnlineEstimateHandler = (e) =>{
        console.log("Item selected",e.target.value)
    }



  return (
    <div className='OnlineEstimate-Container'>
        <h1>Online Estimate</h1>
        <form>
            <select name="" id="" onChange={OnlineEstimateHandler}>
                <option value="Select Services">Select Services</option>
                <option value="Website">Website</option>
                <option value="Application">Application</option>
            </select>
        </form>
    </div>
  )
}

Estimate.propTypes = {}

export default Estimate
