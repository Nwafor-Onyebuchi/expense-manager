const express = require('express')
const dotenv = require('dotenv')
const transactions = require('./routes/transactions')
const connectDB =require('./config/db')
const bodyParser = require('body-parser')
dotenv.config({
    path: './config/config.env'
})

connectDB()
const app = express();
app.use(express.json())

app.use('/api/v1/transactions', transactions)

const PORT = process.env.PORT || 8080

app.listen(PORT,  ()=>console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))