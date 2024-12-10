import '../styles/components/Card.css';
import React from 'react';
import cardBack from '../assets/card-back.jpg'

function Card({ champion, shuffleChampionListToPlay, checkIfAlreadySelected}) {
  return (
    <>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img
                        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`}
                        alt={`${champion}-splash-art`}
                        onClick={(e) => {
                          shuffleChampionListToPlay();
                          checkIfAlreadySelected(e);
                        }}
                        data-key={champion}
                    />
                </div>
                <div className="flip-card-back">
                    <img src={cardBack} alt="card-back-logo" />
                </div>
            </div>
        </div>
    </>
  );
}

export default Card;
