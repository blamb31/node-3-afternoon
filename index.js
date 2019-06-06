const express = require('express')
const app = express()
const massive = require('massive')
require('dotenv').config()
let PC = require('./controllers/productsController')


const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`Listening on Port: ${SERVER_PORT}`)
    })    
    
}).catch(err => console.log(err))

app.use(express.json())

app.get('/api/products', PC.getAll)
app.get('/api/products/:id', PC.getOne)
app.put('/api/products/:id', PC.update)
app.post('/api/products', PC.create)
app.delete('/api/products/:id', PC.delete)




