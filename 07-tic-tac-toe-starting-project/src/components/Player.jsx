import React, { useState } from 'react'

const Player = ({name, symbol, isActive,handleChangeName}) => {

  const [ isEditing, setIsEditing ] = useState(false)
  const [ newName, setNewName ] = useState(name)

  const handleEdit = () => {
    setIsEditing( prev => !prev)
    isEditing && handleChangeName(symbol, newName)
  }
  return (
    <li className={isActive ? 'active' : undefined}>
        <span className='player'>
            {!isEditing ? 
                <span className="player-name">{newName ? newName : name}</span> : 
                <input type="text" value={newName} onChange={(e)=>setNewName(e.target.value)}></input>}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}

export default Player