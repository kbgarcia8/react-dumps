import { useState, useEffect } from 'react';
import '../styles/pages/MainMenu.css';
import leagueLogo from '../assets/League-of-Legends-Logo.png';
import Button from '../components/Button.jsx';
import MenuModal from '../components/MenuModal.jsx';
import Footer from '../components/Footer.jsx';

function MainMenu({ startGame, isLoading}) {
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
        <MenuModal
          isHowToPlayOpen={isHowToPlayOpen}
          toggleModal={toggleModal}
        />
        <Footer
          isLoading={isLoading}
        />
      </div>
    </>
  );
}

export default MainMenu;
