require('dotenv').config()
const express = require('express')

const app = express()

app.get('/getRestaurants', (req, res) => {
    res.status(404).json({
        status: 'success', 
        restaurant: 'mcdonalds'
    })
})

const port = process.env.PORT || 4001

app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`)
})