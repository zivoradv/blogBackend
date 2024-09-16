const dotenv = require("dotenv").config()
const express = require("express")
const mongoose = require('mongoose')
const blogRoute = require('./Routes/blogRoute')
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json())

app.use("/api", blogRoute)

const PORT = process.env.PORT || 5000

mongoose
    .connect("mongodb+srv://zivorad:123@cluster0.pf2r2iy.mongodb.net/Blog?retryWrites=true&w=majority")
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`) 
        })
    })
    .catch((error) => 
        console.log(error)
    ) 
    

