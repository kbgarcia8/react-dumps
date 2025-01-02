import axios from 'axios'
import fs from 'fs'
import rawData from '../db/rawData.js'

var db = {}

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
    //const testMerge = Object.assign({}, {[`${basename}`]: mappedData})
    db = {...db, [`${basename}`]: mappedData}
    //create individual json files
    fs.writeFile(`../db/${basename}.json`, JSON.stringify(mappedData, null, 4),err => {
        if (err) throw err 
        console.log(`Done writing ${basename}.json`)
    })
    //create db.json file
    fs.writeFile(`../db/db.json`, JSON.stringify(db, null, 4),err => {
        if (err) throw err 
        console.log('Done writing db.json')
    })
}

const icedDrinkData = rawData.icedDrinks
const hotDrinkData = rawData.hotDrinks
const cakesData = rawData.cakes
const pastriesData = rawData.pastries
const pastaData = rawData.pasta
const mainsData = rawData.mains
const sidesData = rawData.sides
JSONCreator(icedDrinkData,"icedDrink","drink")
JSONCreator(hotDrinkData,"hotDrink","drink")
JSONCreator(cakesData,"cakes")
JSONCreator(pastriesData,"pastries")
JSONCreator(pastaData,"pasta")
JSONCreator(mainsData,"mains")
JSONCreator(sidesData,"sides")