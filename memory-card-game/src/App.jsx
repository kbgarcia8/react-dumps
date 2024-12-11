import { useState, useEffect } from 'react';
import LoadingPage from './pages/LoadingPage.jsx';
import MainMenu from './pages/MainMenu.jsx';
import GamePage from './pages/GamePage.jsx';
import EndGameModal from './components/EndGameModal.jsx';
import './styles/App.css';

function App() {
  const [championMasterList, setChampionMasterList] = useState([]);
  const [selectedChampions, setSelectedChampions] = useState([]);
  const [difficulty, setDifficulty] = useState('iron');
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isGameStart, setIsGameStart] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(() => {
    async function fetchMainData() {
      try {
        const response = await fetch(
          'https://ddragon.leagueoflegends.com/cdn/14.23.1/data/en_US/champion.json'
        );
        const result = await response.json();
        setChampionMasterList(Object.keys(result.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchMainData();
    setCurrentScore(0)
  }, []);

  useEffect(() => {
    currentScore === 6
      ? setDifficulty('silver')
      : currentScore === 18
      ? setDifficulty('gold')
      : currentScore === 36
      ? setDifficulty('platinum')
      : currentScore === 60
      ? setDifficulty('diamond')
      : currentScore === 108 
      ? setDifficulty('challenger')
      : currentScore === 168 && setIsGameOver(true)
  }, [currentScore]);

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearInterval(loadingInterval);
  }, [isLoading]);

  useEffect(() => {
    const gameOverScreenInterval = setInterval(() => {
      if(isGameOver) {
        setIsGameOver(false); 
        setIsGameStart(false)
      }
    }, 3000);
    return () => clearInterval(gameOverScreenInterval);
  }, [isGameOver, isGameStart]);

  function checkIfAlreadySelected(e) {
    const { key: champ } = e.target.dataset;
    const selectedChampionsCopy = [...selectedChampions];
    if (!selectedChampionsCopy.includes(champ)) {
      selectedChampionsCopy.push(champ);
      setSelectedChampions(selectedChampionsCopy);

      setCurrentScore(currentScore => currentScore + 1);
      currentScore >= bestScore && setBestScore(bestScore => bestScore + 1);
    } else {
      setCurrentScore(0);
      setSelectedChampions([]);
    }
  }

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : !isGameStart ? (
        <MainMenu startGame={()=>{setIsGameStart(true)}} />
      ) : (
        <GamePage
          championMasterList={championMasterList}
          difficulty={difficulty}
          currentScore={currentScore}
          bestScore={bestScore}
          checkIfAlreadySelected={checkIfAlreadySelected}
        />
      )}
      <EndGameModal
        isGameOver={isGameOver}
      />
    </>
  );
}

export default App;
