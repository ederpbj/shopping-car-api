const Car = require('../models/Car')
class CarsController {
    async index(req, res){
        const cars = await Car.find()
        return res.json(cars)
        // return res.json({message: 'Cars...'})
    }
}

module.exports = new CarsController();