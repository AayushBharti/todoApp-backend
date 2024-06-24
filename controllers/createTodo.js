//import the model
const Todo = require("../models/Todo");

//define route handler
exports.createTodo = async (req, res) => {
  try {
    //extract title and description from request body
    const { title, description } = req.body;
    //create a new Todo Obj and insert in DB
    const response = await Todo.create({ title, description });
    //send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry created successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};

// res.status(500): Use this to indicate that there was a server-side error.
// res.status(200): Use this to indicate that the request was successfully processed.
