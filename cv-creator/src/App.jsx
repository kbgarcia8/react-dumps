import { useState, useEffect } from 'react';
import LoadingPage from './components/pages/LoadingPage.jsx';
import MainMenu from './components/pages/MainMenu.jsx';
import GamePage from './components/pages/GamePage.jsx';
import './styles/App.css';

function App() {
  const [championMasterList, setChampionMasterList] = useState([]);
  const [selectedChampions, setSelectedChampions] = useState([]);
  const [difficulty, setDifficulty] = useState('easy');
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isGameStart, setIsGameStart] = useState(false);

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
    setDifficulty('iron');
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
      : currentScore === 168 && console.log('game finished');
  }, [currentScore]);

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearInterval(loadingInterval);
  }, [isLoading]);

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
      {/*isLoading ? (
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
      )*/}
      <GamePage
          championMasterList={championMasterList}
          difficulty={difficulty}
          currentScore={currentScore}
          bestScore={bestScore}
          checkIfAlreadySelected={checkIfAlreadySelected}
        />
    </>
  );
}

export default App;
