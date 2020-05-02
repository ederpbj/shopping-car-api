class CarsController {
    index(req, res){
        return res.json({message: 'Cars...'})
    }
}

module.exports = new CarsController();