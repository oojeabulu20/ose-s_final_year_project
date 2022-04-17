const mongoose = require("mongoose");

const dbString = process.env.MONGO_URL;

const dbConnect = async () => {
  try {
    await mongoose.connect(dbString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("connected to database");
  } catch (error) {
    console.log("Couldn't connect to database");
    console.log(error);
  }
};

module.exports = dbConnect;
