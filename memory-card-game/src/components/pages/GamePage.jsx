import { useState, useEffect } from "react";
import "../../styles/pages/GamePage.css";
import Card from "../Card";

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
        <div className="temporary-scoreboard">
          <p className="current-score">Current Score: {currentScore}</p>
          <p className="best-score">Best Score: {bestScore}</p>
        </div>
        {/*<div className="play-card-container">
          {championListToPlay.map((champion, index) => (
            <div className="play-card" key={crypto.randomUUID()}>
              <p style={{ color: "black" }}>{champion}</p>
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`}
                alt={`${champion}-splash-art`}
                onClick={(e) => {
                  shuffleChampionListToPlay(e);
                  checkIfAlreadySelected(e);
                }}
                data-key={champion}
              />
            </div>
          ))}
        </div>*/}
        <div className="play-card-container">
          <Card/>
        </div>
      </div>
    </>
  );
}

export default GamePage;
