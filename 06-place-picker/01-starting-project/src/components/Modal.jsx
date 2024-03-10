import { useEffect } from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ open, children, onClose  }) => {
  const dialog = useRef(); 

  useEffect(()=>{
    open ? dialog.current.showModal() : dialog.current.close();
    console.log('open',open)
  },[open])

  console.log('en modal')

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose} >
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
