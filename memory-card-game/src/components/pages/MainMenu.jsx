import '../../styles/pages/MainMenu.css';
import leagueLogo from '../../assets/League-of-Legends-Logo.png';
import Button from '../Button.jsx';

function MainMenu({}) {
  return (
    <>
      <div className='page-container' id='main-menu-container'>
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
          buttonType={"button"}
          processClick={""}
        />
        <Button
          text={'How To Play'}
          className={'main-menu-buttons'}
          id={'game-mechanics'}
          buttonType={"button"}
          processClick={""}
        />
      </div>
    </>
  );
}

export default MainMenu;
