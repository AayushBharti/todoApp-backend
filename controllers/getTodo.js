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

exports.getTodoById = async (req, res) => {
  try {
    //extract on basis on id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    //data for given id not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No data foutn with the given id",
      });
    }
    //data found
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data succesfully fetched`,
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
