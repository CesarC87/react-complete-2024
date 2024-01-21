import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

const INIT_STATE = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
}

function App() {

  const [ userInput, setUserInput ] = useState(INIT_STATE)

  const handleChange = (inputId, newValue) => {
    setUserInput( prev => {
        return {
            ...prev,
            [inputId]: newValue
        }
    })
  }
  return (
    <>
      <Header/>
      <UserInput handleChange={handleChange} userInput={userInput}/>
      <Results userInput={userInput}/>
    </>
  )
}

export default App
