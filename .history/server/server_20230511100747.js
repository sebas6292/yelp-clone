const express = require('express')

const app = express()

const port = 3000

app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`)
})