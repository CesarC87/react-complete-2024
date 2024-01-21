import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal'

const TimerChallenge = ({title,targetTime}) => {
    const timer = useRef()
    const dialog = useRef()

    const [ timeRemaining, setTimeRemaining ] = useState(targetTime*1000)

    const timerActive = timeRemaining > 0 && timeRemaining < targetTime*1000

    timeRemaining <= 0 && (clearInterval(timer.current),dialog.current.open())

    const handleReset = () => {
        setTimeRemaining(targetTime*1000)
    }

    const handleStart = () => {
        // setTimerStarted(true)
        timer.current = setInterval(()=>{
            setTimeRemaining( prev => prev - 10)
        }, 10)
    }

    const handleStop = () => {
        clearInterval(timer.current)
        dialog.current.open()
        setTimerStarted(false)
    }
  return (
    <>
    <ResultModal 
        ref={dialog} 
        targetTime={targetTime} 
        result={'lost'} 
        remainingTime={timeRemaining}
        handleReset={handleReset}
        />
    <section className='challenge'>
        <h2>{title}</h2>
        {/* {timerExpired && <span>You lost</span>} */}
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 && 's'}
        </p>
        <p>
            <button onClick={timerActive ? handleStop : handleStart}>
                {timerActive ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timerActive ? 'active' : ''}>
           { timerActive ? "Time is running..." : "Timer inactive"}
        </p>
    </section>
    </>
  )
}

export default TimerChallenge