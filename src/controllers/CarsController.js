const Car = require('../models/Car')
class CarsController {
    constructor(dao){
        this.dao = dao

        this.index = this.index.bind(this)
        this.create = this.create.bind(this)
    }
    
    // index = async (req, res) => {
    async index(req, res){
        // console.log(this.dao)

        const cars = await Car.find()
        // console.log(cars)
        return res.json(cars)
        // return res.json({message: 'Cars...'}) //Teste
    }

    async create(req, res) {
    // create = async (req, res) => {
        const car = await this.dao.create(req.body)
        return res.status(201).json(car)
    }
}

module.exports = new CarsController(Car);
// module.exports = new CarsController(); //v1