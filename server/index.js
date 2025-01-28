const express = require('express')
const fs = require('node:fs')

const app = express()

app.get('/', (req, res) => {
    res.status(200)
})

// app.post('/', (req, res) => {

// })

// app.update('/:id', (req, res) => {

// })

// app.delete('/:id', (req, res) => {

// })

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running at port:${PORT}`)
})