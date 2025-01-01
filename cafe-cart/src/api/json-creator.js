import axios from 'axios'
import fs from 'fs'
import rawData from './data/rawData.js'

const JSONCreator = (entries,basename,type) => {
    const mappedData = entries.map(entry => ({
        [`${basename}Id`]: entry.id,
        [`${basename}Name`]: entry.name,
        [`${basename}Desc`]: entry.description,
        [`${basename}Image`]: entry.image,
        prices: {
            [type === "drink" ? `regular` : `solo`]: type === "drink" ? 120 : 160,
            [type === "drink" ? `large` : `share`]: type === "drink" ? 140 : 220
        },
        rating: {
            rate: Math.floor(Math.random() * (50 - 10) + 10) / 10,
            count: Math.floor(Math.random() * (200 - 20 + 1)) + 20
        }
    }))
    //if (fs.existsSync(`../db/${basename}.json`)) fs.unlink(`../db/${basename}.json`)
    fs.writeFile(`../db/${basename}.json`, JSON.stringify(mappedData, null, 4),err => {
        if (err) throw err 
        console.log("Done writing")
    })
}

const icedDrinkData = rawData.icedDrinkInitialData
JSONCreator(icedDrinkData,"icedDrink","drink")
