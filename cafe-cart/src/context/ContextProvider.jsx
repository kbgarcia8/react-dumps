import React, { createContext, useState, useEffect } from "react"
import PropTypes from "prop-types"

const Context = createContext();

export const ContextProvider = ({children}) => {
    /*'use' prefixed functions are custom hooks */
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
        console.log(matches)
        return matches;
      };


    return (
    <Context.Provider value={{useMediaQuery}}> 
        {children}
    </Context.Provider> 
    )
        
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default Context;