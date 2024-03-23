import React, { useState } from 'react'
import Input from './Input'
import { hasMinLength, isEmail, isNotEmpty } from '../util/validation'
import useInput from './useInput'

const StateLogin = () => {
    
    const { 
      enteredValue: emailValue, 
      handleInputBlur: handleEmailBlur, 
      handleInputChange: handleEmailChange,
      hasError: emailError 
    } = useInput('', (value)=> isEmail(value) && isNotEmpty(value))
    
    const { 
      enteredValue: passwordValue, 
      handleInputBlur: handlePassBlur, 
      handleInputChange: handlePassChange,
      hasError: passwordError
    } = useInput('', (value)=> !hasMinLength(value, 6))
    
  
    const handleSubmit = (event) => {
      event.preventDefault() //* Previene el comportamiento por defecto del browser de mandar un http request y recargar la página
      if(emailError || passwordError){
        return;
      }
      console.log(emailValue,passwordValue)
    }
  
    // const isEmailInValid = didEdit.email && !isEmail(enteredValue.email) && !isNotEmpty(enteredValue.email)
    // const isPasswordInValid = didEdit.password && !hasMinLength(enteredValue.password, 6)
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="control-row">
          <Input
            label={'Email'}
            id={'email'}
            type={'email'}
            name={'email'}
            value={emailValue}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            error={emailError && 'Por favor, ingresá un email válido'}
          />      
          <Input
            label={'Password'}
            id={'password'}
            type={'password'}
            name={'password'}
            value={passwordValue}
            onChange={handlePassChange}
            onBlur={handlePassBlur}
            error={passwordError && 'Password too short'}
          />          
        </div>
        <p className="form-actions">
          <button className="button button-flat">Reset</button>
          <button className="button">Login</button>
        </p>
      </form>
    );
}

export default StateLogin