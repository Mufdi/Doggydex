const { Router } = require ('express')
const { getTemperaments } = require('../controllers/temperamentsController')

const router = Router()

router.get('/', getTemperaments)

module.exports = router