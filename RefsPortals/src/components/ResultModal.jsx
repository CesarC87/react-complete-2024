import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

const ResultModal = ({targetTime,remainingTime,handleReset},ref) => {

  const dialog = useRef(null)
  const hasLost = remainingTime <= 0
  const score = Math.round((1-remainingTime/(targetTime*1000))*100)

  useImperativeHandle(ref, ()=>{
    return {
      open(){
        dialog.current.showModal()
      }
    }
  })
  return createPortal(
    <dialog ref={dialog} className='result-modal' onClose={handleReset}>
        {hasLost && <h2>you lost</h2>}
        {!hasLost && <h2>Your score is {score}</h2>}
        <p>The target's time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>{remainingTime/1000} seconds left</strong></p>
        <form method="dialog" onSubmit={handleReset}>
          <button>Close</button>
        </form>
    </dialog>,
    document.getElementById('modal')
  )
}

export default forwardRef(ResultModal)