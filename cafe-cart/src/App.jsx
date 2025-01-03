import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';



function App() {
  const [pastries, setPastries] = useState([])

  useEffect(() => {
    axios.get('https://glorious-space-system-q775w96grrpjh47r7-8000.app.github.dev/pasta')
  .then(response => {
    console.log((response.data));
    setPastries(response.data)
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  console.log(pastries)
  }, []);

  return (
    <>
      <div>
        {pastries}
      </div>
    </>
  )
}

export default App
