import { useState, useEffect } from "react";
import LoadingPage from "./components/pages/LoadingPage.jsx";
import MainMenu from "./components/pages/MainMenu.jsx";
import GamePage from "./components/pages/GamePage.jsx";
import "./styles/App.css";

function App() {
  //const [rawData, setRawData] = useState([])
  const [championMasterList, setChampionMasterList] = useState([]);
  const [selectedChampions, setSelectedChampions] = useState([]);
  const [difficulty, setDifficulty] = useState("easy");
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMainData() {
      try {
        const response = await fetch(
          "https://ddragon.leagueoflegends.com/cdn/14.23.1/data/en_US/champion.json",
        );
        const result = await response.json();
        setChampionMasterList(Object.keys(result.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      // finally {

      //}
    }
    fetchMainData();
    setDifficulty("easy");
  }, []);

  useEffect(() => {
    currentScore === 6
      ? setDifficulty("medium")
      : currentScore === 12
        ? setDifficulty("hard")
        : currentScore === 18
          ? setDifficulty("very hard")
          : currentScore === 24
            ? setDifficulty("extreme")
            : currentScore === 48 && console.log("game finished");
  }, [currentScore]);

  useEffect(() => {
    console.log(isLoading);
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

      setCurrentScore((currentScore) => currentScore + 1);
      currentScore >= bestScore && setBestScore((bestScore) => bestScore + 1);
    } else {
      setCurrentScore(0);
      setSelectedChampions([]);
    }
  }

  return (
    <>
      {isLoading ? <LoadingPage /> : <MainMenu />}
      {/*isGameStart 
        && <GamePage
        championMasterList={championMasterList}
        difficulty={difficulty}
        currentScore={currentScore}
        bestScore={bestScore}
        checkIfAlreadySelected={checkIfAlreadySelected}
      />*/}
    </>
  );
}

export default App;
