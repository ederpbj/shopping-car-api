const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()
const routes = require('./routes')
const PORT = process.env.PORT || 4000

// Configurando mongo
mongoose.connect('mongodb://localhost/shoppingcar', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

app.use(cors())

// Tratar json
app.use(express.json())
// rotas
app.use(routes)
// Guardar variável porta, para setar servidor
app.set('PORT', PORT)

module.exports = app;