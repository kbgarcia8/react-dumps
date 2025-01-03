import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';



function App() {
  const [pastries, setPastries] = useState([])

  useEffect(() => {
    axios.get('https://glorious-space-system-q775w96grrpjh47r7-8000.app.github.dev/pasta')
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
