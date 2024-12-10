import { useState, useEffect } from "react";
import "../../styles/pages/GamePage.css";
import Card from "../Card";
import flameGIF from "../../assets/fire-flame.gif"
import iron from "../../assets/iron.png"
import silver from "../../assets/silver.png"
import gold from "../../assets/gold.png"
import platinum from "../../assets/platinum.png"
import diamond from "../../assets/diamond.png"
import challenger from "../../assets/challenger.png"

function GamePage({
  championMasterList,
  difficulty,
  currentScore,
  bestScore,
  checkIfAlreadySelected,
}) {
  const [championListToPlay, setChampionListToPlay] = useState([]);
  const [usedChampionsToPlay, setUsedChampionsToPlay] = useState([]);

  function createRandomChampionList(quantity) {
    const generatedChampionsToPlay = [];
    const usedChampionsToPlayCopy = [...usedChampionsToPlay];
    while (generatedChampionsToPlay.length < quantity) {
      const randomIndex = Math.floor(Math.random() * championMasterList.length);
      const currentlyPickedChampion = championMasterList[randomIndex];
      if (!usedChampionsToPlayCopy.includes(currentlyPickedChampion)) {
        generatedChampionsToPlay.push(currentlyPickedChampion);
        usedChampionsToPlayCopy.push(currentlyPickedChampion);
      }
    }
    return { generatedChampionsToPlay, usedChampionsToPlayCopy };
  }

  useEffect(() => {
    if (championMasterList.length > 0) {
      if (difficulty === "iron") {
        const newChampionsSet = createRandomChampionList(6);
        setChampionListToPlay(newChampionsSet.generatedChampionsToPlay);
        setUsedChampionsToPlay(newChampionsSet.usedChampionsToPlayCopy);
      } else if (difficulty === "silver") {
        const newChampionsSet = createRandomChampionList(12);
        setChampionListToPlay(newChampionsSet.generatedChampionsToPlay);
        setUsedChampionsToPlay(newChampionsSet.usedChampionsToPlayCopy);
      } else if (difficulty === "gold") {
        const newChampionsSet = createRandomChampionList(18);
        setChampionListToPlay(newChampionsSet.generatedChampionsToPlay);
        setUsedChampionsToPlay(newChampionsSet.usedChampionsToPlayCopy);
      } else if (difficulty === "platinum") {
        const newChampionsSet = createRandomChampionList(24);
        setChampionListToPlay(newChampionsSet.generatedChampionsToPlay);
        setUsedChampionsToPlay(newChampionsSet.usedChampionsToPlayCopy);
      } else if (difficulty === "diamond") {
        const newChampionsSet = createRandomChampionList(48);
        setChampionListToPlay(newChampionsSet.generatedChampionsToPlay);
        setUsedChampionsToPlay(newChampionsSet.usedChampionsToPlayCopy);
      } else if (difficulty === "challenger") {
        const newChampionsSet = createRandomChampionList(60);
        setChampionListToPlay(newChampionsSet.generatedChampionsToPlay);
        setUsedChampionsToPlay(newChampionsSet.usedChampionsToPlayCopy);
      }
    }
  }, [championMasterList, difficulty]);

  function shuffleChampionListToPlay() {
    const shuffled = championListToPlay
      .map((champion) => ({ sort: Math.random(), value: champion }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
    setChampionListToPlay(shuffled);
    console.log("shuffled");
  }
  return (
    <>
      <div className="page-container" id="game-page-container">
        <div className="current-tier-container">
          <span>Your Rank: </span>
          <img src={`/src/assets/${difficulty}.png`} alt={`${difficulty}-logo`} className="current-tier-logo"/>          
          <span className="tier-label">{difficulty}</span>
        </div>
        <div className="scoreboard">
          <p className="current-score">Current Score: {currentScore}</p>
          <div className="best-score-container">
            <img src={flameGIF} alt="flame-gif" className="flame-gif"/>
            <span className="best-score">Best Score: {bestScore}</span>            
          </div>
        </div>
        <div className="play-card-container">
          {championListToPlay.map((champion, index) => (
            <Card
              key={`${champion}-${Date.now()}`}
              champion={champion}
              shuffleChampionListToPlay={shuffleChampionListToPlay}
              checkIfAlreadySelected={checkIfAlreadySelected}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default GamePage;
