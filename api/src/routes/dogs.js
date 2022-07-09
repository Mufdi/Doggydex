const { Router } = require ('express')
const { getDogs, getById, createDog } = require ('../controllers/dogsController')

const router = Router()

router.get("/", getDogs)
router.get("/:id", getById)
router.post("/create", createDog)


module.exports = router