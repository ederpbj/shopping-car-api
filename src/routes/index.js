const router = require('express').Router()

const carsController = require('../controllers/CarsController')

router.get('/cars', carsController.index)

module.exports = router