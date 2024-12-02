import { useState, useEffect } from "react";
import "../styles/MainGamePage.css";

function MainGamePage({
  championMasterList,
  difficulty,
  currentScore,
  bestScore,
  checkIfAlreadySelected
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
      if (difficulty === "easy") {
        const newChampionsSet = createRandomChampionList(6);
        setChampionListToPlay(newChampionsSet.generatedChampionsToPlay);
        setUsedChampionsToPlay(newChampionsSet.usedChampionsToPlayCopy);
      } else if (difficulty === "medium") {
        const newChampionsSet = createRandomChampionList(12);
        setChampionListToPlay(newChampionsSet.generatedChampionsToPlay);
        setUsedChampionsToPlay(newChampionsSet.usedChampionsToPlayCopy);
      } else if (difficulty === "hard") {
        const newChampionsSet = createRandomChampionList(18);
        setChampionListToPlay(newChampionsSet.generatedChampionsToPlay);
        setUsedChampionsToPlay(newChampionsSet.usedChampionsToPlayCopy);
      } else if (difficulty === "very hard") {
        const newChampionsSet = createRandomChampionList(24);
        setChampionListToPlay(newChampionsSet.generatedChampionsToPlay);
        setUsedChampionsToPlay(newChampionsSet.usedChampionsToPlayCopy);
      } else if (difficulty === "extreme") {
        const newChampionsSet = createRandomChampionList(48);
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
      <div className="temporary-scoreboard">
        <p className="current-score">Current Score: {currentScore}</p>
        <p className="best-score">Best Score: {bestScore}</p>
      </div>
      <div className="play-card-container">
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
      </div>
    </>
  );
}

export default MainGamePage;
