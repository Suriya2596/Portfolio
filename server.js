const mongoose = require("mongoose")
const express = require("express")
const cros = require("cors")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 3066

const configDB = require("./config/database")
configDB()

const routes = require("./config/routes")

app.use(cros())
app.use(express.json())
app.use(routes)


app.listen(PORT,()=>{
    console.log('Port is running on',PORT)
})
