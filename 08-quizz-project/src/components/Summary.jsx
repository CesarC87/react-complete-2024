import React from 'react'
import quizCompleteImg from '../assets/quiz-complete.png'
import  QUESTIONS from '../questions'

const Summary = ({userAnswers}) => {

    const skippedAnswers = userAnswers.filter( answer => answer === null)
    const correctAnswers = userAnswers.filter( (answer, idx) => answer === QUESTIONS[idx].answers[0])
    const skippedShare = Math.round((skippedAnswers.length / userAnswers.length)*100)
    const correctShare = Math.round((correctAnswers.length / userAnswers.length)*100)
    const wrongShare = 100 - skippedShare - correctShare
  return (
    <div id='summary'>
        <img src={quizCompleteImg} alt="trophy icon" />
        <h2>Quiz completed!</h2>
        <div id="summary-stats">
            <p>
                <span className='number'>{skippedShare}%</span>
                <span className='text'>Skipped</span>
            </p>
            <p>
                <span className='number'>{correctShare}%</span>
                <span className='text'>Correct</span>
            </p>
            <p>
                <span className='number'>{wrongShare}%</span>
                <span className='text'>Wrong</span>
            </p>
        </div>
        <ol>
            {
                userAnswers.map( (answer,idx) => {
                    let cssClass = 'user-answer'
                    answer === null ? (cssClass += ' skipped') : answer === QUESTIONS[idx].answers[0] ? (cssClass += ' correct') : (cssClass += ' wrong')
                    return (
                        <li key={idx}>
                            <h3>{idx+1}</h3>
                            <p className='question'>{QUESTIONS[idx].text}</p>
                            <p className={cssClass}>{answer ?? 'skipped'}</p>
                        </li>

                    )
                })
            }
        </ol>
    </div>
  )
}

export default Summary