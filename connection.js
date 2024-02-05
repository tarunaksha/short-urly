const mongoose = require("mongoose");

async function connectToMongoDB(url) {
  return mongoose.connect(url)
    .then(() => {
      console.log("MongoDB connection successful");
    })
}

module.exports = {
  connectToMongoDB,
}
