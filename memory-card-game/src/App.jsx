import { useState, useEffect } from 'react'
import './styles/App.css'


function App() {
  //const [rawData, setRawData] = useState([])
  const [championMasterList, setChampionMasterList] = useState([])
  const [championListToPlay, setChampionListToPlay] = useState([])
  const [usedChampionsToPlay, setUsedChampionsToPlay] = useState([])
  const [selectedChampions, setSelectedChampions] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  useEffect(() => {
    async function fetchMainData() {
      try {
        const response = await fetch("https://ddragon.leagueoflegends.com/cdn/14.23.1/data/en_US/champion.json");
        const result = await response.json();
        //setRawData(result.data)
        setChampionMasterList(Object.keys(result.data))
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      // finally {
        
      //}
    };
    fetchMainData();
  }, []);

function createRandomChampionList (sourceArray, quantity) {
  const championsToPlayCopy = []
  const usedChampionsToPlayCopy = [...usedChampionsToPlay]
  while(championsToPlayCopy.length<quantity){
    const randomIndex = Math.floor(Math.random()*sourceArray.length)
    const currentlyPickedChampion = sourceArray[randomIndex]
    if(!usedChampionsToPlayCopy.includes(currentlyPickedChampion)){
      championsToPlayCopy.push(currentlyPickedChampion)
      usedChampionsToPlayCopy.push(currentlyPickedChampion)
    }
  }
  setChampionListToPlay(championsToPlayCopy)
  setUsedChampionsToPlay(usedChampionsToPlayCopy)
}

function shuffleChampionListToPlay (e){
  const shuffled = championListToPlay.map((champion)=>({sort: Math.random(), value: champion}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value)
  setChampionListToPlay(shuffled)
  console.log('shuffled')
}

function checkIfAlreadySelected(e){
  const { key: champ } = e.target.dataset
  const selectedChampionsCopy = [...selectedChampions]
  if(!selectedChampionsCopy.includes(champ)) {
    selectedChampionsCopy.push(champ)
    setCurrentScore((score) => score+1)
    setSelectedChampions(selectedChampionsCopy)
  } else {
    setCurrentScore(0)
    setSelectedChampions([])
  }
}
  return (
    <>
      <div className='temporary-button-space'>
        <button onClick={() => createRandomChampionList(championMasterList, 6)}>
          Easy Round
        </button>
        <button onClick={() => createRandomChampionList(championMasterList, 12)}>
          Medium Round
        </button>
        <button onClick={() => createRandomChampionList(championMasterList, 18)}>
          Hard Round
        </button>
        <button onClick={() => createRandomChampionList(championMasterList, 18)}>
          Very Hard Round
        </button>
      </div>
      <div className="temporary-scoreboard">
        <p className="current-score">Current Score: {currentScore}</p>
        <p className="best-score"></p>
      </div>
      <div className='play-card-container'>
          {championListToPlay.map((champion, index) => (
            <div className='play-card' key={crypto.randomUUID()}>
              <p style={{color: "black"}}>{champion}</p>
              <img 
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`} alt={`${champion}-splash-art`}
                onClick={(e) => { shuffleChampionListToPlay(e); checkIfAlreadySelected(e);}}
                data-key={champion}
              />
            </div>
          ))}
      </div>
    </>
  );
}

export default App
