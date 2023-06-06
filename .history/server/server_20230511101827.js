require('dotenv').config()
const express = require('express')

const app = express()

app.get('/getRestaurants', (req, res) => {
    console.log('get all restaurants')
})

console.log('test')

const port = process.env.PORT || 4001

app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`)
})