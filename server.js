//Require json file with menu items
const foodItems = require('./data/menu.json')

let express = require('express')
let cors = require('cors')
let app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send(foodItems)
})

app.listen(3000, () => {
    console.log("The server started on 3000")
})