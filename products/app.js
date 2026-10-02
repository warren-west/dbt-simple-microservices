require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3002

// import routes
const productRouter = require('./routes/products')

// middleware
app.use(express.json())

// attach routes
app.use('/', productRouter)

// start the server
app.listen(port, () => {
    console.log(`Products microservice is listening on port ${port}...`)
})