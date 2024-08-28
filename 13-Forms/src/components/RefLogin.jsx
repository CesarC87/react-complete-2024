import { useRef, useState } from "react";

export default function RefLogin() {

  const [ emailInvalid, setEmailInvalid ] = useState(false)

  const email = useRef()
  const password = useRef()
  

  const handleSubmit = (event) => {
    event.preventDefault() //* Previene el comportamiento por defecto del browser de mandar un http request y recargar la página
    const emailInput = email.current.value
    const passwordInput = password.current.value
    const emailIsvalid = emailInput.includes('@')

    if(!emailIsvalid){
      setEmailInvalid(true)
      return; // Si el email es invalido, termina aca la función con el return
    }
    console.log('Send http req...') // Si el email es invalido, este codigo no se ejecuta
  }

  // const isEmailInValid = didEdit.email && !inputValues.email.includes('@')

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            ref={email}
          />
          {emailInvalid && <div className="control-error"><p>Email invalido</p></div>}
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            ref={password}
          />
        </div>
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
