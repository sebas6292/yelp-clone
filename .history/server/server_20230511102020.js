require('dotenv').config()
const express = require('express')

const app = express()

app.get('/getRestaurants', (req, res) => {
    res.send('these are the restaurants')
})

const port = process.env.PORT || 4001

app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`)
})