import { useState, useEffect, useContext } from 'react'
import './App.css'
import axios from 'axios';
import Context from './context/ContextProvider';



function App() {
  const [pastries, setPastries] = useState([])
  const {useMediaQuery} = useContext(Context)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    axios.get('https://super-yodel-jjjpx49w6x6w2pp96-8000.app.github.dev/pasta')
  .then(response => {
    setPastries(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  }, []);

  return (
    <>
      <div>
        {pastries.map((pastry) => (
          <div key={pastry.pastaId}>{pastry.pastaName}</div>
        ))}
      </div>
    </>
  )
}

export default App
