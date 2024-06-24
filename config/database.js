const mongoose = require("mongoose");

require("dotenv").config();
//whatever we defined in .env file,
//all will be loaded in process object

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected succesfully"))
    .catch((error) => {
      console.log("Issue in DB connection");
      console.log(error.message);
      process.exit(1);
      // instructs Node.js to terminate the process synchronously 
      //with an exit status of 1.
      //0: Indicates that the process completed successfully
      // without any errors.
    });
};

module.exports = dbConnect;
