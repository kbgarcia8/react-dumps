import '../styles/components/Footer.css';
import githubIcon from "../assets/github.svg"
import React from 'react';

function Footer({ isLoading }) {
  return (
    <>
      {!isLoading && (
          <footer>
            <div className='github-info'>
                <img src={githubIcon} alt="github-logo" className='github-logo'/>
                <span>This project is made by <a href="https://github.com/kbgarcia8/react-dumps/tree/main/memory-card-game">kbgarcia8</a></span>
            </div>
            <span>© League of Legends (Patch 14.23.1) and <a href="https://developer.riotgames.com/docs/lol">Riot Developer API</a></span>
          </footer>
      )}
    </>
  );
}

export default Footer;
