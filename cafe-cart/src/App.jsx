import { useState, useEffect } from 'react'
import fetchDesserts from './api/server';
import './App.css'



function App() {
  useEffect(() => {
    (async () => {
      try {
        const desserts = await fetchDesserts();
        console.log('Fetched desserts:', desserts);
      } catch (error) {
        console.error('Failed to fetch desserts:', error.message);
      }
    })();
  }, []);

  return (
    <>
      <div>

      </div>
    </>
  )
}

export default App
