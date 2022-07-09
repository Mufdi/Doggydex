const axios = require('axios')
const { Temperament } = require('../db')
const { API_KEY } = process.env



async function getTemperaments(req, res){
    let apiData = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)  
    try {
        let temperamentsFiltered = apiData.data.map(t => (t.temperament ? t.temperament : "No data")).map(t => t?.split(", "))
        let temperamentsSet = new Set(temperamentsFiltered.flat())
        let temperamentsArray = Array.from(temperamentsSet)
        temperamentsArray.forEach(t => {
            Temperament.findOrCreate({
                where: {
                    name: t
                }
            })
        })
        let temperamentsDb = await Temperament.findAll()
        res.status(201).json(temperamentsDb)
    } catch (error) {
        res.status(404).json({error: "Error trying to get all Temperaments"})
    }
}


module.exports = {
    getTemperaments
}