import { useState, useEffect } from "react";
import MainGamePage from "./components/MainGamePage";
import "./styles/App.css";

function App() {
  //const [rawData, setRawData] = useState([])
  const [championMasterList, setChampionMasterList] = useState([]);
  const [difficulty, setDifficulty] = useState("easy");
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

  
  return (
    <>
      <MainGamePage />
    </>
  );
}

export default App;
