const express = require("express")

const serve = express()
const routes = require("./Routes/index.js")
const bodyParser = require('body-parser')
const cors = require('cors')

serve.name = "Angular"


serve.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
serve.use(bodyParser.json({ limit: '50mb' }))
serve.use(cors({
    origin: ['http://localhost:4200'],
    methods: [ 'GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'], 
  }))

serve.use("/", routes)
serve.use((err, req, res, next)=>{
    const status = err.status || 500
    const message = err.message || err
    console.log(err)
    res.status(status).send(message)
})

module.exports = serve