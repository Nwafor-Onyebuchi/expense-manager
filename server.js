const express = require('express')
const dotenv = require('dotenv')
const transactions = require('./routes/transactions')
const connectDB =require('./config/db')

dotenv.config({
    path: './config/config.env'
})

connectDB()
const app = express();

app.use('/api/v1/transactions', transactions)

const PORT = process.env.PORT || 5000

app.listen(PORT,  ()=>console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))