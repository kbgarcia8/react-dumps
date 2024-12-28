import axios from 'axios'
import express from 'express'

const getData = {
    method: 'GET',
    url: 'https://pizza-and-desserts.p.rapidapi.com/desserts',
    headers: {
      'x-rapidapi-key': '68410d59camshdbfa4217d0e1e7ep198c62jsnd7370fa1ca79',
      'x-rapidapi-host': 'pizza-and-desserts.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }

  export default getData