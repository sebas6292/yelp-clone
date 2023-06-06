require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))

app.use((req, res, next) => {
    console.log('middleware works')
    next()
})
app.use(express.json())
// GET ALL Restaurants
app.get('/api/v1/restaurants', (req, res) => {
    console.log('im here')
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

    res.status(200).json({
        status: 'success',
        data: {
            restaurant: 'mcdonalds'
        },
    })
})

// Create a Restaurant 
app.post('/api/v1/restaurants', (req, res) => {
    console.log(req.body)

    res.status(201).json({
        status: 'success',
        data: {
            restaurant: 'mcdonalds'
        },
    })
})

//update restaurant 
app.put('/api/v1/restaurants/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)

    res.status(200).json({
        status: 'success',
        data: {
            restaurant: 'mcdonalds'
        },
    })
})

app.delete('/api/v1/restaurants/:id', (req, res) => {
    res.status(404).json({
        status: 'success',
    })
})

const port = process.env.PORT || 4001

app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`)
})