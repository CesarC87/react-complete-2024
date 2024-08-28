import React, { useRef } from 'react'

const Answers = ({answerState,selectedAnswer,answers, handleSelectAnswer}) => {


  const shuffledAnswers = useRef()

  if(!shuffledAnswers.current){
    shuffledAnswers.current = [...answers]
    shuffledAnswers.current.sort(()=> Math.random() - 0.5)
  }

  return (
    <ul id='answers'>
            {
                shuffledAnswers.current.map( (answer,idx) => {
                    const isSelected = selectedAnswer === answer
                    let cssClass = ''
                    answerState === 'answered' && isSelected && (cssClass = 'selected');
                    (answerState === 'wrong' || answerState === 'correct') && isSelected && (cssClass = answerState)
                    
                    return (
                    <li key={answer} className='answer'>
                        <button 
                            onClick={()=>handleSelectAnswer(answer)}
                            className={cssClass}
                            disabled={answerState !== ''}
                        >
                            {answer}</button>
                    </li>
                    )
                    })
                }
            </ul>
  )
}

export default Answers