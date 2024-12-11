import '../styles/components/MenuModal.css';
import Button from './Button';
import React from 'react';

function MenuModal({ isHowToPlayOpen, toggleModal }) {
  return (
    <>
      {isHowToPlayOpen && (
        <dialog className='modal-container' open={isHowToPlayOpen}>
          <div className='modal'>
            <div className='modal-header'>
              <span className='modal-header-title'>Game Mechanics</span>
              <Button
                text={'X'}
                className={'close-dialog-button'}
                id={'close-game-mechanics'}
                buttonType={'button'}
                processClick={toggleModal}
              />
            </div>
            <p className='game-instructions'>
              Pick a card for every turn. Make sure to not pick the same card
              twice. The number of cards will progress as you go further rounds:
              <br /><br />
              <span className="round-title">Bronze Round:</span> 6 champion cards
              <br /><br />
              <span className="round-title">Silver Round:</span> 12 champion cards
              <br /><br />
              <span className="round-title">Gold Round:</span> 18 champion cards
              <br /><br />
              <span className="round-title">Platinum Round:</span> 24 champion cards
              <br /><br />
              <span className="round-title">Diamond Round:</span> 48 champion cards 
              <br /><br />
              <span className="round-title">Challenger Round:</span> 60 champion cards
              <br /><br />
            </p>
            <p className='modal-footer'>Best of luck, Summoner!</p>
          </div>
        </dialog>
      )}
    </>
  );
}

export default MenuModal;
