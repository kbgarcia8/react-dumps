import '../styles/components/EndRoundModal.css';
import Button from './Button';
import OK from "../assets/rammus-ok.gif"
import React from 'react';

function EndRoundModal({ isRoundEndOpen, toggleModal }) {
  return (
    <>
      {isRoundEndOpen && (
        <dialog className='endround-modal-container' open={isRoundEndOpen}>
          <div className='endround-modal'>
            <div className="endround-modal-header">
              <p>You've Ranked Up</p>
            </div>
            <div className="endround-modal-body">
              <p>Congratulations Summoner!</p>
              <p className='description'>Keep on checking those champions accross Runterra and reach Challenger!</p>
              <img src={OK} alt="okay-emote" className='okay-emote'/>
            </div>
            <div className="endround-modal-footer">
              <Button
                text={'CONTINUE'}
                className={'close-dialog-button'}
                id={'close-endround-dialog'}
                buttonType={'button'}
                processClick={toggleModal}
              />
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default EndRoundModal;
