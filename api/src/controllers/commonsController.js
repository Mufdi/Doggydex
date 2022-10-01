const { Dog, Temperament } = require('../db.js')
const { API_KEY } = process.env
const axios = require("axios")


async function getApiWeb () {
    const apiWeb = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    const apiWebData = await apiWeb.data.map(d => {
        return {
            id: d.id,
            name: d.name,
            image: d.image.url,
            heightMin: d.height.metric.split(" - ")[0],
            heightMax: d.height.metric.split(" - ")[1] ? d.height.metric.split(" - ")[1] : d.height.metric.split(" - ")[0],
            weightMin: d.weight.metric.split(" - ")[0],
            weightMax: d.weight.metric.split(" - ")[1] ? d.weight.metric.split(" - ")[1] : d.weight.metric.split(" - ")[0],
            life_span: d.life_span,
            temperament: d.temperament,
            origin: d.origin
        }
    })
    return apiWebData
}

async function getApiDb () {
    let apiData = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
    console.log(apiData);
    return apiData
}

async function getAllApis () {
    const apiWebInfo = await getApiWeb()
    const apiDbInfo = await getApiDb()
    const allApis = apiWebInfo.concat(apiDbInfo)
    return allApis
}




module.exports = { 
    getApiWeb, 
    getApiDb, 
    getAllApis 
}