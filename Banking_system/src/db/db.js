const mongoose = require("mongoose");

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database are connected sucessfully");
  } catch (err) {
    console.log("Database are not connect , This is the error: ", err);
    process.exit(1);
  }
}

module.exports = connectDb;
