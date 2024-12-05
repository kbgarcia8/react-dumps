import '../styles/components/Modal.css';
import React from 'react';

function Modal({isHowToPlayOpen, toggleModal}) {
    
  return (
    <>
        {isHowToPlayOpen && (
            <div className="modal-container">
                <dialog className="modal" open={isHowToPlayOpen}>
                    <span>This is the modal</span>
                    <button onClick={toggleModal}>Test</button>
                </dialog>
            </div>
        )}
    </>
  );
}

export default Modal;
