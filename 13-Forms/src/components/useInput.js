import React, { useState } from 'react'

const useInput = (defaultValue, validationFn) => {

    const [ enteredValue, setEnteredValue ] = useState(defaultValue)
    const [ didEdit, setDidEdit ] = useState(false)

    const valueIsValid = validationFn(enteredValue)

    const handleInputChange = (e) => {
        setEnteredValue(e.target.value)
        setDidEdit(false)
      }
    
      const handleInputBlur = () => {
        setDidEdit(true)
      }

  return {
    enteredValue,
    handleInputBlur,
    handleInputChange,
    hasError: didEdit && !valueIsValid
  }
}

export default useInput