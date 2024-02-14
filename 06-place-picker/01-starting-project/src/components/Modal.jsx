import { useEffect } from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ openModal, children, onClose  }) => {
  const dialog = useRef(); 

  useEffect(()=>{
    openModal ? dialog.current.showModal() : dialog.current.close();
    console.log('openModal',openModal)
  },[openModal])

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose} >
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
