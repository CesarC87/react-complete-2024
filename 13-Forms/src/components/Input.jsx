import React from 'react'

const Input = ({label, id, error, ...props}) => {
  return (
    <div className="control no-margin">
            <label htmlFor={id}>{label}</label>
            <input 
              id={id} 
              type="email" 
              name="email" 
              onChange={(e)=>handleInputChange(e.target.name, e.target.value)}
              onBlur={(e)=>handleInputEdit(e.target.name, e.target.value)}
              {...props}
            />
            {error && <p>{error}</p>}
    </div>
  )
}

export default Input