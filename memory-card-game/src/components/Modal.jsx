import '../styles/components/Modal.css';
import Button from './Button';
import React from 'react';

function Modal({ isHowToPlayOpen, toggleModal }) {
  return (
    <>
      {isHowToPlayOpen && (
        <dialog className='modal-container' open={isHowToPlayOpen}>
          <div className='modal'>
            <span>This is the modal</span>
            <Button
              text={'X'}
              className={'close-dialog-button'}
              id={'close-game-mechanics'}
              buttonType={'button'}
              processClick={toggleModal}
            />  
          </div>
        </dialog>
      )}
    </>
  );
}

export default Modal;
