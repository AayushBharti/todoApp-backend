//import the model
const Todo = require("../models/Todo");

//define route handler
exports.getTodo = async (req, res) => {
  try {
    //fetch all todos from db
    const todos = await Todo.find({});

    //response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire todo data is fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};
