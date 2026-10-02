const express = require('express')
const app = express()
const proxy = require('express-http-proxy')
// const cors = require('cors')

// middleware
app.use(express.json())

// attach routes
app.use('/users', proxy('http://localhost:3001'))
app.use('/products', proxy('http://localhost:3002'))

// start the server
app.listen(3000, () => {
    console.log('Gateway server is listening on port 3000...')
})