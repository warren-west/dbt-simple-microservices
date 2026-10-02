const express = require('express')
const app = express()

// middleware
app.use(express.json())

// attach routes
app.get('/', (req, res) => {
    const USERS = [
        { id: 1, fullname: "Warren West", age: 32, isMarried: true },
        { id: 2, fullname: "Clark Kent", age: 25, isMarried: false },
        { id: 3, fullname: "Bruce Wayne", age: 37, isMarried: false },
    ]

    res.json(USERS)
    return
})

// start the server
app.listen(3001, () => {
    console.log('Users server is listening on port 3001...')
})