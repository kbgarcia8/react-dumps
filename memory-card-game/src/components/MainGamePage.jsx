import { useState, useEffect } from "react";
import "./styles/App.css";

function MainGamePage() {
  const [championListToPlay, setChampionListToPlay] = useState([]);
  const [usedChampionsToPlay, setUsedChampionsToPlay] = useState([]);
  const [selectedChampions, setSelectedChampions] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

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
        const newChampionsSet = createRandomChampionList(36);
        setChampionListToPlay(newChampionsSet.generatedChampionsToPlay);
        setUsedChampionsToPlay(newChampionsSet.usedChampionsToPlayCopy);
      }
    }
  }, [championMasterList, difficulty]);

  useEffect(() => {
    currentScore === 6
      ? setDifficulty("medium")
      : currentScore === 12
        ? setDifficulty("hard")
        : currentScore === 18
          ? setDifficulty("very hard")
          : currentScore === 24
            ? setDifficulty("extreme")
            : console.log("game finished");
  }, [currentScore]);

  function shuffleChampionListToPlay() {
    const shuffled = championListToPlay
      .map((champion) => ({ sort: Math.random(), value: champion }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
    setChampionListToPlay(shuffled);
    console.log("shuffled");
  }

  function checkIfAlreadySelected(e) {
    const { key: champ } = e.target.dataset;
    const selectedChampionsCopy = [...selectedChampions];
    if (!selectedChampionsCopy.includes(champ)) {
      selectedChampionsCopy.push(champ);
      setSelectedChampions(selectedChampionsCopy);

      setCurrentScore((currentScore) => currentScore + 1);
      currentScore >= bestScore && setBestScore((bestScore) => bestScore + 1);
    } else {
      setCurrentScore(0);
      setSelectedChampions([]);
    }
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
