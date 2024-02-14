import React, { useState } from 'react'

const NewTask = () => {

  const [ inputValue, setInputValue ] = useState('')

  const handleChange = (e) => {
    setInputValue( prev => prev = e.target.value )
  }

  const handleClick = () => {
    if(inputValue.trim() === ''){
        return;
    }
    setInputValue('')
  }

  return (
    <div className='flex items-center gap-4'>
        <input 
            type="text" 
            className='w-64 px-2 py-1 rounded-sm bg-stone-200'
            onChange={handleChange}
            value={inputValue}
        />
        <button className='text-stone-700 hover:text-stone-950'>Add task</button>
    </div>
  )
}

export default NewTask