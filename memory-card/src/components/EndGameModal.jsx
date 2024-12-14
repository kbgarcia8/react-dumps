import '../styles/components/EndGameModal.css';
import victory from "../assets/victory.png"
import React from 'react';

function EndGameModal({ isGameOver }) {
  return (
    <>
      {isGameOver && (
        <dialog className='endgame-modal-container' open={isGameOver}>
          <div className='endgame-modal'>
            <img src={victory} alt="vicory-logo" className='victory-logo'/>
          </div>
        </dialog>
      )}
    </>
  );
}

export default EndGameModal;
