import React, { createContext, useState, useEffect, useContext } from "react"
import PropTypes from "prop-types"
import axios from "axios";

const GlobalContext = createContext();
//https://cafe-cart-db.vercel.app/ API link
export const GlobalContextProvider = ({children}) => {
    /*Global States*/
    const [database, setDatabase] = useState(null)
    /*'use' prefixed functions are custom hooks */
    //Check screen width for responsive design
    const useMediaQuery = (query) => {
      const [matches, setMatches] = useState(false);
      
      useEffect(() => {
          const media = window.matchMedia(query);
          if (media.matches !== matches) {
            setMatches(media.matches);
          }

          const listener = () => setMatches(media.matches);    
          media.addEventListener("change", listener); 

          return () => media.removeEventListener("change", listener);
      
      }, [matches, query]);
      
      return matches;
    };
    //Fetch database from deployed API
    useEffect(() => {
      axios.get('https://cafe-cart-db.vercel.app/menu')
    .then(response => {
      setDatabase(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
    }, []);

    return (
    <GlobalContext.Provider value={{useMediaQuery, database}}> 
        {children}
    </GlobalContext.Provider> 
    )
        
}

export const useGlobal = () => {return useContext(GlobalContext)}

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default {GlobalContextProvider, useGlobal};