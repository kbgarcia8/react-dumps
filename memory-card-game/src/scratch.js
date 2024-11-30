async function fetchMainData() {
    try {
      const response = await fetch("https://ddragon.leagueoflegends.com/cdn/14.23.1/data/en_US/champion.json");
      const result = await response.json();
      
      const championArray = await Array.from(Object.keys(result.data))
      //console.log(championArray)
      return await championArray
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    // finally {
      
    //}
};

function createRandomChampionList (sourceArray, quantity) {
    const data = [...sourceArray]
    const alreadyChoosenChampions = [] //can be converted to state
    const championListToPlay = []    
    
    while(championListToPlay.length<quantity){
        const randomIndex = Math.floor(Math.random()*165)
        championListToPlay.push(data[randomIndex])
        alreadyChoosenChampions.push(data[randomIndex])
    }

    console.log(championListToPlay)
}
//const test = fetchMainData()
//console.log(test)
/*(async () => {
    console.log(await fetchMainData())
  })()*/
createRandomChampionList(await fetchMainData(),6)