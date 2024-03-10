import React, { useEffect, useState } from 'react'

const QuestionTimer = ({timeout, onTimeOut, mode}) => {

  const [ remainingTime, setRemainingTime ] = useState(timeout)

  useEffect(()=>{
      const timeout2 = setTimeout(onTimeOut,timeout)
      return () => {
        clearTimeout(timeout2)
    }
  },[timeout, onTimeOut])


  useEffect(()=>{
      const interval = setInterval(()=>{
        setRemainingTime( prev => prev - 100)
      }, 100)

    return () => {
        clearInterval(interval)
    }
  },[])



  return (
    <progress id='question-time' max={timeout} value={remainingTime} className={mode}>QuestionTimer</progress>
  )
}

export default QuestionTimer