import '../styles/components/Card.css';
import Button from './Button';
import React from 'react';
import cardBack from '../assets/card-back.jpg'

function Card({ }) {
  return (
    <>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kaisa_0.jpg`} alt="Avatar"/>
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
