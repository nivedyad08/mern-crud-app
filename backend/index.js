const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crudapp")

const userRoute = require('./routes/userRoute')
app.use("/user", userRoute)

const port = 3000
app.listen(port, () => {
    console.log('Server is running on port', port);
})



