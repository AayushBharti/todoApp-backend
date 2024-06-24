const express = require("express");
//instantiating server
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for todo API
const todoRoutes = require("./routes/todos");
//mount the todo apis routes
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT, () => {
  console.log(`Server started succesfully at ${PORT}`);
});


//connect to the DB
const dbConnect = require("./config/database");
//whatever the database exports, it can be now accessed by dbConnect
dbConnect();

//default route
app.get("/",(req,res)=>{
  res.send(`<h1>This is HomePage </h1>`)
})