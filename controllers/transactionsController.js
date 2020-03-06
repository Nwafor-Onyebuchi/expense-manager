exports.getTransactions = (req, res, next) => {
    res.send('Get transactions ')
}

exports.addTransactions = (req, res, next) => {
    res.send('Transaction added successfully')
}
exports.deleteTransactions = (req, res, next) => {
    const id = req.params.id
    res.send(`transaction with ID ${id} was successfully deleted`)
}