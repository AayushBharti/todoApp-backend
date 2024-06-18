const mongoose = require("mongoose");

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
};