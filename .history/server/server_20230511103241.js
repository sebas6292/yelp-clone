require('dotenv').config()
const express = require('express')

const app = express()

app.get('/api/v1/restaurants', (req, res) => {
    res.status(200).json({
        status: 'success', 
        data: {
            restaurant: ['mcdonalds', 'wendys'],
        },
    })
})

const port = process.env.PORT || 4001

app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`)
})