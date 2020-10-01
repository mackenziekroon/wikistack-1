const express = require('express')
const app = express()
const bodyParser = require('body-parser')



app.use(express.static('public'))

//app.use(express.urlencoded({extended: true}))

app.use(bodyParser.json()); 

// for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 



app.get('/', (req, res, next) => {
    res.send("Hello world")
}) 