import { useState, useEffect } from 'react';
import '../styles/pages/MainMenu.css';
import leagueLogo from '../assets/League-of-Legends-Logo.png';
import Button from '../components/Button.jsx';
import Modal from '../components/MenuModal.jsx';

function MainMenu({ startGame }) {
  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState(false);

  function toggleModal(e){
    const clicked = e.target.id;
    clicked === "game-mechanics"
    ? setIsHowToPlayOpen(true)
    : setIsHowToPlayOpen(false)
  }
  return (
    <>
      <div
        className='page-container'
        id='main-menu-container'
      >
        <div className='main-menu-logo-space'>
          <img
            className='main-menu-logo'
            src={leagueLogo}
            alt='league-logo'
          ></img>
          <span className='main-menu-logo-text'>Memory Card Game</span>
        </div>
        <Button
          text={'Start Game'}
          className={'main-menu-buttons'}
          id={'start-game'}
          buttonType={'button'}
          processClick={startGame}
        />
        <Button
          text={'How To Play'}
          className={'main-menu-buttons'}
          id={'game-mechanics'}
          buttonType={'button'}
          processClick={toggleModal}
        />        
        <Modal
          isHowToPlayOpen={isHowToPlayOpen}
          toggleModal={toggleModal}
        />
      </div>
    </>
  );
}

export default MainMenu;
