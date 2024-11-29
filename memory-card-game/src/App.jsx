import { useState, useEffect } from 'react'
import './styles/App.css'


function App() {
  const [rawData, setRawData] = useState([])
  const [championMasterList, setChampionMasterList] = useState([])
  useEffect(() => {
    async function fetchMainData() {
      try {
        const response = await fetch("https://ddragon.leagueoflegends.com/cdn/14.23.1/data/en_US/champion.json");
        const result = await response.json();
        console.log(result)
        setRawData(result.data)
        setChampionMasterList(Object.keys(result.data))
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      // finally {
        
      //}
    };

    fetchMainData();
  }, []);

  return (
    <>
      <div style={{display:"flex",flexDirection:"row"}}>
        {championMasterList.map((champion, index) => (
          <div key={crypto.randomUUID()}>
            <p style={{color: "black"}}>{champion}</p>
            <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`} alt={`${champion}-splash-art`} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App
