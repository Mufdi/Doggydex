const axios = require('axios')
const { API_KEY } = process.env
const { Dog, Temperament } = require('../db.js')
const { getAllApis, getApiWeb, getApiDb } = require('./commonsController')

async function getDogs (req, res){
    const { name } = req.query
    let data = await getAllApis()
    try {
        if (name) {
            let dogSearched = await data.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));
            dogSearched.length ?
                res.status(201).send(dogSearched) :
                res.send([{
                    name: 'Dog not found',
                    id: '', 
                    weightMin: 'Try again or create your breed!',
                    image: 'https://tenor.com/view/perro-feliz-thank-you-dogs-gif-9133996.gif'
                }]);
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
        let dogNew = await Dog.create({
            name: name, 
            heightMax: heightMax, 
            heightMin: heightMin, 
            weightMax: weightMax, 
            weightMin: weightMin, 
            life_span: life_span, 
            image: image || "https://dog.ceo/api/breeds/image/random"   
        })
        let temperaments = await Temperament.findAll({
            where: {
                name: temperament
            }
        })
        dogNew.addTemperament(temperaments)
        res.status(201).json({msg: "Dog created succesfully!"})
    } catch (error) {
        res.status(404).json({error: "An error has ocurred, please try again later"})
    }
}




module.exports = {
    getDogs,
    getById,
    createDog
}