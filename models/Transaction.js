const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    naration: {
        type: String,
        trim: true,
        required: [true, 'Please add a transaction']
    },
    amount: {
        type: Number,
        required: [true, 'Please add a positive number (income) or negative number(expense)']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }, 
})

module.exports = mongoose.model('Transaction', TransactionSchema)