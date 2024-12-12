import { useState, useEffect } from "react";
import "../styles/pages/GamePage.css";
import Card from "../components/Card";
import EndRoundModal from "../components/EndRoundModal";
import flameGIF from "../assets/fire-flame.gif"
import LOLIcon from "../assets/lol-logo.png"

function GamePage({
  championMasterList,
  difficulty,
  currentScore,
  bestScore,
  checkIfAlreadySelected,
  backToMainMenu
}) {
  const [championListToPlay, setChampionListToPlay] = useState([]);
  const [usedChampionsToPlay, setUsedChampionsToPlay] = useState([]);
  const [isRoundEndOpen, setIsRoundEndOpen] = useState(false);  

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
        setIsRoundEndOpen(true);
      } else if (difficulty === "gold") {
        const newChampionsSet = createRandomChampionList(18);
        setChampionListToPlay(newChampionsSet.generatedChampionsToPlay);
        setUsedChampionsToPlay(newChampionsSet.usedChampionsToPlayCopy);
        setIsRoundEndOpen(true);
      } else if (difficulty === "platinum") {
        const newChampionsSet = createRandomChampionList(24);
        setChampionListToPlay(newChampionsSet.generatedChampionsToPlay);
        setUsedChampionsToPlay(newChampionsSet.usedChampionsToPlayCopy);
        setIsRoundEndOpen(true);
      } else if (difficulty === "diamond") {
        const newChampionsSet = createRandomChampionList(48);
        setChampionListToPlay(newChampionsSet.generatedChampionsToPlay);
        setUsedChampionsToPlay(newChampionsSet.usedChampionsToPlayCopy);
        setIsRoundEndOpen(true);
      } else if (difficulty === "challenger") {
        const newChampionsSet = createRandomChampionList(60);
        setChampionListToPlay(newChampionsSet.generatedChampionsToPlay);
        setUsedChampionsToPlay(newChampionsSet.usedChampionsToPlayCopy);
        setIsRoundEndOpen(true);
      }
    }
  }, [championMasterList, difficulty]);

  function shuffleChampionListToPlay() {
    const shuffled = championListToPlay
      .map((champion) => ({ sort: Math.random(), value: champion }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
    setChampionListToPlay(shuffled);
  }

  function toggleModal(e){
    const clicked = e.target.id;
    clicked === "close-endround-dialog" && setIsRoundEndOpen(false)
  }
  return (
    <>
      <header>
        <div className='lol-header'>
            <img src={LOLIcon} alt="lol-logo" className='lol-logo' onClick={backToMainMenu}/>
            <span onClick={backToMainMenu}>Memory Card Game</span>
        </div>
      </header>
      <div className="page-container" id="game-page-container">
        <div className="current-tier-container">
          <span>Your Rank: </span>
          <img key={difficulty} src={`/src/assets/${difficulty}.png`} alt={`${difficulty}-logo`} className="current-tier-logo"/>          
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
        <EndRoundModal
          isRoundEndOpen={isRoundEndOpen}
          toggleModal={toggleModal}
        />        
      </div>
    </>
  );
}

export default GamePage;
