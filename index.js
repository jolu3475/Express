const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

app.use(express.json())
app.use(morgan('dev'))

const PORT = process.env.PORT

app.listen(3000,()=>{
    console.log(`Server is running on port ${PORT}`.bgBlack.green)
})

app.get('/', (req, res) => {
    res.send('Here we go')
})
