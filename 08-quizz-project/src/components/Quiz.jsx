import React, { useCallback, useState } from 'react'
import QUESTIONS from '../questions'
import quizCompleteImg from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer'
import Answers from './Answers'
import Question from './Question'
import Summary from './Summary'

const Quiz = () => {

    const [ userAnswers, setUserAnswers ] = useState([])
    const activeQuestionIndex = userAnswers.length
    const quizComplete = activeQuestionIndex === QUESTIONS.length    

    const handleSelectAnswer = useCallback((answer) => {
        setUserAnswers( prevAnswers => {
            return [...prevAnswers, answer]
        })        
    },[])

    const handleSkipAnswer = useCallback(()=>handleSelectAnswer(null), [handleSelectAnswer])
    
  if(quizComplete){
  return <Summary userAnswers={userAnswers}/>

  }   

  return (
    <div id="quiz">
        <Question 
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            handleSkipAnswer={handleSkipAnswer}            
        />
   </div>
  )
}

export default Quiz