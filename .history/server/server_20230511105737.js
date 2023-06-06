require('dotenv').config()
const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('middleware works')
    next()
})
// GET ALL Restaurants
app.get('/api/v1/restaurants', (req, res) => {
    res.status(200).json({
        status: 'success', 
        data: {
            restaurant: ['mcdonalds', 'wendys'],
        },
    })
})

// GET A Single REstaurants
app.get('/api/v1/restaurants/:id', (req, res) => {
    console.log(req.params)
})

// Create a Restaurant 
app.post('/api/v1/restaurants', (req, res) => {
    console.log(req)
})

const port = process.env.PORT || 4001

app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`)
})