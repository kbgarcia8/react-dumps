import axios from 'axios'
import fs from 'fs'
import rawData from './data/rawData.js'

const JSONCreator = (entries,basename,type,min,max) => {
    const mappedData = entries.map(entry => ({
        [`${basename}Id`]: entry.id,
        [`${basename}Name`]: entry.name,
        [`${basename}Desc`]: entry.description,
        [`${basename}Image`]: entry.image,
        prices: {
            [type === "drink" ? regular : solo]: 0,
            [type === "drink" ? large : share]: 0
        },
        rating: {
            rate: 0,
            count: 0
        }
    }))
}

const icedDrinkData = rawData.icedDrinkInitialData
console.log(icedDrinkData)