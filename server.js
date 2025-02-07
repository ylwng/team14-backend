// barebones server thing from expressJS docs
// https://expressjs.com/en/starter/hello-world.html
// run 'node server.js' from terminal to start


const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('Hello Team 14!')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})