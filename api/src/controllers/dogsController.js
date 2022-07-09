const axios = require('axios')
const { API_KEY } = process.env
const { Dog, Temperament } = require('../db.js')
const { getAllApis, getApiWeb, getApiDb } = require('./commonsController')

async function getDogs (req, res){
    const { name } = req.query
    let data = await getAllApis()
    try {
        if (name){
            let search = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
            let apiSearch = search.data.map(d => {
                return {
                    id: d.id,
                    name: d.name,
                    image: d.image,
                    heightMin: d.height.metric.split(" - ")[0],
                    heightMax: d.height.metric.split(" - ")[1] ? d.height.metric.split(" - ")[1] : d.height.metric.split(" - ")[0],
                    weightMin: d.weight.metric.split(" - ")[0],
                    weightMax: d.weight.metric.split(" - ")[1] ? d.weight.metric.split(" - ")[1] : d.weight.metric.split(" - ")[0],
                    life_span: d.life_span,
                    temperament: d.temperament
                }
            })
            let searchDbData = await getApiDb()
            let searchDbFiltered = searchDbData.filter(d => d.name.split(" ").join("").toLowerCase().includes(name.split(" ").join("").toLowerCase()))
            let searchDb = searchDbFiltered.map(d => {
                return {
                    id: d.id,
                    name: d.name,
                    image: d.image,
                    heightMin: d.height.metric.split(" - ")[0],
                    heightMax: d.height.metric.split(" - ")[1] ? d.height.metric.split(" - ")[1] : d.height.metric.split(" - ")[0],
                    weightMin: d.weight.metric.split(" - ")[0],
                    weightMax: d.weight.metric.split(" - ")[1] ? d.weight.metric.split(" - ")[1] : d.weight.metric.split(" - ")[0],
                    life_span: d.life_span,
                    temperament: d.temperament
                }
            })
            let dogSearched = searchDb.concat(apiSearch)
            if (!dogSearched.length) {
                res.status(404).json({error: "Dog not found"})
            } else{
                res.status(201).json(dogSearched)
            }
        } else{
            res.status(201).json(data)
        }
    } catch (error) {
        res.status(404).json({error: "An unexpected error occurred, please try again later"})
    }
}

async function getById (req, res){
    const { id } = req.params
    try {
        if (!id) {
            return res.status(404).json({error: "ID don't match with none dog"})
        } else {
            let search = await getAllApis()
            let searchFind = search.find(d => id === d.id.toString())
            res.status(201).json(searchFind)
        }
    } catch (error) {
        res.status(404).json({error: "ID don't match with none dog"})
    }
}


async function createDog (req, res){
    const { name, heightMax, heightMin, weightMax, weightMin, life_span, temperament, image } = req.body
    try {
        if (!image){
            image = await axios("https://dog.ceo/api/breeds/image/random").data.message
        }
        const dogNew = await Dog.create({
            name, heightMax, heightMin, weightMax, weightMin, life_span, image
        })
        const temperaments = await Temperament.findAll({
            where: {
                name: temperament
            }
        })
        dogNew.addTemperament(temperaments)
        res.status(201).json({msg: "Dog created succesfully!"} )
    } catch (error) {
        res.status(404).json({error: "An error has ocurred, please try again later"})
    }
}




module.exports = {
    getDogs,
    getById,
    createDog
}