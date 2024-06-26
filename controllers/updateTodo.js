//import the model
const Todo = require("../models/Todo");

//define route handler
exports.updateTodo = async (req, res) => {
  try {
    // const id = req.params.id; another way
    const { id } = req.params;
    const { title, description } = req.body;

    //findByIdAndUpdate(which id, what u want to update)
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );

    res.status(200).json({
      success: true,
      data: todo,
      message: "updated successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "not updated",
    });
  }
};
