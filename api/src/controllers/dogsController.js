const axios = require('axios')
const { API_KEY } = process.env
const { Dogs, Temperaments } = require('../db.js')
const { getAllApis, getApiWeb } = require('./commonsController')

async function getDogs (req, res){
    const { name } = req.params
    const data = getAllApis()
    try {
        if (name){
            const dogName = await axios(`https://api.thedogapi.com/v1/breeds/search?q={name}?api_key=${API_KEY}`)
        }
    } catch (error) {
        
    }
}





module.exports = {  }