import React, { useCallback, useState } from 'react'

const ConfigureCounter = ({onSet}) => {

  const [enteredNumber, setEnteredNumber] = useState(0);

  const handleChange = useCallback((event) => {
    setEnteredNumber(+event.target.value);
  },[])

  const handleSetClick = useCallback(() => {
    onSet(enteredNumber);
    setEnteredNumber(0);
  },[])

  return (
    <section id="configure-counter">
          <h2>Set Counter</h2>
          <input type="number" onChange={handleChange} value={enteredNumber} />
          <button onClick={handleSetClick}>Set</button>
    </section>
  )
}

export default ConfigureCounter