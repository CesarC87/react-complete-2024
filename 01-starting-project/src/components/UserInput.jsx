import React, {useState} from 'react'

const UserInput = ({handleChange,userInput}) => {

  
  return (
    <section id='user-input'>
        <div className="input-group">
            <p>
                <label htmlFor="">Initial investment</label>
                <input 
                    type="number" 
                    required 
                    onChange={(e)=>{handleChange('initialInvestment',e.target.value)}}
                    value={userInput.initialInvestment}
                />                
            </p>
            <p>
                <label htmlFor="">Annual investment</label>
                <input 
                    type="number" 
                    required 
                    onChange={(e)=>{handleChange('annualInvestment',e.target.value)}}
                    value={userInput.annualInvestment}
                />               
            </p>
            <p>
                <label htmlFor="">Expected return</label>
                <input 
                    type="number" 
                    required 
                    onChange={(e)=>{handleChange('expectedReturn',e.target.value)}}
                    value={userInput.expectedReturn}
                />               
            </p>
            <p>
                <label htmlFor="">Duration</label>
                <input 
                    type="number" 
                    required 
                    onChange={(e)=>{handleChange('duration',e.target.value)}}
                    value={userInput.duration}
                />               
            </p>
        </div>

    </section>
  )
}

export default UserInput