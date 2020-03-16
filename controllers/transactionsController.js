const Transaction = require("../models/Transaction");

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (err) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: "Sever error"
    });
  }
};

exports.addTransactions = async (req, res, next) => {
  try {
    const { naration, amount } = req.body;
    const transaction = await Transaction.create(req.body);
    res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(400).json({
        success: false,
        error: "Server error"
      });
    }
  }
};

exports.deleteTransactions = async (req, res, next) => {
  try {
    const id = req.params.id;
    const transaction = await Transaction.findById(id);

    if (!transaction) {
      return res.status(404).jason({
        success: false,
        error: "Tranaction not found"
      });
    }

    await transaction.remove();

    res.status(200).json({
      success: true,
      data: {
        message: `Transaction with ID ${id} successfully deleted`
      }
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: "Server error"
    });
  }
};
